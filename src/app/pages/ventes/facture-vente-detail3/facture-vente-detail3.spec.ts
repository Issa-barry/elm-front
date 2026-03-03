import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureVenteDetail3 } from './facture-vente-detail3';

describe('FactureVenteDetail3', () => {
  let component: FactureVenteDetail3;
  let fixture: ComponentFixture<FactureVenteDetail3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureVenteDetail3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureVenteDetail3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
