import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureVenteDetail4 } from './facture-vente-detail4';

describe('FactureVenteDetail4', () => {
  let component: FactureVenteDetail4;
  let fixture: ComponentFixture<FactureVenteDetail4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureVenteDetail4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureVenteDetail4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
