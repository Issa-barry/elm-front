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
export class PrestateursFrom implements OnInit, OnChanges {
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
  
  // Validation du téléphone
  phoneError: string | null = null;
  phoneCountry: string = 'GN'; // Guinée par défaut

  // Liste des pays pour le sélecteur
  countries = COUNTRIES;

  ngOnInit() {
    this.type_piece_identite = [
      { name: "Carte d'identité", code: 'CI' },
      { name: 'Passport', code: 'PASSPORT' },
      { name: 'Permis de conduire', code: 'PERMIS' }
    ];

    this.initializeModel();
  }

   ngOnChanges(changes: SimpleChanges) {
  // Vérifier si initialData a changé et n'est pas la première initialisation vide
  if (changes['initialData']) {
    const change = changes['initialData'];
    
    // Si on a des données (et que ce n'est pas undefined/null)
    if (change.currentValue && Object.keys(change.currentValue).length > 0) {
      console.log("NgOnChanges - Nouvelles données:", change.currentValue);
      this.initializeModel();
    }
  }
}

private initializeModel() {
  console.log("InitializeModel appelé avec:", this.initialData);
  
  // Créer une copie profonde des données
  this.model = this.initialData ? { ...this.initialData } : {};
  
  console.log("Model après initialisation:", this.model);

  // En mode création ou édition avec données, activer l'édition
  if (this.mode === 'create') {
    this.isEditing = true;
  } else if (this.mode === 'edit' && this.initialData) {
    this.isEditing = true;
  }

  // Détecter le pays du numéro existant ou utiliser celui sauvegardé
  if (this.model.code_pays) {
    this.phoneCountry = this.model.code_pays;
    console.log("Pays détecté depuis code_pays:", this.phoneCountry);
  } else if (this.model.phone) {
    this.detectPhoneCountry(this.model.phone);
    console.log("Pays détecté depuis phone:", this.phoneCountry);
  }
  
  // Réinitialiser l'état de validation
  this.submitted = false;
  this.phoneError = null;
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

  // Obtenir le drapeau du pays
  getCountryFlag(code: string): string {
    const country = this.countries.find(c => c.code === code);
    return country ? country.flag : '';
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
    // Type est toujours obligatoire
    if (!this.model.type) {
      return false;
    }

    // Si fournisseur: raison_sociale obligatoire, nom/prénom non requis
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
      // Autres types: nom et prénom obligatoires
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


}