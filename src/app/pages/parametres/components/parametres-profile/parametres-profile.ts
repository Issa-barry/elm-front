import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UpdateProfileRequest } from '@/models/auth.model';
import { User } from '@/models/user.model';
import { AuthService } from '@/services/auth/auth.service';

@Component({
  selector: 'app-parametres-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './parametres-profile.html',
  styleUrl: './parametres-profile.scss',
})
export class ParametresProfile implements OnInit {
  loading = false;
  saving = false;
  profileLoaded = false;
  errorMessage = '';
  successMessage = '';

  form = {
    nom: '',
    prenom: '',
    email: '',
    ville: '',
    quartier: '',
  };

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.loading = true;
    this.profileLoaded = false;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.me().subscribe({
      next: (response) => {
        const user = this.extractUserFromPayload(response?.data) ?? this.authService.currentUser();
        if (!user) {
          this.errorMessage = 'Impossible de charger le profile.';
          this.pushMessage('error', 'Erreur', this.errorMessage);
          this.loading = false;
          return;
        }

        this.applyUserToForm(user);
        this.profileLoaded = true;
        this.loading = false;
      },
      error: () => {
        const fallbackUser = this.authService.currentUser();
        if (fallbackUser) {
          this.applyUserToForm(fallbackUser);
          this.profileLoaded = true;
          this.loading = false;
          return;
        }

        this.errorMessage = 'Impossible de charger le profile.';
        this.pushMessage('error', 'Erreur', this.errorMessage);
        this.loading = false;
      },
    });
  }

  saveProfile(): void {
    if (this.loading || this.saving || !this.profileLoaded) {
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';
    const payload = this.buildUpdatePayload();

    this.saving = true;
    this.authService.updateProfile(payload).subscribe({
      next: (response) => {
        const user = this.extractUserFromPayload(response?.data) ?? this.authService.currentUser();
        if (user) {
          this.applyUserToForm(user);
        }

        this.successMessage = response?.message || 'Profil mis a jour avec succes.';
        this.pushMessage('success', 'Succes', this.successMessage);
        this.saving = false;
      },
      error: (error) => {
        this.errorMessage = this.extractErrorMessage(error);
        this.pushMessage('error', 'Erreur', this.errorMessage);
        this.saving = false;
      },
    });
  }

  private buildUpdatePayload(): UpdateProfileRequest {
    const nom = this.form.nom.trim();
    const prenom = this.form.prenom.trim();
    const email = this.form.email.trim();
    const ville = this.form.ville.trim();
    const quartier = this.form.quartier.trim();

    const payload: UpdateProfileRequest = {};

    if (nom.length > 0) {
      payload.nom = nom;
    }
    if (prenom.length > 0) {
      payload.prenom = prenom;
    }
    payload.email = email.length > 0 ? email : null;
    if (ville.length > 0) {
      payload.ville = ville;
    }
    if (quartier.length > 0) {
      payload.quartier = quartier;
    }

    return payload;
  }

  private applyUserToForm(user: User): void {
    this.form = {
      nom: user.nom ?? '',
      prenom: user.prenom ?? '',
      email: user.email ?? '',
      ville: user.ville ?? '',
      quartier: user.quartier ?? '',
    };
  }

  private extractUserFromPayload(payload: unknown): User | null {
    if (!payload || typeof payload !== 'object') {
      return null;
    }

    const source = (payload as { user?: unknown }).user ?? payload;
    if (!source || typeof source !== 'object') {
      return null;
    }

    return source as User;
  }

  private extractErrorMessage(error: any): string {
    const validationErrors = error?.error?.errors;
    if (validationErrors && typeof validationErrors === 'object') {
      for (const value of Object.values(validationErrors) as unknown[]) {
        if (Array.isArray(value)) {
          const first = value.find((item) => typeof item === 'string');
          if (typeof first === 'string' && first.trim().length > 0) {
            return first;
          }
        }
      }
    }

    if (typeof error?.error?.message === 'string' && error.error.message.trim().length > 0) {
      return error.error.message;
    }

    return 'Erreur lors de la mise a jour du profile.';
  }

  private pushMessage(
    severity: 'success' | 'error',
    summary: string,
    detail: string
  ): void {
    this.messageService.add({
      severity,
      summary,
      detail,
      life: 3000,
    });
  }
}
