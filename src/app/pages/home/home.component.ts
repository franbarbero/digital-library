import { Component, OnInit } from '@angular/core';
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { CommonModule } from '@angular/common';
import { BookCardComponent } from "../../components/cards/book-card/book-card.component";
import { GameCardComponent } from "../../components/cards/game-card/game-card.component";
import { MovieCardComponent } from "../../components/cards/movie-card/movie-card.component";
import { LibraryService } from '../../services/library.service';
import { Movie } from '../../models/classes/movie';
import { Game } from '../../models/classes/game';
import { Book } from '../../models/classes/book';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [LeftNavComponent, TopNavComponent, CommonModule, BookCardComponent, GameCardComponent, MovieCardComponent,FormsModule]
})
export class HomeComponent implements OnInit{
    
    public books:any
    public games:any
    public movies:any

    searchText: string = '';
    searchDate: string = '';



    public filteredItems: any [] = []
    public filteredByTitle: any
    constructor(private libraryService: LibraryService, private router: Router){

    }

    ngOnInit(): void {
        this.libraryService.init()
        this.books = this.libraryService.getBooks()
        this.games = this.libraryService.getGames()
        this.movies = this.libraryService.getMovies()



        
        console.log(this.books.length)

         for (let index = 0; index < this.books.length; index++) {
            this.filteredItems.push(this.books[index])
            
        } 
        for (let index = 0; index < this.games.length; index++) {
            this.filteredItems.push(this.games[index])

        } 
        for (let index = 0; index < this.movies.length; index++) {
            this.filteredItems.push(this.movies[index])

        } 

        this.filteredByTitle = this.filteredItems

    }

    onKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter") {
          this.submitForm(this.searchText)
        }
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

    submitForm(searchText:string)
    {   
        this.filteredByTitle = []
        this.filteredByTitle = this.filteredItems
        if(this.searchText != '' &&  this.searchText != null && this.searchText != undefined)
        {
            
            this.filteredByTitle = this.filteredItems.filter((element: { title: string; }) =>
            element.title.toLowerCase().includes(this.searchText.toLowerCase())

            

            );

            if (this.searchDate) {
                const selectedDate = new Date(this.searchDate);
                this.filteredByTitle = this.filteredByTitle.filter((element: { creationDate: Date; }) =>
                    new Date(element.creationDate).toDateString() === selectedDate.toDateString()
                );
            }
        }
        else{
            if (this.searchDate) {
                const selectedDate = new Date(this.searchDate);
                this.filteredByTitle = this.filteredItems.filter((element: { creationDate: Date; }) =>
                    new Date(element.creationDate).toDateString() === selectedDate.toDateString()
                );
            }
        

        }
        

    }


}
