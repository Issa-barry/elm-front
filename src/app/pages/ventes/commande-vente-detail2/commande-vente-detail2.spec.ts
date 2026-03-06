import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { CommandeVente } from '@/models/vente.model';
import { CommandeVenteService } from '@/services/ventes/commande-vente.service';
import { CommandeVenteDetail2 } from './commande-vente-detail2';

const mockCommande: CommandeVente = {
  id: 1,
  usine_id: 1,
  vehicule_id: 10,
  reference: 'CMD-001',
  total_commande: '150000.00',
  vehicule: {
    id: 10,
    nom_vehicule: 'Nen dow',
    immatriculation: 'GN-0001',
    livreur_principal: { nom: 'Diallo', prenom: 'Hassan' },
  },
  lignes: [
    {
      id: 1,
      commande_vente_id: 1,
      produit_id: 100,
      qte: 1,
      prix_usine_snapshot: 4000,
      prix_vente_snapshot: 5000,
      total_ligne: '5000.00',
      produit: { id: 100, nom: 'Pack de 30' },
    },
  ],
  facture: {
    id: 20,
    reference: 'FAC-001',
    montant_brut: '150000.00',
    montant_net: '150000.00',
    statut_facture: 'impayee',
    montant_encaisse: 0,
    montant_restant: 150000,
    encaissements: [],
  },
  created_at: '2026-03-06T00:00:00Z',
};

describe('CommandeVenteDetail2', () => {
  let component: CommandeVenteDetail2;
  let fixture: ComponentFixture<CommandeVenteDetail2>;
  let commandeService: jasmine.SpyObj<CommandeVenteService>;

  beforeEach(async () => {
    commandeService = jasmine.createSpyObj('CommandeVenteService', ['getCommande']);
    commandeService.getCommande.and.returnValue(
      of({ success: true, message: '', data: mockCommande } as any)
    );

    await TestBed.configureTestingModule({
      imports: [CommandeVenteDetail2],
      providers: [
        { provide: CommandeVenteService, useValue: commandeService },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CommandeVenteDetail2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loads commande from route id', () => {
    expect(commandeService.getCommande).toHaveBeenCalledWith(1);
    expect(component.commande()?.id).toBe(1);
    expect(component.products().length).toBe(1);
  });
});
