import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ProduitInterface, ProduitImage } from '@/models/produit.interface';

@Component({
  selector: 'app-produits-form',
  standalone: true,
  imports: [
    CommonModule,
    EditorModule,
    InputTextModule,
    FormsModule,
    FileUploadModule,
    ButtonModule,
    SelectModule,
    ToggleSwitchModule,
    RippleModule,
    ChipModule,
    FluidModule
  ],
  providers: [MessageService],
  templateUrl: './produits-form.html',
  styleUrl: './produits-form.scss',
  styles: `
    :host ::ng-deep .p-fileupload-header {
      display: none;
    }

    :host ::ng-deep .p-fileupload-file-list {
      display: none;
    }

    :host ::ng-deep .p-fileupload-content {
      height: 20rem;
    }
  `
})
export class ProduitsForm {
  @ViewChildren('buttonEl') buttonEl!: QueryList<ElementRef>;

  text: string = '';

  typeOptions = [
    'A_vendre',
    'A_acheter',
    'A_fabriquer',
    'Materielle',
    'Service'
  ];

  product: ProduitInterface = {
    nom: '',
    prix_usine: '',
    prix_achat: '',
    prix_vente: '',
    qte_stock: 0,
    cout: 0,
    code: '',
     statut: 'Draft',
    type: 'Sneakers',
    inStock: true,
    description: '',
    images: []
  };

  uploadedFiles: any[] = [];
  showRemove: boolean = false;

 
 

  onUpload(event: any) {
    for (let file of event.files) {
      const produitImage: ProduitImage = {
        name: file.name,
        imageURL: file.objectURL
      };
      this.product.images.push(produitImage);
    }
  }

  onImageMouseOver(file: ProduitImage) {
    this.buttonEl.toArray().forEach((el) => {
      if (el.nativeElement.id === file.name) {
        el.nativeElement.style.display = 'flex';
      }
    });
  }

  onImageMouseLeave(file: ProduitImage) {
    this.buttonEl.toArray().forEach((el) => {
      if (el.nativeElement.id === file.name) {
        el.nativeElement.style.display = 'none';
      }
    });
  }

  removeImage(event: any, file: ProduitImage) {
    event.stopPropagation();
    this.product.images = this.product.images.filter((i) => i !== file);
  }
}