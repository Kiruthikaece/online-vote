import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent  implements OnInit{

  voter:any={};
  otp:any;
  errorMessage:any;
  constructor(private router:Router){}

  

  ngOnInit() {
    const user=localStorage.getItem('loggedInUser');
    if(user)
    this.voter=JSON.parse(user);

  }


  navigateToVoter() {
    const expectedOtp='12345';
    if(expectedOtp==this.otp) {
      console.log("otp success");
      this.router.navigate(['/vote']);
    } else {
      this.errorMessage = 'Invalid OTP. Please try again.';
    }
    
  }


}
