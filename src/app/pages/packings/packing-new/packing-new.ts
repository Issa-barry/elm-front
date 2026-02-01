import { Component, OnInit } from '@angular/core';
import { PackingFrom } from '../packing-from/packing-from';
import { ContactInterface } from '@/models/contacts/contact-interface';
import { PackingModel } from '@/models/packing-model';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
import { Prestataire } from '@/models/prestataire.model';

@Component({
  selector: 'app-packing-new',
  standalone:true,
  imports: [PackingFrom],
  templateUrl: './packing-new.html',
  styleUrl: './packing-new.scss',
})
export class PackingNew implements OnInit {
  contacts: ContactInterface[] = [];

  loading = false;

  constructor(private prestataireService: PrestataireService) {}

  ngOnInit(): void {
    this.loadMachinistes();
  }

  private loadMachinistes(): void {
    this.loading = true;
    this.prestataireService.getPrestataires().subscribe({
      next: (response) => {
        const prestataires = this.extractPrestataires(response);
        this.contacts = prestataires
          .filter((prestataire) => prestataire.type === 'machiniste')
          .map((prestataire) => this.mapToContact(prestataire));
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des machinistes :', err);
        this.loading = false;
      }
    });
  }

  private extractPrestataires(
    response: { data: Prestataire[] } | { data: { data: Prestataire[] } }
  ): Prestataire[] {
    const data: any = response?.data;
    if (Array.isArray(data)) return data as Prestataire[];
    if (data && Array.isArray(data.data)) return data.data as Prestataire[];
    return [];
  }

  private mapToContact(prestataire: Prestataire): ContactInterface {
    return {
      id: String(prestataire.id),
      nom: prestataire.nom,
      prenom: prestataire.prenom,
      phone: prestataire.phone,
      ville: prestataire.ville,
      quartier: prestataire.quartier ?? undefined,
      type: prestataire.type ?? null,
      type_label: prestataire.type_label ?? undefined
    };
  }

  onSubmit(packing: PackingModel): void {
    this.loading = true;
    console.log('Packing à créer:', packing);
    
    // TODO: Appel API
    setTimeout(() => {
      this.loading = false;
      alert('Packing créé avec succès !');
    }, 1500);
  } 

  onCancel(): void {
    console.log('Annulation');
  }
}
