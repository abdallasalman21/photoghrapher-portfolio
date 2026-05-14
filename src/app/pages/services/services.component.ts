import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  console.log('services CREATED');


}
ngOnInit(){
   if(isPlatformBrowser(this.platformId)){
  AOS.init({
      duration: 800,
  
    });
  
  }
}


}
