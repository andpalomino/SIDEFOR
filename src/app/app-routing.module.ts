import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NosesionGuard } from './guards/nosesion.guard'

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'sesion', loadChildren: () => import('./sesion/sesion.module').then( m => m.SesionPageModule), canActivate: [NosesionGuard]},
  { path: 'registrarse', loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)},
  { path: 'visita', loadChildren: () => import('./visita/visita.module').then( m => m.VisitaPageModule)},
  //{ path: 'iniciar', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'iniciar', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: 'descripcion',
    loadChildren: () => import('./arbol/descripcion/descripcion.module').then( m => m.DescripcionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
