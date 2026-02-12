import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturePaiementService } from '@/services/comptabilite/facture-paiement/facture-paiement.service';
import { ComptabiliteSummary, ComptabiliteFilters } from '@/models/facture-packing.model';

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

  constructor(private paiementService: FacturePaiementService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(filters?: ComptabiliteFilters) {
    this.paiementService.getComptabilite(filters).subscribe({
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
