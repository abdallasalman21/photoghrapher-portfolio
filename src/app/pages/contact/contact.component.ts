import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormControl, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import AOS from 'aos';



@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  console.log('services CREATED');


}
  
contactForm = new FormGroup({
  firstName: new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]),
 lastName: new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]),
  email: new FormControl('', [
    Validators.required,
    Validators.email
  ]),

  phone: new FormControl('', [
    Validators.required,
    Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)
  ]),


});

submitform(){

}

ngOnInit(){
   if(isPlatformBrowser(this.platformId)){
  AOS.init({
      duration: 800,
  
    });
  
  }
}

}
