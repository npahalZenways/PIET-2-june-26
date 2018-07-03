import { Component } from "@angular/core";

@Component({
    template: `
    <div class="mt-2">

        <button routerLinkActive="btn-outline-primary" [routerLinkActiveOptions]="{exact: true}" class="btn mx-1" [routerLink]="['pipes',title]">Pipes</button>
    
        <button routerLinkActive="btn-outline-primary" class="btn mx-1" routerLink="data-binding">Data-binding</button>

        <button routerLinkActive="btn-outline-primary" class="btn mx-1" routerLink="in-built-directives">In-built-directives</button>
    </div>
    <div class="border m-2 p-4">
        <router-outlet></router-outlet>    
    </div>
    <p> This is Dashboard Component </p>`
})
export class Dashboard{
    
}