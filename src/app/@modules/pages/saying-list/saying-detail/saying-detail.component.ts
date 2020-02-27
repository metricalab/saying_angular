import { Component, OnInit } from '@angular/core';
import { SayingData, Saying } from 'src/app/@core/models/saying.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saying-detail',
  templateUrl: './saying-detail.component.html',
  styleUrls: ['./saying-detail.component.scss']
})
export class SayingDetailComponent implements OnInit {

  saying: Saying;

  constructor(private route: ActivatedRoute, private sayingService: SayingData) { }

  ngOnInit() {
    this.route.params.subscribe((param: { id: number }) => this.sayingService.getData().subscribe(
      (sayingList: Array<Saying>) => {
        this.saying = sayingList.filter(x => x.id === Number(param.id))[0];
      }
    ));
  }

}
