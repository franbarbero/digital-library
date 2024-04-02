import { Component } from '@angular/core';
import { ItemPresentationComponent } from "../../components/item-presentation/item-presentation.component";
import { LibraryService } from '../../services/library.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/classes/movie';
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-movies',
    standalone: true,
    templateUrl: './edit-movies.component.html',
    styleUrl: './edit-movies.component.css',
    imports: [ItemPresentationComponent, TopNavComponent, LeftNavComponent, FormsModule]
})
export class EditMoviesComponent {
  movieToEdit: any

  inputTitle: string = '';
  inputScore: number = 0;
  inputDescription: string = '';

  constructor(private libraryService: LibraryService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
      this.movieToEdit = this.libraryService.getMovieById(this.route.snapshot.paramMap.get('id'))
      console.log(this.movieToEdit)

      this.inputTitle = this.movieToEdit['title']
      this.inputScore = this.movieToEdit['score']
      this.inputDescription = this.movieToEdit['synopsis']


  }

  submitForm(): void {

      console.log('Valor de Input 2:', this.inputTitle);
      console.log('Valor de Input 3:', this.inputScore);
      console.log('Valor de Input descripcion:', this.inputDescription);

      let updatedmovie = new Movie(this.movieToEdit['id'], this.inputTitle, this.inputScore, this.inputDescription ,this.movieToEdit['creationDate'], new Date())

      this.libraryService.updateMovie(updatedmovie)

      this.router.navigate(['/movies'])

    }
}
