import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CreateUserDto } from '@/models/user.model';
import { UserService } from '@/services/users/users.service';
import { UtilisateursForm, UserFormData } from '../utilisateurs-form/utilisateurs-form';
import { COUNTRIES } from '@/models/country.model';

@Component({
  selector: 'app-utilisateurs-new',
  standalone: true,
  templateUrl: './utilisateurs-new.html',
  styleUrl: './utilisateurs-new.scss',
  providers: [MessageService],
  imports: [CommonModule, ToastModule, UtilisateursForm],
})
export class UtilisateursNew {
  loading = false;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  onCancel() {
    this.router.navigate(['contacts/utilisateurs']);
  }

  onSubmit(data: UserFormData) {
    this.loading = true;

    const payload: CreateUserDto = {
      nom: data.nom || '',
      prenom: data.prenom || '',
      phone: (data.phone || '').replace(/\s+/g, ''),
      email: data.email || undefined,
      pays: data.pays || 'Guinée',
      code_pays: data.code_pays || 'GN',
      code_phone_pays: this.getCodePhonePays(data.code_pays || 'GN'),
      ville: data.ville || '',
      quartier: data.quartier || '',
      password: data.password || '',
      password_confirmation: data.password_confirmation || '',
      role: data.role || '',
    };

    this.userService.createUser(payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Utilisateur créé avec succès'
          });
          const createdUser = response.data?.user;
          setTimeout(() => {
            this.router.navigate(['contacts/utilisateurs/edit', createdUser?.id || '']);
          }, 1500);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la création:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: error.error?.message || 'Erreur lors de la création de l\'utilisateur'
        });
        this.loading = false;
      }
    });
  }

  private getCodePhonePays(codeCountry: string): string {
    const country = COUNTRIES.find(c => c.code === codeCountry);
    return country ? country.dialCode : '+224';
  }
}
