import { TestBed } from '@angular/core/testing';

import { ComingSoonCrudService } from './coming-soon-crud.service';

describe('ComingSoonCrudService', () => {
  let service: ComingSoonCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComingSoonCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
