import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  standalone: true,
  imports: [],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.css'
})
export class LeftNavComponent {

  constructor(private router: Router) {}

  navigateToHome(){
    this.router.navigate(['/home'])
    window.scrollTo(0, 0);
  }

  navigateToMovies(){
    this.router.navigate(['/movies'])
    window.scrollTo(0, 0);
  }

  navigateToGames(){
    this.router.navigate(['/games'])
    window.scrollTo(0, 0);
  }

  navigateToBooks(){
    this.router.navigate(['/books'])
    window.scrollTo(0, 0);
  }

  navigateToRanking(){
    this.router.navigate(['/ranking'])
    window.scrollTo(0, 0);
  }


}
