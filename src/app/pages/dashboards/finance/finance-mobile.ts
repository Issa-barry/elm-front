import {
    AfterViewInit,
    Component,
    DestroyRef,
    ElementRef,
    OnDestroy,
    ViewChild,
    effect,
    inject,
    signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SkeletonModule } from 'primeng/skeleton';
import { DashboardService, EncaissementStat } from '@/services/dashboard/dashboard.service';
import { DashboardPeriodService } from '@/services/dashboard/dashboard-period.service';
import { HeaderWidget2 } from './widgets/headerwidget2';
import { MoneyPipe } from '@/pipes/money.pipe';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-finance-mobile',
    standalone: true,
    imports: [CommonModule, SkeletonModule, HeaderWidget2, MoneyPipe],
    templateUrl: './finance-mobile.html',
    styleUrl: './finance-mobile.scss',
})
export class FinanceMobile implements AfterViewInit, OnDestroy {
    @ViewChild('slider', { static: false }) sliderRef?: ElementRef<HTMLElement>;

    private readonly dashboardService = inject(DashboardService);
    private readonly periodService = inject(DashboardPeriodService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly router = inject(Router);

    stat = signal<EncaissementStat | null>(null);
    loading = signal(false);
    errorMessage = signal<string | null>(null);

    readonly slideCount = 3;
    readonly slidesArray = Array.from({ length: this.slideCount }, (_, i) => i);
    activeSlide = signal(0);

    readonly moduleShortcuts = [
        { label: 'Dashboard',     icon: 'pi pi-th-large',      route: '/dashboard'              },
        { label: 'Accueil',       icon: 'pi pi-home',          route: '/dashboard-finance'      },
        { label: 'Produits',      icon: 'pi pi-box',           route: '/produits'               },
        { label: 'Packing',       icon: 'pi pi-inbox',         route: '/packings'               },
        { label: 'Prestataires',  icon: 'pi pi-users',         route: '/contacts/prestataires'  },
        { label: 'Utilisateurs',  icon: 'pi pi-user',          route: '/contacts/utilisateurs'  },
    ] as const;

    private observer?: IntersectionObserver;

    constructor() {
        effect(() => {
            const period = this.periodService.period();
            const days = this.periodService.customDays();
            this.loadStat(period, days);
        });
    }

    ngAfterViewInit(): void {
        this.initSlideObserver();
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    goToModule(route: string): void {
        this.router.navigateByUrl(route);
    }

    loadStat(
        period = this.periodService.period(),
        days = this.periodService.customDays()
    ): void {
        this.loading.set(true);
        this.errorMessage.set(null);

        this.dashboardService
            .getVentesEncaissements(period, days)
            .pipe(
                finalize(() => this.loading.set(false)),
                takeUntilDestroyed(this.destroyRef)
            )
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
