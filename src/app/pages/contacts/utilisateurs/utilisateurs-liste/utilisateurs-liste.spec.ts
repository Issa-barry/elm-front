import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursListe } from './utilisateurs-liste';

describe('UtilisateursListe', () => {
  let component: UtilisateursListe;
  let fixture: ComponentFixture<UtilisateursListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateursListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
