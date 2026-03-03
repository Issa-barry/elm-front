import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { COUNTRIES } from '@/models/country.model';
import { AuthService } from '@/services/auth/auth.service';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    SelectModule,
    IconFieldModule,
    InputIconModule,
    MessageModule,
  ],
  templateUrl: './login2.html',
  styleUrl: './login2.scss',
})
export class Login2 {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = signal(false);
  showPassword = signal(false);
  errorMessage = signal<string | null>(null);
  fieldErrors = signal<Record<string, string[]>>({});

  selectedCountry = COUNTRIES[0];
  countries = COUNTRIES;

  loginForm: FormGroup = this.fb.group({
    phone: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember_me: [false],
  });

  onSubmit(): void {
    this.errorMessage.set(null);
    this.fieldErrors.set({});

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);

    const credentials = {
      ...this.loginForm.value,
      phone: this.selectedCountry.dialCode + this.loginForm.value.phone,
    };

    this.authService.login(credentials).subscribe({
      next: () => {
        this.isLoading.set(false);
        const returnUrl = this.router.routerState.snapshot.root.queryParams['returnUrl'] || '/';
        this.router.navigate([returnUrl]);
      },
      error: (error) => {
        this.isLoading.set(false);

        if (error.status === 422 && error.error?.errors) {
          this.fieldErrors.set(error.error.errors);
        } else if (error.error?.message) {
          this.errorMessage.set(error.error.message);
        } else {
          this.errorMessage.set('Une erreur est survenue lors de la connexion');
        }
      },
    });
  }

  getFieldError(fieldName: string): string | null {
    const errors = this.fieldErrors();
    return errors[fieldName] ? errors[fieldName][0] : null;
  }

  hasFieldError(fieldName: string): boolean {
    return !!this.getFieldError(fieldName);
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}
