import { Component } from '@angular/core';
import { MateriasService } from '../services/materias.service'; // Importar el servicio
import { Materias } from '../materias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  materia: Materias = {
    id: 0,  // Puedes manejar el ID en el servicio si es autogenerado
    nombre_materia: '',
    programa: '',
    semestre: 1,
    horario: '',
    salon: ''
  };
  constructor(private materiasService: MateriasService) {}
  guardarMateria() {
    console.log('Materia guardada:', this.materia);
    
    // Llamar al servicio para agregar la materia
    this.materiasService.addMateria(this.materia).subscribe(response => {
      console.log('Materia agregada a la lista:', response);
    });

    // Aquí podrías resetear el formulario o navegar a otra página
    this.resetForm();
  }

  resetForm() {
    // Reiniciar el formulario
    this.materia = {
      id: 0,
      nombre_materia: '',
      programa: '',
      semestre: 1,
      horario: '',
      salon: ''
    };
  }
}
