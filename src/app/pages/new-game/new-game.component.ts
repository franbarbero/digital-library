import { Component } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";

@Component({
    selector: 'app-new-game',
    standalone: true,
    templateUrl: './new-game.component.html',
    styleUrl: './new-game.component.css',
    imports: [FormsModule, LeftNavComponent, TopNavComponent]
})
export class NewGameComponent {
  inputTitle: string = '';
  inputScore: number = 0;
  inputDescription: string = '';


  constructor(private libraryService: LibraryService, private router: Router){

  }

  submitForm(): void {

    console.log('Valor de Input 2:', this.inputTitle);
    console.log('Valor de Input 3:', this.inputScore);
    console.log('Valor de Input descripcion:', this.inputDescription);

    this.libraryService.createGame(this.inputTitle, this.inputScore, this.inputDescription, new Date())


    this.router.navigate(['/games'])

  }
}
