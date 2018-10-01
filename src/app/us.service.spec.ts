import { TestBed } from '@angular/core/testing';

import { UsService } from './us.service';

describe('UsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsService = TestBed.get(UsService);
    expect(service).toBeTruthy();
  });
});
