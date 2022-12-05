import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../auth/services/session-storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private userService: UserService,
    private sessionService: SessionStorageService,
    private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const tokenUsername = this.sessionService.getToken();
    if(tokenUsername) {
      const isAdmin = this.userService.isAdmin(tokenUsername);
      if(isAdmin) {
        return true;
      } else {
        this.router.navigateByUrl('courses');
        return false;
      }
    } else {
      this.router.navigateByUrl('courses');
      return false;
    }
    
  }
  
}
