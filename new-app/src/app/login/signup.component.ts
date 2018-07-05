import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupForm') signupform;

  // loginsub: Subscription;

  constructor(
    private _http: HttpClient,
    private loginService: LoginService
  ) { 
    // this.loginsub = loginService.myobservable.subscribe(val => {
    //   console.log(val);
    // })
  }

  signup(form){

    // sessionStorage.setItem('email', form.email);
    // sessionStorage.setItem('password', form.password);

    // this.signupform.reset();

    // window.alert('Sign-up successful')

    this._http.post('http://localhost:5000/user/register', {
      email: form.email,
      name: form.name,
      password: form.password
    }).subscribe((res:any)=>{
      if(res.success){
        window.alert(res.msg);
        this.signupform.reset();
      } else{
        window.alert(res.msg);
      }
    })

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    // console.log('destroying signup');
    // this.loginsub.unsubscribe();
  }

}
