import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeLigaPageRoutingModule } from './se-liga-routing.module';

import { SeLigaPage } from './se-liga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeLigaPageRoutingModule
  ],
  declarations: [SeLigaPage]
})
export class SeLigaPageModule {}
