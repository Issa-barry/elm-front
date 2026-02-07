import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresListe } from './parametres-liste';

describe('ParametresListe', () => {
  let component: ParametresListe;
  let fixture: ComponentFixture<ParametresListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametresListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametresListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
