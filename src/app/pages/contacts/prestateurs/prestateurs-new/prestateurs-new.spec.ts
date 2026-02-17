import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestateursNew } from './prestateurs-new';

describe('PrestateursNew', () => {
  let component: PrestateursNew;
  let fixture: ComponentFixture<PrestateursNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestateursNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestateursNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
