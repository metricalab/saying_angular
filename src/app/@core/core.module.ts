import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { SayingService } from './services/saying.service';
import { SayingData } from './models/saying.model';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
    { provide: SayingData, useClass: SayingService },
  ]
})
export class CoreModule { }
