import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AdminTestComponent } from '../app/components/admin-test/admin-test.component';
import { AgregarMarcadorComponent } from '../app/components/opcionesAdmin/agregar-marcador/agregar-marcador.component';
import { LoginComponent } from '../app/components/login/login.component';
import { PruebaComponent } from '../app/components/prueba/prueba.component';
import { SidenavComponent } from '../app/components/sidenav/sidenav.component';
import { PoligonoComponent } from '../app/components/poligono/poligono.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { NavbarComponent } from '../app/components/shared/navbar/navbar.component';
import { PlayasComponent } from '../app/components/playas/playas.component';
import { AgregarPlayaComponent } from '../app/components/opcionesAdmin/agregar-playa/agregar-playa.component';

const app_routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path : 'admin-test', component: AdminTestComponent},
  {path: 'agregar-marcador', component: AgregarMarcadorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prueba', component: PruebaComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'poligono', component: PoligonoComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'playas', component: PlayasComponent},
  {path: 'agregar-playa', component: AgregarPlayaComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
