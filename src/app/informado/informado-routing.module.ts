import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformadoPage } from './informado.page';

const routes: Routes = [
  {
    path: '',
    component: InformadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformadoPageRoutingModule {}
