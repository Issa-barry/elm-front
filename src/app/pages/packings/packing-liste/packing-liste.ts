import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';

import { PackingService } from '@/services/packing/packing.service';
import { Packing, PACKING_STATUT_LABELS, PACKING_STATUT_SEVERITY, PackingStatut } from '@/models/packing.model';
import { AuthService } from '@/services/auth/auth.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

@Component({
  selector: 'app-packing-liste',
  standalone: true,
  templateUrl: './packing-liste.html',
  styleUrl: './packing-liste.scss',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    SkeletonModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    SelectModule,
    DatePickerModule,
    TooltipModule,
    ConfirmDialogModule,
    MenuModule,
    RippleModule,
    PhoneFormatPipe,
  ],
  providers: [MessageService, ConfirmationService],
})
export class PackingListe implements OnInit {
  packings = signal<Packing[]>([]);
  searchQuery = signal<string>('');
  selectedStatut = signal<PackingStatut | 'all'>('all');
  filterDateRange: Date[] | null = null;
  loading = false;
  canCreate = false;
  canUpdate = false;
  canDelete = false;

  mobileFilterMenuItems: MenuItem[] = [];

  statutOptions = [
    { label: 'Tous les statuts', value: 'all' },
    { label: 'À valider', value: 'a_valider' },
    { label: 'Validé', value: 'valide' },
    { label: 'Annulé', value: 'annule' },
  ];

  filteredPackings = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const list = this.packings();
    if (!query) return list;
    return list.filter((p) => {
      const searchable = [
        p.reference,
        p.prestataire?.nom,
        p.prestataire?.prenom,
        p.prestataire?.phone,
        this.getStatutLabel(p.statut),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return searchable.includes(query);
    });
  });

  constructor(
    private packingService: PackingService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.canCreate = this.authService.hasPermission('packings.create');
    this.canUpdate = this.authService.hasPermission('packings.update');
    this.canDelete = this.authService.hasPermission('packings.delete');
  }

  ngOnInit(): void {
    this.load();
    this.mobileFilterMenuItems = [
      { label: 'Tous',      icon: 'pi pi-list',         command: () => this.setStatutFilter('all') },
      { label: 'À valider', icon: 'pi pi-clock',        command: () => this.setStatutFilter('a_valider') },
      { label: 'Validé',    icon: 'pi pi-check-circle', command: () => this.setStatutFilter('valide') },
      { label: 'Annulé',    icon: 'pi pi-times-circle', command: () => this.setStatutFilter('annule') },
    ];
  }

  goBack(): void { this.router.navigate(['/']); }

  load(): void {
    this.loading = true;
    const filters: Record<string, string> = {};
    const statut = this.selectedStatut();
    if (statut !== 'all') filters['statut'] = statut;
    if (this.filterDateRange?.[0]) filters['date_debut'] = this.formatDate(this.filterDateRange[0]);
    if (this.filterDateRange?.[1]) filters['date_fin'] = this.formatDate(this.filterDateRange[1]);

    this.packingService.getPackings(Object.keys(filters).length ? filters : undefined).subscribe({
      next: (response) => {
        const data = 'data' in response && Array.isArray(response.data)
          ? response.data
          : (response as any).data?.data ?? [];
        this.packings.set(data);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de charger les packings.', life: 5000 });
      },
    });
  }

  goNew(): void { this.router.navigate(['/packings/packings-new']); }
  goEdit(p: Packing): void { this.router.navigate(['/packings/packings-edit', p.id]); }

  setStatutFilter(value: string): void {
    this.selectedStatut.set(value as PackingStatut | 'all');
    this.load();
  }

  onDateRangeSelect(): void {
    if (this.filterDateRange?.[1]) this.load();
  }

  clearFilters(): void {
    this.selectedStatut.set('all');
    this.filterDateRange = null;
    this.load();
  }

  deletePacking(p: Packing): void {
    this.confirmationService.confirm({
      message: `Supprimer définitivement le packing <strong>${p.reference}</strong> ?`,
      header: 'Supprimer le packing',
      icon: 'pi pi-trash',
      rejectButtonProps: { label: 'Annuler', severity: 'secondary', outlined: true },
      acceptButtonProps: { label: 'Supprimer', severity: 'danger' },
      accept: () => {
        this.packingService.deletePacking(p.id).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Supprimé', detail: `Packing ${p.reference} supprimé.`, life: 3000 });
            this.packings.update(list => list.filter(x => x.id !== p.id));
          },
          error: (err) => this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.error?.message || 'Impossible de supprimer.', life: 5000 }),
        });
      },
    });
  }

  getInitials(p: Packing): string {
    const prenom = p.prestataire?.prenom ?? '';
    const nom = p.prestataire?.nom ?? '';
    if (!prenom && !nom) return '--';
    return `${prenom.charAt(0)}${nom.charAt(0)}`.toUpperCase();
  }

  getStatutLabel(statut: PackingStatut): string {
    return PACKING_STATUT_LABELS[statut] || statut;
  }

  getStatutSeverity(statut: PackingStatut): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    return PACKING_STATUT_SEVERITY[statut] || 'info';
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'decimal', minimumFractionDigits: 0 }).format(value) + ' GNF';
  }

  formatDateDisplay(dateStr: string | Date): string {
    if (dateStr == null) return '-';
    const date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr;
    return date.toLocaleDateString('fr-FR');
  }

  private formatDate(date: Date | string): string {
    if (!date) return '';
    if (typeof date === 'string') return date;
    return date.toISOString().split('T')[0];
  }
}
