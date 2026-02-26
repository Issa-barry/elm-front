import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';

import { VehiculeService } from '@/services/vehicules/vehicule.service';
import { Vehicule } from '@/models/vehicule.model';
import { VehiculeForm } from '../vehicule-form/vehicule-form';

@Component({
  selector: 'app-vehicule-edit',
  standalone: true,
  imports: [CommonModule, SkeletonModule, VehiculeForm],
  template: `
    @if (loading) {
      <div class="card">
        <p-skeleton height="2rem" styleClass="mb-4" />
        <p-skeleton height="1rem" styleClass="mb-6" />
        <p-skeleton height="12rem" styleClass="mb-4" />
        <p-skeleton height="8rem" />
      </div>
    }
    @if (!loading && vehicule) {
      <app-vehicule-form [vehicule]="vehicule" />
    }
    @if (!loading && !vehicule) {
      <div class="card text-center py-12 text-surface-500">
        <i class="pi pi-exclamation-triangle text-4xl mb-4 block text-orange-400"></i>
        <span class="text-lg">Véhicule introuvable.</span>
      </div>
    }
  `,
})
export class VehiculeEdit implements OnInit {
  vehicule: Vehicule | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private vehiculeService: VehiculeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    if (!id) {
      this.router.navigate(['/vehicules']);
      return;
    }
    this.vehiculeService.getOne(id).subscribe({
      next: (resp) => {
        this.vehicule = resp.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate(['/vehicules']);
      },
    });
  }
}
