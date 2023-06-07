import { TestBed } from '@angular/core/testing';

import { NewsModelService } from './news-model.service';

describe('NewsModelService', () => {
  let service: NewsModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
