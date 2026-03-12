import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UtilisateursNew } from './utilisateurs-new';
import { UserService } from '@/services/users/users.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { UsineService } from '@/services/usine/usine.service';
import { AuthService } from '@/services/auth/auth.service';
import { OrganisationService } from '@/services/organisations/organisation.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

describe('UtilisateursNew', () => {
  let component: UtilisateursNew;
  let fixture: ComponentFixture<UtilisateursNew>;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj<UserService>('UserService', ['createUserViaApi']);
    const usineServiceSpy = jasmine.createSpyObj<UsineService>('UsineService', ['assignUser']);
    const usineContextMock = {
      currentUsineId: jasmine.createSpy('currentUsineId').and.returnValue(1),
      isConsolidated: jasmine.createSpy('isConsolidated').and.returnValue(false),
      currentUsine: jasmine.createSpy('currentUsine').and.returnValue({ id: 1, nom: 'Usine test' }),
    };
    const authServiceMock = {
      currentUser: jasmine.createSpy('currentUser').and.returnValue({
        id: 1,
        organisation_id: 3,
        organisation_name: 'Agence demo',
        roles: ['admin_entreprise'],
      }),
      hasAnyRole: jasmine.createSpy('hasAnyRole').and.returnValue(false),
    };
    const organisationServiceSpy = jasmine.createSpyObj<OrganisationService>('OrganisationService', ['getAll']);
    organisationServiceSpy.getAll.and.returnValue(of([{ id: 3, nom: 'Agence demo', code: 'AGC' }] as any));

    const messageServiceSpy = jasmine.createSpyObj<MessageService>('MessageService', ['add']);
    const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [UtilisateursNew],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: UsineService, useValue: usineServiceSpy },
        { provide: UsineContextService, useValue: usineContextMock },
        { provide: AuthService, useValue: authServiceMock },
        { provide: OrganisationService, useValue: organisationServiceSpy },
        { provide: MessageService, useValue: messageServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
