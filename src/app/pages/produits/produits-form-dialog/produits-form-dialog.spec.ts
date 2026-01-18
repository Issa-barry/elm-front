import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsFormDialog } from './produits-form-dialog';

describe('ProduitsFormDialog', () => {
  let component: ProduitsFormDialog;
  let fixture: ComponentFixture<ProduitsFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsFormDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsFormDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
