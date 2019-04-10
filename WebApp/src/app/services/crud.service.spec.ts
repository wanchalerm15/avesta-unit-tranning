import { TestBed } from '@angular/core/testing';

import { CRUDService } from './crud.service';
import { TestingModule } from '../testings/testing.module';

describe('CRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule(TestingModule({})));

  it('should be created', () => {
    const service: CRUDService = TestBed.get(CRUDService);
    expect(service).toBeTruthy();
  });
});
