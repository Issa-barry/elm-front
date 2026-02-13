import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
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
import { InputNumberModule } from 'primeng/inputnumber';

import {
  Produit,
  CreateProduitDto, 
  PRODUIT_TYPE_LABELS,
  PRODUIT_STATUT_LABELS,
  ProduitType,
  ProduitStatut
} from '@/models/produit.model';

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
    FluidModule,
    InputNumberModule
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
export class ProduitsForm implements OnInit, OnChanges {
  @ViewChildren('buttonEl') buttonEl!: QueryList<ElementRef>;

  @Input() mode: 'create' | 'edit' = 'create';
  @Input() initialData: Produit | null = null;
  @Input() loading = false;

  @Output() submitForm = new EventEmitter<CreateProduitDto>();
  @Output() cancel = new EventEmitter<void>();

  submitted = false;
  isEditing = false;

  // Options de type avec labels franÃ§ais
  typeOptions: { label: string; value: ProduitType }[] = [
    { label: PRODUIT_TYPE_LABELS.materiel, value: 'materiel' },
    { label: PRODUIT_TYPE_LABELS.service, value: 'service' },
    { label: PRODUIT_TYPE_LABELS.fabricable, value: 'fabricable' },
    { label: PRODUIT_TYPE_LABELS.achat_vente, value: 'achat_vente' }
  ];

  // Options de statut avec labels franÃ§ais
  statutOptions: { label: string; value: ProduitStatut }[] = [
    { label: PRODUIT_STATUT_LABELS.brouillon, value: 'brouillon' },
    { label: PRODUIT_STATUT_LABELS.actif, value: 'actif' },
    { label: PRODUIT_STATUT_LABELS.inactif, value: 'inactif' },
    { label: PRODUIT_STATUT_LABELS.rupture_stock, value: 'rupture_stock' }
  ];

  // Produit est une class -> on instancie
  product: Produit = new Produit({
    nom: '',
    code: '',
    prix_usine: null,
    prix_achat: null,
    prix_vente: null,
    qte_stock: 0,
    cout: null,
    statut: 'actif',
    type: 'materiel',
    in_stock: true,
    is_archived: false,
    description: null,
    image_url: null
  });

  selectedImageFile: File | null = null;
  imagePreview: string | null = null;

  ngOnInit(): void {
    // âœ… Charger les donnÃ©es initiales si Ã©dition
    if (this.initialData) {
      this.product = new Produit(this.initialData); // âœ… garde les mÃ©thodes
      this.imagePreview = this.initialData.image_url;
    }

    // âœ… En crÃ©ation, toujours Ã©ditable
    if (this.mode === 'create') {
      this.isEditing = true;
    }
  }

  // =========================
  // VISIBILITÃ‰ / OBLIGATION
  // =========================
  // RÃ¨gles mÃ©tier:
  // - materiel     â†’ prix_achat obligatoire
  // - service      -> prix_achat ou prix_vente (au moins un), qte_stock = 0
  // - fabricable   â†’ prix_usine + prix_vente obligatoires
  // - achat_vente  â†’ prix_achat + prix_vente obligatoires

  isPrixUsineVisible(): boolean {
    return this.product.type === 'fabricable';
  }
  isPrixUsineRequired(): boolean {
    return this.product.type === 'fabricable';
  }

  isPrixVenteRequired(): boolean {
    // Obligatoire pour: fabricable, achat_vente
    return ['fabricable', 'achat_vente'].includes(this.product.type);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialData']?.currentValue) {
      this.product = new Produit(changes['initialData'].currentValue);
      this.imagePreview = changes['initialData'].currentValue.image_url ?? null;
    }

    if (changes['mode']?.currentValue === 'create') {
      this.isEditing = true;
    }
  }

  isPrixAchatRequired(): boolean {
    // Obligatoire pour: materiel, achat_vente
    return ['materiel', 'achat_vente'].includes(this.product.type);
  }

  // Pour le type "service", qte_stock doit Ãªtre 0 et dÃ©sactivÃ©
  isQteStockDisabled(): boolean {
    return this.product.type === 'service' || this.fieldsDisabled;
  }

  // =========================
  // HELPERS NUMÃ‰RIQUES
  // =========================
  private isValidPrice(value: number | null | undefined): boolean {
    return typeof value === 'number' && value >= 0;
  }

  isPriceMissing(value: number | null | undefined): boolean {
    return value === null || value === undefined;
  }

  private hasServicePrice(): boolean {
    return this.isValidPrice(this.product.prix_achat) || this.isValidPrice(this.product.prix_vente);
  }

  showServicePriceError(): boolean {
    return this.submitted && this.isEditing && this.product.type === 'service' && !this.hasServicePrice();
  }

  // Switch statut (actif/inactif)
  get isActifSwitch(): boolean {
    return this.product.statut === 'actif';
  }

  onStatutToggleChange(value: boolean): void {
    this.product.statut = value ? 'actif' : 'inactif';
  }

  // =========================
  // TYPE CHANGE
  // =========================
  onTypeChange(): void {
    // RÃ©initialiser les prix non applicables
    if (!this.isPrixUsineVisible()) this.product.prix_usine = null;

    // Pour le type "service", forcer qte_stock Ã  0
    if (this.product.type === 'service') {
      this.product.qte_stock = 0;
    }
  }

  // =========================
  // VALIDATION
  // =========================
  isValid(): boolean {
    // Champs obligatoires de base
    if (!this.product.nom?.trim() || !this.product.type) return false;

    // Validation des prix selon le type
    if (this.isPrixUsineRequired() && !this.isValidPrice(this.product.prix_usine)) return false;
    if (this.isPrixVenteRequired() && !this.isValidPrice(this.product.prix_vente)) return false;
    if (this.isPrixAchatRequired() && !this.isValidPrice(this.product.prix_achat)) return false;

    // Service: au moins un prix (achat ou vente)
    if (this.product.type === 'service' && !this.hasServicePrice()) return false;

    return true;
  }

  // =========================
  // EDIT MODE
  // =========================
  enableEditing(): void {
    this.isEditing = true;
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.submitted = false;
    this.selectedImageFile = null;

    if (this.initialData) {
      this.product = new Produit(this.initialData); // âœ… pas de spread
      this.imagePreview = this.initialData.image_url;
    } else {
      this.resetForm();
    }
  }

  // =========================
  // IMAGE UPLOAD
  // =========================
  onUpload(event: any): void {
    if (event?.files?.length) {
      const file: File = event.files[0];
      this.selectedImageFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => (this.imagePreview = e.target.result);
      reader.readAsDataURL(file);
    }
  }

  removeImage(event: any): void {
    event.stopPropagation();
    this.selectedImageFile = null;
    this.imagePreview = null;
    this.product.image_url = null;
  }

  // =========================
  // SUBMIT
  // =========================
  onSubmit(): void {
    this.submitted = true;

    if (!this.isValid()) return;

    const dto: CreateProduitDto = {
      nom: this.product.nom.trim(),
      type: this.product.type,
      qte_stock: this.product.qte_stock,
      description: this.product.description?.trim() || undefined,
      cout: this.product.cout ?? undefined
    };
    // Statut piloté par le switch (actif/inactif)
    dto.statut = this.product.statut;

    // Prix seulement si dÃ©finis
    if (this.product.prix_usine !== null) dto.prix_usine = this.product.prix_usine;
    if (this.product.prix_vente !== null) dto.prix_vente = this.product.prix_vente;
    if (this.product.prix_achat !== null) dto.prix_achat = this.product.prix_achat;

    if (this.selectedImageFile) dto.image = this.selectedImageFile;

    console.log('DTO:', dto);
    

    this.submitForm.emit(dto);
  }

  // =========================
  // CANCEL
  // =========================
  onCancel(): void {
    this.cancel.emit();
  }

  // =========================
  // UI STATE
  // =========================
  get fieldsDisabled(): boolean {
    return (this.mode === 'edit' && !this.isEditing) || this.loading;
  }

  getPrixHelperText(): string {
    switch (this.product.type) {
      case 'materiel':
        return "Prix d'achat obligatoire";
      case 'service':
        return 'Pour un service, renseignez au moins un prix : achat ou vente';
      case 'fabricable':
        return 'Prix usine et prix de vente obligatoires';
      case 'achat_vente':
        return "Prix d'achat et prix de vente obligatoires";
      default:
        return 'SÃ©lectionnez un type de produit';
    }
  }

  // =========================
  // RESET
  // =========================
  public resetForm(): void {
    this.submitted = false;
    this.selectedImageFile = null;
    this.imagePreview = null;

    this.product = new Produit({
      nom: '',
      code: '',
      prix_usine: null,
      prix_achat: null,
      prix_vente: null,
      qte_stock: 0,
      cout: null,
      statut: 'actif',
      type: 'materiel',
      in_stock: true,
      is_archived: false,
      description: null,
      image_url: null
    });
  }
}




