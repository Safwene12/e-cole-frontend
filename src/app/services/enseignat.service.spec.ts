import { TestBed } from '@angular/core/testing';

import { EnseignatService } from './enseignat.service';

describe('EnseignatService', () => {
  let service: EnseignatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnseignatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
