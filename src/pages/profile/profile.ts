import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { User } from '../../models/user';
import { HomePage } from '../home/home';
import { LoginFacebookPage } from '../login-facebook/login-facebook';
import { LoginGooglePage } from '../login-google/login-google';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  isUserLoggedIn: boolean = false;
  userInfo: User = new User;
  
  constructor(public platform: Platform,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userService: UserServiceProvider) {
      console.log('constructor ProfilePage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.userInfo = this.userService.getUser();
    console.log('ProfilePage : ionViewDidLoad : line 35 : this.userInfo ' , this.userInfo);
    this.isUserLoggedIn = this.userInfo.isUserLoggedIn;
    console.log('ionViewDidLoad ProfilePage this.isUserLoggedIn ',this.isUserLoggedIn);
  }
  logout(){    
      this.isUserLoggedIn = false;
      this.userService.logoutUser(this.userInfo);
      this.navCtrl.setRoot(HomePage);        
  }
  public goLoginFacebookPage(){
    this.navCtrl.push(LoginFacebookPage);
  }
  public goLoginGooglePage(){
    this.navCtrl.push(LoginGooglePage);    
  }
}
