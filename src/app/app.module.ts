import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import {Facebook} from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OffersPage } from '../pages/offers/offers';
import { OfferPage } from '../pages/offer/offer';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';

import { ProveedorProvider } from '../providers/proveedor/proveedor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OffersPage,
    OfferPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OffersPage,
    OfferPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HeaderColor,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProveedorProvider,
    Facebook
  ]
})
export class AppModule {}