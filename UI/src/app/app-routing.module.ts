import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './common-components/forgot-password/forgot-password.component';
import { LoginComponent } from './common-components/login/login.component';
import { SetPasswordComponent } from './common-components/set-password/set-password.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProjectsComponent } from './admin-components/projects/projects.component';
import { ToolsComponent } from './admin-components/tools/tools.component';

import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './admin-components/users/users.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'set', component: SetPasswordComponent },
  { path: 'user', component: UserComponent },
  {
    path: 'admin',
    component: AdminComponent,
    //children: [{ path: 'projects', component: ProjectComponent }],
  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
