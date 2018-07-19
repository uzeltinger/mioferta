import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProveedorProvider Provider');
  }
  obtenerOfertas(){
    let url = '';
    //url = 'https://www.mioferta.com.ar/index.php?option=com_jbusinessdirectory&view=offers&format=json';
    //url = 'http://mioferta.local/index.php?option=com_jbusinessdirectory&view=offers&format=json';
    url = 'http://la.mioferta.com.ar/offers.json';
    return this.http.get(url);
  }
}
