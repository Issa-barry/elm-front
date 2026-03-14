import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureVenteListe2 } from './facture-vente-liste2';

describe('FactureVenteListe2', () => {
  let component: FactureVenteListe2;
  let fixture: ComponentFixture<FactureVenteListe2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureVenteListe2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureVenteListe2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
