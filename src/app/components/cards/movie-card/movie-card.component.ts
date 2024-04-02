import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() public thumbnail!: string;
  @Input() public title!: string;
  @Input() public description!: any;
  @Input() public creationDate!: any;
  @Input() public lastModificationDate!: any;

}
