import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './more/blog/blog.component';
import { CareersComponent } from './more/careers/careers.component';
import { EventsComponent } from './more/events/events.component';
import { AnimeComponent } from './component/services/anime/anime.component';
import { WebDevComponent } from './component/services/web-dev/web-dev.component';
import { CybComponent } from './component/services/cyb/cyb.component';
import { DigitalMarComponent } from './component/services/digital-mar/digital-mar.component';
import { VideoComponent } from './component/services/video/video.component';
import { GrapDesignComponent } from './component/services/grap-design/grap-design.component';
import { CtaSectionComponent } from './component/cta-section/cta-section.component';
import { FeaturedServicesComponent } from './component/featured-services/featured-services.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { TestmonialsSectionComponent } from './component/testmonials-section/testmonials-section.component';

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
    { path: 'app-animation', component: AnimeComponent },
    { path: 'app-webdev', component: WebDevComponent },
    { path: 'app-cyber', component: CybComponent },
    { path: 'app-digitalmarket', component: DigitalMarComponent },
    { path: 'app-video', component: VideoComponent },
    { path: 'app-graphic', component: GrapDesignComponent },
    { path: 'app-ctasection', component: CtaSectionComponent },
    { path: 'app-featured', component: FeaturedServicesComponent },
    { path: 'app-port', component: PortfolioComponent },
    { path: 'app-test', component: TestmonialsSectionComponent },
    
];
