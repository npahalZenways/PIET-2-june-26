import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginform;

  constructor(
    private router: Router
  ) { }

  /*
  *For creating new item
    localStorage.setItem('name', 'jhg)
  
  For getting a saved item
    localStorage.getItem('name')

    localStorage.name;
  
  For removing an item
    localStorage.removeItem('name')

  For clearing localstorage
    localStorage.clear()
  */

  login(form){
    
    if(sessionStorage.email == form.email){
      
      if(sessionStorage.password == form.password){
        
        this.router.navigate(['/dashboard']);
        window.alert('Login successful');
      } else{
        window.alert('Incorrect password');
      }
    }else{
      window.alert('Incorrect email or password');
    }

  }

  ngOnInit() {
  }

}
