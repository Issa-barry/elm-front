import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Parametre } from '@/models/parametres.model';
import { ParametresService } from '@/services/parametres/parametres.service';

@Component({
    selector: 'app-parametres-packing',
    templateUrl: './parametres-packing.html',
    styleUrl: './parametres-packing.scss',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, DividerModule, InputTextModule, ToastModule, RouterModule],
    providers: [MessageService]
})
export class ParametresPacking implements OnInit {
   loading = false;
  saving = false;
  errorMessage = '';
  successMessage = '';

  idRouleauPacking = '';
  prixRouleauDefaut = 0;

  private idRouleauParam?: Parametre;
  private prixRouleauParam?: Parametre;
  private readonly produitRouleauKey = 'produit_rouleau_id';
  private readonly legacyProduitRouleauKey = 'id_rouleau_packing';

  constructor(
    private parametresService: ParametresService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadPackingParametres();
  }

  loadPackingParametres(): void {
    this.loading = true;
    this.errorMessage = '';

    this.parametresService.getParametres('packing').subscribe({
      next: (response) => {
        const params = response.data.parametres ?? [];

        this.idRouleauParam = params.find((p) => p.cle === this.produitRouleauKey)
          ?? params.find((p) => p.cle === this.legacyProduitRouleauKey);
        this.prixRouleauParam = params.find((p) => p.cle === 'prix_rouleau_defaut');

        this.idRouleauPacking = this.idRouleauParam?.valeur?.toString() ?? '';
        this.prixRouleauDefaut = Number(this.prixRouleauParam?.valeur ?? 0) || 0;

        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger les parametres.';
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: this.errorMessage,
          life: 3000
        });
        this.loading = false;
      }
    });
  }

  savePackingParametres(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.idRouleauParam || !this.prixRouleauParam) {
      this.errorMessage = 'Parametres packing introuvables (produit_rouleau_id / prix_rouleau_defaut).';
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: this.errorMessage,
        life: 3000
      });
      return;
    }

    const produitRouleauId = Number(this.idRouleauPacking);
    if (!Number.isFinite(produitRouleauId)) {
      this.errorMessage = 'Le champ "ID du produit rouleau" doit etre numerique.';
      this.messageService.add({
        severity: 'warn',
        summary: 'Validation',
        detail: this.errorMessage,
        life: 3000
      });
      return;
    }

    this.saving = true;

    forkJoin([
      this.parametresService.updateParametre(this.idRouleauParam.id, {
        valeur: produitRouleauId
      }).pipe(catchError(() => of(null))),
      this.parametresService.updateParametre(this.prixRouleauParam.id, {
        valeur: Number(this.prixRouleauDefaut || 0)
      }).pipe(catchError(() => of(null)))
    ]).subscribe({
      next: (results) => {
        const hasError = results.some((r) => r === null);
        if (hasError) {
          this.errorMessage = 'Une ou plusieurs mises a jour ont echoue.';
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: this.errorMessage,
            life: 3000
          });
        } else {
          this.successMessage = 'Parametres mis a jour avec succes.';
          this.messageService.add({
            severity: 'success',
            summary: 'Succes',
            detail: this.successMessage,
            life: 3000
          });
        }
        this.saving = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors de la sauvegarde.';
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: this.errorMessage,
          life: 3000
        });
        this.saving = false;
      }
    });
  }
}
