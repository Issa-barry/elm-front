import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatairesListe } from './prestataires-liste';

describe('PrestatairesListe', () => {
  let component: PrestatairesListe;
  let fixture: ComponentFixture<PrestatairesListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestatairesListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestatairesListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
