import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prestateurs } from './prestateurs-liste';

describe('Prestateurs', () => {
  let component: Prestateurs;
  let fixture: ComponentFixture<Prestateurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prestateurs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prestateurs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
