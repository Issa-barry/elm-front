import { Component } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

import { StatsComptabilitePackingWidget } from '../components/stats-comptabilite-packing-widget/stats-comptabilite-packing-widget';
import { ComptabilitePackingTableau } from '../components/comptabilite-packing-tableau/comptabilite-packing-tableau';

@Component({
  selector: 'app-comptabilite-packing-liste',
  standalone: true,
  imports: [StatsComptabilitePackingWidget, ComptabilitePackingTableau],
  providers: [MessageService, ConfirmationService],
  templateUrl: './comptabilite-packing-liste.html',
  styleUrl: './comptabilite-packing-liste.scss',
})
export class ComptabilitePackingListe {}
