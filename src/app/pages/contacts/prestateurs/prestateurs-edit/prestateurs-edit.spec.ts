import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestateursEdit } from './prestateurs-edit';

describe('PrestateursEdit', () => {
  let component: PrestateursEdit;
  let fixture: ComponentFixture<PrestateursEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestateursEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestateursEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
