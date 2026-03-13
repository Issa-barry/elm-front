import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landing2 } from './landing2';

describe('Landing2', () => {
  let component: Landing2;
  let fixture: ComponentFixture<Landing2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landing2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landing2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
