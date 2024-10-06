import { Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { StockComponent } from './stock/stock.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./inventories/inventories.component').then(
            (m) => m.InventoriesComponent
          ),
      },
      {
        path: 'inventory-ambulances',
        loadComponent: () =>
          import('./inventory-ambulances/inventory-ambulances.component').then(
            (m) => m.InventoryAmbulancesComponent
          ),
      },
      {
        path: 'stock',
        component: StockComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
];
