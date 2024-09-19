import { Component, OnInit } from '@angular/core';
import { Materias } from '../materias';
import { MATERIAS } from '../lista-materias';
import { MateriasService } from '../services/materias.service';
import { NavController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

  public mismaterias? : Materias[];

  constructor(
    private materiasService: MateriasService,
    public AlertController: AlertController
  ) { }

  getMaterias(): void{
    // this.mismaterias = this.materiasService.getMatrias();
    this.materiasService.getMatrias().subscribe(materias => this.mismaterias = materias)
  }

 

  ngOnInit() {
    this.getMaterias();
  }

  async borrarMaterias(materias: Materias) {
    const alert = await this.AlertController.create({
      header: 'Borrar',
      message: 'Esta seguro que quiere borrar la materia',
      buttons: [
        {
          text: 'No',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancela borrado');
          }
        },
        {
          text: 'Si',
          handler: (blah) => {
            this.mismaterias = this.mismaterias?.filter(h => h !== materias);
            this.materiasService.borrar(materias).subscribe();
          }
        }
      ]
    });
  
    await alert.present();
  }
  

}
