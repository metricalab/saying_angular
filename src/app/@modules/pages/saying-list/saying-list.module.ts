import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SayingListRoutingModule } from './saying-list-routing.module';
import { SayingListComponent } from './saying-list.component';
import { MatCardModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { SayingDetailComponent } from './saying-detail/saying-detail.component';


@NgModule({
  declarations: [SayingListComponent, SayingDetailComponent],
  imports: [
    CommonModule,
    SayingListRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ]
})
export class SayingListModule { }
