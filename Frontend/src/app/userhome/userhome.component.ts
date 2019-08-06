import { Component, OnInit } from '@angular/core';
import { Routes } from '../Routes';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
     //Routes.isUserLoggedIn=true;
     console.log(Routes.isUserLoggedIn);
    let changeRoutes=Routes.routes;
    changeRoutes.login=false;
    changeRoutes.register=false;
    changeRoutes.logout=true;
    changeRoutes.giftcard=true;
    changeRoutes.todaydeals=true;
  }

}
