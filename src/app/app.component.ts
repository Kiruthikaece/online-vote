
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-vote';
  showHeader: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const hiddenHeaderRoutes = ['/vote', '/success'];
        this.showHeader = !hiddenHeaderRoutes.includes(event.url);
      }
    });
  }
}
