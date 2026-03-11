import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

import { BillingEvent, BillingEventStatus, BillingEventsFilter } from '@/models/billing.model';
import { Organisation } from '@/models/organisation.model';
import { BillingService } from '@/services/billing/billing.service';
import { OrganisationService } from '@/services/organisations/organisation.service';

const BILLING_STATUS: Record<BillingEventStatus, { label: string; severity: 'warn' | 'info' | 'success' | 'danger' | 'secondary' }> = {
  pending:   { label: 'En attente', severity: 'warn' },
  invoiced:  { label: 'Facturé',    severity: 'info' },
  paid:      { label: 'Payé',       severity: 'success' },
  cancelled: { label: 'Annulé',     severity: 'secondary' },
};

const EVENT_TYPE_LABELS: Record<string, string> = {
  user_created: 'Création compte',
};

@Component({
  selector: 'app-billing-events',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    SelectModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './billing-events.html',
})
export class BillingEvents implements OnInit {
  private readonly billingService = inject(BillingService);
  private readonly organisationService = inject(OrganisationService);
  private readonly messageService = inject(MessageService);

  events: BillingEvent[] = [];
  organisations: Organisation[] = [];
  loading = false;
  markingPaidId: number | null = null;

  filterOrganisationId: number | null = null;
  filterStatus: BillingEventStatus | null = null;
  filterForfait: string | null = null;

  readonly forfaitOptions: Array<{ label: string; value: string | null }> = [
    { label: 'Tous les forfaits', value: null },
    { label: 'Starter',          value: 'starter'  },
    { label: 'Standard',         value: 'standard' },
    { label: 'Premium',          value: 'premium'  },
  ];

  readonly statusOptions: Array<{ label: string; value: BillingEventStatus | null }> = [
    { label: 'Tous les statuts', value: null },
    { label: 'En attente',       value: 'pending' },
    { label: 'Facturé',          value: 'invoiced' },
    { label: 'Payé',             value: 'paid' },
    { label: 'Annulé',           value: 'cancelled' },
  ];

  ngOnInit(): void {
    this.loadOrganisations();
    this.loadEvents();
  }

  loadOrganisations(): void {
    this.organisationService.getAll().subscribe({
      next: (items) => (this.organisations = items),
      error: () => {},
    });
  }

  loadEvents(): void {
    this.loading = true;
    const filters: BillingEventsFilter = {};
    if (this.filterOrganisationId) filters.organisation_id = this.filterOrganisationId;
    if (this.filterStatus)         filters.status = this.filterStatus;
    if (this.filterForfait)        filters.forfait = this.filterForfait;

    this.billingService.getEvents(filters).subscribe({
      next: (data) => {
        this.events = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, 'Chargement des events impossible.');
      },
    });
  }

  onFilterChange(): void {
    this.loadEvents();
  }

  canMarkPaid(event: BillingEvent): boolean {
    return event.status === 'pending' || event.status === 'invoiced';
  }

  markPaid(event: BillingEvent): void {
    if (this.markingPaidId !== null) return;
    this.markingPaidId = event.id;

    this.billingService.markPaid(event.id).subscribe({
      next: (updated) => {
        const idx = this.events.findIndex((e) => e.id === updated.id);
        if (idx !== -1) {
          this.events = [
            ...this.events.slice(0, idx),
            updated,
            ...this.events.slice(idx + 1),
          ];
        }
        this.markingPaidId = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Event marqué comme payé.',
          life: 3000,
        });
      },
      error: (err) => {
        this.markingPaidId = null;
        this.showApiError(err, 'Impossible de marquer comme payé.');
      },
    });
  }

  getStatusConfig(status: BillingEventStatus) {
    return BILLING_STATUS[status] ?? { label: status, severity: 'secondary' as const };
  }

  getEventTypeLabel(type: string): string {
    return EVENT_TYPE_LABELS[type] ?? type;
  }

  forfaitBadgeClass(slug: string | null | undefined): Record<string, boolean> {
    return {
      'bg-gray-100 text-gray-700':     slug === 'starter',
      'bg-blue-100 text-blue-700':     slug === 'standard',
      'bg-yellow-100 text-yellow-700': slug === 'premium',
      'bg-gray-100 text-gray-600':     !slug || !['starter', 'standard', 'premium'].includes(slug),
    };
  }

  formatGNF(value: string | number): string {
    const n = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(n)) return String(value);
    return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n) + ' GNF';
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }

  get totalAmount(): number {
    return this.events.reduce((sum, e) => sum + parseFloat(e.amount), 0);
  }

  get totalPending(): number {
    return this.events
      .filter((e) => e.status === 'pending')
      .reduce((sum, e) => sum + parseFloat(e.amount), 0);
  }

  get totalPaid(): number {
    return this.events
      .filter((e) => e.status === 'paid')
      .reduce((sum, e) => sum + parseFloat(e.amount), 0);
  }

  get organisationOptions(): Array<{ label: string; value: number | null }> {
    return [
      { label: 'Toutes les organisations', value: null },
      ...this.organisations.map((o) => ({ label: `${o.nom} (${o.code})`, value: o.id })),
    ];
  }

  private showApiError(error: any, fallback: string): void {
    const detail =
      (typeof error?.error?.message === 'string' && error.error.message) ||
      (typeof error?.message === 'string' && error.message) ||
      fallback;

    this.messageService.add({
      severity: 'error',
      summary: 'Erreur',
      detail,
      life: 5000,
    });
  }
}
