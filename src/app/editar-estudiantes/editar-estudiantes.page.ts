import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Estudiantes } from '../estudiantes';
import { EstudiantesService } from '../services/estudiantes.service';

@Component({
  selector: 'app-editar-estudiantes',
  templateUrl: './editar-estudiantes.page.html',
  styleUrls: ['./editar-estudiantes.page.scss'],
})
export class EditarEstudiantesPage implements OnInit {

  id: any;
  estudiantes?: Estudiantes;
  seleccionado?: Estudiantes;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private estudiantesService: EstudiantesService
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.estudiantesService.getUnEstudiante(params['id'])
        .subscribe(seleccionado => {
          this.seleccionado = seleccionado;
        });
    });
  }

  regresar(): void {
    this.router.navigate(['tabs/estudiantes']);
  }

  editar(estudiantes: Estudiantes): void {
    // Recalcular la nota final
    estudiantes.notafinal = (estudiantes.parcial1 * 0.35) + 
                            (estudiantes.parcial2 * 0.35) + 
                            (estudiantes.parcial3 * 0.30);
  
    // Actualizar el estudiante
    this.estudiantesService.updateEstudiantes(estudiantes.id, estudiantes).subscribe(() => {
      this.router.navigate(['/tabs/estudiantes']);
    });
  }
  

}
