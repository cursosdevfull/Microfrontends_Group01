import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@ambulance-monorepo/auth/app.routes').then((m) => m.appRoutes),
  },
];
