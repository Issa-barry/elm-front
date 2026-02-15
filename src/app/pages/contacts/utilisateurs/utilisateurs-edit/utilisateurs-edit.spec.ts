import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursEdit } from './utilisateurs-edit';

describe('UtilisateursEdit', () => {
  let component: UtilisateursEdit;
  let fixture: ComponentFixture<UtilisateursEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateursEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
