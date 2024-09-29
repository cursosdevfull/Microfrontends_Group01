import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    redirectTo: 'menu',
  },
];
