import { TestBed } from '@angular/core/testing';

import { PackingPaiementService } from './packing-paiement.service';

describe('PackingPaiementService', () => {
  let service: PackingPaiementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackingPaiementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
