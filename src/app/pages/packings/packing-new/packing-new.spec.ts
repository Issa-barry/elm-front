import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

import { PackingNew } from './packing-new';
import { PackingService } from '@/services/packing/packing.service';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
import { ParametresService } from '@/services/parametres/parametres.service';
import { Packing, CreatePackingDto } from '@/models/packing.model';
import { Prestataire } from '@/models/prestataire.model';

const mockPrestataire: Prestataire = {
  id: 1, nom: 'SY', prenom: 'Aly', type: 'machiniste', phone: '+224620000001',
  raison_sociale: null, email: null, pays: 'GN', code_pays: 'GN',
  code_phone_pays: '+224', ville: 'Conakry', quartier: null, adresse: null,
  specialite: null, tarif_horaire: null, notes: null, reference: 'REF',
  is_active: true, nom_complet: 'Aly SY', type_label: 'Machiniste',
  created_at: '', updated_at: '', deleted_at: null,
};

const mockPacking: Packing = {
  id: 5, prestataire_id: 1, reference: 'PACK-005', date: '2026-02-05',
  nb_rouleaux: 100, prix_par_rouleau: 9, montant: 900, statut: 'valide',
  facture_id: null, notes: null,
  created_at: '2026-02-05T10:00:00Z', updated_at: '2026-02-05T10:00:00Z', deleted_at: null,
};

describe('PackingNew — création', () => {
  let component: PackingNew;
  let fixture: ComponentFixture<PackingNew>;
  let packingService: jasmine.SpyObj<PackingService>;
  let prestataireService: jasmine.SpyObj<PrestataireService>;
  let parametresService: jasmine.SpyObj<ParametresService>;
  let router: jasmine.SpyObj<Router>;
  let messageServiceAddSpy: jasmine.Spy;

  beforeEach(async () => {
    packingService = jasmine.createSpyObj('PackingService', ['createPacking']);
    prestataireService = jasmine.createSpyObj('PrestataireService', ['getPrestataires']);
    parametresService = jasmine.createSpyObj('ParametresService', ['getPrixRouleauDefaut']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    prestataireService.getPrestataires.and.returnValue(
      of({ success: true, message: '', data: [mockPrestataire] } as any)
    );
    parametresService.getPrixRouleauDefaut.and.returnValue(of(9));

    await TestBed.configureTestingModule({
      imports: [PackingNew, NoopAnimationsModule, HttpClientTestingModule],
      providers: [
        { provide: PackingService, useValue: packingService },
        { provide: PrestataireService, useValue: prestataireService },
        { provide: ParametresService, useValue: parametresService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PackingNew);
    component = fixture.componentInstance;
    const ms = fixture.debugElement.injector.get(MessageService);
    messageServiceAddSpy = spyOn(ms, 'add');
    fixture.detectChanges();
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  // ── ngOnInit ─────────────────────────────────────────────────────────────

  it('ngOnInit() charge les prestataires', () => {
    expect(prestataireService.getPrestataires).toHaveBeenCalled();
    expect(component.prestataires.length).toBe(1);
  });

  it('ngOnInit() récupère le prix par défaut du rouleau', () => {
    expect(parametresService.getPrixRouleauDefaut).toHaveBeenCalled();
    expect(component.defaultPrixRouleau).toBe(9);
  });

  it('ngOnInit() affiche un toast erreur si les prestataires échouent', () => {
    prestataireService.getPrestataires.and.returnValue(throwError(() => ({ status: 500 })));
    component.ngOnInit();
    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'error' })
    );
  });

  // ── onSubmit ─────────────────────────────────────────────────────────────

  it('onSubmit() appelle createPacking avec le dto reçu', () => {
    const dto: CreatePackingDto = {
      prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9,
    };
    packingService.createPacking.and.returnValue(
      of({ success: true, message: 'Créé', data: mockPacking })
    );
    component.onSubmit(dto);
    expect(packingService.createPacking).toHaveBeenCalledWith(dto);
  });

  it('onSubmit() affiche un toast succès après création', () => {
    packingService.createPacking.and.returnValue(
      of({ success: true, message: 'Créé', data: mockPacking })
    );
    component.onSubmit({ prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9 });
    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'success' })
    );
  });

  it('onSubmit() remet loading=false après succès', () => {
    packingService.createPacking.and.returnValue(
      of({ success: true, message: '', data: mockPacking })
    );
    component.onSubmit({ prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9 });
    expect(component.loading).toBeFalse();
  });

  it('onSubmit() affiche un toast erreur si la création échoue', () => {
    packingService.createPacking.and.returnValue(
      throwError(() => ({ status: 422, error: { message: 'Données invalides' } }))
    );
    component.onSubmit({ prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9 });
    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'error' })
    );
  });

  it('onSubmit() remet loading=false après erreur', () => {
    packingService.createPacking.and.returnValue(
      throwError(() => ({ status: 500 }))
    );
    component.onSubmit({ prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9 });
    expect(component.loading).toBeFalse();
  });

  // ── onCancel ─────────────────────────────────────────────────────────────

  it('onCancel() navigue vers /packings', () => {
    component.onCancel();
    expect(router.navigate).toHaveBeenCalledWith(['/packings']);
  });
});
