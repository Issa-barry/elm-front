import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackingFrom } from '../packing-from/packing-from';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
import { PackingService } from '@/services/packing/packing.service';
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

  constructor(
    private prestataireService: PrestataireService,
    private packingService: PackingService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPrestataires();
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
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Packing créé avec succès',
          life: 3000
        });
        this.loading = false;
        // Redirection vers la liste après création
        setTimeout(() => {
          this.router.navigate(['/packings/packings-liste']);
        }, 1000);
      },
      error: (err) => {
        console.error('Erreur lors de la création du packing :', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de créer le packing',
          life: 3000
        });
        this.loading = false;
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/packings/packings-liste']);
  }
}
