import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Alumnos } from '../services/alumnos';
declare var bootstrap: any;
@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  constructor(private alumno: Alumnos) {}

  guardarAlumno(form: NgForm) { // Cambiamos 'any' por 'NgForm' para mejor tipado
    
    if (form.invalid) {
      // Esto marca todos los campos para que aparezcan los errores en rojo si el form es inválido
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    const nuevoAlumno = {
      nombre: form.value.nombre,
      edad: form.value.edad,
      Carrera: form.value.Carrera,
    };

    this.alumno.insertarAlumno(nuevoAlumno).subscribe({
      next: () => {
        alert('Alumno agregado correctamente');
        form.resetForm(); // Es mejor resetForm() que reset() para limpiar estados de validación
      },
      error: (err) => {
        console.error('Error al insertar:', err);
      },
    });
  }
}
