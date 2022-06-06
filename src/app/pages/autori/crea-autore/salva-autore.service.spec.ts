import { TestBed } from '@angular/core/testing';

import { SalvaAutoreService } from './salva-autore.service';

describe('SalvaAutoreService', () => {
  let service: SalvaAutoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvaAutoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
