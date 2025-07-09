import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

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
