import { Component } from '@angular/core';
import { Book } from '../../models/classes/book';
import { Game } from '../../models/classes/game';
import { Movie } from '../../models/classes/movie';
import { LibraryService } from '../../services/library.service';
import { GameCardComponent } from "../../components/cards/game-card/game-card.component";
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { MovieCardComponent } from "../../components/cards/movie-card/movie-card.component";
import { BookCardComponent } from "../../components/cards/book-card/book-card.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ranking',
    standalone: true,
    templateUrl: './ranking.component.html',
    styleUrl: './ranking.component.css',
    imports: [GameCardComponent, LeftNavComponent, TopNavComponent, MovieCardComponent, BookCardComponent, CommonModule]
})
export class RankingComponent {
  public top5MovieCards: Movie[] = []
  public top5GameCards: Game[] = []
  public top5BooksCards: Book[] = []


  constructor(private libraryService: LibraryService, private router: Router){

  }

  ngOnInit(): void {
      this.libraryService.init()
      this.top5MovieCards = this.libraryService.getTopMovies()
      this.top5GameCards = this.libraryService.getTopGames()
      this.top5BooksCards = this.libraryService.getTopBooks()

  }
  
  editMovie(movie: Movie)
  {
    console.log("edit movie", movie)
    this.router.navigate(['/movies', movie.id])
      window.scrollTo(0, 0);
  }
  editBook(book: Book)
  {
      console.log("edit book", book)
      this.router.navigate(['/books', book.id])
          window.scrollTo(0, 0);
  }
  editGame(game: Game)
  {
      console.log("edit game", game)
      this.router.navigate(['/games', game.id])
          window.scrollTo(0, 0);
  }
}
