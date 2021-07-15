import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeLigaPage } from './se-liga.page';

const routes: Routes = [
  {
    path: '',
    component: SeLigaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeLigaPageRoutingModule {}
