import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from "@angular/router";
import AOS from 'aos';
// @ts-ignore: side-effect import of CSS module without declarations
import 'aos/dist/aos.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
@Component({
  selector: 'app-home',
   standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  console.log('HOME CREATED');


}
ngOnInit() {  
 if(isPlatformBrowser(this.platformId)){
   AOS.init();
     // animate the home page first section
setTimeout(() => {
  const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    start: 'top 75%',
    toggleActions: 'play reverse play reverse'
  }
});

tl.from('.hero-title', {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: 'power3.out'
})
.from('.hero-content', {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
}, '-=0.5')
.from('.hero-btn', {
  opacity: 0,
  scale: 0.9,
  duration: 0.6,
  ease: 'power3.out'
}, '-=0.4');
}, 0);
 }





}
}
