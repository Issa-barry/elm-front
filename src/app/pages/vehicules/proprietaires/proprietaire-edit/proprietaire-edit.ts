import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';

import { ProprietaireService } from '@/services/proprietaires/proprietaire.service';
import { Proprietaire } from '@/models/vehicule.model';
import { ProprietaireForm } from '../proprietaire-form/proprietaire-form';

@Component({
  selector: 'app-proprietaire-edit',
  standalone: true,
  imports: [CommonModule, SkeletonModule, ProprietaireForm],
  template: `
    @if (loading) {
      <div class="card">
        <p-skeleton height="2rem" styleClass="mb-4" />
        <p-skeleton height="10rem" styleClass="mb-4" />
        <p-skeleton height="8rem" />
      </div>
    }
    @if (!loading && proprietaire) {
      <app-proprietaire-form [proprietaire]="proprietaire" />
    }
    @if (!loading && !proprietaire) {
      <div class="card text-center py-12 text-surface-500">
        <i class="pi pi-exclamation-triangle text-4xl mb-4 block text-orange-400"></i>
        <span class="text-lg">Propriétaire introuvable.</span>
      </div>
    }
  `,
})
export class ProprietaireEdit implements OnInit {
  proprietaire: Proprietaire | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private proprietaireService: ProprietaireService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    if (!id) { this.router.navigate(['/vehicules/proprietaires']); return; }
    this.proprietaireService.getOne(id).subscribe({
      next: (resp) => { this.proprietaire = resp.data; this.loading = false; },
      error: () => { this.loading = false; this.router.navigate(['/vehicules/proprietaires']); },
    });
  }
}
