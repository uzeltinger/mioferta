import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
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

  newPhoto: any;
  offer:any;
  isNewOffer: boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera) {
    this.offer = navParams.data.offer;
    console.log('this.offer',this.offer);
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.newPhoto = base64Image;
   }, (err) => {
    // Handle error
   });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditOfferPage');
    if(this.offer.id==0){
      this.isNewOffer = true;
    }
  }


}
