import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.css'],
})
export class ShowDateComponent {
  date = new Date().toDateString();
}
