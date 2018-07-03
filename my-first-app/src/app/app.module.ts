import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { ComponentOneComponent } from './data-sharing-between-components/component-one/component-one.component';
import { ComponentTwoComponent } from './data-sharing-between-components/component-two/component-two.component';
import { FormsModule } from "@angular/forms";
import { CustomPipe } from './custom.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { MyService } from './my-service';
import { RouterModule } from "@angular/router";
import { Error404 } from './error-404';
import { Dashboard } from './dashboard/dashboard';
import { LoginForm } from './login-form/login-form';
import { AuthGuard } from './auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InBuiltDirectivesComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    CustomPipe,
    PipesComponent,
    Error404,
    Dashboard,
    LoginForm
    // remaining things - components, directives, pipes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },{
      path: 'admin',
      canActivate: [AuthGuard],
      loadChildren: './admin/admin#Admin'
    },{
      path: 'login',
      component: LoginForm
    },{
      path: 'dashboard',
      component: Dashboard,
      children: [{
        path: '',
        redirectTo: 'data-binding',
        pathMatch: 'full'
      },{
        path: 'in-built-directives',
        component: InBuiltDirectivesComponent
      },{
        path: 'pipes/:id',
        component: PipesComponent,
        data: {
          titleInfo: 'pipe path'
        }
      },{
        path: 'data-binding',
        component: DataBindingComponent
      }]
    },{
      path: '**',
      component: Error404
    }])
    // modules
  ],
  providers: [
    // services
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
