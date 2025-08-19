import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}



        // Form submission handling
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simple form validation
                const emailInput = document.getElementById('email') as HTMLInputElement | null;
                const email = emailInput ? emailInput.value : '';
                if (!email.includes('@')) {
                    alert('Please enter a valid email address');
                    return;
                }
                
                // In a real application, you would send the form data to a server here
                alert('Thank you for your message! We will get back to you soon.');
                (this as HTMLFormElement).reset();
            });
        }
  
