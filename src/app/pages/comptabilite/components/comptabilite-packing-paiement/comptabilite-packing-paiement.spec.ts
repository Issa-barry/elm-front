import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptabilitePackingPaiement } from './comptabilite-packing-paiement';

describe('ComptabilitePackingPaiement', () => {
  let component: ComptabilitePackingPaiement;
  let fixture: ComponentFixture<ComptabilitePackingPaiement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComptabilitePackingPaiement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptabilitePackingPaiement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
