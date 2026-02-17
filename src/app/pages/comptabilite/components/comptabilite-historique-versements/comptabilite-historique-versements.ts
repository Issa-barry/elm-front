import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Versement, VersementIndexResponse } from '@/models/facture-packing.model';

@Component({
  selector: 'app-comptabilite-historique-versements',
  templateUrl: './comptabilite-historique-versements.html',
  styleUrl: './comptabilite-historique-versements.scss',
  standalone: true,
  imports: [CommonModule, ButtonModule],
})
export class ComptabiliteHistoriqueVersements {
  @Input() data: VersementIndexResponse | null = null;
  @Input() loading: boolean = false;
  @Input() canDelete: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onDeleteVersement = new EventEmitter<Versement>();

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(value) + ' GNF';
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR');
  }
}
