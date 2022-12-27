import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedSubject: BehaviorSubject<boolean>;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  signup() {}

  login(user: any): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.baseUrl}/Users?email=${user.email}`
    );
  }
  loggedStatus(): Observable<boolean> {
    return this.isLoggedSubject;
  }
  getToken(): any {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
    this.router.navigate(['account/login']);
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
