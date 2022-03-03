import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.scss']
})
export class UserProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userProject = [
    {
      pId: 1,
      pName: 'Project1',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pId: 2,
      pName: 'Project2',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pId: 3,
      pName: 'Project3',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pId: 4,
      pName: 'Project4',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pId: 5,
      pName: 'Project5',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pId: 6,
      pName: 'Project1',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pId: 7,
      pName: 'Project2',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pId: 8,
      pName: 'Project3',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pId: 9,
      pName: 'Project4',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pId: 10,
      pName: 'Project5',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
  ]

}
