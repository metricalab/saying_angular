import { Component, OnInit } from '@angular/core';
import { SayingData, SayingByAuthor } from 'src/app/@core/models/saying.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saying-list',
  templateUrl: './saying-list.component.html',
  styleUrls: ['./saying-list.component.scss', '../pages.component.scss']
})
export class SayingListComponent implements OnInit {

  sayingList: any;
  constructor(private sayingService: SayingData, private router: Router) { }

  ngOnInit() {
    this.sayingService.getDataByAuthor().subscribe(data => this.sayingList = data);
  }

  seeDetails(saying: SayingByAuthor) {
    this.router.navigate([`/saying-list/${saying.id}`]);
  }
}
