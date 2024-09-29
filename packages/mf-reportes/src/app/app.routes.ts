import { Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { ListadoComponent } from './listado/listado.component';

export const routes: Routes = [
  {
    path: 'reportes',
    component: ListadoComponent,
  },
  {
    path: 'reportes/edicion',
    component: FormComponent,
  },
];
