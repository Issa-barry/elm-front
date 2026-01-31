import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Router } from '@angular/router';
import { ProduitService } from '@/services/produits/produits.service';
import { forkJoin } from 'rxjs';
import {
    CreateProduitDto,
    Produit,
    PRODUIT_STATUT_LABELS,
    PRODUIT_STATUT_SEVERITY,
    PRODUIT_TYPE_LABELS,
    ProduitStatut,
    ProduitStatutSeverity,
    ProduitType
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
        RatingModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        ConfirmDialogModule
    ],
        providers: [MessageService, ProduitService, ConfirmationService],

  templateUrl: './produits-liste.html',
  styleUrl: './produits-liste.scss',
})
export class ProduitsListe implements OnInit {
     produits: Produit[] = [];
     produit: Produit = new Produit();
    loading: boolean = true;

    ///
    filterFields: string[] = ['code', 'nom', 'description', 'type', 'statut', 'qte_stock'];

    produitDialog: boolean = false;

    selectedProduits!: Produit[] | null;

    submitted: boolean = false;

    typeOptions: { label: string; value: ProduitType }[] = [];
    statutOptions: { label: string; value: ProduitStatut }[] = [];

    @ViewChild('dt') dt!: Table;

    exportColumns!: ExportColumn[];

    cols!: Column[];

    constructor(
        private router: Router,
        private produitService: ProduitService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    exportCSV() {
        this.dt.exportCSV();
    }

    ngOnInit() {
        this.initOptions();
        this.initColumns();
        this.loadProduits();
    }

      loadProduits() {
        this.produitService.getAll().subscribe({
                next: (produits) => {
                    this.produits = produits;
                    this.loading=false;
                    console.log(this.produits);
                    
                },
                error: (err) =>{
                    console.error('Erreur lors du chargement des produits :', err),
                this.loading = false;
                }
                });
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
            {
                field: 'code',
                header: 'Code',
                customExportHeader: 'Product Code'
            },
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

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    openNew() {
        this.produit = new Produit();
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
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Products Deleted',
                            life: 3000
                        });
                    },
                    error: (err) => {
                        console.error('Erreur lors de la suppression des produits :', err);
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Erreur',
                            detail: 'Suppression impossible.',
                            life: 3000
                        });
                    }
                });
            }
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
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Product Deleted',
                            life: 3000
                        });
                    },
                    error: (err) => {
                        console.error('Erreur lors de la suppression du produit :', err);
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Erreur',
                            detail: 'Suppression impossible.',
                            life: 3000
                        });
                    }
                });
            }
        });
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'info';
        }
    }

    getStatutSeverity(statut?: ProduitStatut): ProduitStatutSeverity {
        if (!statut) return PRODUIT_STATUT_SEVERITY.brouillon;
        return PRODUIT_STATUT_SEVERITY[statut] ?? PRODUIT_STATUT_SEVERITY.brouillon;
    }

    getStatutLabel(statut?: ProduitStatut): string {
        if (!statut) return PRODUIT_STATUT_LABELS.brouillon;
        return PRODUIT_STATUT_LABELS[statut] ?? PRODUIT_STATUT_LABELS.brouillon;
    }

    saveProduit() {
        this.submitted = true;
        if (!this.produit.nom?.trim() || !this.produit.type) {
            return;
        }

        const dto: CreateProduitDto = {
            nom: this.produit.nom.trim(),
            type: this.produit.type,
            qte_stock: this.produit.qte_stock ?? 0,
            code: this.produit.code || undefined,
            statut: this.produit.statut,
            cout: this.produit.cout ?? undefined,
            description: this.produit.description ?? undefined,
            prix_usine: this.produit.prix_usine ?? undefined,
            prix_vente: this.produit.prix_vente ?? undefined,
            prix_achat: this.produit.prix_achat ?? undefined
        };

        const isUpdate = !!this.produit.id;
        const request$ = isUpdate
            ? this.produitService.update(this.produit.id, dto)
            : this.produitService.create(dto);

        request$.subscribe({
            next: () => {
                this.produitDialog = false;
                this.produit = new Produit();
                this.submitted = false;
                this.loadProduits();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: isUpdate ? 'Product Updated' : 'Product Created',
                    life: 3000
                });
            },
            error: (err) => {
                console.error('Erreur lors de la sauvegarde du produit :', err);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreur',
                    detail: 'Sauvegarde impossible.',
                    life: 3000
                });
            }
        });
    }

     goToNewProduits() {
        this.router.navigate(['/produits/produits-new']);
    }
}
