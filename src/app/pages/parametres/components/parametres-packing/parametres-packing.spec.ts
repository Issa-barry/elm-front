import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresPacking } from './parametres-packing';

describe('ParametresPacking', () => {
  let component: ParametresPacking;
  let fixture: ComponentFixture<ParametresPacking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametresPacking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametresPacking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
