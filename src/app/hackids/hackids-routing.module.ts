import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HackidsPage } from './hackids.page';

const routes: Routes = [
  {
    path: '',
    component: HackidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HackidsPageRoutingModule {}
