import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsEdit } from './produits-edit';

describe('ProduitsEdit', () => {
  let component: ProduitsEdit;
  let fixture: ComponentFixture<ProduitsEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
