import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'new_startup' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('new_startup');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, new_startup');
  });
});

// Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href')!);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Animation trigger on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('.animate-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animateElements.forEach(el => {
                (el as HTMLElement).style.animationPlayState = 'paused';
                observer.observe(el);
            });
            
            // Mobile menu toggle
            const mobileMenuButton = document.querySelector('.md\\:hidden');
            if (mobileMenuButton) {
                mobileMenuButton.addEventListener('click', function() {
                    // This would toggle a mobile menu - implementation can be added
                    console.log('Mobile menu clicked');
                });
            }
            
            // Change navbar style on scroll
            window.addEventListener('scroll', function() {
                const nav = document.querySelector('nav');
                if (nav) {
                    if (window.scrollY > 50) {
                        nav.classList.add('bg-opacity-100', 'shadow-lg');
                    } else {
                        nav.classList.remove('bg-opacity-100', 'shadow-lg');
                    }
                }
            });
        });
    

// This code is for the Angular component testing and some additional JavaScript functionality