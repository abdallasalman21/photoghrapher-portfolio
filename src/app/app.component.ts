import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  console.log('APP CREATED');


}

  ngOnInit(){
   if(isPlatformBrowser(this.platformId)){
  AOS.init({
      duration: 800,
  
    });
  
  }
}
}
