import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
savedUser:string=''
  savedEmail: string=''
  savedAddress: string=''
  savedImg: string=''
  savePhone: string=''

 getUsers(){
  return[
    new User('Rawad Bishara',
    'bisharam10.r@hotmail.com',
    'rawadbishara',
    'Nazareth',
    '0558875580',
    'https://i.imgur.com/XYQHJRk.jpg'),

    new User('Majd Aburas',
    'aburasm54@gmail.com',
    'majdaburas',
    'Ilut',
    '0542415860',
    'https://i.imgur.com/kbaVF8X.jpg'),
  ];
}
  constructor() { }
}
class User{
  name:string;
  email:string;
  password:string;
  address:string;
  phone:string;
  img:string;

  constructor(
    name:string,
    email:string,
    password:string,
    address:string,
    phone:string,
    img:string
      ){
    this.name=name;
    this.email=email;
    this.password=password;
    this.address=address;
    this.phone=phone;
    this.img=img;
}
savedUser(){
  return this.name
}
savedEmail(){
  return this.email
}
savedAddress(){
  return this.address
}
savePhone(){
  return this.phone
}
savedImg(){
  return this.img
}
  }



