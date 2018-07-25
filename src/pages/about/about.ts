import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
offer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    let offer:any = {};
    offer.subject = '1 BOMBA GRANDE 1 BOMBAS DE BAÑO CHICA Y 2 CORAZONES';
    offer.picture_path = '//offers/49/201805121937120001.png';
    offer.company_name = 'NOMEOLVIDES';
    offer.full_address = '2134 José Olaya, 100, Ramos Mejía, Buenos Aires, La Matanza';
    offer.start_to_end_date = '8 May 2018 - 8 Ago 2018';
    offer.remaining_time = 'Finaliza en 13 Días 2 Horas';
    offer.priceFormated = '$ 230.00';
    offer.specialPriceFormated = '$ 170.00';
    offer.priceDiscount = '26.1 %';
    offer.phone = '5401164785564555';
    offer.link = 'http://mioferta.local/offer/49-1-bomba-grande-1-bombas-de-bano-chica-y-2-corazones';
    console.log('offer',offer);
    this.offer = offer;
  }


}
