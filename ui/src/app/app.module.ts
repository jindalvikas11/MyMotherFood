import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RestService } from './providers/rest.service';
import { InfoService } from './providers/info.service';

import { HomeComponent } from './home/home.component';
import { ConsumerHomeComponent } from './consumer-home/consumer-home.component';
import { SupplierHomeComponent } from './supplier-home/supplier-home.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';

import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';



const appRoutes: Routes = [
  { 
    path: 'signup', 
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'consumer/home',
    component: ConsumerHomeComponent
  },
  {
    path: 'supplier/home',
    component: SupplierHomeComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ConsumerHomeComponent,
    SupplierHomeComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { 
        useHash: true 
      } 
    ),
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ProgressBarModule
  ],
  providers: [
    RestService,
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
