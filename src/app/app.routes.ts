import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },

  {
    path: 'home',
    pathMatch:'full',

    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
 

  {
    path: 'services',
    pathMatch:'full',

    loadComponent: () =>
      import('./pages/services/services.component').then(m => m.ServicesComponent),
  },
   {
    path: 'contact',
    pathMatch:'full',

    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
 {
    path: 'about',
    pathMatch:'full',

    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent),
  },
   {
    path: 'portofolio',
    pathMatch:'full',

    loadComponent: () =>
      import('./pages/portofolio/portofolio.component').then(m => m.PortofolioComponent),
  },

   {
    path: 'packages',
    pathMatch:'full',

    loadComponent: () =>
      import('./shared/components/packages/packages.component').then(m => m.PackagesComponent),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/notfound/notfound.component').then(m => m.NotfoundComponent),
  },
];