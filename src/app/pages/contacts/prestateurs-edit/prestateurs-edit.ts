import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrestateursFrom } from '../prestateurs-from/prestateurs-from';
import { ContactInterface } from '@/models/contacts/contact-interface';

@Component({
  selector: 'app-prestateurs-edit',
  standalone: true,
  imports: [CommonModule, PrestateursFrom],
  templateUrl: './prestateurs-edit.html',
  styleUrl: './prestateurs-edit.scss',
})
export class PrestateursEdit implements OnInit {
  loading = false;
  prestateurId: string | null = null;
  prestateursData: ContactInterface | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.prestateurId = this.route.snapshot.paramMap.get('id');
    
    if (this.prestateurId) {
      this.loadPrestataire(this.prestateurId);
    }
  }

  loadPrestataire(id: string) {
    this.loading = true;
    
    // Simulation - Remplacer par ton service
    // this.prestateurService.getById(id).subscribe({
    //   next: (data) => {
    //     this.prestateursData = data;
    //     this.loading = false;
    //   },
    //   error: (error) => {
    //     console.error('Erreur:', error);
    //     this.loading = false;
    //   }
    // });

    // Données de test
    setTimeout(() => {
      this.prestateursData = {
        id: id,
        nom: 'Diallo',
        prenom: 'Mamadou',
        phone: '+224 622 00 00 00',
        ville: 'Conakry',
        quartier: 'Kaloum'
      };
      this.loading = false;
    }, 1000);
  }

  onSubmit(data: ContactInterface) {
    this.loading = true;
    
    console.log('Données à mettre à jour:', data);
    
    // Simulation d'appel API
    // this.prestateurService.update(this.prestateurId!, data).subscribe({
    //   next: (response) => {
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Succès',
    //       detail: 'Prestataire modifié avec succès'
    //     });
    //     this.router.navigate(['/prestateurs']);
    //   },
    //   error: (error) => {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Erreur',
    //       detail: 'Erreur lors de la modification'
    //     });
    //     this.loading = false;
    //   }
    // });

    setTimeout(() => {
      this.loading = false;
      alert('Prestataire modifié !');
      // this.router.navigate(['/prestateurs']);
    }, 2000);
  }

  onCancel() {
    this.router.navigate(['/prestateurs']);
  }
}