import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatairesNew } from './prestataires-new';

describe('PrestatairesNew', () => {
  let component: PrestatairesNew;
  let fixture: ComponentFixture<PrestatairesNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestatairesNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestatairesNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
