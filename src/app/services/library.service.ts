import { Injectable, OnInit } from '@angular/core';
import { Movie } from '../models/classes/movie';
import { Game } from '../models/classes/game';
import { Book } from '../models/classes/book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService{

  private movies: Movie[] = [];
  private games: Game[] = [];
  private books: Book[] = [];

  private initialized: boolean = false;

  constructor() { }

  init(): void {

   if (!this.initialized) {
      console.log("Library Service initialized");

      //CREATE MOVIES MOCK
      this.createMovie('El Padrino', 8.5);
      this.createMovie('El Padrino 2', 3);
      this.createMovie('El Padrino 2', 8.5);
      this.createMovie('El Padrino 2', 4);
      this.createMovie('El Padrino 2', 2);
      this.createMovie('El Padrino 2', 8);
      this.createMovie('El Padrino 2', 1);

      //CREATE GAMES MOCK
      this.createGame('Tetris', 8.5);
      this.createGame('Rachet & Clank', 3);
      this.createGame('Jak & Daxter', 8.5);
      this.createGame('Spyro', 4);
      this.createGame('Pokemon', 2);
      this.createGame('Sudoku', 8);
      this.createGame('Worms', 1);

      //CREATE BOOKS MOCK
      this.createBook('El Quijote', 8.5);
      this.createBook('El Quijote 2', 3);
      this.createBook('Asesinato en el Orient Express', 8.5);
      this.createBook('El Quijote', 4);
      this.createBook('El Quijote', 2);
      this.createBook('El Quijote', 8);
      this.createBook('El Quijote', 1);

      this.initialized = true;
    }
  }

  createMovie(title:string, score:number)
  {
    let id = Math.floor(Math.random() * (10000 - 1) + 1);
    let date = new Date();
    let movie = new Movie(id, title, score ,date, date)
    this.addMovie(movie)
  }

  createGame(title:string, score:number)
  {
    let id = Math.floor(Math.random() * (10000 - 1) + 1);
    let date = new Date();
    let game = new Game(id, title, score ,date, date)
    this.addGame(game)
  }

  createBook(title:string, score:number)
  {
    let id = Math.floor(Math.random() * (10000 - 1) + 1);
    let date = new Date();
    let book = new Book(id, title, score ,date, date)
    this.addBook(book)
  }

  getTopMovies(): Movie[]
  {
    const sortedMovies = this.movies.sort((a, b) => b.score - a.score);
    const top5Movies = sortedMovies.slice(0, 5);
    return top5Movies;
  }

  getTopGames(): Game[]
  {
    const sortedGames = this.games.sort((a, b) => b.score - a.score);
    const top5Games = sortedGames.slice(0, 5);
    return top5Games;
  }

  getTopBooks(): Book[]
  {
    const sortedBooks = this.books.sort((a, b) => b.score - a.score);
    const top5Books = sortedBooks.slice(0, 5);
    return top5Books;
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  addGame(game: Game): void {
    this.games.push(game);
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  editBook(book: Book): void {
    
  }

  searchMovieByTitle(title: string): Movie[] {

    return this.movies.filter(movie => movie.title.includes(title));
  }

  searchGameByTitle(title: string): Movie[] {

    return this.movies.filter(movie => movie.title.includes(title));
  }

  searchBookByTitle(title: string): Movie[] {

    return this.movies.filter(movie => movie.title.includes(title));
  }

  getBookbyId(id:any)
  {
    let foundBook = this.books.find(book => book.id == id);
    return foundBook;
  }

  updateBook(updatedBook: Book)
  {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    } else {
      console.error('No se encontró el libro a actualizar');
    }
  }

  getMovies(): Movie[]
  { console.log("get movies")
    return this.movies
  }

  getGames(): Game[]
  {
    return this.games
  }

  getBooks(): Book[]
  {
    return this.books
  }
}
