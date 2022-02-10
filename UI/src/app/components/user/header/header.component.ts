import { Component, OnInit } from '@angular/core';

import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  admin = true;
  f = faUserCircle;
  bar = faBars;

  constructor() {}

  ngOnInit(): void {}

  showSideNav() {}
}
