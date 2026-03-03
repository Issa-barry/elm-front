import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

import { PackingEdit } from './packing-edit';
import { PackingService } from '@/services/packing/packing.service';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
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
  id: 1, prestataire_id: 1, reference: 'PACK-001', date: '2026-02-05',
  nb_rouleaux: 890, prix_par_rouleau: 9, montant: 8010, statut: 'valide',
  facture_id: null, notes: null,
  created_at: '2026-02-05T10:00:00Z', updated_at: '2026-02-05T10:00:00Z', deleted_at: null,
};

describe('PackingEdit — édition', () => {
  let component: PackingEdit;
  let fixture: ComponentFixture<PackingEdit>;
  let packingService: jasmine.SpyObj<PackingService>;
  let prestataireService: jasmine.SpyObj<PrestataireService>;
  let router: jasmine.SpyObj<Router>;
  let messageServiceAddSpy: jasmine.Spy;

  async function createComponent(routeId: string | null = '1') {
    packingService = jasmine.createSpyObj('PackingService', ['getPacking', 'updatePacking']);
    prestataireService = jasmine.createSpyObj('PrestataireService', ['getPrestataires']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    packingService.getPacking.and.returnValue(
      of({ success: true, message: '', data: mockPacking })
    );
    prestataireService.getPrestataires.and.returnValue(
      of({ success: true, message: '', data: [mockPrestataire] } as any)
    );

    await TestBed.configureTestingModule({
      imports: [PackingEdit, NoopAnimationsModule, HttpClientTestingModule],
      providers: [
        { provide: PackingService, useValue: packingService },
        { provide: PrestataireService, useValue: prestataireService },
        { provide: Router, useValue: router },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => routeId } } } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PackingEdit);
    component = fixture.componentInstance;
    const ms = fixture.debugElement.injector.get(MessageService);
    messageServiceAddSpy = spyOn(ms, 'add');
    fixture.detectChanges();
  }

  afterEach(() => TestBed.resetTestingModule());

  // ── ngOnInit ─────────────────────────────────────────────────────────────

  it('devrait être créé', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('ngOnInit() charge le packing par ID', async () => {
    await createComponent('1');
    expect(packingService.getPacking).toHaveBeenCalledWith(1);
    expect(component.packing).toEqual(mockPacking);
  });

  it('ngOnInit() charge les prestataires', async () => {
    await createComponent('1');
    expect(prestataireService.getPrestataires).toHaveBeenCalled();
  });

  it('ngOnInit() redirige vers /packings si l\'id est invalide', async () => {
    await createComponent('abc');
    expect(router.navigate).toHaveBeenCalledWith(['/packings']);
  });

  it('ngOnInit() redirige vers /packings si l\'id est null', async () => {
    await createComponent(null);
    expect(router.navigate).toHaveBeenCalledWith(['/packings']);
  });

  it('ngOnInit() affiche un toast erreur si le packing est introuvable', async () => {
    await createComponent('1');
    packingService.getPacking.and.returnValue(throwError(() => ({ status: 404 })));
    component.ngOnInit();
    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'error' })
    );
  });

  // ── onSubmit — succès ────────────────────────────────────────────────────

  it('onSubmit() appelle updatePacking avec le bon id', async () => {
    await createComponent('1');
    const dto: CreatePackingDto = {
      prestataire_id: 1, date: '2026-02-05',
      nb_rouleaux: 100, prix_par_rouleau: 9, statut: 'valide',
    };
    packingService.updatePacking.and.returnValue(
      of({ success: true, message: 'Mis à jour', data: { ...mockPacking, nb_rouleaux: 100 } })
    );
    component.onSubmit(dto);
    expect(packingService.updatePacking).toHaveBeenCalledWith(1, dto);
  });

  it('onSubmit() affiche un toast succès après modification', async () => {
    await createComponent('1');
    packingService.updatePacking.and.returnValue(
      of({ success: true, message: '', data: mockPacking })
    );
    component.onSubmit({ prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9 });
    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'success' })
    );
  });

  it('onSubmit() remet loading=false après succès', async () => {
    await createComponent('1');
    packingService.updatePacking.and.returnValue(
      of({ success: true, message: '', data: mockPacking })
    );
    component.onSubmit({ prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9 });
    expect(component.loading).toBeFalse();
  });

  // ── onSubmit — erreur : extraction du message ────────────────────────────

  it('onSubmit() affiche les messages du champ errors du back', async () => {
    await createComponent('1');
    packingService.updatePacking.and.returnValue(throwError(() => ({
      error: { errors: { statut: ['Le statut est invalide.'] } },
    })));
    component.onSubmit({ prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9 });
    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'error', detail: 'Le statut est invalide.' })
    );
  });

  it('onSubmit() tombe sur error.message si errors est absent', async () => {
    await createComponent('1');
    packingService.updatePacking.and.returnValue(throwError(() => ({
      error: { message: 'Erreur serveur' },
    })));
    component.onSubmit({ prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9 });
    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'error', detail: 'Erreur serveur' })
    );
  });

  it('onSubmit() tombe sur le message générique si aucun message back', async () => {
    await createComponent('1');
    packingService.updatePacking.and.returnValue(throwError(() => ({})));
    component.onSubmit({ prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9 });
    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'error', detail: 'Impossible de modifier le packing' })
    );
  });

  it('onSubmit() remet loading=false après erreur', async () => {
    await createComponent('1');
    packingService.updatePacking.and.returnValue(throwError(() => ({ status: 500 })));
    component.onSubmit({ prestataire_id: 1, date: '2026-02-05', nb_rouleaux: 100, prix_par_rouleau: 9 });
    expect(component.loading).toBeFalse();
  });

  // ── onCancel ─────────────────────────────────────────────────────────────

  it('onCancel() navigue vers /packings', async () => {
    await createComponent('1');
    component.onCancel();
    expect(router.navigate).toHaveBeenCalledWith(['/packings']);
  });
});
