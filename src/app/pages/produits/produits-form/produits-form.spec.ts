import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsForm } from './produits-form';
import { Produit } from '@/models/produit.model';

describe('ProduitsForm', () => {
  let component: ProduitsForm;
  let fixture: ComponentFixture<ProduitsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('seuil_alerte_stock', () => {
    it('should show seuil alerte stock only when product is critical and type has stock', () => {
      component.product.is_critique = true;
      component.product.type = 'materiel';
      expect(component.isSeuilAlerteStockVisible()).toBe(true);
      component.product.type = 'fabricable';
      expect(component.isSeuilAlerteStockVisible()).toBe(true);
      component.product.type = 'achat_vente';
      expect(component.isSeuilAlerteStockVisible()).toBe(true);

      component.product.is_critique = false;
      component.product.type = 'materiel';
      expect(component.isSeuilAlerteStockVisible()).toBe(false);
    });

    it('should hide seuil alerte stock for type service or when not critical', () => {
      component.product.is_critique = true;
      component.product.type = 'service';
      expect(component.isSeuilAlerteStockVisible()).toBe(false);
      expect(component.isSeuilAlerteStockDisabled()).toBe(true);

      component.product.is_critique = false;
      component.product.type = 'materiel';
      expect(component.isSeuilAlerteStockVisible()).toBe(false);
    });

    it('should consider seuil valid when null or undefined', () => {
      component.product.seuil_alerte_stock = null;
      expect(component.isSeuilAlerteStockInvalid()).toBe(false);
      component.product.seuil_alerte_stock = undefined as any;
      expect(component.isSeuilAlerteStockInvalid()).toBe(false);
    });

    it('should invalidate seuil when not integer or negative', () => {
      component.product.seuil_alerte_stock = 1.5 as any;
      expect(component.isSeuilAlerteStockInvalid()).toBe(true);
      component.product.seuil_alerte_stock = -1;
      expect(component.isSeuilAlerteStockInvalid()).toBe(true);
      component.product.seuil_alerte_stock = 0;
      expect(component.isSeuilAlerteStockInvalid()).toBe(false);
      component.product.seuil_alerte_stock = 5;
      expect(component.isSeuilAlerteStockInvalid()).toBe(false);
    });

    it('should emit null for seuil_alerte_stock when empty on submit', () => {
      component.mode = 'create';
      component.product.nom = 'Test';
      component.product.type = 'materiel';
      component.product.qte_stock = 0;
      component.product.seuil_alerte_stock = null;
      let emitted: any;
      component.submitForm.subscribe((dto) => { emitted = dto; });
      component.onSubmit();
      expect(emitted.seuil_alerte_stock).toBeNull();
    });

    it('should emit integer for seuil_alerte_stock when set on submit', () => {
      component.mode = 'create';
      component.product.nom = 'Test';
      component.product.type = 'materiel';
      component.product.qte_stock = 0;
      component.product.seuil_alerte_stock = 5;
      let emitted: any;
      component.submitForm.subscribe((dto) => { emitted = dto; });
      component.onSubmit();
      expect(emitted.seuil_alerte_stock).toBe(5);
    });

    it('should prefill seuil_alerte_stock in edit from initialData', () => {
      component.mode = 'edit';
      component.initialData = new Produit({ id: 1, nom: 'P', type: 'materiel', qte_stock: 10, seuil_alerte_stock: 3 });
      component.ngOnInit();
      expect(component.product.seuil_alerte_stock).toBe(3);
    });
  });
});
