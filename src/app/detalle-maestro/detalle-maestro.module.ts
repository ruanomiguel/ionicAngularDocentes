import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMaestroPageRoutingModule } from './detalle-maestro-routing.module';

import { DetalleMaestroPage } from './detalle-maestro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMaestroPageRoutingModule
  ],
  declarations: [DetalleMaestroPage]
})
export class DetalleMaestroPageModule {}
