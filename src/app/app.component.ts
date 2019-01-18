import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from "@ionic/storage";

import { SessionProvider } from '../providers/session/session';

import { LocationsProvider } from '../providers/locations/locations'
//import { ContactsProvider } from '../providers/contacts/contacts'
import { Contact } from '../models/contact'

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  categorias:any;
  usuarioLogado:any;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              _locations: LocationsProvider,
              public session: SessionProvider, 
              public storage: Storage

  ) {
    this.session.get()
        .then(res => {
            this.usuarioLogado = new Contact(res);
            console.log('usuário logado  >>> ',this.usuarioLogado);
    });
   
   /* get all contacts
    _contacts.getContacts().subscribe((contacts: Contact[] )=>{
      this.contacts = contacts;
      console.log("app.components, ver contatos retorno"+ JSON.stringify( contacts ));
    });
   */ 
    
    
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

