import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  
  @Input() public thumbnail!: string;
  @Input() public title!: string;
  @Input() public description!: any;
  @Input() public creationDate!: any;
  @Input() public lastModificationDate!: any;

}
