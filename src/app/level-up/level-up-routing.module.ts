import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelUpPage } from './level-up.page';

const routes: Routes = [
  {
    path: '',
    component: LevelUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelUpPageRoutingModule {}
