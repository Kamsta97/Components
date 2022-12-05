import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorized$$: BehaviorSubject<boolean> | undefined;
  public isAuthorized$: Observable<boolean> | undefined;

  constructor(private sessionService: SessionStorageService) { }

  login(username: string, passwrod: string) { 
    this.sessionService.setToken(username);
    this.isAuthorized$$?.next(true);
  }

  logout() {
    this.sessionService.deleteToken();
    this.isAuthorized$$?.next(false);
  }

  register(username: string, passwrod: string) {
    this.sessionService.setToken(username);
    this.isAuthorized$$?.next(true);
  }
}
