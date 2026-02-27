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

import { CommissionVenteService } from '@/services/ventes/commission-vente.service';
import {
  CommissionVente,
  VersementCommission,
  BeneficiaireType,
  StatutCommission,
  StatutVersement,
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
  ],
  providers: [MessageService],
  templateUrl: './commission-detail-dialog.html',
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
  versementNote = '';
  versementDate: Date = new Date();
  versementLoading = false;

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
    return c.statut === 'eligible' || c.statut === 'partiellement_versee';
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
    this.versementNote = '';
    this.versementDate = new Date();
    this.versementDialogVisible = true;
  }

  confirmVersement(): void {
    const target = this.versementTarget();
    if (!target || this.versementLoading) return;
    this.versementLoading = true;
    const dateIso = this.versementDate instanceof Date
      ? this.versementDate.toISOString().split('T')[0]
      : String(this.versementDate);

    this.commissionService
      .verser(
        target.commissionId,
        target.versement.beneficiaire_type as BeneficiaireType,
        this.versementNote || undefined,
        dateIso
      )
      .subscribe({
        next: () => {
          this.versementLoading = false;
          this.versementDialogVisible = false;
          const montant = this.formatMontant(target.versement.montant_attendu);
          this.messageService.add({
            severity: 'success',
            summary: 'Versement effectué',
            detail: `Versement de ${montant} effectué avec succès`,
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

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
  }

  formatDate(d: string | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
