import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

import { ProduitScanComponent } from './produit-scan';
import { ProduitService } from '@/services/produits/produits.service';
import { Produit } from '@/models/produit.model';

describe('ProduitScanComponent', () => {
  let fixture: ComponentFixture<ProduitScanComponent>;
  let component: ProduitScanComponent;
  let produitServiceSpy: jasmine.SpyObj<ProduitService>;
  let messageService: MessageService;

  const makeProduit = (id = 1): Produit =>
    Produit.fromApi({ id, nom: 'Ciment', code_interne: 'CIMENT001' });

  const makeHttpError = (status: number, body: object = {}): HttpErrorResponse =>
    new HttpErrorResponse({ status, error: body, url: '/test' });

  beforeEach(async () => {
    produitServiceSpy = jasmine.createSpyObj<ProduitService>('ProduitService', ['getByCode']);

    await TestBed.configureTestingModule({
      imports: [ProduitScanComponent, HttpClientTestingModule],
      providers: [
        { provide: ProduitService, useValue: produitServiceSpy },
        MessageService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitScanComponent);
    component = fixture.componentInstance;
    // Récupérer le MessageService provisionné par le composant
    messageService = fixture.debugElement.injector.get(MessageService);
    fixture.detectChanges();
  });

  // ─── onEnter() — cas trivial ──────────────────────────────────────────────

  it('ne déclenche pas la requête si rawCode est vide', () => {
    component.rawCode = '   ';
    component.onEnter();
    expect(produitServiceSpy.getByCode).not.toHaveBeenCalled();
  });

  it('ne déclenche pas la requête si un scan est déjà en cours', () => {
    produitServiceSpy.getByCode.and.returnValue(of(makeProduit()));
    component.rawCode = 'CODE1';
    component.scanning = true;
    component.onEnter();
    expect(produitServiceSpy.getByCode).not.toHaveBeenCalled();
  });

  // ─── Succès ───────────────────────────────────────────────────────────────

  it('succès : émet produitFound, vide rawCode, scanning=false', fakeAsync(() => {
    const produit = makeProduit();
    produitServiceSpy.getByCode.and.returnValue(of(produit));
    const emittedProduits: Produit[] = [];
    component.produitFound.subscribe(p => emittedProduits.push(p));

    component.rawCode = 'CIMENT001';
    component.onEnter();
    tick();

    expect(produitServiceSpy.getByCode).toHaveBeenCalledWith('CIMENT001', 'auto');
    expect(emittedProduits.length).toBe(1);
    expect(emittedProduits[0].id).toBe(1);
    expect(component.rawCode).toBe('');
    expect(component.scanning).toBeFalse();
    expect(component.lastError).toBeNull();
  }));

  it('uppercasse le code avant appel API', fakeAsync(() => {
    produitServiceSpy.getByCode.and.returnValue(of(makeProduit()));
    component.rawCode = 'ciment001';
    component.onEnter();
    tick();
    expect(produitServiceSpy.getByCode).toHaveBeenCalledWith('CIMENT001', 'auto');
  }));

  it('respecte le @Input() mode passé au composant', fakeAsync(() => {
    produitServiceSpy.getByCode.and.returnValue(of(makeProduit()));
    component.mode = 'interne';
    component.rawCode = 'PROD001';
    component.onEnter();
    tick();
    expect(produitServiceSpy.getByCode).toHaveBeenCalledWith('PROD001', 'interne');
  }));

  // ─── Erreur 404 ───────────────────────────────────────────────────────────

  it('404 → toast error + lastError renseigné + rawCode vidé', fakeAsync(() => {
    produitServiceSpy.getByCode.and.returnValue(
      throwError(() => makeHttpError(404, { message: 'Aucun produit trouvé.' })),
    );
    spyOn(messageService, 'add');
    const emittedProduits: Produit[] = [];
    component.produitFound.subscribe(p => emittedProduits.push(p));

    component.rawCode = 'INCONNU';
    component.onEnter();
    tick();

    expect(emittedProduits.length).toBe(0);
    expect(component.rawCode).toBe('');
    expect(component.scanning).toBeFalse();
    expect(component.lastError).toBe('Aucun produit trouvé.');
    expect(messageService.add).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'error', summary: 'Produit introuvable' }),
    );
  }));

  // ─── Erreur 409 ───────────────────────────────────────────────────────────

  it('409 → toast warn avec mention du count', fakeAsync(() => {
    produitServiceSpy.getByCode.and.returnValue(
      throwError(() => makeHttpError(409, { data: { count: 3 } })),
    );
    spyOn(messageService, 'add');

    component.rawCode = 'SHARED_CODE';
    component.onEnter();
    tick();

    expect(messageService.add).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'warn', summary: 'Code ambigu' }),
    );
    expect(component.lastError).toContain('3 produits');
  }));

  // ─── Erreur 422 ───────────────────────────────────────────────────────────

  it('422 → toast error + message format invalide', fakeAsync(() => {
    produitServiceSpy.getByCode.and.returnValue(
      throwError(() => makeHttpError(422, { message: 'Format invalide.' })),
    );
    spyOn(messageService, 'add');

    component.rawCode = '###';
    component.onEnter();
    tick();

    expect(messageService.add).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'error', summary: 'Code invalide' }),
    );
  }));

  // ─── reset() ─────────────────────────────────────────────────────────────

  it('reset() vide rawCode et lastError', () => {
    component.rawCode = 'SOMETHING';
    component.lastError = 'Une erreur';
    component.reset();
    expect(component.rawCode).toBe('');
    expect(component.lastError).toBeNull();
    expect(component.scanning).toBeFalse();
  });

  // ─── buildErrorMessage ────────────────────────────────────────────────────

  it('buildErrorMessage 404 sans message API → fallback générique', () => {
    const msg = component.buildErrorMessage(makeHttpError(404, {}));
    expect(msg).toBe('Aucun produit trouvé pour ce code.');
  });

  it('buildErrorMessage 409 avec count → message avec count', () => {
    const msg = component.buildErrorMessage(makeHttpError(409, { data: { count: 5 } }));
    expect(msg).toContain('5 produits');
  });

  it('buildErrorMessage status inconnu → fallback générique', () => {
    const msg = component.buildErrorMessage(makeHttpError(500, {}));
    expect(msg).toBe('Erreur lors du scan. Veuillez réessayer.');
  });
});
