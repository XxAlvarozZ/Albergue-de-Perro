import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.html',
  styleUrls: ['./pagina-principal.css']
})
export class PaginaPrincipal {
  
  constructor(private router: Router) {}

  // Navegar al registro de perros
  irARegistro() {
    this.router.navigate(['/registro']);
  }

  // Navegar a donaciones
  irADonacion() {
    this.router.navigate(['/donacion']);
  }
}