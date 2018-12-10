import { TestBed } from '@angular/core/testing';

import { ReferentialService } from './referential.service';

describe('ReferentialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferentialService = TestBed.get(ReferentialService);
    expect(service).toBeTruthy();
  });
});
