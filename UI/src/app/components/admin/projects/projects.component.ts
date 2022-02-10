import { Component, DoCheck, OnInit } from '@angular/core';
import { WholeServiceService } from '../../whole-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, DoCheck {
  formShow = false;
  nav = false;
  projectsList = this.service.projectsList;
  edit = this.service.icons.Edit;
  delete = this.service.icons.Delete;

  constructor(private service: WholeServiceService) { }

  ngOnInit(): void {
    this.nav = this.service.sideNav
  }

  ngDoCheck(){
    this.nav = this.service.sideNav;
  }

  editMode(i: object){
    console.log(i)
  }

}
