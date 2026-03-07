import { Component } from '@angular/core';
import { HeaderWidget2 } from './widgets/headerwidget2';
import { ProductService } from '@/pages/service/product.service';
import { caParStatutWidget } from './widgets/caparstatutwidget';
import { EncaissementWidget } from './widgets/encaissementwidget';
import { VehiculewWidget } from './widgets/vehiculewidget';
import { BarWidget } from './widgets/barWidget';
import { DoughnutWidget } from './widgets/doughnut';
import { VentesEncaissementsPeriod } from '@/services/dashboard/dashboard.service';
 
@Component({
  selector: 'app-finance',
  standalone:true,
  imports: [HeaderWidget2, caParStatutWidget, EncaissementWidget, VehiculewWidget, BarWidget, DoughnutWidget],
  templateUrl: './finance.html',
  styleUrl: './finance.scss',
  providers: [ProductService],
})
export class Finance {
  encaissementPeriod: VentesEncaissementsPeriod = 'this_month';

  onEncaissementPeriodChange(period: VentesEncaissementsPeriod): void {
    this.encaissementPeriod = period;
  }
}
