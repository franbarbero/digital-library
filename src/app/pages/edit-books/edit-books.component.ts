import { Component, OnInit } from '@angular/core';
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { Book } from '../../models/classes/book';
import { LibraryService } from '../../services/library.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookCardComponent } from "../../components/cards/book-card/book-card.component";
import { ItemPresentationComponent } from "../../components/item-presentation/item-presentation.component";


@Component({
    selector: 'app-edit-books',
    standalone: true,
    templateUrl: './edit-books.component.html',
    styleUrl: './edit-books.component.css',
    imports: [LeftNavComponent, TopNavComponent, FormsModule, BookCardComponent, ItemPresentationComponent]
})
export class EditBooksComponent implements OnInit {
    
    bookToEdit: any

    inputTitle: string = '';
    inputScore: number = 0;
    inputDescription: string = '';

    constructor(private libraryService: LibraryService, private route: ActivatedRoute, private router: Router){

    }

    ngOnInit(): void {
        this.bookToEdit = this.libraryService.getBookbyId(this.route.snapshot.paramMap.get('id'))
        console.log(this.bookToEdit)

        this.inputTitle = this.bookToEdit['title']
        this.inputScore = this.bookToEdit['score']
        this.inputDescription = this.bookToEdit['synopsis']


    }

    submitForm(): void {

        console.log('Valor de Input 2:', this.inputTitle);
        console.log('Valor de Input 3:', this.inputScore);
        console.log('Valor de Input descripcion:', this.inputDescription);

        let updatedBook = new Book(this.bookToEdit['id'], this.inputTitle, this.inputScore, this.inputDescription ,this.bookToEdit['creationDate'], new Date())

        this.libraryService.updateBook(updatedBook)

        this.router.navigate(['/books'])

      }

    
}
