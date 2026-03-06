import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';

import { CommandeVente, STATUT_FACTURE_LABELS, StatutFacture } from '@/models/vente.model';
import { CommandeVenteService } from '@/services/ventes/commande-vente.service';
import { MoneyPipe } from '@/pipes/money.pipe';

interface QuantityOption {
  label: string;
  value: number;
}

interface ProductRow {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
  totalLigne: number;
  imageUrl: string;
}

@Component({
  selector: 'app-commande-vente-detail2',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, SelectModule, MoneyPipe],
  templateUrl: './commande-vente-detail2.html',
  styleUrl: './commande-vente-detail2.scss',
})
export class CommandeVenteDetail2 implements OnInit {
  readonly loading = signal(false);
  readonly commande = signal<CommandeVente | null>(null);

  readonly products = computed<ProductRow[]>(() =>
    (this.commande()?.lignes ?? []).map((ligne) => {
      const prixUnitaire = this.toNumber(ligne.prix_vente_snapshot);
      const totalFromApi = this.toNumber(ligne.total_ligne);
      const totalLigne = Number.isFinite(totalFromApi)
        ? totalFromApi
        : prixUnitaire * Math.max(1, ligne.qte ?? 1);
      const rawImage = ligne.produit?.image_url;
      const imageUrl = rawImage
        ? rawImage.startsWith('http://') || rawImage.startsWith('https://')
          ? rawImage
          : `assets/demo/images/produits/${rawImage}`
        : 'assets/demo/images/no-product.png';
      return {
        id: ligne.id,
        name: ligne.produit?.nom ?? `Produit #${ligne.produit_id}`,
        unitPrice: Number.isFinite(prixUnitaire) ? prixUnitaire : 0,
        quantity: Math.max(1, ligne.qte ?? 1),
        totalLigne,
        imageUrl,
      };
    })
  );

  readonly statutLabel = computed(() => {
    const statut = this.commande()?.facture?.statut_facture;
    return statut ? this.getStatutLabel(statut) : 'Impayee';
  });

  readonly canAnnuler = computed(() => {
    const statut = this.commande()?.facture?.statut_facture;
    return !statut || statut === 'impayee';
  });

  readonly statutBadgeClass = computed(() => {
    const statut = this.commande()?.facture?.statut_facture;
    switch (statut) {
      case 'payee':
        return 'border-green-200 bg-green-50 text-green-700 dark:border-green-500/40 dark:bg-green-500/15 dark:text-green-300';
      case 'partiel':
        return 'border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-500/40 dark:bg-orange-500/15 dark:text-orange-300';
      case 'annulee':
        return 'border-surface-300 bg-surface-100 text-surface-700 dark:border-surface-500/40 dark:bg-surface-500/15 dark:text-surface-200';
      case 'impayee':
      default:
        return 'border-red-200 bg-red-50 text-red-700 dark:border-red-500/40 dark:bg-red-500/15 dark:text-red-300';
    }
  });

  readonly restantDu = computed(() => {
    const commande = this.commande();
    if (!commande) return 0;

    const restantFacture = commande.facture?.montant_restant;
    if (typeof restantFacture === 'number' && Number.isFinite(restantFacture)) {
      return Math.max(0, restantFacture);
    }

    const total = this.toNumber(commande.total_commande);
    const encaisse = this.toNumber(commande.facture?.montant_encaisse ?? 0);
    if (!Number.isFinite(total)) return 0;
    const safeEncaisse = Number.isFinite(encaisse) ? encaisse : 0;
    return Math.max(0, total - safeEncaisse);
  });

  readonly restantToneClass = computed(() =>
    this.restantDu() > 0 ? 'text-red-600 dark:text-red-300' : 'text-green-600 dark:text-green-300'
  );

  readonly encaisseToneClass = computed(() => {
    const encaisse = this.toNumber(this.commande()?.facture?.montant_encaisse ?? 0);
    return Number.isFinite(encaisse) && encaisse > 0
      ? 'text-green-600 dark:text-green-300'
      : 'text-surface-900 dark:text-surface-0';
  });

  readonly livreurNom = computed(() => {
    const livreur = this.commande()?.vehicule?.livreurPrincipal ?? this.commande()?.vehicule?.livreur_principal;
    if (!livreur) return '-';
    return `${livreur.prenom} ${livreur.nom}`.trim() || '-';
  });

  readonly vehiculeNom = computed(() => this.commande()?.vehicule?.nom_vehicule ?? '-');

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly commandeService: CommandeVenteService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.router.navigate(['/ventes/commandes']);
      return;
    }
    this.loadCommande(id);
  }

  annulerCommande(): void {
    const id = this.commande()?.id;
    if (!id) return;
    if (!confirm('Confirmer l\'annulation de cette commande ?')) return;
    this.commandeService.deleteCommande(id).subscribe({
      next: () => this.router.navigate(['/ventes/commandes']),
    });
  }

  goFacture(): void {
    const factureId = this.commande()?.facture?.id;
    if (factureId) {
      this.router.navigate(['/ventes/factures', factureId]);
    }
  }

  quantityOptionFor(quantity: number): QuantityOption[] {
    const safeValue = Math.max(1, quantity);
    return [{ label: String(safeValue), value: safeValue }];
  }

  getStatutLabel(s: StatutFacture): string {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }

  private loadCommande(id: number): void {
    this.loading.set(true);
    this.commandeService.getCommande(id).subscribe({
      next: (resp) => {
        this.commande.set(resp.data ?? null);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(['/ventes/commandes']);
      },
    });
  }

  private toNumber(value: string | number | null | undefined): number {
    if (value == null || value === '') return Number.NaN;
    return typeof value === 'string' ? Number.parseFloat(value) : value;
  }
}
