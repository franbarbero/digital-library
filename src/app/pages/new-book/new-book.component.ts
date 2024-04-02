import { Component } from '@angular/core';
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { Book } from '../../models/classes/book';
import { LibraryService } from '../../services/library.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-book',
    standalone: true,
    templateUrl: './new-book.component.html',
    styleUrl: './new-book.component.css',
    imports: [TopNavComponent, LeftNavComponent, FormsModule]
})
export class NewBookComponent {

    inputTitle: string = '';
    inputScore: number = 0;
    inputDescription: string = '';


    constructor(private libraryService: LibraryService, private router: Router){

    }

    submitForm(): void {

      console.log('Valor de Input 2:', this.inputTitle);
      console.log('Valor de Input 3:', this.inputScore);
      console.log('Valor de Input descripcion:', this.inputDescription);

      this.libraryService.createBook(this.inputTitle, this.inputScore, this.inputDescription, new Date())


      this.router.navigate(['/books'])

    }
}
