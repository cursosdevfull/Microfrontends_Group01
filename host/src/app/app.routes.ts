import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full',
  },
  {
    path: 'store',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'store',
        exposedModule: './routes',
      }).then((r) => r.routes),
  },
  {
    path: 'inventory',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'inventory',
        exposedModule: './routes',
      }).then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'store',
  },
];
