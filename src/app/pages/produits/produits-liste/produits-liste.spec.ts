import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsListe } from './produits-liste';

describe('ProduitsListe', () => {
  let component: ProduitsListe;
  let fixture: ComponentFixture<ProduitsListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
