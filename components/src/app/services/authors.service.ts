import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { AuthorsStoreService } from './authors-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private authorsStore: AuthorsStoreService) { }

  getAll() {
    return this.authorsStore.authors;
  }

  addAuthor(author: Author) {
    this.authorsStore.authors.push(author);
  }
}
