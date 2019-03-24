import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  temp:Date =  new  Date();
  temp2:Date =  new  Date();
  temp3:Date =  new  Date();
  temp4:Date =  new  Date();
  password:string;
  firstName:string;

  constructor() { }

  ngOnInit() {
   // this.readDate();
  }


  readDate(){
    return this.temp = new Date();
  }
}
