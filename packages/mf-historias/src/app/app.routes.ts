import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'historias',
    loadComponent: () =>
      import('./listado/listado.component').then((c) => c.ListadoComponent),
  },
  {
    path: 'historias/edicion',
    loadComponent: () =>
      import('./form/form.component').then((c) => c.FormComponent),
  },
];
