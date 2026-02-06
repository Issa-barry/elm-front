import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingPaiementService } from '@/services/comptabilite/packing-paiement/packing-paiement.service';
import { ComptabiliteSummary } from '@/models/paiement-packing.model';

@Component({
  selector: 'app-stats-comptabilite-packing-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-comptabilite-packing-widget.html',
  styleUrl: './stats-comptabilite-packing-widget.scss',
  host: {
    '[style.display]': '"contents"',
  },
})
export class StatsComptabilitePackingWidget implements OnInit {
  summary: ComptabiliteSummary | null = null;

  constructor(private paiementService: PackingPaiementService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats() {
    this.paiementService.getComptabilite().subscribe({
      next: (response) => {
        this.summary = new ComptabiliteSummary(response.data);
      },
    });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(value) + ' GNF';
  }
}
