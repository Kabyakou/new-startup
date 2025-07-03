import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutUsComponent } from '../component/about-us/about-us.component';


@Component({
  selector: 'app-navbar',
  imports: [HeroSectionComponent, AboutUsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
