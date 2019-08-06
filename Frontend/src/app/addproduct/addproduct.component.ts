import { Component, OnInit } from '@angular/core';
import {Product} from '../utitlities/Product.utility';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent  {

  productResponse;

  categories=['footwear','mobileaccessories','clothes','laptops'];
  
  prodId=Product.proId();
  product= new FormGroup({
    productId: new FormControl(this.prodId),
    productName: new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(200)]),
    productDescription: new FormControl('',[Validators.required,Validators.minLength(20), Validators.maxLength(200)]),
    productURL: new FormControl('',[Validators.required]),
    category: new FormControl(''),
    productPrice:new FormControl('',[Validators.required])
  })
  get productName(){
    return this.product.get('productName');
  }
  get productDescription(){
    return this.product.get('productDescription');
  }
  get productURL(){
    return this.product.get('productURL');
  }
  get productPrice(){
    return this.product.get('productPrice');
  }
  addProduct(data){
    
    console.log(data.value);
     this.productService.addProduct(data.value).subscribe( (response) => {
           this.productResponse=response;
           if(this.productResponse.status){
             var pid=localStorage.getItem('productId');
             pid=(parseInt(pid)+1).toString();
             localStorage.setItem('productId',pid);
           }
     })
  }
  constructor(private productService:ProductsService) {
    
   }
}


