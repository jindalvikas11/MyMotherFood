import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RestService {

  baseUrl = 'http://services.mymotherfood.wayinfinity.com';

  signUpContext = '/Supplier/AddAllInfo';

  signInContext = '/Login/verifyLogin';

  constructor(
    private http: HttpClient
  ) { }

  signup(user: User): Observable<any>{
    let finalUrl = this.baseUrl + this.signUpContext;
    return this.http.post<any>(finalUrl, user);
  }

  signin(user: User): Observable<any>{
    let finalUrl = this.baseUrl + this.signInContext;
    return this.http.post<any>(finalUrl, user);
  }

}
