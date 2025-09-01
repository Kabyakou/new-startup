import { Component } from '@angular/core';

@Component({
  selector: 'app-grap-design',
  imports: [],
  templateUrl: './grap-design.component.html',
  styleUrl: './grap-design.component.css',
})
export class GrapDesignComponent {
  Services = [
    {
      title: 'Logo Design',
      description:
        'Craft unique and memorable logos that represent your brand identity.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Brand Identity',
      description:
        'Develop cohesive brand visuals including color schemes, typography, and style guides.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Marketing Materials',
      description:
        'Design brochures, flyers, and posters that capture attention and drive engagement.',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Social Media Graphics',
      description:
        'Create eye-catching social media posts and banners tailored for your audience.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'UI/UX Design',
      description:
        'Design intuitive and beautiful user interfaces for web and mobile applications.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Packaging Design',
      description:
        'Create packaging that stands out on shelves and communicates your product’s value.',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    },
  ];
}
