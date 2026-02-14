import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { ParametresPacking } from '../components/parametres-packing/parametres-packing';
import { ParametresProfile } from '../components/parametres-profile/parametres-profile';
import { ParametresAuth } from '../components/parametres-auth/parametres-auth';

@Component({
  selector: 'app-parametres-liste',
  standalone: true,
  imports: [CommonModule, ParametresAuth, DividerModule, ToastModule, RouterModule, ParametresPacking, ParametresProfile],
  providers: [MessageService],
  templateUrl: './parametres-liste.html',
  styleUrl: './parametres-liste.scss',
})
export class ParametresListe {
   activeSection: 'profile' | 'auth' | 'packing' | 'roles' = 'profile';

  setActiveSection(section: 'profile' | 'auth' | 'packing'): void {
    this.activeSection = section;
  }

  onSectionClick(event: Event, section: 'profile' | 'auth' | 'packing'): void {
    event.preventDefault();
    event.stopPropagation();
    this.setActiveSection(section);
  }

  isActive(section: 'profile' | 'auth' | 'packing'): boolean {
    return this.activeSection === section;
  }
}
