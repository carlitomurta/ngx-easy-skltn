import { TestBed } from '@angular/core/testing';

import { NgxSmartSkltnService } from './ngx-easy-skltn.service';

describe('NgxSmartSkltnService', () => {
  let service: NgxSmartSkltnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSmartSkltnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
