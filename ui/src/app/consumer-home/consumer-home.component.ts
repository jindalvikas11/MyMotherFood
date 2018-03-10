import { Component, OnInit } from '@angular/core';
import { InfoService } from '../providers/info.service';

import { RestService } from '../providers/rest.service';
import { DataService } from '../providers/data.service';

import { User } from '../models/user';

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.css']
})
export class ConsumerHomeComponent implements OnInit {

  user: User;
  supplierList = new Array;
  loading = true;
  constructor(
    private info: InfoService,
    private rest: RestService,
    private data: DataService
  ) { 
    this.user = new User;
  }

  ngOnInit() {
    
      this.rest.getConsumerDetails().subscribe((data) => {
        if(data.firstName){  
          this.user = data;
          this.data.firstName = data.firstName;
          this.data.lastName = data.lastName;
          this.info.loggedIn = true;
        }else{
          this.info.loggedIn = false;
          window.location.href = '/public/#/signin';
        } 
      }, err => {
        this.info.loggedIn = false;
        window.location.href = '/public/#/signin';
      });

      this.getSuppliers();
  }

  getSuppliers(){
    navigator.geolocation.getCurrentPosition((position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.rest.getSupplierList(coords).subscribe((results)=>{
            this.loading = false;
            this.supplierList = results;
        }, err => {

        });
    });
  }

  showMenu(supplier){
      window.location.href = '/public/#/foodmenu/' + supplier.id;
  }

}
