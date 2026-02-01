import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptabilitePackingTableau } from './comptabilite-packing-tableau';

describe('ComptabilitePackingTableau', () => {
  let component: ComptabilitePackingTableau;
  let fixture: ComponentFixture<ComptabilitePackingTableau>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComptabilitePackingTableau]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptabilitePackingTableau);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
