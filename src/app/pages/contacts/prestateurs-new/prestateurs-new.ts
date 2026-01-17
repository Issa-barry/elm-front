import { Component } from '@angular/core';
import { PrestateursFrom } from '../prestateurs-from/prestateurs-from';
import { ContactInterface } from '@/models/contacts/contact-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestateurs-new',
  standalone: true,
  imports: [CommonModule, PrestateursFrom],
  templateUrl: './prestateurs-new.html',
  styleUrl: './prestateurs-new.scss',
})
export class PrestateursNew {
  loading = false;

  onSubmit(data: ContactInterface) {
    this.loading = true;
    
    // Simulation d'appel API
    console.log('Données à enregistrer:', data);
    
    // Exemple avec un service
    // this.prestateurService.create(data).subscribe({
    //   next: (response) => {
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Succès',
    //       detail: 'Prestataire créé avec succès'
    //     });
    //     this.router.navigate(['/prestateurs']);
    //   },
    //   error: (error) => {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Erreur',
    //       detail: 'Erreur lors de la création'
    //     });
    //     this.loading = false;
    //   },
    //   complete: () => {
    //     this.loading = false;
    //   }
    // });
    
    // Simulation
    setTimeout(() => {
      this.loading = false;
      alert('Prestataire créé !');
    }, 2000);
  }
}