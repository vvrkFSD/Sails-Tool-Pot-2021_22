import { Component, OnInit } from '@angular/core';

import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';

import { WholeServiceService } from '../whole-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  admin = true;
  f = faUserCircle
  bar = faBars
  home = this.service.icons.home
  project = this.service.icons.Project;

  constructor(private service: WholeServiceService) { }

  ngOnInit(): void {
    
  }

  showSideNav(){
    this.service.toggleNav();
  }

}
