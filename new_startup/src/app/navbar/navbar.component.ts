import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// import { HeroSectionComponent } from '../hero-section/hero-section.component';



@Component({
  selector: 'app-navbar',

  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}


// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileDropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
        const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
        mobileMenuButton.setAttribute('aria-expanded', (!expanded).toString());
        
        if (menuOpenIcon) {
            menuOpenIcon.classList.toggle('hidden');
        }
        if (menuCloseIcon) {
            menuCloseIcon.classList.toggle('hidden');
        }
        
        if (mobileMenu) {
            mobileMenu.classList.toggle('open');
        }
    });
}

// Mobile dropdown functionality
mobileDropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(this: HTMLElement, event: Event) {
        const content = this.nextElementSibling as HTMLElement;
        const icon = this.querySelector('svg');
        
        // Toggle the dropdown content
        if (content && content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            if (icon) icon.classList.add('rotate-180');
        } else if (content) {
            content.classList.add('hidden');
            if (icon) icon.classList.remove('rotate-180');
        }
        
        // Close all other dropdowns
        mobileDropdownBtns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                if (otherBtn.nextElementSibling) {
                    (otherBtn.nextElementSibling as HTMLElement).classList.add('hidden');
                }
                const otherIcon = otherBtn.querySelector('svg');
                if (otherIcon) {
                    otherIcon.classList.remove('rotate-180');
                }
            }
        });
    });
});

