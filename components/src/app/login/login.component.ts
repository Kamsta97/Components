import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
    
  }

  login() {
    console.log(this.loginForm);
    localStorage.setItem('user', JSON.stringify({name: this.loginForm.get('email')?.value}));
    this.router.navigate(['/','courses'])
    setTimeout(() => {
      window.location.reload();
    }, 1000)
  }

}
