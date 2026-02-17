import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { InputNumber } from 'primeng/inputnumber';
import { Button } from 'primeng/button';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { Ripple } from 'primeng/ripple';
import { Prestataire } from '@/models/prestataire.model';
import { Packing, CreatePackingDto, PackingStatut } from '@/models/packing.model';
import { MoneyPipe } from '@/pipes/money.pipe';

// Classe locale pour le formulaire avec méthodes de calcul
class PackingFormModel {
  id?: number;
  prestataire_id?: number;
  prestataire?: Prestataire;
  reference?: string;
  date?: Date | string | null;  
  nb_rouleaux: number = 0;
  prix_par_rouleau: number = 0;
  montant: number = 0; 
  statut: PackingStatut = 'valide';
  notes?: string | null;
  
  constructor(data?: Partial<Packing>) {
    if (data) {
      this.id = data.id;
      this.prestataire_id = data.prestataire_id;
      this.prestataire = data.prestataire;
      this.reference = data.reference;
      this.date = data.date ? new Date(data.date) : null;
      this.nb_rouleaux = data.nb_rouleaux || 0;
      this.prix_par_rouleau = data.prix_par_rouleau || 0;
      this.montant = data.montant || 0;
      this.statut = data.statut || 'valide';
      this.notes = data.notes;
    }
  }

  calculateMontant(): void {
    this.montant = this.nb_rouleaux * this.prix_par_rouleau;
  }
}

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
  @Input() initialData: Packing | null = null;
  @Input() prestataires: Prestataire[] = [];
  @Input() loading = false;

  @Output() submitForm = new EventEmitter<CreatePackingDto>();
  @Output() cancel = new EventEmitter<void>();

  submitted = false;
  isEditing = false;
  model: PackingFormModel = new PackingFormModel();

  minDate: Date = new Date();
  dateError: string | null = null;

  ngOnInit(): void {
    this.model = this.initialData ? new PackingFormModel(this.initialData) : new PackingFormModel();

    if (this.mode === 'create') {
      this.isEditing = true;
      if (!this.model.date) {
        this.model.date = new Date();
      }
    }
  }

  // Calculer automatiquement le montant
  onPrixOrQuantityChange(): void {
    if (this.model.nb_rouleaux && this.model.prix_par_rouleau) {
      this.model.calculateMontant();
    }
  }

  // Validation de la date
  validateDate(): boolean {
    if (!this.model.date) {
      this.dateError = 'Date obligatoire.';
      return false;
    }

    this.dateError = null;
    return true;
  }

  // Événement déclenché lors du changement de date
  onDateChange(): void {
    if (this.submitted) {
      this.validateDate();
    }
  }

  // Événement déclenché lors de la perte de focus de la date
  onDateBlur(): void {
    if (this.model.date) {
      this.validateDate();
    }
  }

  // Obtenir le nom complet du prestataire
  getPrestataireLabel(prestataire: Prestataire): string {
    return `${prestataire.prenom} ${prestataire.nom} - ${prestataire.phone}`;
  }

  // Obtenir le prestataire sélectionné
  getSelectedPrestataire(): Prestataire | undefined {
    return this.filteredPrestataires.find(p => p.id === this.model.prestataire_id);
  }

  // Filtrer les prestataires de type machiniste
  get filteredPrestataires(): Prestataire[] {
    const selectedId = this.model.prestataire_id;
    return (this.prestataires ?? []).filter((prestataire) => {
      if (selectedId && prestataire.id === selectedId) return true;
      return prestataire.type === 'machiniste';
    });
  }

  // Validation complète
  isValid(): boolean {
    const basicValidation = !!(
      this.model.prestataire_id &&
      this.model.date &&
      this.model.nb_rouleaux &&
      this.model.nb_rouleaux > 0 &&
      this.model.prix_par_rouleau &&
      this.model.prix_par_rouleau > 0
    );

    if (!basicValidation) {
      return false;
    }

    return this.validateDate();
  }

  // Activer l'édition
  enableEditing(): void {
    this.isEditing = true;
  }

  // Annuler l'édition
  cancelEditing(): void {
    this.isEditing = false;
    this.submitted = false;
    this.dateError = null;

    this.model = this.initialData ? new PackingFormModel(this.initialData) : new PackingFormModel();
  }

  // Réinitialiser le formulaire (méthode publique)
  public resetForm(): void {
    this.submitted = false;
    this.dateError = null;
    this.model = new PackingFormModel();
  }

  // Formater la date pour l'API
  private formatDate(date: Date | string | null | undefined): string {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toISOString().split('T')[0];
  }

  // Soumettre le formulaire
  onSubmit(): void {
    this.submitted = true;

    if (!this.isValid()) {
      return;
    }

    // Calculer le montant avant soumission
    this.model.calculateMontant();

    // Créer le DTO pour l'API
    const packingData: CreatePackingDto = {
      prestataire_id: this.model.prestataire_id!,
      date: this.formatDate(this.model.date),
      nb_rouleaux: this.model.nb_rouleaux,
      prix_par_rouleau: this.model.prix_par_rouleau,
      statut: this.model.statut,
      notes: this.model.notes ?? undefined
    };

    this.submitForm.emit(packingData);
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
    return !!this.dateError;
  }
}
