import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private httpHeaders = new Headers({ 'Content-Type': 'application/json' });

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'false',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Max-Age': '4800',
    }),
  };

  constructor(
    private router: Router
  ) { }

  public isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
