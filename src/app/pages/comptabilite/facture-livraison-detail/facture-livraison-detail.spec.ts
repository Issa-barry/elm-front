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
import { FactureVente, CommissionCalcul, PaiementCommission } from '@/models/vente.model';

const mockPaiementCommission: PaiementCommission = {
  id: 1,
  facture_vente_id: 1,
  commission_brute_totale: '200000.00',
  part_proprietaire_brute: '120000.00',
  part_livreur_brute: '80000.00',
  part_proprietaire_nette: '120000.00',
  part_livreur_nette: '80000.00',
  date_paiement: '2026-02-22',
  statut: 'paye',
};

const mockFacture: FactureVente = {
  id: 1,
  reference: 'FAC-VNT-20260222-0001',
  vehicule_id: 10,
  usine_id: 1,
  vehicule: { id: 10, nom_vehicule: 'Camion Alpha', immatriculation: 'AB-123-CD' },
  packs_charges: 200,
  montant_brut: '500000.00',
  montant_net: '500000.00',
  montant_encaisse: 0,
  montant_restant: 500000,
  statut_facture: 'impayee',
  snapshot_mode_commission: 'forfait',
  snapshot_valeur_commission: '1000.00',
  snapshot_pourcentage_proprietaire: '60.00',
  snapshot_pourcentage_livreur: '40.00',
  created_at: '2026-02-01T10:00:00Z',
};

const mockCommission: CommissionCalcul = {
  packs_charges: 200,
  mode_commission: 'forfait',
  valeur_commission_snapshot: 1000,
  commission_brute_totale: 200000,
  part_proprietaire_brute: 120000,
  part_livreur_brute: 80000,
  deductions_proprietaire: 0,
  deductions_livreur: 0,
  part_proprietaire_nette: 120000,
  part_livreur_nette: 80000,
};

describe('FactureLivraisonDetail — Paiement commission', () => {
  let component: FactureLivraisonDetail;
  let fixture: ComponentFixture<FactureLivraisonDetail>;
  let factureService: jasmine.SpyObj<FactureLivraisonService>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let messageServiceAddSpy: jasmine.Spy;

  beforeEach(async () => {
    factureService = jasmine.createSpyObj('FactureLivraisonService', [
      'getFacture',
      'getCommissionCalcul',
      'payerCommission',
      'createEncaissement',
      'annulerFacture',
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
  // La règle dépend de facture.statut_facture ET facture.paiement_commission

  it('canPayCommission = false si statut_facture IMPAYEE', () => {
    component.facture = { ...mockFacture, statut_facture: 'impayee' };
    expect(component.canPayCommission).toBeFalse();
  });

  it('canPayCommission = false si statut_facture PARTIEL', () => {
    component.facture = { ...mockFacture, statut_facture: 'partiel' };
    expect(component.canPayCommission).toBeFalse();
  });

  it('canPayCommission = false si statut_facture ANNULEE', () => {
    component.facture = { ...mockFacture, statut_facture: 'annulee' };
    expect(component.canPayCommission).toBeFalse();
  });

  it('canPayCommission = false si facture PAYEE mais commission déjà payée', () => {
    component.facture = {
      ...mockFacture,
      statut_facture: 'payee',
      paiement_commission: mockPaiementCommission,
    };
    expect(component.canPayCommission).toBeFalse();
  });

  it('canPayCommission = TRUE si facture PAYEE et pas de paiement_commission', () => {
    component.facture = { ...mockFacture, statut_facture: 'payee' };
    expect(component.canPayCommission).toBeTrue();
  });

  // ── Calcul commission ─────────────────────────────────────────────────

  it('calculerCommission appelle getCommissionCalcul', () => {
    factureService.getCommissionCalcul.and.returnValue(
      of({ success: true, message: '', data: mockCommission })
    );
    component.calculerCommission();
    expect(factureService.getCommissionCalcul).toHaveBeenCalledWith(1);
    expect(component.commission).toEqual(mockCommission);
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
      of({ success: true, message: 'OK', data: mockPaiementCommission })
    );
    factureService.getFacture.and.returnValue(
      of({
        success: true,
        message: '',
        data: { ...mockFacture, statut_facture: 'payee', paiement_commission: mockPaiementCommission },
      })
    );
    component.facture = { ...mockFacture, statut_facture: 'payee' };

    component.onPayerCommission();

    expect(factureService.payerCommission).toHaveBeenCalledWith(1, jasmine.any(Object));
  });

  it('affiche un toast succès après paiement commission', () => {
    factureService.payerCommission.and.returnValue(
      of({ success: true, message: 'OK', data: mockPaiementCommission })
    );
    factureService.getFacture.and.returnValue(
      of({ success: true, message: '', data: mockFacture })
    );
    component.facture = { ...mockFacture, statut_facture: 'payee' };

    component.onPayerCommission();

    expect(messageServiceAddSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({ severity: 'success' })
    );
  });

  // ── progressPct ───────────────────────────────────────────────────────

  it('progressPct = 0 si aucun encaissement', () => {
    component.facture = { ...mockFacture, montant_net: '500000.00', montant_encaisse: 0 };
    expect(component.progressPct).toBe(0);
  });

  it('progressPct = 50 si la moitié est encaissée', () => {
    component.facture = { ...mockFacture, montant_net: '500000.00', montant_encaisse: 250000 };
    expect(component.progressPct).toBe(50);
  });

  it('progressPct = 100 max si encaissé > montant net', () => {
    component.facture = { ...mockFacture, montant_net: '500000.00', montant_encaisse: 600000 };
    expect(component.progressPct).toBe(100);
  });

  it('formatMontant formate correctement en GNF', () => {
    expect(component.formatMontant(500000)).toContain('GNF');
  });

  it('formatMontant retourne "—" pour null', () => {
    expect(component.formatMontant(null)).toBe('—');
  });

  it('formatMontant accepte une string décimale', () => {
    expect(component.formatMontant('500000.00')).toContain('GNF');
  });
});
