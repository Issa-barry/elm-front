import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptabilitePackingListe } from './comptabilite-packing-liste';

describe('ComptabilitePackingListe', () => {
  let component: ComptabilitePackingListe;
  let fixture: ComponentFixture<ComptabilitePackingListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComptabilitePackingListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptabilitePackingListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
