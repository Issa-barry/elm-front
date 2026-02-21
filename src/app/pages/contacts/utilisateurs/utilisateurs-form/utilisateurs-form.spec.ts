import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { of, throwError } from 'rxjs';

import { UtilisateursForm } from './utilisateurs-form';
import { UserService } from '@/services/users/users.service';
import { RoleService } from '@/services/role/role.service';

// ── helpers ───────────────────────────────────────────────────────────────────

function makeCheckPhoneOk(available: boolean, normalized?: string) {
  return of({
    success: true,
    message: 'OK',
    data: { available, normalized_phone: normalized },
  });
}

function makeHttpError(status: number, body: object = {}) {
  const err = { status, error: body };
  return throwError(() => err);
}

// ── setup ─────────────────────────────────────────────────────────────────────

describe('UtilisateursForm — checkPhone (étape 1)', () => {
  let component: UtilisateursForm;
  let fixture: ComponentFixture<UtilisateursForm>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let roleServiceSpy: jasmine.SpyObj<RoleService>;

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['checkPhone']);
    roleServiceSpy = jasmine.createSpyObj('RoleService', ['getRoles']);
    roleServiceSpy.getRoles.and.returnValue(of({ success: true, message: '', data: [] } as any));

    await TestBed.configureTestingModule({
      imports: [UtilisateursForm],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
        { provide: UserService, useValue: userServiceSpy },
        { provide: RoleService, useValue: roleServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilisateursForm);
    component = fixture.componentInstance;
    component.mode = 'create';
    fixture.detectChanges();
  });

  // ── numéro disponible ──────────────────────────────────────────────────────

  it('numéro disponible → passe à l'étape 2', fakeAsync(() => {
    userServiceSpy.checkPhone.and.returnValue(makeCheckPhoneOk(true, '+224620000001'));

    component.phoneCountry = 'GN';
    component.model.phone = '620 00 00 01';
    component.goNext();
    tick();

    expect(userServiceSpy.checkPhone).toHaveBeenCalled();
    expect(component.activeStep).toBe(2);
    expect(component.phoneError).toBeNull();
    expect(component.phoneCheckLoading).toBeFalse();
  }));

  it('normalized_phone est persisté sur le modèle', fakeAsync(() => {
    userServiceSpy.checkPhone.and.returnValue(makeCheckPhoneOk(true, '+224620000001'));

    component.phoneCountry = 'GN';
    component.model.phone = '620 00 00 01';
    component.goNext();
    tick();

    expect(component.model.normalized_phone).toBe('+224620000001');
  }));

  // ── numéro déjà utilisé ────────────────────────────────────────────────────

  it('numéro déjà utilisé → reste étape 1 + erreur inline', fakeAsync(() => {
    userServiceSpy.checkPhone.and.returnValue(makeCheckPhoneOk(false));

    component.phoneCountry = 'GN';
    component.model.phone = '620 00 00 02';
    component.goNext();
    tick();

    expect(component.activeStep).toBe(1);
    expect(component.phoneError).toBe('Ce numéro de téléphone est déjà utilisé.');
    expect(component.phoneCheckLoading).toBeFalse();
  }));

  // ── erreur 422 ─────────────────────────────────────────────────────────────

  it('erreur 422 avec errors.phone → affiche erreur validation', fakeAsync(() => {
    userServiceSpy.checkPhone.and.returnValue(
      makeHttpError(422, { errors: { phone: ['Format de numéro invalide.'] } }),
    );

    component.phoneCountry = 'GN';
    component.model.phone = '620 00 00 03';
    component.goNext();
    tick();

    expect(component.activeStep).toBe(1);
    expect(component.phoneError).toBe('Format de numéro invalide.');
    expect(component.phoneCheckLoading).toBeFalse();
  }));

  it('erreur 422 avec errors.code_phone_pays → affiche erreur code pays', fakeAsync(() => {
    userServiceSpy.checkPhone.and.returnValue(
      makeHttpError(422, { errors: { code_phone_pays: ['Code pays invalide.'] } }),
    );

    component.phoneCountry = 'GN';
    component.model.phone = '620 00 00 04';
    component.goNext();
    tick();

    expect(component.activeStep).toBe(1);
    expect(component.phoneError).toBe('Code pays invalide.');
    expect(component.phoneCheckLoading).toBeFalse();
  }));

  it('erreur 422 sans errors détaillées → affiche message générique', fakeAsync(() => {
    userServiceSpy.checkPhone.and.returnValue(
      makeHttpError(422, { message: 'Données invalides.' }),
    );

    component.phoneCountry = 'GN';
    component.model.phone = '620 00 00 05';
    component.goNext();
    tick();

    expect(component.phoneError).toBe('Données invalides.');
  }));

  // ── erreur 401 / 403 ───────────────────────────────────────────────────────

  it('erreur 401 → message session + reste étape 1 + pas de crash', fakeAsync(() => {
    userServiceSpy.checkPhone.and.returnValue(makeHttpError(401));

    component.phoneCountry = 'GN';
    component.model.phone = '620 00 00 06';
    component.goNext();
    tick();

    expect(component.activeStep).toBe(1);
    expect(component.phoneError).toContain('Session expirée');
    expect(component.phoneCheckLoading).toBeFalse();
  }));

  it('erreur 403 → message accès + reste étape 1 + pas de crash', fakeAsync(() => {
    userServiceSpy.checkPhone.and.returnValue(makeHttpError(403));

    component.phoneCountry = 'GN';
    component.model.phone = '620 00 00 07';
    component.goNext();
    tick();

    expect(component.activeStep).toBe(1);
    expect(component.phoneError).toContain('Session expirée');
    expect(component.phoneCheckLoading).toBeFalse();
  }));

  // ── loading state ──────────────────────────────────────────────────────────

  it('phoneCheckLoading est true pendant la requête', fakeAsync(() => {
    let resolveObs!: (v: any) => void;
    const pending$ = new Promise<any>(r => (resolveObs = r));
    // Observable qui ne complète pas immédiatement
    const { Subject } = require('rxjs');
    const subject = new Subject<any>();
    userServiceSpy.checkPhone.and.returnValue(subject.asObservable());

    component.phoneCountry = 'GN';
    component.model.phone = '620 00 00 08';
    component.goNext();

    // Avant la réponse
    expect(component.phoneCheckLoading).toBeTrue();

    subject.next({
      success: true,
      message: 'OK',
      data: { available: true },
    });
    subject.complete();
    tick();

    expect(component.phoneCheckLoading).toBeFalse();
  }));

  // ── mode édition : pas d'appel backend ────────────────────────────────────

  it('mode edit → pas d'appel checkPhone, passe directement à l'étape 2', fakeAsync(() => {
    component.mode = 'edit';
    component.phoneCountry = 'GN';
    component.model.phone = '620 00 00 09';
    component.goNext();
    tick();

    expect(userServiceSpy.checkPhone).not.toHaveBeenCalled();
    expect(component.activeStep).toBe(2);
  }));
});
