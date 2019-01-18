import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MapPage } from "../map/map";

import { LocationsProvider } from '../../providers/locations/locations';
import { SessionProvider } from '../../providers/session/session';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {
  mapPage = MapPage
  categorias:any;
  lista:any;
  currentUser:any = [];

  constructor(public navCtrl: NavController, 
              public _locations: LocationsProvider,
              public _sessions: SessionProvider
              
  ) {

    let locationsLoaded = this._locations.load();
    Promise.all([
        locationsLoaded
    ]).then((result) => {
        this.lista = result[0].locations;
    });
    
  }

  ionViewDidLoad() {
    this.currentUser = this._sessions.get();
    console.log(this.currentUser);
  }

}






  