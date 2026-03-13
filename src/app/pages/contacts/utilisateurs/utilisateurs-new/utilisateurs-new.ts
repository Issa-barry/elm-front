import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { Select } from 'primeng/select';
import { Organisation } from '@/models/organisation.model';
import { CreateUserDto } from '@/models/user.model';
import { AuthService } from '@/services/auth/auth.service';
import { OrganisationService } from '@/services/organisations/organisation.service';
import { UserService } from '@/services/users/users.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { UtilisateursForm, UserFormData } from '../utilisateurs-form/utilisateurs-form';
import { COUNTRIES } from '@/models/country.model';

@Component({
  selector: 'app-utilisateurs-new',
  standalone: true,
  templateUrl: './utilisateurs-new.html',
  styleUrl: './utilisateurs-new.scss',
  providers: [MessageService],
  imports: [CommonModule, FormsModule, Select, ToastModule, MessageModule, UtilisateursForm],
})
export class UtilisateursNew implements OnInit {
  loading = false;
  selectedOrganisationId: number | null = null;
  organisationOptions: Array<{ label: string; value: number }> = [];
  isSuperAdmin = false;
  private currentUserOrganisationId: number | null = null;

  constructor(
    private authService: AuthService,
    private organisationService: OrganisationService,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
    public usineContext: UsineContextService
  ) {}

  ngOnInit(): void {
    this.initializeOrganisationContext();
  }

  onCancel() {
    this.router.navigate(['contacts/utilisateurs']);
  }

  get organisationSelectionDisabled(): boolean {
    if (this.loading) return true;
    if (this.organisationOptions.length === 0) return true;
    return !this.isSuperAdmin;
  }

  onSubmit(data: UserFormData) {
    const organisationId = this.resolveOrganisationIdForSubmit();
    if (organisationId === null) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Agence requise',
        detail: 'Veuillez selectionner une agence valide avant de creer un utilisateur.',
        life: 5000,
      });
      return;
    }

    if (this.usineContext.currentUsineId() === null) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Usine requise',
        detail: 'Veuillez sélectionner une usine avant de créer un utilisateur.',
        life: 5000,
      });
      return;
    }

    this.loading = true;

    const payload: CreateUserDto = {
      organisation_id: organisationId,
      nom: data.nom || '',
      prenom: data.prenom || '',
      email: data.email || undefined,
      phone: (data.normalized_phone || data.phone || '').replace(/\s+/g, ''),
      pays: data.pays || 'Guinée',
      code_pays: data.code_pays || 'GN',
      code_phone_pays: this.getCodePhonePays(data.code_pays || 'GN'),
      ville: data.ville || '',
      quartier: data.quartier || '',
      password: data.password || '',
      password_confirmation: data.password_confirmation || '',
      type: data.type ?? 'staff',
      role: data.role || '',
      civilite: data.civilite || undefined,
      date_naissance: data.date_naissance || undefined,
      piece_type: data.piece_type || undefined,
      piece_numero: data.piece_numero || undefined,
      piece_delivree_le: data.piece_delivree_le || undefined,
      piece_expire_le: data.piece_expire_le || undefined,
      piece_pays: data.piece_pays || undefined,
    };

    this.userService.createUserViaApi(payload).subscribe({
      next: (response) => {
        if (!response.success || !response.data?.id) {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: response.message || 'Utilisateur créé mais réponse invalide.',
          });
          this.loading = false;
          return;
        }
        const user = response.data;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Utilisateur créé avec succès.',
        });
        setTimeout(() => {
          this.router.navigate(['contacts/utilisateurs/edit', user.id]);
        }, 600);
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la création:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: this.getApiErrorDetail(error, "Erreur lors de la création de l'utilisateur"),
        });
        this.loading = false;
      },
    });
  }

  private getCodePhonePays(codeCountry: string): string {
    const country = COUNTRIES.find((c) => c.code === codeCountry);
    return country ? country.dialCode : '+224';
  }

  private initializeOrganisationContext(): void {
    this.isSuperAdmin = this.authService.hasAnyRole(['super_admin', 'super-admin']);
    this.currentUserOrganisationId = this.resolveCurrentUserOrganisationId();

    if (!this.isSuperAdmin) {
      if (this.currentUserOrganisationId !== null) {
        this.organisationOptions = [
          {
            value: this.currentUserOrganisationId,
            label: this.resolveCurrentUserOrganisationLabel(this.currentUserOrganisationId),
          },
        ];
        this.selectedOrganisationId = this.currentUserOrganisationId;
      } else {
        this.organisationOptions = [];
        this.selectedOrganisationId = null;
      }
      return;
    }

    this.organisationService.getAll().subscribe({
      next: (items) => {
        this.organisationOptions = items.map((item) => ({
          value: item.id,
          label: this.buildOrganisationLabel(item),
        }));
        this.applyOrganisationDefault();
      },
      error: () => {
        if (this.currentUserOrganisationId !== null) {
          this.organisationOptions = [
            {
              value: this.currentUserOrganisationId,
              label: this.resolveCurrentUserOrganisationLabel(this.currentUserOrganisationId),
            },
          ];
        } else {
          this.organisationOptions = [];
        }
        this.applyOrganisationDefault();
      },
    });
  }

  private applyOrganisationDefault(): void {
    if (!this.isSuperAdmin) {
      this.selectedOrganisationId = this.currentUserOrganisationId;
      return;
    }

    const selectedOrganisationId = this.coerceNumber(this.selectedOrganisationId);
    if (
      selectedOrganisationId !== null &&
      this.organisationOptions.some((option) => option.value === selectedOrganisationId)
    ) {
      this.selectedOrganisationId = selectedOrganisationId;
      return;
    }

    if (
      this.currentUserOrganisationId !== null &&
      this.organisationOptions.some((option) => option.value === this.currentUserOrganisationId)
    ) {
      this.selectedOrganisationId = this.currentUserOrganisationId;
      return;
    }

    this.selectedOrganisationId = this.organisationOptions[0]?.value ?? null;
  }

  private resolveOrganisationIdForSubmit(): number | null {
    if (!this.isSuperAdmin) {
      return this.currentUserOrganisationId;
    }
    return this.coerceNumber(this.selectedOrganisationId);
  }

  private resolveCurrentUserOrganisationId(): number | null {
    const user = this.authService.currentUser() as Record<string, unknown> | null;
    if (!user) return null;

    const directId = this.coerceNumber(user['organisation_id']);
    if (directId !== null) return directId;

    const organisation = user['organisation'];
    if (organisation && typeof organisation === 'object') {
      return this.coerceNumber((organisation as Record<string, unknown>)['id']);
    }

    return null;
  }

  private resolveCurrentUserOrganisationLabel(fallbackId: number): string {
    const user = this.authService.currentUser() as Record<string, unknown> | null;
    if (!user) return `Organisation #${fallbackId}`;

    const organisationName = user['organisation_name'];
    if (typeof organisationName === 'string' && organisationName.trim().length > 0) {
      return organisationName.trim();
    }

    const organisation = user['organisation'];
    if (organisation && typeof organisation === 'object') {
      const nom = (organisation as Record<string, unknown>)['nom'];
      const code = (organisation as Record<string, unknown>)['code'];
      if (typeof nom === 'string' && nom.trim().length > 0) {
        if (typeof code === 'string' && code.trim().length > 0) {
          return `${nom.trim()} (${code.trim()})`;
        }
        return nom.trim();
      }
    }

    return `Organisation #${fallbackId}`;
  }

  private buildOrganisationLabel(item: Organisation): string {
    if (item.code) {
      return `${item.nom} (${item.code})`;
    }
    return item.nom;
  }

  private coerceNumber(value: unknown): number | null {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === 'string') {
      const parsed = Number.parseInt(value, 10);
      return Number.isFinite(parsed) ? parsed : null;
    }

    return null;
  }

  private getApiErrorDetail(error: unknown, fallback: string): string {
    const httpError = error as { status?: number; error?: { message?: string } };

    if (httpError.status === 422) {
      return httpError.error?.message || fallback;
    }

    if (httpError.status === 500) {
      return 'Une erreur inattendue est survenue. Veuillez réessayer.';
    }

    const validationMessages = this.extractValidationMessages(error);
    if (validationMessages.length > 0) {
      return validationMessages.join('; ');
    }

    const apiMessage = this.extractApiMessage(error);
    if (apiMessage) {
      return apiMessage;
    }

    return fallback;
  }

  private extractApiMessage(error: unknown): string | null {
    const apiPayload = (error as { error?: unknown } | undefined)?.error;
    return this.findFirstMessageCandidate(apiPayload) ?? this.findFirstMessageCandidate(error);
  }

  private findFirstMessageCandidate(value: unknown): string | null {
    if (typeof value === 'string') {
      const parsedJson = this.parsePossibleJsonString(value);
      if (parsedJson !== null) {
        return this.findFirstMessageCandidate(parsedJson);
      }

      const trimmedValue = value.trim();
      if (!trimmedValue) return null;
      if (this.isLikelyHtmlPayload(trimmedValue)) return null;
      if (this.isLikelyHttpFailureMessage(trimmedValue)) return null;
      return trimmedValue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        const extracted = this.findFirstMessageCandidate(item);
        if (extracted) return extracted;
      }
      return null;
    }

    if (!value || typeof value !== 'object') {
      return null;
    }

    const record = value as Record<string, unknown>;
    const priorityKeys = ['message', 'error', 'detail', 'title', 'description'];

    for (const key of priorityKeys) {
      const extracted = this.findFirstMessageCandidate(record[key]);
      if (extracted) return extracted;
    }

    return null;
  }

  private parsePossibleJsonString(value: string): unknown | null {
    const trimmedValue = value.trim();
    if (!trimmedValue.startsWith('{') && !trimmedValue.startsWith('[')) {
      return null;
    }

    try {
      return JSON.parse(trimmedValue);
    } catch {
      return null;
    }
  }

  private isLikelyHtmlPayload(value: string): boolean {
    const normalized = value.toLowerCase();
    return normalized.includes('<!doctype html') || normalized.includes('<html');
  }

  private isLikelyHttpFailureMessage(value: string): boolean {
    return value.toLowerCase().startsWith('http failure response for');
  }

  private extractValidationMessages(error: unknown): string[] {
    const candidates = [
      (error as { error?: { errors?: unknown } } | undefined)?.error?.errors,
      (error as { error?: { error?: { errors?: unknown } } } | undefined)?.error?.error?.errors,
    ];

    for (const candidate of candidates) {
      const messages = this.flattenValidationMessages(candidate);
      if (messages.length > 0) {
        return messages;
      }
    }

    return [];
  }

  private flattenValidationMessages(errors: unknown): string[] {
    if (!errors) return [];

    if (Array.isArray(errors)) {
      return errors
        .flatMap((value) => this.flattenValidationMessages(value))
        .filter((message) => message.length > 0);
    }

    if (typeof errors === 'string') {
      const trimmedMessage = errors.trim();
      return trimmedMessage ? [trimmedMessage] : [];
    }

    if (typeof errors !== 'object') {
      return [];
    }

    return Object.values(errors as Record<string, unknown>)
      .flatMap((value) => this.flattenValidationMessages(value))
      .filter((message) => message.length > 0);
  }
}
