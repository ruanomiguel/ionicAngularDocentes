import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiantes } from '../estudiantes';
import { EstudiantesService } from '../services/estudiantes.service';

@Component({
  selector: 'app-editar-estudiantes',
  templateUrl: './editar-estudiantes.page.html',
  styleUrls: ['./editar-estudiantes.page.scss'],
})
export class EditarEstudiantesPage implements OnInit {
  seleccionado?: Estudiantes;
  materiaId: number=0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private estudiantesService: EstudiantesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const estudianteId = +params['id'];
      this.materiaId = +params['materiaId'];
      this.estudiantesService.getUnEstudiante(estudianteId).subscribe(estudiante => {
        if (estudiante && estudiante.id_materia === this.materiaId) {
          this.seleccionado = estudiante;
        } else {
          this.mostrarToast('Estudiante no encontrado para esta materia');
          this.regresar();
        }
      });
    });
  }

  regresar(): void {
    this.router.navigate(['/tabs/estudiantes', this.materiaId]);
  }

  async editar(estudiante: Estudiantes): Promise<void> {
    const loading = await this.loadCtrl.create({
      message: 'Actualizando estudiante...'
    });
    await loading.present();

    estudiante.notafinal = (estudiante.parcial1 * 0.35) +
                           (estudiante.parcial2 * 0.35) +
                           (estudiante.parcial3 * 0.30);

    this.estudiantesService.updateEstudiantes(estudiante.id, estudiante).subscribe(
      async () => {
        await loading.dismiss();
        await this.mostrarToast('Estudiante actualizado con éxito');
        this.regresar();
      },
      async (error) => {
        await loading.dismiss();
        await this.mostrarToast('Error al actualizar el estudiante');
      }
    );
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}