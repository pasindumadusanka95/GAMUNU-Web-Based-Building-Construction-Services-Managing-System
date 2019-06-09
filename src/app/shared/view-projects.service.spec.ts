import { TestBed } from '@angular/core/testing';

import { ViewProjectsService } from './view-projects.service';

describe('ViewProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewProjectsService = TestBed.get(ViewProjectsService);
    expect(service).toBeTruthy();
  });
});
