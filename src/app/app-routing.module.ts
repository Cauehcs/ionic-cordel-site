import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'present-prof',
    loadChildren: () => import('./present-prof/present-prof.module').then( m => m.PresentProfPageModule)
  },
  {
    path: 'hackids',
    loadChildren: () => import('./hackids/hackids.module').then( m => m.HackidsPageModule)
  },
  {
    path: 'venda',
    loadChildren: () => import('./venda/venda.module').then( m => m.VendaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
