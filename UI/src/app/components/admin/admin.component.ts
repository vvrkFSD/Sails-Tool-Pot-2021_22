import { Component, OnChanges, OnInit } from '@angular/core';
import { WholeServiceService } from '../whole-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnChanges {
  nav = false

  constructor(private service: WholeServiceService) { }

  ngOnInit(): void {
    this.nav = this.service.sideNav
  }

  ngOnChanges(){
    this.nav = this.service.sideNav
    console.log("parent triggered")

  }

  onc(){
    // console.log("not changed", this.service.sideNav)
    this.nav = this.service.sideNav
    // console.log("changed", this.service.sideNav)
  }

}
