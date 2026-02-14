import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';

import { RoleService } from '@/services/role/role.service';
import { RoleWithModules, PERMISSION_ACTIONS } from '@/models/role.model';

@Component({
  selector: 'app-roles-liste',
  standalone: true,
  templateUrl: './roles-liste.html',
  styleUrl: './roles-liste.scss',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    DialogModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
    TooltipModule,
  ],
  providers: [MessageService, ConfirmationService],
})
export class RolesListe implements OnInit {
  roles = signal<RoleWithModules[]>([]);
  loading = false;

  // Dialog création
  createDialog = false;
  newRoleName = '';
  creating = false;

  @ViewChild('dt') dt!: Table;

  constructor(
    private roleService: RoleService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadRoles();
  }

  loadRoles() {
    this.loading = true;
    this.roleService.getRoles().subscribe({
      next: (response) => {
        const payload = response?.data as
          | RoleWithModules[]
          | { roles?: RoleWithModules[]; data?: RoleWithModules[] }
          | undefined;

        const roles = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.roles)
          ? payload.roles
          : Array.isArray(payload?.data)
          ? payload.data
          : [];

        this.roles.set(roles.map(item => this.normalizeRoleItem(item)));
        this.loading = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err?.error?.message || 'Impossible de charger les rôles',
          life: 5000,
        });
        this.loading = false;
      },
    });
  }

  countPermissions(item: RoleWithModules): number {
    return item.modules.reduce((count, m) => {
      return count + PERMISSION_ACTIONS.filter(a => m.permissions[a]).length;
    }, 0);
  }

  private normalizeRoleItem(item: any): RoleWithModules {
    if (item?.role && Array.isArray(item?.modules)) {
      return item as RoleWithModules;
    }

    const role = {
      id: Number(item?.id ?? 0),
      name: String(item?.name ?? ''),
      created_at: String(item?.created_at ?? ''),
    };

    const permissionNames: string[] = Array.isArray(item?.permissions)
      ? item.permissions
          .map((p: any) => (typeof p === 'string' ? p : p?.name))
          .filter((p: unknown): p is string => typeof p === 'string' && p.includes('.'))
      : [];

    const modulesMap = new Map<string, Set<string>>();
    permissionNames.forEach((permission) => {
      const [module, action] = permission.split('.');
      if (!module || !action) {
        return;
      }

      if (!modulesMap.has(module)) {
        modulesMap.set(module, new Set<string>());
      }
      modulesMap.get(module)?.add(action);
    });

    const modules = Array.from(modulesMap.entries()).map(([module, actions]) => ({
      module,
      permissions: {
        create: actions.has('create'),
        read: actions.has('read'),
        update: actions.has('update'),
        delete: actions.has('delete'),
      },
    }));

    return { role, modules };
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  openCreateDialog() {
    this.newRoleName = '';
    this.createDialog = true;
  }

  goToParametres() {
    this.router.navigate(['/parametres']);
  }

  createRole() {
    if (!this.newRoleName.trim() || this.creating) return;

    this.creating = true;
    this.roleService.createRole({ name: this.newRoleName.trim() }).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Rôle créé avec succès',
          life: 3000,
        });
        this.createDialog = false;
        this.creating = false;
        this.loadRoles();
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err?.error?.message || 'Impossible de créer le rôle',
          life: 5000,
        });
        this.creating = false;
      },
    });
  }

  editRole(item: RoleWithModules) {
    this.router.navigate(['/roles/edit', item.role.id]);
  }

  deleteRole(item: RoleWithModules) {
    if (item.role.name === 'admin') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Attention',
        detail: 'Le rôle admin ne peut pas être supprimé',
        life: 3000,
      });
      return;
    }

    this.confirmationService.confirm({
      message: `Êtes-vous sûr de vouloir supprimer le rôle "${item.role.name}" ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.roleService.deleteRole(item.role.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Rôle supprimé',
              life: 3000,
            });
            this.loadRoles();
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: err?.error?.message || 'Impossible de supprimer le rôle',
              life: 5000,
            });
          },
        });
      },
    });
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }
}
