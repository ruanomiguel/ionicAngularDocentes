import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformasPageRoutingModule } from './informas-routing.module';

import { InformasPage } from './informas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformasPageRoutingModule
  ],
  declarations: [InformasPage]
})
export class InformasPageModule {}
