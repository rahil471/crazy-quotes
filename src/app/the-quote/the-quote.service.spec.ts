import { TestBed, inject } from '@angular/core/testing';

import { TheQuoteService } from './the-quote.service';

describe('TheQuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheQuoteService]
    });
  });

  it('should be created', inject([TheQuoteService], (service: TheQuoteService) => {
    expect(service).toBeTruthy();
  }));
});
