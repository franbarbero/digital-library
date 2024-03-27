import { Component, OnInit } from '@angular/core';
import { LeftNavComponent } from "../../components/left-nav/left-nav.component";
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { Book } from '../../models/classes/book';
import { LibraryService } from '../../services/library.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-edit-books',
    standalone: true,
    templateUrl: './edit-books.component.html',
    styleUrl: './edit-books.component.css',
    imports: [LeftNavComponent, TopNavComponent, FormsModule]
})
export class EditBooksComponent implements OnInit {
    
    bookToEdit: any

    input2: string = '';
    input3: number = 0;

    constructor(private libraryService: LibraryService, private route: ActivatedRoute, private router: Router){

    }

    ngOnInit(): void {
        this.bookToEdit = this.libraryService.getBookbyId(this.route.snapshot.paramMap.get('id'))
        console.log(this.bookToEdit)

        this.input2 = this.bookToEdit['title']
        this.input3 = this.bookToEdit['score']

    }

    submitForm(): void {

        console.log('Valor de Input 2:', this.input2);
        console.log('Valor de Input 3:', this.input3);

        let updatedBook = new Book(this.bookToEdit['id'], this.input2, this.input3, this.bookToEdit['creationDate'], new Date())

        this.libraryService.updateBook(updatedBook)

        this.router.navigate(['/books'])

      }

    
}
