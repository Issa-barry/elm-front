import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { PackingService } from '@/services/packing/packing.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { MessageService } from 'primeng/api';

import { PackingFacture } from './packing-facture';

describe('PackingFacture', () => {
  let component: PackingFacture;
  let fixture: ComponentFixture<PackingFacture>;

  beforeEach(async () => {
    const packingServiceMock = {
      getPacking: jasmine.createSpy('getPacking').and.returnValue(of({ data: {} })),
      getVersements: jasmine.createSpy('getVersements').and.returnValue(of({ data: { versements: [] } })),
    };

    const usineContextMock = {
      currentUsine: () => ({ nom: 'Usine Test' }),
    };

    await TestBed.configureTestingModule({
      imports: [PackingFacture],
      providers: [
        { provide: PackingService, useValue: packingServiceMock },
        { provide: UsineContextService, useValue: usineContextMock },
        { provide: MessageService, useValue: { add: jasmine.createSpy('add') } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => (key === 'id' ? '1' : null),
            }),
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackingFacture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
