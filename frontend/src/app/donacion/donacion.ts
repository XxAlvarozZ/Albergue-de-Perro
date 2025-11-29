import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AlbergueService } from '../servicios/albergue';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donacion',
  standalone: true,  // ← Esto es importante
  imports: [CommonModule, ReactiveFormsModule],  // ← Agregar los imports aquí
  templateUrl: './donacion.html',
  styleUrls: ['./donacion.css']
})
export class Donacion {
  donacionForm: FormGroup;
  donacionEnviada = false;

  constructor(
    private fb: FormBuilder,
    private albergueService: AlbergueService
  ) {
    this.donacionForm = this.fb.group({
      monto: ['', [Validators.required, Validators.min(1)]],
      mensaje: [''],
      metodo_pago: ['', Validators.required]
    });
  }

  enviarDonacion() {
    if (this.donacionForm.valid) {
      this.albergueService.registrarDonacion(this.donacionForm.value)
        .subscribe({
          next: (response) => {
            console.log('Donación exitosa', response);
            this.donacionEnviada = true;
            this.donacionForm.reset();
          },
          error: (error) => {
            console.error('Error en donación', error);
          }
        });
    }
  }
}