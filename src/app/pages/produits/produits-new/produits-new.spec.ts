import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsNew } from './produits-new';

describe('ProduitsNew', () => {
  let component: ProduitsNew;
  let fixture: ComponentFixture<ProduitsNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
