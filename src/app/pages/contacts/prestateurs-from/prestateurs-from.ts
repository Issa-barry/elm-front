import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { RippleModule } from 'primeng/ripple';
import { ContactInterface } from '@/models/contacts/contact-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { parsePhoneNumber, CountryCode, isValidPhoneNumber } from 'libphonenumber-js';

@Component({
  selector: 'app-prestateurs-from',
  standalone: true,
  imports: [
    CommonModule,
    Select,
    InputText,
    TextareaModule,
    FileUploadModule,
    InputGroupAddon,
    ButtonModule,
    InputGroupModule,
    RippleModule,
    FormsModule
  ],
  templateUrl: './prestateurs-from.html',
  styleUrl: './prestateurs-from.scss',
})
export class PrestateursFrom {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() initialData: ContactInterface | null = null;
  @Input() loading = false;
  
  @Output() submitForm = new EventEmitter<ContactInterface>();
  @Output() cancel = new EventEmitter<void>();

  submitted = false;
  isEditing = false;
  model: ContactInterface = {};
  type_piece_identite: any[] = [];
  
  // Validation du téléphone
  phoneError: string | null = null;
  phoneCountry: string = 'GN'; // Guinée par défaut

  // Liste des pays pour le sélecteur
  countries: { name: string; code: CountryCode; dialCode: string }[] = [
    { name: 'Guinée', code: 'GN', dialCode: '+224' },
    { name: 'France', code: 'FR', dialCode: '+33' },
    { name: 'Sénégal', code: 'SN', dialCode: '+221' },
    { name: 'Sierra Leone', code: 'SL', dialCode: '+232' },
    { name: 'Mali', code: 'ML', dialCode: '+223' },
    { name: 'Côte d\'Ivoire', code: 'CI', dialCode: '+225' },
    { name: 'Burkina Faso', code: 'BF', dialCode: '+226' },
    { name: 'Togo', code: 'TG', dialCode: '+228' },
    { name: 'Bénin', code: 'BJ', dialCode: '+229' },
    { name: 'Niger', code: 'NE', dialCode: '+227' },
    { name: 'Belgique', code: 'BE', dialCode: '+32' },
    { name: 'Suisse', code: 'CH', dialCode: '+41' },
    { name: 'Canada', code: 'CA', dialCode: '+1' },
    { name: 'États-Unis', code: 'US', dialCode: '+1' },
  ];

  ngOnInit() {
    this.type_piece_identite = [
      { name: "Carte d'identité", code: 'CI' },
      { name: 'Passport', code: 'PASSPORT' },
      { name: 'Permis de conduire', code: 'PERMIS' }
    ];

    this.model = this.initialData ? { ...this.initialData } : {};
    
    // En mode création, toujours en édition
    if (this.mode === 'create') {
      this.isEditing = true;
    }

    // Détecter le pays du numéro existant ou utiliser celui sauvegardé
    if (this.model.code_pays) {
      this.phoneCountry = this.model.code_pays;
    } else if (this.model.phone) {
      this.detectPhoneCountry(this.model.phone);
    }
  }

  // Détecter le pays depuis le numéro de téléphone
  detectPhoneCountry(phone: string) {
    try {
      const phoneNumber = parsePhoneNumber(phone);
      if (phoneNumber && phoneNumber.country) {
        this.phoneCountry = phoneNumber.country;
      }
    } catch (error) {
      // Si le parsing échoue, on garde le pays par défaut
    }
  }

  // Valider le numéro de téléphone
  validatePhone(): boolean {
    if (!this.model.phone?.trim()) {
      this.phoneError = 'Téléphone obligatoire.';
      return false;
    }

    try {
      // Vérifier si le numéro est valide pour le pays sélectionné
      const isValid = isValidPhoneNumber(this.model.phone, this.phoneCountry as CountryCode);
      
      if (!isValid) {
        this.phoneError = `Numéro invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }

      // Formater le numéro en format international
      const phoneNumber = parsePhoneNumber(this.model.phone, this.phoneCountry as CountryCode);
      if (phoneNumber) {
        this.model.phone = phoneNumber.formatInternational();
        this.model.code_pays = this.phoneCountry; // Sauvegarder le code pays
        this.model.pays = this.getCountryName(this.phoneCountry); // Sauvegarder le nom du pays
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

  // Obtenir le nom du pays
  getCountryName(code: string): string {
    const country = this.countries.find(c => c.code === code);
    return country ? country.name : code;
  }

  // Obtenir l'indicatif du pays sélectionné
  getSelectedCountryDialCode(): string {
    const country = this.countries.find(c => c.code === this.phoneCountry);
    return country ? country.dialCode : '';
  }

  // Événement déclenché lors du changement de pays
  onCountryChange() {
    if (this.model.phone) {
      this.validatePhone();
    }
  }

  // Événement déclenché lors de la saisie du téléphone
  onPhoneInput() {
    if (this.submitted) {
      this.validatePhone();
    }
  }

  // Événement déclenché lors de la perte de focus du champ téléphone
  onPhoneBlur() {
    if (this.model.phone?.trim()) {
      this.validatePhone();
    }
  }

  isValid(): boolean {
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

    // Valider le téléphone
    return this.validatePhone();
  }

  enableEditing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
    this.submitted = false;
    this.phoneError = null;
    // Restaurer les données initiales
    this.model = this.initialData ? { ...this.initialData } : {};
    if (this.model.code_pays) {
      this.phoneCountry = this.model.code_pays;
    } else if (this.model.phone) {
      this.detectPhoneCountry(this.model.phone);
    }
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
}