import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
        <button (click)="login()">Login</button>
    `
})
export class LoginForm{

    constructor(
        private router: Router
    ){}

    login(){
        this.router.navigate(['/dashboard', 'pipes', 'abc'])
    }
}