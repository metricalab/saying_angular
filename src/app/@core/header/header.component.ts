import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() sidenav: any;
  user = localStorage.getItem('user');
  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
