import { Component } from '@angular/core';
import { InfoService } from './providers/info.service';
import { RestService } from './providers/rest.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public info: InfoService,
    private rest: RestService
  ){

  }
  signout(){
    this.info.loggedIn = false;
    this.rest.signout().subscribe(() => {

    }, err => {

    });
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
