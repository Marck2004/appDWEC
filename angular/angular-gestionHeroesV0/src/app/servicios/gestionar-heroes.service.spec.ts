import { TestBed } from '@angular/core/testing';

import { GestionarHeroesService } from './gestionar-heroes.service';

describe('GestionarHeroesService', () => {
  let service: GestionarHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
