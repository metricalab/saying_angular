import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SayingListComponent } from './saying-list.component';

const routes: Routes = [{ path: '', component: SayingListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SayingListRoutingModule { }
