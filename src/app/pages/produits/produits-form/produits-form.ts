import { Component } from '@angular/core';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produits-form',
    standalone: true,
    imports: [CommonModule, Select, InputText, TextareaModule, FileUploadModule, InputGroupAddon, ButtonModule, InputGroupModule, RippleModule],
  providers: [MessageService],
  templateUrl: './produits-form.html',
  styleUrl: './produits-form.scss',
})
export class ProduitsForm {
    countries: any[] = [];

    ngOnInit() {
        this.countries = [
            { name: 'A vendre', code: 'AU' },
            { name: 'A Acheter', code: 'BR' },
            { name: 'Service', code: 'CN' },
            { name: 'Materiel', code: 'EG' },
            { name: 'All', code: 'FR' },
        ];
    }
}
