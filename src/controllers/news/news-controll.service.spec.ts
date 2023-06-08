import { TestBed } from '@angular/core/testing';

import { NewsControllService } from './news-controll.service';

describe('NewsControllService', () => {
  let service: NewsControllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsControllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
