import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';

export type RouteHeader = {
  path: string;
  title: string;
};

export type User = {
  name: string;
};

export type HeaderProps = {
  title: string;
  routes: RouteHeader[];
  user: User;
};

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  headerProps = input.required<HeaderProps>();
  router = inject(Router);
  route = inject(ActivatedRoute);

  goNavigation(path: string) {
    this.router.navigate([path]);
  }
}
