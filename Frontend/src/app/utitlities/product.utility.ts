
export class Product{
    static productId:number=0;
    static proId(){
         return localStorage.getItem('productId');
     }
}
