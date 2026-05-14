import { Component,AfterViewInit  } from '@angular/core';
import { Iwedding } from './../../shared/interfaces/iwedding';
import { Iportrait } from '../../shared/interfaces/iportrait';
import { Ievents } from '../../shared/interfaces/ievents';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import gsap from 'gsap';

@Component({
  selector: 'app-portofolio',
  imports: [FormsModule, RouterLink],
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {


  
    categories = ['All', 'Wedding', 'Events', 'Portraits'];

  selectedCategory = 'All';
portraitImages: Iportrait[] = Array.from(
  { length: 13 }, (_, i) => ({
    src: `images/portraits/portraits (${i + 1}).JPG`,
    title: `Portraits ${i + 1}`,
    category: 'Portraits',
  }));


  weddingImages: Iwedding[] = Array.from(
    { length: 20 },
    (_, i) => ({
      src: `images/wedding/wedding (${i + 1}).jpg`,
      title: `Wedding ${i + 1}`,
      category: 'Wedding',
    })
  );

    



   eventsImages: Ievents[] = Array.from(
    { length: 47 }, (_, i) => ({
    src: `images/events/events (${i + 1}).JPG`,
    title: `Events ${i + 1}`,
    category: 'Events',
  }));


  // animation for card 

ngAfterViewInit(): void {
gsap.fromTo(".portfolio-card",
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.08,
    ease: "power3.out"
  }
);
}

 
   
}

