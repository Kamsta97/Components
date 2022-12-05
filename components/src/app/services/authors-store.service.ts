import { Injectable } from '@angular/core';
import { Author } from '../models/author';


@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {
  public authors: Author[] = [
    {name: 'Kamil', id: '1'},
    {name: 'test', id: '2'}
  ]
  constructor() { }
}
