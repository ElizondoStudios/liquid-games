import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private user: UserService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.user.GetUsuarioID() != null || request.url.includes("/Login/postTryLogin") || request.url.includes("/Usuarios/post")){
      // return next.handle(request);
      return next.handle(request).pipe();
    }else{
      this.router.navigateByUrl('/login');
      return new Observable<HttpEvent<unknown>>();
    }
  }
}
