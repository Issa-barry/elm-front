import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { StyleClassModule } from 'primeng/styleclass';
import { FacturePacking, ModePaiement } from '@/models/facture-packing.model';
import { MoneyPipe } from '@/pipes/money.pipe';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

export interface PaiementPayload {
  montant: number;
  mode_paiement: ModePaiement;
}

@Component({
  selector: 'app-comptabilite-packing-paiement',
  templateUrl: './comptabilite-packing-paiement.html',
  styleUrl: './comptabilite-packing-paiement.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, StyleClassModule, InputNumberModule, MoneyPipe, PhoneFormatPipe],
})
export class ComptabilitePackingPaiement implements OnChanges {
  @Input() facture: FacturePacking | null = null;
  @Input() saving: boolean = false;
  @Output() onPay = new EventEmitter<PaiementPayload>();
  @Output() onClose = new EventEmitter<void>();

  montant: number | null = null;
  selectedMode: ModePaiement = 'especes';

  ngOnChanges() {
    if (this.facture) {
      this.montant = this.facture.montant_restant;
      this.selectedMode = 'especes';
    }
  }

  selectMode(mode: ModePaiement) {
    this.selectedMode = mode;
  }

  confirmer() {
    if (!this.montant || this.montant <= 0 || !this.facture) return;
    this.onPay.emit({
      montant: this.montant,
      mode_paiement: this.selectedMode,
    });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(value) + ' GNF';
  }
}
