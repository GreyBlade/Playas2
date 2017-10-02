import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule} from 'angular2-materialize';

//rutas
import {app_routing} from './app.routes';

//componentes
import { AppComponent } from './app.component';
import { AgmCoreModule} from '@agm/core';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AdminTestComponent } from './components/admin-test/admin-test.component';
import { AgregarMarcadorComponent } from './components/opcionesAdmin/agregar-marcador/agregar-marcador.component';
import { LoginComponent } from './components/login/login.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PoligonoComponent } from './components/poligono/poligono.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AdminTestComponent,
    AgregarMarcadorComponent,
    LoginComponent,
    PruebaComponent,
    SidenavComponent,
    PoligonoComponent,

  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyA3d6OC5uV4aQlVClt97CEULYxOvY7b1GU'
    }),
    app_routing,
    FormsModule,
    MaterializeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
