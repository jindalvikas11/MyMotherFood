import { Component, OnInit } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { User } from '../models/user';
import { InfoService } from '../providers/info.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private rest: RestService,
    private info: InfoService    
  ) { 
  }
  user = new User;
  message: string;
  ngOnInit() {
    this.user.type = "C";
    (<HTMLElement>document.querySelector('.signup .btn-outline-primary:nth-child(1)')).style.width = (<HTMLElement>document.querySelector('.signup .form-group input')).offsetWidth / 2 + 'px';   
    (<HTMLElement>document.querySelector('.signup .btn-outline-primary:nth-child(2)')).style.width = (<HTMLElement>document.querySelector('.signup .form-group input')).offsetWidth / 2 + 'px';  
  }

  ngAfterViewInit(){
                    
  }

  onSubmit() {
    if(this.user.type === 'S'){
      this.rest.signupSupplier(this.user).subscribe((data) => {
        window.location.href = '/public/#/supplier/home';
        this.info.loggedIn = true;
      }, (error) => {
        alert('Supplier Creation Failed');
      });
    }else{
      this.rest.signupConsumer(this.user).subscribe((data) => {
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
