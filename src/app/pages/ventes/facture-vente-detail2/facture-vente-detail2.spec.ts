import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureVenteDetail2 } from './facture-vente-detail2';

describe('FactureVenteDetail2', () => {
  let component: FactureVenteDetail2;
  let fixture: ComponentFixture<FactureVenteDetail2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureVenteDetail2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureVenteDetail2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
