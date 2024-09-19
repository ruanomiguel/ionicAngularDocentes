import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarEstudiantesPage } from './editar-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: EditarEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarEstudiantesPageRoutingModule {}
