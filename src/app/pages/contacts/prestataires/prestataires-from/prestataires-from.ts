import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { parsePhoneNumber, CountryCode, isValidPhoneNumber } from 'libphonenumber-js';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputText } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { Select } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import { COUNTRIES } from '@/models/country.model';
import { Prestataire, PRESTATAIRE_TYPES } from '@/models/prestataire.model';

@Component({
  selector: 'app-prestataires-from',
  standalone: true,
  imports: [CommonModule, Select, InputText, TextareaModule, FileUploadModule, ButtonModule, InputGroupModule, RippleModule, FormsModule],
  templateUrl: './prestataires-from.html',
  styleUrl: './prestataires-from.scss',
})
export class PrestatairesFrom implements OnInit, OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() initialData: Partial<Prestataire> | null = null;
  @Input() loading = false;

  @Output() submitForm = new EventEmitter<Partial<Prestataire>>();
  @Output() cancel = new EventEmitter<void>();

  submitted = false;
  isEditing = false;
  model: Partial<Prestataire> = {};
  type_piece_identite: Array<{ name: string; code: string }> = [];
  prestataireTypes = PRESTATAIRE_TYPES;
  phoneError: string | null = null;
  phoneCountry = 'GN';
  countries = COUNTRIES;

  ngOnInit() {
    this.type_piece_identite = [
      { name: "Carte d'identite", code: 'CI' },
      { name: 'Passeport', code: 'PASSPORT' },
      { name: 'Permis de conduire', code: 'PERMIS' },
    ];
    this.initializeModel();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialData']) {
      const nextValue = changes['initialData'].currentValue;
      if (nextValue && Object.keys(nextValue).length > 0) {
        this.initializeModel();
      }
    }
  }

  private initializeModel() {
    this.model = this.initialData ? { ...this.initialData } : {};

    if (this.mode === 'create' && !this.model.ville?.trim()) {
      this.model.ville = 'Conakry';
    }

    // En edition, l'ecran s'ouvre en lecture seule.
    // L'utilisateur active la modification via le bouton "Modifier".
    this.isEditing = this.mode === 'create';

    if (this.model.code_pays) {
      this.phoneCountry = this.model.code_pays;
    } else if (this.model.phone) {
      this.detectPhoneCountry(this.model.phone);
    }

    this.model.phone = this.extractLocalPhone(this.model.phone, this.phoneCountry);
    this.model.code_pays = this.phoneCountry;
    this.model.pays = this.getCountryName(this.phoneCountry);
    this.submitted = false;
    this.phoneError = null;
  }

  private detectPhoneCountry(phone: string) {
    try {
      const parsed = parsePhoneNumber(phone);
      if (parsed?.country) {
        this.phoneCountry = parsed.country;
      }
    } catch {
      // keep selected default country
    }
  }

  private sanitizePhoneDigits(value: string | null | undefined): string {
    return (value || '').replace(/\D/g, '');
  }

  private getDialCode(code: string): string {
    const country = this.countries.find((c) => c.code === code);
    return country ? country.dialCode : '';
  }

  private getDialDigits(code: string): string {
    return this.getDialCode(code).replace('+', '');
  }

  private extractLocalPhone(phone: string | null | undefined, countryCode: string): string {
    if (!phone) {
      return '';
    }

    const raw = String(phone).trim();
    if (!raw) {
      return '';
    }

    try {
      const parsed = parsePhoneNumber(raw);
      if (parsed?.nationalNumber) {
        return this.sanitizePhoneDigits(parsed.nationalNumber);
      }
    } catch {
      // fallback below
    }

    const digits = this.sanitizePhoneDigits(raw);
    const dialDigits = this.getDialDigits(countryCode);
    if (dialDigits && digits.startsWith(dialDigits)) {
      return digits.slice(dialDigits.length);
    }
    return digits;
  }

  private toInternationalPhone(localDigits: string): string {
    return `${this.getSelectedCountryDialCode()}${localDigits}`;
  }

  // Phone input is local-only digits (without dial code shown in country selector)
  validatePhone(): boolean {
    const localDigits = this.sanitizePhoneDigits(this.model.phone);
    this.model.phone = localDigits;

    if (!localDigits) {
      this.phoneError = 'Telephone obligatoire.';
      return false;
    }

    const selectedDialCode = this.getSelectedCountryDialCode();
    const selectedCountry = this.getCountryName(this.phoneCountry);
    if (!selectedDialCode) {
      this.phoneError = 'Veuillez selectionner un pays.';
      return false;
    }

    const internationalPhone = this.toInternationalPhone(localDigits);
    const isValid = isValidPhoneNumber(internationalPhone, this.phoneCountry as CountryCode);
    if (!isValid) {
      this.phoneError = `Numero invalide pour ${selectedCountry}.`;
      return false;
    }

    this.phoneError = null;
    this.model.code_pays = this.phoneCountry;
    this.model.pays = selectedCountry;
    return true;
  }

  getCountryName(code: string): string {
    const country = this.countries.find((c) => c.code === code);
    return country ? country.name : code;
  }

  getSelectedCountryDialCode(): string {
    return this.getDialCode(this.phoneCountry);
  }

  getCountryFlag(code: string): string {
    const country = this.countries.find((c) => c.code === code);
    return country ? country.flag : '';
  }

  onCountryChange() {
    this.model.code_pays = this.phoneCountry;
    this.model.pays = this.getCountryName(this.phoneCountry);

    if (this.model.phone) {
      this.validatePhone();
      return;
    }

    this.phoneError = null;
  }

  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement | null;
    const rawValue = input ? input.value : String(this.model.phone || '');
    const normalized = this.sanitizePhoneDigits(rawValue);

    if (input && input.value !== normalized) {
      input.value = normalized;
    }

    this.model.phone = normalized;

    if (this.submitted) {
      this.validatePhone();
    } else if (!normalized) {
      this.phoneError = null;
    }
  }

  onPhoneBeforeInput(event: InputEvent) {
    if (!event.data) {
      return;
    }

    if (/\D/.test(event.data)) {
      event.preventDefault();
    }
  }

  onPhoneKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }

    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'Enter'];
    if (allowedKeys.includes(event.key)) {
      return;
    }

    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }

  onPhoneBlur() {
    if (this.model.phone?.trim()) {
      this.validatePhone();
    }
  }

  isValid(): boolean {
    if (!this.model.type) {
      return false;
    }

    if (this.model.type === 'fournisseur') {
      const fournisseurValidation = !!(
        this.model.raison_sociale?.trim() &&
        this.model.phone?.trim() &&
        this.model.ville?.trim() &&
        this.model.quartier?.trim()
      );

      if (!fournisseurValidation) {
        return false;
      }
    } else {
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
    }

    return this.validatePhone();
  }

  enableEditing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
    this.submitted = false;
    this.phoneError = null;
    this.model = this.initialData ? { ...this.initialData } : {};
    if (this.model.code_pays) {
      this.phoneCountry = this.model.code_pays;
    } else if (this.model.phone) {
      this.detectPhoneCountry(this.model.phone);
    }
    this.model.phone = this.extractLocalPhone(this.model.phone, this.phoneCountry);
  }

  onSubmit() {
    this.submitted = true;
    if (!this.isValid()) {
      return;
    }

    const localDigits = this.sanitizePhoneDigits(this.model.phone);
    const internationalPhone = this.toInternationalPhone(localDigits);

    let normalizedPhone = internationalPhone;
    try {
      const parsed = parsePhoneNumber(internationalPhone, this.phoneCountry as CountryCode);
      if (parsed?.number) {
        normalizedPhone = parsed.number;
      }
    } catch {
      // keep built international phone
    }

    this.submitForm.emit({
      ...this.model,
      phone: normalizedPhone,
      code_pays: this.phoneCountry,
      pays: this.getCountryName(this.phoneCountry),
    });
  }

  onCancel() {
    this.cancel.emit();
  }

  get fieldsDisabled(): boolean {
    return (this.mode === 'edit' && !this.isEditing) || this.loading;
  }

  get formTitle(): string {
    if (this.mode === 'create') {
      return 'Ajout prestataire';
    }
    return 'Modification prestataire';
  }
}
