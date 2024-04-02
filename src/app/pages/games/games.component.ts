import { Component } from '@angular/core';
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { GameCardComponent } from "../../components/cards/game-card/game-card.component";
import { LibraryService } from '../../services/library.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game } from '../../models/classes/game';
import { Router } from '@angular/router';

@Component({
    selector: 'app-games',
    standalone: true,
    templateUrl: './games.component.html',
    styleUrl: './games.component.css',
    imports: [LeftNavComponent, TopNavComponent, GameCardComponent, CommonModule, FormsModule]
})
export class GamesComponent {
  public gamesCards:any;
  filteredGames: any[] = [];
  searchText: string = '';
  searchDate: string = '';
  constructor(private libraryService: LibraryService, private router: Router){
  this.filteredGames = this.gamesCards;
  }

  ngOnInit(): void {
    this.libraryService.init();
    this.gamesCards = this.libraryService.getGames()
    this.filteredGames = this.gamesCards;
    console.log("games")
    console.log(this.gamesCards)
  }

  filterGames(): void {
    // Filtra los juegos que coinciden con el texto de búsqueda en el título
    let filteredByTitle = this.gamesCards.filter((game: { title: string; }) =>
        game.title.toLowerCase().includes(this.searchText.toLowerCase())
    );

    // Filtra los juegos por fecha si hay una fecha seleccionada
    if (this.searchDate) {
        const selectedDate = new Date(this.searchDate);
        filteredByTitle = filteredByTitle.filter((game: { creationDate: Date; }) =>
            new Date(game.creationDate).toDateString() === selectedDate.toDateString()
        );
    }

    // Asigna los juegos filtrados en la variable filteredGames
    this.filteredGames = filteredByTitle;
}

  editGame(game: Game)
  {
    console.log("edit game", game)
    this.router.navigate(['/games', game.id])
      window.scrollTo(0, 0);
  }

  newGame()
  {
    console.log("new game")
    this.router.navigate(['/games/new'])
      window.scrollTo(0, 0);
  }
}
