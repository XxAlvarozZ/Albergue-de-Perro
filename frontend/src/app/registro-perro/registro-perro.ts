import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ← Asegúrate de importar Router
import { AlbergueService } from '../servicios/albergue';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-perro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-perro.html',
  styleUrls: ['./registro-perro.css']
})
export class RegistroPerro {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router, // ← Inyectar Router aquí
    private albergueService: AlbergueService
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      tamano: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0), Validators.max(30)]]
    });
  }

  registrarPerro() {
    if (this.registroForm.valid) {
      this.albergueService.registrarPerro(this.registroForm.value)
        .subscribe({
          next: (response) => {
            console.log('Perro registrado', response);
            alert('¡Perro registrado exitosamente!');
            this.registroForm.reset();
          },
          error: (error) => {
            console.error('Error al registrar', error);
            alert('Error al registrar el perro');
          }
        });
    }
  }

  // ← AGREGAR ESTA FUNCIÓN
  volverInicio() {
    this.router.navigate(['/']);
  }
}