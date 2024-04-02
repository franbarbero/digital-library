import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { GameCardComponent } from "../../components/cards/game-card/game-card.component";
import { BookCardComponent } from "../../components/cards/book-card/book-card.component";
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/classes/book';
import { Router } from '@angular/router';

@Component({
    selector: 'app-books',
    standalone: true,
    templateUrl: './books.component.html',
    styleUrl: './books.component.css',
    imports: [CommonModule, LeftNavComponent, TopNavComponent, GameCardComponent, BookCardComponent, FormsModule]
})
export class BooksComponent {
  public booksCards:any;
  filteredBooks: any[] = [];
  searchText: string = '';
  searchDate: string = '';
  constructor(private libraryService: LibraryService, private router: Router){

  }

  ngOnInit(): void {
    this.libraryService.init();
    this.booksCards = this.libraryService.getBooks()
    this.filteredBooks = this.booksCards
    console.log("books")
    console.log(this.booksCards)
  }

  filterBooks(): void {
    // Filtra los libros que coinciden con el texto de búsqueda en el título
    let filteredByTitle = this.booksCards.filter((book: { title: string; }) =>
        book.title.toLowerCase().includes(this.searchText.toLowerCase())
    );

    // Filtra los libros por fecha si hay una fecha seleccionada
    if (this.searchDate) {
        const selectedDate = new Date(this.searchDate);
        filteredByTitle = filteredByTitle.filter((book: { creationDate: Date; }) =>
            new Date(book.creationDate).toDateString() === selectedDate.toDateString()
        );
    }

    // Asigna los libros filtrados en la variable filteredBooks
    this.filteredBooks = filteredByTitle;
}

  editBook(book: Book)
  {
    console.log("edit book", book)
    this.router.navigate(['/books', book.id])
      window.scrollTo(0, 0);
  }

  newBook()
  {
    console.log("new book")
    this.router.navigate(['/books/new'])
      window.scrollTo(0, 0);
  }
}
