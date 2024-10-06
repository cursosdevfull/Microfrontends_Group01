import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  selector: 'app-menu',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ambulance-menu';
}
