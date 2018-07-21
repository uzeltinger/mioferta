import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { LoginGooglePage } from '../login-google/login-google';
import { LoginFacebookPage } from '../login-facebook/login-facebook';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userInfo: any = {};
  isUserLoggedIn: boolean = false;
  constructor(public platform: Platform,public navCtrl: NavController, private storage: Storage, private toast: Toast) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    if (this.platform.is('core')) {
      this.storage.get('name').then((val) => {
        console.log('Your name is', val);
      });
    }

    if (this.platform.is('core')) {
      this.storage.get('userLogued').then((userLogued) => {
        console.log('userLogued is ', userLogued);
        this.isUserLoggedIn = userLogued;
      });
      this.storage.get('first_name').then((first_name) => {
        console.log('Your name is', first_name);
        this.userInfo.first_name = first_name;
      });
    }


    this.toast.show(this.userInfo.first_name, '5000', 'center').subscribe(
      toast => {
        console.log(this.userInfo.first_name);
      }
    );
    
  }


  public goLoginFacebookPage(){
    this.navCtrl.push(LoginFacebookPage);
    //this.navCtrl.setRoot(LoginFacebookPage);
  }
  public goLoginGooglePage(){
    this.navCtrl.push(LoginGooglePage);
    
  }

}
