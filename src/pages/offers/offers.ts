import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OfferPage } from '../offer/offer';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';


/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

  offers: any
  whatsappText:string
  showSplash = true; // <-- show animation
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor:ProveedorProvider) {
    this.whatsappText = "Dentro%20de%20las%2048hs.%20paso%20a%20retirar%20la%20oferta.%0AMuchas%20gracias.%0A";
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
    setTimeout(() => {
      this.getOffers();
     }, 1000);
  }
  getOffers(){
    this.proveedor.obtenerOfertas()
    .subscribe(
      (data)=> {         
        this.offers = data; 
        this.showSplash = false;
        console.log('data',data) ;
      },
      (error)=>{console.log('error',error);}
    )
  }
  navToOfferPage(event, offer){
    this.navCtrl.push(OfferPage, {
      offer: offer
    });
  }
}
