import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import { MODE_PAIEMENT_LABELS, ModePaiement, Packing, PackingStatut, StoreVersementDto, Versement } from '@/models/packing.model';
import { Usine } from '@/models/usine.model';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';
import { LayoutService } from '@/layout/service/layout.service';
import { PackingService } from '@/services/packing/packing.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { UsineService } from '@/services/usine/usine.service';
import { AuthService } from '@/services/auth/auth.service';

@Component({
  selector: 'app-packing-facture',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    InputNumberModule,
    SelectModule,
    TooltipModule,
    PhoneFormatPipe,
  ],
  providers: [MessageService],
  templateUrl: './packing-facture.html',
  styleUrl: './packing-facture.scss',
})
export class PackingFacture implements OnInit {
  loading = false;
  encaissementSaving = false;
  backNavigating = false;
  printLoading = false;
  canCreateVersement = false;
  packing: Packing | null = null;
  usineFacture: Usine | null = null;
  versements: Versement[] = [];
  encaissementMontant: number | null = null;
  encaissementMode: ModePaiement = 'especes';
  readonly modesPaiement: Array<{ label: string; value: ModePaiement }> = [
    { label: MODE_PAIEMENT_LABELS.especes, value: 'especes' },
    { label: MODE_PAIEMENT_LABELS.mobile_money, value: 'mobile_money' },
    { label: MODE_PAIEMENT_LABELS.virement, value: 'virement' },
    { label: MODE_PAIEMENT_LABELS.cheque, value: 'cheque' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: LayoutService,
    private packingService: PackingService,
    private usineContext: UsineContextService,
    private usineService: UsineService,
    private authService: AuthService,
    private messageService: MessageService,
  ) {
    this.canCreateVersement = this.authService.hasPermission('versements.create');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      const id = idParam ? Number(idParam) : NaN;

      if (!id || Number.isNaN(id)) {
        this.router.navigate(['/packings']);
        return;
      }

      this.loadPacking(id);
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
    return this.formatDateDisplay(this.packing?.date);
  }

  get factureNumero(): string {
    return this.packing?.reference || '-';
  }

  get factureStatut(): PackingStatut {
    return this.packing?.statut ?? 'impayee';
  }

  get factureStatutLabel(): string {
    const fromApi = this.packing?.statut_label?.trim();
    if (fromApi) return fromApi;

    const labels: Record<PackingStatut, string> = {
      impayee: 'Impayee',
      partielle: 'Partielle',
      payee: 'Payee',
      annulee: 'Annulee',
    };
    return labels[this.factureStatut] || 'Statut';
  }

  get factureStatutClass(): string {
    switch (this.factureStatut) {
      case 'payee':
        return 'status-payee';
      case 'partielle':
        return 'status-partielle';
      case 'annulee':
        return 'status-annulee';
      case 'impayee':
      default:
        return 'status-impayee';
    }
  }

  get machinisteReference(): string {
    return this.packing?.prestataire?.reference || '-';
  }

  get prestataireNomComplet(): string {
    const nom = this.packing?.prestataire?.nom || '';
    const prenom = this.packing?.prestataire?.prenom || '';
    const fullName = `${prenom} ${nom}`.trim();
    return fullName || '-';
  }

  get prestatairePhone(): string | null {
    return this.packing?.prestataire?.phone ?? null;
  }

  get prestataireAdresse(): string {
    const ville = this.packing?.prestataire?.ville || '';
    const pays = this.packing?.prestataire?.pays || '';
    const location = [ville, pays].filter(Boolean).join(', ');
    return location || '-';
  }

  get quantiteRouleaux(): number {
    return this.packing?.nb_rouleaux || 0;
  }

  get prixUnitaire(): number {
    return this.packing?.prix_par_rouleau || 0;
  }

  get totalLigne(): number {
    return this.packing?.montant || 0;
  }

  get totalFacture(): number {
    return this.packing?.montant || 0;
  }

  get montantPaye(): number {
    return this.packing?.montant_verse || 0;
  }

  get resteAPayer(): number {
    return this.packing?.montant_restant || 0;
  }

  get modePaiementLabel(): string {
    if (!this.versements.length) return '-';

    const versementsTries = [...this.versements].sort((a, b) => {
      return new Date(b.date_versement).getTime() - new Date(a.date_versement).getTime();
    });

    const latest = versementsTries[0];
    return latest.mode_paiement_label || MODE_PAIEMENT_LABELS[latest.mode_paiement] || '-';
  }

  get versementsAffiches(): Versement[] {
    return [...this.versements].sort(
      (a, b) => new Date(b.date_versement).getTime() - new Date(a.date_versement).getTime(),
    );
  }

  get notes(): string {
    return this.packing?.notes?.trim() || '-';
  }

  get totalEspeces(): number {
    return this.sumVersementsByMode('especes');
  }

  get totalMobile(): number {
    return this.sumVersementsByMode('mobile_money');
  }

  get totalBanque(): number {
    return this.sumVersementsByMode('virement') + this.sumVersementsByMode('cheque');
  }

  get totalEncaisse(): number {
    return this.versements.reduce((sum, versement) => sum + (versement.montant || 0), 0);
  }

  get isEncaissementMontantExceedsReste(): boolean {
    if (this.encaissementMontant == null) return false;
    if (this.resteAPayer <= 0) return false;
    return this.encaissementMontant > this.resteAPayer;
  }

  get canPay(): boolean {
    return this.canCreateVersement
      && !this.loading
      && !this.encaissementSaving
      && this.resteAPayer > 0
      && !this.isEncaissementMontantExceedsReste;
  }

  formatAmount(value: number): string {
    return `${new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)} FG`;
  }

  formatVersementMode(versement: Versement): string {
    return versement.mode_paiement_label || MODE_PAIEMENT_LABELS[versement.mode_paiement] || versement.mode_paiement;
  }

  toggleSidebar(): void {
    this.layoutService.onMenuToggle();
  }

  async goBack(): Promise<void> {
    if (this.backNavigating) return;

    this.backNavigating = true;
    try {
      await this.router.navigate(['/packings']);
    } finally {
      this.backNavigating = false;
    }
  }

  async downloadInvoice(): Promise<void> {
    const pdf = await this.buildInvoicePdf();
    if (!pdf) return;

    const fileName = `${this.factureNumero || 'facture-packing'}.pdf`;
    pdf.save(fileName);
  }

  async printInvoice(): Promise<void> {
    if (this.printLoading) return;
    this.printLoading = true;

    const invoice = document.getElementById('packing-facture-invoice') as HTMLElement | null;
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
            .packing-facture-print-root {
              width: 100%;
              margin: 0;
              padding: 0;
              background: #ffffff;
            }
            #packing-facture-invoice {
              position: relative !important;
              overflow: visible !important;
            }
            .packing-status-ribbon {
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
          <div class="packing-facture-print-root">${exportNode.outerHTML}</div>
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

  private async buildInvoicePdf(): Promise<any | null> {
    const invoice = document.getElementById('packing-facture-invoice') as HTMLElement | null;
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

  payer(): void {
    if (!this.packing || !this.canPay) return;
    const packingId = this.packing.id;

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

    const dto: StoreVersementDto = {
      montant: this.encaissementMontant,
      date_versement: this.formatApiDate(new Date()),
      mode_paiement: this.encaissementMode,
    };

    this.encaissementSaving = true;
    this.packingService.createVersement(packingId, dto).subscribe({
      next: (response) => {
        if (response.data?.packing) {
          this.packing = response.data.packing;
        }
        if (response.data?.versement) {
          this.versements = [response.data.versement, ...this.versements];
        }
        this.syncEncaissementDefaults();

        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: `Versement de ${this.formatAmount(dto.montant)} enregistre.`,
          life: 3000,
        });
        this.loadPacking(packingId);
      },
      error: (error) => {
        this.encaissementSaving = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: error?.error?.message || "Impossible d'enregistrer le versement.",
          life: 4000,
        });
      },
    });
  }

  private loadPacking(id: number): void {
    this.loading = true;
    this.packingService.getPacking(id).subscribe({
      next: (response) => {
        this.packing = response.data;
        this.loadUsineFacture();
        this.syncEncaissementDefaults();
        this.loadVersements(id);
      },
      error: () => {
        this.loading = false;
        this.encaissementSaving = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger la facture packing.',
          life: 4000,
        });
      },
    });
  }

  private loadVersements(id: number): void {
    this.packingService.getVersements(id).subscribe({
      next: (response) => {
        this.versements = response.data?.versements || [];
        this.loading = false;
        this.encaissementSaving = false;
        this.syncEncaissementDefaults();
      },
      error: () => {
        this.versements = [];
        this.loading = false;
        this.encaissementSaving = false;
        this.syncEncaissementDefaults();
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

  private sumVersementsByMode(mode: ModePaiement): number {
    return this.versements
      .filter((versement) => versement.mode_paiement === mode)
      .reduce((sum, versement) => sum + (versement.montant || 0), 0);
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

  private formatApiDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private getUsineFactureSource():
    | { nom?: string; adresse?: string | null; quartier?: string | null; ville?: string | null; pays?: string | null }
    | null {
    const packingUsine = this.extractUsineFromPacking();
    const apiUsine = this.usineFacture;
    const contextUsine = this.usineContext.currentUsine();

    if (!packingUsine && !apiUsine && !contextUsine) return null;

    return {
      nom: packingUsine?.nom ?? apiUsine?.nom ?? contextUsine?.nom,
      adresse: packingUsine?.adresse ?? apiUsine?.adresse ?? contextUsine?.adresse ?? null,
      quartier: packingUsine?.quartier ?? apiUsine?.quartier ?? contextUsine?.quartier ?? null,
      ville: packingUsine?.ville ?? apiUsine?.ville ?? contextUsine?.ville ?? null,
      pays: packingUsine?.pays ?? apiUsine?.pays ?? contextUsine?.pays ?? null,
    };
  }

  private extractUsineFromPacking():
    | { nom?: string; adresse?: string | null; quartier?: string | null; ville?: string | null; pays?: string | null }
    | null {
    const raw = this.packing as Record<string, unknown> | null;
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

  private resolveUsineIdForFacture(): number | null {
    const raw = this.packing as Record<string, unknown> | null;
    const fromPacking =
      this.pickNumber(raw?.['usine_id']) ??
      this.pickNumber(raw?.['usineId']) ??
      this.pickNumber((raw?.['usine'] as Record<string, unknown> | undefined)?.['id']);

    if (fromPacking) return fromPacking;
    return this.usineContext.currentUsineId();
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

}

