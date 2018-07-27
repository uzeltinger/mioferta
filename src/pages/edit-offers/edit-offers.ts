import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OfferServiceProvider } from '../../providers/offer-service/offer-service';
import { User } from '../../models/user';
import { Company } from '../../models/company';
import { UserServiceProvider } from '../../providers/user-service/user-service';

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
  showSplash = true;
  isUserLoggedIn: boolean = false;
  userInfo: User = new User;
  company: Company = new Company;
  constructor(public navCtrl: NavController, 
    public offerService: OfferServiceProvider, 
    public navParams: NavParams,
    public userService: UserServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditOffersPage');
    
    this.userInfo = this.userService.getUser();
    this.isUserLoggedIn = this.userInfo.isUserLoggedIn;
    this.company = this.userService.getCompany();
    console.log('this.company',this.company);
    this.getCompanyOffers();
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
 
}
