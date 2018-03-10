import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable()
export class InfoService {

  loggedIn: boolean;
  itemsInCart: number;
  cartItemList: Array<Cart>;
  
  constructor() { }

}
