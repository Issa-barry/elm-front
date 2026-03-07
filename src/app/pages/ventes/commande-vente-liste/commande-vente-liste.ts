import { Component, HostListener, Inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
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
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { DividerModule } from 'primeng/divider';
import { Menu, MenuModule } from 'primeng/menu';

import { CommandeMobileForm } from './commande-mobile-form/commande-mobile-form';
import { CommissionDetailDialog } from '../commission-detail-dialog/commission-detail-dialog';
import { CommandeVenteService } from '@/services/ventes/commande-vente.service';
import { VehiculeService } from '@/services/vehicules/vehicule.service';
import { ProduitService } from '@/services/produits/produits.service';
import { AuthService } from '@/services/auth/auth.service';
import {
  CommandeVente,
  STATUT_FACTURE_LABELS,
  StatutFacture,
  StatutCommission,
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY,
  StoreCommandeVenteDto,
  UpdateCommandeVenteDto,
} from '@/models/vente.model';
import { Vehicule } from '@/models/vehicule.model';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

interface ProduitData {
  prixUsine: number;
  prixVente: number;
  nom: string;
}

@Component({
  selector: 'app-commande-vente-liste',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
    TooltipModule,
    InputIconModule,
    IconFieldModule,
    DividerModule,
    MenuModule,
    CommandeMobileForm,
    PhoneFormatPipe,
    CommissionDetailDialog,
  ],
  providers: [MessageService],
  templateUrl: './commande-vente-liste.html',
  styleUrls: ['./commande-vente-liste.scss'],
})
export class CommandeVenteListe implements OnInit, OnDestroy {
  commandes = signal<CommandeVente[]>([]);
  readonly isMobile = signal(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  private readonly mobilePwaClass = 'ventes-mobile-pwa';

  loading = false;
  saving = false;
  dialogVisible = false;
  editMode = false;
  editingId: number | null = null;

  // Annulation
  annulationDialogVisible = false;
  annulationLoading = false;
  commandeToAnnuler: CommandeVente | null = null;
  motifAnnulation = '';

  // Filtre statut
  filtreStatut = signal<'all' | StatutFacture>('all');
  statutOptions: { label: string; value: 'all' | StatutFacture }[] = [
    { label: 'Toutes', value: 'all' },
    { label: 'Impayees', value: 'impayee' },
    { label: 'Partielles', value: 'partiel' },
    { label: 'Payees', value: 'payee' },
    { label: 'Annulees', value: 'annulee' },
  ];

  createForm!: FormGroup;
  vehiculeOptions: { label: string; value: number }[] = [];
  produitOptions: { label: string; value: number }[] = [];

  get canCreate(): boolean { return this.authService.hasPermission('commandes.create'); }
  get canUpdate(): boolean { return this.authService.hasPermission('commandes.update'); }
  get canDelete(): boolean { return this.authService.hasPermission('commandes.delete'); }

  // Commission detail dialog
  selectedCommissionId = signal<number | null>(null);
  commissionDetailVisible = signal(false);
  desktopRowMenuItems: MenuItem[] = [];
  produitData = new Map<number, ProduitData>();
  defaultProduitId: number | null = null;
  mobileSearchQuery = '';

  get commandesFiltreesParStatutFacture(): CommandeVente[] {
    const statut = this.filtreStatut();
    if (statut === 'all') return this.commandes();
    return this.commandes().filter((c) => c.facture?.statut_facture === statut);
  }

  get filteredCommandes(): CommandeVente[] {
    const q = this.mobileSearchQuery.trim().toLowerCase();
    const base = this.commandesFiltreesParStatutFacture;
    if (!q) return base;
    return base.filter((c) =>
      c.reference?.toLowerCase().includes(q) ||
      c.vehicule?.nom_vehicule?.toLowerCase().includes(q) ||
      c.vehicule?.immatriculation?.toLowerCase().includes(q)
    );
  }

  get totalDialog(): number {
    if (!this.createForm) return 0;
    return this.lignes.controls.reduce((sum, ctrl) => {
      const qte = ctrl.get('qte')?.value ?? 0;
      const prixVente = ctrl.get('prix_vente')?.value ?? 0;
      return sum + prixVente * qte;
    }, 0);
  }

  getTotalLigne(i: number): number {
    const ctrl = this.lignes.at(i);
    return (ctrl.get('prix_vente')?.value ?? 0) * (ctrl.get('qte')?.value ?? 0);
  }

  getPrixUsine(i: number): number {
    const produitId = this.lignes.at(i).get('produit_id')?.value;
    return this.produitData.get(produitId)?.prixUsine ?? 0;
  }

  isAnnulee(c: CommandeVente): boolean {
    return c.statut === 'annulee';
  }

  isLocked(c: CommandeVente): boolean {
    return this.isAnnulee(c) || (c.facture?.montant_encaisse ?? 0) > 0;
  }

  hasDesktopRowMenuActions(c: CommandeVente): boolean {
    return this.getDesktopRowMenuItems(c).length > 0;
  }

  getDesktopRowMenuItems(c: CommandeVente): MenuItem[] {
    const items: MenuItem[] = [];

    if (this.canUpdate) {
      items.push({
        label: 'Modifier',
        icon: 'pi pi-pen-to-square',
        disabled: this.isLocked(c),
        command: () => this.openEditDialog(c),
      });
    }

    if (this.canDelete) {
      items.push({
        label: 'Annuler',
        icon: 'pi pi-ban',
        disabled: this.isAnnulee(c),
        command: () => this.openAnnulationDialog(c),
      });
    }

    return items;
  }

  openDesktopRowMenu(event: Event, menu: Menu, c: CommandeVente): void {
    event.stopPropagation();
    this.desktopRowMenuItems = this.getDesktopRowMenuItems(c);
    if (this.desktopRowMenuItems.length === 0) return;
    menu.toggle(event);
  }

  constructor(
    private fb: FormBuilder,
    private commandeService: CommandeVenteService,
    private vehiculeService: VehiculeService,
    private produitService: ProduitService,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.isMobile.set(window.innerWidth < 768);
    this.syncMobilePwaMode();
  }

  ngOnInit() {
    this.syncMobilePwaMode();
    this.initForm();
    this.loadCommandes();
    this.loadVehicules();
    this.loadProduits();
  }

  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }

  private syncMobilePwaMode(): void {
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= 768) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }

  private initForm() {
    this.createForm = this.fb.group({
      vehicule_id: [null, Validators.required],
      lignes: this.fb.array([this.createLigneGroup()]),
    });
  }

  private createLigneGroup(data?: { produit_id?: number; qte?: number; prix_vente?: number }): FormGroup {
    return this.fb.group({
      produit_id: [data?.produit_id ?? null, Validators.required],
      qte: [data?.qte ?? 1, [Validators.required, Validators.min(1)]],
      prix_vente: [data?.prix_vente ?? null, [Validators.required, Validators.min(0)]],
    });
  }

  get lignes(): FormArray {
    return this.createForm.get('lignes') as FormArray;
  }

  addLigne() {
    if (this.defaultProduitId) {
      const existingIdx = this.lignes.controls.findIndex(
        ctrl => ctrl.get('produit_id')?.value === this.defaultProduitId
      );
      if (existingIdx !== -1) {
        const ctrl = this.lignes.at(existingIdx);
        ctrl.patchValue({ qte: (ctrl.get('qte')?.value ?? 1) + 1 });
        return;
      }
    }
    this.lignes.push(this.createLigneGroup());
    if (this.defaultProduitId) {
      const i = this.lignes.length - 1;
      this.lignes.at(i).patchValue({ produit_id: this.defaultProduitId });
      this.onProduitChange(i, this.defaultProduitId);
    }
  }

  removeLigne(i: number) {
    if (this.lignes.length > 1) this.lignes.removeAt(i);
  }

  onProduitChange(i: number, produitId: number) {
    const data = this.produitData.get(produitId);
    if (data) {
      this.lignes.at(i).patchValue({ prix_vente: data.prixVente });
    }
    const duplicateIdx = this.lignes.controls.findIndex(
      (ctrl, idx) => idx !== i && ctrl.get('produit_id')?.value === produitId
    );
    if (duplicateIdx !== -1) {
      const addedQte = this.lignes.at(i).get('qte')?.value ?? 1;
      const existingQte = this.lignes.at(duplicateIdx).get('qte')?.value ?? 1;
      this.lignes.at(duplicateIdx).patchValue({ qte: existingQte + addedQte });
      this.lignes.removeAt(i);
    }
  }

  openCreateDialog() {
    this.editMode = false;
    this.editingId = null;
    this.initForm();
    if (this.defaultProduitId) {
      this.lignes.at(0).patchValue({ produit_id: this.defaultProduitId });
      this.onProduitChange(0, this.defaultProduitId);
    }
    this.dialogVisible = true;
  }

  openEditDialog(c: CommandeVente) {
    this.editMode = true;
    this.editingId = c.id;
    const lignesGroups = (c.lignes ?? []).map((l) =>
      this.createLigneGroup({ produit_id: l.produit_id, qte: l.qte, prix_vente: l.prix_vente_snapshot })
    );
    this.createForm = this.fb.group({
      vehicule_id: [c.vehicule_id, Validators.required],
      lignes: this.fb.array(lignesGroups.length ? lignesGroups : [this.createLigneGroup()]),
    });
    this.dialogVisible = true;
  }

  onMobileEditAction(event: Event, c: CommandeVente): void {
    event.stopPropagation();
    this.openEditDialog(c);
  }

  onMobileAnnulationAction(event: Event, c: CommandeVente): void {
    event.stopPropagation();
    this.openAnnulationDialog(c);
  }

  onSaveCommande() {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid || this.saving) return;
    this.editMode ? this.doUpdateCommande() : this.doCreateCommande();
  }

  private doCreateCommande() {
    const v = this.createForm.value;
    const dto: StoreCommandeVenteDto = {
      vehicule_id: v.vehicule_id,
      lignes: v.lignes.map((l: any) => ({ produit_id: l.produit_id, qte: l.qte, prix_vente: l.prix_vente })),
    };
    this.saving = true;
    this.commandeService.createCommande(dto).subscribe({
      next: (resp) => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Commande créée',
          detail: 'La facture a été générée automatiquement.',
          life: 4000,
        });
        if (resp.data?.id) {
          this.router.navigate(['/ventes/commandes', resp.data.id]);
        } else {
          this.loadCommandes();
        }
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, 'créer la commande');
      },
    });
  }

  private doUpdateCommande() {
    const v = this.createForm.value;
    const dto: UpdateCommandeVenteDto = {
      vehicule_id: v.vehicule_id,
      lignes: v.lignes.map((l: any) => ({ produit_id: l.produit_id, qte: l.qte, prix_vente: l.prix_vente })),
    };
    this.saving = true;
    this.commandeService.updateCommande(this.editingId!, dto).subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Commande mise à jour',
          detail: 'Les modifications ont été enregistrées.',
          life: 4000,
        });
        this.loadCommandes();
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, 'modifier la commande');
      },
    });
  }

  openAnnulationDialog(c: CommandeVente) {
    this.commandeToAnnuler = c;
    this.motifAnnulation = '';
    this.annulationDialogVisible = true;
  }

  confirmerAnnulation() {
    if (!this.commandeToAnnuler || this.annulationLoading || !this.motifAnnulation.trim()) return;
    this.annulationLoading = true;
    this.commandeService.annulerCommande(this.commandeToAnnuler.id, { motif_annulation: this.motifAnnulation.trim() }).subscribe({
      next: () => {
        this.annulationLoading = false;
        this.annulationDialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Commande annulée',
          detail: 'La commande a été annulée et les stocks ont été restaurés.',
          life: 4000,
        });
        this.loadCommandes();
      },
      error: (err) => {
        this.annulationLoading = false;
        this.showApiError(err, 'annuler la commande');
      },
    });
  }

  setFiltreStatut(statut: 'all' | StatutFacture): void {
    this.filtreStatut.set(statut);
  }

  loadCommandes() {
    this.loading = true;
    this.commandeService.getCommandes().subscribe({
      next: (resp) => {
        this.commandes.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, 'charger les commandes');
      },
    });
  }

  loadVehicules() {
    this.vehiculeService.getAll({ per_page: 200 }).subscribe({
      next: (resp) => {
        const raw = resp.data as any;
        const vehicules: Vehicule[] = raw?.data ?? (Array.isArray(raw) ? raw : []);
        this.vehiculeOptions = vehicules.map((v) => ({
          label: `${v.nom_vehicule} — ${v.immatriculation}`,
          value: v.id,
        }));
      },
      error: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Véhicules non chargés',
          detail: 'Impossible de récupérer la liste des véhicules.',
          life: 4000,
        });
      },
    });
  }

  loadProduits() {
    this.produitService.getAllFiltered({ type: 'fabricable' }).subscribe({
      next: (produits) => {
        this.produitData = new Map(
          produits.map((p) => [p.id, { prixUsine: p.prix_usine ?? 0, prixVente: p.prix_vente ?? 0, nom: p.nom }])
        );
        this.produitOptions = produits.map((p) => ({ label: p.nom, value: p.id }));
        const defProduit = produits.find((p) => p.nom.toLowerCase().includes('pack 30'));
        this.defaultProduitId = defProduit?.id ?? null;
      },
      error: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Produits non chargés',
          detail: 'Impossible de récupérer la liste des produits.',
          life: 4000,
        });
      },
    });
  }

  openCommissionDetail(commissionId: number, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedCommissionId.set(commissionId);
    this.commissionDetailVisible.set(true);
  }

  getCommissionLabel(s: StatutCommission): string {
    return STATUT_COMMISSION_LABELS[s] ?? s;
  }

  getCommissionSeverity(s: StatutCommission) {
    return STATUT_COMMISSION_SEVERITY[s] ?? 'info';
  }

  goBack() {
    this.router.navigate(['/']);
  }

  goDetail(id: number) {
    this.router.navigate(['/ventes/commandes', id]);
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  isInvalid(name: string): boolean {
    const c = this.createForm.get(name)!;
    return c.invalid && (c.dirty || c.touched);
  }

  isLigneInvalid(i: number, name: string): boolean {
    const c = this.lignes.at(i).get(name)!;
    return c.invalid && (c.dirty || c.touched);
  }

  getStatutLabel(s: StatutFacture): string {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }

  getStatutDotClass(s: StatutFacture): string {
    const map: Record<StatutFacture, string> = {
      impayee: 'cv-status-dot--impayee',
      partiel: 'cv-status-dot--partiel',
      payee: 'cv-status-dot--payee',
      annulee: 'cv-status-dot--annulee',
    };
    return map[s] ?? 'cv-status-dot--annulee';
  }

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
  }

  formatDate(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR');
  }

  private showApiError(err: any, action: string) {
    if (err.status === 422 && err.error?.errors) {
      const msgs = Object.values(err.error.errors).flat() as string[];
      msgs.forEach((m) =>
        this.messageService.add({ severity: 'error', summary: 'Erreur de validation', detail: m, life: 5000 })
      );
      return;
    }
    if (err.status === 422 && err.error?.message) {
      this.messageService.add({ severity: 'warn', summary: 'Action impossible', detail: err.error.message, life: 5000 });
      return;
    }
    const summaryMap: Record<number, string> = {
      401: 'Session expirée', 403: 'Accès refusé', 404: 'Introuvable', 0: 'Serveur inaccessible',
    };
    const detailMap: Record<number, string> = {
      401: 'Votre session a expiré. Veuillez vous reconnecter.',
      403: `Vous n'avez pas la permission de ${action}.`,
      404: 'La ressource demandée est introuvable.',
      0: 'Impossible de joindre le serveur. Vérifiez votre connexion réseau.',
    };
    this.messageService.add({
      severity: 'error',
      summary: summaryMap[err.status] ?? `Erreur ${err.status || ''}`.trim(),
      detail: detailMap[err.status] ?? err.error?.message ?? `Une erreur est survenue (${action}).`,
      life: 5000,
    });
  }
}
