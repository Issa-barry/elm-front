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
            label: 'Dashboard',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['/dashboard'],
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
      {
        label: 'Modules',
        icon: 'pi pi-th-large',
        items: [
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
        ],
      },
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
