import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'saying-list', loadChildren: () => import('./saying-list/saying-list.module').then(m => m.SayingListModule) },
    ]
  },
  { path: 'home', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
