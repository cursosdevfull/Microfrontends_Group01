import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FormFieldComponent } from '../form-field/formField.component';
import { SelectComponent } from '../select/select.component';
import { controlFormGroups } from './types/option-form-group';

@Component({
  selector: 'lib-group',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldComponent,
    SelectComponent,
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css',
})
export class GroupComponent {
  group = input<FormGroup>();
  options = input<controlFormGroups>();
}
