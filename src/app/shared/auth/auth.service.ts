import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../model/client.model';
import { urls } from '../service/urls';


@Injectable()
export class AuthService {
  token: string;
  headers: HttpHeaders;
  constructor(private _httpClient: HttpClient, private _router: Router) {
    this.headers = new HttpHeaders({'Content-Type' : 'application/json'});
  }

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(value: Client) : Observable<any> {
    //your code for checking credentials and getting tokens for for signing in user
    return this._httpClient.post<any>(urls.authenticates, value,  {headers: this.headers}).pipe(
      map(user => {
        if (user.token && user) {
          localStorage.setItem('currentUser', JSON.stringify(user.token));
        }
        return user;
      })
    );
  }

  logout() {   
    this.token = null;
  }

  getToken() {    
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token 
    if (localStorage.getItem("currentUser")){
      return true;
    } else {
      this._router.navigateByUrl('login');
      return false;
    }
  }
}
