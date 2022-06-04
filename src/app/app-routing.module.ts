import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
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
  },  {
    path: 'crea-fumetto',
    loadChildren: () => import('./pages/fumetti/crea-fumetto/crea-fumetto.module').then( m => m.CreaFumettoPageModule)
  },
  {
    path: 'lista-fumetti',
    loadChildren: () => import('./pages/fumetti/lista-fumetti/lista-fumetti.module').then( m => m.ListaFumettiPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
