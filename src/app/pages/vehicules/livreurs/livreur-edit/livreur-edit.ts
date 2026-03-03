import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';

import { LivreurService } from '@/services/livreurs/livreur.service';
import { Livreur } from '@/models/vehicule.model';
import { LivreurForm } from '../livreur-form/livreur-form';

@Component({
  selector: 'app-livreur-edit',
  standalone: true,
  imports: [CommonModule, SkeletonModule, LivreurForm],
  template: `
    @if (loading) {
      <div class="card">
        <p-skeleton height="2rem" styleClass="mb-4" />
        <p-skeleton height="10rem" styleClass="mb-4" />
        <p-skeleton height="6rem" />
      </div>
    }
    @if (!loading && livreur) {
      <app-livreur-form [livreur]="livreur" />
    }
    @if (!loading && !livreur) {
      <div class="card text-center py-12 text-surface-500">
        <i class="pi pi-exclamation-triangle text-4xl mb-4 block text-orange-400"></i>
        <span class="text-lg">Livreur introuvable.</span>
      </div>
    }
  `,
})
export class LivreurEdit implements OnInit {
  livreur: Livreur | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private livreurService: LivreurService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    if (!id) { this.router.navigate(['/vehicules/livreurs']); return; }
    this.livreurService.getOne(id).subscribe({
      next: (resp) => { this.livreur = resp.data; this.loading = false; },
      error: () => { this.loading = false; this.router.navigate(['/vehicules/livreurs']); },
    });
  }
}
