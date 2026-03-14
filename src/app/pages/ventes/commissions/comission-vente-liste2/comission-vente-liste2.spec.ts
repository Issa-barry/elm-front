import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissionVenteListe2 } from './comission-vente-liste2';

describe('ComissionVenteListe2', () => {
  let component: ComissionVenteListe2;
  let fixture: ComponentFixture<ComissionVenteListe2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComissionVenteListe2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComissionVenteListe2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
