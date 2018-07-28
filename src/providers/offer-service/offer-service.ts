import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the OfferServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OfferServiceProvider {

  apiUrl: string = 'https://mioferta.com.ar/api/';
  //apiUrl: string = 'http://mioferta.local/api/';

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello OfferServiceProvider Provider');
  }
  getCompanyOffers(id: number){
    let url = this.apiUrl + '/v1/company/getCompanyOffers/' + id;    
    return this.http.get(url);
  }

}
