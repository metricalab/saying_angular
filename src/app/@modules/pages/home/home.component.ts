import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../pages.component.scss']
})
export class HomeComponent implements OnInit {

  popularSayings = [
    {
      text: 'Lorem ipsum',
      author: 'Anonymous',
    },
    {
      text: 'Lorem ipsum',
      author: 'Cristián',
    },
    {
      text: 'Lorem ipsum',
      author: 'Juan',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
