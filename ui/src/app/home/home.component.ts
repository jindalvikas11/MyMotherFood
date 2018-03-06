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

  timer:any;

  ngOnInit() {
      
      
      this.timer = setInterval(() => {
        const i = Math.floor(Math.random() * 9)

        let ele = document.querySelector('.imganimate');
        if(ele) ele.classList.toggle('imganimate');

        ele = document.querySelector('.index' + i);
        ele.classList.toggle('imganimate');
        
      }, 4000);
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }

}
