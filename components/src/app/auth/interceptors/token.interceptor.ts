import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";
import { SessionStorageService } from "../services/session-storage.service";

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService,
        private sessionStorage: SessionStorageService,
        private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.sessionStorage.getToken();

        if(token) {
            req = req.clone({
                setHeaders: {Authorization: `Authorization token ${token}`}
            })
        }

        return next.handle(req).pipe(
            catchError((err) => {
                if(err instanceof HttpResponse) {
                    if(err.status === 401) {
                        this.authService.logout();
                        this.router.navigateByUrl('login');
                    }
                }
                return throwError(err);
            })
        )
    }
    
}