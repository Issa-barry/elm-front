import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';

import { CommissionVenteService } from '@/services/ventes/commission-vente.service';
import {
  CommissionVente,
  VersementCommission,
  BeneficiaireType,
  ModePaiement,
  StatutCommission,
  StatutVersement,
  StoreVersementDto,
  MODE_PAIEMENT_OPTIONS,
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY,
  STATUT_VERSEMENT_LABELS,
  STATUT_VERSEMENT_SEVERITY,
} from '@/models/vente.model';

interface VersementTarget {
  commissionId: number;
  versement: VersementCommission;
  nom: string;
}

interface VersementFormErrors {
  montant?: string;
  modePaiement?: string;
}

export function validateVersementMontant(
  montant: number | null,
  montantRestant: number
): string | null {
  if (montant == null || montant === 0) return 'Le montant est obligatoire.';
  if (montant <= 0) return 'Le montant doit être supérieur à 0.';
  if (montant > montantRestant)
    return `Le montant ne peut pas dépasser le restant dû.`;
  return null;
}

@Component({
  selector: 'app-commission-detail-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    TagModule,
    ButtonModule,
    ToastModule,
    SkeletonModule,
    DividerModule,
    TextareaModule,
    DatePickerModule,
    InputNumberModule,
    SelectModule,
  ],
  providers: [MessageService],
  templateUrl: './commission-detail-dialog.html',
  styleUrls: ['./commission-detail-dialog.scss'],
})
export class CommissionDetailDialog implements OnChanges {
  @Input() commissionId!: number;
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onVersementDone = new EventEmitter<void>();

  commission = signal<CommissionVente | null>(null);
  loadingDetail = signal(false);

  versementDialogVisible = false;
  versementTarget = signal<VersementTarget | null>(null);

  // form fields
  versementMontant: number | null = null;
  versementModePaiement: ModePaiement | null = null;
  versementDate: Date = new Date();
  versementNote = '';
  versementErrors: VersementFormErrors = {};
  versementLoading = false;

  readonly modesPaiement = MODE_PAIEMENT_OPTIONS;

  parseFloat = parseFloat;

  constructor(
    private commissionService: CommissionVenteService,
    private messageService: MessageService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']?.currentValue === true && this.commissionId) {
      this.loadDetail();
    }
    if (changes['visible']?.currentValue === false) {
      this.commission.set(null);
    }
  }

  loadDetail(): void {
    this.loadingDetail.set(true);
    this.commissionService.getById(this.commissionId).subscribe({
      next: (resp) => {
        this.commission.set(resp.data ?? null);
        this.loadingDetail.set(false);
      },
      error: (err: unknown) => {
        this.loadingDetail.set(false);
        const e = err as { error?: { message?: string } };
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: e?.error?.message ?? 'Impossible de charger la commission.',
          life: 5000,
        });
      },
    });
  }

  onDialogHide(): void {
    this.visibleChange.emit(false);
    this.commission.set(null);
  }

  canVerser(c: CommissionVente): boolean {
    return c.statut === 'impayee' || c.statut === 'partielle';
  }

  canVerserVersement(c: CommissionVente, v: VersementCommission): boolean {
    return (
      this.canVerser(c) &&
      v.statut !== 'effectue' &&
      v.statut !== 'annule' &&
      this.getMontantRestant(v) > 0
    );
  }

  getMontantRestant(v: VersementCommission): number {
    if (v.montant_restant !== undefined) return v.montant_restant;
    const attendu = parseFloat(v.montant_attendu ?? '0') || 0;
    const verse = parseFloat(v.montant_verse ?? '0') || 0;
    return Math.max(0, attendu - verse);
  }

  getBeneficiaireNom(c: CommissionVente, v: VersementCommission): string {
    if (v.beneficiaire_type === 'livreur') {
      return c.livreur ? `${c.livreur.prenom} ${c.livreur.nom}` : '—';
    }
    return c.proprietaire
      ? `${c.proprietaire.prenom} ${c.proprietaire.nom}`
      : '—';
  }

  openVersementDialog(c: CommissionVente, v: VersementCommission): void {
    this.versementTarget.set({
      commissionId: c.id,
      versement: v,
      nom: this.getBeneficiaireNom(c, v),
    });
    this.versementMontant = this.getMontantRestant(v) || null;
    this.versementModePaiement = 'especes';
    this.versementDate = new Date();
    this.versementNote = '';
    this.versementErrors = {};
    this.versementDialogVisible = true;
  }

  confirmVersement(): void {
    const target = this.versementTarget();
    if (!target || this.versementLoading) return;

    const restant = this.getMontantRestant(target.versement);
    if (!this.validateVersementForm(restant)) return;

    this.versementLoading = true;

    const dto: StoreVersementDto = {
      montant: this.versementMontant!,
      date_paiement: this.toApiDate(this.versementDate),
      mode_paiement: this.versementModePaiement!,
      note: this.versementNote || undefined,
    };

    this.commissionService
      .verser(
        target.commissionId,
        target.versement.beneficiaire_type as BeneficiaireType,
        dto
      )
      .subscribe({
        next: () => {
          this.versementLoading = false;
          this.versementDialogVisible = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Versement effectué',
            detail: `Versement de ${this.formatMontant(this.versementMontant)} effectué avec succès`,
            life: 4000,
          });
          this.loadDetail();
          this.onVersementDone.emit();
        },
        error: (err: unknown) => {
          this.versementLoading = false;
          const e = err as { error?: { message?: string } };
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: e?.error?.message ?? 'Une erreur est survenue.',
            life: 5000,
          });
        },
      });
  }

  private validateVersementForm(montantRestant: number): boolean {
    this.versementErrors = {};
    let valid = true;

    const montantErr = validateVersementMontant(this.versementMontant, montantRestant);
    if (montantErr) {
      this.versementErrors.montant = montantErr;
      valid = false;
    }

    if (!this.versementModePaiement) {
      this.versementErrors.modePaiement = 'Le mode de paiement est obligatoire.';
      valid = false;
    }

    return valid;
  }

  getStatutLabel(s: StatutCommission): string {
    return STATUT_COMMISSION_LABELS[s] ?? s;
  }

  getStatutSeverity(s: StatutCommission) {
    return STATUT_COMMISSION_SEVERITY[s] ?? 'info';
  }

  getVersementLabel(s: StatutVersement): string {
    return STATUT_VERSEMENT_LABELS[s] ?? s;
  }

  getVersementSeverity(s: StatutVersement) {
    return STATUT_VERSEMENT_SEVERITY[s] ?? 'info';
  }

  getVersementDate(v: VersementCommission): string | null {
    return v.verse_at ?? v.date_versement ?? null;
  }

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
  }

  formatDate(d: string | null): string {
    if (!d) return '—';
    const normalized = d.includes(' ') && !d.includes('T')
      ? d.replace(' ', 'T')
      : d;
    const parsed = new Date(normalized);
    if (Number.isNaN(parsed.getTime())) return d;
    return parsed.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  private toApiDate(value: Date | string): string {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
      const year = value.getFullYear();
      const month = String(value.getMonth() + 1).padStart(2, '0');
      const day = String(value.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return String(value ?? '').trim();
  }
}
