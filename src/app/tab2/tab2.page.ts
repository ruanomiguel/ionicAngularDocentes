import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiantesService } from '../services/estudiantes.service';
import { Estudiantes } from '../estudiantes';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nuevoEstudiante: Estudiantes = {
    id: 0,
    nombre: '',
    parcial1: 0,
    parcial2: 0,
    parcial3: 0,
    notafinal: 0,
    id_materia: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estudiantesService: EstudiantesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.nuevoEstudiante.id_materia = +params['id'];
      }
    });
  }

  addEstudiante() {
    this.nuevoEstudiante.notafinal = (this.nuevoEstudiante.parcial1 * 0.35) + 
                                     (this.nuevoEstudiante.parcial2 * 0.35) + 
                                     (this.nuevoEstudiante.parcial3 * 0.30);
    
    this.estudiantesService.addEstudiante(this.nuevoEstudiante).subscribe(() => {
      this.router.navigate(['/tabs/estudiantes', this.nuevoEstudiante.id_materia]);
    });
  }
}