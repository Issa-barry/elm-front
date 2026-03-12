import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { LayoutService } from '@/layout/service/layout.service';
import { AppConfigurator } from '@/layout/components/app.configurator';
import { TopbarWidget } from '../components/topbarwidget.component';
import { Home } from '../components/home/home';
import { AppsWidget } from '../components/appswidget';
import { PricingWidget } from '../components/pricingwidget';
import { FeaturesWidget } from '../components/featureswidget';
import { FooterWidget } from '../components/footerwidget';
import { Topbar2Widget } from '../components/topbarwidget.component2';
import { Section1 } from '../components/section1/section1';
import { ProduitWidget } from '../components/produit';
 

@Component({
  selector: 'app-landing2',
  standalone: true,
    imports: [
        RouterModule,
        ButtonModule,
        AppConfigurator,
        TopbarWidget,
        Home,
        AppsWidget,
        PricingWidget,
        FeaturesWidget,
        FooterWidget,
        Topbar2Widget,
        Section1,
        ProduitWidget
    ],
  templateUrl: './landing2.html',
  styleUrl: './landing2.scss',
  styles: [
        `
            .bg-circle {
                width: 1000px;
                height: 1000px;
                border-radius: 50%;
                background-image: linear-gradient(
                    140deg,
                    var(--primary-color),
                    var(--surface-ground) 80%
                );
                position: absolute;
                opacity: 0.25;
                z-index: -1;
            }
        `,
    ],
})
export class Landing2 {
    subscription: Subscription;

    darkMode: boolean = false;

    constructor(
        public router: Router,
        private layoutService: LayoutService,
    ) {
        this.subscription = this.layoutService.configUpdate$.subscribe(
            (config) => {
                this.darkMode =
                    config.colorScheme === 'dark' ||
                    config.colorScheme === 'dim'
                        ? true
                        : false;
            },
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
