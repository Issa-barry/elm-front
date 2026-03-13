import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'pricing-widget',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    template: `
        <section class="flex flex-col lg:flex-row bg-surface-0 dark:bg-surface-950">
            <div class="w-full lg:w-1/2 flex flex-col justify-center gap-8 p-8 md:p-12 lg:p-20">
                <h1 class="text-4xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Eau la maman, eau minerale guineenne</h1>

                <div class="flex flex-col gap-6">
                    @for (feature of features; track feature) {
                        <div class="flex items-center gap-4">
                            <i class="pi pi-check-square text-xl! leading-none! text-surface-900 dark:text-surface-0"></i>
                            <p class="text-lg text-surface-600 dark:text-surface-400 leading-normal">{{ feature }}</p>
                        </div>
                    }
                </div>

                <button pButton severity="contrast" class="w-fit">
                    <span pButtonLabel>En savoir plus</span>
                </button>
            </div>

            <div class="w-full lg:w-1/2 p-8">
                <div class="h-176 rounded-2xl flex items-end p-8 bg-cover! bg-top!" [ngStyle]="{ backgroundImage: 'url(' + testimonials[currentIndex()].image + ')' }">
                </div>
            </div>
        </section>

        <section class="flex flex-col lg:flex-row mt-4 bg-surface-0 dark:bg-surface-950">
            <div class="w-full lg:w-1/2 p-8">
                <div class="h-176 rounded-2xl flex items-end p-8 bg-cover! bg-top!" [ngStyle]="{ backgroundImage: 'url(' + testimonials[1].image + ')' }">
                </div>
            </div>
            <div class="w-full lg:w-1/2 flex flex-col justify-center gap-8 p-8 md:p-12 lg:p-20">
                <h1 class="text-4xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Depuis fevrier 2026 : format bouteille</h1>

                <div class="flex flex-col gap-6">
                    @for (feature of newFeatures; track feature) {
                        <div class="flex items-center gap-4">
                            <i class="pi pi-check-square text-xl! leading-none! text-surface-900 dark:text-surface-0"></i>
                            <p class="text-lg text-surface-600 dark:text-surface-400 leading-normal">{{ feature }}</p>
                        </div>
                    }
                </div>

                <button pButton severity="contrast" class="w-fit">
                    <span pButtonLabel>Decouvrir la gamme</span>
                </button>
            </div>

        </section>
    `,
})
export class PricingWidget {
    features = [
        'Societe guineenne engagee pour une eau minerale accessible au quotidien.',
        "Production d'abord en sachet pour repondre aux besoins des familles et des commerces.",
        "Controle d'hygiene et de qualite applique a chaque etape de conditionnement."
    ];

    newFeatures = [
        "Depuis fevrier 2026, Eau la maman propose aussi l'eau minerale en bouteilles.",
        'Des formats pratiques pour les menages, les deplacements et les points de vente.',
        'La meme exigence de purete, de securite sanitaire et de regularite de service.'
    ];

    testimonials = [
        {
            image: '/demo/images/product/unnamed1.jpg',
            quote: "Eau la maman valorise une production locale et une distribution de proximite.",
            name: 'Eau la maman',
            title: 'Societe guineenne'
        },
        {
            image: '/demo/images/product/unnamed4.jpg',
            quote: "Le lancement des bouteilles en fevrier 2026 renforce l'offre sur tous les usages.",
            name: 'Lancement 2026',
            title: 'Nouveau format bouteille'
        },
        {
            image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/testimonial/testimonials-8.jpg',
            quote: "Objectif : garantir une eau minerale fiable, disponible et de qualite constante.",
            name: 'Qualite continue',
            title: 'Engagement client'
        }
    ];

    currentIndex = signal(0);

    nextTestimonial = () => {
        this.currentIndex.set((this.currentIndex() + 1) % this.testimonials.length);
    };

    prevTestimonial = () => {
        this.currentIndex.set((this.currentIndex() - 1 + this.testimonials.length) % this.testimonials.length);
    };
}
