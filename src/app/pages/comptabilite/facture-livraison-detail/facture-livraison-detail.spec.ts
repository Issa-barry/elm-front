import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { FactureLivraisonDetail } from './facture-livraison-detail';
import { FactureLivraisonService } from '@/services/livraisons/facture-livraison.service';
import { AuthService } from '@/services/auth/auth.service';
import { FactureLivraison, CommissionCalcul } from '@/models/livraison.model';

const mockFacture: FactureLivraison = {
  id: 1,
  vehicule_id: 10,
  vehicule: { id: 10, marque: 'Toyota', modele: 'Corolla', immatriculation: 'AB-123-CD' },
  montant: 500000,
  montant_encaisse: 0,
  montant_restant: 500000,
  statut: 'impayee',
  date_facture: '2026-02-01',
  created_at: '2026-02-01T10:00:00Z',
};

const mockCommissionNonPayee: CommissionCalcul = {
  montant_net: 480000,
  montant_proprietaire: 288000,
  montant_livreur: 192000,
  part_proprietaire_pct: 60,
  part_livreur_pct: 40,
  est_payee: false,
};

const mockCommissionPayee: CommissionCalcul = {
  ...mockCommissionNonPayee,
  est_payee: true,
};

describe('FactureLivraisonDetail — Paiement commission', () => {
  let component: FactureLivraisonDetail;
  let fixture: ComponentFixture<FactureLivraisonDetail>;
  let factureService: jasmine.SpyObj<FactureLivraisonService>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  // Spy sur le vrai MessageService de l'injecteur composant (requis par p-toast)
  let messageServiceAddSpy: jasmine.Spy;

  beforeEach(async () => {
    factureService = jasmine.createSpyObj('FactureLivraisonService', [
      'getFacture',
      'getCommissionCalcul',
      'payerCommission',
    ]);
    authService = jasmine.createSpyObj('AuthService', ['hasPermission']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    factureService.getFacture.and.returnValue(
      of({ success: true, message: '', data: mockFacture })
    );
    authService.hasPermission.and.returnValue(true);

    await TestBed.configureTestingModule({
      imports: [FactureLivraisonDetail, HttpClientTestingModule, NoopAnimationsModule],
      providers: [
        { provide: FactureLivraisonService, useValue: factureService },
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FactureLivraisonDetail);
    component = fixture.componentInstance;
    const ms = fixture.debugElement.injector.get(MessageService);
    messageServiceAddSpy = spyOn(ms, 'add');
    fixture.detectChanges();
  });

  it('devrait créer le composant', () => {
    expect(component).toBeTruthy();
  });

  // ── Règle métier : canPayCommission ────────────────────────────────────

  it('canPayCommission = false si facture IMPAYEE et commission non payée', () => {
    component.facture = { ...mockFacture, statut: 'impayee' };
    component.commission = mockCommissionNonPayee;
    expect(component.canPayCommission).toBeFalse();
  });

  it('canPayCommission = false si facture PARTIELLE et commission non payée', () => {
    component.facture = { ...mockFacture, statut: 'partielle' };
    component.commission = mockCommissionNonPayee;
    expect(component.canPayCommission).toBeFalse();
  });

  it('canPayCommission = false si facture ANNULEE et commission non payée', () => {
    component.facture = { ...mockFacture, statut: 'annulee' };
    component.commission = mockCommissionNonPayee;
    expect(component.canPayCommission).toBeFalse();
  });

  it('canPayCommission = false si facture PAYEE mais COMMISSION DÉJÀ PAYÉE', () => {
    component.facture = { ...mockFacture, statut: 'payee' };
    component.commission = mockCommissionPayee;
    expect(component.canPayCommission).toBeFalse();
  });

  it('canPayCommission = false si facture PAYEE mais commission = null (pas encore calculée)', () => {
    component.facture = { ...mockFacture, statut: 'payee' };
    component.commission = null;
    expect(component.canPayCommission).toBeFalse();
  });

  it('canPayCommission = TRUE si facture PAYEE et commission NON payée', () => {
    component.facture = { ...mockFacture, statut: 'payee' };
    component.commission = mockCommissionNonPayee;
    expect(component.canPayCommission).toBeTrue();
  });

  // ── Calcul commission ─────────────────────────────────────────────────

  it('calculerCommission appelle getCommissionCalcul', () => {
    factureService.getCommissionCalcul.and.returnValue(
      of({ success: true, message: '', data: mockCommissionNonPayee })
    );
    component.calculerCommission();
    expect(factureService.getCommissionCalcul).toHaveBeenCalledWith(1);
    expect(component.commission).toEqual(mockCommissionNonPayee);
  });

  it('gère l\'erreur lors du calcul de commission', () => {
    factureService.getCommissionCalcul.and.returnValue(
      throwError(() => ({ status: 500, error: {} }))
    );
    component.calculerCommission();
    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'error' })
    );
  });

  // ── Paiement commission ───────────────────────────────────────────────

  it('onPayerCommission appelle payerCommission avec le bon factureId', () => {
    factureService.payerCommission.and.returnValue(
      of({ success: true, message: 'OK', data: null })
    );
    factureService.getFacture.and.returnValue(
      of({ success: true, message: '', data: { ...mockFacture, statut: 'payee' } })
    );
    component.facture = { ...mockFacture, statut: 'payee' };
    component.commission = mockCommissionNonPayee;
    component.commissionForm.patchValue({ mode_paiement: 'especes' });

    component.onPayerCommission();

    expect(factureService.payerCommission).toHaveBeenCalledWith(
      1,
      jasmine.objectContaining({ mode_paiement: 'especes' })
    );
  });

  it('affiche un toast succès après paiement commission', () => {
    factureService.payerCommission.and.returnValue(
      of({ success: true, message: 'OK', data: null })
    );
    factureService.getFacture.and.returnValue(
      of({ success: true, message: '', data: mockFacture })
    );
    component.facture = { ...mockFacture, statut: 'payee' };
    component.commission = mockCommissionNonPayee;
    component.commissionForm.patchValue({ mode_paiement: 'virement' });

    component.onPayerCommission();

    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'success' })
    );
  });

  // ── Helpers ───────────────────────────────────────────────────────────

  it('progressPct = 0 si aucun encaissement', () => {
    component.facture = { ...mockFacture, montant: 500000, montant_encaisse: 0 };
    expect(component.progressPct).toBe(0);
  });

  it('progressPct = 50 si la moitié est encaissée', () => {
    component.facture = { ...mockFacture, montant: 500000, montant_encaisse: 250000 };
    expect(component.progressPct).toBe(50);
  });

  it('progressPct = 100 max si encaissé > montant', () => {
    component.facture = { ...mockFacture, montant: 500000, montant_encaisse: 600000 };
    expect(component.progressPct).toBe(100);
  });

  it('formatMontant formate correctement en GNF', () => {
    expect(component.formatMontant(500000)).toContain('GNF');
  });

  it('formatMontant retourne "—" pour null', () => {
    expect(component.formatMontant(null)).toBe('—');
  });
});
