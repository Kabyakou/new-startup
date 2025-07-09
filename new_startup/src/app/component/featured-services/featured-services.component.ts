import { Component } from '@angular/core';
import { TestmonialsSectionComponent } from '../testmonials-section/testmonials-section.component';

@Component({
  selector: 'app-featured-services',
  imports: [TestmonialsSectionComponent],
  templateUrl: './featured-services.component.html',
  styleUrl: './featured-services.component.css'
})
export class FeaturedServicesComponent {

}


// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.sm\\:hidden button');
  // In a real Angular app, this would be handled by Angular's click binding
  // This is just for demo purposes
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function () {
        alert('Mobile menu would open here in a real implementation');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e: Event) {
          e.preventDefault();
          const target = e.currentTarget as HTMLAnchorElement;
          const href = target.getAttribute('href');
          if (href) {
              const scrollTarget = document.querySelector(href);
              if (scrollTarget) {
                  scrollTarget.scrollIntoView({
                      behavior: 'smooth'
                  });
              }
          }
      });
  });
});
