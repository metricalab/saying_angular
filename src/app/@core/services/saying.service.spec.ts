import { TestBed } from '@angular/core/testing';

import { SayingService } from './saying.service';

describe('SayingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SayingService = TestBed.get(SayingService);
    expect(service).toBeTruthy();
  });
});
