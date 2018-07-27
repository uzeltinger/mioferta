import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-offer',
  templateUrl: 'edit-offer.html',
})
export class EditOfferPage {
  offer:any;
  isNewOffer: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.offer = navParams.data.offer;
    console.log('this.offer',this.offer);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditOfferPage');
    if(this.offer.id==0){
      this.isNewOffer = true;
    }
  }

}
