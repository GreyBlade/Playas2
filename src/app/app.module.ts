import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule} from '@agm/core';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyA3d6OC5uV4aQlVClt97CEULYxOvY7b1GU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
