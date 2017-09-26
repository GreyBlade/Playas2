import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-marcador',
  templateUrl: './agregar-marcador.component.html',
  styleUrls: ['./agregar-marcador.component.css']
})
export class AgregarMarcadorComponent implements OnInit {
  title = 'prueba de mapa';
  //Nivel de Zoom
  zoom:number=14;
  //Posicion
  lat: number = 43.473331;
  lng: number = -3.782225;
  //Valores para el formulario
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;
  markerIcon:string;


  //Marcadores
  marcadores:Marcador[]=[
    {
    nombre:"Primera Playa El Sardinero",
    latitud:43.473331,
    longitud:-3.782225,
    arrastable:false,
    icono:"assets/images/sailing.svg",

    },
    {
      nombre:"Segunda Playa El Sardinero",
      latitud: 43.477138,
      longitud:-3.785549,
      arrastable:false,
      icono:"assets/images/wind-surfing.svg",

    },
    {
      nombre:"Santander",
      latitud:43.462306,
      longitud:-3.809980,
      arrastable:false,
      icono:"",

    },
  ];


  constructor() { }

  ngOnInit() {
  }
  agregarMarcador(){
    console.log("Sirve");
    if(this.markerDraggable=="si"){
      var esArrastable:boolean=true;
    }else {
      var esArrastable=false;
    }
    let nuevoMarcador={
      nombre:this.markerName,
      latitud:parseFloat(this.markerLat),
      longitud:parseFloat(this.markerLng),
      arrastable:esArrastable,
      icono:""
    }
    this.marcadores.push(nuevoMarcador);

  }
}
interface Marcador{
  nombre:string;
  latitud:number;
  longitud:number;
  arrastable:boolean;
  icono:string;
}
