import { TestBed } from '@angular/core/testing';

import { Guarantor } from './guarantor';

describe('Guarantor', () => {
  let service: Guarantor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Guarantor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
