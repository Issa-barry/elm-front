import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { UtilisateursForm, UserFormData } from '../utilisateurs-form/utilisateurs-form';
import { User } from '@/models/user.model';
import { UserService, UpdateUserDto } from '@/services/users/users.service';
import { RoleService } from '@/services/role/role.service';
import { COUNTRIES } from '@/models/country.model';

@Component({
  selector: 'app-utilisateurs-edit',
  standalone: true,
  imports: [CommonModule, UtilisateursForm, ToastModule],
  providers: [MessageService],
  templateUrl: './utilisateurs-edit.html',
  styleUrl: './utilisateurs-edit.scss',
})
export class UtilisateursEdit implements OnInit {
  loading = false;
  userId: number | null = null;
  userData: Partial<User> | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private roleService: RoleService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userId = parseInt(id, 10);
      this.loadUser(this.userId);
    }
  }

  loadUser(id: number) {
    this.loading = true;

    this.userService.getUser(id).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const user = response.data;
          const partialUser: Partial<User> = {
            id: user.id,
            reference: user.reference,
            nom: user.nom,
            prenom: user.prenom,
            phone: user.phone,
            email: user.email,
            pays: user.pays,
            code_pays: user.code_pays,
            code_phone_pays: user.code_phone_pays,
            ville: user.ville,
            quartier: user.quartier,
            roles: user.role_names || user.roles,
            is_active: user.is_active,
          };

          // Si les rôles ne sont pas dans la réponse, les charger séparément
          const userRoles = user.role_names || user.roles;
          if (!userRoles || userRoles.length === 0) {
            this.roleService.getUserRoles(id).subscribe({
              next: (rolesResponse) => {
                if (rolesResponse.success && rolesResponse.data) {
                  partialUser.roles = rolesResponse.data.roles;
                }
                this.userData = partialUser;
                this.loading = false;
              },
              error: () => {
                this.userData = partialUser;
                this.loading = false;
              }
            });
          } else {
            this.userData = partialUser;
            this.loading = false;
          }
        } else {
          this.loading = false;
        }
      },
      error: (error) => {
        console.error('Erreur lors du chargement:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Erreur lors du chargement de l\'utilisateur'
        });
        this.loading = false;
      }
    });
  }

  onSubmit(data: UserFormData) {
    if (!this.userId) return;

    this.loading = true;

    const payload: UpdateUserDto = {
      nom: data.nom,
      prenom: data.prenom,
      phone: (data.phone || '').replace(/\s+/g, ''),
      email: data.email || undefined,
      pays: data.pays,
      code_pays: data.code_pays,
      code_phone_pays: this.getCodePhonePays(data.code_pays || 'GN'),
      ville: data.ville,
      quartier: data.quartier,
    };

    this.userService.updateUser(this.userId, payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.userData = {
            ...this.userData,
            ...response.data,
          };
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Utilisateur modifié avec succès'
          });
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la modification:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: error.error?.message || 'Erreur lors de la modification de l\'utilisateur'
        });
        this.loading = false;
      }
    });
  }

  onCancel() {
    this.router.navigate(['contacts/utilisateurs']);
  }

  private getCodePhonePays(codeCountry: string): string {
    const country = COUNTRIES.find(c => c.code === codeCountry);
    return country ? country.dialCode : '+224';
  }
}
