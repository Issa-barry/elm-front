import { CommonModule } from '@angular/common';
import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
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

interface SectionItem {
  key: Section;
  label: string;
  icon: string;
  adminOnly?: boolean;
}

@Component({
  selector: 'app-parametres-liste',
  standalone: true,
  imports: [CommonModule, ParametresAuth, DividerModule, ToastModule, RouterModule, ParametresPacking, ParametresProfile, ParametresRolesPermissions, ParametresNotifications],
  providers: [MessageService],
  templateUrl: './parametres-liste.html',
  styleUrl: './parametres-liste.scss',
})
export class ParametresListe implements OnInit, OnDestroy {
  activeSection: Section = 'profile';
  private readonly isBrowser = typeof window !== 'undefined';
  private readonly mobileLayoutMediaQuery = '(max-width: 1023.98px)';
  private readonly adminRoleKeys = new Set(['adminentreprise', 'superadmin']);
  isMobileLayout = signal(false);

  readonly sections: SectionItem[] = [
    { key: 'profile', label: 'Profile', icon: 'pi pi-user' },
    { key: 'auth', label: 'Authentification', icon: 'pi pi-lock' },
    { key: 'packing', label: 'Packing', icon: 'pi pi-cog', adminOnly: true },
    { key: 'roles', label: 'Roles & Permissions', icon: 'pi pi-shield', adminOnly: true },
    { key: 'notifications', label: 'Notifications', icon: 'pi pi-bell', adminOnly: true }
  ];

  isAdmin = computed(() => {
    const user = this.authService.currentUser();
    if (!user) return false;

    const roles = [...(user.roles ?? []), ...(user.role_names ?? [])]
      .map((role) => this.normalizeRole(role))
      .filter((role) => role.length > 0);

    return roles.some((role) => this.adminRoleKeys.has(role));
  });

  visibleSections = computed(() =>
    this.sections.filter((section) => {
      if (section.adminOnly && !this.isAdmin()) return false;
      if (section.key === 'packing' && this.isMobileLayout()) return false;
      return true;
    })
  );

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.updateLayoutMode();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    window.removeEventListener('resize', this.onResize);
  }

  setActiveSection(section: Section): void {
    if (ADMIN_SECTIONS.includes(section) && !this.isAdmin()) return;
    if (section === 'packing' && this.isMobileLayout()) return;
    this.activeSection = section;
  }

  isActive(section: Section): boolean {
    return this.activeSection === section;
  }

  canShowPackingSection(): boolean {
    return !this.isMobileLayout();
  }

  private readonly onResize = (): void => {
    this.updateLayoutMode();
  };

  private updateLayoutMode(): void {
    if (!this.isBrowser) return;
    const isMobile = window.matchMedia(this.mobileLayoutMediaQuery).matches;
    this.isMobileLayout.set(isMobile);

    if (isMobile && this.activeSection === 'packing') {
      this.activeSection = 'profile';
    }
  }

  private normalizeRole(role: string): string {
    return role.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  }
}
