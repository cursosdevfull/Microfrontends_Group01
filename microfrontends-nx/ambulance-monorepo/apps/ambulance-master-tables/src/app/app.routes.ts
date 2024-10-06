import { Route } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'drivers',
        loadComponent: () =>
          import('./drivers/drivers.component').then((m) => m.DriversComponent),
      },
      {
        path: 'medics',
        loadComponent: () =>
          import('./medics/medics.component').then((m) => m.MedicsComponent),
      },
      {
        path: 'paramedics',
        loadComponent: () =>
          import('./paramedics/paramedics.component').then(
            (m) => m.ParamedicsComponent
          ),
      },
      {
        path: 'umes',
        loadComponent: () =>
          import('./umes/umes.component').then((m) => m.UmesComponent),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./users/Users.component').then((m) => m.UsersComponent),
      },
      {
        path: 'companies',
        loadComponent: () =>
          import('./companies/companies.component').then(
            (m) => m.CompaniesComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'medics',
      },
    ],
  },
];
