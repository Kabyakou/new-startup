import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';


@Component({
  selector: 'app-root',
<<<<<<< Updated upstream
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
>>>>>>> 5ee9bced82c3854f8c20c9976d6eed1fb77cd60b


  imports: [NavbarComponent,RouterOutlet,HeroSectionComponent],

<<<<<<< HEAD
=======
  imports: [RouterOutlet, NavbarComponent],
>>>>>>> Stashed changes
=======
>>>>>>> 5ee9bced82c3854f8c20c9976d6eed1fb77cd60b
=======
  imports: [RouterOutlet, NavbarComponent],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new_startup';
}
