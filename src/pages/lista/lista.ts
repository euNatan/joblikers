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

  constructor(public navCtrl: NavController, public locations: LocationsProvider) {
    this.categorias = locations.getCategorias();
  }


  ionViewDidLoad() {
    
  }

}






  