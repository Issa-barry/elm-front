import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingService } from '@/services/packing/packing.service';
import { Packing } from '@/models/packing.model';
import { ComptabiliteSummary, ComptabiliteFilters } from '@/models/facture-packing.model';
import { MoneyPipe } from '@/pipes/money.pipe';

@Component({
  selector: 'app-stats-comptabilite-packing-widget',
  standalone: true,
  imports: [CommonModule, MoneyPipe],
  templateUrl: './stats-comptabilite-packing-widget.html',
  styleUrl: './stats-comptabilite-packing-widget.scss',
  host: {
    '[style.display]': '"contents"',
  },
})
export class StatsComptabilitePackingWidget implements OnInit {
  summary: ComptabiliteSummary | null = null;

  constructor(private packingService: PackingService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(filters?: ComptabiliteFilters) {
    this.packingService.getPackings({
      date_debut: filters?.date_debut,
      date_fin: filters?.date_fin,
      per_page: 500,
    }).subscribe({
      next: (response) => {
        const packings: Packing[] = 'data' in response && Array.isArray(response.data)
          ? response.data as Packing[]
          : ((response as any).data?.data ?? []) as Packing[];

        const byPrestataire = new Set<number>();
        let totalFacture = 0;
        let totalVerse = 0;
        let totalRestant = 0;

        for (const packing of packings) {
          if (packing.prestataire_id) byPrestataire.add(packing.prestataire_id);
          totalFacture += packing.montant ?? 0;
          totalVerse += packing.montant_verse ?? 0;
          totalRestant += packing.montant_restant ?? 0;
        }

        this.summary = new ComptabiliteSummary({
          date_debut: filters?.date_debut ?? null,
          date_fin: filters?.date_fin ?? null,
          nb_prestataires: byPrestataire.size,
          total_non_facture: 0,
          total_facture: totalFacture,
          total_verse: totalVerse,
          total_restant_facture: totalRestant,
          montant_global_du: totalRestant,
          prestataires: [],
        });
      },
    });
  }

}
