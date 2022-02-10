import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  password = "password"
  p = '*'
  passwordChange='';

  constructor() { }

  ngOnInit(): void {
    this.passwordChange = this.p.repeat(this.password.length)
  }

}
