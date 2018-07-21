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
    console.log('ionViewDidLoad HomePage');

    if (this.platform.is('core')) {
      this.storage.get('name').then((val) => {
        console.log('line 24 : Your name is', val);
      });
    }

    
      this.storage.get('userLogued').then((userLogued) => {
        console.log('line 30 : userLogued is ', userLogued);
        this.isUserLoggedIn = userLogued;
      });
      this.storage.get('id').then((id) => {
        console.log('line 34 : Your id is', id);
        this.userInfo.id = id;
      });
      this.storage.get('email').then((email) => {
        console.log('line 38 : Your email is', email);
        this.userInfo.email = email;
      });
      this.storage.get('first_name').then((first_name) => {
        console.log('line 42 : Your name is', first_name);
        this.userInfo.first_name = first_name;

        if (this.platform.is('android')) {
          this.showWelcomeToast();
        }
        
      });
      
      this.storage.get('picture').then((picture) => {
        console.log('line 46 : Your picture is', picture);
        this.userInfo.picture = picture;
      });
    


    
    
  }

  public showWelcomeToast(){
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
