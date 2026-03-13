import {
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, EMPTY } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { Produit, ScanMode } from '@/models/produit.model';
import { ProduitService } from '@/services/produits/produits.service';

/**
 * Composant de scan Code128 pour scanner USB (mode clavier) ou saisie manuelle.
 *
 * Usage :
 *   <app-produit-scan (produitFound)="onProduit($event)"></app-produit-scan>
 *
 * Le composant se charge de :
 * - capturer la frappe du scanner (Enter déclenche le lookup)
 * - appeler GET /produits/by-code/{code}?mode={mode}
 * - émettre le produit trouvé
 * - afficher les erreurs 404 / 409 / 422 via toast + inline
 * - annuler la requête précédente si un nouveau scan arrive avant la réponse
 *
 * Prérequis : MessageService fourni par le parent (ou provisionné via providers[]).
 */
@Component({
  selector: 'app-produit-scan',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './produit-scan.html',
  providers: [MessageService],
})
export class ProduitScanComponent implements OnInit {
  /** Mode de recherche passé à l'endpoint : auto (défaut), interne, fournisseur. */
  @Input() mode: ScanMode = 'auto';
  /** Placeholder affiché dans le champ de saisie. */
  @Input() placeholder = 'Scanner ou saisir un code-barres…';
  /** Label optionnel du bouton de recherche. */
  @Input() searchLabel = '';

  /** Émis avec le produit trouvé après un scan réussi. */
  @Output() produitFound = new EventEmitter<Produit>();

  @ViewChild('scanInput') scanInputRef?: ElementRef<HTMLInputElement>;

  rawCode = '';
  scanning = false;
  lastError: string | null = null;

  private readonly scanTrigger$ = new Subject<string>();
  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private readonly produitService: ProduitService,
    private readonly messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.scanTrigger$
      .pipe(
        switchMap(code =>
          this.produitService.getByCode(code, this.mode).pipe(
            catchError((err: HttpErrorResponse) => {
              this.onScanError(err);
              return EMPTY;
            }),
          ),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(produit => {
        this.scanning = false;
        this.rawCode = '';
        this.lastError = null;
        this.produitFound.emit(produit);
        this.refocus();
      });
  }

  /** Appelé par (keydown.enter) sur l'input et par le bouton Rechercher. */
  onEnter(): void {
    const code = this.rawCode.trim().toUpperCase();
    if (!code || this.scanning) return;
    this.scanning = true;
    this.lastError = null;
    this.scanTrigger$.next(code);
  }

  /** Réinitialise l'état sans déclencher de requête. */
  reset(): void {
    this.rawCode = '';
    this.lastError = null;
    this.scanning = false;
    this.refocus();
  }

  private onScanError(err: HttpErrorResponse): void {
    this.scanning = false;
    this.lastError = this.buildErrorMessage(err);
    this.messageService.add({
      severity: err.status === 409 ? 'warn' : 'error',
      summary: this.scanErrorSummary(err.status),
      detail: this.lastError,
      life: 4500,
    });
    this.rawCode = '';
    this.refocus();
  }

  buildErrorMessage(err: HttpErrorResponse): string {
    const apiMsg: string | undefined = err.error?.message;
    switch (err.status) {
      case 404:
        return apiMsg ?? 'Aucun produit trouvé pour ce code.';
      case 409: {
        const count: number | undefined = err.error?.data?.count;
        return count
          ? `${count} produits partagent ce code fournisseur. Scannez le code interne.`
          : (apiMsg ?? 'Code ambigu — plusieurs produits correspondent.');
      }
      case 422:
        return apiMsg ?? 'Format de code invalide (caractères non supportés).';
      default:
        return apiMsg ?? 'Erreur lors du scan. Veuillez réessayer.';
    }
  }

  scanErrorSummary(status: number): string {
    switch (status) {
      case 404: return 'Produit introuvable';
      case 409: return 'Code ambigu';
      case 422: return 'Code invalide';
      default:  return 'Erreur scan';
    }
  }

  private refocus(): void {
    setTimeout(() => this.scanInputRef?.nativeElement.focus(), 50);
  }
}
