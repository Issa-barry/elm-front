import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { SkeletonModule } from 'primeng/skeleton';
import { Packing, PackingStatut } from '@/models/packing.model';
import { Prestataire } from '@/models/prestataire.model';

interface StatutOption {
  label: string;
  value: PackingStatut;
}

@Component({
  selector: 'app-packing-mobile-form',
  templateUrl: './packing-mobile-form.html',
  styleUrl: './packing-mobile-form.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputNumberModule,
    SelectModule,
    DatePickerModule,
    SkeletonModule,
  ],
})
export class PackingMobileForm {
  @Input() packing: Partial<Packing> = {};
  @Input() prestataires: Prestataire[] = [];
  @Input() selectedPrestataire: Prestataire | null = null;
  @Input() saving = false;
  @Input() dialogLoading = false;
  @Input() submitted = false;

  @Output() onSaveEvent = new EventEmitter<{ packing: Partial<Packing>; prestataire: Prestataire }>();
  @Output() onClose = new EventEmitter<void>();
  @Output() selectedPrestataireChange = new EventEmitter<Prestataire | null>();

  statuses: StatutOption[] = [
    { label: 'À valider', value: 'a_valider' },
    { label: 'Validé', value: 'valide' },
    { label: 'Annulé', value: 'annule' },
  ];

  calculateMontant() {
    if (this.packing.nb_rouleaux && this.packing.prix_par_rouleau) {
      this.packing.montant = this.packing.nb_rouleaux * this.packing.prix_par_rouleau;
    }
  }

  onSave() {
    if (!this.selectedPrestataire) return;
    this.onSaveEvent.emit({
      packing: this.packing,
      prestataire: this.selectedPrestataire,
    });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(value) + ' GNF';
  }
}
