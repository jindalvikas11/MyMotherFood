import { Injectable , Output, EventEmitter} from '@angular/core';
import { Cart } from '../models/cart';
import { Consumer } from '../models/consumer';
import { RestService } from '../providers/rest.service';
import { InfoService } from '../providers/info.service';


@Injectable()
export class DataService {

  @Output() dataReceived: EventEmitter<any> = new EventEmitter();
  
  cartItemList: Array<Cart>;
  consumer: Consumer;

  firstName: string;
  lastName: string;

  constructor(
    private rest: RestService,
    private info: InfoService
  ) { }

  getAllInfo(){
    this.rest.getUserInfo().subscribe((results) => {
      console.log(JSON.stringify(results));
      this.consumer = results;
      this.getTotalItemInCart();
      this.dataReceived.emit(null);
    }, (err) => {

    });
  }

  getTotalItemInCart(){
    let total = 0;
    
    for(let i = 0; i < this.consumer.cart.length; i++){
      total = total + Number(this.consumer.cart[i].food.quantity);
    }

    return total;
  }

  getTotalAmountInCart(){
    let total = 0;
    for(let i = 0; i < this.consumer.cart.length; i++){
      total = total + (Number(this.consumer.cart[i].food.quantity) * Number(this.consumer.cart[i].food.price));
    }

    return total;
  }

}
