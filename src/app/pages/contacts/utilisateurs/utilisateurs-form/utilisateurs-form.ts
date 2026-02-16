import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { parsePhoneNumber, CountryCode, isValidPhoneNumber } from 'libphonenumber-js';
import { User } from '@/models/user.model';
import { COUNTRIES } from '@/models/country.model';
import { RoleService } from '@/services/role/role.service';

export interface UserFormData {
  nom?: string;
  prenom?: string;
  phone?: string;
  email?: string | null;
  pays?: string;
  code_pays?: string;
  code_phone_pays?: string;
  ville?: string;
  quartier?: string;
  password?: string;
  password_confirmation?: string;
  role?: string;
  reference?: string;
}

@Component({
  selector: 'app-utilisateurs-form',
  standalone: true,
  templateUrl: './utilisateurs-form.html',
  styleUrl: './utilisateurs-form.scss',
  imports: [
    CommonModule,
    Select,
    InputText,
    ButtonModule,
    RippleModule,
    FormsModule,
    PasswordModule
  ],
})
export class UtilisateursForm implements OnInit, OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() initialData: Partial<User> | null = null;
  @Input() loading = false;

  @Output() submitForm = new EventEmitter<UserFormData>();
  @Output() cancel = new EventEmitter<void>();

  submitted = false;
  isEditing = false;
  model: UserFormData = {};

  // Rôles disponibles
  availableRoles: { label: string; value: string }[] = [];

  // Validation du téléphone
  phoneError: string | null = null;
  phoneCountry: string = 'GN';

  // Validation du mot de passe
  passwordError: string | null = null;

  // Liste des pays pour le sélecteur
  countries = COUNTRIES;

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.loadRoles();
    this.initializeModel();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialData']) {
      const change = changes['initialData'];
      if (change.currentValue && Object.keys(change.currentValue).length > 0) {
        this.initializeModel();
      }
    }
  }

  private loadRoles() {
    this.roleService.getRoles().subscribe({
      next: (response) => {
        if (response.success) {
          this.availableRoles = response.data.map(r => ({
            label: r.role.name.charAt(0).toUpperCase() + r.role.name.slice(1),
            value: r.role.name
          }));
        }
      },
      error: () => {
        this.availableRoles = [
          { label: 'Admin', value: 'admin' },
          { label: 'Manager', value: 'manager' },
          { label: 'Employé', value: 'employe' },
        ];
      }
    });
  }

  private initializeModel() {
    if (this.initialData) {
      this.model = {
        nom: this.initialData.nom,
        prenom: this.initialData.prenom,
        phone: this.initialData.phone,
        email: this.initialData.email,
        pays: this.initialData.pays,
        code_pays: this.initialData.code_pays,
        code_phone_pays: this.initialData.code_phone_pays,
        ville: this.initialData.ville,
        quartier: this.initialData.quartier,
        role: this.initialData.roles?.[0],
        reference: this.initialData.reference,
      };
    } else {
      this.model = {};
    }

    if (this.mode === 'create' && !this.model.ville?.trim()) {
      this.model.ville = 'Conakry';
    }

    if (this.mode === 'create') {
      this.isEditing = true;
    } else if (this.mode === 'edit' && this.initialData) {
      this.isEditing = true;
    }

    if (this.model.code_pays) {
      this.phoneCountry = this.model.code_pays;
    } else if (this.model.phone) {
      this.detectPhoneCountry(this.model.phone);
    }

    this.submitted = false;
    this.phoneError = null;
    this.passwordError = null;
  }

  detectPhoneCountry(phone: string) {
    try {
      const phoneNumber = parsePhoneNumber(phone);
      if (phoneNumber && phoneNumber.country) {
        this.phoneCountry = phoneNumber.country;
      }
    } catch (error) {
      // Garder le pays par défaut
    }
  }

  validatePhone(): boolean {
    if (!this.model.phone?.trim()) {
      this.phoneError = 'Téléphone obligatoire.';
      return false;
    }

    try {
      const isValid = isValidPhoneNumber(this.model.phone, this.phoneCountry as CountryCode);

      if (!isValid) {
        this.phoneError = `Numéro invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }

      const phoneNumber = parsePhoneNumber(this.model.phone, this.phoneCountry as CountryCode);
      if (phoneNumber) {
        this.model.phone = phoneNumber.formatInternational();
        this.model.code_pays = this.phoneCountry;
        this.model.pays = this.getCountryName(this.phoneCountry);
        this.phoneError = null;
        return true;
      }

      this.phoneError = 'Format de numéro invalide.';
      return false;
    } catch (error) {
      this.phoneError = 'Format de numéro invalide.';
      return false;
    }
  }

  validatePassword(): boolean {
    if (this.mode === 'edit') {
      if (!this.model.password?.trim()) {
        this.passwordError = null;
        return true;
      }
    }

    if (this.mode === 'create' && !this.model.password?.trim()) {
      this.passwordError = 'Mot de passe obligatoire.';
      return false;
    }

    const password = this.model.password || '';

    if (password.length < 8) {
      this.passwordError = 'Le mot de passe doit contenir au moins 8 caractères.';
      return false;
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      this.passwordError = 'Le mot de passe doit contenir des majuscules et des minuscules.';
      return false;
    }

    if (!/[0-9]/.test(password)) {
      this.passwordError = 'Le mot de passe doit contenir au moins un chiffre.';
      return false;
    }

    if (this.model.password !== this.model.password_confirmation) {
      this.passwordError = 'Les mots de passe ne correspondent pas.';
      return false;
    }

    this.passwordError = null;
    return true;
  }

  getCountryName(code: string): string {
    const country = this.countries.find(c => c.code === code);
    return country ? country.name : code;
  }

  getSelectedCountryDialCode(): string {
    const country = this.countries.find(c => c.code === this.phoneCountry);
    return country ? country.dialCode : '';
  }

  onCountryChange() {
    if (this.model.phone) {
      this.validatePhone();
    }
  }

  onPhoneInput() {
    if (this.submitted) {
      this.validatePhone();
    }
  }

  onPhoneBlur() {
    if (this.model.phone?.trim()) {
      this.validatePhone();
    }
  }

  isValid(): boolean {
    if (!this.model.role) {
      return false;
    }

    const basicValidation = !!(
      this.model.nom?.trim() &&
      this.model.prenom?.trim() &&
      this.model.phone?.trim() &&
      this.model.ville?.trim() &&
      this.model.quartier?.trim()
    );

    if (!basicValidation) {
      return false;
    }

    if (!this.validatePhone()) {
      return false;
    }

    if (this.mode === 'create' && !this.validatePassword()) {
      return false;
    }

    return true;
  }

  enableEditing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
    this.submitted = false;
    this.phoneError = null;
    this.passwordError = null;
    this.initializeModel();
  }

  onSubmit() {
    this.submitted = true;

    if (!this.isValid()) {
      return;
    }

    this.submitForm.emit({ ...this.model });
  }

  onCancel() {
    this.cancel.emit();
  }

  get fieldsDisabled(): boolean {
    return (this.mode === 'edit' && !this.isEditing) || this.loading;
  }

  get formTitle(): string {
    if (this.mode === 'create') {
      return 'Créer un compte utilisateur';
    }

    const reference = this.model.reference?.trim();
    return reference
      ? `Modification compte utilisateur : ${reference}`
      : 'Modification compte utilisateur';
  }
}
