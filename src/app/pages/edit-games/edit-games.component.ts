import { Component } from '@angular/core';
import { ItemPresentationComponent } from "../../components/item-presentation/item-presentation.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { LibraryService } from '../../services/library.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../models/classes/game';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-games',
    standalone: true,
    templateUrl: './edit-games.component.html',
    styleUrl: './edit-games.component.css',
    imports: [ItemPresentationComponent, TopNavComponent, LeftNavComponent, FormsModule]
})
export class EditGamesComponent {
  gameToEdit: any

  inputTitle: string = '';
  inputScore: number = 0;
  inputDescription: string = '';

  constructor(private libraryService: LibraryService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
      this.gameToEdit = this.libraryService.getGameById(this.route.snapshot.paramMap.get('id'))
      console.log(this.gameToEdit)

      this.inputTitle = this.gameToEdit['title']
      this.inputScore = this.gameToEdit['score']
      this.inputDescription = this.gameToEdit['synopsis']


  }

  submitForm(): void {

      console.log('Valor de Input 2:', this.inputTitle);
      console.log('Valor de Input 3:', this.inputScore);
      console.log('Valor de Input descripcion:', this.inputDescription);

      let updatedgame = new Game(this.gameToEdit['id'], this.inputTitle, this.inputScore, this.inputDescription ,this.gameToEdit['creationDate'], new Date())

      this.libraryService.updateGame(updatedgame)

      this.router.navigate(['/games'])

    }
}
