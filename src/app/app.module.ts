import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import {Facebook} from '@ionic-native/facebook';
import { IonicStorageModule } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OffersPage } from '../pages/offers/offers';
import { OfferPage } from '../pages/offer/offer';
import { LoginPage } from '../pages/login/login';
import { LoginGooglePage } from '../pages/login-google/login-google';
import { LoginFacebookPage } from '../pages/login-facebook/login-facebook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';

import { ProveedorProvider } from '../providers/proveedor/proveedor';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OffersPage,
    OfferPage,
    LoginPage,LoginGooglePage,LoginFacebookPage,ProfilePage,AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OffersPage,
    OfferPage,
    LoginPage,LoginGooglePage,LoginFacebookPage,ProfilePage,AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HeaderColor,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProveedorProvider,
    Facebook,
    Toast
  ]
})
export class AppModule {}