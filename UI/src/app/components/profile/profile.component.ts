import { Component, DoCheck, OnInit } from '@angular/core';
import { WholeServiceService } from '../whole-service.service';
import { ActivatedRoute, Router } from '@angular/router';

import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, DoCheck{
  nav = false;
  showAcc = false;
  showCP = false;

  right = faAngleRight;
  down = faAngleDown;

  constructor(private service: WholeServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nav = this.service.sideNav;
  }

  ngDoCheck(){
    this.nav = this.service.sideNav;
    console.log(this.nav)
  }

  openAccount(){
    this.router.navigate(['account'],{relativeTo: this.route});
    this.showAcc = !this.showAcc;
  }

  openPswd(){
    this.router.navigate(['change-password'], {relativeTo: this.route});
    this.showCP = !this.showCP;
  }
  

}
