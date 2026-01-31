import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPaiement } from './packing-paiement';

describe('PackingPaiement', () => {
  let component: PackingPaiement;
  let fixture: ComponentFixture<PackingPaiement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackingPaiement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackingPaiement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
