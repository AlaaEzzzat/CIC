import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
     private _toastr: ToastrService,
     private identityService: AuthService
     ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let handled: boolean = false;
    const isLoggedIn = this.identityService.loggedStatus();

    if(isLoggedIn){
      request = request.clone({
        setHeaders: { Authorization: `Bearer ` }
    });
    }
    
    return next.handle(request)
    .pipe(
      retry(1),
      catchError((returnedError) => {
          return of(returnedError);
        }
      )
    )
  }

}
