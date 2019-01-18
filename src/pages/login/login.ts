import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SessionProvider } from '../../providers/session/session';

import { ListaPage } from '../lista/lista';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  listaPage = ListaPage
  private formLogin: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private formBuilder: FormBuilder,
              public _session: SessionProvider
  ) {
    this.formLogin = this.formBuilder.group({
      email: [],
      password: []
    }); 
  }

  login() {
    this._session
      .login(this.formLogin.value)
      .subscribe(
        (data) => {
          console.log("login page"+ JSON.stringify(data)); 
          //this.navCtrl.push(ListaPage);  
          //this.contacts = this.contacts.concat(newContact);
        }
      );
  }

  
  

}
