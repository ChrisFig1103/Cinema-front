import { TestBed } from '@angular/core/testing';

import { BillboardCrudService } from './billboard-crud.service';

describe('BillboardCrudService', () => {
  let service: BillboardCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillboardCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
