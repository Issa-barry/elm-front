import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Parametre } from '@/models/parametres.model';
import { ParametresService } from '@/services/parametres/parametres.service';

@Component({
    selector: 'app-parametres-notifications',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, InputNumberModule, ToggleSwitchModule],
    templateUrl: './parametres-notifications.html',
    styleUrl: './parametres-notifications.scss',
})
export class ParametresNotifications implements OnInit {
    loading = false;
    saving  = false;

    // Valeurs liées aux champs
    stockActives  = false;
    cooldownMins  = 60;

    // Références aux paramètres (pour récupérer l'id au moment du PUT)
    protected stockActivesParam?: Parametre;
    protected cooldownParam?: Parametre;

    constructor(
        private parametresService: ParametresService,
        private messageService: MessageService,
    ) {}

    ngOnInit(): void {
        this.load();
    }

    // ── Chargement ────────────────────────────────────────

    load(): void {
        this.loading = true;
        this.parametresService.getParametres('general').subscribe({
            next: (response) => {
                const params = response.data.parametres ?? [];

                this.stockActivesParam = params.find(p => p.cle === 'notifications_stock_actives');
                this.cooldownParam     = params.find(p => p.cle === 'notifications_stock_cooldown_minutes');

                this.stockActives = !!this.stockActivesParam?.valeur;
                this.cooldownMins = Number(this.cooldownParam?.valeur ?? 60) || 60;

                this.loading = false;
            },
            error: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreur',
                    detail: 'Impossible de charger les paramètres de notification.',
                    life: 4000,
                });
                this.loading = false;
            },
        });
    }

    // ── Sauvegarde ────────────────────────────────────────

    save(): void {
        if (!this.stockActivesParam || !this.cooldownParam) {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreur',
                detail: 'Paramètres introuvables. Rechargez la page.',
                life: 4000,
            });
            return;
        }

        if (this.cooldownMins < 0) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Validation',
                detail: 'Le délai entre notifications ne peut pas être négatif.',
                life: 4000,
            });
            return;
        }

        this.saving = true;

        forkJoin([
            this.parametresService.updateParametre(
                this.stockActivesParam.id,
                { valeur: this.stockActives }
            ).pipe(catchError(() => of(null))),

            this.parametresService.updateParametre(
                this.cooldownParam.id,
                { valeur: Math.floor(this.cooldownMins) }
            ).pipe(catchError(() => of(null))),
        ]).subscribe({
            next: (results) => {
                const hasError = results.some(r => r === null);
                if (hasError) {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreur',
                        detail: 'Une ou plusieurs mises à jour ont échoué.',
                        life: 4000,
                    });
                } else {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Paramètres de notification enregistrés.',
                        life: 3000,
                    });
                }
                this.saving = false;
            },
            error: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreur',
                    detail: 'Erreur lors de la sauvegarde.',
                    life: 4000,
                });
                this.saving = false;
            },
        });
    }
}
