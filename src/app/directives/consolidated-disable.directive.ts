import { Directive, HostBinding, inject } from '@angular/core';
import { UsineContextService } from '@/services/usine/usine-context.service';

/**
 * Applique [disabled] + opacité réduite sur un bouton d'action (natif ou pButton)
 * lorsque l'utilisateur est en vue consolidée "Toutes les usines".
 *
 * Usage :  <button appConsolidatedDisable ...>Nouveau</button>
 */
@Directive({
    standalone: true,
    selector: '[appConsolidatedDisable]',
})
export class ConsolidatedDisableDirective {
    private ctx = inject(UsineContextService);

    @HostBinding('disabled')
    get disabled(): boolean {
        return this.ctx.isConsolidated();
    }

    @HostBinding('class.opacity-40')
    get dimmed(): boolean {
        return this.ctx.isConsolidated();
    }

    @HostBinding('class.pointer-events-none')
    get noPointer(): boolean {
        return this.ctx.isConsolidated();
    }
}
