import { Component, OnInit } from '@angular/core';
declare let $:any;
declare let jQuery:any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }


  ngOnInit() {
  }

  BuscarPlaya(){
    console.log("Prueba")
  }

  noCerar(){
  $('.dropdown-button + .dropdown-content').on('click', function(event) {
  event.stopPropagation();
});
}

}
