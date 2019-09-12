import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Client } from 'src/app/shared/model/client.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string;
  alerts;
  regularForms: FormGroup;
  datas;
  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    localStorage.removeItem('currentUser');
    this.regularForms = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onsubmit(value : Client) {
    this._authService.signinUser(value).subscribe(data => {
      this.datas = data;
      this._router.navigateByUrl('/dashboard');
    },
    (err) => {
      this.msg = 'Invalid Username and Password';
    });
  }

}
