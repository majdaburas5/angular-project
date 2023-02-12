import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
username:string=''
email:string=''
address:string=''
phone:string=''
image:string=''
users:any=""
  constructor(private userService:UsersService) { }  
  
  ngOnInit(): void {
   
    this.username=this.userService.savedUser
    this.email=this.userService.savedEmail
    this.address=this.userService.savedAddress
    this.phone=this.userService.savePhone
    this.image=this.userService.savedImg
  }



  

  
}

