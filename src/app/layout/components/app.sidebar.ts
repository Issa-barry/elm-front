import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppMenu } from './app.menu';
import { LayoutService } from '@/layout/service/layout.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: '[app-sidebar]',
    standalone: true,
    imports: [AppMenu, RouterModule],
    template: ` <div
        class="layout-sidebar"
        (mouseenter)="onMouseEnter()"
        (mouseleave)="onMouseLeave()"
    >
        <div class="sidebar-header">
            <a [routerLink]="['/']" class="app-logo">
                <!-- Version normale (complète) -->
<svg viewBox="0 0 125 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-logo-normal" role="img" aria-label="FELLO">
  <title>FELLO</title>

  <!-- Symbole A -->
  <path d="M7.99963 25.0003L6.48368 21L4.99963 24.9997L7.99963 25.0003Z" fill="var(--logo-color)"/>
  <path d="M15.8667 21L18 25H14L15.8667 21Z" fill="var(--logo-color)"/>
  <path d="M11.4851 2L1 24.9465H4.53702L11.4856 10.0784L18.2944 24.9465H21.9715L11.4851 2Z" fill="var(--logo-color)"/>

  <!-- Texte FELLO -->
  <path d="M27.598 21V6.45455H36.6179V8.34375H29.7926V12.7756H35.9716V14.6577H29.7926V21H27.598Z" fill="var(--logo-color)"/>
  <path d="M40.3168 21V6.45455H49.4361V8.34375H42.5114V12.7756H48.9602V14.6577H42.5114V19.1108H49.5213V21H40.3168Z" fill="var(--logo-color)"/>
  <path d="M54.3675 21V6.45455H56.5621V19.1108H63.1531V21H54.3675Z" fill="var(--logo-color)"/>
  <path d="M68.6566 21V6.45455H70.8512V19.1108H77.4421V21H68.6566Z" fill="var(--logo-color)"/>

  <!-- O (décalé à droite pour créer l'espace entre L et O) -->
  <path
    transform="translate(4 0)"
    d="M82.0142 13.7273C82.0142 15.2803 81.7301 16.6155 81.1619 17.733C80.5938 18.8456 79.8149 19.7027 78.8253 20.304C77.8404 20.9006 76.7206 21.1989 75.4659 21.1989C74.2064 21.1989 73.0819 20.9006 72.0923 20.304C71.1075 19.7027 70.331 18.8433 69.7628 17.7259C69.1946 16.6084 68.9105 15.2756 68.9105 13.7273C68.9105 12.1742 69.1946 10.8414 69.7628 9.72869C70.331 8.61127 71.1075 7.75426 72.0923 7.15767C73.0819 6.55634 74.2064 6.25568 75.4659 6.25568C76.7206 6.25568 77.8404 6.55634 78.8253 7.15767C79.8149 7.75426 80.5938 8.61127 81.1619 9.72869C81.7301 10.8414 82.0142 12.1742 82.0142 13.7273ZM79.8409 13.7273C79.8409 12.5436 79.6491 11.5469 79.2656 10.7372C78.8868 9.92282 78.366 9.30729 77.7031 8.89062C77.045 8.46922 76.2992 8.25852 75.4659 8.25852C74.6278 8.25852 73.8797 8.46922 73.2216 8.89062C72.5634 9.30729 72.0426 9.92282 71.6591 10.7372C71.2803 11.5469 71.0909 12.5436 71.0909 13.7273C71.0909 14.911 71.2803 15.91 71.6591 16.7244C72.0426 17.5341 72.5634 18.1496 73.2216 18.571C73.8797 18.9877 74.6278 19.196 75.4659 19.196C76.2992 19.196 77.045 18.9877 77.7031 18.571C78.366 18.1496 78.8868 17.5341 79.2656 16.7244C79.6491 15.91 79.8409 14.911 79.8409 13.7273Z"
    fill="var(--logo-color)"
  />
</svg>

<!-- Version petite (symbole uniquement) -->
<svg viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-logo-small" role="img" aria-label="FELLO">
  <title>FELLO</title>

  <path d="M7.99963 25.0003L6.48368 21L4.99963 24.9997L7.99963 25.0003Z" fill="var(--logo-color)"/>
  <path d="M15.8667 21L18 25H14L15.8667 21Z" fill="var(--logo-color)"/>
  <path d="M11.4851 2L1 24.9465H4.53702L11.4856 10.0784L18.2944 24.9465H21.9715L11.4851 2Z" fill="var(--logo-color)"/>
</svg>

            </a>
            <button
                class="layout-sidebar-anchor p-link z-2 hover:cursor-pointer"
                type="button"
                (click)="anchor()"
            ></button>
        </div>

        <div #menuContainer class="layout-menu-container">
            <app-menu></app-menu>
        </div>
    </div>`,
})
export class AppSidebar {
    timeout: any = null;

    @ViewChild('menuContainer') menuContainer!: ElementRef;
    constructor(
        public layoutService: LayoutService,
        public el: ElementRef,
    ) {}

    onMouseEnter() {
        if (!this.layoutService.layoutState().anchored) {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }

            this.layoutService.layoutState.update((state) => {
                if (!state.sidebarActive) {
                    return {
                        ...state,
                        sidebarActive: true,
                    };
                }
                return state;
            });
        }
    }

    onMouseLeave() {
        if (!this.layoutService.layoutState().anchored) {
            if (!this.timeout) {
                this.timeout = setTimeout(() => {
                    this.layoutService.layoutState.update((state) => {
                        if (state.sidebarActive) {
                            return {
                                ...state,
                                sidebarActive: false,
                            };
                        }
                        return state;
                    });
                }, 300);
            }
        }
    }

    anchor() {
        this.layoutService.layoutState.update((state) => ({
            ...state,
            anchored: !state.anchored,
        }));
    }
}
