import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { COUNTRIES } from '@/models/country.model';
import { AuthService } from '@/services/auth/auth.service';

@Component({
  selector: 'app-login3',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CarouselModule,
    CheckboxModule,
    DividerModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    MessageModule,
    SelectModule,
  ],
  templateUrl: './login3.html',
  styleUrl: './login3.scss',
})
export class Login3 {
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

  features = [
    {
      title: 'Integrated Analytics Hub',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-3.jpg',
      darkImage: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-3-dark.jpg',
      text: 'Unlock powerful insights across your platforms, using real-time data from Google, Discord, GitHub, Facebook, Twitter, and more to supercharge your SaaS performance.',
    },
    {
      title: 'Data Security',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-2.jpg',
      darkImage: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-2-dark.jpg',
      text: 'Protect your valuable data with enterprise-grade security features, ensuring your information remains safe and compliant with industry standards.',
    },
    {
      title: 'Cloud Backups',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-1.jpg',
      darkImage: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-1-dark.jpg',
      text: 'Never lose important data with automatic cloud backups that securely store your information and make it accessible whenever you need it.',
    },
  ];

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
