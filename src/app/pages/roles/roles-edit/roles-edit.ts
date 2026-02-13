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
        this.roleName = response.data.role.name;
        this.originalName = response.data.role.name;
        this.modules = response.data.modules;
        this.loading = false;
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

  // ─── Toggle helpers ────────────────────────────────────

  togglePermission(module: ModulePermission, action: PermissionAction) {
    (module.permissions as any)[action] = !(module.permissions as any)[action];
  }

  isRowAllChecked(module: ModulePermission): boolean {
    return this.actions.every(a => (module.permissions as any)[a]);
  }

  isRowIndeterminate(module: ModulePermission): boolean {
    const checked = this.actions.filter(a => (module.permissions as any)[a]).length;
    return checked > 0 && checked < this.actions.length;
  }

  toggleRow(module: ModulePermission) {
    const allChecked = this.isRowAllChecked(module);
    this.actions.forEach(a => {
      (module.permissions as any)[a] = !allChecked;
    });
  }

  isColumnAllChecked(action: PermissionAction): boolean {
    return this.modules.length > 0 && this.modules.every(m => (m.permissions as any)[action]);
  }

  isColumnIndeterminate(action: PermissionAction): boolean {
    const checked = this.modules.filter(m => (m.permissions as any)[action]).length;
    return checked > 0 && checked < this.modules.length;
  }

  toggleColumn(action: PermissionAction) {
    const allChecked = this.isColumnAllChecked(action);
    this.modules.forEach(m => {
      (m.permissions as any)[action] = !allChecked;
    });
  }

  // ─── Save ──────────────────────────────────────────────

  savePermissions() {
    if (this.saving) return;
    this.saving = true;

    const permissions: Record<string, string[]> = {};
    this.modules.forEach(m => {
      const active = this.actions.filter(a => (m.permissions as any)[a]);
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
    this.router.navigate(['/roles']);
  }
}
