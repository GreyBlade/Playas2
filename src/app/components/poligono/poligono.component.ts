import { Component,OnInit } from '@angular/core';
import { AfterContentInit, Directive, EventEmitter, OnChanges, OnDestroy, SimpleChanges, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LatLng, LatLngLiteral, PolyMouseEvent, PolygonOptions } from '../../../../node_modules/@agm/core/services/google-maps-types';
import { PolygonManager } from '../../../../node_modules/@agm/core/services/managers/polygon-manager';


@Component({
  selector: 'app-poligono',
  templateUrl: './poligono.component.html',
  styleUrls: ['./poligono.component.css']
})
export class PoligonoComponent implements OnInit {
  lat:number=43.473424;
  lng:number=-3.782104;
  zoom:number = 15;
  paths: Array<LatLngLiteral>=[
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
  constructor() { }

  ngOnInit() {
  }

}
