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

  projectList: Post[] = []

  constructor(private http: HttpClient) { }

  addProjects(projectData: Post){
    this.http.post(constant.firebase+"projectData.json",projectData)
    .subscribe(response=>{
      console.log("success",response);
    })
  }

  getProjectDetails(){
    return this.http.get<{[key:string]: Post}>(constant.firebase+"projectData.json")
    .pipe(
      map(
        (data)=>{
          const Parray: Post[] = []
          for (const key in data){
           if (data.hasOwnProperty(key)){
             Parray.push({
               id: key,
               ...data[key]
             })
           }
          }

          return Parray;
        }
      )
    )
    
  }

  updateProject(updateData: Post){
    this.http.put(constant.firebase, updateData)
    .subscribe(response=>{
      console.log(response)
    })
  }

  deleteProject(i: any){
    // console.log("delete",i)
    this.http.delete(constant.firebase+"projectData/"+i+".json")
    .subscribe(response=>{
      console.log("deleted",response)
    })
  }
}
