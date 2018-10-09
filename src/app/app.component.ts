import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { HeaderColor } from '@ionic-native/header-color';

import { HomePage } from '../pages/home/home';
import { OffersPage } from '../pages/offers/offers';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
//import { CategoriesPage } from '../pages/categories/categories';
import { User } from '../models/user';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { OfferDetailTestPage } from '../pages/offer-detail-test/offer-detail-test';
import { ShareOffersPage } from '../pages/share-offers/share-offers';
//import { ProfileAddressPage } from '../pages/profile-address/profile-address';
import { EditOffersPage } from '../pages/edit-offers/edit-offers';
import { ConsultsPage } from '../pages/consults/consults';
import { Network } from '@ionic-native/network';
import { Toast } from '@ionic-native/toast';
import { ProveedorProvider } from '../providers/proveedor/proveedor';
import { AdminEmpresasPage } from '../pages/admin/empresas/empresas';
//import { EditOfferPage } from '../pages/edit-offer/edit-offer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: string }>;

  isUserLoggedIn: boolean = false;
  userInfo: any = [];

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    private network: Network,
    public splashScreen: SplashScreen,/*, public headerColor: HeaderColor*/
    public userService: UserServiceProvider,
    private alertController: AlertController,
    public proveedor: ProveedorProvider,
    private toast: Toast) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'home' },
      { title: 'Ofertas', component: OffersPage, icon: 'list-box' },
      { title: 'Mi Negocio', component: ProfilePage, icon: 'person' },
      { title: 'Acerca de Mi Oferta', component: AboutPage, icon: 'information-circle' }
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
      this.listenConnection();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleBlackOpaque();
      this.statusBar.backgroundColorByHexString('#B40F00');
      this.statusBar.show();
      //this.headerColor.tint('#E72000');
      this.splashScreen.hide();

      this.userService.suscribeUserInfo()
        .subscribe(
          (data) => {
            setTimeout(() => {
              console.log('data', data);
              this.checkUserData(data);
            }, 1000);
          },
          (error) => {
            console.log('error', error);
          }
        )
    });

  }

  checkUserData(data) {
    this.userInfo = data;
    this.isUserLoggedIn = this.userInfo.isUserLoggedIn;
    console.log('data.email ', data.email);
    if (data.email == "emiliouzeltinger@gmail.com" 
    || data.email == "fabiouz@gmail.com"
    || data.email == "riverasdaniel@gmail.com") {
      console.log('this.userInfo ', this.userInfo);
      this.pages.push({ title: 'Empresas', component: AdminEmpresasPage, icon: 'podium' });
    }else{
      console.log('ninguno');
    }
  }
  private listenConnection(): void {
    console.log('this.network.type', this.network.type);
    if (this.network.type == 'none') {
      this.proveedor.setConectadoAinternet(false);
      console.log('this.network.type es == none');
    } else {
      this.proveedor.setConectadoAinternet(true);
    }
    this.network.onDisconnect()
      .subscribe(() => {
        this.proveedor.setConectadoAinternet(false);
        this.showToast('Dispositivo desconectado. Por favor verifique su conección a internet!');
        this.showAlert();
      });
    this.network.onConnect().subscribe(() => {
      this.proveedor.setConectadoAinternet(true);
      this.showToast('Dispositivo Conectado!');
    });
  }
  showAlert() {
    var title_: string = 'Error de conección del dispositivo';
    var subTitle_: string = 'Por favor verifique su conección a internet!';
    const alert = this.alertController.create({
      title: title_,
      subTitle: subTitle_,
      buttons: ['OK']
    });
    alert.present();
  }

  showToast(text: string, duration: string = '3000', position: string = 'bottom') {
    if (this.platform.is('android')) {
      this.toast.show(text, duration, position).subscribe(
        toast => {
          console.log('line: 109  toast this.userInfo.first_name ', this.userInfo.first_name);
        }
      );
    } else {
      console.log('showToast ', text);
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
