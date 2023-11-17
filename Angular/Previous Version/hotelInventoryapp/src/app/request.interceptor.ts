import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // console.log('HTTP Interceptor: ', request);
    let newRequest = request.clone({
      headers: new HttpHeaders({ token: '12345678910' }),
    });
    if (request.method === 'POST') {
      newRequest = request.clone({
        headers: new HttpHeaders({ JSONtoken: '12345678910' }),
      });
    }
    return next.handle(newRequest);
  }
}
