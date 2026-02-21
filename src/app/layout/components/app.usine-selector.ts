import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';

import { UsineContextService } from '@/services/usine/usine-context.service';
import { AccessibleUsine } from '@/models/usine.model';

interface UsineOption {
  label: string;
  value: number | null; // null = vue consolidée siège
  icon:  string;
}

/**
 * Sélecteur d'usine affiché dans la topbar.
 *
 * Comportement :
 * - Siège            → p-select avec toutes les usines + option "Toutes les usines"
 * - Non-siège, N > 1 → p-select limité à accessible_usines
 * - Non-siège, N = 1 → badge non-interactif (contexte forcé)
 * - Non-siège, N = 0 → rien (backend gère le contexte)
 */
@Component({
  selector: 'app-usine-selector',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule, TooltipModule],
  template: `
    <!-- ── Badge lecture seule (1 seule usine, non-siège) ── -->
    @if (showLabel()) {
      <span
        class="usine-badge"
        [pTooltip]="'Usine : ' + currentLabel()"
        tooltipPosition="bottom">
        <i class="pi pi-building"></i>
        {{ currentLabel() }}
      </span>
    }

    <!-- ── Sélecteur (siège ou multi-usines) ── -->
    @if (showSelector()) {
      <p-select
        [options]="options()"
        [ngModel]="selectedValue()"
        optionLabel="label"
        optionValue="value"
        placeholder="Choisir une usine"
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
          </span>
        </ng-template>

      </p-select>
    }
  `,
  styles: [`
    .usine-badge {
      display:      inline-flex;
      align-items:  center;
      gap:          0.35rem;
      padding:      0.25rem 0.75rem;
      border-radius: 1rem;
      background:   var(--surface-100);
      color:        var(--text-color);
      font-size:    0.8rem;
      font-weight:  600;
      border:       1px solid var(--surface-border);
      white-space:  nowrap;
    }

    .usine-option {
      display:     inline-flex;
      align-items: center;
      gap:         0.4rem;
    }

    :host ::ng-deep .usine-select {
      .p-select {
        font-size: 0.85rem;
        min-width: 150px;
        max-width: 210px;
      }
      .p-select-label { padding: 0.35rem 0.5rem; }
    }
  `],
})
export class AppUsineSelector {
  private readonly usineCtx = inject(UsineContextService);

  // ── Options du sélecteur ─────────────────────────────
  readonly options = computed<UsineOption[]>(() => {
    const usines: AccessibleUsine[] = this.usineCtx.accessibleUsines();
    const opts: UsineOption[] = usines.map(u => ({
      label: u.nom,
      value: u.id,
      icon:  'pi-building',
    }));

    // Siège : option "Toutes les usines" en tête de liste
    if (this.usineCtx.isSiegeUser()) {
      opts.unshift({ label: 'Toutes les usines', value: null, icon: 'pi-globe' });
    }

    return opts;
  });

  /** Valeur courante synchronisée avec le store (réactive) */
  readonly selectedValue = computed<number | null>(() => {
    if (this.usineCtx.isConsolidated()) return null;
    return this.usineCtx.currentUsineId();
  });

  // ── Visibilité ───────────────────────────────────────
  readonly showSelector = computed(() => {
    const n = this.usineCtx.accessibleUsines().length;
    return this.usineCtx.isSiegeUser() || n > 1;
  });

  readonly showLabel = computed(() => {
    const n = this.usineCtx.accessibleUsines().length;
    return !this.usineCtx.isSiegeUser() && n === 1;
  });

  readonly currentLabel = computed(() => {
    if (this.usineCtx.isConsolidated()) return 'Toutes les usines';
    return this.usineCtx.currentUsine()?.nom ?? '—';
  });

  // ── Événements ───────────────────────────────────────
  onUsineChange(value: number | null): void {
    if (value === null) {
      this.usineCtx.enableConsolidatedView();
    } else {
      this.usineCtx.switchUsine(value);
    }
  }
}
