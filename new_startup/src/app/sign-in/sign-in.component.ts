import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {





document.addEventListener('DOMContentLoaded', function () {
    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.getElementById('password');

    if (togglePassword) {
        togglePassword.addEventListener('click', function (this: HTMLElement, e: Event) {
            e.preventDefault();
            const icon = this.querySelector('i');
            if (passwordField) {
                const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordField.setAttribute('type', type);
            }
            if (icon) {
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
            }
                    });
                });
        }
    }

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email && !emailRegex.test((email as HTMLInputElement).value)) {
            if (emailError) {
                emailError.classList.remove('hidden');
            }
            email.classList.add('border-red-500');
            isValid = false;
        } else {
            if (emailError) {
                emailError.classList.add('hidden');
            }
            if (email) {
                email.classList.remove('border-red-500');
            }
        }

        // Password validation
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');

        if (password && (password as HTMLInputElement).value.length < 8) {
            if (passwordError) {
                passwordError.classList.remove('hidden');
            }
            password.classList.add('border-red-500');
            isValid = false;
        } else {
            if (passwordError) {
                passwordError.classList.add('hidden');
            }
            if (password) {
                password.classList.remove('border-red-500');
            }
        }

        // If valid, submit the form (simulated here)
        if (isValid) {
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Signing in...';
                (submitBtn as HTMLButtonElement).disabled = true;
            }

            setTimeout(() => {
                alert('Sign in successful!');
                if (submitBtn) {
                    submitBtn.innerHTML = '<span>Sign In</span> <i class="fas fa-arrow-right"></i>';
                }
                (submitBtn as HTMLButtonElement).disabled = false;
            }, 2000);
        }
});
