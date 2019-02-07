import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs/Rx';
//import { Usuario } from '../../app/models/model/usuario';

import { Contact } from '../../models/contact'

@Injectable()
export class SessionProvider {

  baseUrl:string = "http://localhost:3000/api/v1";
  headers = new HttpHeaders(
  {
    'Content-Type' : 'application/json',
    'X-User-Email' : 'teste@teste.com',
    'X-User-Token' : 'XNXJsstqSD5nEkp4NzG4'
  });

  constructor(public http: HttpClient, public storage: Storage) {  }

    //login
    // Sending a POST request to /login
    public login(contact: Contact) {
      return this.http
        .post(this.baseUrl + '/sign_in', contact, { headers: this.headers})
        .map(response => {
          //console.log("metodo login" + JSON.stringify(response));
          this.storage.set('contact', response);
        })
        .catch((err)=>{
            console.error(err);
            return Observable.throw(err);
        });
    } 


    public get(): Promise<any> {
        return this.storage.get('contact');
    }

    // Quando deslogar deve remova do storage
    remove() {
        this.storage.remove('contact');
    }

    exist() {
        this.get().then(res => {
            console.log('resultado >>> ', res);
            if(res) {
                console.log('resultado IF');
                return true;
            } else {
                console.log('resultado else');
                return false;
            }
        });
    }
}
