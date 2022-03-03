import { Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Subject } from 'rxjs';
import { error, Post } from 'src/app/models/user-post.model';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { WholeServiceService } from '../../whole-service.service';
// import { AddProjectComponent } from './add-project/add-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  msg: null | undefined | string;

  // reactive add project form
  addProject = new FormGroup({
    project_name:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    start_date:new FormControl('',[Validators.required]),
    end_date:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
  })

  // loading view
  loading = true;

  // error handling
  errorMsg = null;
  s:any = null;
  edi=false;
  delSuccess:any = null;

  // table design
  dtOptions: DataTables.Settings = {}

  formShow = false;

  // icons
  edit = this.service.icons.Edit;
  delete = this.service.icons.Delete;
  success = this.service.icons.success;

  // project list
  projectList:any = [];

  constructor(private service: WholeServiceService,
              private httpService: AdminDataService) { }

  ngOnInit(): void {
    this.tableDesign();
    this.fetchUsers();
  }

  // table design
  tableDesign(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }
  }

  // show add project form
  showForm(){
    this.formShow = !this.formShow;
    this.edi = false;
    this.addProject.reset();
    this.errorMsg = null;
  }

  // add project details
  addProjectDetails(){
    if(this.edi){
      this.httpService.updateProject(this.s,this.addProject.value)
      .subscribe(success=>{
        console.log("update user", success)
      },error=>{
        console.log("update error", error)
        this.errorMsg = error
      })
      this.addProject.reset();
      this.msg = null;

    }else{
    this.httpService.addProjects(this.addProject.value)
    .subscribe(success=>{
      console.log("post success", success);
      this.msg = "success"
    },error=>{
      console.log("post error", error);
      this.msg = error.statusText
    })
    this.addProject.reset();
    this.msg = null;
  }
  }

  // get project data
  fetchUsers(){
    this.loading = true;

    this.httpService.getProjectDetails()
    .subscribe(data=>{
      this.loading = false;
      console.log("get",data)
      this.projectList = data
    },error=>{
      this.loading = false;
      this.errorMsg = error.statusText
    })
  }

  // edit project data
  editMode(i: any){
    this.s = i.project_id
    console.log("edit",this.s)
    this.formShow = true;
    const data = {
      project_name:i.project_name,
      description:i.description,
      start_date:i.start_date,
      end_date:i.end_date,
      status:i.status,
    }
    
    this.addProject.patchValue(data)
    this.edi = true;
  }

  // delete project
  deleteUser(i: any){
    console.log(i)
    this.httpService.deleteProject(i)
    .subscribe(success=>{
      this.delSuccess = true;
    },error=>{
      console.log("delete error", error)
      this.delSuccess = false;
    });

  }
}
