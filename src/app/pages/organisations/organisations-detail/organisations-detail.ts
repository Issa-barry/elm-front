import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { Organisation } from '@/models/organisation.model';
import { OrganisationService } from '@/services/organisations/organisation.service';

@Component({
  selector: 'app-organisations-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './organisations-detail.html',
  styleUrl: './organisations-detail.scss',
})
export class OrganisationsDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly organisationService = inject(OrganisationService);

  organisation: Organisation | null = null;
  loading = false;
  errorMessage: string | null = null;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!Number.isInteger(id) || id <= 0) {
      this.errorMessage = 'Organisation invalide.';
      return;
    }

    this.loadOrganisation(id);
  }

  private loadOrganisation(id: number): void {
    this.loading = true;
    this.errorMessage = null;

    this.organisationService.getById(id).subscribe({
      next: (item) => {
        this.organisation = item;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage =
          (typeof error?.error?.message === 'string' && error.error.message) ||
          'Chargement de l\'organisation impossible.';
      },
    });
  }

  forfaitBadgeClass(slug: string | null | undefined): Record<string, boolean> {
    return {
      'bg-gray-100 text-gray-700':     slug === 'starter',
      'bg-blue-100 text-blue-700':     slug === 'standard',
      'bg-yellow-100 text-yellow-700': slug === 'premium',
      'bg-gray-100 text-gray-600':     !slug || !['starter', 'standard', 'premium'].includes(slug),
    };
  }
}
