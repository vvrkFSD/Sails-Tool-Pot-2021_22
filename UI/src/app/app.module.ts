import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common-components/login/login.component';
import { ForgotPasswordComponent } from './common-components/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './components/profile/change-password/change-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountComponent } from './components/profile/account/account.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProjectsComponent } from './components/admin/projects/projects.component';
import { UsersComponent } from './components/admin/users/users.component';
import { ToolsComponent } from './components/admin/tools/tools.component';
import { PrivilegesComponent } from './components/admin/privileges/privileges.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user.component';
import { UserProjectsComponent } from './components/user/user-projects/user-projects.component';
import { ProjectToolsComponent } from './components/user/user-projects/project-tools/project-tools.component';
import { TableDirective } from './directives/table.directive';
import { AddUserComponent } from './components/admin/users/add-user/add-user.component';
import { AddProjectComponent } from './components/admin/projects/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ProfileComponent,
    AccountComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    ProjectsComponent,
    UsersComponent,
    ToolsComponent,
    PrivilegesComponent,
    SidenavComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserComponent,
    UserProjectsComponent,
    ProjectToolsComponent,
    TableDirective,
    AddUserComponent,
    AddProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
