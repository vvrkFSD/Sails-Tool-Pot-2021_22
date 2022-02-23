import { Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
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
  
  ngOnInit(){
    
  }

}
