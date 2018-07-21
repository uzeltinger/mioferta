import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {Facebook} from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the LoginFacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-facebook',
  templateUrl: 'login-facebook.html',
})
export class LoginFacebookPage {
  isUserLoggedIn: any = false;
  userInfo: any = {};
  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams, public fb: Facebook, private storage: Storage, private toast: Toast) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginFacebookPage');
    
    this.loginWithFB();


    
      
      this.storage.set('name', 'Max');
      this.storage.get('name').then((val) => {
        console.log('line: 34 Your name is', val);
        //this.onClickCancel();
      });    
      
  }
  loginWithFB(){
    this.fb.login(["public_profile","email"]).then( loginRes => {
      this.fb.api('me/?fields=id,email,first_name,last_name,picture',["public_profile","email"]).then( apiRes => {
        
        this.userInfo = apiRes;
        this.isUserLoggedIn = true;
        console.log('line: 46  apiRes',apiRes);
        console.log('line: 47 this.userInfo',this.userInfo);
        
        this.storage.set('userLogued', true);
        this.storage.set('id', apiRes.id);
        this.storage.set('email', apiRes.email);
        this.storage.set('first_name', apiRes.first_name);
        this.storage.set('last_name', apiRes.last_name);
        this.storage.set('picture', apiRes.picture.data.url);
        //this.onClickCancel();

        this.toast.show(this.userInfo.first_name, '5000', 'center').subscribe(
          toast => {
            console.log('line: 58  toast this.userInfo.first_name ',this.userInfo.first_name);
          }
        );

      }).catch( apiErr => console.log(apiErr));

    }).catch( loginErr => console.log(loginErr) )
  }

  logout(){
    this.fb.logout().then( logoutRes => 
      this.isUserLoggedIn = false
    ).catch(logoutErr => 
      console.log(logoutErr)
    );
  }
  
  public onClickCancel() {
    //this.navCtrl.pop();
    this.navCtrl.setRoot(HomePage);
  }
}
