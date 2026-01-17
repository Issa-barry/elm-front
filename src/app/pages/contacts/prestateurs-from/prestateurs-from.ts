import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { RippleModule } from 'primeng/ripple';
import { ContactInterface } from '@/models/contacts/contact-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestateurs-from',
  standalone: true,
  imports: [
    CommonModule,
    Select,
    InputText,
    TextareaModule,
    FileUploadModule,
    InputGroupAddon,
    ButtonModule,
    InputGroupModule,
    RippleModule,
    FormsModule
  ],
  templateUrl: './prestateurs-from.html',
  styleUrl: './prestateurs-from.scss',
})
export class PrestateursFrom {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() initialData: ContactInterface | null = null;
  @Input() loading = false;
  
  @Output() submitForm = new EventEmitter<ContactInterface>();
  @Output() cancel = new EventEmitter<void>();

  submitted = false;
  isEditing = false; // Nouvel état pour gérer le mode édition
  model: ContactInterface = {};
  type_piece_identite: any[] = [];

  ngOnInit() {
    this.type_piece_identite = [
      { name: "Carte d'identité", code: 'CI' },
      { name: 'Passport', code: 'PASSPORT' },
      { name: 'Permis de conduire', code: 'PERMIS' }
    ];

    this.model = this.initialData ? { ...this.initialData } : {};
    
    // En mode création, toujours en édition
    if (this.mode === 'create') {
      this.isEditing = true;
    }
  }

  isValid(): boolean {
    return !!(
      this.model.nom?.trim() &&
      this.model.prenom?.trim() &&
      this.model.phone?.trim() &&
      this.model.ville?.trim() &&
      this.model.quartier?.trim()
    );
  }

  // Activer le mode édition
  enableEditing() {
    this.isEditing = true;
  }

  // Annuler les modifications et revenir en mode lecture
  cancelEditing() {
    this.isEditing = false;
    this.submitted = false;
    // Restaurer les données initiales
    this.model = this.initialData ? { ...this.initialData } : {};
  }

  onSubmit() {
    this.submitted = true;
    
    if (!this.isValid()) {
      return;
    }

    this.submitForm.emit({ ...this.model });
  }

  onCancel() {
    this.cancel.emit();
  }

  // Getter pour savoir si les champs sont désactivés
  get fieldsDisabled(): boolean {
    return this.mode === 'edit' && !this.isEditing || this.loading;
  }
}