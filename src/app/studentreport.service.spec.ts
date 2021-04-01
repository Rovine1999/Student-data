import { TestBed } from '@angular/core/testing';

import { StudentreportService } from './studentreport.service';

describe('StudentreportService', () => {
  let service: StudentreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
