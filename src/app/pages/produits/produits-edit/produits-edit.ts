import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { ProduitsForm } from '../produits-form/produits-form';
import { CreateProduitDto, Produit } from '@/models/produit.model';
import { ProduitService } from '@/services/produits/produits.service';

@Component({
  selector: 'app-produits-edit',
  standalone: true,
  imports: [CommonModule, ProduitsForm, ToastModule],
  providers: [MessageService],
  templateUrl: './produits-edit.html',
  styleUrl: './produits-edit.scss',
})
export class ProduitsEdit implements OnInit, OnDestroy {
  loading = false;
  produitId: number | null = null;
  initialData: Produit | null = null;
  private readonly mobileBreakpoint = 768;
  private readonly mobilePwaClass = 'produits-mobile-pwa';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService,
    private messageService: MessageService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.updateMobilePwaMode();
    const idParam = this.route.snapshot.paramMap.get('id');
    const parsedId = idParam ? Number(idParam) : NaN;

    if (!Number.isFinite(parsedId) || parsedId <= 0) {
      this.router.navigate(['/produits']);
      return;
    }

    this.produitId = parsedId;
    this.loadProduit(parsedId);
  }

  onSubmitForm(dto: CreateProduitDto): void {
    if (!this.produitId) return;

    this.loading = true;
    const imageFile = dto.image ?? null;

    this.produitService.update(this.produitId, dto).subscribe({
      next: (updatedProduit) => {
        if (imageFile) {
          this.uploadImageAfterUpdate(updatedProduit, imageFile);
        } else {
          this.initialData = updatedProduit;
          this.loading = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Produit modifié avec succès',
            life: 3000,
          });
        }
      },
      error: (error) => {
        this.loading = false;
        this.showApiError(error, 'Erreur lors de la modification du produit');
      },
    });
  }

  onDeleteImage(): void {
    if (!this.produitId) return;
    this.loading = true;

    this.produitService.deleteProduitImage(this.produitId).subscribe({
      next: (updatedProduit) => {
        this.initialData = updatedProduit;
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Image supprimée avec succès',
          life: 3000,
        });
      },
      error: (error) => {
        // Restaure l'état précédent côté form via ngOnChanges
        this.initialData = { ...this.initialData } as Produit;
        this.loading = false;
        this.showApiError(error, "Impossible de supprimer l'image");
      },
    });
  }

  private uploadImageAfterUpdate(produit: Produit, file: File): void {
    this.produitService.uploadProduitImage(produit.id, file).subscribe({
      next: (produitWithImage) => {
        this.initialData = produitWithImage;
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Produit modifié avec succès',
          life: 3000,
        });
      },
      error: () => {
        this.initialData = produit;
        this.loading = false;
        this.messageService.add({
          severity: 'warn',
          summary: 'Attention',
          detail: "Produit modifié, mais l'image n'a pas pu être envoyée.",
          life: 5000,
        });
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/produits']);
  }

  private loadProduit(id: number): void {
    this.loading = true;
    this.produitService.getById(id).subscribe({
      next: (produit) => {
        this.initialData = produit;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.showApiError(error, 'Erreur lors du chargement du produit');
      },
    });
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(this.mobilePwaClass);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateMobilePwaMode();
  }

  private updateMobilePwaMode(): void {
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }

  private showApiError(error: any, fallback: string): void {
    const detail = error?.error?.message || fallback;
    this.messageService.add({
      severity: 'error',
      summary: 'Erreur',
      detail,
      life: 5000,
    });
  }

}
