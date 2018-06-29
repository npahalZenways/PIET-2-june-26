import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { ComponentOneComponent } from './data-sharing-between-components/component-one/component-one.component';
import { ComponentTwoComponent } from './data-sharing-between-components/component-two/component-two.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InBuiltDirectivesComponent,
    ComponentOneComponent,
    ComponentTwoComponent
    // remaining things - components, directives, pipes
  ],
  imports: [
    BrowserModule,
    FormsModule
    // modules
  ],
  providers: [
    // services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
