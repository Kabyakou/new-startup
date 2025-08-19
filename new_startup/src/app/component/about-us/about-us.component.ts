import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}




// Animation trigger for scroll effects
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-fade-in');
    
    function checkScroll() {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;
        
        animateElements.forEach(element => {
            const elementHeight = (element as HTMLElement).offsetHeight;
            const elementTop = element.getBoundingClientRect().top + windowTop;
            const elementBottom = elementTop + elementHeight;
            
            if (elementBottom >= windowTop + 100 && elementTop + 100 <= windowBottom) {
                element.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    
    // Trigger initial check
    checkScroll();
});
