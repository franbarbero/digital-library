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
        path: 'books/:id',
        loadComponent: () =>
            import('./pages/edit-books/edit-books.component').then(
            (m) => m.EditBooksComponent
        ),
    },


];
