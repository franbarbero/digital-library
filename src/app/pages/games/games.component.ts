import { Component } from '@angular/core';
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { GameCardComponent } from "../../components/cards/game-card/game-card.component";
import { LibraryService } from '../../services/library.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private libraryService: LibraryService){
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
    if (this.searchText.trim() === '') {
      // Si el texto de búsqueda está vacío, muestra todos los juegos
      this.filteredGames = this.gamesCards;
    } else {
      // Filtra los juegos que coinciden con el texto de búsqueda en el título
      this.filteredGames = this.gamesCards.filter((game: { title: string; }) =>
        game.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}
