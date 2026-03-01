import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { MODE_PAIEMENT_LABELS, Packing, Versement } from '@/models/packing.model';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';
import { PackingService } from '@/services/packing/packing.service';
import { UsineContextService } from '@/services/usine/usine-context.service';

@Component({
  selector: 'app-packing-facture',
  standalone: true,
  imports: [CommonModule, ToastModule, PhoneFormatPipe],
  providers: [MessageService],
  templateUrl: './packing-facture.html',
  styleUrl: './packing-facture.scss',
})
export class PackingFacture implements OnInit {
  loading = false;
  packing: Packing | null = null;
  versements: Versement[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private packingService: PackingService,
    private usineContext: UsineContextService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      const id = idParam ? Number(idParam) : NaN;

      if (!id || Number.isNaN(id)) {
        this.router.navigate(['/packings']);
        return;
      }

      this.loadPacking(id);
    });
  }

  get usineNom(): string {
    return this.usineContext.currentUsine()?.nom || 'Usine';
  }

  get usineAdresse(): string {
    const nom = this.usineContext.currentUsine()?.nom;
    return nom ? `${nom}, Conakry, Guinée` : '';
  }

  get factureDate(): string {
    return this.formatDateDisplay(this.packing?.date);
  }

  get factureNumero(): string {
    return this.packing?.reference || '-';
  }

  get machinisteReference(): string {
    return this.packing?.prestataire?.reference || '-';
  }

  get prestataireNomComplet(): string {
    const nom = this.packing?.prestataire?.nom || '';
    const prenom = this.packing?.prestataire?.prenom || '';
    const fullName = `${prenom} ${nom}`.trim();
    return fullName || '-';
  }

  get prestatairePhone(): string | null {
    return this.packing?.prestataire?.phone ?? null;
  }

  get prestataireAdresse(): string {
    const ville = this.packing?.prestataire?.ville || '';
    const pays = this.packing?.prestataire?.pays || '';
    const location = [ville, pays].filter(Boolean).join(', ');
    return location || '-';
  }

  get quantiteRouleaux(): number {
    return this.packing?.nb_rouleaux || 0;
  }

  get prixUnitaire(): number {
    return this.packing?.prix_par_rouleau || 0;
  }

  get totalLigne(): number {
    return this.packing?.montant || 0;
  }

  get totalFacture(): number {
    return this.packing?.montant || 0;
  }

  get montantPaye(): number {
    return this.packing?.montant_verse || 0;
  }

  get resteAPayer(): number {
    return this.packing?.montant_restant || 0;
  }

  get modePaiementLabel(): string {
    if (!this.versements.length) return '-';

    const versementsTries = [...this.versements].sort((a, b) => {
      return new Date(b.date_versement).getTime() - new Date(a.date_versement).getTime();
    });

    const latest = versementsTries[0];
    return latest.mode_paiement_label || MODE_PAIEMENT_LABELS[latest.mode_paiement] || '-';
  }

  get notes(): string {
    return this.packing?.notes?.trim() || '-';
  }

  formatAmount(value: number): string {
    return `${new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)} FG`;
  }

  private loadPacking(id: number): void {
    this.loading = true;
    this.packingService.getPacking(id).subscribe({
      next: (response) => {
        this.packing = response.data;
        this.loadVersements(id);
      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger la facture packing.',
          life: 4000,
        });
      },
    });
  }

  private loadVersements(id: number): void {
    this.packingService.getVersements(id).subscribe({
      next: (response) => {
        this.versements = response.data?.versements || [];
        this.loading = false;
      },
      error: () => {
        this.versements = [];
        this.loading = false;
      },
    });
  }

  private formatDateDisplay(dateValue: string | Date | null | undefined): string {
    if (!dateValue) return '-';

    if (typeof dateValue === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
      const [year, month, day] = dateValue.split('-');
      return `${day}/${month}/${year}`;
    }

    const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
    if (Number.isNaN(date.getTime())) return '-';

    return date.toLocaleDateString('fr-FR');
  }

}
