import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';

import { PackingService } from '@/services/packing/packing.service';
import {
  Packing,
  PACKING_STATUT_LABELS,
  PACKING_STATUT_SEVERITY,
  PackingStatut,
  PackingStatutSeverity,
  ModePaiement,
  MODE_PAIEMENT_LABELS,
  StoreVersementDto,
  VersementIndexResponse,
  Versement,
} from '@/models/packing.model';
import { AuthService } from '@/services/auth/auth.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';
import { ComptabilitePackingPaiement, PaiementPayload } from '@/pages/comptabilite/components/comptabilite-packing-paiement/comptabilite-packing-paiement';
import { ComptabiliteHistoriqueVersements } from '@/pages/comptabilite/components/comptabilite-historique-versements/comptabilite-historique-versements';

interface ModePaiementOption {
  label: string;
  value: ModePaiement;
}

@Component({
  selector: 'app-packing-liste',
  standalone: true,
  templateUrl: './packing-liste.html',
  styleUrl: './packing-liste.scss',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    SkeletonModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    SelectModule,
    DatePickerModule,
    TooltipModule,
    ConfirmDialogModule,
    MenuModule,
    RippleModule,
    PhoneFormatPipe,
    DialogModule,
    InputNumberModule,
    TextareaModule,
    ComptabilitePackingPaiement,
    ComptabiliteHistoriqueVersements,
  ],
  providers: [MessageService, ConfirmationService],
})
export class PackingListe implements OnInit {
  packings = signal<Packing[]>([]);
  searchQuery = signal<string>('');
  selectedStatut = signal<PackingStatut | 'all'>('all');
  filterDateRange: Date[] | null = null;
  loading = false;
  canCreate = false;
  canUpdate = false;
  canDelete = false;
  canReadVersement = false;
  canCreateVersement = false;
  canDeleteVersement = false;
  private readonly mobileBreakpoint = 768;

  mobileFilterMenuItems: MenuItem[] = [];
  skeletonCols: number[] = [];
  private readyForUsineReload = false;

  // Versement dialog
  versementDialog = false;
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
  versementSaving = false;
  versementSubmitted = false;
  modesPaiement: ModePaiementOption[] = [
    { label: MODE_PAIEMENT_LABELS.especes, value: 'especes' },
    { label: MODE_PAIEMENT_LABELS.virement, value: 'virement' },
    { label: MODE_PAIEMENT_LABELS.cheque, value: 'cheque' },
    { label: MODE_PAIEMENT_LABELS.mobile_money, value: 'mobile_money' },
  ];

  // Historique dialog
  historiqueDialog = false;
  historiqueData: VersementIndexResponse | null = null;
  historiqueLoading = false;
  mobileHistoriqueVisible = false;

  // Slide-over paiement mobile
  mobilePaiementVisible = false;
  mobilePaiementPacking: Packing | null = null;
  mobilePaiementSaving = false;

  statutOptions = [
    { label: 'Tous les statuts', value: 'all' },
    { label: 'Impayee', value: 'impayee' },
    { label: 'Partielle', value: 'partielle' },
    { label: 'Payee', value: 'payee' },
    { label: 'Annulee', value: 'annulee' },
  ];

  filteredPackings = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const list = this.packings();
    if (!query) return list;
    return list.filter((packing) => {
      const searchable = [
        packing.reference,
        packing.prestataire?.nom,
        packing.prestataire?.prenom,
        packing.prestataire?.phone,
        this.getStatutLabel(packing.statut),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return searchable.includes(query);
    });
  });

  get hasActionsColumn(): boolean {
    return this.canUpdate || this.canDelete || this.canCreateVersement || this.canReadVersement;
  }

  constructor(
    private packingService: PackingService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private router: Router,
    private usineContext: UsineContextService,
  ) {
    this.canCreate = this.authService.hasPermission('packings.create');
    this.canUpdate = this.authService.hasPermission('packings.update');
    this.canDelete = this.authService.hasPermission('packings.delete');
    this.canReadVersement = this.authService.hasPermission('versements.read');
    this.canCreateVersement = this.authService.hasPermission('versements.create');
    this.canDeleteVersement = false;
    this.skeletonCols = this.hasActionsColumn
      ? [1, 2, 3, 4, 5, 6, 7, 8, 9]
      : [1, 2, 3, 4, 5, 6, 7, 8];

    effect(() => {
      this.usineContext.currentUsineId();
      if (!this.readyForUsineReload) return;
      this.load();
    });
  }

  ngOnInit(): void {
    this.readyForUsineReload = true;
    this.load();
    this.mobileFilterMenuItems = [
      { label: 'Tous', icon: 'pi pi-list', command: () => this.setStatutFilter('all') },
      { label: 'Impayee', icon: 'pi pi-times-circle', command: () => this.setStatutFilter('impayee') },
      { label: 'Partielle', icon: 'pi pi-clock', command: () => this.setStatutFilter('partielle') },
      { label: 'Payee', icon: 'pi pi-check-circle', command: () => this.setStatutFilter('payee') },
      { label: 'Annulee', icon: 'pi pi-ban', command: () => this.setStatutFilter('annulee') },
    ];
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  load(): void {
    this.loading = true;
    const filters: Record<string, string> = {};
    const statut = this.selectedStatut();
    if (statut !== 'all') filters['statut'] = statut;
    if (this.filterDateRange?.[0]) filters['date_debut'] = this.formatDate(this.filterDateRange[0]);
    if (this.filterDateRange?.[1]) filters['date_fin'] = this.formatDate(this.filterDateRange[1]);

    this.packingService.getPackings(Object.keys(filters).length ? filters : undefined).subscribe({
      next: (response) => {
        const data = 'data' in response && Array.isArray(response.data)
          ? response.data
          : (response as any).data?.data ?? [];
        this.packings.set(data as Packing[]);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les packings.',
          life: 5000,
        });
      },
    });
  }

  goNew(): void {
    this.router.navigate(['/packings/packings-new']);
  }

  goEdit(packing: Packing): void {
    if (!this.canEditPacking(packing)) return;
    this.router.navigate(['/packings/packings-edit', packing.id]);
  }

  openVersementFromCard(event: Event, packing: Packing): void {
    event.stopPropagation();
    if (this.isMobile) {
      this.openMobilePaiement(packing);
      return;
    }
    this.openVersement(packing);
  }

  openHistoriqueFromCard(event: Event, packing: Packing): void {
    event.stopPropagation();
    this.openHistorique(packing);
  }

  goEditFromCard(event: Event, packing: Packing): void {
    event.stopPropagation();
    this.goEdit(packing);
  }

  openMobilePaiement(packing: Packing): void {
    this.mobilePaiementPacking = packing;
    this.mobilePaiementVisible = true;
  }

  closeMobilePaiement(): void {
    this.mobilePaiementVisible = false;
    this.mobilePaiementPacking = null;
    this.mobilePaiementSaving = false;
  }

  onMobilePay(payload: PaiementPayload): void {
    if (!this.mobilePaiementPacking || this.mobilePaiementSaving) return;

    this.mobilePaiementSaving = true;
    const dto: StoreVersementDto = {
      montant: payload.montant,
      date_versement: this.formatDate(new Date()),
      mode_paiement: payload.mode_paiement,
    };

    this.packingService.createVersement(this.mobilePaiementPacking.id, dto).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: `Versement de ${this.formatCurrency(dto.montant)} enregistre`,
          life: 3000,
        });
        this.closeMobilePaiement();
        if (response.data?.packing) {
          this.packings.update((list) =>
            list.map((p) => p.id === response.data.packing.id ? response.data.packing : p),
          );
        } else {
          this.load();
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
        this.mobilePaiementSaving = false;
      },
    });
  }

  setStatutFilter(value: string): void {
    this.selectedStatut.set(value as PackingStatut | 'all');
    this.load();
  }

  onDateRangeSelect(): void {
    if (this.filterDateRange?.[1]) this.load();
  }

  clearFilters(): void {
    this.selectedStatut.set('all');
    this.filterDateRange = null;
    this.load();
  }

  hasActiveFilters(): boolean {
    return !!this.filterDateRange || this.selectedStatut() !== 'all';
  }

  deletePacking(packing: Packing): void {
    this.confirmationService.confirm({
      message: `Supprimer definitivement le packing <strong>${packing.reference}</strong> ?`,
      header: 'Supprimer le packing',
      icon: 'pi pi-trash',
      rejectButtonProps: { label: 'Annuler', severity: 'secondary', outlined: true },
      acceptButtonProps: { label: 'Supprimer', severity: 'danger' },
      accept: () => {
        this.packingService.deletePacking(packing.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Supprime',
              detail: `Packing ${packing.reference} supprime.`,
              life: 3000,
            });
            this.packings.update((list) => list.filter((item) => item.id !== packing.id));
          },
          error: (err) => this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: err.error?.message || 'Impossible de supprimer.',
            life: 5000,
          }),
        });
      },
    });
  }

  canPay(packing: Packing): boolean {
    return packing.statut !== 'annulee' && (packing.montant_restant ?? 0) > 0;
  }

  canEditPacking(packing: Packing): boolean {
    return this.canUpdate && packing.statut === 'impayee';
  }

  openVersement(packing: Packing): void {
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

  hideVersementDialog(): void {
    this.versementDialog = false;
    this.selectedPacking = null;
    this.versementSubmitted = false;
  }

  saveVersement(): void {
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
        if (response.data?.packing) {
          this.packings.update((list) =>
            list.map((p) => p.id === response.data.packing.id ? response.data.packing : p),
          );
        } else {
          this.load();
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

  openHistorique(packing: Packing): void {
    if (this.isMobile) {
      this.mobileHistoriqueVisible = true;
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
        this.mobileHistoriqueVisible = false;
      },
    });
  }

  closeMobileHistorique(): void {
    this.mobileHistoriqueVisible = false;
    this.historiqueLoading = false;
    this.historiqueData = null;
  }

  onMobileHistoriqueDeleteVersement(versement: Versement): void {
    this.confirmDeleteVersement(versement);
  }

  confirmDeleteVersement(versement: Versement): void {
    if (!this.canDeleteVersement) return;
    if (!this.historiqueData) return;
    const packingId = this.historiqueData.packing.id;
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
            const packing = this.packings().find((p) => p.id === packingId);
            if (packing) this.openHistorique(packing);
            this.load();
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

  getInitials(packing: Packing): string {
    const prenom = packing.prestataire?.prenom ?? '';
    const nom = packing.prestataire?.nom ?? '';
    if (!prenom && !nom) return '--';
    return `${prenom.charAt(0)}${nom.charAt(0)}`.toUpperCase();
  }

  getStatutLabel(statut: PackingStatut): string {
    return PACKING_STATUT_LABELS[statut] || statut;
  }

  getStatutSeverity(statut: PackingStatut): PackingStatutSeverity {
    return PACKING_STATUT_SEVERITY[statut] || 'info';
  }

  getModeLabel(mode: string): string {
    return (MODE_PAIEMENT_LABELS as any)[mode] ?? mode;
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'decimal', minimumFractionDigits: 0 }).format(value) + ' GNF';
  }

  formatDateDisplay(dateStr: string | Date): string {
    if (dateStr == null) return '-';
    const date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr;
    return date.toLocaleDateString('fr-FR');
  }

  formatDateTime(dateStr: string): string {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });
  }

  get isMobile(): boolean {
    return typeof window !== 'undefined' && window.innerWidth <= this.mobileBreakpoint;
  }

  private formatDate(date: Date | string): string {
    if (!date) return '';
    if (typeof date === 'string') return date;
    return date.toISOString().split('T')[0];
  }
}
