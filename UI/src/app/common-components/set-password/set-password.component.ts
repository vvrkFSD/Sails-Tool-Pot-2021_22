import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent implements OnInit {
  //constructor() { }

  //ngOnInit(): void {
  //}

  resetForm: FormGroup = new FormGroup({
    userData: new FormGroup({
      password: new FormControl(null, Validators.required),
      confirmpassword: new FormControl(null, Validators.required),
    }),
  });
  constructor() {}
  onSubmit(): void {}

  ngOnInit(): void {}
}
