import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { optionSelects } from '../group/types/option-form-group';

@Component({
  selector: 'lib-select',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  group = input<FormGroup>();
  controlName = input.required<string>();
  required = input.required<boolean>();
  errorMessage = input<string>();
  label = input<string>();
  type = input.required<string>();
  options = input.required<optionSelects | undefined>();
}
