import { Component, OnInit } from '@angular/core';
import { Estudiantes } from '../estudiantes';
import { EstudiantesService } from '../services/estudiantes.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  misestudiantes: Estudiantes[] = []; // Declarar la variable

  constructor(
    private estudiantesService: EstudiantesService, // El nombre correcto del servicio
    public alertController: AlertController // Corregido el nombre
  ) {}

  getEstudiantes(): void {
    this.estudiantesService.getEstudiantes()
      .subscribe(estudiantes => this.misestudiantes = estudiantes);
  }

  ngOnInit() {
    this.getEstudiantes();
  }

  async borrarEstudiantes(estudiante: Estudiantes) {
    const alert = await this.alertController.create({ // Corregido el uso de alertController
      header: 'Borrar',
      message: '¿Está seguro que desea borrar este estudiante?',
      buttons: [
        {
          text: 'No',
          role: 'cancel', // El rol debe estar en minúsculas
          cssClass: 'secondary',
          handler: () => {
            console.log('Borrado cancelado');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.misestudiantes = this.misestudiantes?.filter(h => h !== estudiante);
            this.estudiantesService.borrar(estudiante).subscribe();
          }
        }
      ]
    });
  
    await alert.present();
  }
  
}
