import { TestBed } from '@angular/core/testing';

import { GvariableService } from './gvariable.service';

describe('GvariableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GvariableService = TestBed.get(GvariableService);
    expect(service).toBeTruthy();
  });
});
