import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { IonicStorageModule } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OffersPage } from '../pages/offers/offers';
import { OfferPage } from '../pages/offer/offer';
import { LoginPage } from '../pages/login/login';
import { LoginGooglePage } from '../pages/login-google/login-google';
import { LoginFacebookPage } from '../pages/login-facebook/login-facebook';
import { ProfilePage } from '../pages/profile/profile';
import { CategoriesPage } from '../pages/categories/categories';
import { CategoryPage } from '../pages/category/category';
import { EditOffersPage } from '../pages/edit-offers/edit-offers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';

import { ProveedorProvider } from '../providers/proveedor/proveedor';
import { AboutPage } from '../pages/about/about';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { OfferServiceProvider } from '../providers/offer-service/offer-service';
import { EditOfferPage } from '../pages/edit-offer/edit-offer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OffersPage,
    OfferPage,
    LoginPage,LoginGooglePage,LoginFacebookPage,AboutPage,
    ProfilePage,CategoriesPage,CategoryPage,EditOffersPage,EditOfferPage
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
    LoginPage,LoginGooglePage,LoginFacebookPage,AboutPage,
    ProfilePage,CategoriesPage,CategoryPage,EditOffersPage,EditOfferPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HeaderColor,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProveedorProvider,
    Facebook,
    GooglePlus,
    Toast,
    UserServiceProvider,
    OfferServiceProvider,
    Camera,
    ImagePicker,
    Base64,
    SocialSharing
  ]
})
export class AppModule {}