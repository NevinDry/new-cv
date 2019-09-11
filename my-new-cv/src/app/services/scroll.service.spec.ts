import { TestBed } from '@angular/core/testing';

import { ScrollService } from './scroll.service';

describe('ScrollServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollService = TestBed.get(ScrollService);
    expect(service).toBeTruthy();
  });
});
