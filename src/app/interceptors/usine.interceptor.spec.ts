import { TestBed } from '@angular/core/testing';
import {
  HttpClient,
  HttpErrorResponse,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

import { usineInterceptor } from './usine.interceptor';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { MeResponse } from '@/models/usine.model';

const ME_NON_SIEGE: MeResponse = {
  user:              {},
  roles:             [],
  permissions:       [],
  accessible_usines: [{ id: 42, nom: 'Usine Test' }],
  default_usine_id:  42,
  current_usine_id:  42,
  is_siege_user:     false,
};

const ME_SIEGE_CONSOLIDATED: MeResponse = {
  user:              {},
  roles:             [],
  permissions:       [],
  accessible_usines: [{ id: 1, nom: 'Usine Alpha' }],
  default_usine_id:  null,
  current_usine_id:  null,
  is_siege_user:     true,
};

describe('usineInterceptor', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let usineCtx: UsineContextService;
  let messageService: MessageService;

  beforeEach(() => {
    sessionStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([usineInterceptor])),
        provideHttpClientTesting(),
        MessageService,
        UsineContextService,
      ],
    });

    httpClient      = TestBed.inject(HttpClient);
    httpMock        = TestBed.inject(HttpTestingController);
    usineCtx        = TestBed.inject(UsineContextService);
    messageService  = TestBed.inject(MessageService);
  });

  afterEach(() => {
    httpMock.verify();
    sessionStorage.clear();
  });

  // ── Injection header ──────────────────────────────────

  it('injecte X-Usine-Id sur une requête métier', () => {
    usineCtx.hydrateFromMe(ME_NON_SIEGE);

    httpClient.get('/api/v1/produits').subscribe();
    const req = httpMock.expectOne('/api/v1/produits');
    expect(req.request.headers.get('X-Usine-Id')).toBe('42');
    req.flush({});
  });

  it('n\'injecte PAS X-Usine-Id sur /auth/login', () => {
    usineCtx.hydrateFromMe(ME_NON_SIEGE);

    httpClient.post('/api/v1/auth/login', {}).subscribe();
    const req = httpMock.expectOne('/api/v1/auth/login');
    expect(req.request.headers.has('X-Usine-Id')).toBeFalse();
    req.flush({});
  });

  it('n\'injecte PAS X-Usine-Id sur /auth/register', () => {
    usineCtx.hydrateFromMe(ME_NON_SIEGE);

    httpClient.post('/api/v1/auth/register', {}).subscribe();
    const req = httpMock.expectOne('/api/v1/auth/register');
    expect(req.request.headers.has('X-Usine-Id')).toBeFalse();
    req.flush({});
  });

  it('n\'injecte PAS X-Usine-Id en vue consolidée siège', () => {
    usineCtx.hydrateFromMe(ME_SIEGE_CONSOLIDATED);

    httpClient.get('/api/v1/produits').subscribe();
    const req = httpMock.expectOne('/api/v1/produits');
    expect(req.request.headers.has('X-Usine-Id')).toBeFalse();
    req.flush({});
  });

  // ── Gestion erreurs usine ─────────────────────────────

  it('gère 403 usine non autorisée : toast + fallback', () => {
    usineCtx.hydrateFromMe({ ...ME_NON_SIEGE, accessible_usines: [{ id: 42, nom: 'Test' }], default_usine_id: 42 });
    usineCtx.switchUsine(99); // usine invalide

    const toastSpy = spyOn(messageService, 'add');

    httpClient.get('/api/v1/produits').subscribe({ error: () => {} });
    const req = httpMock.expectOne('/api/v1/produits');
    req.flush(
      { message: 'Accès à cette usine non autorisé.' },
      { status: 403, statusText: 'Forbidden' }
    );

    expect(toastSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'error' })
    );
    // Doit revenir à l'usine par défaut
    expect(usineCtx.currentUsineId()).toBe(42);
  });

  it('gère 404 usine introuvable : toast + fallback', () => {
    usineCtx.hydrateFromMe(ME_NON_SIEGE);
    const toastSpy = spyOn(messageService, 'add');

    httpClient.get('/api/v1/produits').subscribe({ error: () => {} });
    const req = httpMock.expectOne('/api/v1/produits');
    req.flush(
      { message: 'Usine non trouvée ou inactive.' },
      { status: 404, statusText: 'Not Found' }
    );

    expect(toastSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'warn' })
    );
    expect(usineCtx.currentUsineId()).toBe(42); // revenu au défaut
  });

  it('ne gère pas les 403 génériques (autre message)', () => {
    usineCtx.hydrateFromMe(ME_NON_SIEGE);
    const toastSpy = spyOn(messageService, 'add');

    httpClient.get('/api/v1/produits').subscribe({ error: () => {} });
    const req = httpMock.expectOne('/api/v1/produits');
    req.flush(
      { message: 'Permission refusée.' },
      { status: 403, statusText: 'Forbidden' }
    );

    expect(toastSpy).not.toHaveBeenCalled();
  });

  // ── Changement d'usine et propagation header ──────────

  it('le header reflète le changement d\'usine', () => {
    usineCtx.hydrateFromMe({
      ...ME_NON_SIEGE,
      accessible_usines: [{ id: 1, nom: 'A' }, { id: 2, nom: 'B' }],
      current_usine_id: 1,
      default_usine_id: 1,
    });

    // Première requête : usine 1
    httpClient.get('/api/v1/produits').subscribe();
    let req = httpMock.expectOne('/api/v1/produits');
    expect(req.request.headers.get('X-Usine-Id')).toBe('1');
    req.flush({});

    // Changement vers usine 2
    usineCtx.switchUsine(2);

    // Deuxième requête : usine 2
    httpClient.get('/api/v1/produits').subscribe();
    req = httpMock.expectOne('/api/v1/produits');
    expect(req.request.headers.get('X-Usine-Id')).toBe('2');
    req.flush({});
  });
});
