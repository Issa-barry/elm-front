import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';

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

    ngOnInit() {
        this.model = [
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
                        items: [
                            {
                                label: 'Salaire packing',
                                icon: 'pi pi-fw pi-money-bill',
                                routerLink: ['/comptabilite/comptabilite-packing-liste'],
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
                    },
                    {
                        label: 'Contacts',
                        icon: 'pi pi-fw pi-address-book',
                        items: [
                            
                            {
                                label: 'Prestateurs-externes',
                                icon: 'pi pi-fw pi-briefcase',
                                routerLink: ['contacts/prestateurs'],
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
                    },
                ],
            },
            {
                label: 'Administration',
                icon: 'pi pi-cog',
                items: [
                    {
                        label: 'Rôles & Permissions',
                        icon: 'pi pi-fw pi-shield',
                        routerLink: ['/roles'],
                    },
                ],
            },
        ];
    }
}
