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
    if (this.searchText.trim() === '') {
      // Si el texto de búsqueda está vacío, muestra todos los juegos
      this.filteredBooks = this.booksCards;
    } else {
      // Filtra los juegos que coinciden con el texto de búsqueda en el título
      this.filteredBooks = this.booksCards.filter((book: { title: string; }) =>
        book.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  editBook(book: Book)
  {
    console.log("edit book", book)
    this.router.navigate(['/books', book.id])
      window.scrollTo(0, 0);
  }
}
