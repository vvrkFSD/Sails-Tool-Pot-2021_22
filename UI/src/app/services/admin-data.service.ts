import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {map} from 'rxjs/operators'
import { constant } from '../app.constants';
import { Post } from '../models/user-post.model';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  url = 'http://localhost:8080/project'

  projectList: Post[] = []

  constructor(private http: HttpClient) { }

  // add project
  addProjects(projectData: Post){
    const options = {
      headers: {
        'Content-Type': "application/json"
      }
    }
    return this.http
      .post(this.url,projectData,options)
  }

  // get projects
  getProjectDetails(){
    return this.http.get("http://localhost:8080/projects");
  }

  // update projects
  updateProject(id:any,updateData: Post){
    const data = {
      ...updateData,
      project_id:id
    }
    const options = {
      headers: {
        'Content-Type': "application/json"
      }
    }
    console.log("update",data)
    return this.http
      .put(this.url,data,options)
  }

  // delete projects
  deleteProject(i: any){
    return this.http
      .delete(this.url+`?projectid=${i}`)
  }
}
