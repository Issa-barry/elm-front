import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
 import { Prestataire, CreatePrestataireDto } from '@/models/prestataire.model';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
import { UtilisateursForm } from '../utilisateurs-form/utilisateurs-form';
 
@Component({
  selector: 'app-utilisateurs-new',
  standalone: true,
  templateUrl: './utilisateurs-new.html',
  styleUrl: './utilisateurs-new.scss',
    providers: [MessageService],
      imports: [CommonModule, ToastModule, UtilisateursForm],
})
export class UtilisateursNew {
  loading = false;

  constructor(
    private prestataireService: PrestataireService,
    private messageService: MessageService,
    private router: Router
  ) {}

  onSubmit(data: Partial<Prestataire>) {
    this.loading = true;

    const payload: CreatePrestataireDto = {
      nom: data.nom || '',
      prenom: data.prenom || '',
      phone: data.phone || '',
      pays: data.pays || 'Guinée',
      code_pays: data.code_pays || 'GN',
      code_phone_pays: this.getCodePhonePays(data.code_pays || 'GN'),
      ville: data.ville || '',
      quartier: data.quartier || undefined,
      adresse: data.adresse || undefined,
      raison_sociale: data.raison_sociale || undefined,
      email: data.email || undefined,
      specialite: data.specialite || undefined,
      type: data.type || undefined,
      tarif_horaire: data.tarif_horaire || undefined,
      notes: data.notes || undefined,
    };

    console.log(payload);
    

    this.prestataireService.createPrestataire(payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Prestataire créé avec succès'
          });
          setTimeout(() => {
            this.router.navigate(['contacts/prestateurs']);
          }, 1500);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la création:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: error.error?.message || 'Erreur lors de la création du prestataire'
        });
        this.loading = false;
      }
    });
  }

  private getCodePhonePays(codeCountry: string): string {
    const codes: { [key: string]: string } = {
      'GN': '+224',
      'SL': '+232',
      'LR': '+231',
      'CI': '+225',
      'SN': '+221',
      'ML': '+223',
      'BF': '+226',
      'NE': '+227',
      'TG': '+228',
      'BJ': '+229',
      'GH': '+233',
      'NG': '+234',
      'GM': '+220',
      'GW': '+245',
      'CV': '+238',
      'MR': '+222',
      'FR': '+33',
      'BE': '+32',
      'CH': '+41',
      'LU': '+352',
      'CA': '+1',
      'US': '+1'
    };
    return codes[codeCountry] || '+224';
  }
}