import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

    username:any;
    password:any;
    errorMessage:any;

    constructor(private router:Router){}

    checkLogin() {
       if(this.username=='admin' && this.password=='admin123') {
        console.log("admin login successfull");
        this.router.navigate(['/admin/menu']);
       } else {
          if(this.username!='admin')
          this.errorMessage='Invalid username';
         else
         this.errorMessage='Invalid password';
       }
    }
}
