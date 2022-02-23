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
      pName: 'Project1',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pName: 'Project2',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pName: 'Project3',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pName: 'Project4',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pName: 'Project5',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pName: 'Project1',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pName: 'Project2',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pName: 'Project3',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pName: 'Project4',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
    {
      pName: 'Project5',
      pDesc: 'Hejkfj kfj sjfkjf'
    },
  ]

}
