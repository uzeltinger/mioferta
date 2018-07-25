import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorProvider {
  //apiUrl: string = 'http://miofertarestapi.local/';
  //apiUrl: string = 'http://la.mioferta.com.ar/api/';
  apiUrl: string = 'http://mioferta.local/api/';
  constructor(public http: HttpClient) {
    console.log('Hello ProveedorProvider Provider');
  }
  obtenerOfertas(){
    let url = '';
    //url = 'https://www.mioferta.com.ar/index.php?option=com_jbusinessdirectory&view=offers&format=json';
    //url = 'http://mioferta.local/index.php?option=com_jbusinessdirectory&view=offers&format=json';
    //url = 'http://la.mioferta.com.ar/offers.json';
    //url = 'http://mioferta.local/api/v1/offers/getOffers';
    url = this.apiUrl + '/v1/offers/getOffers';
    return this.http.get(url);
  }
  getCategories(){
    let url = '';
    url = this.apiUrl + '/v1/categories/getCategories';
    return this.http.get(url);
  }

  getOffersCategory(id: number){
    let url = this.apiUrl + '/v1/categories/getOffersCategory/' + id;
    return this.http.get(url);
  }

}
