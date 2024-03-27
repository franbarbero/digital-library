import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  isNavbarHidden = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarHidden = scrollOffset > 25; // Cambia a true si el desplazamiento es más de 25px
  }
}
