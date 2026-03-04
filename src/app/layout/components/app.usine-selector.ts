import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';

import { UsineContextService } from '@/services/usine/usine-context.service';
import { AccessibleUsine, UsineSubscriptionStatus } from '@/models/usine.model';

interface UsineOption {
  label: string;
  value: number | null;
  icon: string;
  subscriptionStatus?: UsineSubscriptionStatus;
}

/**
 * Global site selector shown in topbar.
 *
 * - HQ users: select with all sites + "Tous les sites"
 * - Non-HQ with multiple sites: select with assigned sites
 * - Non-HQ with one site: read-only badge
 */
@Component({
  selector: 'app-usine-selector',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule, TooltipModule],
  template: `
    @if (showLabel()) {
      <span
        class="usine-badge"
        [pTooltip]="'Site : ' + currentLabel()"
        tooltipPosition="bottom">
        <i class="pi pi-building"></i>
        {{ currentLabel() }}
      </span>
    }

    @if (showSelector()) {
      <p-select
        [options]="options()"
        [ngModel]="selectedValue()"
        optionLabel="label"
        optionValue="value"
        placeholder="Choisir un site"
        styleClass="usine-select"
        appendTo="body"
        (ngModelChange)="onUsineChange($event)">

        <ng-template pTemplate="selectedItem" let-opt>
          <span class="usine-option">
            <i [class]="'pi ' + (opt?.icon ?? 'pi-building')"></i>
            {{ opt?.label }}
          </span>
        </ng-template>

        <ng-template pTemplate="item" let-opt>
          <span class="usine-option">
            <i [class]="'pi ' + (opt?.icon ?? 'pi-building')"></i>
            {{ opt?.label }}
            @if (opt?.subscriptionStatus) {
              <span
                class="usine-sub-badge"
                [style.background]="subscriptionColor(opt.subscriptionStatus)"
                [title]="subscriptionLabel(opt.subscriptionStatus)">
                {{ subscriptionLabel(opt.subscriptionStatus) }}
              </span>
            }
          </span>
        </ng-template>
      </p-select>
    }
  `,
  styles: [`
    .usine-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      background: var(--surface-100);
      color: var(--text-color);
      font-size: 0.8rem;
      font-weight: 600;
      border: 1px solid var(--surface-border);
      white-space: nowrap;
    }

    .usine-option {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    :host ::ng-deep .usine-select {
      .p-select {
        font-size: 0.85rem;
        min-width: 150px;
        max-width: 210px;
      }

      .p-select-label {
        padding: 0.35rem 0.5rem;
      }
    }

    .usine-sub-badge {
      display: inline-block;
      padding: 0.05rem 0.4rem;
      border-radius: 0.75rem;
      font-size: 0.65rem;
      font-weight: 600;
      color: #fff;
      line-height: 1.4;
      white-space: nowrap;
    }
  `],
})
export class AppUsineSelector {
  private readonly usineCtx = inject(UsineContextService);

  subscriptionLabel(status: UsineSubscriptionStatus | undefined): string {
    const labels: Record<string, string> = {
      active: 'Actif',
      trial: 'Periode d\'essai',
      suspended: 'Suspendu',
      cancelled: 'Annule',
    };

    return status ? labels[status] ?? String(status) : '';
  }

  subscriptionColor(status: UsineSubscriptionStatus | undefined): string {
    const colors: Record<string, string> = {
      active: '#22c55e',
      trial: '#3b82f6',
      suspended: '#f97316',
      cancelled: '#ef4444',
    };

    return status ? colors[status] ?? '#94a3b8' : '#94a3b8';
  }

  readonly options = computed<UsineOption[]>(() => {
    const usines: AccessibleUsine[] = this.usineCtx.accessibleUsines();
    const opts: UsineOption[] = usines.map((u) => ({
      label: u.nom,
      value: u.id,
      icon: 'pi-building',
      subscriptionStatus: u.subscription_status,
    }));

    if (this.usineCtx.isSiegeUser()) {
      opts.unshift({ label: 'Tous les sites', value: null, icon: 'pi-globe' });
    }

    return opts;
  });

  readonly selectedValue = computed<number | null>(() => {
    if (this.usineCtx.isConsolidated()) return null;
    return this.usineCtx.currentUsineId();
  });

  readonly showSelector = computed(() => {
    const n = this.usineCtx.accessibleUsines().length;
    return this.usineCtx.isSiegeUser() || n > 1;
  });

  readonly showLabel = computed(() => {
    const n = this.usineCtx.accessibleUsines().length;
    return !this.usineCtx.isSiegeUser() && n === 1;
  });

  readonly currentLabel = computed(() => {
    if (this.usineCtx.isConsolidated()) return 'Tous les sites';
    return this.usineCtx.currentUsine()?.nom ?? '-';
  });

  onUsineChange(value: number | null): void {
    if (value === null) {
      this.usineCtx.enableConsolidatedView();
      return;
    }

    this.usineCtx.switchUsine(value);
  }
}
