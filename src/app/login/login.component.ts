import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  users=[];
  constructor(private usersService:UsersService, private router: Router) {}

  ngOnInit(): void {
    this.users=this.usersService.getUsers();
  }
  onSubmit(loginForm){
    for(let user of this.users){
      if(user.email==loginForm.value.email&&user.password==loginForm.value.password)
    {
      console.log('Valid user');
      this.router.navigateByUrl('/home');
      this.usersService.savedUser=user.name;
      this.usersService.savedEmail=user.email;
      this.usersService.savedAddress=user.address;
      this.usersService.savePhone=user.phone;
      this.usersService.savedImg=user.img;

      
    return;
      }
    }
    console.log('Invalid user');
    alert('your password or email is wrong')
    
  }

}
