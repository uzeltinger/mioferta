import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
user: User = new User;
//user: any = {};
isUserLoggedIn: boolean = false;
  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello UserServiceProvider Provider');
  }

  setUserFacebook(user:User){
    this.storage.set('userLogued', true);
        this.storage.set('facebook_id', user.facebook_id);
        this.storage.set('email', user.email);
        this.storage.set('first_name', user.first_name);
        this.storage.set('last_name', user.last_name);
        this.storage.set('picture', user.picture);
        console.log('UserServiceProvider : setUserFacebook : line 28 : user ', user);
  }

  getUser(){
    this.storage.get('userLogued').then((userLogued) => {
      console.log('line 23 : userLogued is ', userLogued);
      this.isUserLoggedIn = userLogued;
    });
    this.storage.get('facebook_id').then((facebook_id) => {
      console.log('line 27 : Your facebook_id is', facebook_id);
      this.user.facebook_id = facebook_id;
    });
    this.storage.get('email').then((email) => {
      console.log('line 31 : Your email is', email);
      this.user.email = email;
    });
    this.storage.get('first_name').then((first_name) => {
      console.log('line 35 : Your first_name is', first_name);
      this.user.first_name = first_name;            
    });
    this.storage.get('last_name').then((last_name) => {
      console.log('line 39 : Your last_name is', last_name);
      this.user.last_name = last_name;            
    }); 
    this.storage.get('picture').then((picture) => {
      console.log('line 43 : Your picture is', picture);
      this.user.picture = picture;
    });
    console.log('UserServiceProvider : getUser : line 56 : this.user ', this.user);
    return this.user;
  }
  logoutUser(user: User){
    this.storage.set('UserServiceProvider : logoutUser : line 60', false);
  }
}
