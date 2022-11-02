import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components';
  loggedIn: boolean;
  user: any;

  constructor(router: Router) {
    this.loggedIn = localStorage.getItem('user') ? true: false;
    this.user = localStorage.getItem('user');
    console.log(localStorage.getItem('user'));
  }

  logout(event: any) {
    localStorage.removeItem('user');
    window.location.reload();
    
  }
}
