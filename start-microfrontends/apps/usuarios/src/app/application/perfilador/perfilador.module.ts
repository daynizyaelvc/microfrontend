import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ConsultarCrearRolComponent } from './pages/consultar-crear-rol/consultar-crear-rol.component';
import { NgModule } from '@angular/core';
import { PerfiladorInicioComponent } from './inicio/inicio.component';
import { PerfiladorRouterOutletComponent } from './router-outlet/router-outlet.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PerfiladorRouterOutletComponent,
    children: [
      { path: '', component: PerfiladorInicioComponent },
      { path: 'consultar-crear-rol', component: ConsultarCrearRolComponent },
    ],
  },
];

@NgModule({
  declarations: [PerfiladorInicioComponent, ConsultarCrearRolComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    PerfiladorRouterOutletComponent,
  ],
})
export class PerfiladorModule {}
