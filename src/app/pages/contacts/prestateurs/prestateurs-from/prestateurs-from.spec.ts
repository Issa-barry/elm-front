import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestateursFrom } from './prestateurs-from';

describe('PrestateursFrom', () => {
  let component: PrestateursFrom;
  let fixture: ComponentFixture<PrestateursFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestateursFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestateursFrom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
