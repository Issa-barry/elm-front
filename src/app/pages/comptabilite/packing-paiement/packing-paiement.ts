import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// PrimeNG Imports - Syntaxe PrimeNG 20
import { Card } from 'primeng/card';
import { Table, TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Tag } from 'primeng/tag';
import { Dialog } from 'primeng/dialog';
import { Toast } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toolbar } from 'primeng/toolbar';
import { DatePicker } from 'primeng/datepicker';
import { InputNumber } from 'primeng/inputnumber';
import { Divider } from 'primeng/divider';
import { Skeleton } from 'primeng/skeleton';
import { Badge } from 'primeng/badge';
import { Chip } from 'primeng/chip';
import { Select } from 'primeng/select';
import { FloatLabel } from 'primeng/floatlabel';

import { MessageService, ConfirmationService } from 'primeng/api';

import { ContactInterface } from '@/models/contacts/contact-interface';

// ✅ Solution : Interface pure sans hériter de PackingModel
interface PackingPaiementInterface {
  id?: string;
  contact_id?: string;
  contact?: ContactInterface;
  date_debut?: Date | null;
  date_fin?: Date | null;
  nombre_rouleaux?: number;
  prix_par_rouleau?: number;
  montant: number;
  statut?: 'en_cours' | 'termine' | 'annule';
  created_at?: string;
  updated_at?: string;
  
  // Propriétés spécifiques au paiement
  montant_paye?: number;
  montant_restant?: number;
  statut_paiement?: 'non_paye' | 'partiel' | 'paye';
  date_paiement?: Date | null;
  mode_paiement?: string;
  reference_paiement?: string;
}

interface ModePaiement {
  name: string;
  code: string;
}

@Component({
  selector: 'app-packing-paiement',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Card,
    TableModule,
    Button,
    InputText,
    Tag,
    Dialog,
    Toast,
    ConfirmDialog,
    Toolbar,
    DatePicker,
    InputNumber,
    Divider,
    Skeleton,
    Badge,
    Chip,
    Select,
    FloatLabel,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './packing-paiement.html',
  styleUrl: './packing-paiement.scss',
})
export class PackingPaiement implements OnInit {
  packings: PackingPaiementInterface[] = [];
  selectedPackings: PackingPaiementInterface[] = [];
  loading: boolean = false;
  
  // Dialog pour paiement
  displayPaiementDialog: boolean = false;
  packingSelectionne?: PackingPaiementInterface;
  montantPaiement: number = 0;
  datePaiement: Date = new Date();
  modePaiementSelectionne?: ModePaiement;
  referencePaiement: string = '';
  
  // Options modes de paiement
  modesPaiement: ModePaiement[] = [
    { name: 'Espèces', code: 'especes' },
    { name: 'Orange Money', code: 'orange_money' },
    { name: 'MTN MoMo', code: 'mtn_momo' },
    { name: 'Virement Bancaire', code: 'virement' },
    { name: 'Chèque', code: 'cheque' },
  ];
  
  // Dialog pour détails
  displayDetailsDialog: boolean = false;
  
  // Filtres et recherche
  searchValue: string = '';
  
  // Statistiques
  totalAPayer: number = 0;
  totalPaye: number = 0;
  totalRestant: number = 0;
  nombreNonPaye: number = 0;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadPackings();
  }

  loadPackings() {
    this.loading = true;
    
    // Simulation de données - À remplacer par votre service API
    setTimeout(() => {
      this.packings = this.getMockData();
      this.calculateStatistiques();
      this.loading = false;
    }, 1000);
  }

  getMockData(): PackingPaiementInterface[] {
    return [
      {
        id: '1',
        contact_id: 'c1',
        contact: {
          id: 'c1',
          nom: 'Diallo',
          prenom: 'Mamadou',
          phone: '+224622000001',
          code_pays: 'GN',
          pays: 'Guinée',
        },
        date_debut: new Date('2024-01-15'),
        date_fin: new Date('2024-01-20'),
        nombre_rouleaux: 150,
        prix_par_rouleau: 5000,
        montant: 750000,
        montant_paye: 750000,
        montant_restant: 0,
        statut: 'termine',
        statut_paiement: 'paye',
        date_paiement: new Date('2024-01-21'),
        mode_paiement: 'Espèces',
        reference_paiement: 'PAY-2024-001',
        created_at: '2024-01-15T10:00:00',
      },
      {
        id: '2',
        contact_id: 'c2',
        contact: {
          id: 'c2',
          nom: 'Bah',
          prenom: 'Aissatou',
          phone: '+224655000002',
          code_pays: 'GN',
          pays: 'Guinée',
        },
        date_debut: new Date('2024-01-18'),
        date_fin: new Date('2024-01-25'),
        nombre_rouleaux: 200,
        prix_par_rouleau: 4500,
        montant: 900000,
        montant_paye: 500000,
        montant_restant: 400000,
        statut: 'termine',
        statut_paiement: 'partiel',
        date_paiement: new Date('2024-01-26'),
        mode_paiement: 'Orange Money',
        reference_paiement: 'PAY-2024-002',
        created_at: '2024-01-18T09:00:00',
      },
      {
        id: '3',
        contact_id: 'c3',
        contact: {
          id: 'c3',
          nom: 'Camara',
          prenom: 'Ibrahima',
          phone: '+224664000003',
          code_pays: 'GN',
          pays: 'Guinée',
        },
        date_debut: new Date('2024-01-22'),
        date_fin: null,
        nombre_rouleaux: 180,
        prix_par_rouleau: 5000,
        montant: 900000,
        montant_paye: 0,
        montant_restant: 900000,
        statut: 'en_cours',
        statut_paiement: 'non_paye',
        created_at: '2024-01-22T08:00:00',
      },
      {
        id: '4',
        contact_id: 'c4',
        contact: {
          id: 'c4',
          nom: 'Sylla',
          prenom: 'Fatoumata',
          phone: '+224621000004',
          code_pays: 'GN',
          pays: 'Guinée',
        },
        date_debut: new Date('2024-01-20'),
        date_fin: new Date('2024-01-27'),
        nombre_rouleaux: 120,
        prix_par_rouleau: 5500,
        montant: 660000,
        montant_paye: 300000,
        montant_restant: 360000,
        statut: 'termine',
        statut_paiement: 'partiel',
        date_paiement: new Date('2024-01-28'),
        mode_paiement: 'MTN MoMo',
        reference_paiement: 'PAY-2024-003',
        created_at: '2024-01-20T11:00:00',
      },
    ];
  }

  calculateStatistiques() {
    this.totalAPayer = this.packings.reduce((sum, p) => sum + (p.montant || 0), 0);
    this.totalPaye = this.packings.reduce((sum, p) => sum + (p.montant_paye || 0), 0);
    this.totalRestant = this.packings.reduce((sum, p) => sum + (p.montant_restant || 0), 0);
    this.nombreNonPaye = this.packings.filter(p => p.statut_paiement === 'non_paye').length;
  }

  openPaiementDialog(packing: PackingPaiementInterface) {
    this.packingSelectionne = { ...packing };
    this.montantPaiement = packing.montant_restant || 0;
    this.datePaiement = new Date();
    this.modePaiementSelectionne = undefined;
    this.referencePaiement = '';
    this.displayPaiementDialog = true;
  }

  openDetailsDialog(packing: PackingPaiementInterface) {
    this.packingSelectionne = packing;
    this.displayDetailsDialog = true;
  }

  enregistrerPaiement() {
    if (!this.packingSelectionne || this.montantPaiement <= 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Attention',
        detail: 'Veuillez saisir un montant valide',
      });
      return;
    }

    if (!this.modePaiementSelectionne) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Attention',
        detail: 'Veuillez sélectionner un mode de paiement',
      });
      return;
    }

    // Simulation de l'enregistrement - À remplacer par votre service API
    const index = this.packings.findIndex(p => p.id === this.packingSelectionne?.id);
    if (index !== -1) {
      const packing = this.packings[index];
      const nouveauMontantPaye = (packing.montant_paye || 0) + this.montantPaiement;
      const nouveauMontantRestant = (packing.montant || 0) - nouveauMontantPaye;

      this.packings[index] = {
        ...packing,
        montant_paye: nouveauMontantPaye,
        montant_restant: nouveauMontantRestant,
        statut_paiement: nouveauMontantRestant === 0 ? 'paye' : 'partiel',
        date_paiement: this.datePaiement,
        mode_paiement: this.modePaiementSelectionne.name,
        reference_paiement: this.referencePaiement,
      };

      this.calculateStatistiques();
      this.displayPaiementDialog = false;

      this.messageService.add({
        severity: 'success',
        summary: 'Succès',
        detail: 'Paiement enregistré avec succès',
      });
    }
  }

  getStatutSeverity(statut?: string): 'success' | 'warn' | 'danger' | 'info' | 'secondary' | 'contrast' {
    switch (statut) {
      case 'termine':
        return 'success';
      case 'en_cours':
        return 'info';
      case 'annule':
        return 'danger';
      default:
        return 'warn';
    }
  }

  getPaiementSeverity(statut?: string): 'success' | 'warn' | 'danger' | 'info' | 'secondary' | 'contrast' {
    switch (statut) {
      case 'paye':
        return 'success';
      case 'partiel':
        return 'warn';
      case 'non_paye':
        return 'danger';
      default:
        return 'danger';
    }
  }

  formatCurrency(value: number | undefined): string {
    if (!value) return '0 GNF';
    return new Intl.NumberFormat('fr-GN', {
      style: 'currency',
      currency: 'GNF',
      minimumFractionDigits: 0,
    }).format(value);
  }

  formatDate(date: Date | null | undefined): string {
    if (!date) return '-';
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(date));
  }

  exportPDF() {
    this.messageService.add({
      severity: 'info',
      summary: 'Export',
      detail: 'Fonctionnalité en cours de développement',
    });
  }

  exportExcel() {
    this.messageService.add({
      severity: 'info',
      summary: 'Export',
      detail: 'Fonctionnalité en cours de développement',
    });
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }

  imprimerRecu(packing: PackingPaiementInterface) {
    this.messageService.add({
      severity: 'info',
      summary: 'Impression',
      detail: 'Fonctionnalité en cours de développement',
    });
  }
}