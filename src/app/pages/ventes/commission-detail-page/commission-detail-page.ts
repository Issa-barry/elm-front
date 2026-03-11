import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';

import {
    BeneficiaireType,
    CommissionVente,
    MODE_PAIEMENT_OPTIONS,
    ModePaiement,
    STATUT_COMMISSION_LABELS,
    STATUT_COMMISSION_SEVERITY,
    STATUT_VERSEMENT_LABELS,
    STATUT_VERSEMENT_SEVERITY,
    StatutCommission,
    StatutVersement,
    StoreVersementDto,
    VersementCommission
} from '@/models/vente.model';
import { CommissionVenteService } from '@/services/ventes/commission-vente.service';

interface VersementTarget {
    commissionId: number;
    versement: VersementCommission;
    nom: string;
}

interface VersementFormErrors {
    montant?: string;
    modePaiement?: string;
}

function validateVersementMontant(montant: number | null, montantRestant: number): string | null {
    if (montant == null || montant === 0) return 'Le montant est obligatoire.';
    if (montant <= 0) return 'Le montant doit etre superieur a 0.';
    if (montant > montantRestant) return 'Le montant ne peut pas depasser le restant du.';
    return null;
}

@Component({
    selector: 'app-commission-detail-page',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TagModule,
        ButtonModule,
        ToastModule,
        SkeletonModule,
        DividerModule,
        DialogModule,
        InputNumberModule,
        SelectModule
    ],
    providers: [MessageService],
    templateUrl: './commission-detail-page.html',
    styleUrls: ['./commission-detail-page.scss']
})
export class CommissionDetailPage implements OnInit {
    private commissionId = 0;

    commission = signal<CommissionVente | null>(null);
    loadingDetail = signal(false);

    versementDialogVisible = false;
    versementTarget = signal<VersementTarget | null>(null);

    versementMontant: number | null = null;
    versementModePaiement: ModePaiement | null = null;
    versementDate: Date = new Date();
    versementNote = '';
    versementErrors: VersementFormErrors = {};
    versementLoading = false;

    readonly modesPaiement = MODE_PAIEMENT_OPTIONS;
    parseFloat = parseFloat;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly commissionService: CommissionVenteService,
        private readonly messageService: MessageService
    ) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (!id) {
            this.router.navigate(['/ventes/commissions']);
            return;
        }
        this.commissionId = id;
        this.loadDetail();
    }

    goBack(): void {
        this.router.navigate(['/ventes/commissions']);
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
                    life: 5000
                });
            }
        });
    }

    canVerser(c: CommissionVente): boolean {
        return c.statut === 'impayee' || c.statut === 'partielle';
    }

    canVerserVersement(c: CommissionVente, v: VersementCommission): boolean {
        return this.canVerser(c) && v.statut !== 'effectue' && v.statut !== 'annule' && this.getMontantRestant(v) > 0;
    }

    getMontantRestant(v: VersementCommission): number {
        if (v.montant_restant !== undefined) return v.montant_restant;
        const attendu = parseFloat(v.montant_attendu ?? '0') || 0;
        const verse = parseFloat(v.montant_verse ?? '0') || 0;
        return Math.max(0, attendu - verse);
    }

    getBeneficiaireNom(c: CommissionVente, v: VersementCommission): string {
        if (v.beneficiaire_type === 'livreur') {
            return c.livreur ? `${c.livreur.prenom} ${c.livreur.nom}` : '-';
        }
        return c.proprietaire ? `${c.proprietaire.prenom} ${c.proprietaire.nom}` : '-';
    }

    openVersementDialog(c: CommissionVente, v: VersementCommission): void {
        this.versementTarget.set({
            commissionId: c.id,
            versement: v,
            nom: this.getBeneficiaireNom(c, v)
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
            note: this.versementNote || undefined
        };

        this.commissionService
            .verser(target.commissionId, target.versement.beneficiaire_type as BeneficiaireType, dto)
            .subscribe({
                next: () => {
                    this.versementLoading = false;
                    this.versementDialogVisible = false;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Versement effectue',
                        detail: `Versement de ${this.formatMontant(this.versementMontant)} effectue avec succes`,
                        life: 4000
                    });
                    this.loadDetail();
                },
                error: (err: unknown) => {
                    this.versementLoading = false;
                    const e = err as { error?: { message?: string } };
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreur',
                        detail: e?.error?.message ?? 'Une erreur est survenue.',
                        life: 5000
                    });
                }
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
        if (n == null || n === '') return '-';
        const num = typeof n === 'string' ? parseFloat(n) : n;
        return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
    }

    formatDate(d: string | null): string {
        if (!d) return '-';
        const normalized = d.includes(' ') && !d.includes('T') ? d.replace(' ', 'T') : d;
        const parsed = new Date(normalized);
        if (Number.isNaN(parsed.getTime())) return d;
        return parsed.toLocaleString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
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
