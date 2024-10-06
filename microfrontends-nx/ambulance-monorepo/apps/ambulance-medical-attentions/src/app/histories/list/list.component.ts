import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ContainerComponent } from '../../../../../../libs/ui/src/lib/container/container.component';
import { TableComponent } from '../../../../../../libs/ui/src/lib/table/table.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ContainerComponent, TableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  data = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Doe', age: 30 },
    { id: 3, name: 'Smith', age: 40 },
    { id: 4, name: 'Jane', age: 50 },
    { id: 5, name: 'John', age: 20 },
    { id: 6, name: 'Doe', age: 30 },
    { id: 7, name: 'Smith', age: 40 },
    { id: 8, name: 'Jane', age: 50 },
  ];

  columnsToDisplay = ['id', 'name', 'age'];
}
