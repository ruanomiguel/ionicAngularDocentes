import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformasPage } from './informas.page';

const routes: Routes = [
  {
    path: '',
    component: InformasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformasPageRoutingModule {}
