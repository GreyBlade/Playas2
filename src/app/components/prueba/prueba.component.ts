import { Component, OnInit, Input} from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  a = JSON.parse(localStorage.getItem("latitud"));
  b = JSON.parse(localStorage.getItem("longitud"));
  zoom=15;
  constructor() { }

  ngOnInit() {
    console.log(this.a);
    console.log(this.b)
  }

}
