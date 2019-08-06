export class Routes{

    static categories=['footwear','mobileaccessories','clothes','laptops'];
    static routes={
         login:true,
         register:true,
         cart:false,
         todaydeals:false,
         giftcard:false,
         logout:false
    }

    static isUserLoggedIn(){
    return localStorage.getItem('isUserLoggedIn');
    }
    static getCategories(){
        return Routes.categories;
    }
}