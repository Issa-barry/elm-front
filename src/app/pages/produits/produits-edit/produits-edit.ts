import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class ProduitsEdit implements OnInit {
  loading = false;
  produitId: number | null = null;
  initialData: Produit | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
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

    this.produitService.update(this.produitId, dto).subscribe({
      next: (updatedProduit) => {
        this.initialData = updatedProduit;
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Produit modifié avec succès',
          life: 3000,
        });
      },
      error: (error) => {
        this.loading = false;
        this.showApiError(error, 'Erreur lors de la modification du produit');
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
