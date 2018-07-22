import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { HomePage } from '../home/home';
import { Toast } from '@ionic-native/toast';
import { User } from '../../models/user';
import { UserServiceProvider } from '../../providers/user-service/user-service';
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
  userInfo: User = new User;

  constructor(public platform: Platform,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public fb: Facebook, 
    private toast: Toast,
    public userService: UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginFacebookPage');

    if (this.platform.is('core')) {
      this.loginWithFBCore();   
    }
    
    if (this.platform.is('android')) {
      this.loginWithFB();   
    }
  }

  loginWithFBCore(){
        this.isUserLoggedIn = true;        
        this.userInfo.facebook_id = "123456";
        this.userInfo.google_id = "123456";
        this.userInfo.email = "emilio@hotmail.com";
        this.userInfo.first_name = "Emilio";
        this.userInfo.last_name = "Uzeltinger";
        this.userInfo.picture = "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10156529424594907&height=50&width=50&ext=1532533092&hash=AeTtgpZ8u1AifWe2";

        console.log('line: 55 this.userInfo',this.userInfo);

        this.userService.setUserFacebook(this.userInfo);      
  }

  loginWithFB(){
    this.fb.login(["public_profile","email"]).then( loginRes => {
      this.fb.api('me/?fields=id,email,first_name,last_name,picture',["public_profile","email"]).then( apiRes => {
        
        this.userInfo = apiRes;
        this.userInfo.picture = apiRes.picture.data.url;
        this.isUserLoggedIn = true;
        console.log('line: 65  apiRes',apiRes);
        console.log('line: 65 this.userInfo',this.userInfo);
        
        this.userService.setUserFacebook(this.userInfo);
        
        this.toast.show(this.userInfo.first_name, '5000', 'center').subscribe(
          toast => {
            console.log('line: 58  toast this.userInfo.first_name ',this.userInfo.first_name);
          }
        );

      }).catch( apiErr => console.log(apiErr));

    }).catch( loginErr => console.log(loginErr) )
  }

  logout(){
    if (this.platform.is('core')) {
      this.isUserLoggedIn = false;
      this.userService.logoutUser(this.userInfo);
      this.onClickCancel();
    }
    this.fb.logout().then( logoutRes => 
      function (){this.isUserLoggedIn = false;
        this.userService.logoutUser(this.userInfo);}
    ).catch(logoutErr => 
      console.log(logoutErr)
    );
  }
  
  public onClickCancel() {
    //this.navCtrl.pop();
    this.navCtrl.setRoot(HomePage);
  }
}
