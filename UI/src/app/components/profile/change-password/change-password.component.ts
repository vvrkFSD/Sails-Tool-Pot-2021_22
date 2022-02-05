import { Component, OnInit } from '@angular/core';
// import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  faEyeSlash = faEyeSlash;
  faEye = faEye;

  eye = true;

  constructor() { }

  ngOnInit(): void {
  }

}
