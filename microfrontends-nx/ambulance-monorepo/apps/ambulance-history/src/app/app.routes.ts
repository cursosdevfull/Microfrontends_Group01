import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@ambulance-monorepo/auth/app.routes').then((m) => m.appRoutes),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('@ambulance-monorepo/menu/app.component').then(
        (m) => m.AppComponent
      ),
  },
  {
    path: 'store',
    loadChildren: () =>
      import('@ambulance-monorepo/store/app.routes').then((m) => m.appRoutes),
  },
  {
    path: 'master-tables',
    loadChildren: () =>
      import('@ambulance-monorepo/tables/app.routes').then((m) => m.appRoutes),
  },
  {
    path: 'equipment',
    loadComponent: () =>
      import('@ambulance-monorepo/equipment/app.component').then(
        (m) => m.AppComponent
      ),
  },
  {
    path: 'billing',
    loadChildren: () =>
      import('@ambulance-monorepo/billing/app.routes').then((m) => m.appRoutes),
  },
  {
    path: 'medical-attentions',
    loadChildren: () =>
      import('@ambulance-monorepo/attentions/app.routes').then(
        (m) => m.appRoutes
      ),
  },
  {
    path: 'accounting',
    loadComponent: () =>
      import('@ambulance-monorepo/accounting/app.component').then(
        (m) => m.AppComponent
      ),
  },
];
