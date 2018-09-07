import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';

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
  categories: any;
  localities: any;
  showSplash = true;

  constructor(public navCtrl: NavController, 
    public proveedor:ProveedorProvider, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSearchPage');
    this.getCategories();
    this.getLocalities();
    /*
    if(value.state == 1){
            value.isAssigned = true;
            offersActives++;
          }
          */
  }

  getLocalities(){
    this.proveedor.getLocalities()
    .subscribe(
      (data)=> {         
        this.localities = data; 
        this.showSplash = false;
        console.log('localities',data) ;
      },
      (error)=>{console.log('error',error);}
    )
  }

  getCategories(){
    this.proveedor.getCategories()
    .subscribe(
      (data)=> {         
        this.categories = data; 
        this.showSplash = false;
        console.log('data',data) ;
      },
      (error)=>{console.log('error',error);}
    )
  }

  toggleCategory(category){
    console.log('toggleOfferState category : ',category);
    let newState = 1;
    if(category.state == 1){
      newState = 2;
    }
  }

  toggleLocality(locality){
    console.log('toggleOfferState locality : ',locality);
    let newState = 1;
    if(locality.state == 1){
      newState = 2;
    }
  }

  dismiss() { 
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
}
