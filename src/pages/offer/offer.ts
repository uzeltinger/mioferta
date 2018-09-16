import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { OfferAddressMapModalPage } from './offer-address-map-modal';

/**
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {
  offer: any
  latitude: number;
  longitude: number;
  mapUrl: string;
  public zoom: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController) {
    this.offer = navParams.data.offer;
    console.log('this.offer', this.offer);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
    this.latitude = 0;
    this.longitude = 0;
    this.setCurrentPosition();
    this.mapUrl = 'https://maps.google.com/?saddr=-38.752038399999996,-62.2671155&daddr=-34.6611333,-58.5514339';
  }

  increaseWhatsappCount(offer) {

  }

  showAddressMapModal(offer) {
    console.log('offer', offer);
    /*
    let longitude = offer.longitude;
    let latitude = offer.latitude;
    let modal = this.modalCtrl.create(OfferAddressMapModalPage, {"longitude":longitude, "latitude":latitude});
    modal.present();
*/
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}

