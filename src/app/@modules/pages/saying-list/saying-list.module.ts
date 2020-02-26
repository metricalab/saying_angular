import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SayingListRoutingModule } from './saying-list-routing.module';
import { SayingListComponent } from './saying-list.component';
import { MatExpansionModule } from '@angular/material';


@NgModule({
  declarations: [SayingListComponent],
  imports: [
    CommonModule,
    SayingListRoutingModule,
    MatExpansionModule,
  ]
})
export class SayingListModule { }
