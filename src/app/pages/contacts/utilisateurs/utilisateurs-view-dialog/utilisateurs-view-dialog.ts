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
import { RoleService } from '@/services/role/role.service';
import { UpdateUserDto, UserService } from '@/services/users/users.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { UsineService } from '@/services/usine/usine.service';

type DialogMode = 'create' | 'edit';

type RoleOption = {
  label: string;
  value: string;
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
  private readonly staffRoles = ['admin', 'manager', 'comptable', 'agent_vente', 'employe'];

  availableRoles: RoleOption[] = [];
  private rolesLoaded = false;

  model: UserDialogForm = this.getDefaultModel();

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private usineContext: UsineContextService,
    private usineService: UsineService
  ) {}

  ngOnInit(): void {
    this.loadRoles();
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
    this.formError = null;

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
    this.formError = null;
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
          { label: 'Admin', value: 'admin' },
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
            password: '',
            password_confirmation: '',
          };
          this.onTypeChange();
        } else {
          this.formError = 'Impossible de charger cet utilisateur.';
        }
        this.loading = false;
      },
      error: (error) => {
        this.formError = this.extractErrorMessage(error, 'Erreur lors du chargement de l utilisateur.');
        this.loading = false;
      },
    });
  }

  private createUser(): void {
    const currentUsineId = this.usineContext.currentUsineId();
    if (currentUsineId === null) {
      this.formError = 'Veuillez selectionner une usine avant de creer un utilisateur.';
      return;
    }

    this.saving = true;

    const payload: CreateUserDto = {
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
          this.formError = response.message || 'Creation impossible.';
          this.saving = false;
          return;
        }

        const user = response.data;
        this.usineService.assignUser(currentUsineId, { user_id: user.id, role: payload.role || undefined }).subscribe({
          next: () => {
            this.saving = false;
            this.userSaved.emit({ user, mode: 'create' });
            this.close();
          },
          error: (error) => {
            this.formError = this.extractErrorMessage(error, "Utilisateur cree mais assignation d usine impossible.");
            this.saving = false;
          },
        });
      },
      error: (error) => {
        this.formError = this.extractErrorMessage(error, 'Erreur lors de la creation de l utilisateur.');
        this.saving = false;
      },
    });
  }

  private updateUser(): void {
    if (!this.userId) {
      this.formError = 'Utilisateur introuvable.';
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
          this.saving = false;
          this.userSaved.emit({ user: response.data, mode: 'edit' });
          this.close();
          return;
        }
        this.formError = response.message || 'Modification impossible.';
        this.saving = false;
      },
      error: (error) => {
        this.formError = this.extractErrorMessage(error, 'Erreur lors de la modification de l utilisateur.');
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
      if (!this.model.password.trim() || !this.model.password_confirmation.trim()) {
        this.formError = 'Le mot de passe et sa confirmation sont obligatoires.';
        return false;
      }

      if (this.model.password.length < 8) {
        this.formError = 'Le mot de passe doit contenir au moins 8 caracteres.';
        return false;
      }

      if (this.model.password !== this.model.password_confirmation) {
        this.formError = 'La confirmation du mot de passe est invalide.';
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

  private extractErrorMessage(error: any, fallback: string): string {
    const apiMessage = error?.error?.message;
    if (apiMessage && typeof apiMessage === 'string') {
      return apiMessage;
    }

    const firstValidationError = Object.values(error?.error?.errors || {})[0];
    if (Array.isArray(firstValidationError) && firstValidationError[0]) {
      return String(firstValidationError[0]);
    }

    return fallback;
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
      password: '',
      password_confirmation: '',
    };
  }

  private applyCreateDefaults(): void {
    if (this.mode !== 'create') return;

    if (!this.model.type) {
      this.model.type = this.userTypeOptions[0]?.value ?? 'staff';
    }

    if (this.model.type !== 'staff') {
      this.model.role = this.model.type;
      return;
    }

    if (!this.model.role) {
      this.model.role = this.getFirstStaffRoleValue();
    }
  }

  private getFirstStaffRoleValue(): string {
    const firstStaffRole = this.availableRoles.find((role) => this.staffRoles.includes(role.value));
    if (firstStaffRole) return firstStaffRole.value;
    return this.staffRoles[0] ?? 'admin';
  }

  private resetState(): void {
    this.loading = false;
    this.saving = false;
    this.submitted = false;
    this.formError = null;
    this.phonePrefixError = null;
    this.loadedUser = null;
    this.model = this.getDefaultModel();
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
