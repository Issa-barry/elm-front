import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';

export interface ProduitDataMobile {
  prixUsine: number;
  prixVente: number;
  nom: string;
}

@Component({
  selector: 'app-commande-mobile-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, SelectModule, InputNumberModule],
  templateUrl: './commande-mobile-form.html',
  styleUrls: ['./commande-mobile-form.scss'],
})
export class CommandeMobileForm {
  @Input() editMode = false;
  @Input() saving = false;
  @Input() form!: FormGroup;
  @Input() vehiculeOptions: { label: string; value: number }[] = [];
  @Input() produitOptions: { label: string; value: number }[] = [];
  @Input() produitData = new Map<number, ProduitDataMobile>();

  @Output() onSave = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();
  @Output() onAddLigne = new EventEmitter<void>();
  @Output() onRemoveLigne = new EventEmitter<number>();
  @Output() onProduitChange = new EventEmitter<{ i: number; id: number }>();

  get lignes(): FormArray {
    return this.form.get('lignes') as FormArray;
  }

  get totalDialog(): number {
    if (!this.form) return 0;
    return this.lignes.controls.reduce((sum, ctrl) => {
      const qte = ctrl.get('qte')?.value ?? 0;
      const pv = ctrl.get('prix_vente')?.value ?? 0;
      return sum + pv * qte;
    }, 0);
  }

  getTotalLigne(i: number): number {
    const ctrl = this.lignes.at(i);
    return (ctrl.get('prix_vente')?.value ?? 0) * (ctrl.get('qte')?.value ?? 0);
  }

  getPrixUsine(i: number): number {
    const pid = this.lignes.at(i).get('produit_id')?.value;
    return this.produitData.get(pid)?.prixUsine ?? 0;
  }

  isInvalid(name: string): boolean {
    const c = this.form?.get(name);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  isLigneInvalid(i: number, name: string): boolean {
    const c = this.lignes?.at(i)?.get(name);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
  }
}
