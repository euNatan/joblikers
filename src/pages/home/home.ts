import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  loginPage = LoginPage
  cadastroPage = CadastroPage

  constructor(public navCtrl: NavController) {

  }

}
