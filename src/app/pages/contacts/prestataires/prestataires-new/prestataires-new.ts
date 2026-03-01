import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
 import { Prestataire, CreatePrestataireDto } from '@/models/prestataire.model';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
import { PrestatairesFrom } from '../prestataires-from/prestataires-from';

@Component({
  selector: 'app-prestataires-new',
  standalone: true,
  imports: [CommonModule, PrestatairesFrom, ToastModule],
  providers: [MessageService],
  templateUrl: './prestataires-new.html',
  styleUrl: './prestataires-new.scss',
})
export class PrestatairesNew {
  loading = false;

  constructor(
    private prestataireService: PrestataireService,
    private messageService: MessageService,
    private router: Router
  ) {}

  onCancel() {
    this.router.navigate(['contacts/prestataires']);
  }

  onSubmit(data: Partial<Prestataire>) {
    this.loading = true;

    const payload: CreatePrestataireDto = {
      nom: data.nom || '',
      prenom: data.prenom || '',
      phone: data.phone || '',
      pays: data.pays || 'Guinee',
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
            summary: 'Succes',
            detail: 'Prestataire cree avec succes'
          });
          const id = response.data?.id;
          setTimeout(() => {
            if (id != null) {
              this.router.navigate(['contacts/prestataires/edit', id]);
            } else {
              this.router.navigate(['contacts/prestataires']);
            }
          }, 1500);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la creation:', error);
        const errorDetail = this.getApiErrorDetail(error, 'Erreur lors de la creation du prestataire');
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: errorDetail
        });
        this.loading = false;
      }
    });
  }

  private getApiErrorDetail(error: unknown, fallback: string): string {
    const validationMessages = this.extractValidationMessages(error);
    if (validationMessages.length > 0) {
      return validationMessages.join('; ');
    }

    const apiMessage = this.extractApiMessage(error);
    if (apiMessage) {
      return apiMessage;
    }

    return fallback;
  }

  private extractApiMessage(error: unknown): string | null {
    const message = (error as { error?: { message?: unknown } })?.error?.message;
    if (typeof message !== 'string') {
      return null;
    }

    const trimmedMessage = message.trim();
    return trimmedMessage.length > 0 ? trimmedMessage : null;
  }

  private extractValidationMessages(error: unknown): string[] {
    const validationErrors = (error as { error?: { errors?: unknown } })?.error?.errors;
    if (!validationErrors || typeof validationErrors !== 'object') {
      return [];
    }

    return Object.values(validationErrors as Record<string, unknown>)
      .flatMap((value) => (Array.isArray(value) ? value : [value]))
      .map((message) => String(message).trim())
      .filter((message) => message.length > 0);
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
