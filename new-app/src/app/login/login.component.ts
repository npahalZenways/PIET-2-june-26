import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginform;

  constructor(
    private router: Router,
    private http: HttpClient
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
    
    // if(sessionStorage.email == form.email){
      
    //   if(sessionStorage.password == form.password){
        
    //     this.router.navigate(['/dashboard']);
    //     window.alert('Login successful');
    //   } else{
    //     window.alert('Incorrect password');
    //   }
    // }else{
    //   window.alert('Incorrect email or password');
    // }

    this.http.post('https://piet-login-app.herokuapp.com/user/login', {
      email: form.email,
      password: form.password
    }).subscribe((res: any)=>{
      if(res.success){
        sessionStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
        window.alert(res.msg);
      } else{
        window.alert(res.msg);
      }
    })

  }

  ngOnInit() {
  }

}
