import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';


@Component({
  selector: 'app-root',
<<<<<<< Updated upstream


  imports: [NavbarComponent,RouterOutlet,HeroSectionComponent],

=======
  imports: [RouterOutlet, NavbarComponent],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new_startup';
}
