import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  offer:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.offer = navParams.data.offer;
    console.log('this.offer',this.offer);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
  }

  increaseWhatsappCount(offer){
    
  }

}
