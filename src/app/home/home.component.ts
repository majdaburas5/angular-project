import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pro:any=[]
  new:any=[]
  constructor(private proList:ProductsService) { }
  

  ngOnInit(): void {
    this.pro=this.proList.getProduct()
    this.new=this.proList.getNewProduct()
  }

}
