import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        //loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
        loadChildren: '../inicio/inicio.module#InicioPageModule'
      },
      {
        path: 'perfil',
        //loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
        loadChildren: '../perfil/perfil.module#PerfilPageModule'
      },
     {
        path: 'buscar',
        //loadChildren: () => import('../buscar/buscar.module').then(m => m.BuscarPageModule)
        loadChildren: '../buscar/buscar.module#BuscarPageModule'
      },
      {
        path: 'agregar',
        //loadChildren: () => import('../agregar/agregar.module').then(m => m.AgregarPageModule)
        loadChildren: '../agregar/agregar.module#AgregarPageModule'
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
