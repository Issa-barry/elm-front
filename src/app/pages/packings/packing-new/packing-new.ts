import { Component } from '@angular/core';
import { PackingFrom } from '../packing-from/packing-from';
import { ContactInterface } from '@/models/contacts/contact-interface';
import { PackingModel } from '@/models/packing-model';

@Component({
  selector: 'app-packing-new',
  standalone:true,
  imports: [PackingFrom],
  templateUrl: './packing-new.html',
  styleUrl: './packing-new.scss',
})
export class PackingNew {
  contacts: ContactInterface[] = [
    { 
      id: '1', 
      nom: 'Diallo', 
      prenom: 'Mamadou', 
      phone: '+224 621 23 45 67',
      ville: 'Conakry',
      quartier: 'Kaloum'
    }
  ];

  loading = false;

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