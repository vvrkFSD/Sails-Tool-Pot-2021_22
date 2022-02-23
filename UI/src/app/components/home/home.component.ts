import { Component, DoCheck, OnInit } from '@angular/core';
import { IsAdminService } from 'src/app/services/is-admin.service';
import { WholeServiceService } from '../whole-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  admin = this.isAdmin.admin;
  nav = false;
  prompt = false;
  

  constructor(private service: WholeServiceService,
              private isAdmin: IsAdminService) { }

  ngOnInit(): void {
    this.nav = this.service.sideNav;
    this.prompt = this.service.newUser;
  }

  ngDoCheck(){
    this.nav = this.service.sideNav;
    this.prompt = this.service.newUser;
  }

  onHandleError() {
    this.service.newUser = false;
  }

}
