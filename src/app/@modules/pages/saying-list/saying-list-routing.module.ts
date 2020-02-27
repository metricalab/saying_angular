import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SayingListComponent } from './saying-list.component';
import { SayingDetailComponent } from './saying-detail/saying-detail.component';

const routes: Routes = [
  { path: '', component: SayingListComponent },
  { path: ':id', component: SayingDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SayingListRoutingModule { }
