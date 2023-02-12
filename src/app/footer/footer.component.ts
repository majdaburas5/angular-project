import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  welcome:String='You can find any clothes you want here!!'
  web:String='Our clothes shop is one of the best '


  constructor() { }

  ngOnInit(): void {
  }

}
