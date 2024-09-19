import { TestBed } from '@angular/core/testing';

import { InformaService } from './informa.service';

describe('InformaService', () => {
  let service: InformaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
