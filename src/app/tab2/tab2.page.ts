import { Component } from '@angular/core';
import { EstudiantesService } from '../services/estudiantes.service'; 
import { Estudiantes } from '../estudiantes';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  estudiante: Estudiantes = {
    id: 0,
    nombre: '',
    nota: 0
  };

  constructor(private EstudiantesService: EstudiantesService ) {}
  guardarEstudiante() {
    console.log('Estudiante guardado:', this.estudiante);
    this.EstudiantesService.addEstudiante(this.estudiante).subscribe(response => {
      console.log('Estudiante agregado a la lista:', response);
    });
    this.resetForm();
  }
  resetForm() {
    this.estudiante = {
      id: 0,
      nombre: '',  
      nota: 1
    };
  }
}
