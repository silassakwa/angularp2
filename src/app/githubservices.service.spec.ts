import { TestBed } from '@angular/core/testing';

import { GithubservicesService } from './githubservices.service';

describe('GithubservicesService', () => {
  let service: GithubservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
