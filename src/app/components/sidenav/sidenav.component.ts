import { Component, OnInit } from '@angular/core';
declare let $:any;
declare let jQuery:any;
import { PruebaComponent } from '../prueba/prueba.component';
import { AfterContentInit, Directive, EventEmitter, OnChanges, OnDestroy, SimpleChanges, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LatLng, LatLngLiteral, PolyMouseEvent, PolygonOptions } from '../../../../node_modules/@agm/core/services/google-maps-types';
import { PolygonManager } from '../../../../node_modules/@agm/core/services/managers/polygon-manager';
import { Router } from '@angular/router';

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

//Variables formulario login
Usuario:string;
Contra:string;

  //Variables formulario
  Pais:string;
  Provincia:string;
  Ciudad:string;
  Playas:string;
  constructor(private router:Router) { }


  ngOnInit() {}

  BuscarPlaya(){

    location.reload();
    var pais = $("#paisSelect").val();
    var provincia = $("#provinciaSelect").val();
    var ciudad = $("#ciudadSelect").val();
    var playas= $("#playaSelect").val();

    if ((ciudad=="2")){
      this.comillas=true;
    } else if ((ciudad=="1")){
      this.santander=true;
    }

    if ((pais=="1") && (provincia=="1")&&(ciudad=="1")&&(playas=="1")){

      this.latitudBusqueda=43.473424;
      this.longitudBusqueda=-3.782104;
      let latitudStorage = JSON.stringify(this.latitudBusqueda);
      let longitudStorage = JSON.stringify(this.longitudBusqueda);
      localStorage.setItem("latitud", latitudStorage);
      localStorage.setItem("longitud", longitudStorage);
      let paths: Array<LatLngLiteral>=[
        { lat: 43.476778, lng: -3.778782 },
        { lat: 43.476747, lng: -3.777473 },
        { lat: 43.474925, lng: -3.775091 },
        { lat: 43.474427, lng: -3.775027 },
        { lat: 43.471344, lng: -3.778460 },
        { lat: 43.471982, lng: -3.781292 },
        { lat: 43.473664, lng: -3.783674 },
        { lat: 43.474267, lng: -3.783315 },
        { lat: 43.476778, lng: -3.778782 }
      ];
      let pathsPrueba = JSON.stringify(paths);
      localStorage.setItem("poligono", pathsPrueba);
      this.router.navigate(['./prueba']);


    }

    if ((pais=="1")&&(provincia=="1")&&(ciudad=="1")&&(playas=="2")){

      this.latitudBusqueda=43.477015;
      this.longitudBusqueda=-3.786728;
      let latitudStorage = JSON.stringify(this.latitudBusqueda);
      let longitudStorage = JSON.stringify(this.longitudBusqueda);
      localStorage.setItem("latitud", latitudStorage);
      localStorage.setItem("longitud", longitudStorage);
      let paths: Array<LatLngLiteral>=[
        { lat: 43.481060, lng: -3.786929 },
        { lat: 43.481963, lng: -3.783739 },
        { lat: 43.481901, lng: -3.782537 },
        { lat: 43.479986, lng: -3.781142 },
        { lat: 43.477985, lng: -3.778996 },
        { lat: 43.476778, lng: -3.778782 },
        { lat: 43.474267, lng: -3.783315 },
        { lat: 43.474201, lng: -3.784490 },
        { lat: 43.475719, lng: -3.787000 },
        { lat: 43.478366, lng: -3.788438 },
        { lat: 43.479503, lng: -3.788760 },
        { lat: 43.480406, lng: -3.788137 },
        { lat: 43.481060, lng: -3.786929 }
      ];
      let pathsPrueba = JSON.stringify(paths);
      localStorage.setItem("poligono", pathsPrueba);
      this.router.navigate(['./prueba']);
    }
  }


  mostrarMenu(){}

  noCerar(){
  $('.dropdown-button + .dropdown-content').on('click', function(event) {
  event.stopPropagation();
});
}

iniciarSesion(){
  location.reload();
  if ((this.Usuario=="administrador")&&(this.Contra=="administrador123")){
    console.log("administrador logeado");
    this.router.navigate(['./admin-test']);
  }
  else if ((this.Usuario=="coordinador")&&(this.Contra=="coordinador123")){
    console.log("coordinador logeado");
    this.router.navigate(['./coordinador']);
  }
  else if ((this.Usuario=="socorrista")&&(this.Contra=="socorrista123")){
    console.log("socorrista logeado");
    this.router.navigate(['./socorrista']);
  }
}


}
