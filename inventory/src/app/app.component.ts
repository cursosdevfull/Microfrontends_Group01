import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowDateComponent } from '@store/show-date';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [RouterOutlet, ShowDateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'inventory';
}
