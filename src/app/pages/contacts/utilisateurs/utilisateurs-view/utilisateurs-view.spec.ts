import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursView } from './utilisateurs-view';

describe('UtilisateursView', () => {
  let component: UtilisateursView;
  let fixture: ComponentFixture<UtilisateursView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateursView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
