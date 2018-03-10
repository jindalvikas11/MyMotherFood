import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormGroup, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RestService } from './providers/rest.service';
import { InfoService } from './providers/info.service';
import { DataService } from './providers/data.service';
import { WindowRef } from './win.service';



import { HomeComponent } from './home/home.component';
import { ConsumerHomeComponent } from './consumer-home/consumer-home.component';
import { SupplierHomeComponent } from './supplier-home/supplier-home.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';

import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { CartComponent } from './cart/cart.component';



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
    path: 'cart',
    component: CartComponent
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
    path: 'foodmenu/:id',
    component: FoodMenuComponent
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
    CapitalizePipe,
    FoodMenuComponent,
    CartComponent
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
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ProgressBarModule
  ],
  providers: [
    RestService,
    InfoService,
    DataService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
