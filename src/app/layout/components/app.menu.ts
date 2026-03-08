import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';
import { AuthService } from '@/services/auth/auth.service';

type MenuItem = {
  label: string;
  icon?: string;
  routerLink?: string[];
  items?: MenuItem[];
  visible?: boolean;
};

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `<ul class="layout-menu">
    <ng-container *ngFor="let item of model; let i = index">
      <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
      <li *ngIf="item.separator" class="menu-separator"></li>
    </ng-container>
  </ul>`,
})
export class AppMenu {
  model: any[] = [];
  private readonly authService = inject(AuthService);

  constructor() {
    effect(() => {
      this.authService.currentUser();
      this.model = this.buildMenuModel();
    });
  }

  private buildMenuModel(): MenuItem[] {
    return [
      {
        label: 'Dashboards',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Stats-Ventes ',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['/dashboard-finance'],
          },
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['/dashboard'],
          },
          
        ],
      },
// // Comptabilite
                    {
                        label: 'Comptabilite',
                        icon: 'pi pi-fw pi-calculator',
                        visible: this.authService.hasAnyPermission([
                            'commissions.read',
                            'commandes.read',
                            'facture-packings.read',
                            'facture-packing.read',
                            'facture_packings.read',
                            'facture_packing.read',
                            'facturepackings.read',
                            'facturepacking.read',
                            'factures-livraisons.read',
                            'encaissements.read',
                        ]),
                        items: [
                            {
                                label: 'Commissions',
                                icon: 'pi pi-fw pi-percentage',
                                routerLink: ['/ventes/commissions'],
                                visible: this.authService.hasAnyPermission(['commissions.read', 'commandes.read']),
                            },
                            // {
                            //     label: 'Commissions 2',
                            //     icon: 'pi pi-fw pi-percentage',
                            //     routerLink: ['/ventes/commissions2'],
                            //     visible: this.authService.hasAnyPermission(['commissions.read', 'commandes.read']),
                            // },
                            {
                                label: 'Factures vente',
                                icon: 'pi pi-fw pi-receipt',
                                routerLink: ['/ventes/factures'],
                                visible: this.authService.hasAnyPermission(['factures-livraisons.read', 'encaissements.read']),
                            },
                            // {
                            //     label: 'Factures vente liste 2',
                            //     icon: 'pi pi-fw pi-receipt',
                            //     routerLink: ['/ventes/factures-vente-liste2'],
                            //     visible: this.authService.hasAnyPermission(['factures-livraisons.read', 'encaissements.read']),
                            // },
                            // {
                            //     label: 'Factures vente detail 2',
                            //     icon: 'pi pi-fw pi-receipt',
                            //     routerLink: ['/ventes/factures-vente-detail2/1'],
                            //     visible: this.authService.hasAnyPermission(['factures-livraisons.read', 'encaissements.read']),
                            // },

                            // {
                            //     label: 'Factures vente detail 4',
                            //     icon: 'pi pi-fw pi-receipt',
                            //     routerLink: ['/ventes/factures-vente-detail4/1'],
                            //     visible: this.authService.hasAnyPermission(['factures-livraisons.read', 'encaissements.read']),
                            // },
                            // {
                            //     label: 'Command vente detail 2',
                            //     icon: 'pi pi-fw pi-receipt',
                            //     routerLink: ['/ventes/commandes/commande-vente-detail2/1'],
                            //     visible: this.authService.hasAnyPermission(['factures-livraisons.read', 'encaissements.read']),
                            // },
                            // {
                            //     label: 'Facture packing',
                            //     icon: 'pi pi-fw pi-box',
                            //     routerLink: ['/comptabilite/comptabilite-packing-liste'],
                            //     visible: this.authService.hasAnyPermission([
                            //         'facture-packings.read',
                            //         'facture-packing.read',
                            //         'facture_packings.read',
                            //         'facture_packing.read',
                            //         'facturepackings.read',
                            //         'facturepacking.read',
                            //     ]),
                            // },
                        ],
                    },

      {
        label: 'Modules',
        icon: 'pi pi-th-large',
        items: [
             // Ventes
                    {
                        label: 'Ventes',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['/ventes/commandes'],
                        visible: this.authService.hasAnyPermission(['commandes.read', 'commande.read']),
                    },

          {
            label: 'Packing',
            icon: 'pi pi-fw pi-box',
            routerLink: ['/packings'],
            visible: this.authService.hasAnyPermission(['packings.read', 'packing.read']),
          },
          {
            label: 'Contacts',
            icon: 'pi pi-fw pi-address-book',
            visible: this.authService.hasAnyPermission(['prestataires.read', 'prestataire.read', 'users.read', 'user.read']),
            items: [
              {
                label: 'Prestataires externes',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/contacts/prestataires'],
                visible: this.authService.hasAnyPermission(['prestataires.read', 'prestataire.read']),
              },
              {
                label: 'Utilisateurs',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/contacts/utilisateurs'],
                visible: this.authService.hasAnyPermission(['users.read', 'user.read', 'utilisateurs.read', 'utilisateur.read']),
              },
            ],
          },
          {
            label: 'Produits',
            icon: 'pi pi-fw pi-barcode',
            routerLink: ['/produits'],
            visible: this.authService.hasAnyPermission(['produits.read', 'produit.read', 'products.read', 'product.read']),
          },
          // Vehicules
          {
            label: 'Vehicules',
            icon: 'pi pi-fw pi-car',
            visible: true,
            items: [
              // {
              //     label: 'Liste des vehicules',
              //     icon: 'pi pi-fw pi-list',
              //     routerLink: ['/vehicules'],
              // },
              {
                label: 'Liste des vehicules ',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/vehicules/vehicules-liste2'],
              },
              {
                label: 'Proprietaires',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/vehicules/proprietaires'],
              },
              {
                label: 'Livreurs',
                icon: 'pi pi-fw pi-truck',
                routerLink: ['/vehicules/livreurs'],
              },
            ],
          },
           
        ],
      },
      // {
      //   label: 'Administration',
      //   icon: 'pi pi-shield',
      //   items: [
      //     {
      //       label: 'Organisations',
      //       icon: 'pi pi-fw pi-building',
      //       routerLink: ['/organisations'],
      //       visible: this.authService.hasAnyRole(['super_admin', 'super-admin']),
      //     },
      //     {
      //       label: 'Forfaits',
      //       icon: 'pi pi-fw pi-tag',
      //       routerLink: ['/forfaits'],
      //       visible: this.authService.hasAnyRole(['super_admin', 'super-admin']),
      //     },
      //     {
      //       label: 'Facturation',
      //       icon: 'pi pi-fw pi-receipt',
      //       routerLink: ['/billing'],
      //       visible: this.authService.hasAnyRole(['super_admin', 'super-admin']),
      //     },
      //     {
      //       label: 'Sites',
      //       icon: 'pi pi-fw pi-map-marker',
      //       routerLink: ['/sites'],
      //       visible: this.authService.hasAnyPermission(['sites.read']),
      //     },
      //     {
      //       label: 'Parametres',
      //       icon: 'pi pi-fw pi-cog',
      //       routerLink: ['/parametres'],
      //     },
      //   ],
      // },
      // {
      //   label: 'Compte',
      //   icon: 'pi pi-user',
      //   items: [
      //     {
      //       label: 'Mon profil',
      //       icon: 'pi pi-fw pi-id-card',
      //       routerLink: ['/profile'],
      //     },
      //   ],
      // },
    ];
  }
}
