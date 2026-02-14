import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';

import { RoleService } from '@/services/role/role.service';
import { AuthService } from '@/services/auth/auth.service';
import {
  ModulePermission,
  PermissionAction,
  PERMISSION_ACTIONS,
  PermissionCatalogModule,
  UpdatePermissionsDto,
} from '@/models/role.model';

@Component({
  selector: 'app-roles-edit',
  standalone: true,
  templateUrl: './roles-edit.html',
  styleUrl: './roles-edit.scss',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    CheckboxModule,
    TooltipModule,
    SkeletonModule,
  ],
  providers: [MessageService],
})
export class RolesEdit implements OnInit {
  roleId!: number;
  roleName = '';
  originalName = '';
  modules: ModulePermission[] = [];
  loading = true;
  saving = false;
  savingName = false;
  private availableActionsByModule = new Map<string, Set<PermissionAction>>();

  readonly actions = PERMISSION_ACTIONS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roleService: RoleService,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.roleId = +this.route.snapshot.params['id'];
    this.loadRole();
  }

  loadRole() {
    this.loading = true;
    this.roleService.getRole(this.roleId).subscribe({
      next: (response) => {
        const normalized = this.normalizeRolePayload(response?.data);

        if (!normalized) {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Format de réponse invalide pour le rôle',
            life: 5000,
          });
          this.loading = false;
          return;
        }

        this.roleName = normalized.role.name;
        this.originalName = normalized.role.name;
        this.modules = normalized.modules;
        this.loadPermissionsCatalog();
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err?.error?.message || 'Impossible de charger le rôle',
          life: 5000,
        });
        this.loading = false;
      },
    });
  }

  private loadPermissionsCatalog() {
    this.roleService.getPermissions().subscribe({
      next: (permissionsResponse) => {
        const catalog = Array.isArray(permissionsResponse?.data) ? permissionsResponse.data : [];
        this.applyPermissionCatalog(catalog);
        this.loading = false;
      },
      error: () => {
        // Si le catalogue n'est pas disponible, on conserve le comportement existant.
        if (!this.modules.length) {
          this.modules = [];
        }
        this.loading = false;
      },
    });
  }

  private applyPermissionCatalog(catalog: PermissionCatalogModule[]) {
    if (!catalog.length) {
      return;
    }

    const roleModulesMap = new Map(
      this.modules.map((module) => [this.normalizeModuleKey(module.module), module])
    );

    this.availableActionsByModule.clear();

    const mergedModules: ModulePermission[] = catalog.map((catalogModule) => {
      const moduleKey = this.normalizeModuleKey(catalogModule.module);
      const roleModule = roleModulesMap.get(moduleKey);
      const allowedActions = this.getAllowedActionsFromCatalog(catalogModule);

      this.availableActionsByModule.set(moduleKey, allowedActions);
      roleModulesMap.delete(moduleKey);

      return {
        module: catalogModule.module,
        permissions: {
          create: allowedActions.has('create') ? !!roleModule?.permissions?.create : false,
          read: allowedActions.has('read') ? !!roleModule?.permissions?.read : false,
          update: allowedActions.has('update') ? !!roleModule?.permissions?.update : false,
          delete: allowedActions.has('delete') ? !!roleModule?.permissions?.delete : false,
        },
      };
    });

    // Cas rare: permission déjà liée au rôle, mais module absent du catalogue.
    roleModulesMap.forEach((module, moduleKey) => {
      this.availableActionsByModule.set(moduleKey, new Set(this.actions));
      mergedModules.push(module);
    });

    this.modules = mergedModules;
  }

  private getAllowedActionsFromCatalog(module: PermissionCatalogModule): Set<PermissionAction> {
    const rawActions = Array.isArray(module.actions) ? module.actions : [];
    const normalizedActions = rawActions
      .map((action) => action?.toLowerCase().trim())
      .filter((action): action is PermissionAction => this.actions.includes(action as PermissionAction));

    if (normalizedActions.length > 0) {
      return new Set(normalizedActions);
    }

    return new Set(this.actions);
  }

  private normalizeModuleKey(moduleName: string): string {
    return String(moduleName ?? '').trim().toLowerCase();
  }

  private normalizeRolePayload(data: any): { role: { id: number; name: string }; modules: ModulePermission[] } | null {
    const payload = data?.data ?? data;

    if (payload?.role?.name) {
      return {
        role: payload.role,
        modules: Array.isArray(payload.modules) ? payload.modules : [],
      };
    }

    if (payload?.name) {
      return {
        role: {
          id: Number(payload.id ?? this.roleId),
          name: String(payload.name),
        },
        modules: Array.isArray(payload.modules) ? payload.modules : [],
      };
    }

    return null;
  }

  // ─── Toggle helpers ────────────────────────────────────

  togglePermission(module: ModulePermission, action: PermissionAction) {
    if (!this.isActionAllowed(module, action)) {
      return;
    }

    module.permissions[action] = !module.permissions[action];
  }

  isRowAllChecked(module: ModulePermission): boolean {
    const applicableActions = this.actions.filter(a => this.isActionAllowed(module, a));
    if (applicableActions.length === 0) {
      return false;
    }

    return applicableActions.every(a => module.permissions[a]);
  }

  isRowIndeterminate(module: ModulePermission): boolean {
    const applicableActions = this.actions.filter(a => this.isActionAllowed(module, a));
    if (applicableActions.length === 0) {
      return false;
    }

    const checked = applicableActions.filter(a => module.permissions[a]).length;
    return checked > 0 && checked < applicableActions.length;
  }

  toggleRow(module: ModulePermission) {
    const applicableActions = this.actions.filter(a => this.isActionAllowed(module, a));
    if (applicableActions.length === 0) {
      return;
    }

    const allChecked = this.isRowAllChecked(module);
    applicableActions.forEach(a => {
      module.permissions[a] = !allChecked;
    });
  }

  isColumnAllChecked(action: PermissionAction): boolean {
    const applicableModules = this.modules.filter(m => this.isActionAllowed(m, action));
    return applicableModules.length > 0 && applicableModules.every(m => m.permissions[action]);
  }

  isColumnIndeterminate(action: PermissionAction): boolean {
    const applicableModules = this.modules.filter(m => this.isActionAllowed(m, action));
    if (applicableModules.length === 0) {
      return false;
    }

    const checked = applicableModules.filter(m => m.permissions[action]).length;
    return checked > 0 && checked < applicableModules.length;
  }

  toggleColumn(action: PermissionAction) {
    const applicableModules = this.modules.filter(m => this.isActionAllowed(m, action));
    if (applicableModules.length === 0) {
      return;
    }

    const allChecked = this.isColumnAllChecked(action);
    applicableModules.forEach(m => {
      m.permissions[action] = !allChecked;
    });
  }

  isActionAllowed(module: ModulePermission, action: PermissionAction): boolean {
    const allowedActions = this.availableActionsByModule.get(this.normalizeModuleKey(module.module));
    if (!allowedActions || allowedActions.size === 0) {
      return true;
    }

    return allowedActions.has(action);
  }

  isRowToggleDisabled(module: ModulePermission): boolean {
    return this.actions.every(action => !this.isActionAllowed(module, action));
  }

  isColumnToggleDisabled(action: PermissionAction): boolean {
    return !this.modules.some(module => this.isActionAllowed(module, action));
  }

  // ─── Save ──────────────────────────────────────────────

  savePermissions() {
    if (this.saving) return;
    this.saving = true;

    const permissions: Record<string, string[]> = {};
    this.modules.forEach(m => {
      const active = this.actions.filter(a => this.isActionAllowed(m, a) && m.permissions[a]);
      if (active.length > 0) {
        permissions[m.module] = active;
      }
    });

    const dto: UpdatePermissionsDto = { permissions };

    this.roleService.updatePermissions(this.roleId, dto).subscribe({
      next: (response) => {
        this.modules = response.data.modules;
        this.refreshCurrentUserPermissions();
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Permissions mises à jour',
          life: 3000,
        });
        this.saving = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err?.error?.message || 'Impossible de sauvegarder les permissions',
          life: 5000,
        });
        this.saving = false;
      },
    });
  }

  saveName() {
    if (this.savingName || !this.roleName.trim() || this.roleName === this.originalName) return;
    this.savingName = true;

    this.roleService.updateRole(this.roleId, { name: this.roleName.trim() }).subscribe({
      next: () => {
        this.originalName = this.roleName.trim();
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Nom du rôle mis à jour',
          life: 3000,
        });
        this.savingName = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err?.error?.message || 'Impossible de renommer le rôle',
          life: 5000,
        });
        this.savingName = false;
      },
    });
  }

  private refreshCurrentUserPermissions() {
    this.authService.me().subscribe({
      next: () => {},
      error: () => {},
    });
  }

  goBack() {
    this.router.navigate(['/parametres']);
  }
}

