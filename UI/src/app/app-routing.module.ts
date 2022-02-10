import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './common-components/forgot-password/forgot-password.component';
import { LoginComponent } from './common-components/login/login.component';
import { SetPasswordComponent } from './common-components/set-password/set-password.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'set', component: SetPasswordComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
