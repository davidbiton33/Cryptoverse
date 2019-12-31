import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  products = [
    {name:'t-shirt1', price: 500},
    {name:'t-shirt2', price: 200},
    {name:'t-shirt3', price: 250},
    {name:'t-shirt4', price: 255},
    {name:'t-shirt5', price: 333},
  ]

  sortMinToMax(){
    this.products.sort((a,b) => a.price - b.price)
  }
  
  sortMaxToMin(){
    this.products.sort((a,b) =>  b.price - a.price)
  }

  ngOnInit() {
  }

}
