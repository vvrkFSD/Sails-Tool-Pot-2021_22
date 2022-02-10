import { Component, OnInit } from '@angular/core';
import { WholeServiceService } from '../../whole-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  formShow = false;

  edit = this.service.icons.Edit;
  delete = this.service.icons.Delete;
  usersList = this.service.usersList;

  constructor(private service: WholeServiceService) { }

  ngOnInit(): void {
  }

  editMode(i: object){
    console.log(i);
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
