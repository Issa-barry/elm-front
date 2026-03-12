import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';

import { COUNTRIES } from '@/models/country.model';
import { Civilite, CIVILITE_LABELS, CreateUserDto, User, UserType } from '@/models/user.model';
import { Organisation } from '@/models/organisation.model';
import { AuthService } from '@/services/auth/auth.service';
import { OrganisationService } from '@/services/organisations/organisation.service';
import { RoleService } from '@/services/role/role.service';
import { UpdateUserDto, UserService } from '@/services/users/users.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { UsineService } from '@/services/usine/usine.service';

type DialogMode = 'create' | 'edit';

type RoleOption = {
  label: string;
  value: string;
};

type OrganisationOption = {
  label: string;
  value: number;
};

type UsineOption = {
  label: string;
  value: number;
};

type UserDialogResult = {
  user: User;
  mode: DialogMode;
};

type UserDialogForm = {
  nom: string;
  prenom: string;
  phone: string;
  email: string;
  code_pays: string;
  pays: string;
  ville: string;
  quartier: string;
  type: UserType;
  role: string;
  civilite: Civilite | null;
  date_naissance: string | null;
  organisation_id: number | null;
  usine_id: number | null;
  password: string;
  password_confirmation: string;
};

@Component({
  selector: 'app-utilisateurs-view-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, InputTextModule, PasswordModule, SelectModule],
  templateUrl: './utilisateurs-view-dialog.html',
  styleUrl: './utilisateurs-view-dialog.scss',
})
export class UtilisateursViewDialog implements OnInit, OnChanges {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() mode: DialogMode = 'edit';
  @Input() userId: number | null = null;
  @Output() userSaved = new EventEmitter<UserDialogResult>();

  loading = false;
  saving = false;
  submitted = false;
  formError: string | null = null;
  formErrors: string[] = [];
  phonePrefixError: string | null = null;
  loadedUser: User | null = null;

  readonly countries = COUNTRIES;
  readonly userTypeOptions: { label: string; value: UserType }[] = [
    { label: 'Staff', value: 'staff' },
    { label: 'Client', value: 'client' },
    { label: 'Prestataire', value: 'prestataire' },
    { label: 'Investisseur', value: 'investisseur' },
  ];
  readonly civiliteOptions: { label: string; value: Civilite }[] = (
    Object.entries(CIVILITE_LABELS) as [Civilite, string][]
  ).map(([value, label]) => ({ label, value }));
  private readonly staffRoles = ['admin_entreprise', 'manager', 'comptable', 'agent_vente', 'employe'];

  availableRoles: RoleOption[] = [];
  organisationOptions: OrganisationOption[] = [];
  usineOptions: UsineOption[] = [];
  currentUserOrganisationId: number | null = null;
  isSuperAdmin = false;
  private rolesLoaded = false;

  model: UserDialogForm = this.getDefaultModel();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private organisationService: OrganisationService,
    private roleService: RoleService,
    private usineContext: UsineContextService,
    private usineService: UsineService
  ) {}

  ngOnInit(): void {
    this.initializeOrganisationContext();
    this.loadRoles();
    this.loadUsineOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible'] && changes['visible'].currentValue === true) {
      this.openDialog();
    }
  }

  get dialogHeader(): string {
    if (this.mode === 'create') return 'Nouvel utilisateur';
    return this.loadedUser?.reference
      ? `Modifier utilisateur ${this.loadedUser.reference}`
      : 'Modifier utilisateur';
  }

  get isStaffType(): boolean {
    return this.model.type === 'staff';
  }

  get roleOptions(): RoleOption[] {
    if (!this.isStaffType) {
      return this.model.type
        ? [{ label: this.capitalize(this.model.type), value: this.model.type }]
        : [];
    }

    return this.availableRoles.filter((role) => this.staffRoles.includes(role.value));
  }

  onVisibleChange(nextVisible: boolean): void {
    if (!nextVisible) {
      this.resetState();
    }
    this.visibleChange.emit(nextVisible);
  }

  onDialogShow(): void {
    if (this.mode !== 'create') return;

    this.clearCreateSensitiveFields();
    setTimeout(() => this.clearCreateSensitiveFields(), 0);
  }

  onTypeChange(): void {
    if (this.model.type !== 'staff') {
      this.model.role = this.model.type;
      return;
    }

    if (this.model.role && this.staffRoles.includes(this.model.role)) {
      return;
    }

    this.model.role = this.mode === 'create' ? this.getFirstStaffRoleValue() : '';
  }

  onCountryChange(): void {
    this.model.pays = this.getCountryName(this.model.code_pays);
    if (this.model.phone.trim()) {
      this.validatePhonePrefixAndNormalize();
    }
  }

  onPhoneBlur(): void {
    if (!this.model.phone.trim()) {
      this.phonePrefixError = null;
      return;
    }

    this.validatePhonePrefixAndNormalize();
  }

  save(): void {
    this.submitted = true;
    this.setFormError(null);

    if (!this.isFormValid()) {
      return;
    }

    if (this.mode === 'create') {
      this.createUser();
      return;
    }

    this.updateUser();
  }

  close(): void {
    this.resetState();
    this.visibleChange.emit(false);
  }

  private openDialog(): void {
    this.submitted = false;
    this.setFormError(null);
    this.model = this.getDefaultModel();
    this.loadedUser = null;

    this.loadRoles();

    if (this.mode === 'edit' && this.userId) {
      this.loadUser(this.userId);
      return;
    }

    this.applyCreateDefaults();
    this.loading = false;
  }

  private loadUsineOptions(): void {
    this.usineService.getAll().subscribe({
      next: (response) => {
        if (response.success && Array.isArray(response.data)) {
          this.usineOptions = response.data.map((u) => ({
            label: u.code ? `${u.nom} (${u.code})` : u.nom,
            value: u.id,
          }));
        }
      },
      error: () => {
        // Fallback sur les usines accessibles du contexte
        this.usineOptions = this.usineContext.accessibleUsines().map((u) => ({
          label: u.code ? `${u.nom} (${u.code})` : u.nom,
          value: u.id,
        }));
      },
    });
  }

  private loadRoles(): void {
    if (this.rolesLoaded) return;

    this.roleService.getRoles().subscribe({
      next: (response) => {
        if (response.success) {
          this.availableRoles = response.data.map((roleData) => ({
            label: this.capitalize(roleData.role.name).replace(/_/g, ' '),
            value: roleData.role.name,
          }));
        }
        this.rolesLoaded = true;
        this.applyCreateDefaults();
      },
      error: () => {
        this.availableRoles = [
          { label: 'Admin Entreprise', value: 'admin_entreprise' },
          { label: 'Manager', value: 'manager' },
          { label: 'Comptable', value: 'comptable' },
          { label: 'Agent vente', value: 'agent_vente' },
          { label: 'Employe', value: 'employe' },
        ];
        this.rolesLoaded = true;
        this.applyCreateDefaults();
      },
    });
  }

  private loadUser(id: number): void {
    this.loading = true;
    this.userService.getUser(id).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.loadedUser = response.data;
          this.model = {
            nom: response.data.nom ?? '',
            prenom: response.data.prenom ?? '',
            phone: response.data.phone ?? '',
            email: response.data.email ?? '',
            code_pays: response.data.code_pays || 'GN',
            pays: response.data.pays || this.getCountryName(response.data.code_pays || 'GN'),
            ville: response.data.ville ?? '',
            quartier: response.data.quartier ?? '',
            type: response.data.type ?? 'staff',
            role:
              response.data.role_names?.[0] ||
              response.data.roles?.[0] ||
              (response.data.type === 'staff' ? '' : response.data.type),
            civilite: response.data.civilite ?? null,
            date_naissance: response.data.date_naissance ?? null,
            organisation_id: this.coerceNumber((response.data as { organisation_id?: unknown }).organisation_id),
            usine_id: this.usineContext.currentUsineId(),
            password: '',
            password_confirmation: '',
          };
          this.onTypeChange();
        } else {
          this.setFormError('Impossible de charger cet utilisateur.');
        }
        this.loading = false;
      },
      error: (error) => {
        this.setApiError(error, 'Erreur lors du chargement de l utilisateur.');
        this.loading = false;
      },
    });
  }

  private createUser(): void {
    if (this.usineContext.currentUsineId() === null) {
      this.setFormError('Veuillez selectionner une usine avant de creer un utilisateur.');
      return;
    }

    const organisationId = this.resolveOrganisationIdForCreate();
    if (organisationId === null) {
      this.setFormError('Veuillez selectionner une agence valide.');
      return;
    }

    this.saving = true;

    const payload: CreateUserDto = {
      organisation_id: organisationId,
      nom: this.model.nom.trim(),
      prenom: this.model.prenom.trim(),
      phone: this.normalizePhone(this.model.phone),
      email: this.model.email.trim() || undefined,
      pays: this.model.pays,
      code_pays: this.model.code_pays,
      code_phone_pays: this.getCodePhonePays(this.model.code_pays),
      ville: this.model.ville.trim(),
      quartier: this.model.quartier.trim(),
      password: this.model.password,
      password_confirmation: this.model.password_confirmation,
      type: this.model.type,
      role: this.model.role,
      civilite: this.model.civilite ?? undefined,
      date_naissance: this.model.date_naissance || undefined,
    };

    this.userService.createUserViaApi(payload).subscribe({
      next: (response) => {
        if (!response.success || !response.data?.id) {
          this.setFormError(response.message || 'Creation impossible.');
          this.saving = false;
          return;
        }

        const createdUser = response.data;
        const usineId = this.model.usine_id;

        if (usineId !== null) {
          this.usineService.assignUser(usineId, { user_id: createdUser.id }).subscribe({
            next: () => {
              this.saving = false;
              this.userSaved.emit({ user: createdUser, mode: 'create' });
              this.close();
            },
            error: () => {
              // Utilisateur créé mais assignation échouée — on continue quand même
              this.saving = false;
              this.userSaved.emit({ user: createdUser, mode: 'create' });
              this.close();
            },
          });
        } else {
          this.saving = false;
          this.userSaved.emit({ user: createdUser, mode: 'create' });
          this.close();
        }
      },
      error: (error) => {
        this.setApiError(error, 'Erreur lors de la creation de l utilisateur.');
        this.saving = false;
      },
    });
  }

  private updateUser(): void {
    if (!this.userId) {
      this.setFormError('Utilisateur introuvable.');
      return;
    }

    this.saving = true;
    const payload: UpdateUserDto = {
      nom: this.model.nom.trim(),
      prenom: this.model.prenom.trim(),
      phone: this.normalizePhone(this.model.phone),
      email: this.model.email.trim() || undefined,
      pays: this.model.pays,
      code_pays: this.model.code_pays,
      code_phone_pays: this.getCodePhonePays(this.model.code_pays),
      ville: this.model.ville.trim(),
      quartier: this.model.quartier.trim(),
      type: this.model.type,
      role: this.model.role,
      civilite: this.model.civilite ?? null,
      date_naissance: this.model.date_naissance || null,
    };

    this.userService.updateUser(this.userId, payload).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const updatedUser = response.data;
          const usineId = this.model.usine_id;

          if (usineId !== null && this.userId) {
            this.usineService.assignUser(usineId, { user_id: this.userId }).subscribe({
              next: () => {
                this.saving = false;
                this.userSaved.emit({ user: updatedUser, mode: 'edit' });
                this.close();
              },
              error: () => {
                this.saving = false;
                this.userSaved.emit({ user: updatedUser, mode: 'edit' });
                this.close();
              },
            });
          } else {
            this.saving = false;
            this.userSaved.emit({ user: updatedUser, mode: 'edit' });
            this.close();
          }
          return;
        }
        this.setFormError(response.message || 'Modification impossible.');
        this.saving = false;
      },
      error: (error) => {
        this.setApiError(error, 'Erreur lors de la modification de l utilisateur.');
        this.saving = false;
      },
    });
  }

  private isFormValid(): boolean {
    this.phonePrefixError = null;

    const requiredMissing =
      !this.model.nom.trim() ||
      !this.model.prenom.trim() ||
      !this.model.phone.trim() ||
      !this.model.code_pays ||
      !this.model.ville.trim() ||
      !this.model.quartier.trim() ||
      !this.model.type ||
      !this.model.role;

    if (requiredMissing) {
      return false;
    }

    if (!this.validatePhonePrefixAndNormalize()) {
      return false;
    }

    if (this.mode === 'create') {
      if (this.resolveOrganisationIdForCreate() === null) {
        this.setFormError('Veuillez selectionner une agence valide.');
        return false;
      }

      if (!this.model.password.trim() || !this.model.password_confirmation.trim()) {
        this.setFormError('Le mot de passe et sa confirmation sont obligatoires.');
        return false;
      }

      if (this.model.password.length < 8) {
        this.setFormError('Le mot de passe doit contenir au moins 8 caracteres.');
        return false;
      }

      if (this.model.password !== this.model.password_confirmation) {
        this.setFormError('La confirmation du mot de passe est invalide.');
        return false;
      }
    }

    return true;
  }

  private getCodePhonePays(codeCountry: string): string {
    const country = COUNTRIES.find((c) => c.code === codeCountry);
    return country ? country.dialCode : '+224';
  }

  private getCountryName(codeCountry: string): string {
    const country = COUNTRIES.find((c) => c.code === codeCountry);
    return country ? country.name : 'Guinee';
  }

  private normalizePhone(phone: string): string {
    return (phone || '').replace(/[^\d+]/g, '');
  }

  get additionalFormErrors(): string[] {
    if (this.formErrors.length === 0) return [];
    if (this.formError && this.formErrors[0] === this.formError) {
      return this.formErrors.slice(1);
    }
    return this.formErrors;
  }

  private capitalize(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  private getDefaultModel(): UserDialogForm {
    const firstType = this.userTypeOptions[0]?.value ?? 'staff';

    return {
      nom: '',
      prenom: '',
      phone: '',
      email: '',
      code_pays: 'GN',
      pays: this.getCountryName('GN'),
      ville: 'Conakry',
      quartier: '',
      type: firstType,
      role: '',
      civilite: null,
      date_naissance: null,
      organisation_id: null,
      usine_id: null,
      password: '',
      password_confirmation: '',
    };
  }

  private applyCreateDefaults(): void {
    if (this.mode !== 'create') return;

    if (!this.model.type) {
      this.model.type = this.userTypeOptions[0]?.value ?? 'staff';
    }

    if (this.currentUserOrganisationId !== null) {
      this.model.organisation_id = this.currentUserOrganisationId;
    }

    if (this.model.usine_id === null) {
      const currentId = this.usineContext.currentUsineId();
      if (currentId !== null) {
        this.model.usine_id = currentId;
      }
    }

    if (this.isSuperAdmin && this.model.organisation_id === null && this.organisationOptions.length > 0) {
      this.model.organisation_id = this.organisationOptions[0]!.value;
    }

    if (this.model.type !== 'staff') {
      this.model.role = this.model.type;
      return;
    }

    if (!this.model.role) {
      this.model.role = this.getFirstStaffRoleValue();
    }
  }

  private clearCreateSensitiveFields(): void {
    this.model.email = '';
    this.model.password = '';
    this.model.password_confirmation = '';
  }

  private initializeOrganisationContext(): void {
    this.currentUserOrganisationId = this.resolveCurrentUserOrganisationId();
    this.isSuperAdmin = this.authService.hasAnyRole(['super_admin', 'super-admin']);

    if (this.isSuperAdmin) {
      this.loadOrganisationOptionsForSuperAdmin();
      return;
    }

    if (this.currentUserOrganisationId !== null) {
      this.organisationOptions = [
        {
          value: this.currentUserOrganisationId,
          label: this.resolveCurrentUserOrganisationLabel(this.currentUserOrganisationId),
        },
      ];
      this.model.organisation_id = this.currentUserOrganisationId;
    }
  }

  private loadOrganisationOptionsForSuperAdmin(): void {
    this.organisationService.getAll().subscribe({
      next: (items) => {
        this.organisationOptions = items.map((item) => ({
          value: item.id,
          label: this.buildOrganisationLabel(item),
        }));

        if (this.model.organisation_id === null) {
          if (
            this.currentUserOrganisationId !== null &&
            this.organisationOptions.some((option) => option.value === this.currentUserOrganisationId)
          ) {
            this.model.organisation_id = this.currentUserOrganisationId;
          } else {
            this.model.organisation_id = this.organisationOptions[0]?.value ?? null;
          }
        }
      },
      error: () => {
        if (this.currentUserOrganisationId !== null) {
          this.organisationOptions = [
            {
              value: this.currentUserOrganisationId,
              label: this.resolveCurrentUserOrganisationLabel(this.currentUserOrganisationId),
            },
          ];
          this.model.organisation_id = this.currentUserOrganisationId;
        } else {
          this.organisationOptions = [];
          this.model.organisation_id = null;
        }
      },
    });
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
      const parsedValue = Number.parseInt(value, 10);
      return Number.isFinite(parsedValue) ? parsedValue : null;
    }

    return null;
  }

  private resolveOrganisationIdForCreate(): number | null {
    if (!this.isSuperAdmin) {
      return this.currentUserOrganisationId;
    }

    return this.coerceNumber(this.model.organisation_id);
  }

  private getFirstStaffRoleValue(): string {
    const firstStaffRole = this.availableRoles.find((role) => this.staffRoles.includes(role.value));
    if (firstStaffRole) return firstStaffRole.value;
    return this.staffRoles[0] ?? 'admin_entreprise';
  }

  private resetState(): void {
    this.loading = false;
    this.saving = false;
    this.submitted = false;
    this.setFormError(null);
    this.phonePrefixError = null;
    this.loadedUser = null;
    this.model = this.getDefaultModel();
  }

  private setFormError(message: string | null, details: string[] = []): void {
    this.formError = message;
    this.formErrors = details;
  }

  private setApiError(error: unknown, fallback: string): void {
    const httpError = error as { status?: number; error?: { message?: string } };

    if (httpError.status === 422) {
      this.setFormError(httpError.error?.message || fallback);
      return;
    }

    if (httpError.status === 500) {
      this.setFormError('Une erreur inattendue est survenue. Veuillez réessayer.');
      return;
    }

    const validationMessages = this.extractValidationMessages(error);
    if (validationMessages.length > 0) {
      this.setFormError(validationMessages[0], validationMessages);
      return;
    }

    const apiMessage = this.extractApiMessage(error);
    if (apiMessage) {
      this.setFormError(apiMessage);
      return;
    }

    this.setFormError(fallback);
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

  private validatePhonePrefixAndNormalize(): boolean {
    const rawPhone = this.model.phone || '';
    const selectedDialCode = this.getCodePhonePays(this.model.code_pays);
    const selectedCountry = this.getCountryName(this.model.code_pays);
    const selectedDialDigits = selectedDialCode.replace('+', '');

    let sanitized = rawPhone.trim().replace(/[^\d+]/g, '');

    if (sanitized.startsWith('00')) {
      sanitized = `+${sanitized.slice(2)}`;
    }

    if (!sanitized) {
      this.phonePrefixError = 'Telephone obligatoire.';
      return false;
    }

    if (sanitized.startsWith('+')) {
      if (!sanitized.startsWith(selectedDialCode)) {
        const detectedCountry = COUNTRIES.find(
          (country) => country.code !== this.model.code_pays && sanitized.startsWith(country.dialCode)
        );

        this.phonePrefixError = detectedCountry
          ? `Le numero commence par ${detectedCountry.dialCode} (${detectedCountry.name}) mais le pays selectionne est ${selectedCountry} (${selectedDialCode}).`
          : `Le numero doit commencer par ${selectedDialCode} pour le pays selectionne (${selectedCountry}).`;
        return false;
      }

      this.model.phone = sanitized;
      this.phonePrefixError = null;
      return true;
    }

    if (sanitized.startsWith(selectedDialDigits)) {
      this.model.phone = `+${sanitized}`;
      this.phonePrefixError = null;
      return true;
    }

    const detectedWithoutPlus = COUNTRIES.find((country) => {
      if (country.code === this.model.code_pays) return false;
      const dialDigits = country.dialCode.replace('+', '');
      return sanitized.startsWith(dialDigits);
    });

    if (detectedWithoutPlus) {
      this.phonePrefixError = `Le numero commence par ${detectedWithoutPlus.dialCode} (${detectedWithoutPlus.name}). Selectionnez ce pays ou corrigez le prefixe.`;
      return false;
    }

    this.model.phone = `${selectedDialCode}${sanitized}`;
    this.phonePrefixError = null;
    return true;
  }
}
