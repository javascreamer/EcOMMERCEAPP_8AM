import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {

  productId;
  product;
  deleteResponse;

  constructor(private router:Router,private route:ActivatedRoute,private productService:ProductsService) {
   }
  ngOnInit() {
   this.productId=this.route.snapshot.paramMap.get("productId");
   this.productService.getProductById(this.productId).subscribe(
     (response) => {
        this.product=response;
     }
   );
  }

  updateProduct(id){
    console.log("id",id);
    this.router.navigateByUrl('updateProduct/'+id);
  }

  deleteProduct(id){
     this.productService.deleteProductById(id).subscribe(
       (response) => {
          this.deleteResponse= response;
          if(this.deleteResponse.status == true){
            alert("Product Deleted, Navigating to Products Page!");
              this.router.navigateByUrl('viewProducts');
          }
       }
     )
  }
}
