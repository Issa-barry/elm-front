import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { ChangePasswordRequest } from '@/models/auth.model';
import { AuthService } from '@/services/auth/auth.service';

@Component({
  selector: 'app-parametres-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, PasswordModule],
  templateUrl: './parametres-auth.html',
  styleUrl: './parametres-auth.scss',
})
export class ParametresAuth {
  saving = false;
  fieldErrors: Record<string, string> = {};

  form = {
    current_password: '',
    new_password: '',
    new_password_confirmation: '',
  };

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  changePassword(): void {
    this.fieldErrors = {};

    if (!this.form.current_password) {
      this.fieldErrors['current_password'] = 'Le mot de passe actuel est obligatoire';
      return;
    }
    if (!this.form.new_password) {
      this.fieldErrors['new_password'] = 'Le nouveau mot de passe est obligatoire';
      return;
    }
    if (this.form.new_password.length < 8) {
      this.fieldErrors['new_password'] = 'Le mot de passe doit contenir au moins 8 caractères';
      return;
    }
    if (this.form.new_password !== this.form.new_password_confirmation) {
      this.fieldErrors['new_password_confirmation'] = 'Les mots de passe ne correspondent pas';
      return;
    }

    const payload: ChangePasswordRequest = {
      current_password: this.form.current_password,
      new_password: this.form.new_password,
      new_password_confirmation: this.form.new_password_confirmation,
    };

    this.saving = true;
    this.authService.changePassword(payload).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: response?.message || 'Mot de passe modifié avec succès',
          life: 3000,
        });
        this.form = { current_password: '', new_password: '', new_password_confirmation: '' };
        this.saving = false;
      },
      error: (error) => {
        const validationErrors = error?.error?.errors;
        if (validationErrors && typeof validationErrors === 'object') {
          for (const [key, value] of Object.entries(validationErrors) as [string, unknown][]) {
            if (Array.isArray(value) && value.length > 0) {
              this.fieldErrors[key] = value[0] as string;
            }
          }
        }

        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: this.extractErrorMessage(error),
          life: 5000,
        });
        this.saving = false;
      },
    });
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

    return 'Erreur lors du changement de mot de passe';
  }
}
