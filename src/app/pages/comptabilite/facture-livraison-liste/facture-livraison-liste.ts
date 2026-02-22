import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TableModule, Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

import { FactureLivraisonService } from '@/services/livraisons/facture-livraison.service';
import { VehiculeService } from '@/services/vehicules/vehicule.service';
import { AuthService } from '@/services/auth/auth.service';
import {
  FactureLivraison,
  FACTURE_LIV_STATUT_LABELS,
  FACTURE_LIV_STATUT_SEVERITY,
  FactureLivraisonStatut,
  StoreFactureLivraisonDto,
} from '@/models/livraison.model';
import { Vehicule } from '@/models/vehicule.model';

@Component({
  selector: 'app-facture-livraison-liste',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    InputNumberModule,
    TagModule,
    SkeletonModule,
    DialogModule,
    SelectModule,
    DatePickerModule,
    TextareaModule,
    TooltipModule,
    InputIconModule,
    IconFieldModule,
  ],
  providers: [MessageService],
  templateUrl: './facture-livraison-liste.html',
})
export class FactureLivraisonListe implements OnInit {
  factures = signal<FactureLivraison[]>([]);
  vehicules: Vehicule[] = [];

  loading = false;
  saving = false;
  dialogVisible = false;

  createForm!: FormGroup;

  vehiculeOptions: { label: string; value: number }[] = [];

  canCreate = false;

  constructor(
    private fb: FormBuilder,
    private factureService: FactureLivraisonService,
    private vehiculeService: VehiculeService,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.canCreate = this.authService.hasPermission('factures-livraisons.create');
  }

  ngOnInit() {
    this.initForm();
    this.loadFactures();
    this.loadVehicules();
  }

  private initForm() {
    this.createForm = this.fb.group({
      vehicule_id: [null, Validators.required],
      montant: [null, [Validators.required, Validators.min(1)]],
      date_facture: [new Date(), Validators.required],
      description: [''],
    });
  }

  loadFactures() {
    this.loading = true;
    this.factureService.getFactures().subscribe({
      next: (resp) => {
        this.factures.set(Array.isArray(resp.data) ? resp.data : []);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, 'charger les factures');
      },
    });
  }

  loadVehicules() {
    this.vehiculeService.getAll().subscribe({
      next: (resp) => {
        this.vehicules = Array.isArray(resp.data) ? resp.data : [];
        this.vehiculeOptions = this.vehicules.map((v) => ({
          label: `${v.nom_vehicule} — ${v.immatriculation}`,
          value: v.id,
        }));
      },
      error: () => {}, // Silencieux : liste non critique pour le rendu principal
    });
  }

  openCreateDialog() {
    this.initForm();
    this.dialogVisible = true;
  }

  onSaveFacture() {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid || this.saving) return;

    const v = this.createForm.value;
    const dto: StoreFactureLivraisonDto = {
      vehicule_id: v.vehicule_id,
      montant: v.montant,
      date_facture: this.formatDate(v.date_facture),
      description: v.description || undefined,
    };

    this.saving = true;
    this.factureService.createFacture(dto).subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Facture créée.',
          life: 3000,
        });
        this.loadFactures();
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, 'Impossible de créer la facture');
      },
    });
  }

  goDetail(id: number) {
    this.router.navigate(['/comptabilite/factures-livraison', id]);
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  isInvalid(name: string): boolean {
    const c = this.createForm.get(name)!;
    return c.invalid && (c.dirty || c.touched);
  }

  getStatutLabel(s: FactureLivraisonStatut): string {
    return FACTURE_LIV_STATUT_LABELS[s] ?? s;
  }

  getStatutSeverity(s: FactureLivraisonStatut) {
    return FACTURE_LIV_STATUT_SEVERITY[s] ?? 'info';
  }

  formatDate(d: Date | string): string {
    if (!d) return '';
    const date = typeof d === 'string' ? new Date(d) : d;
    return date.toISOString().split('T')[0];
  }

  formatDateDisplay(d: string): string {
    if (!d) return '';
    return new Date(d).toLocaleDateString('fr-FR');
  }

  formatMontant(n: number): string {
    return new Intl.NumberFormat('fr-FR').format(n ?? 0) + ' GNF';
  }

  private showApiError(err: any, action: string) {
    if (err.status === 422 && err.error?.errors) {
      const msgs = Object.values(err.error.errors).flat() as string[];
      msgs.forEach((m) =>
        this.messageService.add({ severity: 'error', summary: 'Erreur de validation', detail: m, life: 5000 })
      );
      return;
    }
    const summaryMap: Record<number, string> = {
      401: 'Session expirée',
      403: 'Accès refusé',
      404: 'Introuvable',
      409: 'Conflit',
      0: 'Serveur inaccessible',
    };
    const detailMap: Record<number, string> = {
      401: 'Votre session a expiré. Veuillez vous reconnecter.',
      403: `Vous n'avez pas la permission de ${action}.`,
      404: 'La ressource demandée est introuvable.',
      0: 'Impossible de joindre le serveur. Vérifiez votre connexion réseau.',
    };
    this.messageService.add({
      severity: err.status === 409 ? 'warn' : 'error',
      summary: summaryMap[err.status] ?? `Erreur ${err.status || ''}`.trim(),
      detail: detailMap[err.status] ?? err.error?.message ?? `Une erreur est survenue (${action}).`,
      life: 5000,
    });
  }
}
