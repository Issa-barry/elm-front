import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PackingFrom } from './packing-from';
import { Packing } from '@/models/packing.model';
import { Prestataire } from '@/models/prestataire.model';

const base: Omit<Prestataire, 'id' | 'nom' | 'prenom' | 'type' | 'phone'> = {
  raison_sociale: null, email: null, pays: 'GN', code_pays: 'GN',
  code_phone_pays: '+224', ville: 'Conakry', quartier: null, adresse: null,
  specialite: null, tarif_horaire: null, notes: null, reference: 'REF',
  is_active: true, nom_complet: '', type_label: null,
  created_at: '', updated_at: '', deleted_at: null,
};

const mockPrestataires: Prestataire[] = [
  { ...base, id: 1, nom: 'SY', prenom: 'Aly', type: 'machiniste', phone: '+224620000001', nom_complet: 'Aly SY' },
  { ...base, id: 2, nom: 'BAH', prenom: 'Ibra', type: 'fournisseur', phone: '+224620000002', nom_complet: 'Ibra BAH' },
];

const mockPacking: Packing = {
  id: 1, prestataire_id: 1, reference: 'PACK-001', date: '2026-02-05',
  nb_rouleaux: 890, prix_par_rouleau: 9, montant: 8010, statut: 'valide',
  facture_id: null, notes: null,
  created_at: '2026-02-05T10:00:00Z', updated_at: '2026-02-05T10:00:00Z', deleted_at: null,
};

describe('PackingFrom — formulaire', () => {
  let component: PackingFrom;
  let fixture: ComponentFixture<PackingFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackingFrom, NoopAnimationsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PackingFrom);
    component = fixture.componentInstance;
    component.prestataires = mockPrestataires;
    fixture.detectChanges();
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  // ── filteredPrestataires ─────────────────────────────────────────────────

  it('filteredPrestataires ne retourne que les machinistes', () => {
    const filtered = component.filteredPrestataires;
    expect(filtered.length).toBe(1);
    expect(filtered[0].type).toBe('machiniste');
  });

  it('filteredPrestataires inclut le prestataire sélectionné même si non-machiniste', () => {
    component.model.prestataire_id = 2;
    const filtered = component.filteredPrestataires;
    expect(filtered.some(p => p.id === 2)).toBeTrue();
  });

  // ── statutOptions ────────────────────────────────────────────────────────

  it('statutOptions contient 3 options (a_valider, valide, annule)', () => {
    expect(component.statutOptions.length).toBe(3);
    const values = component.statutOptions.map(o => o.value);
    expect(values).toContain('a_valider');
    expect(values).toContain('valide');
    expect(values).toContain('annule');
  });

  it('statutOptions a des labels en français', () => {
    const valide = component.statutOptions.find(o => o.value === 'valide');
    expect(valide?.label).toBe('Validé');
  });

  // ── calculateMontant ─────────────────────────────────────────────────────

  it('onPrixOrQuantityChange() calcule correctement le montant', () => {
    component.model.nb_rouleaux = 100;
    component.model.prix_par_rouleau = 9;
    component.onPrixOrQuantityChange();
    expect(component.model.montant).toBe(900);
  });

  it('onPrixOrQuantityChange() ne calcule pas si nb_rouleaux est 0', () => {
    component.model.nb_rouleaux = 0;
    component.model.prix_par_rouleau = 9;
    component.model.montant = 500;
    component.onPrixOrQuantityChange();
    expect(component.model.montant).toBe(500);
  });

  // ── validation ───────────────────────────────────────────────────────────

  it('isValid() retourne false si prestataire_id manquant', () => {
    component.model.prestataire_id = undefined;
    component.model.date = new Date();
    component.model.nb_rouleaux = 10;
    component.model.prix_par_rouleau = 9;
    expect(component.isValid()).toBeFalse();
  });

  it('isValid() retourne false si date manquante', () => {
    component.model.prestataire_id = 1;
    component.model.date = null;
    component.model.nb_rouleaux = 10;
    component.model.prix_par_rouleau = 9;
    expect(component.isValid()).toBeFalse();
  });

  it('isValid() retourne false si nb_rouleaux = 0', () => {
    component.model.prestataire_id = 1;
    component.model.date = new Date();
    component.model.nb_rouleaux = 0;
    component.model.prix_par_rouleau = 9;
    expect(component.isValid()).toBeFalse();
  });

  it('isValid() retourne false si prix_par_rouleau = 0', () => {
    component.model.prestataire_id = 1;
    component.model.date = new Date();
    component.model.nb_rouleaux = 10;
    component.model.prix_par_rouleau = 0;
    expect(component.isValid()).toBeFalse();
  });

  it('isValid() retourne true si tous les champs sont remplis', () => {
    component.model.prestataire_id = 1;
    component.model.date = new Date();
    component.model.nb_rouleaux = 10;
    component.model.prix_par_rouleau = 9;
    expect(component.isValid()).toBeTrue();
  });

  // ── submit en mode create ────────────────────────────────────────────────

  it('onSubmit() en mode create émet le DTO sans statut si formulaire valide', () => {
    component.mode = 'create';
    component.model.prestataire_id = 1;
    component.model.date = new Date('2026-02-05');
    component.model.nb_rouleaux = 100;
    component.model.prix_par_rouleau = 9;

    let emitted: any;
    component.submitForm.subscribe(dto => (emitted = dto));
    component.onSubmit();

    expect(emitted).toBeDefined();
    expect(emitted.prestataire_id).toBe(1);
    expect(emitted.nb_rouleaux).toBe(100);
    expect(emitted.statut).toBeUndefined();
  });

  it('onSubmit() en mode create ne soumet pas si formulaire invalide', () => {
    component.mode = 'create';
    component.model.prestataire_id = undefined;

    let emitted = false;
    component.submitForm.subscribe(() => (emitted = true));
    component.onSubmit();

    expect(emitted).toBeFalse();
    expect(component.submitted).toBeTrue();
  });

  // ── submit en mode edit ──────────────────────────────────────────────────

  it('onSubmit() en mode edit inclut le statut dans le DTO', () => {
    component.mode = 'edit';
    component.model.prestataire_id = 1;
    component.model.date = new Date('2026-02-05');
    component.model.nb_rouleaux = 100;
    component.model.prix_par_rouleau = 9;
    component.model.statut = 'a_valider';

    let emitted: any;
    component.submitForm.subscribe(dto => (emitted = dto));
    component.onSubmit();

    expect(emitted.statut).toBe('a_valider');
  });

  // ── ngOnInit avec initialData ────────────────────────────────────────────

  it('ngOnInit() avec initialData charge les valeurs du packing', () => {
    component.initialData = mockPacking;
    component.ngOnInit();

    expect(component.model.prestataire_id).toBe(1);
    expect(component.model.nb_rouleaux).toBe(890);
    expect(component.model.prix_par_rouleau).toBe(9);
    expect(component.model.statut).toBe('valide');
  });

  it('ngOnInit() en mode create avec defaultPrixRouleau initialise le prix', () => {
    component.mode = 'create';
    component.defaultPrixRouleau = 12;
    component.ngOnInit();
    expect(component.model.prix_par_rouleau).toBe(12);
  });

  // ── cancel ───────────────────────────────────────────────────────────────

  it('onCancel() émet l\'événement cancel', () => {
    let cancelled = false;
    component.cancel.subscribe(() => (cancelled = true));
    component.onCancel();
    expect(cancelled).toBeTrue();
  });

  // ── fieldsDisabled ───────────────────────────────────────────────────────

  it('fieldsDisabled est true quand loading=true', () => {
    component.loading = true;
    expect(component.fieldsDisabled).toBeTrue();
  });

  it('fieldsDisabled est false quand loading=false', () => {
    component.loading = false;
    expect(component.fieldsDisabled).toBeFalse();
  });
});
