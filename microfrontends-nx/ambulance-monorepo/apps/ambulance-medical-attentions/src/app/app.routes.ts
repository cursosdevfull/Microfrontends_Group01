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
          import('./histories/list/list.component').then(
            (m) => m.ListComponent
          ),
      },
      {
        path: 'form',
        loadComponent: () =>
          import('./histories/form/form.component').then(
            (m) => m.FormComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./reports/reports.component').then((m) => m.ReportsComponent),
      },
    ],
  },
];
