import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeVenteDetail2 } from './commande-vente-detail2';

describe('CommandeVenteDetail2', () => {
  let component: CommandeVenteDetail2;
  let fixture: ComponentFixture<CommandeVenteDetail2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandeVenteDetail2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeVenteDetail2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
