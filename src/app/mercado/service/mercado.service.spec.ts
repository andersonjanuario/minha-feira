import { TestBed, inject } from '@angular/core/testing';

import { MercadoService } from './mercado.service';

describe('MercadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MercadoService]
    });
  });

  it('should be created', inject([MercadoService], (service: MercadoService) => {
    expect(service).toBeTruthy();
  }));
});
