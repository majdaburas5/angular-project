import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  
items=[];
Amount:number=0
Counter:number=0  
  constructor() { }
  addToCart(product){
    this.items.push(product);
    this.Amount+=product.price;
    this.Counter+=1;
  }

  getItems() {
    return this.items;
  }

  getTotal(){
    return this.Amount;
  }
  getCounter(){
    return this.Counter;
  }
  
}
