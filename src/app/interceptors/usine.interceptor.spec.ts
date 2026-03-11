import { TestBed } from '@angular/core/testing';
import {
  HttpClient,
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
  user: {},
  roles: [],
  permissions: [],
  accessible_sites: [{ id: 42, nom: 'Site Test' }],
  default_site_id: 42,
  current_site_id: 42,
  is_siege_user: false,
};

const ME_SIEGE_CONSOLIDATED: MeResponse = {
  user: {},
  roles: [],
  permissions: [],
  accessible_sites: [{ id: 1, nom: 'Site Alpha' }],
  default_site_id: null,
  current_site_id: null,
  is_siege_user: true,
};

describe('usineInterceptor', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let siteCtx: UsineContextService;
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

    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    siteCtx = TestBed.inject(UsineContextService);
    messageService = TestBed.inject(MessageService);
  });

  afterEach(() => {
    httpMock.verify();
    sessionStorage.clear();
  });

  it('injecte X-Site-Id sur une requete metier', () => {
    siteCtx.hydrateFromMe(ME_NON_SIEGE);

    httpClient.get('/api/v1/produits').subscribe();
    const req = httpMock.expectOne('/api/v1/produits');
    expect(req.request.headers.get('X-Site-Id')).toBe('42');
    req.flush({});
  });

  it('n\'injecte pas X-Site-Id sur /auth/login', () => {
    siteCtx.hydrateFromMe(ME_NON_SIEGE);

    httpClient.post('/api/v1/auth/login', {}).subscribe();
    const req = httpMock.expectOne('/api/v1/auth/login');
    expect(req.request.headers.has('X-Site-Id')).toBeFalse();
    req.flush({});
  });

  it('n\'injecte pas X-Site-Id sur /auth/register', () => {
    siteCtx.hydrateFromMe(ME_NON_SIEGE);

    httpClient.post('/api/v1/auth/register', {}).subscribe();
    const req = httpMock.expectOne('/api/v1/auth/register');
    expect(req.request.headers.has('X-Site-Id')).toBeFalse();
    req.flush({});
  });

  it('injecte X-Site-Id=all en vue consolidee siege', () => {
    siteCtx.hydrateFromMe(ME_SIEGE_CONSOLIDATED);

    httpClient.get('/api/v1/produits').subscribe();
    const req = httpMock.expectOne('/api/v1/produits');
    expect(req.request.headers.get('X-Site-Id')).toBe('all');
    req.flush({});
  });

  it('force un site concret sur /roles en vue consolidee siege', () => {
    siteCtx.hydrateFromMe(ME_SIEGE_CONSOLIDATED);

    httpClient.get('/api/v1/roles').subscribe();
    const req = httpMock.expectOne('/api/v1/roles');
    expect(req.request.headers.get('X-Site-Id')).toBe('1');
    req.flush({});
  });

  it('force un site concret sur /permissions en vue consolidee siege', () => {
    siteCtx.hydrateFromMe(ME_SIEGE_CONSOLIDATED);

    httpClient.get('/api/v1/permissions').subscribe();
    const req = httpMock.expectOne('/api/v1/permissions');
    expect(req.request.headers.get('X-Site-Id')).toBe('1');
    req.flush({});
  });

  it('force un site concret sur /users/{id}/roles en vue consolidee siege', () => {
    siteCtx.hydrateFromMe(ME_SIEGE_CONSOLIDATED);

    httpClient.get('/api/v1/users/9/roles').subscribe();
    const req = httpMock.expectOne('/api/v1/users/9/roles');
    expect(req.request.headers.get('X-Site-Id')).toBe('1');
    req.flush({});
  });

  it('gere 403 site non autorise: toast + fallback', () => {
    siteCtx.hydrateFromMe(ME_NON_SIEGE);
    const toastSpy = spyOn(messageService, 'add');

    httpClient.get('/api/v1/produits').subscribe({ error: () => {} });
    const req = httpMock.expectOne('/api/v1/produits');
    req.flush(
      { message: 'Acces a ce site non autorise.' },
      { status: 403, statusText: 'Forbidden' }
    );

    expect(toastSpy).toHaveBeenCalledWith(jasmine.objectContaining({ severity: 'error' }));
    expect(siteCtx.currentUsineId()).toBe(42);
  });

  it('gere 404 site introuvable: toast + fallback', () => {
    siteCtx.hydrateFromMe(ME_NON_SIEGE);
    const toastSpy = spyOn(messageService, 'add');

    httpClient.get('/api/v1/produits').subscribe({ error: () => {} });
    const req = httpMock.expectOne('/api/v1/produits');
    req.flush(
      { message: 'Site non trouve ou inactif.' },
      { status: 404, statusText: 'Not Found' }
    );

    expect(toastSpy).toHaveBeenCalledWith(jasmine.objectContaining({ severity: 'warn' }));
    expect(siteCtx.currentUsineId()).toBe(42);
  });

  it('le header suit le changement de site', () => {
    siteCtx.hydrateFromMe({
      ...ME_NON_SIEGE,
      accessible_sites: [{ id: 1, nom: 'A' }, { id: 2, nom: 'B' }],
      current_site_id: 1,
      default_site_id: 1,
    });

    httpClient.get('/api/v1/produits').subscribe();
    let req = httpMock.expectOne('/api/v1/produits');
    expect(req.request.headers.get('X-Site-Id')).toBe('1');
    req.flush({});

    siteCtx.switchUsine(2);

    httpClient.get('/api/v1/produits').subscribe();
    req = httpMock.expectOne('/api/v1/produits');
    expect(req.request.headers.get('X-Site-Id')).toBe('2');
    req.flush({});
  });
});
