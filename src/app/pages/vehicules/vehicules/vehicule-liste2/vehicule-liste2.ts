import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { StyleClassModule } from 'primeng/styleclass';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';

import { VehiculeService } from '@/services/vehicules/vehicule.service';
import { Vehicule, TYPE_VEHICULE_LABELS } from '@/models/vehicule.model';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

interface FilterOption {
    label: string;
    value: string;
}

@Component({
  selector: 'app-vehicule-liste2',
  templateUrl: './vehicule-liste2.html',
  styleUrl: './vehicule-liste2.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, PhoneFormatPipe, FormsModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, SelectModule, StyleClassModule, ToastModule, TooltipModule],
  providers: [MessageService],
})
export class VehiculeListe2 implements OnInit {
  searchQuery = signal<string>('');
  selectedFilter = signal<string>('all');
  vehicules = signal<Vehicule[]>([]);
  total = signal<number>(0);
  loading = false;

  filterOptions: FilterOption[] = [
      { label: 'Tous', value: 'all' },
      { label: 'Actifs', value: 'actif' },
      { label: 'Inactifs', value: 'inactif' },
  ];

  constructor(
    private vehiculeService: VehiculeService,
    private messageService: MessageService,
    private router: Router,
  ) {}

  goEdit(v: Vehicule): void {
    this.router.navigate(['/vehicules', v.id, 'edit']);
  }

  ngOnInit() {
    this.loadVehicules();
  }

  loadVehicules() {
    this.loading = true;
    this.vehiculeService.getAll().subscribe({
      next: (resp) => {
        this.vehicules.set(resp.data?.data ?? []);
        this.total.set(resp.data?.total ?? 0);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err.error?.message || 'Impossible de charger les véhicules.',
          life: 5000,
        });
      },
    });
  }

  filteredOrders = computed(() => {
      let filtered = this.vehicules();

      if (this.selectedFilter() !== 'all') {
          filtered = filtered.filter(v =>
              this.selectedFilter() === 'actif' ? v.is_active : !v.is_active
          );
      }

      if (this.searchQuery().trim()) {
          const query = this.searchQuery().toLowerCase().trim();
          filtered = filtered.filter(v =>
              v.nom_vehicule.toLowerCase().includes(query) ||
              v.immatriculation.toLowerCase().includes(query)
          );
      }

      return filtered;
  });

  toggleChevron(vehiculeId: number): void {
      const chevronElement = document.querySelector(`.chevron-icon-${vehiculeId}`);
      if (chevronElement) {
          chevronElement.classList.toggle('rotate-180');
      }
  }

  getTypeLabel(v: Vehicule): string {
    return TYPE_VEHICULE_LABELS[v.type_vehicule] ?? v.type_vehicule;
  }

  getStatusColor(v: Vehicule): string {
    return v.is_active ? 'green' : 'surface';
  }

  getStatusIcon(v: Vehicule): string {
    return v.is_active ? 'pi-check-circle' : 'pi-times-circle';
  }

  getStatusLabel(v: Vehicule): string {
    return v.is_active ? 'Actif' : 'Inactif';
  }

  getProprietaireNom(v: Vehicule): string {
    const p = v.proprietaire;
    if (!p) return '—';
    return `${p.prenom} ${p.nom}`.trim();
  }

  getLivreur(v: Vehicule) {
    return v.livreur_principal ?? v.livreurPrincipal ?? null;
  }

  getLivreurNom(v: Vehicule): string {
    const l = this.getLivreur(v);
    if (!l) return '—';
    return `${l.prenom} ${l.nom}`.trim();
  }

  formatDate(dateStr?: string | null): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }
}
