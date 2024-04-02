import { Component } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";

@Component({
    selector: 'app-new-movie',
    standalone: true,
    templateUrl: './new-movie.component.html',
    styleUrl: './new-movie.component.css',
    imports: [FormsModule, LeftNavComponent, TopNavComponent]
})
export class NewMovieComponent {
  inputTitle: string = '';
  inputScore: number = 0;
  inputDescription: string = '';


  constructor(private libraryService: LibraryService, private router: Router){

  }

  submitForm(): void {

    console.log('Valor de Input 2:', this.inputTitle);
    console.log('Valor de Input 3:', this.inputScore);
    console.log('Valor de Input descripcion:', this.inputDescription);

    this.libraryService.createMovie(this.inputTitle, this.inputScore, this.inputDescription, new Date())


    this.router.navigate(['/movies'])

  }
}
