import { Component, OnInit } from '@angular/core';
import { InfoService } from '../providers/info.service';
import { RestService } from '../providers/rest.service';

import { User } from '../models/user';
import { Food } from '../models/food';


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export enum UploadStatus {
  progress = 1,
  completed = 2,
  failed = 3
}

@Component({
  selector: 'app-supplier-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.scss']
})
export class SupplierHomeComponent implements OnInit {

  user: User;
  food: Food;
  foodList: Array<Food>;
  closeResult: string;
  originalFood: Food;
  ImgUploadStatus = UploadStatus;
  uploadStatus = UploadStatus.completed;
  constructor(
    private info: InfoService,
    private rest: RestService,
    private modalService: NgbModal
  ) {
    this.user = new User;

    this.foodList = new Array;
  }

  ngOnInit() {
    this.getSupplierDetails();
    this.getFoodItems();;

  }

  getFoodItems() {
    this.rest.getSupplierFood('').subscribe((data) => {
      this.foodList = data;
    }, err => {
      alert(err.message);
    });
  }

  getSupplierDetails() {
    this.rest.getSupplierDetails().subscribe((data) => {
      if (data.firstName) {
        this.user = data;
        this.info.loggedIn = true;
      } else {
        this.info.loggedIn = false;
        window.location.href = '/public/#/signin';
      }
    }, err => {
      this.info.loggedIn = false;
      window.location.href = '/public/#/signin';
    });
  }

  open(content) {
    this.food = new Food;
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  onSubmit(c) {
    const index = this.foodList.indexOf(this.originalFood);
    if (index < 0) {
      this.rest.addFood(this.food).subscribe(data => {
        if (data.code == '00') {
          this.food.id = data.foodId;
          this.foodList.push(this.food);
          this.food = null;
          c();
        }
      }, err => {
        alert(err.message);
      });
    } else {
      this.rest.editFood(this.food).subscribe(data => {
        if (data.code == '00') {
          this.foodList[index] = this.food;
          this.food = null;
          c();
        }
      }, err => {
        alert(err.message);
      });
    }
  }

  editFood(food, content) {
    this.originalFood = food;
    this.food = Object.assign({}, food);
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  deleteFood(food) {
    this.rest.deleteFood(food).subscribe(data => {
      if (data.code == '00') {
        const index = this.foodList.indexOf(food);
        this.foodList.splice(index, 1);
      }
    }, err => {
      alert(err.message);
    });
  }

  onChange(e) {
    var input = e.target;

    var reader = new FileReader();

    var that = this;
    reader.onload = function () {
      var binaryData = reader.result;

      that.uploadStatus = UploadStatus.progress;
      console.log(binaryData);
      that.rest.writeFile({
        data: binaryData,
        name: that.food.id
      }).subscribe(data => {
          that.food.img = data.name;
          that.uploadStatus = UploadStatus.completed;
      }, err => {

      });
      
    };
    reader.readAsDataURL(input.files[0]);
  }
}


