import { Component, OnInit } from '@angular/core';
import { WholeServiceService } from '../../whole-service.service';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {
  remove = this.service.icons.removeUser;
  add = this.service.icons.addUser;
  privilegesList = this.service.privilegesList;

  constructor(private service: WholeServiceService) { }

  ngOnInit(): void {
  }

}
