import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  title = 'prueba de mapa';
  //Nivel de Zoom
  zoom:number=16;
  //Posicion
  lat: number = 43.473331;
  lng: number = -3.782225;
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


    clickedMarcador(marcador:Marcador, index:number){
      console.log("Marcadcor clickeado " + marcador.nombre + " en " + index);
    }

    mapClicked($event:any){
      console.log("Evento map click");
      let nuevoMarcador={
        nombre: "Sin nombre",
        latitud:$event.coords.lat,
        longitud:$event.coords.lng,
        arrastable:false,
        icono:" ",
        // Si se quita el espacio se ponen marcadore en el mapa por cada toque
      }
      this.marcadores.push(nuevoMarcador);
    }

    marcadorDragEnd(marcador:any, $event:any){
      console.log("arrastrado" , marcador, $event);
      let marcadorActualizado={
        nombre:marcador.nombre,
        latitud:parseFloat(marcador.latitud),
        longitud:parseFloat(marcador.longitud),
        arrastable:false,
        incono:"",
      }

      let nuevaLatitud=$event.coords.lat;
      let nuevaLongitud=$event.coords.lng;
    }
  }

  interface Marcador{
    nombre:string;
    latitud:number;
    longitud:number;
    arrastable:boolean;
    icono:string;
  }
