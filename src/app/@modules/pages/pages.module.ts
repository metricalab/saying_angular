import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CoreModule } from 'src/app/@core/core.module';
import { MatSidenavModule, MatListModule, MatGridListModule, MatCardModule } from '@angular/material';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [PagesComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    CoreModule,
  ]
})
export class PagesModule { }
