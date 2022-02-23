import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './common-components/forgot-password/forgot-password.component';
import { LoginComponent } from './common-components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { PrivilegesComponent } from './components/admin/privileges/privileges.component';
import { ProjectsComponent } from './components/admin/projects/projects.component';
import { ToolsComponent } from './components/admin/tools/tools.component';
import { UsersComponent } from './components/admin/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountComponent } from './components/profile/account/account.component';
import { ChangePasswordComponent } from './components/profile/change-password/change-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectToolsComponent } from './components/user/user-project/project-tools/project-tools.component';
import { UserProjectComponent } from './components/user/user-project/user-project.component';
import { UserComponent } from './components/user/user.component';
// import { UserComponent } from './components/user/user.component';
// import { UserProjectsComponent } from './components/user/user-projects/user-projects.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "forgotpassword", component: ForgotPasswordComponent},
  {path: "profile", component: ProfileComponent, children: [
    {path: "account", component: AccountComponent},
    {path: "change-password", component: ChangePasswordComponent},
  ]},
  {path: 'admin', component: AdminComponent, children: [
    {path: "projects", component: ProjectsComponent},
    {path: "users", component: UsersComponent},
    {path: "tools", component: ToolsComponent},
    {path: "privileges", component: PrivilegesComponent},
  ]},
  {path: '', component: UserComponent},
  {path: "project", component: UserProjectComponent, children: [
  {path: "tool", component: ProjectToolsComponent}
  ]},
  
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
