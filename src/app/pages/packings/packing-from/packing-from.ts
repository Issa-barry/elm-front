import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { InputNumber } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Prestataire } from '@/models/prestataire.model';
import { Packing, CreatePackingDto, PackingStatut, PACKING_STATUT_LABELS } from '@/models/packing.model';
import { MoneyPipe } from '@/pipes/money.pipe';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

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
    ButtonModule,
    RippleModule,
    MoneyPipe,
    PhoneFormatPipe,
  ],
  templateUrl: './packing-from.html',
  styleUrl: './packing-from.scss',
})
export class PackingFrom implements OnInit {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() initialData: Packing | null = null;
  @Input() prestataires: Prestataire[] = [];
  @Input() loading = false;
  @Input() defaultPrixRouleau: number = 0;

  @Output() submitForm = new EventEmitter<CreatePackingDto>();
  @Output() cancel = new EventEmitter<void>();

  submitted = false;
  model: PackingFormModel = new PackingFormModel();
  dateError: string | null = null;

  readonly statutOptions = (Object.keys(PACKING_STATUT_LABELS) as PackingStatut[]).map(k => ({
    value: k,
    label: PACKING_STATUT_LABELS[k],
  }));

  ngOnInit(): void {
    this.model = this.initialData ? new PackingFormModel(this.initialData) : new PackingFormModel();
    if (!this.model.date) {
      this.model.date = new Date();
    }
    if (this.mode === 'create' && this.defaultPrixRouleau > 0) {
      this.model.prix_par_rouleau = this.defaultPrixRouleau;
    }
  }

  onPrixOrQuantityChange(): void {
    if (this.model.nb_rouleaux && this.model.prix_par_rouleau) {
      this.model.calculateMontant();
    }
  }

  validateDate(): boolean {
    if (!this.model.date) {
      this.dateError = 'Date obligatoire.';
      return false;
    }
    this.dateError = null;
    return true;
  }

  onDateChange(): void {
    if (this.submitted) this.validateDate();
  }

  onDateBlur(): void {
    if (this.model.date) this.validateDate();
  }

  getSelectedPrestataire(): Prestataire | undefined {
    return this.filteredPrestataires.find(p => p.id === this.model.prestataire_id);
  }

  get filteredPrestataires(): Prestataire[] {
    const selectedId = this.model.prestataire_id;
    return (this.prestataires ?? []).filter((p) => {
      if (selectedId && p.id === selectedId) return true;
      return p.type === 'machiniste';
    });
  }

  isValid(): boolean {
    return !!(
      this.model.prestataire_id &&
      this.model.date &&
      this.model.nb_rouleaux && this.model.nb_rouleaux > 0 &&
      this.model.prix_par_rouleau && this.model.prix_par_rouleau > 0
    ) && this.validateDate();
  }

  public resetForm(): void {
    this.submitted = false;
    this.dateError = null;
    this.model = new PackingFormModel();
  }

  private formatDate(date: Date | string | null | undefined): string {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toISOString().split('T')[0];
  }

  onEnterKey(event: Event): void {
    event.preventDefault();
    this.onSubmit();
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.isValid()) return;
    this.model.calculateMontant();
    const packingData: CreatePackingDto = {
      prestataire_id: this.model.prestataire_id!,
      date: this.formatDate(this.model.date),
      nb_rouleaux: this.model.nb_rouleaux,
      prix_par_rouleau: this.model.prix_par_rouleau,
      statut: this.mode === 'edit' ? this.model.statut : undefined,
      notes: this.model.notes ?? undefined,
    };
    this.submitForm.emit(packingData);
  }

  onCancel(): void {
    this.cancel.emit();
  }

  get fieldsDisabled(): boolean {
    return this.loading;
  }
}
