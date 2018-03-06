import { Component, OnInit } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { InfoService } from '../providers/info.service';

import { User } from '../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private rest: RestService,
    private info: InfoService
  ) { }
  user = new User;
  message: string;
  ngOnInit() {
  }

  onSubmit() {
    this.rest.signin(this.user).subscribe((data) => {
      if(data.code === '00'){
        if(data.type === 'S'){
          window.location.href = '/public/#/supplier/home'          
        }else{
          window.location.href = '/public/#/consumer/home'          
        }
        this.info.loggedIn = true;
      }else{
        alert('Invalid Credentials')
      }
    }, (error) => {
      alert('Login Failed');
    });
  }

}
