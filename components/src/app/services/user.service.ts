import { Injectable } from '@angular/core';
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userStore: UserStoreService) { }

  getUser(username: string) {
    return this.userStore.users.filter(u => u.name === username)[0];
  }

  isAdmin(username: string) {
    return this.userStore.users.filter(u => u.name === username)[0].role === 'admin' ? true : false;
  }

}
