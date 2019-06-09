import { TestBed } from '@angular/core/testing';

import { RequestLeaveService } from './request-leave.service';

describe('RequestLeaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestLeaveService = TestBed.get(RequestLeaveService);
    expect(service).toBeTruthy();
  });
});
