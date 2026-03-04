import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { SkeletonModule } from 'primeng/skeleton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';

import { FactureLivraisonService } from '@/services/livraisons/facture-livraison.service';
import { AuthService } from '@/services/auth/auth.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';
import {
  FactureVente,
  STATUT_FACTURE_LABELS,
  StatutFacture,
  MODE_PAIEMENT_OPTIONS,
  StoreEncaissementVenteDto,
  ModePaiement,
} from '@/models/vente.model';

@Component({
  selector: 'app-facture-vente-detail2',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    SelectModule,
    SkeletonModule,
    InputNumberModule,
    DatePickerModule,
    InputTextModule,
    StyleClassModule,
    PhoneFormatPipe,
  ],
  providers: [MessageService],
  templateUrl: './facture-vente-detail2.html',
  styleUrl: './facture-vente-detail2.scss',
})
export class FactureVenteDetail2 implements OnInit {
  facture: FactureVente | null = null;
  loading = false;
  encaissementSaving = false;
  encaissementDialogVisible = false;
  encaissementForm!: FormGroup;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;
  get canEncaissement(): boolean { return this.authService.hasPermission('encaissements.create'); }
  chevronRotated = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private factureService: FactureLivraisonService,
    private authService: AuthService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.router.navigate(['/notfound']);
      return;
    }
    this.initForm();
    this.loadFacture(id);
  }

  private initForm() {
    this.encaissementForm = this.fb.group({
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ['especes', Validators.required],
      date_encaissement: [new Date(), Validators.required],
      note: [''],
    });
  }

  loadFacture(id: number) {
    this.loading = true;
    this.factureService.getFacture(id).subscribe({
      next: (resp) => {
        this.facture = resp.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de charger la facture.', life: 4000 });
        setTimeout(() => this.router.navigate(['/ventes/factures']), 2500);
      },
    });
  }

  toggleChevron(): void {
    this.chevronRotated = !this.chevronRotated;
  }

  openEncaissementDialog() {
    this.encaissementForm = this.fb.group({
      montant: [this.facture?.montant_restant || null, [Validators.required, Validators.min(1)]],
      mode_paiement: ['especes', Validators.required],
      date_encaissement: [new Date(), Validators.required],
      note: [''],
    });
    this.encaissementDialogVisible = true;
  }

  onSaveEncaissement() {
    this.encaissementForm.markAllAsTouched();
    if (this.encaissementForm.invalid || !this.facture || this.encaissementSaving) return;

    const v = this.encaissementForm.value;
    const dto: StoreEncaissementVenteDto = {
      facture_vente_id: this.facture.id,
      montant: v.montant,
      mode_paiement: v.mode_paiement as ModePaiement,
      date_encaissement: this.formatDateIso(v.date_encaissement),
      note: v.note || undefined,
    };

    this.encaissementSaving = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.encaissementSaving = false;
        this.encaissementDialogVisible = false;
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Encaissement enregistré.', life: 3000 });
        this.loadFacture(this.facture!.id);
      },
      error: (err) => {
        this.encaissementSaving = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err.error?.message || "Erreur lors de l'enregistrement.",
          life: 5000,
        });
      },
    });
  }

  goBack() {
    this.router.navigate(['/ventes/factures']);
  }

  get canAddEncaissement(): boolean {
    return (
      this.canEncaissement &&
      !!this.facture &&
      this.facture.statut_facture !== 'payee' &&
      this.facture.statut_facture !== 'annulee'
    );
  }

  isEncaissementInvalid(name: string): boolean {
    const c = this.encaissementForm.get(name)!;
    return c.invalid && (c.dirty || c.touched);
  }

  // ── Statut helpers ────────────────────────────────────────────────────

  getStatutLabel(s: StatutFacture): string {
    return STATUT_FACTURE_LABELS[s] ?? s;
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

  // ── Mode paiement helpers ─────────────────────────────────────────────

  getModePaiementLabel(mode: string): string {
    return MODE_PAIEMENT_OPTIONS.find((o) => o.value === mode)?.label ?? mode;
  }

  getModePaiementIcon(mode: string): string {
    const map: Record<string, string> = {
      especes: 'pi-money-bill',
      mobile_money: 'pi-mobile',
      virement: 'pi-building',
      cheque: 'pi-file',
    };
    return map[mode] ?? 'pi-credit-card';
  }

  // ── Formatage ─────────────────────────────────────────────────────────

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
  }

  formatDate(d: string | undefined | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR');
  }

  private formatDateIso(d: Date | string): string {
    const date = typeof d === 'string' ? new Date(d) : d;
    return date.toISOString().split('T')[0];
  }
}
