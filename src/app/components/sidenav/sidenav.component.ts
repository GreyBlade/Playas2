import { Component, OnInit } from '@angular/core';
declare let $:any;
declare let jQuery:any;
import { PruebaComponent } from '../prueba/prueba.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  //Comparadores
  santander:boolean;
  comillas:boolean;

  //Variables para el mapa
  public latitudBusqueda:number;
  public longitudBusqueda:number;

  //Variables formulario
  Pais:string;
  Provincia:string;
  Ciudad:string;
  Playas:string;
  constructor() { }


  ngOnInit() {
    console.log(this.latitudBusqueda);
  }

  BuscarPlaya(){
    console.log("Prueba");
    var pais = $("#paisSelect").val();
    var provincia = $("#provinciaSelect").val();
    var ciudad = $("#ciudadSelect").val();
    var playas= $("#playaSelect").val();
    console.log(pais);
    console.log(provincia);
    console.log(ciudad);
    console.log(playas);

    if ((ciudad=="2")){
      this.comillas=true;
    } else if ((ciudad=="1")){
      this.santander=true;
    }

    if ((pais=="1") && (provincia=="1")&&(ciudad=="1")&&(playas=="1")){
      console.log("se escogio la playa el sardinero");
      this.latitudBusqueda=43.473424;
      this.longitudBusqueda=-3.782104;
    }
  }


  mostrarMenu(){
    console.log("asd");

  }

  noCerar(){
  $('.dropdown-button + .dropdown-content').on('click', function(event) {
  event.stopPropagation();
});
}

}
