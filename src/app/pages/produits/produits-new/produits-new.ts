import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { ProduitsForm } from '../produits-form/produits-form';
import { CreateProduitDto } from '@/models/produit.model';
import { ProduitService } from '@/services/produits/produits.service';

@Component({
  selector: 'app-produits-new',
  standalone: true,
  imports: [
    ProduitsForm,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './produits-new.html',
  styleUrl: './produits-new.scss',
})
export class ProduitsNew {

  @ViewChild(ProduitsForm)
  produitForm!: ProduitsForm;

  loading = false;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private produitService: ProduitService
  ) {}

  // =============================
  // SUBMIT
  // =============================
  onSubmitForm(dto: CreateProduitDto): void {
    this.loading = true;

    this.produitService.create(dto).subscribe({
      next: () => this.handleSuccess('Produit créé avec succès'),
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
  private handleSuccess(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Succès',
      detail: message,
      life: 3000
    });

    this.loading = false;
    this.resetForm();
  }
 
  // =============================
  // ERROR
  // =============================
  private handleError(message: string, error?: any): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Erreur',
      detail: message,
      life: 5000
    });

    this.loading = false;
    console.error(error);
  }

  // =============================
  // RESET
  // =============================
  private resetForm(): void {
    this.produitForm?.resetForm();
  }
}
