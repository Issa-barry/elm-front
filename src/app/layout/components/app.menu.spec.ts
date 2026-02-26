import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMenu } from './app.menu';
import { AuthService } from '@/services/auth/auth.service';

/** Stub minimal d'AuthService */
function makeAuthStub(permissions: string[]) {
  return {
    currentUser: signal<{ permissions: string[] } | null>({ permissions }),
  };
}

describe('AppMenu – item Ventes', () => {
  function buildMenu(permissions: string[]) {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([], { useHash: true })],
      providers: [
        AppMenu,
        { provide: AuthService, useValue: makeAuthStub(permissions) },
      ],
    });
    const menu = TestBed.inject(AppMenu);
    // buildMenuModel est privée → on l'appelle via any
    return (menu as any).buildMenuModel(permissions) as any[];
  }

  function getModuleItems(menuModel: any[]): any[] {
    return menuModel.find((s: any) => s.label === 'Modules')?.items ?? [];
  }

  function getVentesItem(permissions: string[]) {
    const items = getModuleItems(buildMenu(permissions));
    return items.find((i: any) => i.label === 'Ventes');
  }

  it('doit avoir un routerLink direct vers /ventes/commandes (pas de sous-menu)', () => {
    const ventes = getVentesItem(['commandes.read']);
    expect(ventes).toBeTruthy();
    expect(ventes.routerLink).toEqual(['/ventes/commandes']);
    expect(ventes.items).toBeUndefined();
  });

  it('doit etre visible quand utilisateur a commandes.read', () => {
    const ventes = getVentesItem(['commandes.read']);
    expect(ventes.visible).toBeTrue();
  });

  it('doit etre invisible quand utilisateur na pas commandes.read', () => {
    const ventes = getVentesItem(['produits.read']);
    expect(ventes.visible).toBeFalse();
  });
});
