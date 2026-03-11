import { Component, HostListener, signal } from '@angular/core';
import { HeaderWidget2 } from './widgets/headerwidget2';
import { ProductService } from '@/pages/service/product.service';
import { caParStatutWidget } from './widgets/caparstatutwidget';
import { EncaissementWidget } from './widgets/encaissementwidget';
import { VehiculewWidget } from './widgets/vehiculewidget';
import { BarWidget } from './widgets/barWidget';
import { DoughnutWidget } from './widgets/doughnut';
import { VentesEncaissementsPeriod } from '@/services/dashboard/dashboard.service';
import { FinanceMobile } from './finance-mobile';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [HeaderWidget2, caParStatutWidget, EncaissementWidget, VehiculewWidget, BarWidget, DoughnutWidget, FinanceMobile],
  templateUrl: './finance.html',
  styleUrl: './finance.scss',
  providers: [ProductService],
})
export class Finance {
  readonly isMobile = signal(this.getIsMobileViewport());

  encaissementPeriod: VentesEncaissementsPeriod = 'this_month';

  constructor() {}

  onEncaissementPeriodChange(period: VentesEncaissementsPeriod): void {
    this.encaissementPeriod = period;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile.set(this.getIsMobileViewport());
  }

  private getIsMobileViewport(): boolean {
    return typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  }
}
