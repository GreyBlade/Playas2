import { Component, OnInit } from '@angular/core';
import { PlayaServiceService } from '../../services/playa-service.service';
import { Playas } from '../../playas';

@Component({
  selector: 'app-playas',
  templateUrl: './playas.component.html',
  styleUrls: ['./playas.component.css'],
  providers:[PlayaServiceService],
})
export class PlayasComponent implements OnInit {

playas: Array<Playas>;

  constructor(private _playaService: PlayaServiceService) { }

  ngOnInit() {
    this._playaService.getPlayas()
    .subscribe(respuestaVideos => this.playas = respuestaVideos);
  }

}
