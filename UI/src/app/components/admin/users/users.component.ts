import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminUserDataService } from 'src/app/services/admin-user-data.service';
import { WholeServiceService } from '../../whole-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  msg: null | undefined | string;

  addUser = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required, Validators.email]),
    Password: new FormControl('sails@123',[Validators.required])
  })


  loading = true;


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

  usersList:any = [];

  constructor(private service: WholeServiceService,
              private httpService: AdminUserDataService) { }

  ngOnInit(): void {
    // table design
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }

    //get user details
    this.httpService.getUsersData()
    .subscribe(data=>{
      this.loading = false;
      this.usersList = data
    },error=>{
      this.loading = false;
      this.errorMsg = error.statusText
    })
  }

  showForm(){
    this.formShow = !this.formShow;
    this.edi = false;
    this.addUser.reset();
    console.log(this.formShow)
  }

  addUserDetails(){
    if(this.edi){
      console.log("id",this.s)
      this.httpService.updateUserData(this.s, this.addUser.value)
      .subscribe(success=>{
        console.log("update user", success)
      },error=>{
        console.log("update error", error)
        this.errorMsg = error
      })
      this.addUser.reset();

    }else{
      // console.log("details", this.addUser.value, this.addUser.value.Name);
    this.httpService.postUserData(this.addUser.value)
    .subscribe(success=>{
      console.log("post success", success);
      this.msg = "success"
    },error=>{
      console.log("post error", error);
      this.msg = error.statusText
    })
    this.addUser.reset();
  }
  }

  fetchUsers(){
    this.loading = true;

    this.httpService.getUsersData()
    .subscribe(data=>{
      this.loading = false;
      this.usersList = data
      console.log("data",this.usersList)
    },error=>{
      this.loading = false;
      this.errorMsg = error.statusText
    })
  }

  editMode(i: any){
    console.log("edit added", i,this.edi)
    // if(this.edi){
      this.s = i.id
      console.log("id added", this.s, i)
    // }
    
      this.formShow = true;
      this.addUser.patchValue({
        Name: i.Name,
        Email: i.Email,
        Password: i.Password
      })
     this.edi = true;

  }


  deleteUser(i: any){
    console.log("user",i)
    this.httpService.deleteUserData(i.id)
    .subscribe(success=>{
      this.delSuccess = true;
    },error=>{
      console.log("delete error", error)
      this.delSuccess = false;
    });

    this.fetchUsers()
  }

}
