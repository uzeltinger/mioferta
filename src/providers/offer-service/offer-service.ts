import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { User } from '../../models/user';
import { Company } from '../../models/company';


/*
  Generated class for the OfferServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OfferServiceProvider {
  user: User = new User;
  company: Company = new Company;
  httpOptions:any = {};
  apiUrl: string = 'https://mioferta.com.ar/api';
  //apiUrl: string = 'http://mioferta.local/api';

  constructor(public httpClient: HttpClient, public storage: Storage) {
    console.log('Hello OfferServiceProvider Provider');
  }
  getCompanyOffers(id: number){
    let url = this.apiUrl + '/v1/company/getCompanyOffers/' + id;    
    return this.httpClient.get(url);
  }

  
  saveOffer(offer:any): Observable<any>{
    console.log('url',this.apiUrl+"/v1/offer/saveOffer");
    console.log('offer',offer);
  this.httpOptions = this.getHeader();
    return this.httpClient.post<any>(this.apiUrl+"/v1/offer/saveOffer", offer, this.httpOptions)
      .pipe(        
        catchError(this.handleError)
      );
    }

    getHeader() {
      console.log('UserServiceProvider : getHeader : line 130 this.user.token : ', this.user.token);
      return {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': this.user.token ? 'Bearer ' + this.user.token : ''
        })
      };
    }

    private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const err = error || '';
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }


}
