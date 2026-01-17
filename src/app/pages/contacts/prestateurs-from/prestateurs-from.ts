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
  model: ContactInterface = {};
  type_piece_identite: any[] = [];

  ngOnInit() {
    this.type_piece_identite = [
      { name: "Carte d'identité", code: 'CI' },
      { name: 'Passport', code: 'PASSPORT' },
      { name: 'Permis de conduire', code: 'PERMIS' }
    ];

    this.model = this.initialData ? { ...this.initialData } : {};
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
}