import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saying-list',
  templateUrl: './saying-list.component.html',
  styleUrls: ['./saying-list.component.scss', '../pages.component.scss']
})
export class SayingListComponent implements OnInit {

  sayingList = [
    {
      author: 'Anonymous',
      sayings: [
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
      ]
    },
    {
      author: 'Cristián',
      sayings: [
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
      ]
    },
    {
      author: 'Juan',
      sayings: [
        'Lorem ipsum',
        'Lorem ipsum',
        'Lorem ipsum',
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
