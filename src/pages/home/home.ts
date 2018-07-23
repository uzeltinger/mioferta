import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { LoginGooglePage } from '../login-google/login-google';
import { LoginFacebookPage } from '../login-facebook/login-facebook';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { OffersPage } from '../offers/offers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userInfo: any = {};
  isUserLoggedIn: boolean = false;
  
  constructor(public platform: Platform,
    public navCtrl: NavController, 
    private storage: Storage, 
    private toast: Toast,
    public userService: UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    if (this.platform.is('core')) {
      
    }

    this.userInfo = this.userService.getUser();
    console.log('HomePage : ionViewDidLoad : line 32 : this.userInfo ' , this.userInfo);
    
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

  public goOffersPage(){
    this.navCtrl.setRoot(OffersPage);    
  }
  public goProfilePage(){
    this.navCtrl.setRoot('ProfilePage');    
  }
}
