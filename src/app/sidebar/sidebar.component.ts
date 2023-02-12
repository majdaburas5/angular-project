import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList:any=[
    {name:'T-shirt'},
    {name:'Shoes'},
    {name:'jeans'},
    {name:'accessories'}
  ]
  selectedCategory:String=""

  showCategory:boolean=false
    showTshirt(){
      this.selectedCategory=this.categoryList[0].name
      this.showCategory=true
      console.log(this.selectedCategory)
    }
    showShoes(){
      this.selectedCategory=this.categoryList[1].name
      this.showCategory=true
      console.log(this.selectedCategory)
    }
    showJeans(){
      this.selectedCategory=this.categoryList[2].name
      this.showCategory=true
      console.log(this.selectedCategory)
    }
    showAcc(){
      this.selectedCategory=this.categoryList[3].name
      this.showCategory=true
      console.log(this.selectedCategory)
    }
  

  constructor() { }

  ngOnInit(): void {
  
  }
}
