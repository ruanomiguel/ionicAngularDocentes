import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'detalle-maestro',
        loadChildren: () => import('../detalle-maestro/detalle-maestro.module').then(m => m.DetalleMaestroPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'materias',
        loadChildren: () => import('../materias/materias.module').then(m => m.MateriasPageModule)
      },
      {
        path: 'estudiantes',
        loadChildren: () => import('../estudiantes/estudiantes.module').then(m => m.EstudiantesPageModule)
      },
      {
        path: 'editarmaterias/:id',
        loadChildren: () => import('../editarmaterias/editarmaterias.module').then(m => m.EditarmateriasPageModule)
      },
      {
        path: 'editar-estudiantes/:id',
        loadChildren: () => import('../editar-estudiantes/editar-estudiantes.module').then(m => m.EditarEstudiantesPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
