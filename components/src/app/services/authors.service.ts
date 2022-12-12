import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Author } from '../models/author';
import { AuthorsStoreService } from './authors-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private authorsStore: AuthorsStoreService) { }

  getAll() {
    return of(this.authorsStore.authors);
  }

  addAuthor(author: Author) {
    this.authorsStore.authors.push(author);
    return of({
      authors: this.authorsStore.authors,
      addedAuthor: author
    })
  }
}
