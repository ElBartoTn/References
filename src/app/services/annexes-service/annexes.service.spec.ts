import { TestBed } from '@angular/core/testing';

import { AnnexesService } from './annexes.service';

describe('AnnexesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnexesService = TestBed.get(AnnexesService);
    expect(service).toBeTruthy();
  });
});
