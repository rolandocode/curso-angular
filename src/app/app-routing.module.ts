import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EmpleadosComponent } from './empleados/empleados.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

const appRoutes: Routes = [
  {
    path: '', component: EmpleadosComponent,
  },
  {
    path: 'empleado', component: EmpleadosComponent,
  },
  {
    path: 'fruta', component: FrutaComponent,
  },
  {
    path: 'pagina-principal', component: HomeComponent,
  },
  {
    path: 'contacto', component: ContactoComponent,
  },
  {
    path: 'contacto/:page', component: ContactoComponent,
  },
  {
    path: 'fruta', component: FrutaComponent,
  },
  {
    path: 'coches', component: CochesComponent,
  },
  {
    path: '**', component:HomeComponent  //para cuando se produce un 404
  }
];
// *** another way to do routes
// export const appRoutingWithProviders: any[] = [];
// export const routing : ModuleWithProviders<any> =  RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
