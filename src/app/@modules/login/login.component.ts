import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formGroup: FormGroup;
  type = 'password';

  constructor(private router: Router, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    localStorage.setItem('user', this.formGroup.value.user);
    this.router.navigate(['/']);
  }
}
