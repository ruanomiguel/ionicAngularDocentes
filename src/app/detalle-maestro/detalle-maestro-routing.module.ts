import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMaestroPage } from './detalle-maestro.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMaestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMaestroPageRoutingModule {}
