import { Component, OnInit } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { User } from '../models/user';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private rest: RestService
  ) { }
  user = new User;
  message: string;
  ngOnInit() {
    this.user.type = "C";
  }

  onSubmit() {
    this.rest.signin(this.user).subscribe((data) => {
      alert('Record Created Successfully');
    }, (error) => {
      alert('Record Creation Failed');
    });
  }

}
