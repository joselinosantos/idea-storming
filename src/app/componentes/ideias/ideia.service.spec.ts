import { TestBed } from '@angular/core/testing';

import { IdeiaService } from './ideia.service';

describe('IdeiaService', () => {
  let service: IdeiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
