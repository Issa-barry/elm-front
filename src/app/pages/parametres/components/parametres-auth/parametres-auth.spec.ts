import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresAuth } from './parametres-auth';

describe('ParametresAuth', () => {
  let component: ParametresAuth;
  let fixture: ComponentFixture<ParametresAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametresAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametresAuth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
