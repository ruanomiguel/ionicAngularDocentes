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
    parcial1:0,
    parcial2:0,
    parcial3:0,
    notafinal: 0,
    id_materia:0,
  };

  constructor(private EstudiantesService: EstudiantesService ) {}
  guardarEstudiante() {
    console.log('Estudiante guardado:', this.estudiante);
    this.EstudiantesService.addEstudiante(this.estudiante).subscribe(response => {
      console.log('Estudiante agregado a la lista:', response);
    });
    this.resetForm();
  }
  calcularNotaFinal() {
    const { parcial1, parcial2, parcial3 } = this.estudiante;
    this.estudiante.notafinal = (parcial1 * 0.35) + (parcial2 * 0.35) + (parcial3 * 0.30);
  }

  resetForm() {
    this.estudiante = {
      id: 0,
      nombre: '',  
      parcial1:1,
      parcial2:1,
      parcial3:1,
      notafinal: 1,
      id_materia:1,
    };
  }
}
