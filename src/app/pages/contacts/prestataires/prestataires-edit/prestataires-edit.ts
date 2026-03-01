import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { Prestataire, UpdatePrestataireDto } from '@/models/prestataire.model';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
import { PrestatairesFrom } from '../prestataires-from/prestataires-from';

@Component({
  selector: 'app-prestataires-edit',
  standalone: true,
  imports: [CommonModule, PrestatairesFrom, ToastModule],
  providers: [MessageService],
  templateUrl: './prestataires-edit.html',
  styleUrl: './prestataires-edit.scss',
})
export class PrestatairesEdit implements OnInit {
  loading = false;
  prestataireId: number | null = null;
  prestatairesData: Partial<Prestataire> | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prestataireService: PrestataireService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.prestataireId = parseInt(id, 10);
      this.loadPrestataire(this.prestataireId);
    }
  }

  loadPrestataire(id: number) {
    this.loading = true;

    this.prestataireService.getPrestataire(id).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const prestataire = response.data;
          this.prestatairesData = {
            id: prestataire.id,
            reference: prestataire.reference,
            type: prestataire.type || undefined,
            nom: prestataire.nom,
            prenom: prestataire.prenom,
            raison_sociale: prestataire.raison_sociale || undefined,
            phone: prestataire.phone,
            email: prestataire.email || undefined,
            pays: prestataire.pays,
            code_pays: prestataire.code_pays,
            code_phone_pays: prestataire.code_phone_pays,
            ville: prestataire.ville,
            quartier: prestataire.quartier || undefined,
            adresse: prestataire.adresse || undefined,
            specialite: prestataire.specialite || undefined,
            tarif_horaire: prestataire.tarif_horaire || undefined,
            notes: prestataire.notes || undefined,
          };
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Erreur lors du chargement du prestataire',
        });
        this.loading = false;
      },
    });
  }

  onSubmit(data: Partial<Prestataire>) {
    if (!this.prestataireId) return;

    this.loading = true;

    const payload: UpdatePrestataireDto = {
      nom: data.nom,
      prenom: data.prenom,
      phone: data.phone,
      pays: data.pays,
      code_pays: data.code_pays,
      code_phone_pays: this.getCodePhonePays(data.code_pays || 'GN'),
      ville: data.ville,
      quartier: data.quartier || undefined,
      adresse: data.adresse || undefined,
      raison_sociale: data.raison_sociale || undefined,
      email: data.email || undefined,
      specialite: data.specialite || undefined,
      type: data.type || undefined,
      tarif_horaire: data.tarif_horaire || undefined,
      notes: data.notes || undefined,
    };

    this.prestataireService.updatePrestataire(this.prestataireId, payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.messageService.add({
            severity: 'success',
            summary: 'Succes',
            detail: 'Prestataire modifie avec succes',
          });
          this.loadPrestataire(this.prestataireId!);
        } else {
          this.loading = false;
        }
      },
      error: (error) => {
        console.error('Erreur lors de la modification:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: this.getApiErrorDetail(error, 'Erreur lors de la modification du prestataire'),
        });
        this.loading = false;
      },
    });
  }

  onCancel() {
    this.router.navigate(['contacts/prestataires']);
  }

  private getCodePhonePays(codeCountry: string): string {
    const codes: { [key: string]: string } = {
      GN: '+224',
      SL: '+232',
      LR: '+231',
      CI: '+225',
      SN: '+221',
      ML: '+223',
      BF: '+226',
      NE: '+227',
      TG: '+228',
      BJ: '+229',
      GH: '+233',
      NG: '+234',
      GM: '+220',
      GW: '+245',
      CV: '+238',
      MR: '+222',
      FR: '+33',
      BE: '+32',
      CH: '+41',
      LU: '+352',
      CA: '+1',
      US: '+1',
    };
    return codes[codeCountry] || '+224';
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
}
