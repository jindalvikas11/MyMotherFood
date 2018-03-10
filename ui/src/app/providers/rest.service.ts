import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Food } from '../models/food';

import { Observable } from 'rxjs/Observable';
//import { CredentialsService } from 'angular-with-credentials';



@Injectable()
export class RestService {

  baseUrl = '';

  signUpSupplierContext = '/Supplier/AddAllInfo';

  signUpConsumerContext = '/Consumer/AddConsumer';

  signInContext = '/Login/verifyLogin';

  signOutContext = '/Login/SignOut';
  
  getSupplierContext = '/Supplier/GetDetails';

  getConsumerContext = '/Consumer/GetDetails';

  addFoodContext = '/Food/AddFood';

  getFoodContext = '/Supplier/GetFoodItems';

  editFoodContext = '/Food/EditFood';

  deleteFoodContext = '/Food/DeleteFood';

  writeFileContext = '/File/WriteFile';

  getSupplierListContext = '/Supplier/GetAllSuppliers';

  addToCartContext = '/Food/AddToCart';

  getCartItemsContext = '/Consumer/GetCartItems';

  getUserInfoContext = '/User/GetAllInfo';

  deleteFromCartContext = '/Food/DeleteFromCart'

  constructor(
    private http: HttpClient,
    //private credentials: CredentialsService
  ) { 
    /*if (this.credentials) { // This is here to help with testing so you can pass in null for CredentialsService
      this.credentials.augmentXhrBuild((xhr: any) => {
          xhr.withCredentials = true;
      });
    }*/
  }

  signupSupplier(user: User): Observable<any>{
    let finalUrl = this.baseUrl + this.signUpSupplierContext;
    return this.http.post<any>(finalUrl, user);
  }

  signupConsumer(user: User): Observable<any>{
    let finalUrl = this.baseUrl + this.signUpConsumerContext;
    return this.http.post<any>(finalUrl, user);
  }

  signin(user: User): Observable<any>{
    let finalUrl = this.baseUrl + this.signInContext;
    return this.http.post<any>(finalUrl, user);
  }

  getSupplierDetails(): Observable<any>{
    const httpOptions = {
      withCredentials : true,
      headers : {
        'Accept' : 'application/json'
      }
    };
    let finalUrl = this.baseUrl + this.getSupplierContext;
    return this.http.get<any>(finalUrl);
  }

  signout():Observable<any>{
    let finalUrl = this.baseUrl + this.signOutContext;
    return this.http.get<any>(finalUrl);
  }

  getConsumerDetails(): Observable<any>{
    let finalUrl = this.baseUrl + this.getConsumerContext;
    return this.http.get<any>(finalUrl);
  }

  addFood(food: Food): Observable<any>{
    let finalUrl = this.baseUrl + this.addFoodContext;
    return this.http.post<any>(finalUrl, food);
  }

  getSupplierFood(querParams : string):Observable<any>{
    let finalUrl = this.baseUrl + this.getFoodContext + (querParams ? querParams : '');
    return this.http.get<any>(finalUrl);
  }

  editFood(food: Food): Observable<any>{
    let finalUrl = this.baseUrl + this.editFoodContext;
    return this.http.post<any>(finalUrl, food);
  }

  deleteFood(food: Food): Observable<any>{
    let finalUrl = this.baseUrl + this.deleteFoodContext;
    return this.http.post<any>(finalUrl, food);
  }

  writeFile(data: any): Observable<any>{
    let finalUrl = this.baseUrl + this.writeFileContext;
    return this.http.post<any>(finalUrl, data);
  }

  getSupplierList(data: any): Observable<any>{
    let finalUrl = this.baseUrl + this.getSupplierListContext;
    return this.http.post<any>(finalUrl, data);
  }

  addToCart(data: any): Observable<any>{
    let finalUrl = this.baseUrl + this.addToCartContext;
    return this.http.post<any>(finalUrl, data);
  }

  deleteFromCart(data: any): Observable<any>{
    let finalUrl = this.baseUrl + this.deleteFromCartContext;
    return this.http.post<any>(finalUrl, data);
  }

  getCartItems():Observable<any>{
    let finalUrl = this.baseUrl + this.getCartItemsContext;
    return this.http.get<any>(finalUrl);
  }

  getUserInfo():Observable<any>{
    let finalUrl = this.baseUrl + this.getUserInfoContext;
    return this.http.get<any>(finalUrl);
  }

}
