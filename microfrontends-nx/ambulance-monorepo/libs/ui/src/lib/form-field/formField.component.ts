import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-form-field',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './formField.component.html',
  styleUrl: './formField.component.css',
})
export class FormFieldComponent {
  group = input<FormGroup>();
  controlName = input.required<string>();
  required = input.required<boolean>();
  errorMessage = input<string>();
  label = input<string>();
  type = input.required<string>();
}
