import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './../Models/book.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<Book[]>(
        'https://localhost:7019/api/books'
      )
      .pipe(map(
        (books) => books || []));
  }
}
