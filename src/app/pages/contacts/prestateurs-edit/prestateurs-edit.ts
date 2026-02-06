import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PrestateursFrom } from '../prestateurs-from/prestateurs-from';
import { Prestataire, UpdatePrestataireDto } from '@/models/prestataire.model';
import { PrestataireService } from '@/services/prestataire/prestataire.service';

@Component({
  selector: 'app-prestateurs-edit',
  standalone: true,
  imports: [CommonModule, PrestateursFrom, ToastModule],
  providers: [MessageService],
  templateUrl: './prestateurs-edit.html',
  styleUrl: './prestateurs-edit.scss',
})
export class PrestateursEdit implements OnInit {
  loading = false;
  prestateurId: number | null = null;
  prestateursData: Partial<Prestataire> | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prestataireService: PrestataireService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id=",id);
    
    if (id) {
      this.prestateurId = parseInt(id, 10);
      this.loadPrestataire(this.prestateurId);
    }
  }

  loadPrestataire(id: number) {
    this.loading = true;

    this.prestataireService.getPrestataire(id).subscribe({
      next: (response) => {
        console.log("bonjour", response);
        if (response.success && response.data) {
          const prestataire = response.data;
          this.prestateursData = {
            id: prestataire.id,
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
          detail: 'Erreur lors du chargement du prestataire'
        });
        this.loading = false;
      }
    });
  }

  onSubmit(data: Partial<Prestataire>) {
    if (!this.prestateurId) return;

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
    };

    this.prestataireService.updatePrestataire(this.prestateurId, payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Prestataire modifié avec succès'
          });
          setTimeout(() => {
            this.router.navigate(['contacts/prestateurs']);
          }, 1500);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la modification:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: error.error?.message || 'Erreur lors de la modification du prestataire'
        });
        this.loading = false;
      }
    });
  }

  onCancel() {
    this.router.navigate(['contacts/prestateurs']);
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