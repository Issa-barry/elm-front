import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';

import { AuthService } from '@/services/auth/auth.service';
import { UsineContextService } from '@/services/usine/usine-context.service';

interface PermissionGroup {
  module: string;
  permissions: string[];
}

@Component({
  selector: 'app-profile-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, TagModule],
  templateUrl: './profile-overview.html',
  styleUrl: './profile-overview.scss',
})
export class ProfileOverview {
  private readonly authService = inject(AuthService);
  private readonly siteContext = inject(UsineContextService);

  readonly user = computed(() => this.authService.currentUser());
  readonly userFullName = computed(() => {
    const current = this.user();
    if (!current) return 'Utilisateur inconnu';
    const fullName = current.nom_complet?.trim();
    if (fullName) return fullName;
    return `${current.prenom ?? ''} ${current.nom ?? ''}`.trim() || 'Utilisateur inconnu';
  });
  readonly userInitials = computed(() => {
    const words = this.userFullName()
      .split(/\s+/)
      .map((value) => value.trim())
      .filter((value) => value.length > 0);

    if (words.length === 0) return 'U';
    if (words.length === 1) return words[0].slice(0, 1).toUpperCase();
    return `${words[0].slice(0, 1)}${words[1].slice(0, 1)}`.toUpperCase();
  });
  readonly roles = computed(() => {
    const current = this.user();
    return [...(current?.roles ?? []), ...(current?.role_names ?? [])].filter((value, index, array) => value && array.indexOf(value) === index);
  });
  readonly permissions = computed(() => {
    const list = this.user()?.permissions ?? [];
    return list
      .map((permission) => permission.trim())
      .filter((permission) => permission.length > 0)
      .filter((permission, index, array) => array.indexOf(permission) === index);
  });
  readonly permissionGroups = computed<PermissionGroup[]>(() => {
    const map = new Map<string, string[]>();

    this.permissions().forEach((permission) => {
      const [module, action] = permission.split('.');
      const key = module?.trim().length ? module.trim() : 'autres';
      const item = action?.trim().length ? action.trim() : permission;
      const current = map.get(key) ?? [];
      current.push(item);
      map.set(key, current);
    });

    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([module, permissionItems]) => ({
        module,
        permissions: permissionItems.sort((a, b) => a.localeCompare(b)),
      }));
  });
  readonly accessibleSites = computed(() => this.siteContext.accessibleUsines());
  readonly currentSite = computed(() => this.siteContext.currentUsine());
  readonly defaultSiteId = computed(() => this.siteContext.defaultUsineId());
  readonly isSiegeUser = computed(() => this.siteContext.isSiegeUser());
  readonly contextLabel = computed(() => {
    if (this.siteContext.isConsolidated()) return 'Tous les sites';
    return this.currentSite()?.nom ?? '-';
  });

  formatRole(role: string): string {
    return role
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }
}
