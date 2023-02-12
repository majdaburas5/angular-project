import { Component, OnInit, Input,ViewChild} from '@angular/core';
import { ProductsService } from '../products.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  
})
export class ProductComponent implements OnInit {
  @ViewChild(SidebarComponent) selectedCategory?: SidebarComponent;
products=[];
  constructor(private producto:ProductsService) { }
  
  
  


  ngOnInit(): void {
    this.products=this.producto.getAllProducts()
    
  }

}
