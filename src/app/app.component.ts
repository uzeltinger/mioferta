import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { HeaderColor } from '@ionic-native/header-color';

import { HomePage } from '../pages/home/home';
import { OffersPage } from '../pages/offers/offers';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen/*, public headerColor: HeaderColor*/) {        
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Ofertas', component: OffersPage },
      { title: 'Login', component: LoginPage }
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
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
