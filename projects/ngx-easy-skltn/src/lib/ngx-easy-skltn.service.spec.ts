import { TestBed } from '@angular/core/testing';

import { NgxEasySkltnService } from './ngx-easy-skltn.service';

describe('NgxEasySkltnService', () => {
  let service: NgxEasySkltnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEasySkltnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
