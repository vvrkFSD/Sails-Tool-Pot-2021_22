import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  newUserClicked = false;
  users = [
    {
      name: 'manga1',
      description: 'manga1@gmail.com',
    },
    { name: 'manga2', description: 'manga2@gmail.com' },
    {
      name: 'bootstrap',
      description: 'manga3@gmail.com',
    },
    { name: 'manga4', description: 'manga3@gmail.com' },
  ];
  color: any;
  constructor() {}

  ngOnInit(): void {}
  model: any = {};
  model2: any = {};
  addUser() {
    this.users.push(this.model);
    this.model = {};
  }
  deleteUser(i: any) {
    this.users.splice(i);
    console.log(i);
  }
  myValue: any;
  editUser(editUserInfo: any) {
    this.model2.name = this.users[editUserInfo].name;
    this.model2.url = this.users[editUserInfo].description;
    this.myValue = editUserInfo;
  }
  updateUser() {
    let editUserInfo = this.myValue;
    for (let i = 0; i < this.users.length; i++) {
      if (i == editUserInfo) {
        this.users[i] = this.model2;
        this.model2 = {};
      }
    }
  }
  addNewUserBtn() {
    this.newUserClicked = !this.newUserClicked;
  }
  changeColor() {
    this.color = !this.color;
    if (this.color) {
      return '#ffffff';
    } else {
      return '#f6f6f6';
    }
  }
}
