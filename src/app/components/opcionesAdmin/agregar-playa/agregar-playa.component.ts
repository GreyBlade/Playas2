import { Component, OnInit } from '@angular/core';
import { PlayaServiceService } from '../../../services/playa-service.service';
import { Playas } from '../../../playas';


@Component({
  selector: 'app-agregar-playa',
  templateUrl: './agregar-playa.component.html',
  styleUrls: ['./agregar-playa.component.css'],
  providers:[PlayaServiceService],
})
export class AgregarPlayaComponent implements OnInit {

  playas: Array<Playas>;
  constructor(private _playasService: PlayaServiceService) { }

  ngOnInit() {
    this._playasService.getPlayas()
    .subscribe(respuestaVideos => this.playas = respuestaVideos);
  }

  agregarPlaya(playa:Playas){
    this._playasService.agregarPlaya(playa)
    .subscribe(resNuevaPlaya =>{
      this.playas.push(resNuevaPlaya);
    });
  }


}
