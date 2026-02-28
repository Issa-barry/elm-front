import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatairesEdit } from './prestataires-edit';

describe('PrestatairesEdit', () => {
  let component: PrestatairesEdit;
  let fixture: ComponentFixture<PrestatairesEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestatairesEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestatairesEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
