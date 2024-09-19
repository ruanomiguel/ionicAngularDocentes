import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarEstudiantesPageRoutingModule } from './editar-estudiantes-routing.module';

import { EditarEstudiantesPage } from './editar-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarEstudiantesPageRoutingModule
  ],
  declarations: [EditarEstudiantesPage]
})
export class EditarEstudiantesPageModule {}
