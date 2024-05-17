import { TestBed } from '@angular/core/testing';

import { SmartUnitsService } from './smart-units.service';

describe('SmartUnitsService', () => {
  let service: SmartUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
