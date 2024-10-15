import { AuthService } from '@ambulance-monorepo/services';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  fb: FormBuilder = new FormBuilder();
  fg!: FormGroup;
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  constructor() {
    this.createForm();
  }

  createForm() {
    this.fg = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    const { email, password } = this.fg.value;
    const response: Awaited<boolean> = await this.authService.login(
      email,
      password
    );
    if (response) {
      this.router.navigate(['/menu']);
    } else {
      alert('Invalid credentials');
    }
  }
}
