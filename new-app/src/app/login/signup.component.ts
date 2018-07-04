import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupForm') signupform;

  constructor() { }

  signup(form){

    sessionStorage.setItem('email', form.email);
    sessionStorage.setItem('password', form.password);

    this.signupform.reset();

    window.alert('Sign-up successful')
  }

  ngOnInit() {
  }

}
