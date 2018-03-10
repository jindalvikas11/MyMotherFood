import { Component, EventEmitter, Output } from '@angular/core';
import { InfoService } from './providers/info.service';
import { RestService } from './providers/rest.service';
import { DataService } from './providers/data.service';
import { Cart } from './models/cart';



import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';

import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbPopoverConfig]
})
export class AppComponent {
  title = 'app';

  public radioGroupForm: FormGroup;
  constructor(
    public info: InfoService,
    public data: DataService,
    private rest: RestService,
    config: NgbPopoverConfig,
    private formBuilder: FormBuilder
  ){
      const loggedIn = window.localStorage.getItem("loggedIn");
      if(loggedIn){
        this.data.getAllInfo();
      }
  }

  ngOnInit(){
    this.radioGroupForm = this.formBuilder.group({
      'model': 'home'
    });
    
    this.onChanges();
  }

  onChanges(): void {
    this.radioGroupForm.valueChanges.subscribe(value => {
      if(value.model === 'home'){
        window.location.href = '/public/#/home';
      }else if(value.model === 'signup'){
        window.location.href = '/public/#/signup';        
      }else if(value.model === 'signin'){
        window.location.href = '/public/#/signin';                
      }else{
        this.signout();
        this.radioGroupForm.setValue({
          model: 'signin'
        });
      }
    });
  }

  signout(){
    this.info.loggedIn = false;
    window.location.href = '/public/#/signin';
    window.localStorage.removeItem("loggedIn");
    this.rest.signout().subscribe(() => {
      
    }, err => {

    });
  }

  getWelcomeMessage(){
    if(this.info.loggedIn){
      return 'Welcome ' + this.data.consumer.userInfo.firstName + ' ' + this.data.consumer.userInfo.lastName + ' !';
    }else{
      return '';
    }
  }

  showCart(){
    window.location.href = '/public/#/cart';    
  }

  isLoggedIn(){
    return window.localStorage.getItem("loggedIn");
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
   // document.getElementById("main").style.marginRight = "250px";  
  }

/* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginRight = "0";  
  }

  

}
