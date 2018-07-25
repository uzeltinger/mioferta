import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { User } from '../../models/user';
import { HomePage } from '../home/home';
import { LoginFacebookPage } from '../login-facebook/login-facebook';
import { LoginGooglePage } from '../login-google/login-google';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  isUserLoggedIn: boolean = false;
  userInfo: User = new User;
  company: any = {};
  showSplash: boolean;
  errorMessage: any;

  constructor(public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: Facebook,
    private googlePlus: GooglePlus,
    public userService: UserServiceProvider) {
    console.log('constructor ProfilePage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.userInfo = this.userService.getUser();
    this.isUserLoggedIn = this.userInfo.isUserLoggedIn;
    this.company.name = 'Mi compañía se llamará';
    this.company.whatsapp = '2916481551';
  }



  logout() {

    if (this.platform.is('android')) {
      console.log('Perfil logout line 44 platform.is.android');

      this.fb.getLoginStatus()
        .then(res => {
          console.log('Perfil logout line 48 res.status: ', res.status);
          if (res.status === "connect") {

            this.fb.logout().then(logoutRes => {
              this.isUserLoggedIn = false;
              this.userService.logoutUser(this.userInfo);
              console.log('Perfil logout line 61 logoutRes', logoutRes);
              //this.navCtrl.setRoot(HomePage);
            }
            ).catch(logoutErr =>
              console.log('logoutErr', logoutErr)
            );

          } else {

            this.logoutFromGoogle();

          }
        })
        .catch(e => console.log(e)
        );      
    }

    if (this.platform.is('core')) {
      this.isUserLoggedIn = false;
      this.userService.logoutUser(this.userInfo);
      console.log('Perfil logout line 84 logoutUser');
      this.navCtrl.setRoot(HomePage);
    }

  }

  public logoutFromGoogle(){

    this.googlePlus.trySilentLogin().then(res => {
      console.log('LoginGooglePage logout : trySilentLogin : line 86', res);      
    })
    .catch(
      err => console.error('error logout line 89: ' ,err)
    );


    this.googlePlus.logout()
    .then(res => {
      console.log('LoginGooglePage logout : res : line 95', res);
      this.isUserLoggedIn = false;
      this.userService.logoutUser(this.userInfo);
    })
    .catch(err => {
      console.error('error logout line 99: ' ,err);
      this.isUserLoggedIn = false;
      this.userService.logoutUser(this.userInfo);
  }
  );
  }

  public goLoginFacebookPage() {
    this.navCtrl.push(LoginFacebookPage);
  }
  public goLoginGooglePage() {
    this.navCtrl.push(LoginGooglePage);
  }

  companyForm(form){
    console.log('form this.company: ',this.company);
    this.showSplash = true;
    this.userService.sendCompanyData(this.company)
        .subscribe(
          companyData => {
            console.log('companyData: ',companyData);
            if(companyData.error){
              console.log('companyData.error : ',companyData.error);
              this.showSplash = false;
            }else{
              //this.userInfo = companyData.userData;
              //this.goProfilePage();
              this.showSplash = false;
            }
            
          },
          error => {
            this.errorMessage = <any>error;
            //console.log('error: ',error);          
          }
        );       
  }
}
