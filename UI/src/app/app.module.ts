import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common-components/login/login.component';
import { ForgotPasswordComponent } from './common-components/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetPasswordComponent } from './common-components/set-password/set-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProjectsComponent } from './admin-components/projects/projects.component';
import { ToolsComponent } from './admin-components/tools/tools.component';
import { UsersComponent } from './admin-components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
    UserComponent,
    AdminComponent,
    ProjectsComponent,
    ToolsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
