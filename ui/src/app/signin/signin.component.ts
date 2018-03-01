import { Component, OnInit } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { User } from '../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private rest: RestService
  ) { }
  user = new User;
  message: string;
  ngOnInit() {
  }

  onSubmit() {
    this.rest.signin(this.user).subscribe((data) => {
      if(data.code === '00'){
        alert('Login Successful');
      }else{
        alert('Invalid Credentials')
      }
    }, (error) => {
      alert('Login Failed');
    });
  }

}
