import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pagina-principal/pagina-principal').then(m => m.PaginaPrincipal)
  },
  { 
    path: 'registro', 
    loadComponent: () => import('./registro-perro/registro-perro').then(m => m.RegistroPerro)
  },
  { 
    path: 'donacion', 
    loadComponent: () => import('./donacion/donacion').then(m => m.Donacion)
  }
];