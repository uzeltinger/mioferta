import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-search',
  templateUrl: 'modal-search.html',
})
export class ModalSearchPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSearchPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
