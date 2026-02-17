import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { ProduitsForm } from '../produits-form/produits-form';
import { CreateProduitDto, Produit } from '@/models/produit.model';
import { ProduitService } from '@/services/produits/produits.service';

@Component({
  selector: 'app-produits-new',
  standalone: true,
  imports: [
    CommonModule,
    ProduitsForm,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './produits-new.html',
  styleUrl: './produits-new.scss',
})
export class ProduitsNew implements OnInit, OnDestroy {
  loading = false;
  private readonly mobileBreakpoint = 768;
  private readonly mobilePwaClass = 'produits-mobile-pwa';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private produitService: ProduitService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.updateMobilePwaMode();
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

  // =============================
  // SUBMIT
  // =============================
  onSubmitForm(dto: CreateProduitDto): void {
    this.loading = true;

    this.produitService.create(dto).subscribe({
      next: (createdProduit) => this.handleSuccess('Produit créé avec succès', createdProduit),
      error: (err) => this.handleError('Erreur lors de la création du produit', err)
    });
  }

  // =============================
  // CANCEL
  // =============================
  onCancel(): void {
    this.router.navigate(['/produits']);
  }

  // =============================
  // SUCCESS
  // =============================
  private handleSuccess(message: string, createdProduit: Produit): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Succès',
      detail: message,
      life: 2000
    });

    this.loading = false;
    if (createdProduit?.id) {
      this.router.navigate(['/produits/produits-edit', createdProduit.id]);
      return;
    }

    this.router.navigate(['/produits']);
  }
 
  // =============================
  // ERROR
  // =============================
  private handleError(fallback: string, err?: any): void {
    const detail = err?.error?.message || fallback;

    if (err?.status === 422 && err?.error?.errors) {
      const messages = Object.values(err.error.errors).flat() as string[];
      messages.forEach(msg => {
        this.messageService.add({
          severity: 'error',
          summary: detail,
          detail: msg,
          life: 5000
        });
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail,
        life: 5000
      });
    }

    this.loading = false;
    console.error(err);
  }

}
