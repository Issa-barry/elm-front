import { Component, HostListener, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

import { MessageService, ConfirmationService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';

import { StatsComptabilitePackingWidget } from '../components/stats-comptabilite-packing-widget/stats-comptabilite-packing-widget';
import { ComptabilitePackingTableau } from '../components/comptabilite-packing-tableau/comptabilite-packing-tableau';
import { ProductService } from '@/pages/service/product.service';

@Component({
  selector: 'app-comptabilite-packing-liste',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    StatsComptabilitePackingWidget,
    ComptabilitePackingTableau,
  ],
  providers: [MessageService, ConfirmationService, ProductService],
  templateUrl: './comptabilite-packing-liste.html',
  styleUrl: './comptabilite-packing-liste.scss',
})
export class ComptabilitePackingListe implements OnInit, OnDestroy {
  private readonly mobileBreakpoint = 768;
  private readonly mobilePwaClass = 'comptabilite-packing-mobile-pwa';

  mobileStatusMenuItems: MenuItem[] = [
    { label: 'Tous', command: () => this.applyMobileStatut(null) },
    { label: 'Impayé', command: () => this.applyMobileStatut('impaye') },
    { label: 'Partiel', command: () => this.applyMobileStatut('partiel') },
    { label: 'Soldé', command: () => this.applyMobileStatut('solde') },
  ];

  @ViewChild(ComptabilitePackingTableau) tableauRef?: ComptabilitePackingTableau;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.syncMobilePwaMode();
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(this.mobilePwaClass);
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.syncMobilePwaMode();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  applyMobileStatut(value: string | null): void {
    this.tableauRef?.applyMobileStatut(value);
  }

  private syncMobilePwaMode(): void {
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }
}