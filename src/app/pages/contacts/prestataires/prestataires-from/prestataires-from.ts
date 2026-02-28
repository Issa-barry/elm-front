import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { parsePhoneNumber, CountryCode, isValidPhoneNumber } from 'libphonenumber-js';
import { Prestataire, PRESTATAIRE_TYPES } from '@/models/prestataire.model';
import { COUNTRIES } from '@/models/country.model';

@Component({
  selector: 'app-prestataires-from',
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
  type_piece_identite: any[] = [];
  prestataireTypes = PRESTATAIRE_TYPES;
  
  // Validation du tÃƒÂ©lÃƒÂ©phone
  phoneError: string | null = null;
  phoneCountry: string = 'GN'; // GuinÃƒÂ©e par dÃƒÂ©faut

  // Liste des pays pour le sÃƒÂ©lecteur
  countries = COUNTRIES;

  ngOnInit() {
    this.type_piece_identite = [
      { name: "Carte d'identitÃƒÂ©", code: 'CI' },
      { name: 'Passport', code: 'PASSPORT' },
      { name: 'Permis de conduire', code: 'PERMIS' }
    ];

    this.initializeModel();
  }

   ngOnChanges(changes: SimpleChanges) {
  // VÃƒÂ©rifier si initialData a changÃƒÂ© et n'est pas la premiÃƒÂ¨re initialisation vide
  if (changes['initialData']) {
    const change = changes['initialData'];
    
    // Si on a des donnÃƒÂ©es (et que ce n'est pas undefined/null)
    if (change.currentValue && Object.keys(change.currentValue).length > 0) {
      console.log("NgOnChanges - Nouvelles donnÃƒÂ©es:", change.currentValue);
      this.initializeModel();
    }
  }
}

private initializeModel() {
  console.log("InitializeModel appelÃƒÂ© avec:", this.initialData);
  
  // CrÃƒÂ©er une copie profonde des donnÃƒÂ©es
  this.model = this.initialData ? { ...this.initialData } : {};

  if (this.mode === 'create' && !this.model.ville?.trim()) {
    this.model.ville = 'Conakry';
  }
  
  console.log("Model aprÃƒÂ¨s initialisation:", this.model);

  // En mode crÃƒÂ©ation ou ÃƒÂ©dition avec donnÃƒÂ©es, activer l'ÃƒÂ©dition
  if (this.mode === 'create') {
    this.isEditing = true;
  } else if (this.mode === 'edit' && this.initialData) {
    this.isEditing = true;
  }

  // DÃƒÂ©tecter le pays du numÃƒÂ©ro existant ou utiliser celui sauvegardÃƒÂ©
  if (this.model.code_pays) {
    this.phoneCountry = this.model.code_pays;
    console.log("Pays dÃƒÂ©tectÃƒÂ© depuis code_pays:", this.phoneCountry);
  } else if (this.model.phone) {
    this.detectPhoneCountry(this.model.phone);
    console.log("Pays dÃƒÂ©tectÃƒÂ© depuis phone:", this.phoneCountry);
  }
  
  // RÃƒÂ©initialiser l'ÃƒÂ©tat de validation
  this.submitted = false;
  this.phoneError = null;
}

  // DÃƒÂ©tecter le pays depuis le numÃƒÂ©ro de tÃƒÂ©lÃƒÂ©phone
  detectPhoneCountry(phone: string) {
    try {
      const phoneNumber = parsePhoneNumber(phone);
      if (phoneNumber && phoneNumber.country) {
        this.phoneCountry = phoneNumber.country;
      }
    } catch (error) {
      // Si le parsing ÃƒÂ©choue, on garde le pays par dÃƒÂ©faut
    }
  }

  // Valider le numÃƒÂ©ro de tÃƒÂ©lÃƒÂ©phone
  validatePhone(): boolean {
    if (!this.model.phone?.trim()) {
      this.phoneError = 'TÃƒÂ©lÃƒÂ©phone obligatoire.';
      return false;
    }

    try {
      // VÃƒÂ©rifier si le numÃƒÂ©ro est valide pour le pays sÃƒÂ©lectionnÃƒÂ©
      const isValid = isValidPhoneNumber(this.model.phone, this.phoneCountry as CountryCode);
      
      if (!isValid) {
        this.phoneError = `NumÃƒÂ©ro invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }

      // Formater le numÃƒÂ©ro en format international
      const phoneNumber = parsePhoneNumber(this.model.phone, this.phoneCountry as CountryCode);
      if (phoneNumber) {
        this.model.phone = phoneNumber.formatInternational();
        this.model.code_pays = this.phoneCountry;
        this.model.pays = this.getCountryName(this.phoneCountry);
        this.phoneError = null;
        return true;
      }

      this.phoneError = 'Format de numÃƒÂ©ro invalide.';
      return false;
    } catch (error) {
      this.phoneError = 'Format de numÃƒÂ©ro invalide.';
      return false;
    }
  }

  // Obtenir le nom du pays
  getCountryName(code: string): string {
    const country = this.countries.find(c => c.code === code);
    return country ? country.name : code;
  }

  // Obtenir l'indicatif du pays sÃƒÂ©lectionnÃƒÂ©
  getSelectedCountryDialCode(): string {
    const country = this.countries.find(c => c.code === this.phoneCountry);
    return country ? country.dialCode : '';
  }

  // Obtenir le drapeau du pays
  getCountryFlag(code: string): string {
    const country = this.countries.find(c => c.code === code);
    return country ? country.flag : '';
  }

  // Ãƒâ€°vÃƒÂ©nement dÃƒÂ©clenchÃƒÂ© lors du changement de pays
  onCountryChange() {
    if (this.model.phone) {
      this.validatePhone();
    }
  }

  // Ãƒâ€°vÃƒÂ©nement dÃƒÂ©clenchÃƒÂ© lors de la saisie du tÃƒÂ©lÃƒÂ©phone
  onPhoneInput() {
    if (this.submitted) {
      this.validatePhone();
    }
  }

  // Ãƒâ€°vÃƒÂ©nement dÃƒÂ©clenchÃƒÂ© lors de la perte de focus du champ tÃƒÂ©lÃƒÂ©phone
  onPhoneBlur() {
    if (this.model.phone?.trim()) {
      this.validatePhone();
    }
  }

  isValid(): boolean {
    // Type est toujours obligatoire
    if (!this.model.type) {
      return false;
    }

    // Si fournisseur: raison_sociale obligatoire, nom/prÃƒÂ©nom non requis
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
      // Autres types: nom et prÃƒÂ©nom obligatoires
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
      return 'Ajout prestataire';
    }

    const reference = this.model.reference?.trim();
return reference
      ? `Modification prestataire`
      : 'Modification prestataire';
    //pour afficher la reference
    // return reference
    //   ? `Modification prestataire : ${reference}`
    //   : 'Modification prestataire';
  }

}
