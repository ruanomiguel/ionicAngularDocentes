import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Materias } from '../materias';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-editarmaterias',
  templateUrl: './editarmaterias.page.html',
  styleUrls: ['./editarmaterias.page.scss'],
})
export class EditarmateriasPage implements OnInit {

  id: any;
  materias?: Materias;
  seleccionado?: Materias;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private materiasService: MateriasService
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.materiasService.getUnaMaterias(params['id'])
        .subscribe(seleccionado => {
          this.seleccionado = seleccionado;
        });
    });
  }

  regresar(): void {
    this.router.navigate(['tabs/materias']);
  }

  editar(materias: Materias): void {
    // Aquí puedes agregar la lógica que desees para editar la materia.
    
    // Simular un proceso de edición
    this.materiasService.updateMaterias(materias.id, materias).subscribe(() => {
      // Redirigir después de guardar los cambios
      this.router.navigate(['/tabs/materias']);
    });
  }
}
