import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentProfPage } from './present-prof.page';

const routes: Routes = [
  {
    path: '',
    component: PresentProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentProfPageRoutingModule {}
