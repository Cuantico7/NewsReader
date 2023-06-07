import { TestBed } from '@angular/core/testing';

import { UserControllService } from './user-controll.service';

describe('UserControllService', () => {
  let service: UserControllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserControllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
