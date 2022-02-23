import { Component, Input, OnInit } from '@angular/core';

import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { IsAdminService } from 'src/app/services/is-admin.service';

import { WholeServiceService } from '../whole-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() nav: boolean = false;

  admin = this.isAdmin.admin;
  f = faUserCircle
  bar = faBars
  home = this.service.icons.home
  project = this.service.icons.Project;

  constructor(private service: WholeServiceService,
              private isAdmin: IsAdminService) { }

  ngOnInit(): void {
    
  }

  showSideNav(){
    this.service.toggleNav();
  }

}
