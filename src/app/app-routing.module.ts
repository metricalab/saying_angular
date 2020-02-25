import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './@modules/login/login.component';
import { PagesComponent } from './@modules/pages/pages.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./@modules/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
