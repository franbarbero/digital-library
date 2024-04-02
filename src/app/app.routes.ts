import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GamesComponent } from './pages/games/games.component';
import { BooksComponent } from './pages/books/books.component';
import { EditBooksComponent } from './pages/edit-books/edit-books.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', pathMatch:'full', redirectTo:'home'},
    {
        path: 'movies',
        loadComponent: () =>
            import('./pages/movies/movies.component').then(
            (m) => m.MoviesComponent
        ),
    }, 
    {
        path: 'games',
        loadComponent: () =>
            import('./pages/games/games.component').then(
            (m) => m.GamesComponent
        ),
    }, 
    {
        path: 'books',
        loadComponent: () =>
            import('./pages/books/books.component').then(
            (m) => m.BooksComponent
        ),
    },
    {
        path: 'books/new',
        loadComponent: () =>
            import('./pages/new-book/new-book.component').then(
            (m) => m.NewBookComponent
        ),
    },
    {
        path: 'games/new',
        loadComponent: () =>
            import('./pages/new-game/new-game.component').then(
            (m) => m.NewGameComponent
        ),
    },
    {
        path: 'movies/new',
        loadComponent: () =>
            import('./pages/new-movie/new-movie.component').then(
            (m) => m.NewMovieComponent
        ),
    },
    {
        path: 'books/:id',
        loadComponent: () =>
            import('./pages/edit-books/edit-books.component').then(
            (m) => m.EditBooksComponent
        ),
    },
    {
        path: 'movies/:id',
        loadComponent: () =>
            import('./pages/edit-movies/edit-movies.component').then(
            (m) => m.EditMoviesComponent
        ),
    },
    {
        path: 'games/:id',
        loadComponent: () =>
            import('./pages/edit-games/edit-games.component').then(
            (m) => m.EditGamesComponent
        ),
    },
    {
        path: 'ranking',
        loadComponent: () =>
            import('./pages/ranking/ranking.component').then(
            (m) => m.RankingComponent
        ),
    },


];
