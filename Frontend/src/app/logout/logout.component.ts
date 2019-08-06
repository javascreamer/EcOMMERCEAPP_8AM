import { Component, OnInit } from '@angular/core';
import {Routes} from '../Routes';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let changeRoutes=Routes.routes;
    changeRoutes.login=true;
    changeRoutes.register=true;
    changeRoutes.logout=false;
    changeRoutes.giftcard=false;
    changeRoutes.todaydeals=false;
  }

}
