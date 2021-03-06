import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { ListaPage } from "../lista/lista";

import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { LocationsProvider } from '../../providers/locations/locations';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  listaPage = ListaPage
  categorias:any;

  constructor(public navCtrl: NavController, public maps: GoogleMapsProvider, public platform: Platform, public locations: LocationsProvider) {
    this.categorias = this.locations.getCategorias();
  }

    ionViewDidLoad(){

        this.platform.ready().then(() => {

            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
            let locationsLoaded = this.locations.load();

            Promise.all([
                mapLoaded,
                locationsLoaded
            ]).then((result) => {
                let locations = result[1].locations;
                for(let location of locations){
                    this.maps.addMarker(location.latitude, location.longitude);
                }

            });

        });

    }


}

