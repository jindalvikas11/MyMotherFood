import { Component, OnInit } from '@angular/core';
import { InfoService } from '../providers/info.service';

import { RestService } from '../providers/rest.service';

import { User } from '../models/user';

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.css']
})
export class ConsumerHomeComponent implements OnInit {

  user: User;
  constructor(
    private info: InfoService,
    private rest: RestService
  ) { 
    this.user = new User;
  }

  ngOnInit() {
    
      this.rest.getConsumerDetails().subscribe((data) => {
        if(data.firstName){  
          this.user = data;
          this.info.loggedIn = true;
        }else{
          this.info.loggedIn = false;
          window.location.href = '/public/#/signin';
        } 
      }, err => {
        this.info.loggedIn = false;
        window.location.href = '/public/#/signin';
      });
  }

}
