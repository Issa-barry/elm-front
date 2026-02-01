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
import { ProductService } from '@/pages/service/product.service';
import { HeaderWidget } from '@/pages/dashboards/banking/headerwidget';
import { StatsBankingWidget } from '@/pages/dashboards/banking/statsbankingwidget';
import { RecentTransactionsWidget } from '@/pages/dashboards/banking/recenttransactionswidget';
import { OverviewWidget } from '@/pages/dashboards/banking/overviewwidget';
import { RecentTransactionsTwoWidget } from '@/pages/dashboards/banking/recenttransactionstwowidget';
import { MonthlyPaymentsWidget } from '@/pages/dashboards/banking/monthlypaymentswidget';
import { StatsComptabilitePackingWidget } from '../components/stats-comptabilite-packing-widget/stats-comptabilite-packing-widget';
import { ComptabilitePackingTableau } from '../components/comptabilite-packing-tableau/comptabilite-packing-tableau';


interface PackingPaiementInterface {
  id?: string;
  contact_id?: string;
  contact?: ContactInterface;
  date_debut?: Date | null;
  date_fin?: Date | null;
  nombre_rouleaux?: number;
  prix_rouleau?: number;
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
  selector: 'app-comptabilite-packing-liste',
   standalone: true,
 imports: [
         CommonModule,
         StatsComptabilitePackingWidget,
         ComptabilitePackingTableau
     ],
  providers: [MessageService, ConfirmationService, ProductService],
  templateUrl: './comptabilite-packing-liste.html',
  styleUrl: './comptabilite-packing-liste.scss',
})
export class ComptabilitePackingListe implements OnInit { 

    ngOnInit(): void {
      
    }
}