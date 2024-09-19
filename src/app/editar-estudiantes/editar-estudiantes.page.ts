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
    // Aquí puedes agregar la lógica que desees para editar la materia.
    
    // Simular un proceso de edición
    this.estudiantesService.updateEstudiantes(estudiantes.id, estudiantes).subscribe(() => {
      // Redirigir después de guardar los cambios
      this.router.navigate(['/tabs/estudiantes']);
    });
  }

}
