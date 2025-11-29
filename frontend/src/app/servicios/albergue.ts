import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbergueService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  registrarPerro(perro: any) {
    return this.http.post(`${this.apiUrl}/perros`, perro);
  }

  registrarDonacion(donacion: any) {
    return this.http.post(`${this.apiUrl}/donaciones`, donacion);
  }
}