import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
  addProduct(product){
    return this.http.post("http://localhost:3019/api/addProduct",product);
  }
   getAllProducts(){
     return this.http.get("http://localhost:3019/api/getAllProducts");
   }
    getProductById(productId){
      return this.http.get("http://localhost:3019/api/getProductById/"+productId);
    }
    deleteProductById(productId){
         return this.http.delete("http://localhost:3019/api/deleteProductById/"+productId);
    }
    updateProductById(productId,product){
      return this.http.put("http://localhost:3019/api/editProductById/"+productId,product);
    }
}

