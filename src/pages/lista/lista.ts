import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MapPage } from "../map/map";

import { LocationsProvider } from '../../providers/locations/locations';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {
  mapPage = MapPage
  categorias:any;
  lista:any;

  constructor(public navCtrl: NavController, public _locations: LocationsProvider) {

    let locationsLoaded = this._locations.load();

    Promise.all([
        locationsLoaded
    ]).then((result) => {
        this.lista = result[0].locations;
    });
    
  }

  ionViewDidLoad() {
    
  }

}






  