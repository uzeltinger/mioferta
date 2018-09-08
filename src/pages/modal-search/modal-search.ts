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
  cities: any;
  categoriesFiltered: any = [];
  citiesFiltered: any = [];
  showSplash = true;

  constructor(public navCtrl: NavController, 
    public proveedor:ProveedorProvider, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSearchPage');
    this.getCitiesFiltered();
    this.getCategoriesFiltered();
    this.getCategories();
    this.getCities();
  }

  getCities(){
    this.proveedor.getCities()
    .subscribe(
      (data)=> {         
        this.cities = data; 
        this.cities.forEach((valor : any) => {
          console.log('valor.id',valor.city);
          let a = this.citiesFiltered.indexOf(valor.city);
          if(a!=-1){
            valor.isAssigned = true;
          }
          console.log('a',a);          
        });
        this.showSplash = false;
        console.log('cities',data) ;
      },
      (error)=>{console.log('error',error);}
    )
  }

  getCategories(){
    this.proveedor.getCategories()
    .subscribe(
      (data)=> {
        this.categories = data; 
        this.categories.forEach((valor : any) => {
          let a = this.categoriesFiltered.indexOf(valor.id);
          if(a!=-1){
            valor.isAssigned = true;
          }       
        });
        this.showSplash = false;
      },
      (error)=>{console.log('error',error);}
    )
  }

  toggleCategory(category){
    if (localStorage.getItem("categoriesFiltered") === null) {
      this.categoriesFiltered = [];
    }else{
      this.categoriesFiltered = JSON.parse(localStorage.getItem("categoriesFiltered"));
    }
    if(category.isAssigned){
      let newCategoriesFiltered = [];
      let existe:boolean = false;
      this.categoriesFiltered.forEach((valor : any) => {
        if(valor==category.id){
          existe = true;
        }        
      });
      if(!existe){
        this.categoriesFiltered.push(category.id);
      }
    }else{
      let newCategoriesFiltered = [];
      this.categoriesFiltered.forEach((valor : any) => {
        if(valor!=category.id){
          newCategoriesFiltered.push(valor);
        }
      });
      this.categoriesFiltered = newCategoriesFiltered;
    }
    this.setCategoriesFiltered();
  }

  toggleCity(city){  
    if (localStorage.getItem("citiesFiltered") === null) {
      this.citiesFiltered = [];
    }else{
      this.citiesFiltered = JSON.parse(localStorage.getItem("citiesFiltered"));
    }
    if(city.isAssigned){
      let newCitiesFiltered = [];
      let existe:boolean = false;
      this.citiesFiltered.forEach((valor : any) => {
        if(valor==city.city){
          existe = true;
        }        
      });
      if(!existe){
        this.citiesFiltered.push(city.city);
      }
    }else{
      let newCitiesFiltered = [];
      this.citiesFiltered.forEach((valor : any) => {
        if(valor!=city.city){
          newCitiesFiltered.push(valor);
        }
      });
      this.citiesFiltered = newCitiesFiltered;
    }
    this.setCitiesFiltered();
  }

  getCitiesFiltered(){
    if (localStorage.getItem("citiesFiltered") === null) {
      this.citiesFiltered = [];
    }else{
      this.citiesFiltered = JSON.parse(localStorage.getItem("citiesFiltered"));
    }
  }

  getCategoriesFiltered(){
    if (localStorage.getItem("categoriesFiltered") === null) {
      this.categoriesFiltered = [];
    }else{
      this.categoriesFiltered = JSON.parse(localStorage.getItem("categoriesFiltered"));
    }
  }

  setCitiesFiltered(){    
    localStorage.setItem("citiesFiltered", JSON.stringify(this.citiesFiltered))
    console.log('citiesFiltered',this.citiesFiltered);    
  }

  setCategoriesFiltered(){    
    localStorage.setItem("categoriesFiltered", JSON.stringify(this.categoriesFiltered))
    console.log('categoriesFiltered',this.categoriesFiltered);    
  }

  dismiss() { 
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
}
