import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './more/blog/blog.component';
import { CareersComponent } from './more/careers/careers.component';
import { EventsComponent } from './more/events/events.component';

export const routes: Routes = [
    { path: '', component: HeroSectionComponent },
    // { path: 'app-hero-section', component: HeroSectionComponent },
       { path: 'app-home', component: HeroSectionComponent  },
    { path: 'app-signup', component: SignupComponent },
    { path: 'app-about', component: AboutUsComponent },
    { path: 'app-contact', component: ContactComponent },
    { path: 'app-login', component: LoginComponent },
    { path: 'app-blog', component: BlogComponent },
    { path: 'app-careers', component: CareersComponent },
    { path: 'app-events', component: EventsComponent },

];
