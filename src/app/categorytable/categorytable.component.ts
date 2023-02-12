import { Component, OnInit,Input } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categorytable',
  templateUrl: './categorytable.component.html',
  styleUrls: ['./categorytable.component.css']
})
export class CategorytableComponent implements OnInit {
pros=[]
  constructor(private producto:ProductsService, private cartService: CartService) { }

@Input () selectedCategory

  ngOnInit(): void {
    this.pros=this.producto.getAllProducts()
  }
  addToCart(product:any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
