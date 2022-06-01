import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crea-autore',
    loadChildren: () => import('./pages/autori/crea-autore/crea-autore.module').then( m => m.CreaAutorePageModule)
  },
  {
    path: 'lista-autori',
    loadChildren: () => import('./pages/autori/lista-autori/lista-autori.module').then( m => m.ListaAutoriPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
