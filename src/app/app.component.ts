import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  .main{
    background-image: linear-gradient( #2d9ff7, rgb(247, 247, 250));
      min-height: 100vh;
  }
  `]
})
export class AppComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
  }
  
}

