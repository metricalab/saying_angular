import { Component, OnInit } from '@angular/core';
import { SayingData, Saying } from 'src/app/@core/models/saying.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saying-list',
  templateUrl: './saying-list.component.html',
  styleUrls: ['./saying-list.component.scss', '../pages.component.scss']
})
export class SayingListComponent implements OnInit {

  sayings: any;
  constructor(private sayingService: SayingData, private router: Router) { }

  ngOnInit() {
    this.sayingService.getData().subscribe(data => this.sayings = data);
  }

  seeDetails(saying: Saying) {
    this.router.navigate([`/saying-list/${saying.id}`]);
  }
}
