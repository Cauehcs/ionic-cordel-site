import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelUpPageRoutingModule } from './level-up-routing.module';

import { LevelUpPage } from './level-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelUpPageRoutingModule
  ],
  declarations: [LevelUpPage]
})
export class LevelUpPageModule {}
