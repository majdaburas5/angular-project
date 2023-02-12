import { Component, OnInit } from '@angular/core';
import{CartService} from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  free=this.cartService.getItems();
  amount:number;
  count:number=0;

  constructor(private cartService: CartService,private productService:ProductsService) { }
  
  ngOnInit(): void {
    this.getTotal();
    this. getCounter();
    
  }
  getTotal(){
    this.amount=this.cartService.getTotal();
  }
  getCounter(){
    this.count=this.cartService.getCounter();
  }

}
