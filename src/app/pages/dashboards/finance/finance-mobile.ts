import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
    inject,
    signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import {
    DashboardService,
    EncaissementStat,
    VentesEncaissementsPeriod,
} from '@/services/dashboard/dashboard.service';
import { HeaderWidget2 } from './widgets/headerwidget2';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-finance-mobile',
    standalone: true,
    imports: [CommonModule, SkeletonModule, HeaderWidget2],
    templateUrl: './finance-mobile.html',
    styleUrl: './finance-mobile.scss',
})
export class FinanceMobile implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    @Input() period: VentesEncaissementsPeriod = 'this_month';
    @Output() periodChange = new EventEmitter<VentesEncaissementsPeriod>();

    @ViewChild('slider', { static: false }) sliderRef?: ElementRef<HTMLElement>;

    private readonly dashboardService = inject(DashboardService);
    private readonly router = inject(Router);

    // Données encaissement chargées ici — pas via EncaissementWidget
    stat = signal<EncaissementStat | null>(null);
    loading = signal(false);
    errorMessage = signal<string | null>(null);

    // 3 slides : total / payees / reste
    readonly slideCount = 3;
    readonly slidesArray = Array.from({ length: this.slideCount }, (_, i) => i);
    activeSlide = signal(0);

    readonly moduleShortcuts = [
        { label: 'Dashboard',     icon: 'pi pi-home',          route: '/dashboard'              },
        { label: 'Stats-Ventes',  icon: 'pi pi-chart-bar',     route: '/dashboard-finance'      },
        { label: 'Commissions',   icon: 'pi pi-percentage',    route: '/ventes/commissions'     },
        { label: 'Ventes',        icon: 'pi pi-shopping-cart', route: '/ventes/commandes'       },
        { label: 'Produits',      icon: 'pi pi-box',           route: '/produits'               },
        { label: 'Packing',       icon: 'pi pi-inbox',         route: '/packings'               },
        { label: 'Prestataires',  icon: 'pi pi-users',         route: '/contacts/prestataires'  },
        { label: 'Utilisateurs',  icon: 'pi pi-user',          route: '/contacts/utilisateurs'  },
        { label: 'Vehicules',     icon: 'pi pi-car',           route: '/vehicules'              },
    ] as const;

    private observer?: IntersectionObserver;

    ngOnInit(): void {
        this.loadStat();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['period'] && !changes['period'].firstChange) {
            this.loadStat();
        }
    }

    ngAfterViewInit(): void {
        this.initSlideObserver();
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    onPeriodChange(p: VentesEncaissementsPeriod): void {
        this.periodChange.emit(p);
    }

    goToModule(route: string): void {
        this.router.navigateByUrl(route);
    }

    loadStat(): void {
        this.loading.set(true);
        this.errorMessage.set(null);

        this.dashboardService
            .getVentesEncaissements(this.period)
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe({
                next: (data) => this.stat.set(data ?? null),
                error: () => {
                    this.stat.set(null);
                    this.errorMessage.set('Erreur de chargement');
                },
            });
    }

    private initSlideObserver(): void {
        const slider = this.sliderRef?.nativeElement;
        if (!slider) return;

        const slides = slider.querySelectorAll<HTMLElement>('.fm-slide');
        if (!slides.length) return;

        this.observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        const idx = Array.from(slides).indexOf(entry.target as HTMLElement);
                        if (idx !== -1) this.activeSlide.set(idx);
                    }
                }
            },
            { root: slider, threshold: 0.5 },
        );

        slides.forEach((s) => this.observer!.observe(s));
    }
}
