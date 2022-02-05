import { Component, DoCheck, OnInit } from '@angular/core';
import { WholeServiceService } from '../whole-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  nav = false

  constructor(private service: WholeServiceService) { }

  ngOnInit(): void {
    this.nav = this.service.sideNav;
  }

  ngDoCheck(){
    this.nav = this.service.sideNav;
  }

}
