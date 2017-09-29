import { Component, OnInit, Input} from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  @Input('latitudBusqueda') lat:number;
  @Input('longitudBusqueda') lng:number;

  constructor() { }

  ngOnInit() {
  }

}
