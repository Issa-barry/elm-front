import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptabilitePackingPaiementDialog } from './comptabilite-packing-paiement-dialog';

describe('ComptabilitePackingPaiementDialog', () => {
  let component: ComptabilitePackingPaiementDialog;
  let fixture: ComponentFixture<ComptabilitePackingPaiementDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComptabilitePackingPaiementDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptabilitePackingPaiementDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
