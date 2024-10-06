import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import {
  HeaderComponent,
  HeaderProps,
} from '../../../../libs/ui/src/lib/header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, MatSidenavModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  headerProps!: HeaderProps;

  constructor() {
    this.generateHeaderProps();
  }

  private generateHeaderProps() {
    this.headerProps = {
      title: 'Atenciones médicas',
      user: {
        name: 'John Doe',
      },
      routes: [
        {
          path: '/medical-attentions',
          title: 'Listado',
        },
        {
          path: 'reports',
          title: 'Reportes',
        },
      ],
    };
  }
}
