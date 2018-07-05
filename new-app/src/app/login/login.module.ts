import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { SignupComponent } from './signup.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent
    },{
      path: 'signup',
      component: SignupComponent
    }])
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ]
})
export class LoginModule { }
