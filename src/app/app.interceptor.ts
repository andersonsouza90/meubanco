import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor{

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (
      (localStorage.getItem('token') == 'null' || localStorage.getItem('token') == null)
      && this.router.url != '/novaConta'
      ){
      this.router.navigate(['login']);
    }

    if (localStorage.getItem('token') != null) {
      const token = 'Bearer ' + localStorage.getItem('token');
      const tokenRequet = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(tokenRequet);

    } else {
      return next.handle(req);
    }
  }

}

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true,

  },
 ],
})

export class HttpInterceptorModule{

}
