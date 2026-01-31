import { Component, EventEmitter, Input, Output, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { InputNumber } from 'primeng/inputnumber';
import { Button } from 'primeng/button';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { Ripple } from 'primeng/ripple';
import { ContactInterface } from '@/models/contacts/contact-interface';
import { PackingModel } from '@/models/packing-model';
import { MoneyPipe } from '@/pipes/money.pipe';
 
@Component({
  selector: 'app-packing-from',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePicker,
    Select,
    InputNumber,
    Button,
    InputGroup,
    InputGroupAddon,
    Ripple,
    MoneyPipe
  ],
  templateUrl: './packing-from.html',
  styleUrl: './packing-from.scss',
})
export class PackingFrom implements OnInit {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() initialData: PackingModel | null = null;
  @Input() contacts: ContactInterface[] = [];
  @Input() loading = false;
  
  @Output() submitForm = new EventEmitter<PackingModel>();
  @Output() cancel = new EventEmitter<void>();

  submitted = false;
  isEditing = false;
  model: PackingModel = new PackingModel();
  
  minDate: Date = new Date();
  dateDebutError: string | null = null;
  dateFinError: string | null = null;
  dateRangeError: string | null = null;

  ngOnInit(): void {
    this.model = this.initialData ? new PackingModel(this.initialData) : new PackingModel();
    
    if (this.mode === 'create') {
      this.isEditing = true;
    }
  }

  // Calculer automatiquement le montant
  onPrixOrQuantityChange(): void {
    if (this.model.nombre_rouleaux && this.model.prix_rouleau) {
      this.model.calculateMontant();
    }
  }

  // Validation de la date de début
  validateDateDebut(): boolean {
    if (!this.model.date_debut) {
      this.dateDebutError = 'Date de début obligatoire.';
      return false;
    }

    const dateDebut = new Date(this.model.date_debut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dateDebut < today) {
      this.dateDebutError = 'La date de début ne peut pas être dans le passé.';
      return false;
    }

    this.dateDebutError = null;
    return true;
  }

  // Validation de la date de fin
  validateDateFin(): boolean {
    if (!this.model.date_fin) {
      this.dateFinError = 'Date de fin obligatoire.';
      return false;
    }

    this.dateFinError = null;
    return true;
  }

  // Validation de la plage de dates
  validateDateRange(): boolean {
    if (!this.model.date_debut || !this.model.date_fin) {
      return true;
    }

    const dateDebut = new Date(this.model.date_debut);
    const dateFin = new Date(this.model.date_fin);

    if (dateFin < dateDebut) {
      this.dateRangeError = 'La date de fin doit être supérieure ou égale à la date de début.';
      return false;
    }

    this.dateRangeError = null;
    return true;
  }

  // Événement déclenché lors du changement de date de début
  onDateDebutChange(): void {
    if (this.submitted) {
      this.validateDateDebut();
      this.validateDateRange();
    }
  }

  // Événement déclenché lors du changement de date de fin
  onDateFinChange(): void {
    if (this.submitted) {
      this.validateDateFin();
      this.validateDateRange();
    }
  }

  // Événement déclenché lors de la perte de focus des dates
  onDateBlur(field: 'debut' | 'fin'): void {
    if (field === 'debut' && this.model.date_debut) {
      this.validateDateDebut();
    } else if (field === 'fin' && this.model.date_fin) {
      this.validateDateFin();
    }
    this.validateDateRange();
  }

  // Obtenir le nom complet du contact
  getContactLabel(contact: ContactInterface): string {
    return `${contact.prenom} ${contact.nom} - ${contact.phone}`;
  }

  // Obtenir le contact sélectionné
  getSelectedContact(): ContactInterface | undefined {
    return this.contacts.find(c => c.id === this.model.contact_id);
  }

  // Calculer le nombre de jours
  calculateDays(): number {
    if (!this.model.date_debut || !this.model.date_fin) {
      return 0;
    }

    const debut = new Date(this.model.date_debut);
    const fin = new Date(this.model.date_fin);
    const diffTime = Math.abs(fin.getTime() - debut.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays + 1;
  }

  // Validation complète
  isValid(): boolean {
    const basicValidation = !!(
      this.model.contact_id &&
      this.model.date_debut &&
      this.model.date_fin &&
      this.model.nombre_rouleaux &&
      this.model.nombre_rouleaux > 0 &&
      this.model.prix_rouleau &&
      this.model.prix_rouleau > 0
    );

    if (!basicValidation) {
      return false;
    }

    return (
      this.validateDateDebut() &&
      this.validateDateFin() &&
      this.validateDateRange()
    );
  }

  // Activer l'édition
  enableEditing(): void {
    this.isEditing = true;
  }

  // Annuler l'édition
  cancelEditing(): void {
    this.isEditing = false;
    this.submitted = false;
    this.dateDebutError = null;
    this.dateFinError = null;
    this.dateRangeError = null;
    
    this.model = this.initialData ? new PackingModel(this.initialData) : new PackingModel();
  }

  // Réinitialiser le formulaire (méthode publique)
  public resetForm(): void {
    this.submitted = false;
    this.dateDebutError = null;
    this.dateFinError = null;
    this.dateRangeError = null;
    this.model = new PackingModel();
  }

  // Soumettre le formulaire
  onSubmit(): void {
    this.submitted = true;
    
    if (!this.isValid()) {
      return;
    }

    // Calculer le montant avant soumission
    this.model.calculateMontant();

    // Ajouter le contact au model avant l'émission
    this.model.contact = this.getSelectedContact();

    this.submitForm.emit(this.model);
  }

  // Annuler
  onCancel(): void {
    this.cancel.emit();
  }

  // Désactiver les champs en mode lecture
  get fieldsDisabled(): boolean {
    return (this.mode === 'edit' && !this.isEditing) || this.loading;
  }

  // Vérifier si le formulaire a des erreurs
  hasErrors(): boolean {
    return !!(
      this.dateDebutError ||
      this.dateFinError ||
      this.dateRangeError
    );
  }
}