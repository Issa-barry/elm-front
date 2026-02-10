import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptabilitePackingDetail } from './comptabilite-packing-detail';

describe('ComptabilitePackingDetail', () => {
  let component: ComptabilitePackingDetail;
  let fixture: ComponentFixture<ComptabilitePackingDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComptabilitePackingDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptabilitePackingDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
