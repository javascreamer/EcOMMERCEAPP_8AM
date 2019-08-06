import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';
import { LogoutComponent } from './logout/logout.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home',component:HomeComponent},
  {path:'login/register',component:LoginComponent},
  {path:'register/login',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'register',component:RegisterComponent},
  {path: 'giftcards', component:GiftcardsComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'addProduct', component:AddproductComponent},
  {path:'viewProducts',component:ViewProductComponent},
  {path:'updateProduct/:productId', component:UpdateProductComponent},
  {path:'viewProducts/detailProduct/:productId',component:DetailproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
