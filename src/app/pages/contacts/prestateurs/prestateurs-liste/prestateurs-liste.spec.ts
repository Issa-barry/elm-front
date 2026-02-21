import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestateursListe } from './prestateurs-liste';

describe('PrestateursListe', () => {
  let component: PrestateursListe;
  let fixture: ComponentFixture<PrestateursListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestateursListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestateursListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
