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

  descriptionDefault:string = 'Alonso Quijano es un hidalgo -es decir, un noble sin bienes y de escala social baja-, de unos cincuenta años,'+ 
  'que vive en algún lugar de La Mancha a comienzos del siglo XVII. Su afición es leer libros de caballería donde se narran aventuras fantásticas de caballeros, princesas, magos y castillos encantados.'+ 
  'Se entrega a estos libros con tanta pasión que acaba perdiendo el contacto con la realidad y creyendo que él también puede emular a sus héroes de ficción.'

  dateDefault:Date = new Date();
  
  constructor() { }

  init(): void {

    


   if (!this.initialized) {

      console.log("Library Service initialized");

      this.dateDefault.setDate(this.dateDefault.getDate() - 7)

      //CREATE MOVIES MOCK
      this.createMovie('El Padrino', 8.5, this.descriptionDefault, this.dateDefault);
      this.createMovie('El Padrino 2', 3);

      this.dateDefault.setDate(this.dateDefault.getDate() - 7)

      this.createMovie('El Padrino 2', 8.5, '', this.dateDefault);
      this.createMovie('El Padrino 2', 4,'', this.dateDefault);
      this.createMovie('El Padrino 2', 2, '',this.dateDefault);

      this.dateDefault.setDate(this.dateDefault.getDate() - 7)

      this.createMovie('El Padrino 2', 8,'', this.dateDefault);
      this.createMovie('El Padrino 2', 1, '', this.dateDefault);

      this.dateDefault.setDate(this.dateDefault.getDate() - 7)


      //CREATE GAMES MOCK
      this.createGame('Tetris', 8.5, this.descriptionDefault, this.dateDefault);
      this.createGame('Rachet & Clank', 3,'', this.dateDefault);

      this.dateDefault.setDate(this.dateDefault.getDate() - 7)

      this.createGame('Jak & Daxter', 8.5);
      this.createGame('Spyro', 4, '', this.dateDefault);

      this.dateDefault.setDate(this.dateDefault.getDate() - 7)

      this.createGame('Pokemon', 2);
      this.createGame('Sudoku', 8);

      this.dateDefault.setDate(this.dateDefault.getDate() - 7)

      this.createGame('Worms', 1);

      //CREATE BOOKS MOCK
      this.createBook('El Quijote', 8.5, this.descriptionDefault, this.dateDefault);

      this.dateDefault.setDate(this.dateDefault.getDate() - 7)
      
      this.createBook('El Quijote 2', 3);
      this.createBook('Asesinato en el Orient Express', 8.5);

      this.dateDefault.setDate(this.dateDefault.getDate() - 7)


      this.createBook('El Quijote', 4,'', this.dateDefault);
      this.createBook('El Quijote', 2);

      this.dateDefault.setDate(this.dateDefault.getDate() - 7)


      this.createBook('El Quijote', 8,'', this.dateDefault);
      this.createBook('El Quijote', 1);

      this.initialized = true;
    }
  }

  createMovie(title:string, score:number, synopsis?:string, creationDate?:any)
  {
    let id = Math.floor(Math.random() * (10000 - 1) + 1);
    let date = new Date();
    let description = synopsis ? synopsis : '';
    let specificDate = creationDate ? creationDate : date;
    let movie = new Movie(id, title, score, description ,specificDate, specificDate)
    this.addMovie(movie)
  }

  createGame(title:string, score:number, synopsis?:string, creationDate?:any)
  {
    let id = Math.floor(Math.random() * (10000 - 1) + 1);
    let date = new Date();
    let description = synopsis ? synopsis : '';
    let specificDate = creationDate ? creationDate : date;
    let game = new Game(id, title, score,description ,specificDate, specificDate)
    this.addGame(game)
  }

  createBook(title:string, score:number, synopsis?:string, creationDate?:any)
  {
    let id = Math.floor(Math.random() * (10000 - 1) + 1);
    let date = new Date();
    let description = synopsis ? synopsis : '';
    let specificDate = creationDate ? creationDate : date;
    let book = new Book(id, title, score, description, specificDate, specificDate)
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

  getMovieById(id:any)
  {
    let foundMovie = this.movies.find(movie => movie.id == id);
    return foundMovie;
  }

  updateMovie(updatedMovie: Movie)
  {
    const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
    } else {
      console.error('No se encontró la pelicula a actualizar');
    }
  }

  getGameById(id:any)
  {
    let foundGame = this.games.find(game => game.id == id);
    return foundGame;
  }

  updateGame(updatedGame: Game)
  {
    const index = this.games.findIndex(game => game.id === updatedGame.id);
    if (index !== -1) {
      this.games[index] = updatedGame;
    } else {
      console.error('No se encontró el juego a actualizar');
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
