import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { GameCardComponent } from "../../components/cards/game-card/game-card.component";
import { CommonModule } from '@angular/common';
import { LibraryService } from '../../services/library.service';
import { MovieCardComponent } from "../../components/cards/movie-card/movie-card.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [TopNavComponent, LeftNavComponent, GameCardComponent, CommonModule, MovieCardComponent, FormsModule]
})
export class MoviesComponent implements OnInit{
  
  public moviesCards:any;
  filteredMovies: any[] = [];
  searchText: string = '';

  constructor(private libraryService: LibraryService){

  }

  ngOnInit(): void {
    this.libraryService.init();
    this.moviesCards = this.libraryService.getMovies()
    this.filteredMovies = this.moviesCards
    console.log("movies")
    console.log(this.moviesCards)
  }

  filterBooks(): void {
    if (this.searchText.trim() === '') {
      // Si el texto de búsqueda está vacío, muestra todos los juegos
      this.filteredMovies = this.moviesCards;
    } else {
      // Filtra los juegos que coinciden con el texto de búsqueda en el título
      this.filteredMovies = this.moviesCards.filter((movie: { title: string; }) =>
        movie.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  
}
