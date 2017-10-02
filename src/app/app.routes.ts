import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AdminTestComponent } from '../app/components/admin-test/admin-test.component';
import { AgregarMarcadorComponent } from '../app/components/opcionesAdmin/agregar-marcador/agregar-marcador.component';
import { LoginComponent } from '../app/components/login/login.component';
import { PruebaComponent } from '../app/components/prueba/prueba.component';
import { SidenavComponent } from '../app/components/sidenav/sidenav.component';
import { PoligonoComponent } from '../app/components/poligono/poligono.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path : 'admin-test', component: AdminTestComponent},
  {path: 'agregar-marcador', component: AgregarMarcadorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prueba', component: PruebaComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'poligono', component: PoligonoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
