import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OfferServiceProvider } from '../../providers/offer-service/offer-service';
import { User } from '../../models/user';
import { Company } from '../../models/company';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { EditOfferPage } from '../edit-offer/edit-offer';
import { OfferPage } from '../offer/offer';

/**
 * Generated class for the EditOffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-offers',
  templateUrl: 'edit-offers.html',
})
export class EditOffersPage {
  offers: any
  whatsappText:string
  showSplash = true;
  isUserLoggedIn: boolean = false;
  userInfo: User = new User;
  company: Company = new Company;
  pictures_path:string = '';
  toolbarShow: boolean = false;
  taskCreate: boolean = true;
  taskShare: boolean = false;
  taskDelete: boolean = false;

  constructor(public navCtrl: NavController, 
    public offerService: OfferServiceProvider, 
    public navParams: NavParams,
    public userService: UserServiceProvider
  ) {
    this.whatsappText = "Dentro%20de%20las%2048hs.%20paso%20a%20retirar%20la%20oferta.%0AMuchas%20gracias.%0A";
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditOffersPage');
    this.pictures_path = this.offerService.picturesPath; 
    this.isUserLoggedIn = this.userService.isUserLoggedIn;
    this.userInfo = this.userService.getUser();
    
    this.company = this.userService.getCompany();
    console.log('this.company',this.company);
    this.getUserOffers();
    
  }
  
  getCompanyOffers(){
    this.offerService.getCompanyOffers(this.company.id)
    .subscribe(
      (data)=> {         
        this.offers = data; 
        this.showSplash = false;
        console.log('data',data) ;
      },
      (error)=>{
        console.log('error',error);
      this.showSplash = false;
    }
    )
  } 

  getUserOffers(){
    this.offerService.getUserOffers(this.userInfo.id)
    .subscribe(
      (data)=> {         
        this.offers = data; 
        this.showSplash = false;
        console.log('data',data) ;
      },
      (error)=>{
        console.log('error',error);
      this.showSplash = false;
    }
    )
  } 

  addNewOffer(){
    let newOffer: object = {'id':'0'};    
    console.log('newOffer',newOffer);
    this.navCtrl.push(EditOfferPage, {
          offer: newOffer
        });
  }
  navToOfferPage(event, offer){
    this.navCtrl.push(OfferPage, {
      offer: offer
    });
  }
  increaseWhatsappCount(offer){
    
  }

  toolbarToggle(){
    this.toolbarShow = this.toolbarShow ? false : true;
  }

  itemsSelectedCreate(){
    this.toolbarToggle();
  }
  itemsSelectedTrash(){
    this.toolbarToggle();
  }
  itemsSelectedShare(){
    this.toolbarToggle();
  }

  goNewOfferPage() {
    this.toolbarToggle();
    let newOffer: object = { 'id': '0' };
    console.log('newOffer', newOffer);
    this.navCtrl.push(EditOfferPage, {
      offer: newOffer
    });
  }
}
