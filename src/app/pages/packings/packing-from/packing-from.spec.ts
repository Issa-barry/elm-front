import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingFrom } from './packing-from';

describe('PackingFrom', () => {
  let component: PackingFrom;
  let fixture: ComponentFixture<PackingFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackingFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackingFrom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
