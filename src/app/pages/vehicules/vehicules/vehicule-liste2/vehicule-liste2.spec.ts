import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeListe2 } from './vehicule-liste2';

describe('VehiculeListe2', () => {
  let component: VehiculeListe2;
  let fixture: ComponentFixture<VehiculeListe2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculeListe2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeListe2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
