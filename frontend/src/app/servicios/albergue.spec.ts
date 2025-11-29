import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlbergueService } from './albergue'; // ← Nombre CORRECTO

describe('AlbergueService', () => { // ← Nombre CORRECTO
  let service: AlbergueService; // ← Nombre CORRECTO

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] // ← Agregar esto
    });
    service = TestBed.inject(AlbergueService); // ← Nombre CORRECTO
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});