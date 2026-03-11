import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';
import { MoneyPipe } from '@/pipes/money.pipe';

import { CommandeVenteService } from '@/services/ventes/commande-vente.service';
import {
  CommandeVente,
  EncaissementVente,
  STATUT_FACTURE_LABELS,
  StatutFacture,
} from '@/models/vente.model';

type AssistantRiskLevel = 'faible' | 'moyen' | 'eleve';

interface LocalAssistantInsight {
  summary: string;
  riskLevel: AssistantRiskLevel;
  anomalies: string[];
  recommendations: string[];
  generatedAt: string;
}

@Component({
  selector: 'app-commande-vente-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule, SkeletonModule, ToastModule, PhoneFormatPipe, MoneyPipe],
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

  get assistantInsight(): LocalAssistantInsight | null {
    if (!this.commande) return null;

    const facture = this.commande.facture;
    const total = this.toNumber(this.commande.total_commande);
    const encaisse = this.toNumber(facture?.montant_encaisse);
    const restant = this.toNumber(facture?.montant_restant);
    const statut = facture?.statut_facture;
    const daysSinceCreation = this.getDaysSinceCreation();

    const anomalies: string[] = [];
    const recommendations: string[] = [];

    if (!facture) {
      anomalies.push('Aucune facture liee a cette commande.');
      recommendations.push('Generer la facture pour lancer le suivi des paiements.');
    }

    if (facture) {
      if (total > 0 && !this.isNearlyEqual(encaisse + restant, total)) {
        anomalies.push('Incoherence montants: encaisse + restant different du total.');
      }
      if (statut === 'payee' && restant > 0) {
        anomalies.push('Statut payee alors qu un montant reste a encaisser.');
      }
      if (statut === 'impayee' && encaisse > 0) {
        anomalies.push('Statut impayee alors qu un encaissement existe.');
      }
      if (statut === 'annulee' && encaisse > 0) {
        anomalies.push('Statut annulee avec un montant deja encaisse.');
      }
    }

    if (facture && restant > 0 && statut !== 'annulee') {
      if (encaisse <= 0) {
        recommendations.push('Relancer pour obtenir un premier encaissement rapidement.');
      } else {
        recommendations.push('Planifier un encaissement du solde restant.');
      }
    }

    if (statut === 'partiel' && (daysSinceCreation ?? 0) >= 3) {
      recommendations.push('Confirmer une date de paiement finale avec le livreur.');
    }

    if (statut === 'impayee' && (daysSinceCreation ?? 0) >= 3) {
      recommendations.push('Escalader le suivi vers le responsable de recouvrement.');
    }

    if (anomalies.length > 0) {
      recommendations.unshift('Verifier la coherence statut/montants avant action financiere.');
    }

    if (!recommendations.length) {
      recommendations.push('Aucune action urgente. Continuer le suivi normal.');
    }

    const riskLevel = this.computeRiskLevel({
      hasFacture: !!facture,
      total,
      encaisse,
      restant,
      statut,
      anomaliesCount: anomalies.length,
      daysSinceCreation,
    });

    return {
      summary: this.buildAssistantSummary(statut, total, encaisse, restant, !!facture, riskLevel),
      riskLevel,
      anomalies,
      recommendations,
      generatedAt: new Date().toLocaleString('fr-FR'),
    };
  }

  getAssistantRiskLabel(level: AssistantRiskLevel): string {
    const labels: Record<AssistantRiskLevel, string> = {
      faible: 'Faible',
      moyen: 'Moyen',
      eleve: 'Eleve',
    };
    return labels[level];
  }

  getAssistantRiskDotClass(level: AssistantRiskLevel): string {
    const map: Record<AssistantRiskLevel, string> = {
      faible: 'bg-green-500',
      moyen: 'bg-orange-500',
      eleve: 'bg-red-500',
    };
    return map[level];
  }

  private buildAssistantSummary(
    statut: StatutFacture | undefined,
    total: number,
    encaisse: number,
    restant: number,
    hasFacture: boolean,
    riskLevel: AssistantRiskLevel
  ): string {
    if (!hasFacture) {
      return 'Commande creee sans facture. Le suivi financier n est pas encore demarre.';
    }

    if (statut === 'payee') {
      return 'Commande soldee. Aucun reste a encaisser attendu.';
    }

    if (statut === 'partiel') {
      return `Commande partiellement payee: ${this.formatMontant(encaisse)} encaisses sur ${this.formatMontant(total)}.`;
    }

    if (statut === 'impayee') {
      return `Commande impayee: ${this.formatMontant(restant)} restent a encaisser (${this.getAssistantRiskLabel(riskLevel).toLowerCase()} risque).`;
    }

    if (statut === 'annulee') {
      return 'Commande annulee. Verifier que les montants encaisse/restant sont coherents.';
    }

    return `Commande en suivi: total ${this.formatMontant(total)}, encaisse ${this.formatMontant(encaisse)}, restant ${this.formatMontant(restant)}.`;
  }

  private computeRiskLevel(input: {
    hasFacture: boolean;
    total: number;
    encaisse: number;
    restant: number;
    statut: StatutFacture | undefined;
    anomaliesCount: number;
    daysSinceCreation: number | null;
  }): AssistantRiskLevel {
    let score = 0;

    if (!input.hasFacture) score += 2;
    if (input.restant > 0) score += 1;
    if (input.total > 0 && input.restant / input.total >= 0.7) score += 2;
    else if (input.total > 0 && input.restant / input.total >= 0.3) score += 1;
    if (input.encaisse <= 0 && input.total > 0) score += 1;
    if ((input.daysSinceCreation ?? 0) >= 7 && input.restant > 0) score += 1;
    if (input.statut === 'impayee') score += 1;
    if (input.anomaliesCount > 0) score += 2;

    if (score >= 5) return 'eleve';
    if (score >= 3) return 'moyen';
    return 'faible';
  }

  private getDaysSinceCreation(): number | null {
    if (!this.commande?.created_at) return null;
    const created = new Date(this.commande.created_at).getTime();
    if (Number.isNaN(created)) return null;
    const diff = Date.now() - created;
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  }

  private toNumber(value: number | string | undefined | null): number {
    if (value == null || value === '') return 0;
    if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  private isNearlyEqual(a: number, b: number, tolerance = 1): boolean {
    return Math.abs(a - b) <= tolerance;
  }
}
