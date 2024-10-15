import { Route } from '@angular/router';

import { authenticationGuard } from './guards/authentication.guard';
import { authorizationGuard } from './guards/authorization.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@ambulance-monorepo/auth/app.routes').then((m) => m.appRoutes),
  },
  {
    path: 'menu',
    canActivate: [authenticationGuard, authorizationGuard],
    data: {
      roles: ['ADMIN', 'USER', 'GUEST'],
    },
    loadComponent: () =>
      import('@ambulance-monorepo/menu/app.component').then(
        (m) => m.AppComponent
      ),
  },
  {
    path: 'store',
    canActivate: [authenticationGuard, authorizationGuard],
    data: {
      roles: ['ADMIN', 'USER'],
    },

    loadChildren: () =>
      import('@ambulance-monorepo/store/app.routes').then((m) => m.appRoutes),
  },
  {
    path: 'master-tables',
    data: {
      roles: ['ADMIN'],
    },

    canActivate: [authenticationGuard, authorizationGuard],
    loadChildren: () =>
      import('@ambulance-monorepo/tables/app.routes').then((m) => m.appRoutes),
  },
  {
    path: 'equipment',
    canActivate: [authenticationGuard, authorizationGuard],
    data: {
      roles: ['ADMIN', 'USER'],
    },

    loadComponent: () =>
      import('@ambulance-monorepo/equipment/app.component').then(
        (m) => m.AppComponent
      ),
  },
  {
    path: 'billing',
    canActivate: [authenticationGuard, authorizationGuard],
    data: {
      roles: ['ADMIN'],
    },

    loadChildren: () =>
      import('@ambulance-monorepo/billing/app.routes').then((m) => m.appRoutes),
  },
  {
    path: 'medical-attentions',
    canActivate: [authenticationGuard, authorizationGuard],
    data: {
      roles: ['ADMIN', 'USER'],
    },

    loadChildren: () =>
      import('@ambulance-monorepo/attentions/app.routes').then(
        (m) => m.appRoutes
      ),
  },
  {
    path: 'accounting',
    canActivate: [authenticationGuard, authorizationGuard],
    data: {
      roles: ['ADMIN'],
    },

    loadComponent: () =>
      import('@ambulance-monorepo/accounting/app.component').then(
        (m) => m.AppComponent
      ),
  },
];
