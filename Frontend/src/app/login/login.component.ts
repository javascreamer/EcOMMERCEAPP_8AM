import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errorStatus;
  userResponse;
  
  constructor(private users:UserService,private router:Router) { }

  ngOnInit() {
  }

  loginForm= new FormGroup({
   
    emailId: new FormControl('',[Validators.required,Validators.pattern(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/)]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{5,10}$/)])
  })

  loginUser(data){
     this.users.loginUser(data.value).subscribe( (response) => {
       this.userResponse=response;
       this.errorStatus=this.userResponse.status;
       if(this.userResponse.status){
           this.router.navigateByUrl('userhome');
       }
     })
  }
  get emailId(){
    return this.loginForm.get('emailId');
  }
  get password(){
    return this.loginForm.get('password');
  }
}
