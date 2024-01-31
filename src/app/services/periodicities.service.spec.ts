import { TestBed } from '@angular/core/testing';

import { PeriodicitiesService } from './periodicities.service';

describe('PeriodicitiesService', () => {
  let service: PeriodicitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodicitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
