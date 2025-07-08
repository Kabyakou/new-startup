import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}

//Simulated Angular-like behavior
        document.addEventListener('DOMContentLoaded', function () {
            // Simulated component logic
            console.log('Hero component initialized');

            // Add hover effect for service cards
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.classList.add('shadow-lg');
                });
                card.addEventListener('mouseleave', () => {
                    card.classList.remove('shadow-lg');
                });
            });
        });
