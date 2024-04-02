import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-presentation',
  standalone: true,
  imports: [],
  templateUrl: './item-presentation.component.html',
  styleUrl: './item-presentation.component.css'
})
export class ItemPresentationComponent {

  @Input() public title!: string;
  @Input() public srcImg!: string;
  @Input() public synopsis!: string;


}
