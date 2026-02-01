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
  date_debut?: Date | string | null;
  date_fin?: Date | string | null;
  nb_rouleaux: number = 0;
  prix_par_rouleau: number = 0;
  montant: number = 0;
  statut: PackingStatut = 'en_cours';
  notes?: string | null;

  constructor(data?: Partial<Packing>) {
    if (data) {
      this.id = data.id;
      this.prestataire_id = data.prestataire_id;
      this.prestataire = data.prestataire;
      this.reference = data.reference;
      this.date_debut = data.date_debut ? new Date(data.date_debut) : null;
      this.date_fin = data.date_fin ? new Date(data.date_fin) : null;
      this.nb_rouleaux = data.nb_rouleaux || 0;
      this.prix_par_rouleau = data.prix_par_rouleau || 0;
      this.montant = data.montant || 0;
      this.statut = data.statut || 'en_cours';
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
  dateDebutError: string | null = null;
  dateFinError: string | null = null;
  dateRangeError: string | null = null;

  ngOnInit(): void {
    this.model = this.initialData ? new PackingFormModel(this.initialData) : new PackingFormModel();

    if (this.mode === 'create') {
      this.isEditing = true;
    }
  }

  // Calculer automatiquement le montant
  onPrixOrQuantityChange(): void {
    if (this.model.nb_rouleaux && this.model.prix_par_rouleau) {
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

    if (dateDebut < today && this.mode === 'create') {
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

  // Getter pour la date minimum de fin (doit être >= date début)
  get minDateFin(): Date {
    if (!this.model.date_debut) {
      return this.minDate;
    }
    return this.model.date_debut instanceof Date
      ? this.model.date_debut
      : new Date(this.model.date_debut);
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
      this.model.prestataire_id &&
      this.model.date_debut &&
      this.model.date_fin &&
      this.model.nb_rouleaux &&
      this.model.nb_rouleaux > 0 &&
      this.model.prix_par_rouleau &&
      this.model.prix_par_rouleau > 0
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

    this.model = this.initialData ? new PackingFormModel(this.initialData) : new PackingFormModel();
  }

  // Réinitialiser le formulaire (méthode publique)
  public resetForm(): void {
    this.submitted = false;
    this.dateDebutError = null;
    this.dateFinError = null;
    this.dateRangeError = null;
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
      date_debut: this.formatDate(this.model.date_debut),
      date_fin: this.formatDate(this.model.date_fin),
      nb_rouleaux: this.model.nb_rouleaux,
      prix_par_rouleau: this.model.prix_par_rouleau,
      montant: this.model.montant,
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
    return !!(
      this.dateDebutError ||
      this.dateFinError ||
      this.dateRangeError
    );
  }
}
