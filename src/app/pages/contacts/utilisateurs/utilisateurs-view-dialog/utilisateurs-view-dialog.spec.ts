import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { of, throwError } from 'rxjs';

import { User, UserType } from '@/models/user.model';
import { RoleService } from '@/services/role/role.service';
import { UpdateUserDto, UserService } from '@/services/users/users.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { UsineService } from '@/services/usine/usine.service';
import { UtilisateursViewDialog } from './utilisateurs-view-dialog';

function makeUser(overrides: Partial<User> = {}): User {
  return {
    id: 1,
    nom: 'Barry',
    prenom: 'Mamadou',
    phone: '+224620000001',
    email: 'test@example.com',
    pays: 'Guinee',
    code_pays: 'GN',
    code_phone_pays: '+224',
    ville: 'Conakry',
    quartier: 'Kaloum',
    reference: 'USR-20260228-0001',
    type: 'staff',
    is_active: true,
    email_verified_at: null,
    last_login_at: null,
    last_login_ip: null,
    created_at: '2026-02-28T10:00:00Z',
    updated_at: '2026-02-28T10:00:00Z',
    nom_complet: 'Mamadou Barry',
    roles: ['admin'],
    role_names: ['admin'],
    permissions: [],
    civilite: 'M',
    date_naissance: null,
    adresse: null,
    language: 'fr',
    activated_at: null,
    last_seen_at: null,
    piece_type: null,
    piece_numero: null,
    piece_delivree_le: null,
    piece_expire_le: null,
    piece_pays: null,
    ...overrides,
  };
}

describe('UtilisateursViewDialog', () => {
  let component: UtilisateursViewDialog;
  let fixture: ComponentFixture<UtilisateursViewDialog>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let roleServiceSpy: jasmine.SpyObj<RoleService>;
  let usineServiceSpy: jasmine.SpyObj<UsineService>;
  let usineContextMock: { currentUsineId: jasmine.Spy };

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj<UserService>('UserService', ['getUser', 'createUserViaApi', 'updateUser']);
    roleServiceSpy = jasmine.createSpyObj<RoleService>('RoleService', ['getRoles']);
    usineServiceSpy = jasmine.createSpyObj<UsineService>('UsineService', ['assignUser']);
    usineContextMock = {
      currentUsineId: jasmine.createSpy('currentUsineId').and.returnValue(12),
    };

    roleServiceSpy.getRoles.and.returnValue(
      of({
        success: true,
        message: 'OK',
        data: [
          { role: { id: 1, name: 'admin', created_at: '' }, modules: [] },
          { role: { id: 2, name: 'manager', created_at: '' }, modules: [] },
          { role: { id: 3, name: 'employe', created_at: '' }, modules: [] },
        ],
      } as any),
    );
    userServiceSpy.getUser.and.returnValue(of({ success: true, message: 'OK', data: makeUser() } as any));
    userServiceSpy.createUserViaApi.and.returnValue(of({ success: true, message: 'OK', data: makeUser({ id: 77 }) } as any));
    userServiceSpy.updateUser.and.returnValue(of({ success: true, message: 'OK', data: makeUser({ id: 55 }) } as any));
    usineServiceSpy.assignUser.and.returnValue(of({ success: true, message: 'OK', data: null } as any));

    await TestBed.configureTestingModule({
      imports: [UtilisateursViewDialog],
      providers: [
        provideAnimationsAsync(),
        { provide: UserService, useValue: userServiceSpy },
        { provide: RoleService, useValue: roleServiceSpy },
        { provide: UsineService, useValue: usineServiceSpy },
        { provide: UsineContextService, useValue: usineContextMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilisateursViewDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mode create: should apply first defaults for type and role on open', () => {
    component.mode = 'create';
    component.visible = true;

    component.ngOnChanges({
      visible: new SimpleChange(false, true, false),
    });

    expect(component.model.type).toBe('staff');
    expect(component.model.role).toBe('admin');
  });

  it('onTypeChange: non-staff should force role to same value', () => {
    component.mode = 'create';
    component.model.type = 'client' as UserType;
    component.model.role = '';

    component.onTypeChange();

    expect(component.model.role).toBe('client');
  });

  it('should block save when phone prefix does not match selected country', () => {
    component.mode = 'edit';
    component.userId = 5;
    component.model.nom = 'Diallo';
    component.model.prenom = 'Thierno';
    component.model.phone = '+224620000001';
    component.model.code_pays = 'SL';
    component.model.pays = 'Sierra Leone';
    component.model.ville = 'Freetown';
    component.model.quartier = 'Center';
    component.model.type = 'staff';
    component.model.role = 'manager';

    component.save();

    expect(component.phonePrefixError).toContain('pays selectionne');
    expect(userServiceSpy.updateUser).not.toHaveBeenCalled();
  });

  it('mode create: should normalize phone with selected country and emit on success', () => {
    component.mode = 'create';
    component.visible = true;
    component.ngOnChanges({ visible: new SimpleChange(false, true, false) });

    component.model.nom = 'Barry';
    component.model.prenom = 'Mamadou';
    component.model.phone = '232620000001';
    component.model.code_pays = 'SL';
    component.model.pays = 'Sierra Leone';
    component.model.ville = 'Freetown';
    component.model.quartier = 'Town';
    component.model.type = 'staff';
    component.model.role = 'admin';
    component.model.password = 'Password1';
    component.model.password_confirmation = 'Password1';

    spyOn(component.userSaved, 'emit');
    spyOn(component.visibleChange, 'emit');

    component.save();

    expect(userServiceSpy.createUserViaApi).toHaveBeenCalled();
    const payload = userServiceSpy.createUserViaApi.calls.mostRecent().args[0];
    expect(payload.phone).toBe('+232620000001');
    expect(payload.code_phone_pays).toBe('+232');
    expect(usineServiceSpy.assignUser).toHaveBeenCalledWith(12, jasmine.objectContaining({ user_id: 77, role: 'admin' }));
    expect(component.userSaved.emit).toHaveBeenCalledWith(jasmine.objectContaining({ mode: 'create' }));
    expect(component.visibleChange.emit).toHaveBeenCalledWith(false);
  });

  it('mode create: should stop with error if no usine is selected', () => {
    usineContextMock.currentUsineId.and.returnValue(null);
    component.mode = 'create';
    component.model.nom = 'Barry';
    component.model.prenom = 'Mamadou';
    component.model.phone = '+224620000010';
    component.model.code_pays = 'GN';
    component.model.pays = 'Guinee';
    component.model.ville = 'Conakry';
    component.model.quartier = 'Kaloum';
    component.model.type = 'staff';
    component.model.role = 'admin';
    component.model.password = 'Password1';
    component.model.password_confirmation = 'Password1';

    component.save();

    expect(component.formError).toContain('selectionner une usine');
    expect(userServiceSpy.createUserViaApi).not.toHaveBeenCalled();
    expect(usineServiceSpy.assignUser).not.toHaveBeenCalled();
  });

  it('mode create: should show backend validation errors list (errors) instead of generic message', () => {
    userServiceSpy.createUserViaApi.and.returnValue(
      throwError(() => ({
        status: 422,
        error: {
          message: 'Les donnees fournies sont invalides.',
          errors: {
            phone: ['Le numero de telephone est deja utilise.'],
            email: ['Le format de email est invalide.'],
          },
        },
      })),
    );

    component.mode = 'create';
    component.model.nom = 'Barry';
    component.model.prenom = 'Mamadou';
    component.model.phone = '+224620000010';
    component.model.code_pays = 'GN';
    component.model.pays = 'Guinee';
    component.model.ville = 'Conakry';
    component.model.quartier = 'Kaloum';
    component.model.type = 'staff';
    component.model.role = 'admin';
    component.model.password = 'Password1';
    component.model.password_confirmation = 'Password1';

    component.save();

    expect(component.formError).toBe('Le numero de telephone est deja utilise.');
    expect(component.formErrors).toEqual([
      'Le numero de telephone est deja utilise.',
      'Le format de email est invalide.',
    ]);
  });

  it('mode edit: opening visible with userId should load and map user data', () => {
    userServiceSpy.getUser.and.returnValue(
      of({
        success: true,
        message: 'OK',
        data: makeUser({
          id: 5,
          nom: 'Diallo',
          prenom: 'Fatou',
          code_pays: 'SL',
          pays: 'Sierra Leone',
          role_names: ['manager'],
          roles: ['manager'],
        }),
      } as any),
    );

    component.mode = 'edit';
    component.userId = 5;
    component.visible = true;
    component.ngOnChanges({ visible: new SimpleChange(false, true, false) });

    expect(userServiceSpy.getUser).toHaveBeenCalledWith(5);
    expect(component.model.nom).toBe('Diallo');
    expect(component.model.prenom).toBe('Fatou');
    expect(component.model.code_pays).toBe('SL');
    expect(component.model.role).toBe('manager');
  });

  it('mode edit: should update user and emit success payload', () => {
    const updated = makeUser({ id: 55, nom: 'Updated', phone: '+224620000012' });
    userServiceSpy.updateUser.and.returnValue(of({ success: true, message: 'OK', data: updated } as any));

    component.mode = 'edit';
    component.userId = 55;
    component.model.nom = 'Updated';
    component.model.prenom = 'User';
    component.model.phone = '620000012';
    component.model.code_pays = 'GN';
    component.model.pays = 'Guinee';
    component.model.ville = 'Conakry';
    component.model.quartier = 'Kaloum';
    component.model.type = 'staff';
    component.model.role = 'admin';

    spyOn(component.userSaved, 'emit');
    spyOn(component.visibleChange, 'emit');

    component.save();

    expect(userServiceSpy.updateUser).toHaveBeenCalled();
    const [calledId, payload] = userServiceSpy.updateUser.calls.mostRecent().args as [number, UpdateUserDto];
    expect(calledId).toBe(55);
    expect(payload.phone).toBe('+224620000012');
    expect(payload.code_phone_pays).toBe('+224');
    expect(component.userSaved.emit).toHaveBeenCalledWith(jasmine.objectContaining({ mode: 'edit' }));
    expect(component.visibleChange.emit).toHaveBeenCalledWith(false);
  });

  it('onPhoneBlur should clear prefix error when phone is empty', () => {
    component.phonePrefixError = 'x';
    component.model.phone = '';

    component.onPhoneBlur();

    expect(component.phonePrefixError).toBeNull();
  });
});
