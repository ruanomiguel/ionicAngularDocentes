import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';  // Sin paréntesis en la importación

const routes: Routes = [
  {
    path: '',
    component: Tab2Page  // Sin paréntesis, solo el nombre del componente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

