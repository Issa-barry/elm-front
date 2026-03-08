import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CommissionStatsMock {
  totalCommission: number;
  dejaVersee: number;
  partLivreur: number;
  partProprietaire: number;
}

@Component({
  selector: 'app-commission-stats-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commission-stats-widget.html',
})
export class CommissionStatsWidget {
  /** Keep input for compatibility with parent binding. */
  @Input() refreshTrigger = 0;

  readonly stats: CommissionStatsMock = {
    totalCommission: 3250000,
    dejaVersee: 1250000,
    partLivreur: 850000,
    partProprietaire: 400000,
  };

  fmt(n: number): string {
    return new Intl.NumberFormat('fr-FR').format(n) + ' GNF';
  }
}
