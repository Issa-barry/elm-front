import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProduitService } from './produits.service';
import { Produit } from '@/models/produit.model';
import { environment } from 'src/environments/environment';

describe('ProduitService#getByCode', () => {
  let service: ProduitService;
  let httpMock: HttpTestingController;
  const apiBase = `${environment.apiUrl}/produits`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProduitService],
    });
    service = TestBed.inject(ProduitService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('200 → retourne un Produit mappé (mode=auto par défaut)', () => {
    const raw = { id: 42, nom: 'Ciment', code_interne: 'CIMENT001', code_fournisseur: null };
    let result: Produit | undefined;

    service.getByCode('CIMENT001').subscribe(p => (result = p));

    const req = httpMock.expectOne(`${apiBase}/by-code/CIMENT001?mode=auto`);
    expect(req.request.method).toBe('GET');
    req.flush({ success: true, message: 'Produit trouvé.', data: raw });

    expect(result).toBeInstanceOf(Produit);
    expect(result!.id).toBe(42);
    expect(result!.code_interne).toBe('CIMENT001');
  });

  it('200 → mode=interne envoyé dans les params quand spécifié', () => {
    service.getByCode('XYZ123', 'interne').subscribe();

    const req = httpMock.expectOne(`${apiBase}/by-code/XYZ123?mode=interne`);
    req.flush({ success: true, message: '', data: { id: 1, nom: 'Test' } });

    expect(req.request.params.get('mode')).toBe('interne');
  });

  it('fromApi compat : code_interne hérite de code legacy si absent', () => {
    const raw = { id: 5, nom: 'Sable', code: 'CODE_LEGACY', code_interne: null };
    let result: Produit | undefined;

    service.getByCode('CODE_LEGACY').subscribe(p => (result = p));
    httpMock
      .expectOne(`${apiBase}/by-code/CODE_LEGACY?mode=auto`)
      .flush({ success: true, message: '', data: raw });

    expect(result!.code_interne).toBe('CODE_LEGACY');
  });

  it('404 → propage HttpErrorResponse avec status 404', (done) => {
    service.getByCode('INCONNU').subscribe({
      next: () => fail('ne doit pas émettre'),
      error: err => {
        expect(err.status).toBe(404);
        done();
      },
    });

    httpMock
      .expectOne(`${apiBase}/by-code/INCONNU?mode=auto`)
      .flush({ success: false, message: 'Aucun produit trouvé.' }, { status: 404, statusText: 'Not Found' });
  });

  it('409 → propage HttpErrorResponse avec status 409 (code ambigu)', (done) => {
    service.getByCode('FOURNISSEUR_PARTAGE', 'fournisseur').subscribe({
      next: () => fail('ne doit pas émettre'),
      error: err => {
        expect(err.status).toBe(409);
        done();
      },
    });

    httpMock
      .expectOne(`${apiBase}/by-code/FOURNISSEUR_PARTAGE?mode=fournisseur`)
      .flush(
        { success: false, message: 'Plusieurs produits.', data: { count: 3 } },
        { status: 409, statusText: 'Conflict' },
      );
  });

  it('422 → propage HttpErrorResponse avec status 422 (format invalide)', (done) => {
    service.getByCode('INVALIDE!!!').subscribe({
      next: () => fail('ne doit pas émettre'),
      error: err => {
        expect(err.status).toBe(422);
        done();
      },
    });

    httpMock
      .expectOne(`${apiBase}/by-code/INVALIDE!!!?mode=auto`)
      .flush(
        { success: false, message: 'Format invalide.' },
        { status: 422, statusText: 'Unprocessable Entity' },
      );
  });
});
