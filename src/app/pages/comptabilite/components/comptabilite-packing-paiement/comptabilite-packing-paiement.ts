import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { StyleClassModule } from 'primeng/styleclass';
import { Packing, ModePaiement } from '@/models/packing.model';
import { MoneyPipe } from '@/pipes/money.pipe';

export interface PaiementPayload {
  montant: number;
  mode_paiement: ModePaiement;
}

@Component({
  selector: 'app-comptabilite-packing-paiement',
  templateUrl: './comptabilite-packing-paiement.html',
  styleUrl: './comptabilite-packing-paiement.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, StyleClassModule, InputNumberModule, MoneyPipe],
})
export class ComptabilitePackingPaiement implements OnChanges {
  @Input() packing: Packing | null = null;
  @Input() saving: boolean = false;
  @Output() onPay = new EventEmitter<PaiementPayload>();
  @Output() onClose = new EventEmitter<void>();

  montant: number | null = null;
  selectedMode: ModePaiement = 'especes';

  ngOnChanges() {
    if (this.packing) {
      this.montant = this.packing.montant_restant;
      this.selectedMode = 'especes';
    }
  }

  selectMode(mode: ModePaiement) {
    this.selectedMode = mode;
  }

  confirmer() {
    if (!this.montant || this.montant <= 0 || !this.packing) return;
    this.onPay.emit({
      montant: this.montant,
      mode_paiement: this.selectedMode,
    });
  }

}
