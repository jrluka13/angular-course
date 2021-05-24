import { TestBed } from '@angular/core/testing';

import { LogNameService } from './log-name.service';

describe('LogNameService', () => {
  let service: LogNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
