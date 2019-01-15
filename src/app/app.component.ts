import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocationsProvider } from '../providers/locations/locations'
import { ContactsProvider } from '../providers/contacts/contacts'
import { Contact } from '../models/contact'

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  categorias:any;
  private contacts:Contact[] = [];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, _locations: LocationsProvider, _contacts: ContactsProvider) {
    _contacts.getContacts().subscribe((contacts: Contact[] )=>{
      this.contacts = contacts;
      console.log("aquiii"+ contacts);
    });
    
    
    platform.ready().then(() => {
    let categoriesLoaded = _locations.getCategorias();
    
    Promise.all([
        categoriesLoaded
    ]).then((result) => {
        this.categorias = result[0];
    });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}

