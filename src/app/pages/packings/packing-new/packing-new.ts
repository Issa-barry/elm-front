import { Component, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';
import { PackingFrom } from '../packing-from/packing-from';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
import { PackingService } from '@/services/packing/packing.service';
import { ParametresService } from '@/services/parametres/parametres.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { Prestataire } from '@/models/prestataire.model';
import { CreatePackingDto } from '@/models/packing.model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-packing-new',
  standalone: true,
  imports: [PackingFrom, ToastModule],
  providers: [MessageService],
  templateUrl: './packing-new.html',
  styleUrl: './packing-new.scss',
})
export class PackingNew implements OnInit {
  prestataires: Prestataire[] = [];
  loading = false;
  defaultPrixRouleau = 0;

  constructor(
    private prestataireService: PrestataireService,
    private packingService: PackingService,
    private parametresService: ParametresService,
    private messageService: MessageService,
    private router: Router,
    private usineContext: UsineContextService
  ) {
    // Rechargement automatique quand l'usine change
    effect(() => {
      this.usineContext.currentUsineId(); // declare la dependance au signal
      this.loadPrestataires();
    });
  }

  ngOnInit(): void {
    this.parametresService.getPrixRouleauDefaut().subscribe({
      next: (prix) => { this.defaultPrixRouleau = prix; },
      error: () => {}
    });
  }

  private loadPrestataires(): void {
    this.loading = true;
    this.prestataireService.getPrestataires().subscribe({
      next: (response) => {
        this.prestataires = this.extractPrestataires(response);
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des prestataires :', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les prestataires',
          life: 3000
        });
        this.loading = false;
      }
    });
  }

  private extractPrestataires(
    response: { data: Prestataire[] } | { data: { data: Prestataire[] } }
  ): Prestataire[] {
    const data: any = response?.data;
    if (Array.isArray(data)) return data as Prestataire[];
    if (data && Array.isArray(data.data)) return data.data as Prestataire[];
    return [];
  }

  onSubmit(packingData: CreatePackingDto): void {
    this.loading = true;

    this.packingService.createPacking(packingData).subscribe({
      next: (response) => {
        if (!response?.success) {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: response?.message || 'Impossible de creer le packing',
            life: 3000
          });
          this.loading = false;
          return;
        }

        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: 'Packing cree avec succes',
          life: 3000
        });
        this.loading = false;
        // Redirection vers la liste apres creation
        setTimeout(() => {
          this.router.navigate(['/packings']);
        }, 1000);
      },
      error: (err) => {
        console.error('Erreur lors de la creation du packing :', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: this.getApiErrorDetail(err, 'Impossible de creer le packing'),
          life: 3000
        });
        this.loading = false;
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/packings']);
  }

  private getApiErrorDetail(error: unknown, fallback: string): string {
    const validationMessages = this.extractValidationMessages(error);
    if (validationMessages.length > 0) {
      return validationMessages.join('; ');
    }

    const apiMessage = this.extractApiMessage(error);
    if (apiMessage) {
      return apiMessage;
    }

    return fallback;
  }

  private extractApiMessage(error: unknown): string | null {
    const message = (error as { error?: { message?: unknown } })?.error?.message;
    if (typeof message !== 'string') {
      return null;
    }

    const trimmedMessage = message.trim();
    return trimmedMessage.length > 0 ? trimmedMessage : null;
  }

  private extractValidationMessages(error: unknown): string[] {
    const validationErrors = (error as { error?: { errors?: unknown } })?.error?.errors;
    if (!validationErrors || typeof validationErrors !== 'object') {
      return [];
    }

    return Object.values(validationErrors as Record<string, unknown>)
      .flatMap((value) => (Array.isArray(value) ? value : [value]))
      .map((message) => String(message).trim())
      .filter((message) => message.length > 0);
  }
}
