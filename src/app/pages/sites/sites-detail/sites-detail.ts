import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { Site } from '@/models/usine.model';
import { SiteService } from '@/services/sites/site.service';

@Component({
  selector: 'app-sites-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './sites-detail.html',
  styleUrl: './sites-detail.scss',
})
export class SitesDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly siteService = inject(SiteService);

  site: Site | null = null;
  loading = false;
  errorMessage: string | null = null;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!Number.isInteger(id) || id <= 0) {
      this.errorMessage = 'Site invalide.';
      return;
    }

    this.loadSite(id);
  }

  private loadSite(id: number): void {
    this.loading = true;
    this.errorMessage = null;

    this.siteService.getById(id).subscribe({
      next: (item) => {
        this.site = item;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage =
          (typeof error?.error?.message === 'string' && error.error.message) ||
          'Chargement du site impossible.';
      },
    });
  }
}
