import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Playas } from '../playas'

@Injectable()
export class PlayaServiceService {

  private getUrl = "/api/playas";
  private postUrl = "/api/playa";
  constructor(private http:Http) { }

  getPlayas(){
    return this.http.get(this.getUrl)
    .map((response: Response)=> response.json());
  }

  agregarPlaya(playa:Playas){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.postUrl, JSON.stringify(playa), options)
      .map((response: Response) => response.json());
  }
}
