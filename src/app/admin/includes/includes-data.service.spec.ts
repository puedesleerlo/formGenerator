import { TestBed } from '@angular/core/testing';

import { IncludesDataService } from './includes-data.service';

describe('IncludesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncludesDataService = TestBed.get(IncludesDataService);
    expect(service).toBeTruthy();
  });
});
