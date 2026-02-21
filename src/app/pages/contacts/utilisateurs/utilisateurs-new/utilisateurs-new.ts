import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { CreateUserDto } from '@/models/user.model';
import { UserService } from '@/services/users/users.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { UsineService } from '@/services/usine/usine.service';
import { UtilisateursForm, UserFormData } from '../utilisateurs-form/utilisateurs-form';
import { COUNTRIES } from '@/models/country.model';

@Component({
  selector: 'app-utilisateurs-new',
  standalone: true,
  templateUrl: './utilisateurs-new.html',
  styleUrl: './utilisateurs-new.scss',
  providers: [MessageService],
  imports: [CommonModule, ToastModule, MessageModule, UtilisateursForm],
})
export class UtilisateursNew {
  loading = false;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
    public usineContext: UsineContextService,
    private usineService: UsineService
  ) {}

  onCancel() {
    this.router.navigate(['contacts/utilisateurs']);
  }

  onSubmit(data: UserFormData) {
    const currentUsineId = this.usineContext.currentUsineId();
    if (currentUsineId === null) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Usine requise',
        detail: 'Veuillez sélectionner une usine avant de créer un utilisateur.',
        life: 5000,
      });
      return;
    }

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
      type: data.type ?? 'staff',
      role: data.role || '',
      civilite: data.civilite || undefined,
      date_naissance: data.date_naissance || undefined,
      piece_type: data.piece_type || undefined,
      piece_numero: data.piece_numero || undefined,
      piece_delivree_le: data.piece_delivree_le || undefined,
      piece_expire_le: data.piece_expire_le || undefined,
      piece_pays: data.piece_pays || undefined,
    };

    this.userService.createUserViaApi(payload).subscribe({
      next: (response) => {
        if (!response.success || !response.data?.id) {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: response.message || 'Utilisateur créé mais réponse invalide.',
          });
          this.loading = false;
          return;
        }
        const user = response.data;
        this.usineService.assignUser(currentUsineId, { user_id: user.id, role: payload.role || undefined }).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Utilisateur créé et assigné à l\'usine.',
            });
            setTimeout(() => {
              this.router.navigate(['contacts/utilisateurs/edit', user.id]);
            }, 600);
            this.loading = false;
          },
          error: (err) => {
            console.error('Erreur assignation usine:', err);
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: err.error?.message || 'Utilisateur créé mais l\'assignation à l\'usine a échoué.',
              life: 6000,
            });
            this.loading = false;
          },
        });
      },
      error: (error) => {
        console.error('Erreur lors de la création:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: error.error?.message || 'Erreur lors de la création de l\'utilisateur',
        });
        this.loading = false;
      },
    });
  }

  private getCodePhonePays(codeCountry: string): string {
    const country = COUNTRIES.find(c => c.code === codeCountry);
    return country ? country.dialCode : '+224';
  }
}
