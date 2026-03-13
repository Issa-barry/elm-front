import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Versement, VersementIndexResponse } from '@/models/packing.model';
import { MoneyPipe } from '@/pipes/money.pipe';

@Component({
  selector: 'app-comptabilite-historique-versements',
  templateUrl: './comptabilite-historique-versements.html',
  styleUrl: './comptabilite-historique-versements.scss',
  standalone: true,
  imports: [CommonModule, ButtonModule, MoneyPipe],
})
export class ComptabiliteHistoriqueVersements {
  @Input() data: VersementIndexResponse | null = null;
  @Input() loading: boolean = false;
  @Input() canDelete: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onDeleteVersement = new EventEmitter<Versement>();

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR');
  }
}
