import { Component, HostListener, Inject, OnDestroy, OnInit, effect, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';
import { StyleClassModule } from 'primeng/styleclass';

import { AuthService } from '@/services/auth/auth.service';
import { PackingService } from '@/services/packing/packing.service';
import {
  Packing,
  Versement,
  VersementIndexResponse,
  StoreVersementDto,
  ModePaiement,
  MODE_PAIEMENT_LABELS,
  PACKING_STATUT_SEVERITY,
  PackingStatutSeverity,
} from '@/models/packing.model';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';
import { ComptabilitePackingPaiement, PaiementPayload } from '../components/comptabilite-packing-paiement/comptabilite-packing-paiement';
import { ComptabiliteHistoriqueVersements } from '../components/comptabilite-historique-versements/comptabilite-historique-versements';
import { MoneyPipe } from '@/pipes/money.pipe';
import { UsineContextService } from '@/services/usine/usine-context.service';

interface ModePaiementOption {
  label: string;
  value: ModePaiement;
}

@Component({
  selector: 'app-comptabilite-packing-detail',
  templateUrl: './comptabilite-packing-detail.html',
  styleUrl: './comptabilite-packing-detail.scss',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    DialogModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
    DatePickerModule,
    TextareaModule,
    TooltipModule,
    PhoneFormatPipe,
    StyleClassModule,
    ComptabilitePackingPaiement,
    ComptabiliteHistoriqueVersements,
    MoneyPipe,
  ],
  providers: [MessageService, ConfirmationService],
})
export class ComptabilitePackingDetail implements OnInit, OnDestroy {
  private readonly mobileBreakpoint = 768;
  private readonly mobilePwaClass = 'comptabilite-packing-detail-mobile-pwa';
  private hasInitializedUsineWatcher = false;

  prestataireId: number = 0;
  prestataireNom: string = '';
  prestatairePhone: string = '';

  packings = signal<Packing[]>([]);
  loading: boolean = false;

  totalMontant: number = 0;
  totalVerse: number = 0;
  totalRestant: number = 0;

  // Dialog versement
  versementDialog: boolean = false;
  selectedPacking: Packing | null = null;
  versementData: {
    montant: number | null;
    date_versement: Date | null;
    mode_paiement: ModePaiement;
    notes: string;
  } = {
    montant: null,
    date_versement: new Date(),
    mode_paiement: 'especes',
    notes: '',
  };
  versementSaving: boolean = false;
  versementSubmitted: boolean = false;

  modesPaiement: ModePaiementOption[] = [
    { label: MODE_PAIEMENT_LABELS.especes, value: 'especes' },
    { label: MODE_PAIEMENT_LABELS.virement, value: 'virement' },
    { label: MODE_PAIEMENT_LABELS.cheque, value: 'cheque' },
    { label: MODE_PAIEMENT_LABELS.mobile_money, value: 'mobile_money' },
  ];

  // Dialog historique versements
  historiqueDialog: boolean = false;
  historiqueData: VersementIndexResponse | null = null;
  historiqueLoading: boolean = false;

  // Permissions
  canReadVersement: boolean = false;
  canCreateVersement: boolean = false;
  canDeleteVersement: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private packingService: PackingService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private usineContext: UsineContextService,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.canReadVersement = this.authService.hasPermission('versements.read');
    this.canCreateVersement = this.authService.hasPermission('versements.create');
    this.canDeleteVersement = false;

    effect(() => {
      this.usineContext.currentUsineId();
      this.usineContext.isConsolidated();

      if (!this.hasInitializedUsineWatcher) {
        this.hasInitializedUsineWatcher = true;
        return;
      }

      if (this.prestataireId) {
        this.loadPackings();
      }
    });
  }

  ngOnInit() {
    this.syncMobilePwaMode();
    this.route.params.subscribe((params) => {
      this.prestataireId = +params['id'] || 0;
      if (this.prestataireId) {
        this.loadPackings();
      } else {
        this.packings.set([]);
        this.calculateTotals([]);
      }
    });
    this.route.queryParams.subscribe((params) => {
      this.prestataireNom = params['prestataire_nom'] || '';
      this.prestatairePhone = params['prestataire_phone'] || '';
    });
  }

  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.syncMobilePwaMode();
  }

  private syncMobilePwaMode() {
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }

  loadPackings() {
    this.loading = true;
    this.packingService.getPackings({ prestataire_id: this.prestataireId, per_page: 500 }).subscribe({
      next: (response) => {
        const data: Packing[] = 'data' in response && Array.isArray(response.data)
          ? response.data as Packing[]
          : ((response as any).data?.data ?? []) as Packing[];
        this.packings.set(data);
        this.calculateTotals(data);
        this.loading = false;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: error?.error?.message || 'Impossible de charger les packings',
          life: 3000,
        });
        this.loading = false;
      },
    });
  }

  calculateTotals(packings: Packing[]) {
    this.totalMontant = packings.reduce((sum, p) => sum + (p.montant ?? 0), 0);
    this.totalVerse = packings.reduce((sum, p) => sum + (p.montant_verse ?? 0), 0);
    this.totalRestant = packings.reduce((sum, p) => sum + (p.montant_restant ?? 0), 0);
  }

  // ========================= Versement =========================

  openVersement(packing: Packing) {
    this.selectedPacking = packing;
    this.versementDialog = true;
    this.versementSubmitted = false;
    this.versementData = {
      montant: packing.montant_restant,
      date_versement: new Date(),
      mode_paiement: 'especes',
      notes: '',
    };
  }

  hideVersementDialog() {
    this.versementDialog = false;
    this.selectedPacking = null;
    this.versementSubmitted = false;
  }

  saveVersement() {
    this.versementSubmitted = true;

    if (!this.selectedPacking || !this.versementData.montant || !this.versementData.date_versement || this.versementSaving) {
      return;
    }

    this.versementSaving = true;

    const dto: StoreVersementDto = {
      montant: this.versementData.montant,
      date_versement: this.formatDate(this.versementData.date_versement),
      mode_paiement: this.versementData.mode_paiement,
      notes: this.versementData.notes || undefined,
    };

    this.packingService.createVersement(this.selectedPacking.id, dto).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: `Versement de ${this.formatCurrency(dto.montant)} enregistre`,
          life: 3000,
        });
        this.versementSaving = false;
        this.versementDialog = false;
        // Mettre a jour le packing localement
        if (response.data?.packing) {
          this.packings.update((list) =>
            list.map((p) => p.id === response.data.packing.id ? response.data.packing : p),
          );
          this.calculateTotals(this.packings());
        } else {
          this.loadPackings();
        }
      },
      error: (error) => {
        const msg = error?.error?.message || "Impossible d'enregistrer le versement";
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: msg,
          life: 5000,
        });
        this.versementSaving = false;
      },
    });
  }

  // ========================= Historique versements =========================

  openHistorique(packing: Packing) {
    if (this.isMobile) {
      this.historiqueSlideoverVisible = true;
    } else {
      this.historiqueDialog = true;
    }
    this.historiqueLoading = true;
    this.historiqueData = null;

    this.packingService.getVersements(packing.id).subscribe({
      next: (response) => {
        this.historiqueData = response.data;
        this.historiqueLoading = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les versements',
          life: 3000,
        });
        this.historiqueLoading = false;
        this.historiqueDialog = false;
        this.historiqueSlideoverVisible = false;
      },
    });
  }

  closeHistoriqueSlideover() {
    this.historiqueSlideoverVisible = false;
    this.historiqueData = null;
  }

  onHistoriqueDeleteVersement(versement: Versement) {
    if (!this.historiqueData) return;
    this.confirmDeleteVersement(this.historiqueData.packing.id, versement);
  }

  confirmDeleteVersement(packingId: number, versement: Versement) {
    if (!this.canDeleteVersement) return;
    this.confirmationService.confirm({
      message: `Supprimer le versement de ${this.formatCurrency(versement.montant)} ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Supprimer',
      rejectLabel: 'Annuler',
      accept: () => {
        this.packingService.deleteVersement(packingId, versement.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Succes',
              detail: 'Versement supprime',
              life: 3000,
            });
            // Recharger l'historique si ouvert
            if (this.historiqueData) {
              const packing = this.packings().find((p) => p.id === packingId);
              if (packing) this.openHistorique(packing);
            }
            this.loadPackings();
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: 'Impossible de supprimer le versement',
              life: 3000,
            });
          },
        });
      },
    });
  }

  // ========================= Helpers =========================

  getStatutSeverity(statut: string): PackingStatutSeverity {
    return (PACKING_STATUT_SEVERITY as any)[statut] ?? 'info';
  }

  canPay(packing: Packing): boolean {
    return packing.statut !== 'annulee' && packing.montant_restant > 0;
  }

  formatDate(date: any): string {
    if (!date) return '';
    if (typeof date === 'string') return date;
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(value) + ' GNF';
  }

  formatDateDisplay(dateStr: string | Date): string {
    if (!dateStr) return '';
    const date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr;
    return date.toLocaleDateString('fr-FR');
  }

  goBack() {
    this.router.navigate(['/comptabilite/comptabilite-packing-liste']);
  }

  // Slide-over historique (mobile)
  historiqueSlideoverVisible: boolean = false;

  get isMobile(): boolean {
    return typeof window !== 'undefined' && window.innerWidth <= this.mobileBreakpoint;
  }

  // Slide-over paiement
  slideoverVisible: boolean = false;
  slideoverPacking: Packing | null = null;
  slideoverSaving: boolean = false;

  openSlideoverPaiement(packing: Packing) {
    this.slideoverPacking = packing;
    this.slideoverVisible = true;
  }

  closeSlideoverPaiement() {
    this.slideoverVisible = false;
    this.slideoverPacking = null;
  }

  onSlideoverPay(payload: PaiementPayload) {
    if (!this.slideoverPacking || this.slideoverSaving) return;

    this.slideoverSaving = true;

    const dto: StoreVersementDto = {
      montant: payload.montant,
      date_versement: this.formatDate(new Date()),
      mode_paiement: payload.mode_paiement,
    };

    this.packingService.createVersement(this.slideoverPacking.id, dto).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: `Versement de ${this.formatCurrency(dto.montant)} enregistre`,
          life: 3000,
        });
        this.slideoverSaving = false;
        this.closeSlideoverPaiement();
        if (response.data?.packing) {
          this.packings.update((list) =>
            list.map((p) => p.id === response.data.packing.id ? response.data.packing : p),
          );
          this.calculateTotals(this.packings());
        } else {
          this.loadPackings();
        }
      },
      error: (error) => {
        const msg = error?.error?.message || "Impossible d'enregistrer le versement";
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: msg,
          life: 5000,
        });
        this.slideoverSaving = false;
      },
    });
  }
}
