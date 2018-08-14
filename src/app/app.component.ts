import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { HeaderColor } from '@ionic-native/header-color';

import { HomePage } from '../pages/home/home';
import { OffersPage } from '../pages/offers/offers';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
import { CategoriesPage } from '../pages/categories/categories';
import { User } from '../models/user';
import { UserServiceProvider } from '../providers/user-service/user-service';
//import { EditOffersPage } from '../pages/edit-offers/edit-offers';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProfilePage;

  pages: Array<{title: string, component: any, icon: string}>;

  isUserLoggedIn: boolean = false;
  userInfo: User = new User;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,/*, public headerColor: HeaderColor*/
    public userService: UserServiceProvider) {        
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'home' },
      { title: 'Ofertas', component: OffersPage, icon: 'list-box' },
      { title: 'Mi Perfil', component: ProfilePage, icon: 'person' },
      { title: 'Acerca de Mi Oferta', component: AboutPage, icon: 'information-circle' },
      { title: 'Categorías', component: CategoriesPage, icon: 'albums' }
    ];

  }

  initializeApp() {    
    if (this.platform.is('android')) {
      console.log('I am an android device!');
    }
    if (this.platform.is('windows')) {
      console.log('I am an windows device!');
    }
    if (this.platform.is('core')) {
      console.log('I am an core platform!');
    }
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleBlackOpaque();
      this.statusBar.backgroundColorByHexString('#B40F00');
      this.statusBar.show();
      //this.headerColor.tint('#E72000');
      this.splashScreen.hide();

      this.userInfo = this.userService.getUser();
      this.isUserLoggedIn = this.userInfo.isUserLoggedIn;
    });
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
