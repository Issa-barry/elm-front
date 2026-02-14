import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';
import { AuthService } from '@/services/auth/auth.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li
                app-menuitem
                *ngIf="!item.separator"
                [item]="item"
                [index]="i"
                [root]="true"
            ></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `,
})
export class AppMenu {
    model: any[] = [];
    private authService = inject(AuthService);

    constructor() {
        effect(() => {
            const permissions = this.authService.currentUser()?.permissions ?? [];
            this.model = this.buildMenuModel(permissions);
        });
    }

    private buildMenuModel(permissions: string[]) {
        return [
            {
                // label: 'Statistiques',
                // icon: 'pi pi-home',
                items: [
                    // {
                    //     label: 'E-Commerce',
                    //     icon: 'pi pi-fw pi-home',
                    //     routerLink: ['/'],
                    // },
                    // {
                    //     label: 'Banking',
                    //     icon: 'pi pi-fw pi-image',
                    //     routerLink: ['/dashboard-banking'],
                    // },
                    // {
                    //     label: 'Stock',
                    //     icon: 'pi pi-fw pi-image',
                    //     routerLink: ['/dashboard-banking'],
                    // },
                ],
            },
            {
                label: 'Modules',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Comptabilité',
                        icon: 'pi pi-fw pi-calculator',
                        visible: this.hasAnyPermission(permissions, [
                            'facture-packings.read',
                            'facture-packing.read',
                            'facture_packings.read',
                            'facture_packing.read',
                            'facturepackings.read',
                            'facturepacking.read',
                        ]),
                        items: [
                            {
                                label: 'Facture packing',
                                icon: 'pi pi-fw pi-money-bill',
                                routerLink: ['/comptabilite/comptabilite-packing-liste'],
                                visible: this.hasAnyPermission(permissions, [
                                    'facture-packings.read',
                                    'facture-packing.read',
                                    'facture_packings.read',
                                    'facture_packing.read',
                                    'facturepackings.read',
                                    'facturepacking.read',
                                ]),
                            },
                            // {
                            //     label: 'Sailaire véhicule',
                            //     icon: 'pi pi-fw pi-list',
                            //     routerLink: ['/apps/blog/detail'],
                            // },
                            // {
                            //     label: 'Salaire employé',
                            //     icon: 'pi pi-fw pi-pencil',
                            //     routerLink: ['/apps/blog/edit'],
                            // },
                        ],
                    },

                    // {
                    //     label: 'Ventes',
                    //     icon: 'pi pi-fw pi-comments',
                    //     routerLink: ['/apps/chat'],
                    // },
                    // {
                    //     label: 'Achats',
                    //     icon: 'pi pi-fw pi-folder',
                    //     routerLink: ['/apps/files'],
                    // },
                     {
                        label: 'Packing',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/packings'],
                        visible: this.hasAnyPermission(permissions, [
                            'packings.read',
                            'packing.read',
                        ]),
                    },
                    {
                        label: 'Contacts',
                        icon: 'pi pi-fw pi-address-book',
                        visible: this.hasAnyPermission(permissions, [
                            'prestataires.read',
                            'prestataire.read',
                            'prestateurs.read',
                            'prestateur.read',
                        ]),
                        items: [
                            
                            {
                                label: 'Prestateurs-externes',
                                icon: 'pi pi-fw pi-briefcase',
                                routerLink: ['contacts/prestateurs'],
                                visible: this.hasAnyPermission(permissions, [
                                    'prestataires.read',
                                    'prestataire.read',
                                    'prestateurs.read',
                                    'prestateur.read',
                                ]),
                            },
                            // {
                            //     label: 'Fournisseurs',
                            //     icon: 'pi pi-fw pi-users',
                            //     routerLink: ['profile/list'],
                            // },
                            //  {
                            //     label: 'Véhicules',
                            //     icon: 'pi pi-fw pi-truck',
                            //     routerLink: ['/apps/mail/inbox'],
                            // },
                            // {
                            //     label: 'Employés',
                            //     icon: 'pi pi-fw pi-user',
                            //     routerLink: ['/apps/mail/detail/1000'],
                            // },
                        ],
                    },
                    {
                        label: 'Produits',
                        icon: 'pi pi-fw pi-barcode',
                        routerLink: ['/produits'],
                        visible: this.hasAnyPermission(permissions, [
                            'produits.read',
                            'produit.read',
                            'products.read',
                            'product.read',
                        ]),
                    },
                ],
            },
        ];
    }

    private hasAnyPermission(userPermissions: unknown[] | undefined, required: string[]): boolean {
        if (!userPermissions || userPermissions.length === 0) {
            // Mode strict pour le menu: sans permission explicite, on masque l'entrée.
            return false;
        }

        const normalized = new Set(
            userPermissions
                .map((permission) => {
                    if (typeof permission === 'string') {
                        return permission.trim().toLowerCase();
                    }

                    if (
                        permission &&
                        typeof permission === 'object' &&
                        'name' in permission &&
                        typeof (permission as { name?: string }).name === 'string'
                    ) {
                        return (permission as { name: string }).name.trim().toLowerCase();
                    }

                    return '';
                })
                .filter((permission) => permission.length > 0)
        );
        return required.some((permission) => normalized.has(permission.toLowerCase()));
    }
}


