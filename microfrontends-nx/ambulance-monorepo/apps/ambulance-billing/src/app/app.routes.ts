import { Route } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./reports/reports.component').then((m) => m.ReportsComponent),
      },
      {
        path: 'rates',
        loadComponent: () =>
          import('./rates/rates.component').then((m) => m.RatesComponent),
      },
      {
        path: 'electronic-billing',
        loadComponent: () =>
          import('./electronic-billing/electronic-billing.component').then(
            (m) => m.ElectronicBillingComponent
          ),
      },
    ],
  },
];
