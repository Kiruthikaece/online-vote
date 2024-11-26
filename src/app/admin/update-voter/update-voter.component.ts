import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/User.service';

@Component({
  selector: 'app-update-voter',
  templateUrl: './update-voter.component.html',
  styleUrls: ['./update-voter.component.css']
})
export class UpdateVoterComponent {
  aadharNumber:any;
  errorMessage:any;

  constructor(private userService:UserService,private router:Router) {}

  checkUserUpdation() {
    this.userService.checkUser(this.aadharNumber).subscribe((response:any)=> {
      if (response.status === 'success') {
        console.log(response);
        localStorage.setItem('UpdatedUser', JSON.stringify(response));
        this.router.navigate(['/admin/update-voter/updation']) 
      } else {
        this.errorMessage = response.message || 'Invalid Aadhar number';
      }
    },
    (error: any) => {
      console.error('Error:', error);
      this.errorMessage = 'An error occurred while checking Aadhar number';
    });
  }


}
