import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ProductsService } from '../products.service';
import {ActivatedRoute} from '@angular/router';
import {Routes} from '../Routes';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
productId;
productData;
categories= Routes.getCategories();

  constructor(private productService:ProductsService,private route:ActivatedRoute) {
   }
  ngOnInit() {
    this.productId=this.route.snapshot.paramMap.get("productId");
    this.productService.getProductById(this.productId).subscribe(
      (response) => {
         this.productData=response;
         console.log(this.productData);
      }
    );
   }
  product= new FormGroup({
    productName: new FormControl("",[Validators.required,Validators.minLength(5), Validators.maxLength(200)]),
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

  updateProduct(product){
       console.log(product.value);
       this.productService.updateProductById(this.productId,product.value).subscribe(
         (response) => {
           alert(response);
         }
       )

  }

}
