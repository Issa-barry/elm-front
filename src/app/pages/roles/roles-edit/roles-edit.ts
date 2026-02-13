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
import {
  ModulePermission,
  PermissionAction,
  PERMISSION_ACTIONS,
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

  readonly actions = PERMISSION_ACTIONS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roleService: RoleService,
    private messageService: MessageService
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

        if (normalized.modules.length > 0) {
          this.modules = normalized.modules;
          this.loading = false;
          return;
        }

        this.roleService.getPermissions().subscribe({
          next: (permissionsResponse) => {
            this.modules = Array.isArray(permissionsResponse?.data)
              ? permissionsResponse.data.map((module) => ({
                  module: module.module,
                  permissions: {
                    create: !!module.permissions?.create,
                    read: !!module.permissions?.read,
                    update: !!module.permissions?.update,
                    delete: !!module.permissions?.delete,
                  },
                }))
              : [];
            this.loading = false;
          },
          error: () => {
            this.modules = [];
            this.loading = false;
          },
        });
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
    module.permissions[action] = !module.permissions[action];
  }

  isRowAllChecked(module: ModulePermission): boolean {
    return this.actions.every(a => module.permissions[a]);
  }

  isRowIndeterminate(module: ModulePermission): boolean {
    const checked = this.actions.filter(a => module.permissions[a]).length;
    return checked > 0 && checked < this.actions.length;
  }

  toggleRow(module: ModulePermission) {
    const allChecked = this.isRowAllChecked(module);
    this.actions.forEach(a => {
      module.permissions[a] = !allChecked;
    });
  }

  isColumnAllChecked(action: PermissionAction): boolean {
    return this.modules.length > 0 && this.modules.every(m => m.permissions[action]);
  }

  isColumnIndeterminate(action: PermissionAction): boolean {
    const checked = this.modules.filter(m => m.permissions[action]).length;
    return checked > 0 && checked < this.modules.length;
  }

  toggleColumn(action: PermissionAction) {
    const allChecked = this.isColumnAllChecked(action);
    this.modules.forEach(m => {
      m.permissions[action] = !allChecked;
    });
  }

  // ─── Save ──────────────────────────────────────────────

  savePermissions() {
    if (this.saving) return;
    this.saving = true;

    const permissions: Record<string, string[]> = {};
    this.modules.forEach(m => {
      const active = this.actions.filter(a => m.permissions[a]);
      if (active.length > 0) {
        permissions[m.module] = active;
      }
    });

    const dto: UpdatePermissionsDto = { permissions };

    this.roleService.updatePermissions(this.roleId, dto).subscribe({
      next: (response) => {
        this.modules = response.data.modules;
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

  goBack() {
    this.router.navigate(['/parametres']);
  }
}
