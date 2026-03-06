import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

import { CommandeVenteService } from '@/services/ventes/commande-vente.service';
import {
  CommandeVente,
  EncaissementVente,
  STATUT_FACTURE_LABELS,
  StatutFacture,
} from '@/models/vente.model';

@Component({
  selector: 'app-commande-vente-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule, SkeletonModule, ToastModule, PhoneFormatPipe],
  providers: [MessageService],
  templateUrl: './commande-vente-detail.html',
})
export class CommandeVenteDetail implements OnInit {
  commande: CommandeVente | null = null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commandeService: CommandeVenteService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.router.navigate(['/notfound']);
      return;
    }
    this.loadCommande(id);
  }

  loadCommande(id: number) {
    this.loading = true;
    this.commandeService.getCommande(id).subscribe({
      next: (resp) => {
        this.commande = resp.data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: err.status === 404 ? 'Introuvable' : 'Erreur',
          detail:
            err.status === 404
              ? "Cette commande n'existe pas ou a ete supprimee."
              : 'Impossible de charger la commande.',
          life: 4000,
        });
        setTimeout(() => this.router.navigate(['/ventes/commandes']), 2500);
      },
    });
  }

  get encaissements(): EncaissementVente[] {
    return this.commande?.facture?.encaissements ?? [];
  }

  get encaissementsCount(): number {
    return this.encaissements.length;
  }

  get firstEncaissementDate(): string | undefined {
    if (!this.encaissements.length) return undefined;
    const sorted = [...this.encaissements].sort(
      (a, b) => new Date(a.date_encaissement).getTime() - new Date(b.date_encaissement).getTime()
    );
    return sorted[0]?.date_encaissement;
  }

  get lastEncaissementDate(): string | undefined {
    if (!this.encaissements.length) return undefined;
    const sorted = [...this.encaissements].sort(
      (a, b) => new Date(a.date_encaissement).getTime() - new Date(b.date_encaissement).getTime()
    );
    return sorted[sorted.length - 1]?.date_encaissement;
  }

  goBack() {
    this.router.navigate(['/ventes/commandes']);
  }

  goFacture() {
    if (this.commande?.facture?.id) {
      this.router.navigate(['/ventes//factures-vente-detail3/', this.commande.facture.id]);
    }
  }

  getStatutLabel(s: StatutFacture): string {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
  }

  formatDate(d: string | undefined): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR');
  }

  getStatutColor(s: StatutFacture): 'surface' | 'orange' | 'green' | 'red' {
    const map: Record<StatutFacture, 'surface' | 'orange' | 'green' | 'red'> = {
      impayee: 'red',
      partiel: 'orange',
      payee: 'green',
      annulee: 'surface',
    };
    return map[s] ?? 'surface';
  }

  getStatutIcon(s: StatutFacture): string {
    const map: Record<StatutFacture, string> = {
      impayee: 'pi-clock',
      partiel: 'pi-chart-pie',
      payee: 'pi-check',
      annulee: 'pi-times',
    };
    return map[s] ?? 'pi-circle';
  }
}
