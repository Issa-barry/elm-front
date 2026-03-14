import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsListe } from './produits-liste';
import { Produit } from '@/models/produit.model';

describe('ProduitsListe', () => {
  let component: ProduitsListe;
  let fixture: ComponentFixture<ProduitsListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide Critique alert when product is critical but threshold is not reached', () => {
    const produit = new Produit({
      is_critique: true,
      qte_stock: 950,
      seuil_alerte_stock: 10,
      statut: 'actif',
      in_stock: true,
      last_stockout_notified_at: null
    });

    expect(component.shouldShowCritiqueAlert(produit)).toBeFalse();
  });

  it('should show Critique alert when product is critical and threshold is reached', () => {
    const produit = new Produit({
      is_critique: true,
      qte_stock: 5,
      seuil_alerte_stock: 10,
      statut: 'actif',
      in_stock: true,
      last_stockout_notified_at: null
    });

    expect(component.shouldShowCritiqueAlert(produit)).toBeTrue();
  });
});
