import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ContactsProvider } from '../../providers/contacts/contacts'
import { Contact } from '../../models/contact'

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  profile:any = {}
  fb_id:any = 0;
  fb_token:string;
  contacts:Contact[] = [];
  private formContact: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public fb: Facebook, 
              public _contact: ContactsProvider,
              public toast: ToastController,
              private formBuilder: FormBuilder
              ) {
                  this.formContact = this.formBuilder.group({
                    name: [],
                    email: [],
                    password: [],
                    state: [],
                    city: [],
                    neighborhood: [],
                    cpf: [],
                    genre: [],
                    phone: []
                  });
              }

  loginAction(){
    // Login with permissions
    this.fb.login(['public_profile', 'email'])
    .then( (res: FacebookLoginResponse) => {

        // The connection was successful
        if(res.status == "connected") {

            // Get user ID and Token
            this.fb_id = res.authResponse.userID;
            this.fb_token = res.authResponse.accessToken;

            // Get user infos from the API
            this.fb.api("/me?fields=name,email", []).then((user) => {
                
                // Get the connected user details
                this.profile.name      = user.name;
                this.profile.email     = user.email;

                // => Open user session and redirect to the next page

            });

        } 
        // An error occurred while loging-in
        else {

            console.log("An error occurred...");

        }

    })
    .catch((e) => {
        console.log('Error logging into Facebook', e);
    });
  }

  onCreateContact() {
    this._contact
      .createContact(this.formContact.value)
      .subscribe(
        (newContact) => {
          console.log(newContact);  
          //this.contacts = this.contacts.concat(newContact);
        }
      );
  }


}
