import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BooksService } from './Services/books.service';
import { BookListComponent } from './book-list/book-list.component';
import { Book } from './Models/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-webapi';
  books: Book[]= [];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe((books) => {
      console.log(books);
      this.books = books;
    });
  }



}
