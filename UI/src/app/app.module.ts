import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common-components/login/login.component';
import { ForgotPasswordComponent } from './common-components/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SetPasswordComponent } from './common-components/set-password/set-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/user/header/header.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ForgotPasswordComponent, SetPasswordComponent, UserComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
