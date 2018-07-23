import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  user: User = new User;
  isUserLoggedIn: boolean = false;
  apiUrl: string = 'http://miofertarestapi.local/';
  //apiUrl: string = 'http://la.mioferta.com.ar/api/';
  httpOptions:any = {};
  /*
  headers = {
    headers: new HttpHeaders().set('Authorization', '')
  };
*/
  constructor(public httpClient: HttpClient, public storage: Storage) {
    console.log('Hello UserServiceProvider Provider');
  }

  setUserFacebook(user:any): Observable<any>{
    this.storage.set('userLogued', true);
        this.storage.set('facebook_id', user.facebook_id);
        this.storage.set('google_id', user.google_id);
        this.storage.set('email', user.email);
        this.storage.set('first_name', user.first_name);
        this.storage.set('last_name', user.last_name);
        this.storage.set('picture', user.picture);
        console.log('UserServiceProvider : setUserFacebook : line 38 : user ', user);

    this.httpOptions = this.getHeader();
    return this.httpClient.post<any>(this.apiUrl+"register.php", user, this.httpOptions)
      .pipe(        
        catchError(this.handleError)
      );  
  }

  getUser(){
    this.storage.get('userLogued').then((userLogued) => {
      console.log('line 49 : userLogued is ', userLogued);
      this.isUserLoggedIn = userLogued;
      if(userLogued){
        this.user.isUserLoggedIn = userLogued;         
    
        this.storage.get('facebook_id').then((facebook_id) => {
          console.log('line 57 : Your facebook_id is', facebook_id);
          this.user.facebook_id = facebook_id;
        });
        this.storage.get('google_id').then((google_id) => {
          console.log('line 60 : Your google_id is', google_id);
          this.user.google_id = google_id;
        });
        this.storage.get('email').then((email) => {
          //console.log('line 42 : Your email is', email);
          this.user.email = email;
        });
        this.storage.get('first_name').then((first_name) => {
          //console.log('line 46 : Your first_name is', first_name);
          this.user.first_name = first_name;            
        });
        this.storage.get('last_name').then((last_name) => {
          //console.log('line 50 : Your last_name is', last_name);
          this.user.last_name = last_name;            
        }); 
        this.storage.get('picture').then((picture) => {
          //console.log('line 54 : Your picture is', picture);
          this.user.picture = picture;
        });
      }
    });
    console.log('UserServiceProvider : getUser : line 77 : this.user ', this.user);
    return this.user;
  }

  logoutUser(user: User){
    console.log('UserServiceProvider : logoutUser : line 82', false);
    this.storage.set('userLogued', false);
    this.isUserLoggedIn = false;
    this.user.isUserLoggedIn = false;
  }

  getHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.user.token ? 'Bearer ' + this.user.token : ''
      })
    };
  }
/*
  private handleError_(error: HttpErrorResponse) {   
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
        console.log(error);
    }
    return throwError( error );
  };
*/
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
