import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Vehicule, TYPE_VEHICULE_LABELS } from '@/models/vehicule.model';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

@Component({
  selector: 'app-vehicule-card-mobile',
  standalone: true,
  imports: [CommonModule, ButtonModule, PhoneFormatPipe],
  template: `
    <div
      class="flex items-center gap-3 px-4 py-3 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-xl active:bg-surface-50 dark:active:bg-surface-800 transition-colors cursor-pointer"
      (click)="edit.emit(vehicule)"
    >
      <!-- Photo -->
      <img
        class="w-11 h-11 rounded-lg object-cover flex-shrink-0"
        [src]="vehicule.photo_url || ''"
        [alt]="vehicule.nom_vehicule"
      />

      <!-- Infos -->
      <div class="flex-1 min-w-0">
        <div class="text-surface-900 dark:text-surface-0 font-semibold text-sm leading-tight truncate">
          {{ vehicule.nom_vehicule }}
        </div>
        <div class="text-surface-500 dark:text-surface-400 text-xs mt-0.5">
          {{ vehicule.immatriculation }} · {{ getTypeLabel() }}
        </div>
      </div>

      <!-- Statut + bouton edit -->
      <div class="flex items-center gap-2 flex-shrink-0">
        <span
          [ngClass]="{
            'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold': true,
            'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300': vehicule.is_active,
            'bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400': !vehicule.is_active
          }"
        >
          <i [class]="'pi text-xs ' + (vehicule.is_active ? 'pi-check-circle' : 'pi-times-circle')"></i>
          {{ vehicule.is_active ? 'Actif' : 'Inactif' }}
        </span>
        <button
          pButton
          severity="secondary"
          [text]="true"
          [rounded]="true"
          class="w-8 h-8"
          (click)="edit.emit(vehicule); $event.stopPropagation()"
        >
          <i class="pi pi-pencil text-xs" pButtonIcon></i>
        </button>
      </div>
    </div>
  `,
})
export class VehiculeCardMobile {
  @Input({ required: true }) vehicule!: Vehicule;
  @Output() edit = new EventEmitter<Vehicule>();

  getTypeLabel(): string {
    return TYPE_VEHICULE_LABELS[this.vehicule.type_vehicule] ?? this.vehicule.type_vehicule;
  }
}
