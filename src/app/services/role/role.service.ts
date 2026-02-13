import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  RoleWithModules,
  CreateRoleDto,
  UpdateRoleDto,
  UpdatePermissionsDto,
  ModulePermission,
  UserRoles,
} from '@/models/role.model';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private readonly apiUrl = `${environment.apiUrl}/roles`;
  private readonly permissionsUrl = `${environment.apiUrl}/permissions`;
  private readonly usersUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getRoles(): Observable<ApiResponse<RoleWithModules[]>> {
    return this.http.get<ApiResponse<RoleWithModules[]>>(this.apiUrl);
  }

  getRole(id: number): Observable<ApiResponse<RoleWithModules>> {
    return this.http.get<ApiResponse<RoleWithModules>>(`${this.apiUrl}/${id}`);
  }

  createRole(dto: CreateRoleDto): Observable<ApiResponse<{ role: { id: number; name: string; created_at: string } }>> {
    return this.http.post<ApiResponse<{ role: { id: number; name: string; created_at: string } }>>(this.apiUrl, dto);
  }

  updateRole(id: number, dto: UpdateRoleDto): Observable<ApiResponse<{ role: { id: number; name: string; created_at: string } }>> {
    return this.http.put<ApiResponse<{ role: { id: number; name: string; created_at: string } }>>(`${this.apiUrl}/${id}`, dto);
  }

  deleteRole(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.apiUrl}/${id}`);
  }

  updatePermissions(id: number, dto: UpdatePermissionsDto): Observable<ApiResponse<{ role: { id: number; name: string }; modules: ModulePermission[] }>> {
    return this.http.put<ApiResponse<{ role: { id: number; name: string }; modules: ModulePermission[] }>>(
      `${this.apiUrl}/${id}/permissions`,
      dto
    );
  }

  getPermissions(): Observable<ApiResponse<ModulePermission[]>> {
    return this.http.get<ApiResponse<ModulePermission[]>>(this.permissionsUrl);
  }

  assignRole(userId: number, role: string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.usersUrl}/${userId}/assign-role`, { role });
  }

  getUserRoles(userId: number): Observable<ApiResponse<UserRoles>> {
    return this.http.get<ApiResponse<UserRoles>>(`${this.usersUrl}/${userId}/roles`);
  }
}
