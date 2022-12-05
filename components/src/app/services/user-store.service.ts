import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  public users: User[] = [{
    name: 'Kamil',
    email: 'kam@test.pl',
    password: '123456',
    role: 'admin'
  },
  {
    name: 'Test',
    email: 'test@test.pl',
    password: '123456',
    role: 'user'
  }]
  constructor() { }
}
