import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-vote',
  templateUrl: './success-vote.component.html',
  styleUrls: ['./success-vote.component.css']
})
export class SuccessVoteComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit() {
    localStorage.removeItem('isloggedIn');
    setTimeout(()=> {
      this.router.navigate(['/login']);
    },10000);
  }
}
