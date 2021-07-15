import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformadoPageRoutingModule } from './informado-routing.module';

import { InformadoPage } from './informado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformadoPageRoutingModule
  ],
  declarations: [InformadoPage]
})
export class InformadoPageModule {}
