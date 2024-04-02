import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { GameCardComponent } from "../../components/cards/game-card/game-card.component";
import { CommonModule } from '@angular/common';
import { LibraryService } from '../../services/library.service';
import { MovieCardComponent } from "../../components/cards/movie-card/movie-card.component";
import { FormsModule } from '@angular/forms';
import { Movie } from '../../models/classes/movie';
import { Router } from '@angular/router';

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
  searchDate: string = '';
  constructor(private libraryService: LibraryService, private router: Router){

  }

  ngOnInit(): void {
    this.libraryService.init();
    this.moviesCards = this.libraryService.getMovies()
    this.filteredMovies = this.moviesCards
    console.log("movies")
    console.log(this.moviesCards)
  }

  filterMovies(): void {
    // Filtra los juegos que coinciden con el texto de búsqueda en el título
    let filteredByTitle = this.moviesCards.filter((movie: { title: string; }) =>
        movie.title.toLowerCase().includes(this.searchText.toLowerCase())
    );

    // Filtra los juegos por fecha si hay una fecha seleccionada
    if (this.searchDate) {
        const selectedDate = new Date(this.searchDate);
        filteredByTitle = filteredByTitle.filter((movie: { creationDate: Date; }) =>
            new Date(movie.creationDate).toDateString() === selectedDate.toDateString()
        );
    }

    // Asigna los juegos filtrados en la variable filteredMovies
    this.filteredMovies = filteredByTitle;
}

  editMovie(movie: Movie)
  {
    console.log("edit movie", movie)
    this.router.navigate(['/movies', movie.id])
      window.scrollTo(0, 0);
  }
  newMovie()
  {
    console.log("new movie")
    this.router.navigate(['/movies/new'])
      window.scrollTo(0, 0);
  }
  
}
