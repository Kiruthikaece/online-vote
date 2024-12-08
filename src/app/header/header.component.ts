import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 currentYear: number;

 constructor() {
  this.currentYear = new Date().getFullYear();
 }

}
