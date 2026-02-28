import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatairesFrom } from './prestataires-from';

describe('PrestatairesFrom', () => {
  let component: PrestatairesFrom;
  let fixture: ComponentFixture<PrestatairesFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestatairesFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestatairesFrom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
