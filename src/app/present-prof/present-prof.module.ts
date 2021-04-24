import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentProfPageRoutingModule } from './present-prof-routing.module';

import { PresentProfPage } from './present-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentProfPageRoutingModule
  ],
  declarations: [PresentProfPage]
})
export class PresentProfPageModule {}
