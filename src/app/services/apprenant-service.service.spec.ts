import { TestBed } from '@angular/core/testing';

import { ApprenantServiceService } from './apprenant-service.service';

describe('ApprenantServiceService', () => {
  let service: ApprenantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprenantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
