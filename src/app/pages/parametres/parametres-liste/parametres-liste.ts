import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { ParametresPacking } from '../components/parametres-packing/parametres-packing';
import { ParametresProfile } from '../components/parametres-profile/parametres-profile';

@Component({
  selector: 'app-parametres-liste',
  standalone: true,
  imports: [CommonModule, DividerModule, ToastModule, RouterModule, ParametresPacking, ParametresProfile],
  providers: [MessageService],
  templateUrl: './parametres-liste.html',
  styleUrl: './parametres-liste.scss',
})
export class ParametresListe {
  activeSection: 'profile' | 'packing' = 'packing';

  setActiveSection(section: 'profile' | 'packing'): void {
    this.activeSection = section;
  }

  onSectionClick(event: Event, section: 'profile' | 'packing'): void {
    event.preventDefault();
    event.stopPropagation();
    this.setActiveSection(section);
  }

  isActive(section: 'profile' | 'packing'): boolean {
    return this.activeSection === section;
  }
}
