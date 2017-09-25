import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AdminTestComponent } from '../app/components/admin-test/admin-test.component';
import { AgregarMarcadorComponent } from '../app/components/opcionesAdmin/agregar-marcador/agregar-marcador.component';
import { LoginComponent } from '../app/components/login/login.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path : 'admin-test', component: AdminTestComponent},
  {path: 'agregar-marcador', component: AgregarMarcadorComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
