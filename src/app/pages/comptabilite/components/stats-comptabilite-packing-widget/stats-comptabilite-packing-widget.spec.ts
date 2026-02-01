import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComptabilitePackingWidget } from './stats-comptabilite-packing-widget';

describe('StatsComptabilitePackingWidget', () => {
  let component: StatsComptabilitePackingWidget;
  let fixture: ComponentFixture<StatsComptabilitePackingWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsComptabilitePackingWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsComptabilitePackingWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
