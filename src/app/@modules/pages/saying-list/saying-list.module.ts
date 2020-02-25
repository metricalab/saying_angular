import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SayingListRoutingModule } from './saying-list-routing.module';
import { SayingListComponent } from './saying-list.component';


@NgModule({
  declarations: [SayingListComponent],
  imports: [
    CommonModule,
    SayingListRoutingModule
  ]
})
export class SayingListModule { }
