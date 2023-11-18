import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from './../Models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  @Input() books: Book[] = [];

}
