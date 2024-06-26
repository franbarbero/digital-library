import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  @Input() public thumbnail!: string;
  @Input() public title!: string;
  @Input() public description!: any;
  @Input() public creationDate!: any;
  @Input() public lastModificationDate!: any;

  
}
