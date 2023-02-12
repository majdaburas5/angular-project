import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 us:any=[
   {name:'Rawad Bishara',email:'bisharam10.r@hotmial.com',Address:'Nazareth',id:'208172379',telephone:'0558875580',img:'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'},
   {name:'Majd Abu Ras',email:'aburasm54@gmail.com	' ,Address:'Nazareth',id:'211401369',telephone:'0542415860',img:'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png'},

 ]

  constructor() { }

  ngOnInit(): void {
  }

}
