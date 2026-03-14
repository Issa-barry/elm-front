import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import {
  CommandeVente,
  EncaissementVente,
  FactureVente,
  LigneCommandeVente,
  ModePaiement,
  STATUT_FACTURE_LABELS,
  StatutFacture,
  StoreEncaissementVenteDto,
} from '@/models/vente.model';
import { Usine } from '@/models/usine.model';
import { LayoutService } from '@/layout/service/layout.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';
import { AuthService } from '@/services/auth/auth.service';
import { FactureLivraisonService } from '@/services/livraisons/facture-livraison.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { UsineService } from '@/services/usine/usine.service';
import { CommandeVenteService } from '@/services/ventes/commande-vente.service';

@Component({
  selector: 'app-facture-vente-detail3',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    InputNumberModule,
    SelectModule,
    SkeletonModule,
    TooltipModule,
    PhoneFormatPipe,
  ],
  providers: [MessageService],
  templateUrl: './facture-vente-detail3.html',
  styleUrl: './facture-vente-detail3.scss',
})
export class FactureVenteDetail3 implements OnInit {
  loading = false;
  encaissementSaving = false;
  backNavigating = false;
  printLoading = false;

  facture: FactureVente | null = null;
  commande: CommandeVente | null = null;
  usineFacture: Usine | null = null;

  encaissementMontant: number | null = null;
  encaissementMode: ModePaiement = 'especes';

  readonly modesPaiement: Array<{ label: string; value: ModePaiement }> = [
    { label: 'Especes', value: 'especes' },
    { label: 'Mobile Money', value: 'mobile_money' },
    { label: 'Virement', value: 'virement' },
    { label: 'Cheque', value: 'cheque' },
  ];

  get canCreateEncaissement(): boolean {
    return this.authService.hasPermission('encaissements.create');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: LayoutService,
    private factureService: FactureLivraisonService,
    private commandeService: CommandeVenteService,
    private usineContext: UsineContextService,
    private usineService: UsineService,
    private authService: AuthService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      const id = idParam ? Number(idParam) : NaN;

      if (!id || Number.isNaN(id)) {
        this.router.navigate(['/ventes/factures']);
        return;
      }

      this.loadFacture(id);
    });
  }

  get usineNom(): string {
    return this.getUsineFactureSource()?.nom || 'Usine';
  }

  get usineAdresse(): string {
    const usine = this.getUsineFactureSource();
    if (!usine) return '';

    const localisation = [usine.quartier, usine.ville, usine.pays]
      .map((item) => (typeof item === 'string' ? item.trim() : ''))
      .filter((item) => item.length > 0);

    if (localisation.length > 0) {
      return localisation.join(', ');
    }

    return (usine.adresse ?? '').trim();
  }

  get factureDate(): string {
    return this.formatDateDisplay(this.facture?.created_at);
  }

  get factureNumero(): string {
    return this.facture?.reference || '-';
  }

  get commandeNumero(): string {
    const reference = this.commande?.reference?.trim();
    if (reference) return reference;

    const commandeId = this.facture?.commande_vente_id;
    if (!commandeId) return '-';

    return `#${commandeId}`;
  }

  get factureStatut(): StatutFacture {
    return this.facture?.statut_facture ?? 'impayee';
  }

  get factureStatutLabel(): string {
    return STATUT_FACTURE_LABELS[this.factureStatut] ?? this.factureStatut;
  }

  get factureStatutClass(): string {
    switch (this.factureStatut) {
      case 'payee':
        return 'status-payee';
      case 'partiel':
        return 'status-partielle';
      case 'annulee':
        return 'status-annulee';
      case 'impayee':
      default:
        return 'status-impayee';
    }
  }

  get vehiculeSource() {
    return this.facture?.vehicule ?? this.commande?.vehicule ?? null;
  }

  get vehiculeNom(): string {
    return this.vehiculeSource?.nom_vehicule || '-';
  }

  get vehiculeImmatriculation(): string {
    return this.vehiculeSource?.immatriculation || '-';
  }

  get proprietaireNom(): string {
    const proprietaire = this.vehiculeSource?.proprietaire;
    if (!proprietaire) return '-';

    const fullName = `${proprietaire.prenom || ''} ${proprietaire.nom || ''}`.trim();
    return fullName || '-';
  }

  get proprietairePhone(): string | null {
    return this.vehiculeSource?.proprietaire?.phone ?? null;
  }

  get livreurNom(): string {
    const livreur = this.vehiculeSource?.livreurPrincipal ?? this.vehiculeSource?.livreur_principal;
    if (!livreur) return '-';

    const fullName = `${livreur.prenom || ''} ${livreur.nom || ''}`.trim();
    return fullName || '-';
  }

  get livreurPhone(): string | null {
    return (this.vehiculeSource?.livreurPrincipal ?? this.vehiculeSource?.livreur_principal)?.phone ?? null;
  }

  get lignes(): LigneCommandeVente[] {
    return this.commande?.lignes ?? [];
  }

  get sousTotal(): number {
    if (!this.lignes.length) return this.totalFacture;

    return this.lignes.reduce((sum, ligne) => {
      return sum + this.toNumber(ligne.total_ligne);
    }, 0);
  }

  get totalFacture(): number {
    if (!this.facture) return 0;
    return this.toNumber(this.facture.montant_brut || this.facture.montant_net);
  }

  get montantPaye(): number {
    return this.facture?.montant_encaisse ?? 0;
  }

  get resteAPayer(): number {
    return this.facture?.montant_restant ?? 0;
  }

  get encaissements(): EncaissementVente[] {
    return this.facture?.encaissements ?? [];
  }

  get versementsAffiches(): EncaissementVente[] {
    return [...this.encaissements].sort(
      (a, b) => new Date(b.date_encaissement).getTime() - new Date(a.date_encaissement).getTime(),
    );
  }

  get notes(): string {
    const factureRaw = this.facture as Record<string, unknown> | null;
    const commandeRaw = this.commande as Record<string, unknown> | null;

    const fromFacture = this.pickString(factureRaw?.['notes'], factureRaw?.['note']);
    const fromCommande = this.pickString(commandeRaw?.['notes'], commandeRaw?.['note']);

    return fromFacture ?? fromCommande ?? '-';
  }

  get totalEspeces(): number {
    return this.sumEncaissementsByMode('especes');
  }

  get totalMobile(): number {
    return this.sumEncaissementsByMode('mobile_money');
  }

  get totalBanque(): number {
    return this.sumEncaissementsByMode('virement') + this.sumEncaissementsByMode('cheque');
  }

  get totalEncaisse(): number {
    return this.encaissements.reduce((sum, item) => sum + this.toNumber(item.montant), 0);
  }

  get isEncaissementMontantExceedsReste(): boolean {
    if (this.encaissementMontant == null) return false;
    if (this.resteAPayer <= 0) return false;
    return this.encaissementMontant > this.resteAPayer;
  }

  get canPay(): boolean {
    return this.canCreateEncaissement
      && !this.loading
      && !this.encaissementSaving
      && !!this.facture
      && this.resteAPayer > 0
      && this.encaissementMontant != null
      && this.encaissementMontant > 0
      && !this.isEncaissementMontantExceedsReste;
  }

  toggleSidebar(): void {
    this.layoutService.onMenuToggle();
  }

  async goBack(): Promise<void> {
    if (this.backNavigating) return;

    this.backNavigating = true;
    try {
      await this.router.navigate(['/ventes/factures']);
    } finally {
      this.backNavigating = false;
    }
  }

  async downloadInvoice(): Promise<void> {
    const pdf = await this.buildInvoicePdf();
    if (!pdf) return;

    const fileName = `${this.factureNumero || 'facture-vente'}.pdf`;
    pdf.save(fileName);
  }

  async printInvoice(): Promise<void> {
    if (this.printLoading) return;
    this.printLoading = true;

    const invoice = document.getElementById('vente-facture3-invoice') as HTMLElement | null;
    if (!invoice) {
      this.printLoading = false;
      return;
    }

    const exportNode = invoice.cloneNode(true) as HTMLElement;
    exportNode.classList.remove('card');
    exportNode.style.border = '0';
    exportNode.style.boxShadow = 'none';
    exportNode.style.borderRadius = '0';
    exportNode.style.margin = '0';
    exportNode.style.background = '#ffffff';
    exportNode.style.overflow = 'visible';

    const headStyles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map((node) => node.outerHTML)
      .join('\n');

    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.opacity = '0';
    iframe.style.pointerEvents = 'none';

    const cleanup = () => {
      setTimeout(() => {
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
      }, 1500);
      this.printLoading = false;
    };

    document.body.appendChild(iframe);
    const frameDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!frameDoc) {
      cleanup();
      return;
    }

    frameDoc.open();
    frameDoc.write(`
      <!doctype html>
      <html lang="fr">
        <head>
          <meta charset="utf-8" />
          ${headStyles}
          <style>
            @page { size: A4; margin: 8mm; }
            html, body {
              margin: 0;
              padding: 0;
              background: #ffffff;
            }
            body {
              font-family: inherit;
              color: inherit;
            }
            .vente-facture3-print-root {
              width: 100%;
              margin: 0;
              padding: 0;
              background: #ffffff;
            }
            #vente-facture3-invoice {
              position: relative !important;
              overflow: visible !important;
            }
            .vente-status-ribbon {
              top: 6mm !important;
              right: 6mm !important;
              left: auto !important;
              width: auto !important;
              min-width: 4.8rem;
              padding: 0.2rem 0.55rem !important;
              border-radius: 9999px !important;
              font-size: 0.62rem !important;
              line-height: 1.1;
              letter-spacing: 0.03em !important;
              transform: none !important;
              transform-origin: center !important;
              box-shadow: none !important;
              white-space: nowrap;
            }
          </style>
        </head>
        <body>
          <div class="vente-facture3-print-root">${exportNode.outerHTML}</div>
        </body>
      </html>
    `);
    frameDoc.close();

    const triggerPrint = () => {
      try {
        const frameWindow = iframe.contentWindow;
        if (!frameWindow) {
          cleanup();
          return;
        }
        frameWindow.focus();
        frameWindow.print();
      } finally {
        cleanup();
      }
    };

    setTimeout(triggerPrint, 250);
  }

  payer(): void {
    if (!this.facture || !this.canPay) return;

    if (!this.encaissementMontant || this.encaissementMontant <= 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Montant requis',
        detail: 'Saisissez un montant valide.',
        life: 3000,
      });
      return;
    }

    if (this.encaissementMontant > this.resteAPayer) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Montant invalide',
        detail: 'Le montant depasse le reste a payer.',
        life: 3000,
      });
      return;
    }

    const dto: StoreEncaissementVenteDto = {
      facture_vente_id: this.facture.id,
      montant: this.encaissementMontant,
      date_encaissement: this.formatApiDate(new Date()),
      mode_paiement: this.encaissementMode,
    };

    this.encaissementSaving = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: `Encaissement de ${this.formatAmount(dto.montant)} enregistre.`,
          life: 3000,
        });
        this.loadFacture(this.facture!.id);
      },
      error: (error) => {
        this.encaissementSaving = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: error?.error?.message || "Impossible d'enregistrer l'encaissement.",
          life: 4000,
        });
      },
    });
  }

  getPrixUnitaire(ligne: LigneCommandeVente): number {
    return this.toNumber(ligne.prix_vente_snapshot || ligne.prix_usine_snapshot || 0);
  }

  getModePaiementLabel(mode: string): string {
    const found = this.modesPaiement.find((item) => item.value === mode);
    return found?.label || mode;
  }

  formatAmount(value: number | string | undefined | null): string {
    const num = this.toNumber(value);
    return `${new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)} FG`;
  }

  formatDateDisplay(dateValue: string | Date | null | undefined): string {
    if (!dateValue) return '-';

    if (typeof dateValue === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
      const [year, month, day] = dateValue.split('-');
      return `${day}/${month}/${year}`;
    }

    const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
    if (Number.isNaN(date.getTime())) return '-';

    return date.toLocaleDateString('fr-FR');
  }

  private loadFacture(id: number): void {
    this.loading = true;
    this.encaissementSaving = false;

    this.factureService.getFacture(id).subscribe({
      next: (response) => {
        this.facture = response.data;
        this.syncEncaissementDefaults();
        this.loadCommandeLiee();
        this.loadUsineFacture();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.encaissementSaving = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger la facture vente.',
          life: 4000,
        });
      },
    });
  }

  private loadCommandeLiee(): void {
    const commandeId = this.facture?.commande_vente_id;
    if (!commandeId) {
      this.commande = null;
      return;
    }

    this.commandeService.getCommande(commandeId).subscribe({
      next: (response) => {
        this.commande = response.data;
      },
      error: () => {
        this.commande = null;
      },
    });
  }

  private loadUsineFacture(): void {
    const usineId = this.resolveUsineIdForFacture();
    if (!usineId) {
      this.usineFacture = null;
      return;
    }

    this.usineService.getById(usineId).subscribe({
      next: (response) => {
        this.usineFacture = response?.data ?? null;
      },
      error: () => {
        this.usineFacture = null;
      },
    });
  }

  private syncEncaissementDefaults(): void {
    const restant = this.resteAPayer;

    if (restant <= 0) {
      this.encaissementMontant = null;
      return;
    }

    if (this.encaissementMontant == null || this.encaissementMontant <= 0 || this.encaissementMontant > restant) {
      this.encaissementMontant = restant;
    }
  }

  private sumEncaissementsByMode(mode: ModePaiement): number {
    return this.encaissements
      .filter((item) => item.mode_paiement === mode)
      .reduce((sum, item) => sum + this.toNumber(item.montant), 0);
  }

  private resolveUsineIdForFacture(): number | null {
    const raw = this.facture as Record<string, unknown> | null;
    const fromFacture =
      this.pickNumber(raw?.['usine_id']) ??
      this.pickNumber(raw?.['usineId']) ??
      this.pickNumber((raw?.['usine'] as Record<string, unknown> | undefined)?.['id']);

    if (fromFacture) return fromFacture;

    const fromCommande = this.commande?.usine_id;
    if (fromCommande) return fromCommande;

    return this.usineContext.currentUsineId();
  }

  private getUsineFactureSource():
    | { nom?: string; adresse?: string | null; quartier?: string | null; ville?: string | null; pays?: string | null }
    | null {
    const factureUsine = this.extractUsineFromFacture();
    const apiUsine = this.usineFacture;
    const contextUsine = this.usineContext.currentUsine();

    if (!factureUsine && !apiUsine && !contextUsine) return null;

    return {
      nom: factureUsine?.nom ?? apiUsine?.nom ?? contextUsine?.nom,
      adresse: factureUsine?.adresse ?? apiUsine?.adresse ?? contextUsine?.adresse ?? null,
      quartier: factureUsine?.quartier ?? apiUsine?.quartier ?? contextUsine?.quartier ?? null,
      ville: factureUsine?.ville ?? apiUsine?.ville ?? contextUsine?.ville ?? null,
      pays: factureUsine?.pays ?? apiUsine?.pays ?? contextUsine?.pays ?? null,
    };
  }

  private extractUsineFromFacture():
    | { nom?: string; adresse?: string | null; quartier?: string | null; ville?: string | null; pays?: string | null }
    | null {
    const raw = this.facture as Record<string, unknown> | null;
    if (!raw) return null;

    const relation = raw['usine'];
    if (relation && typeof relation === 'object') {
      const usine = relation as Record<string, unknown>;
      return {
        nom: this.pickString(usine['nom']) || undefined,
        adresse: this.pickString(usine['adresse']),
        quartier: this.pickString(usine['quartier']),
        ville: this.pickString(usine['ville']),
        pays: this.pickString(usine['pays']),
      };
    }

    const nom = this.pickString(raw['usine_nom'], raw['usineNom']);
    const adresse = this.pickString(raw['usine_adresse'], raw['usineAdresse']);
    const quartier = this.pickString(raw['usine_quartier'], raw['usineQuartier']);
    const ville = this.pickString(raw['usine_ville'], raw['usineVille']);
    const pays = this.pickString(raw['usine_pays'], raw['usinePays']);

    if (nom || adresse || quartier || ville || pays) {
      return { nom: nom || undefined, adresse, quartier, ville, pays };
    }

    return null;
  }

  private pickString(...values: unknown[]): string | null {
    for (const value of values) {
      if (typeof value === 'string' && value.trim().length > 0) {
        return value.trim();
      }
    }
    return null;
  }

  private pickNumber(value: unknown): number | null {
    if (typeof value === 'number' && Number.isFinite(value)) return value;

    if (typeof value === 'string' && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }

    return null;
  }

  private toNumber(value: unknown): number {
    if (typeof value === 'number' && Number.isFinite(value)) return value;

    if (typeof value === 'string' && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }

    return 0;
  }

  private formatApiDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private async buildInvoicePdf(): Promise<any | null> {
    const invoice = document.getElementById('vente-facture3-invoice') as HTMLElement | null;
    if (!invoice) return null;

    let exportContainer: HTMLDivElement | null = null;

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);

      const exportNode = invoice.cloneNode(true) as HTMLElement;
      exportNode.classList.remove('card');
      exportNode.style.border = '0';
      exportNode.style.boxShadow = 'none';
      exportNode.style.borderRadius = '0';
      exportNode.style.background = '#ffffff';
      exportNode.style.margin = '0';
      exportNode.style.overflow = 'visible';

      exportContainer = document.createElement('div');
      exportContainer.style.position = 'fixed';
      exportContainer.style.left = '-100000px';
      exportContainer.style.top = '0';
      exportContainer.style.background = '#ffffff';
      exportContainer.style.padding = '0';
      exportContainer.style.margin = '0';
      exportContainer.style.width = `${invoice.scrollWidth}px`;
      exportContainer.style.zIndex = '-1';
      exportContainer.appendChild(exportNode);
      document.body.appendChild(exportContainer);

      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

      const canvas = await html2canvas(exportNode, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: exportNode.scrollWidth,
        height: exportNode.scrollHeight,
        windowWidth: exportNode.scrollWidth,
        windowHeight: exportNode.scrollHeight,
      });

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 8;
      const usableWidth = pageWidth - margin * 2;
      const usableHeight = pageHeight - margin * 2;

      const imageData = canvas.toDataURL('image/png', 1.0);
      const imageHeight = (canvas.height * usableWidth) / canvas.width;
      let heightLeft = imageHeight;
      let positionY = margin;

      pdf.addImage(imageData, 'PNG', margin, positionY, usableWidth, imageHeight, undefined, 'FAST');
      heightLeft -= usableHeight;

      while (heightLeft > 0) {
        pdf.addPage();
        positionY = margin - (imageHeight - heightLeft);
        pdf.addImage(imageData, 'PNG', margin, positionY, usableWidth, imageHeight, undefined, 'FAST');
        heightLeft -= usableHeight;
      }

      return pdf;
    } catch {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Impossible de generer le PDF.',
        life: 4000,
      });
      return null;
    } finally {
      if (exportContainer?.parentNode) {
        exportContainer.parentNode.removeChild(exportContainer);
      }
    }
  }
}
