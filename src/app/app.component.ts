import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BooksService } from './Services/books.service';
import { BookListComponent } from './book-list/book-list.component';
import { Book } from './Models/book.model';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookListComponent, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-webapi';
  books: Book[]= [];
  SignedIn: boolean = false;
  
  constructor(private booksService: BooksService) { }

  public async signIn(form: any) {
    console.log(form);
    console.log(`email :${form.controls.email.value}`);
    console.log(`password :${form.controls.password.value}`);
    
    await this.booksService.signIn(form.controls.email.value, form.controls.password.value);

    this.SignedIn = true; 
    
    this.booksService.getBooks().subscribe((books) => {
      console.log(books);
      this.books = books;
    });
  }

  ngOnInit() {
   
  }



}
