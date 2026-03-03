import { Component, HostListener, Inject, OnDestroy, OnInit, ViewChild, effect } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { DrawerModule } from 'primeng/drawer';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, forkJoin, takeUntil } from 'rxjs';
import { ProduitService } from '@/services/produits/produits.service';
import { AuthService } from '@/services/auth/auth.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import {
    CreateProduitDto,
    Produit,
    PRODUIT_STATUT_LABELS,
    PRODUIT_STATUT_SEVERITY,
    PRODUIT_TYPE_LABELS,
    ProduitStatut,
    ProduitStatutSeverity,
    ProduitType,
    UpdateStockResponse,
} from '@/models/produit.model';

interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface ExportColumn {
    title: string;
    dataKey: string;
}

@Component({
  selector: 'app-produits-liste',
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
      TextareaModule,
      SelectModule,
      InputNumberModule,
      DialogModule,
      TagModule,
      InputIconModule,
      IconFieldModule,
      ConfirmDialogModule,
      TooltipModule,
      DrawerModule,
      ToggleSwitchModule,
  ],
  providers: [MessageService, ProduitService, ConfirmationService],
  templateUrl: './produits-liste.html',
  styleUrl: './produits-liste.scss',
})
export class ProduitsListe implements OnInit, OnDestroy {
    produits: Produit[] = [];
    produit: Produit = new Produit();
    loading = true;
    saving = false;
    stockDialog = false;
    stockDialogSaving = false;
    stockProduit: Produit | null = null;
    stockValue: number | null = null;

    filterFields: string[] = ['code', 'nom', 'description', 'type', 'statut', 'qte_stock'];
    produitDialog = false;
    selectedProduits!: Produit[] | null;
    submitted = false;

    typeOptions: { label: string; value: ProduitType }[] = [];
    statutOptions: { label: string; value: ProduitStatut }[] = [];

    @ViewChild('dt') dt!: Table;
    exportColumns!: ExportColumn[];
    cols!: Column[];

    canCreate = false;
    canUpdate = false;
    canDelete = false;
    canManageSystemDefinition = false;

    // Mobile pagination
    mobileSearchTerm = '';
    readonly mobilePageSize = 8;
    mobileVisibleCount = this.mobilePageSize;
    private readonly mobileBreakpoint = 768;
    private readonly mobilePwaClass = 'produits-mobile-pwa';

    // ── Filtres actifs ────────────────────────────────────
    filterStatut: ProduitStatut | null = null;
    filterType: ProduitType | null = null;
    filterInStock: boolean | null = null;
    sortBy = 'created_at';
    sortOrder: 'asc' | 'desc' = 'desc';

    // ── Mobile filter drawer ──────────────────────────────
    mobileFilterVisible = false;
    tempFilterStatut: ProduitStatut | null = null;
    tempFilterType: ProduitType | null = null;
    tempFilterInStock: boolean | null = null;

    private destroy$ = new Subject<void>();
    private searchSubject = new Subject<string>();
    private readyForUsineReload = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private produitService: ProduitService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private authService: AuthService,
        private usineContext: UsineContextService,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.canCreate = this.authService.hasPermission('produits.create');
        this.canUpdate = this.authService.hasPermission('produits.update');
        this.canDelete = this.authService.hasPermission('produits.delete');
        this.canManageSystemDefinition = this.hasSystemDefinitionAccess();

        effect(() => {
            this.usineContext.currentUsineId(); // dépendance signal usine
            if (!this.readyForUsineReload) return;
            this.loadWithFilters();
        });
    }

    ngOnInit() {
        this.initOptions();
        this.initColumns();
        this.syncMobilePwaMode();

        // Debounce pour la recherche mobile
        this.searchSubject.pipe(
            debounceTime(450),
            distinctUntilChanged(),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.resetMobilePagination();
            this.syncUrl();
            this.loadWithFilters();
        });

        // Lecture des paramètres d'URL au démarrage
        const params = this.route.snapshot.queryParams;
        this.filterStatut  = (params['statut'] as ProduitStatut) || null;
        this.filterType    = (params['type'] as ProduitType) || null;
        this.filterInStock = params['in_stock'] !== undefined ? params['in_stock'] === 'true' : null;
        this.sortBy        = params['sort_by'] || 'created_at';
        this.sortOrder     = params['sort_order'] === 'asc' ? 'asc' : 'desc';
        if (params['search']) this.mobileSearchTerm = params['search'];

        this.readyForUsineReload = true;
        this.loadWithFilters();
    }

    ngOnDestroy(): void {
        this.clearMobilePwaMode();
        this.destroy$.next();
        this.destroy$.complete();
    }

    @HostListener('window:resize')
    onWindowResize(): void {
        this.syncMobilePwaMode();
    }

    // ── Chargement avec filtres ───────────────────────────
    loadWithFilters(): void {
        this.loading = true;
        const search     = this.mobileSearchTerm.trim();
        const hasSearch  = !!search;
        const hasFilters = !!(this.filterStatut || this.filterType || this.filterInStock !== null);

        const request$ = (hasSearch || hasFilters)
            ? this.produitService.search({
                ...(search                         && { search }),
                ...(this.filterStatut              && { statut: this.filterStatut }),
                ...(this.filterType                && { type: this.filterType }),
                ...(this.filterInStock !== null    && { in_stock: this.filterInStock }),
                sort_by:    this.sortBy,
                sort_order: this.sortOrder,
            })
            : this.produitService.getAllFiltered({
                sort_by:    this.sortBy,
                sort_order: this.sortOrder,
            });

        request$.subscribe({
            next: (produits) => {
                this.produits = produits;
                this.resetMobilePagination();
                this.loading = false;
            },
            error: (err) => {
                this.loading = false;
                this.showApiError(err, 'Chargement des produits impossible');
            },
        });
    }

    // ── Sync URL ──────────────────────────────────────────
    private syncUrl(): void {
        const queryParams: Record<string, string> = {};
        if (this.mobileSearchTerm.trim()) queryParams['search']     = this.mobileSearchTerm.trim();
        if (this.filterStatut)            queryParams['statut']     = this.filterStatut;
        if (this.filterType)              queryParams['type']       = this.filterType;
        if (this.filterInStock !== null)  queryParams['in_stock']   = String(this.filterInStock);
        if (this.sortBy !== 'created_at') queryParams['sort_by']    = this.sortBy;
        if (this.sortOrder !== 'desc')    queryParams['sort_order'] = this.sortOrder;
        this.router.navigate([], { relativeTo: this.route, queryParams, replaceUrl: true });
    }

    // ── Desktop filters ───────────────────────────────────
    onDesktopFilterChange(): void {
        this.resetMobilePagination();
        this.syncUrl();
        this.loadWithFilters();
    }

    resetAllFilters(): void {
        this.filterStatut     = null;
        this.filterType       = null;
        this.filterInStock    = null;
        this.mobileSearchTerm = '';
        this.resetMobilePagination();
        this.syncUrl();
        this.loadWithFilters();
    }

    get activeFiltersCount(): number {
        return [this.filterStatut, this.filterType, this.filterInStock]
            .filter(v => v !== null).length;
    }

    // ── Mobile filter drawer ──────────────────────────────
    openMobileFilters(): void {
        this.tempFilterStatut  = this.filterStatut;
        this.tempFilterType    = this.filterType;
        this.tempFilterInStock = this.filterInStock;
        this.mobileFilterVisible = true;
    }

    applyMobileFilters(): void {
        this.filterStatut  = this.tempFilterStatut;
        this.filterType    = this.tempFilterType;
        this.filterInStock = this.tempFilterInStock;
        this.mobileFilterVisible = false;
        this.resetMobilePagination();
        this.syncUrl();
        this.loadWithFilters();
    }

    resetMobileFiltersTemp(): void {
        this.tempFilterStatut  = null;
        this.tempFilterType    = null;
        this.tempFilterInStock = null;
    }

    // ── Mobile search (debounced) ─────────────────────────
    onMobileSearchChange(value: string): void {
        this.mobileVisibleCount = this.mobilePageSize;
        this.searchSubject.next(value);
    }

    get mobileVisibleProduits(): Produit[] {
        return this.produits.slice(0, this.mobileVisibleCount);
    }

    get canLoadMoreMobile(): boolean {
        return this.mobileVisibleCount < this.produits.length;
    }

    loadMoreMobile(): void {
        this.mobileVisibleCount += this.mobilePageSize;
    }

    trackByProduitId(index: number, produit: Produit): number | string {
        return produit.id || produit.code || index;
    }

    exportCSV() {
        this.dt.exportCSV();
    }

    initOptions() {
        this.typeOptions = Object.entries(PRODUIT_TYPE_LABELS).map(([value, label]) => ({
            label,
            value: value as ProduitType
        }));
        this.statutOptions = Object.entries(PRODUIT_STATUT_LABELS).map(([value, label]) => ({
            label,
            value: value as ProduitStatut
        }));
    }

    initColumns() {
        this.cols = [
            { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
            { field: 'nom', header: 'Nom' },
            { field: 'image', header: 'Image' },
            { field: 'prix_vente', header: 'Prix' },
            { field: 'type', header: 'Type' }
        ];
        this.exportColumns = this.cols.map((col) => ({
            title: col.header,
            dataKey: col.field
        }));
    }

    openNew() {
        this.produit   = new Produit();
        this.submitted = false;
        this.produitDialog = true;
    }

    editProduct(produit: Produit) {
        this.produit = new Produit({ ...produit });
        this.produitDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const ids = (this.selectedProduits ?? []).map((item) => item.id).filter((id) => !!id);
                if (ids.length === 0) return;
                forkJoin(ids.map((id) => this.produitService.delete(id))).subscribe({
                    next: () => {
                        this.produits = this.produits.filter((item) => !ids.includes(item.id));
                        this.selectedProduits = null;
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
                    },
                    error: (err) => this.showApiError(err, 'Suppression impossible'),
                });
            },
        });
    }

    hideDialog() {
        this.produitDialog = false;
        this.submitted = false;
    }

    deleteProduct(produit: Produit) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + (produit.nom || 'this product') + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                if (!produit.id) return;
                this.produitService.delete(produit.id).subscribe({
                    next: () => {
                        this.produits = this.produits.filter((item) => item.id !== produit.id);
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
                    },
                    error: (err) => this.showApiError(err, 'Suppression impossible'),
                });
            },
        });
    }

    getStatutSeverity(statut?: ProduitStatut): ProduitStatutSeverity {
        if (!statut) return PRODUIT_STATUT_SEVERITY.brouillon;
        return PRODUIT_STATUT_SEVERITY[statut] ?? PRODUIT_STATUT_SEVERITY.brouillon;
    }

    getStatutLabel(statut?: ProduitStatut): string {
        if (!statut) return PRODUIT_STATUT_LABELS.brouillon;
        return PRODUIT_STATUT_LABELS[statut] ?? PRODUIT_STATUT_LABELS.brouillon;
    }

    getTypeLabel(type?: ProduitType): string {
        if (!type) return '-';
        return PRODUIT_TYPE_LABELS[type] ?? type;
    }

    formatCurrency(value?: number | null): string {
        if (typeof value !== 'number') return '-';
        return `${new Intl.NumberFormat('fr-GN', { maximumFractionDigits: 0 }).format(value)} GNF`;
    }

    /**
     * Affiche l'alerte "Critique" uniquement quand le seuil est réellement atteint.
     * - Produit non critique => jamais d'alerte.
     * - Seuil produit défini => alerte si qte_stock <= seuil.
     * - Sinon fallback backend (is_low_stock / is_out_of_stock).
     */
    shouldShowCritiqueAlert(produit: Produit): boolean {
        if (!produit?.is_critique) return false;

        const stock = Number(produit.qte_stock);
        const seuil = produit.seuil_alerte_stock;
        const hasValidStock = Number.isFinite(stock);
        const hasCustomThreshold = typeof seuil === 'number' && Number.isFinite(seuil);

        if (hasCustomThreshold && hasValidStock) {
            return stock <= (seuil as number);
        }

        return produit.is_out_of_stock || produit.is_low_stock;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    saveProduit() {
        this.submitted = true;
        if (!this.produit.nom?.trim() || !this.produit.type || this.saving) return;
        this.saving = true;

        const dto: CreateProduitDto = {
            nom:         this.produit.nom.trim(),
            type:        this.produit.type,
            qte_stock:   this.produit.qte_stock ?? 0,
            statut:      this.produit.statut,
            cout:        this.produit.cout        ?? undefined,
            description: this.produit.description ?? undefined,
            prix_usine:  this.produit.prix_usine  ?? undefined,
            prix_vente:  this.produit.prix_vente  ?? undefined,
            prix_achat:  this.produit.prix_achat  ?? undefined,
        };

        const isUpdate = !!this.produit.id;
        const request$ = isUpdate
            ? this.produitService.update(this.produit.id, dto)
            : this.produitService.create(dto);

        request$.subscribe({
            next: () => {
                this.produitDialog = false;
                this.produit       = new Produit();
                this.submitted     = false;
                this.saving        = false;
                this.loadWithFilters();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Succès',
                    detail: isUpdate ? 'Produit mis à jour' : 'Produit créé',
                    life: 3000,
                });
            },
            error: (err) => {
                this.saving = false;
                this.showApiError(err, 'Sauvegarde impossible');
            },
        });
    }

    private showApiError(err: any, fallback: string): void {
        if (err.status === 422 && err.error?.errors) {
            const messages = Object.values(err.error.errors).flat() as string[];
            messages.forEach(msg =>
                this.messageService.add({ severity: 'error', summary: 'Validation', detail: msg as string, life: 5000 })
            );
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreur',
                detail: this.extractErrorMessage(err, fallback),
                life: 5000,
            });
        }
    }

    private extractErrorMessage(err: any, fallback: string): string {
        if (typeof err?.error?.message === 'string' && err.error.message.trim()) return err.error.message;
        if (typeof err?.message === 'string' && err.message.trim()) return err.message;
        return fallback;
    }

    goToNewProduits() {
        this.router.navigate(['/produits/produits-new']);
    }

    goHome(): void {
        this.router.navigate(['/']);
    }

    onRowDblClick(event: MouseEvent, produit: Produit): void {
        if (window.innerWidth <= this.mobileBreakpoint) return;
        if (!this.canEditDefinition(produit)) return;
        const target = event.target as Element;
        if (target.closest('button, a, input, textarea, select, [role="button"], .p-checkbox, .p-button, .p-link')) return;
        this.router.navigate(['/produits/produits-edit', produit.id]);
    }

    canEditDefinition(produit: Produit): boolean {
        if (!this.canUpdate) return false;
        if (!produit?.is_global) return true;
        return this.canManageSystemDefinition;
    }

    canUpdateStock(produit: Produit): boolean {
        return this.canUpdate && !!produit?.id;
    }

    needsStockOnlyAction(produit: Produit): boolean {
        return !!produit?.is_global && !this.canEditDefinition(produit) && this.canUpdateStock(produit);
    }

    canArchiveProduct(produit: Produit): boolean {
        if (!this.canDelete) return false;
        if (!produit?.is_global) return true;
        return this.canManageSystemDefinition;
    }

    getDefinitionActionTooltip(produit: Produit): string {
        if (this.canEditDefinition(produit)) {
            return 'Modifier';
        }
        if (produit?.is_global && this.canUpdate) {
            return 'Réservé admin/manager (produit global)';
        }
        return 'Voir';
    }

    goToEditProduit(event: Event, produitId: number, produit: Produit): void {
        event.stopPropagation();
        if (!this.canEditDefinition(produit)) {
            return;
        }
        this.router.navigate(['/produits/produits-edit', produitId]);
    }

    getPrimaryActionTooltip(produit: Produit): string {
        if (this.canEditDefinition(produit)) {
            return 'Modifier';
        }
        if (this.needsStockOnlyAction(produit)) {
            return 'Mettre a jour le stock';
        }
        return 'Voir';
    }

    onProduitPrimaryAction(event: Event, produit: Produit): void {
        if (this.canEditDefinition(produit)) {
            this.goToEditProduit(event, produit.id, produit);
            return;
        }

        if (this.needsStockOnlyAction(produit)) {
            this.openStockDialog(event, produit);
            return;
        }

        event.stopPropagation();
    }

    openStockDialog(event: Event, produit: Produit): void {
        event.stopPropagation();
        if (!this.canUpdateStock(produit) || !produit?.id) return;

        this.stockProduit = produit;
        this.stockValue = Number.isFinite(Number(produit.qte_stock)) ? Number(produit.qte_stock) : 0;
        this.stockDialog = true;
        this.stockDialogSaving = false;
    }

    closeStockDialog(): void {
        this.stockDialog = false;
        this.stockDialogSaving = false;
        this.stockProduit = null;
        this.stockValue = null;
    }

    saveStockUpdate(): void {
        if (!this.stockProduit?.id || this.stockDialogSaving) return;

        const stock = Number(this.stockValue);
        if (!Number.isInteger(stock) || stock < 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Validation',
                detail: 'La quantité de stock doit être un entier supérieur ou égal à 0.',
                life: 5000,
            });
            return;
        }

        this.stockDialogSaving = true;
        this.produitService.updateStock(this.stockProduit.id, {
            quantite: stock,
            operation: 'set',
        }).subscribe({
            next: (response: UpdateStockResponse) => {
                const updated = Produit.fromApi(response.produit);
                this.produits = this.produits.map((item) => (item.id === updated.id ? updated : item));
                this.stockDialogSaving = false;

                // Alerte si stock faible ou rupture
                if (response.stock_alert?.niveau !== 'in_stock') {
                    this.messageService.add({
                        severity: 'warn',
                        summary: 'Stock faible',
                        detail: response.stock_alert.message ?? 'Le stock est en dessous du seuil d\'alerte.',
                        life: 6000,
                    });
                }

                this.messageService.add({
                    severity: 'success',
                    summary: 'Succès',
                    detail: 'Stock mis à jour avec succès',
                    life: 3000,
                });
                this.closeStockDialog();
            },
            error: (err) => {
                this.stockDialogSaving = false;
                this.showApiError(err, 'Mise à jour du stock impossible');
            },
        });
    }

    /** Détermine si l'utilisateur peut modifier la définition des produits globaux (admin/manager). */
    private hasSystemDefinitionAccess(): boolean {
        const user = this.authService.currentUser();
        if (!user) return false;

        const roles = [...(user.roles ?? []), ...(user.role_names ?? [])]
            .map((role) => String(role).trim().toLowerCase())
            .filter((role) => role.length > 0);

        return roles.includes('admin_entreprise') || roles.includes('manager') || roles.includes('super-admin');
    }

    private resetMobilePagination(): void {
        this.mobileVisibleCount = this.mobilePageSize;
    }

    private syncMobilePwaMode(): void {
        if (typeof window === 'undefined') return;
        if (window.innerWidth <= this.mobileBreakpoint) {
            this.document.body.classList.add(this.mobilePwaClass);
        } else {
            this.clearMobilePwaMode();
        }
    }

    private clearMobilePwaMode(): void {
        this.document.body.classList.remove(this.mobilePwaClass);
    }
}
