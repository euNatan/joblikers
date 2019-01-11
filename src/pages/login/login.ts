import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListaPage } from '../lista/lista';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  listaPage = ListaPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
