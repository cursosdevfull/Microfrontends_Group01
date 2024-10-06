import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  data = input.required<any[]>();
  columnsToDisplay = input.required<string[]>();
  /*   data = [
    { name: 'John', age: 20 },
    { name: 'Doe', age: 30 },
    { name: 'Smith', age: 40 },
    { name: 'Jane', age: 50 },
  ];

  columnsToDisplay = ['name']; */
}
