import { Component, OnInit } from '@angular/core';
import { Routes } from '../Routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   navbarLinks= Routes.routes;
   isUserLoggedIn=Routes.isUserLoggedIn;

  constructor() { }

  ngOnInit() {
  }
  
   


}
