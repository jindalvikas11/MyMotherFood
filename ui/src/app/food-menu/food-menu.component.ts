import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { InfoService } from '../providers/info.service';
import { DataService } from '../providers/data.service';
import { RestService } from '../providers/rest.service';

import { User } from '../models/user';
import { Food } from '../models/food';
import { Cart } from '../models/cart';

import * as $ from 'jquery';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {

  foodList: Array<Food>;
  //cartItemList: Array<Cart>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private info: InfoService,
    private rest: RestService,
    private data: DataService
  ) { }


  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');

    this.showFoodList(id);

  }

  showFoodList(supplierId) {
    const queryParams = '?isConsumer=true&supplierId=' + supplierId;

    this.rest.getSupplierFood(queryParams).subscribe((data) => {
      this.info.loggedIn = true;
      this.foodList = data;
    }, err => {
      alert(err.message);
    });
  }

  addToCart(food, e) {
    let target = e.target;
    let item = {
      supplierId: food.supplierId,
      foodId: food.id,
      quantity: 1
    };

    const tempItem = this.data.consumer.cart.filter((cartItem) => {
      return cartItem.food.id === food.id
    });

    if (tempItem && tempItem.length > 0) {
      item['id'] = tempItem[0].id;
      item['quantity'] = tempItem[0].food.quantity + 1;
    }

    this.rest.addToCart(item).subscribe((data) => {
      this.flyToCart(target);
      if (tempItem && tempItem.length > 0) {
        tempItem[0].food.quantity++;
      } else {
        const tempItem = new Cart;
        tempItem.id = data.id;
        tempItem.supplier.id = food.supplierId;
        tempItem.food.quantity = 1;
        tempItem.food.id = food.id;
        this.data.consumer.cart.push(tempItem);
      }

    }, err => {
      alert(err.message);
    });
  }


  flyToCart(target) {
    const that = this;
    var cart = $('.cart');
    var imgtodrag = $(target).parent().find("img").eq(0);
    if (imgtodrag) {
      var imgclone = imgtodrag.clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        })
        .css({
          'opacity': '0.5',
          'position': 'absolute',
          'height': '150px',
          'width': '150px',
          'z-index': '100'
        })
        .appendTo($('body'))
        .animate({
          'top': cart.offset().top + 10,
          'left': cart.offset().left + 10,
          'width': 75,
          'height': 75
        }, 1000, 'linear');


      imgclone.animate({
        'width': 0,
        'height': 0,
        'padding': 0,
        'border-width': '0px'
      }, function () {
        that.data.getTotalItemInCart();
      });
    }
  }


}
