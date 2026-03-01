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
                items: [],
            },
            {
                label: 'Modules',
                icon: 'pi pi-th-large',
                items: [
                    // Ventes
                    // {
                    //     label: 'Ventes',
                    //     icon: 'pi pi-fw pi-shopping-cart',
                    //     routerLink: ['/ventes/commandes'],
                    //     visible: this.hasAnyPermission(permissions, ['commandes.read']),
                    // },

                    // Comptabilite
                    // {
                    //     label: 'Comptabilite',
                    //     icon: 'pi pi-fw pi-calculator',
                    //     visible: this.hasAnyPermission(permissions, [
                    //         'commissions.read',
                    //         'commandes.read',
                    //         'facture-packings.read',
                    //         'facture-packing.read',
                    //         'facture_packings.read',
                    //         'facture_packing.read',
                    //         'facturepackings.read',
                    //         'facturepacking.read',
                    //         'factures-livraisons.read',
                    //         'encaissements.read',
                    //     ]),
                    //     items: [
                    //     //     {
                    //     //         label: 'Commissions',
                    //     //         icon: 'pi pi-fw pi-percentage',
                    //     //         routerLink: ['/ventes/commissions'],
                    //     //         visible: this.hasAnyPermission(permissions, ['commissions.read', 'commandes.read']),
                    //     //     },
                    //     //     {
                    //     //         label: 'Commissions 2',
                    //     //         icon: 'pi pi-fw pi-percentage',
                    //     //         routerLink: ['/ventes/commissions2'],
                    //     //         visible: this.hasAnyPermission(permissions, ['commissions.read', 'commandes.read']),
                    //     //     },
                    //     //     {
                    //     //         label: 'Factures vente',
                    //     //         icon: 'pi pi-fw pi-receipt',
                    //     //         routerLink: ['/ventes/factures'],
                    //     //         visible: this.hasAnyPermission(permissions, ['factures-livraisons.read', 'encaissements.read']),
                    //     //     },
                    //     //     {
                    //     //         label: 'Factures vente liste 2',
                    //     //         icon: 'pi pi-fw pi-receipt',
                    //     //         routerLink: ['/ventes/factures-vente-liste2'],
                    //     //         visible: this.hasAnyPermission(permissions, ['factures-livraisons.read', 'encaissements.read']),
                    //     //     },
                    //         {
                    //             label: 'Facture packing',
                    //             icon: 'pi pi-fw pi-box',
                    //             routerLink: ['/comptabilite/comptabilite-packing-liste'],
                    //             visible: this.hasAnyPermission(permissions, [
                    //                 'facture-packings.read',
                    //                 'facture-packing.read',
                    //                 'facture_packings.read',
                    //                 'facture_packing.read',
                    //                 'facturepackings.read',
                    //                 'facturepacking.read',
                    //             ]),
                    //         },
                    //     ],
                    // },

                    // Packing
                    {
                        label: 'Packing',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/packings'],
                        visible: this.hasAnyPermission(permissions, [
                            'packings.read',
                            'packing.read',
                        ]),
                    },

                    // Vehicules
                    // {
                    //     label: 'Vehicules',
                    //     icon: 'pi pi-fw pi-car',
                    //     visible: true,
                    //     items: [
                    //         // {
                    //         //     label: 'Liste des vehicules',
                    //         //     icon: 'pi pi-fw pi-list',
                    //         //     routerLink: ['/vehicules'],
                    //         // },
                    //         {
                    //             label: 'Liste des vehicules ',
                    //             icon: 'pi pi-fw pi-list',
                    //             routerLink: ['/vehicules/vehicules-liste2'],
                    //         },
                    //         {
                    //             label: 'Proprietaires',
                    //             icon: 'pi pi-fw pi-user',
                    //             routerLink: ['/vehicules/proprietaires'],
                    //         },
                    //         {
                    //             label: 'Livreurs',
                    //             icon: 'pi pi-fw pi-truck',
                    //             routerLink: ['/vehicules/livreurs'],
                    //         },
                    //     ],
                    // },

                    // Contacts
                    {
                        label: 'Contacts',
                        icon: 'pi pi-fw pi-address-book',
                        visible: this.hasAnyPermission(permissions, [
                            'prestataires.read',
                            'prestataire.read',
                        ]),
                        items: [
                            {
                                label: 'Prestataires externes',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['contacts/prestataires'],
                                visible: this.hasAnyPermission(permissions, [
                                    'prestataires.read',
                                    'prestataire.read',
                                ]),
                            },
                            {
                                label: 'Utilisateurs',
                                icon: 'pi pi-fw pi-user',
                                routerLink: ['contacts/utilisateurs'],
                                visible: this.hasAnyPermission(permissions, [
                                    'users.read',
                                    'user.read',
                                    'utilisateurs.read',
                                    'utilisateur.read',
                                ]),
                            },
                        ],
                    },

                    // Produits
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
                
            }, //fin module
            // {
            //     label: 'Autres',
            //     icon: 'pi pi-fw pi-download',
            //     items: [
            //         {
            //             label: 'Aide',
            //             icon: 'pi pi-fw pi-question-circle',
            //             routerLink: ['/pages/help'],
            //         },
            //         {
            //             label: 'Parametres',
            //             icon: 'pi pi-fw pi-cog',
            //             routerLink: ['/parametres'],
            //         },
            //     ],
            // }, //fin module
        ];
    }

    private hasAnyPermission(userPermissions: unknown[] | undefined, required: string[]): boolean {
        if (!userPermissions || userPermissions.length === 0) {
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
