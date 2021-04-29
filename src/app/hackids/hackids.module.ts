import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HackidsPageRoutingModule } from './hackids-routing.module';

import { HackidsPage } from './hackids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HackidsPageRoutingModule
  ],
  declarations: [HackidsPage]
})
export class HackidsPageModule {}
