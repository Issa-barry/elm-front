import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { ParametresPacking } from '../components/parametres-packing/parametres-packing';
import { ParametresProfile } from '../components/parametres-profile/parametres-profile';
import { ParametresAuth } from '../components/parametres-auth/parametres-auth';
import { ParametresRolesPermissions } from '../components/parametres-roles-permissions/parametres-roles-permissions';
import { ParametresNotifications } from '../components/parametres-notifications/parametres-notifications';
import { AuthService } from '@/services/auth/auth.service';

type Section = 'profile' | 'auth' | 'packing' | 'roles' | 'notifications';

const ADMIN_SECTIONS: Section[] = ['packing', 'roles', 'notifications'];

@Component({
  selector: 'app-parametres-liste',
  standalone: true,
  imports: [CommonModule, ParametresAuth, DividerModule, ToastModule, RouterModule, ParametresPacking, ParametresProfile, ParametresRolesPermissions, ParametresNotifications],
  providers: [MessageService],
  templateUrl: './parametres-liste.html',
  styleUrl: './parametres-liste.scss',
})
export class ParametresListe {
  activeSection: Section = 'profile';

  isAdmin = computed(() => {
    const roles = this.authService.currentUser()?.roles ?? [];
    return roles.includes('admin') || roles.includes('super-admin');
  });

  constructor(private authService: AuthService) {}

  setActiveSection(section: Section): void {
    if (ADMIN_SECTIONS.includes(section) && !this.isAdmin()) return;
    this.activeSection = section;
  }

  onSectionClick(event: Event, section: Section): void {
    event.preventDefault();
    event.stopPropagation();
    this.setActiveSection(section);
  }

  isActive(section: Section): boolean {
    return this.activeSection === section;
  }
}
