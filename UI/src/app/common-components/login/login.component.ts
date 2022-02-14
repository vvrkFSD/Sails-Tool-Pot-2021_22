import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted = false;

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  valid = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // if (this.auth.isLoggedIn()) {
    //  this.router.navigate(['admin']);
    // }
  }

  onSubmit(): void {
    this.submitted = true;
    // console.log(this.LoginForm.value, this.LoginForm.controls);
    // if (!this.LoginForm.valid) {
    //   this.valid = 'Check Your Email or Password';
    // } else {
    //   this.valid = '';
    // }

    if (this.LoginForm.valid) {
      this.auth.login(this.LoginForm.value).subscribe(
        (result: any) => {
          console.log(result);
          this.router.navigate(['/user']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
