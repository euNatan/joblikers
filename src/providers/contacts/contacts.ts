import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Contact } from '../../models/contact'

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {

  baseUrl:string = "http://localhost:3000/api/v1";
  headers = new HttpHeaders(
  {
    'Content-Type' : 'application/json',
    'X-User-Email' : 'teste@teste.com',
    'X-User-Token' : 'XNXJsstqSD5nEkp4NzG4'
  });
  

  constructor(public http: HttpClient) {}
  

  // Sending a GET request to /contact
  public getContacts(): Observable<Contact[]> {
    return this.http
      .get(this.baseUrl + '/contacts.json', { headers: this.headers} )
      .map(response => {
        //return response.map((contact) => new Contact(contact));
      })
      .catch((err)=>{
          console.log(err);
          return Observable.throw(err);
      });
  }


  // Sending a POST request to /contacts
  public createContact(contact: Contact) {
    return this.http
      .post(this.baseUrl + '/contacts', contact, { headers: this.headers})
      .map(response => {
        console.log("dentro do CreateContact"+ response);
        return "haha";
        //return new Contact(response);
      })
      .catch((err)=>{
          console.error(err);
          return Observable.throw(err);
      });
  }

  // Sending a GET request to /contacts/:id
  public getContactById(contactId: number): Observable<Contact> {
    return this.http
      .get(this.baseUrl + '/contacts' + contactId)
      .map(response => {
        return new Contact(response);
      })
      .catch((err)=>{
        console.log(err);
        return Observable.throw(err);
      });
  }

  // Sending a PUT request to /contacts/:id
  public updateContact(contact: Contact): Observable<Contact>{
    return this.http
      .put(this.baseUrl + '/contacts/' + contact.id, contact)
      .map(response => {
        return new Contact(response);
      })
      .catch((err)=>{
          console.error(err);
          return Observable.throw(err);
      });
  }

  // Sending a DELETE request to /contacts/:id
  public deleteContactById(contactId: number) { 
    return this.http
      .delete(this.baseUrl+ '/contacts/' + contactId)
      .catch((err)=>{
          console.error(err);
          return Observable.throw(err);
      });
  }  
  

}


