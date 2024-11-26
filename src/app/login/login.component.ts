import { Component } from '@angular/core';
import { UserService } from 'src/service/User.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  aadharNumber: string = '';
  errorMessage: string = ''; 

  constructor(private userService: UserService, private router: Router) { localStorage.removeItem('isloggedIn');}

  checkuser() {
    this.errorMessage = '';
    this.userService.checkUser(this.aadharNumber)
      .subscribe(
        (response: any) => {
          if (response.status === 'success') {
            console.log(response); 
            localStorage.setItem('loggedInUser', JSON.stringify(response));
            localStorage.setItem('isloggedIn',"true"); 
            if(!response.isVote) 
            this.router.navigate(['/otp']);
            else {
              alert('Already you are voted');
            } 
          } else {
            this.errorMessage = response.message || 'Invalid Aadhar number';
          }
        },
        (error: any) => {
          console.error('Error:', error);
          this.errorMessage = 'An error occurred while checking Aadhar number';
        }
      );
  }
  

  NavigateadminLogin() {
    this.router.navigate(['/admin-login']);
  }
}
