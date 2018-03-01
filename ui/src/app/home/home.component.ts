import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  imgList = [
    '1.jpg',
    '2.jpeg',
    '3.jpg',
    '4.jpeg',
    '5.jpeg',
    '6.png',
    '7.jpeg',
    '8.jpg',
    '9.jpg'
  ];

  ngOnInit() {
  }

}
