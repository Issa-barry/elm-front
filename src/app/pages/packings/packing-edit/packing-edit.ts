import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PackingFrom } from '../packing-from/packing-from';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
import { PrestataireOfflineCacheService } from '@/services/prestataire/prestataire-offline-cache.service';
import { PackingService } from '@/services/packing/packing.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { Prestataire } from '@/models/prestataire.model';
import { Packing, CreatePackingDto } from '@/models/packing.model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-packing-edit',
  standalone: true,
  imports: [PackingFrom, ToastModule, Skeleton],
  providers: [MessageService],
  templateUrl: './packing-edit.html',
  styleUrl: './packing-edit.scss',
})
export class PackingEdit implements OnInit {
  @ViewChild(PackingFrom) packingForm?: PackingFrom;

  prestataires: Prestataire[] = [];
  packing: Packing | null = null;
  loading = false;
  packingLoading = false;
  private packingId!: number;
  private readonly isBrowser = typeof navigator !== 'undefined';

  constructor(
    private prestataireService: PrestataireService,
    private prestataireCache: PrestataireOfflineCacheService,
    private packingService: PackingService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private usineContext: UsineContextService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || isNaN(+id)) {
      this.router.navigate(['/packings']);
      return;
    }
    this.packingId = +id;
    this.packingLoading = true;
    this.loadPrestataires();
    this.loadPacking();
  }

  private loadPacking(): void {
    this.packingService.getPacking(this.packingId).subscribe({
      next: (response) => {
        this.packing = response.data;
        if (this.packing.statut !== 'impayee') {
          this.messageService.add({
            severity: 'warn',
            summary: 'Edition non autorisee',
            detail: 'Seuls les packings impayes sont modifiables.',
            life: 3000,
          });
          this.packingLoading = false;
          setTimeout(() => this.router.navigate(['/packings']), 1000);
          return;
        }
        this.packingLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du packing :', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger le packing',
          life: 3000,
        });
        this.packingLoading = false;
        setTimeout(() => this.router.navigate(['/packings']), 1500);
      },
    });
  }

  private loadPrestataires(): void {
    const usineId = this.usineContext.currentUsineId();
    const cachedPrestataires = this.prestataireCache.getPrestataires(usineId);
    const hasCachedPrestataires = cachedPrestataires.length > 0;

    if (hasCachedPrestataires) {
      this.prestataires = cachedPrestataires;
    }

    if (!this.isOnline()) {
      if (!hasCachedPrestataires) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Mode hors ligne',
          detail: 'Aucun machiniste synchronise localement.',
          life: 3500
        });
      }
      return;
    }

    this.prestataireService.getPrestataires().subscribe({
      next: (response) => {
        const prestataires = this.extractPrestataires(response);
        this.prestataires = prestataires;
        this.prestataireCache.savePrestataires(prestataires, usineId);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des prestataires :', err);
        if (hasCachedPrestataires) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Synchronisation',
            detail: 'Connexion indisponible. Liste locale des machinistes utilisee.',
            life: 3000
          });
        }
      },
    });
  }

  private extractPrestataires(
    response: { data: Prestataire[] } | { data: { data: Prestataire[] } },
  ): Prestataire[] {
    const data: any = response?.data;
    if (Array.isArray(data)) return data as Prestataire[];
    if (data && Array.isArray(data.data)) return data.data as Prestataire[];
    return [];
  }

  onSubmit(packingData: CreatePackingDto): void {
    if (!this.isOnline()) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Mode hors ligne',
        detail: 'Modification impossible sans connexion.',
        life: 3500
      });
      return;
    }

    if (!this.packing || this.packing.statut !== 'impayee') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Edition non autorisee',
        detail: 'Seuls les packings impayes sont modifiables.',
        life: 3000,
      });
      return;
    }

    this.loading = true;

    this.packingService.updatePacking(this.packingId, packingData).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: response?.message || 'Packing modifie avec succes',
          life: 3000,
        });
        if (response?.data) {
          this.packing = response.data;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la modification du packing :', err);
        const errBody = err?.error;
        const errors: string[] = errBody?.errors
          ? Object.values<string[]>(errBody.errors).flat()
          : [];
        const detail = errors.length
          ? errors.join(' ')
          : (errBody?.message || err?.message || 'Impossible de modifier le packing');
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail,
          life: 5000,
        });
        this.loading = false;
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/packings']);
  }

  private isOnline(): boolean {
    return !this.isBrowser || navigator.onLine;
  }
}
