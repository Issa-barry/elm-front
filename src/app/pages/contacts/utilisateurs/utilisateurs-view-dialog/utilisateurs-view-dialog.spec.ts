import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursViewDialog } from './utilisateurs-view-dialog';

describe('UtilisateursViewDialog', () => {
  let component: UtilisateursViewDialog;
  let fixture: ComponentFixture<UtilisateursViewDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateursViewDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursViewDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
