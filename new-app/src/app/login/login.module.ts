import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
