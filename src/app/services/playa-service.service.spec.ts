import { TestBed, inject } from '@angular/core/testing';

import { PlayaServiceService } from './playa-service.service';

describe('PlayaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayaServiceService]
    });
  });

  it('should be created', inject([PlayaServiceService], (service: PlayaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
