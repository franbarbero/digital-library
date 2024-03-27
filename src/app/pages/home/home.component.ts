import { Component, OnInit } from '@angular/core';
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { CommonModule } from '@angular/common';
import { BookCardComponent } from "../../components/cards/book-card/book-card.component";
import { GameCardComponent } from "../../components/cards/game-card/game-card.component";
import { MovieCardComponent } from "../../components/cards/movie-card/movie-card.component";
import { LibraryService } from '../../services/library.service';
import { Movie } from '../../models/classes/movie';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [LeftNavComponent, TopNavComponent, CommonModule, BookCardComponent, GameCardComponent, MovieCardComponent]
})
export class HomeComponent implements OnInit{
    
    public top5MovieCards: Movie[] = []
    public top5GameCards: Movie[] = []
    public top5BooksCards: Movie[] = []


    constructor(private libraryService: LibraryService){

    }

    ngOnInit(): void {
        this.libraryService.init()
        this.top5MovieCards = this.libraryService.getTopMovies()
        this.top5GameCards = this.libraryService.getTopGames()
        this.top5BooksCards = this.libraryService.getTopBooks()

    }
    

    


}
