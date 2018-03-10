import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';
import { RestService } from '../providers/rest.service';
import { WindowRef } from '../win.service';

import { Cart } from '../models/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total: Number;
  constructor(
    public data: DataService,
    private rest: RestService,
    private windowRef: WindowRef
  ) { }

  ngOnInit() {
    if (this.data.consumer) {
      this.total = this.data.getTotalAmountInCart();
      this.addPaypalPaymentButton();
    } else {
      this.data.dataReceived.subscribe(() => {
        this.total = this.data.getTotalAmountInCart();
        this.addPaypalPaymentButton();
      });
    }
  }

  onDelete(cart: Cart) {
    const body = {
      id: cart.id
    }
    this.rest.deleteFromCart(body).subscribe((data) => {
      const cartList = this.data.consumer.cart;
      const indexOfObj = cartList.indexOf(cart);
      cartList.splice(indexOfObj, 1);
      this.total = this.data.getTotalAmountInCart();
    }, (err) => {

    });
  }

  addPaypalPaymentButton() {
    let that = this;
    this.windowRef.nativeWindow.paypal.Button.render({

      env: 'sandbox', // sandbox | production

      // PayPal Client IDs - replace with your own
      // Create a PayPal app: https://developer.paypal.com/developer/applications/create
      client: {
        sandbox: 'AVvU_Dfd9-51G70ZIblKWL7MS0zFdtfOiTiuAFrNngQlEQatdtLcTZE5arDHnBebDjWGVrm_Nmj5x-GK',
        production: '<insert production client id>'
      },

      // Show the buyer a 'Pay Now' button in the checkout flow
      commit: true,

      // payment() is called when the button is clicked
      payment: function (data, actions) {

        // Make a call to the REST api to create the payment
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: { total: that.total, currency: 'USD' }
              }
            ]
          }
        });
      },

      // onAuthorize() is called when the buyer approves the payment
      onAuthorize: function (data, actions) {

        // Make a call to the REST api to execute the payment
        return actions.payment.execute().then(function () {
          window.alert('Payment Complete!');
        });
      }

    }, '#checkout');
  }

}
