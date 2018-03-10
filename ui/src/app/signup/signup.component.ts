import { Component, OnInit } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { User } from '../models/user';
import { InfoService } from '../providers/info.service';
import { DataService } from '../providers/data.service';


import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupGroupForm: FormGroup;
  
  constructor(
    private rest: RestService,
    private info: InfoService,
    private data: DataService,
    private formBuilder: FormBuilder    
  ) { 
    

  }
  user = new User;
  message: string;
  ngOnInit() {
    this.user.type = "C";
    this.signupGroupForm = this.formBuilder.group({
      'model': 'C'
    });
    
    this.onChanges();
    (<HTMLElement>document.querySelector('.signup .btn-outline-primary:nth-child(1)')).style.width = (<HTMLElement>document.querySelector('.signup .form-group input')).offsetWidth / 2 + 'px';   
    (<HTMLElement>document.querySelector('.signup .btn-outline-primary:nth-child(2)')).style.width = (<HTMLElement>document.querySelector('.signup .form-group input')).offsetWidth / 2 + 'px';  
  }

  onChanges(): void {
    this.signupGroupForm.valueChanges.subscribe(value => {
        this.user.type = value.model;
    });
  }

  ngAfterViewInit(){
                    
  }

  onSubmit() {
    if(this.user.type === 'S'){
      this.rest.signupSupplier(this.user).subscribe((data) => {
        this.data.getAllInfo();
        window.localStorage.setItem('loggedIn', "1");
        window.location.href = '/public/#/supplier/home';
        this.info.loggedIn = true;
      }, (error) => {
        alert('Supplier Creation Failed');
      });
    }else{
      this.rest.signupConsumer(this.user).subscribe((data) => {
        this.data.getAllInfo();
        window.localStorage.setItem('loggedIn', "1");
        window.location.href = '/public/#/consumer/home'
      }, (error) => {
        alert('Consumer Creation Failed');
      });
    }
  }

  onResize(e){
    (<HTMLElement>document.querySelector('.signup .btn-outline-primary:nth-child(1)')).style.width = (<HTMLElement>document.querySelector('.signup .form-group input')).offsetWidth / 2 + 'px';   
    (<HTMLElement>document.querySelector('.signup .btn-outline-primary:nth-child(2)')).style.width = (<HTMLElement>document.querySelector('.signup .form-group input')).offsetWidth / 2 + 'px';  
  }

}
