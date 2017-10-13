import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { RegisterModuleComponent } from './register-module/register-module.component';
import { HeaderModuleComponent } from './header-module/header-module.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginModuleComponent,
    RegisterModuleComponent,
    HeaderModuleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     {

      path: 'login',
      component: LoginModuleComponent 
     },
     {
     path: 'register',
     component: RegisterModuleComponent 
    }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
