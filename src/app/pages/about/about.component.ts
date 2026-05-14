import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
// import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
   constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  console.log('ABOUT CREATED');


}
  ngOnInit() {
 if(isPlatformBrowser(this.platformId)){
     AOS.init();
    gsap.registerPlugin(ScrollTrigger);
    // Animate the intro part
    gsap.from('.image-part', {
      x: -80,
      opacity: 0,
      scale: 0.95,
      duration: 2.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    });

    gsap.from('.intro-text', {
      x: 80,
      opacity: 0,
      duration: 1.5,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    });
    // animate the specialize cards
    gsap.from('.speizalze-cards .card', {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.speizalze-cards',
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    });

    // animate the work cards
    gsap.from('#top-left', {
      x: -80,
      opacity: 0,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.work-cards',
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    });

    gsap.from('#top-right', {
      x: 80,
      opacity: 0,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.work-cards',
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    });

    gsap.from('#bottom', {
      y: 80,
      opacity: 0,
      scale: 0.95,
      duration: 1.8,
      delay: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.work-cards',
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    });

    // animate the closing section

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: '.closing',
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    });

    // Let’s
    tl.from('.lets', {
      y: 50,
      opacity: 0,
      duration: 1,
    })

      // sentence
      .from(
        '.create',
        {
          y: 40,
          opacity: 0,
          duration: 1,
        },
        '-=0.5',
      )

      // button
      .from(
        '.contact-btn',
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.4',
      );
 }
  }
  ngAfterViewInit() {}
}
