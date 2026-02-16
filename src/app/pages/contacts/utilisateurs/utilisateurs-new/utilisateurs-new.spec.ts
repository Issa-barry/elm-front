import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursNew } from './utilisateurs-new';

describe('UtilisateursNew', () => {
  let component: UtilisateursNew;
  let fixture: ComponentFixture<UtilisateursNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateursNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
