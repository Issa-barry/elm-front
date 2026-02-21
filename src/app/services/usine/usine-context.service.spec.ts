import { TestBed } from '@angular/core/testing';
import { UsineContextService } from './usine-context.service';
import { MeResponse } from '@/models/usine.model';

const ME_NON_SIEGE: MeResponse = {
  user:              {},
  roles:             ['gestionnaire'],
  permissions:       ['produits.read'],
  accessible_usines: [
    { id: 1, nom: 'Usine Alpha' },
    { id: 2, nom: 'Usine Beta' },
  ],
  default_usine_id:  1,
  current_usine_id:  1,
  is_siege_user:     false,
};

const ME_SIEGE: MeResponse = {
  user:              {},
  roles:             ['admin'],
  permissions:       [],
  accessible_usines: [
    { id: 1, nom: 'Usine Alpha' },
    { id: 3, nom: 'Usine Gamma' },
  ],
  default_usine_id:  null,
  current_usine_id:  null,
  is_siege_user:     true,
};

describe('UsineContextService', () => {
  let service: UsineContextService;

  beforeEach(() => {
    sessionStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsineContextService);
  });

  afterEach(() => sessionStorage.clear());

  // ── hydrateFromMe ─────────────────────────────────────

  it('hydrate: non-siège → currentUsineId = default_usine_id', () => {
    service.hydrateFromMe(ME_NON_SIEGE);
    expect(service.currentUsineId()).toBe(1);
    expect(service.isSiegeUser()).toBeFalse();
    expect(service.isConsolidated()).toBeFalse();
  });

  it('hydrate: siège sans current_usine_id → vue consolidée', () => {
    service.hydrateFromMe(ME_SIEGE);
    expect(service.isSiegeUser()).toBeTrue();
    expect(service.isConsolidated()).toBeTrue();
    expect(service.currentUsineId()).toBeNull();
    expect(service.headerUsineId()).toBeNull();
  });

  it('hydrate: siège avec current_usine_id → pas de vue consolidée', () => {
    const meWithCurrent: MeResponse = { ...ME_SIEGE, current_usine_id: 1 };
    service.hydrateFromMe(meWithCurrent);
    expect(service.isConsolidated()).toBeFalse();
    expect(service.currentUsineId()).toBe(1);
  });

  // ── headerUsineId ─────────────────────────────────────

  it('headerUsineId: retourne l\'id en mode normal', () => {
    service.hydrateFromMe(ME_NON_SIEGE);
    expect(service.headerUsineId()).toBe(1);
  });

  it('headerUsineId: retourne null en vue consolidée', () => {
    service.hydrateFromMe(ME_SIEGE);       // → consolidated
    expect(service.headerUsineId()).toBeNull();
  });

  // ── switchUsine ───────────────────────────────────────

  it('switchUsine: change l\'usine courante et quitte le mode consolidé', () => {
    service.hydrateFromMe(ME_SIEGE);       // → consolidated
    service.switchUsine(3);
    expect(service.currentUsineId()).toBe(3);
    expect(service.isConsolidated()).toBeFalse();
    expect(service.headerUsineId()).toBe(3);
  });

  // ── enableConsolidatedView ────────────────────────────

  it('enableConsolidatedView: fonctionne pour le siège', () => {
    const meWithCurrent: MeResponse = { ...ME_SIEGE, current_usine_id: 1 };
    service.hydrateFromMe(meWithCurrent);
    service.enableConsolidatedView();
    expect(service.isConsolidated()).toBeTrue();
    expect(service.headerUsineId()).toBeNull();
  });

  it('enableConsolidatedView: ignoré pour les non-siège (sécurité)', () => {
    service.hydrateFromMe(ME_NON_SIEGE);
    service.enableConsolidatedView();      // doit être ignoré
    expect(service.isConsolidated()).toBeFalse();
    expect(service.headerUsineId()).toBe(1);
  });

  // ── fallbackToDefault ─────────────────────────────────

  it('fallbackToDefault: revient au default_usine_id', () => {
    service.hydrateFromMe(ME_NON_SIEGE);
    service.switchUsine(2);               // passer à usine 2
    service.fallbackToDefault();
    expect(service.currentUsineId()).toBe(1);
  });

  it('fallbackToDefault: siège sans défaut → vue consolidée', () => {
    service.hydrateFromMe({ ...ME_SIEGE, current_usine_id: 1 });
    service.fallbackToDefault();           // default_usine_id = null
    expect(service.isConsolidated()).toBeTrue();
  });

  // ── Persistance ───────────────────────────────────────

  it('persiste dans sessionStorage et se restaure', () => {
    service.hydrateFromMe(ME_NON_SIEGE);
    service.switchUsine(2);

    // Simuler un reload (nouveau service)
    TestBed.resetTestingModule();
    sessionStorage; // garder le storage
    TestBed.configureTestingModule({});
    const service2 = TestBed.inject(UsineContextService);

    expect(service2.currentUsineId()).toBe(2);
    expect(service2.isSiegeUser()).toBeFalse();
  });

  // ── clear ─────────────────────────────────────────────

  it('clear: réinitialise tout et supprime de sessionStorage', () => {
    service.hydrateFromMe(ME_NON_SIEGE);
    service.clear();
    expect(service.currentUsineId()).toBeNull();
    expect(service.isSiegeUser()).toBeFalse();
    expect(sessionStorage.getItem('usine_context')).toBeNull();
  });
});
