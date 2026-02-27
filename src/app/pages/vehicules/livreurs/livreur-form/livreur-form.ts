import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { parsePhoneNumber, CountryCode, isValidPhoneNumber } from 'libphonenumber-js';

import { LivreurService } from '@/services/livreurs/livreur.service';
import { Livreur } from '@/models/vehicule.model';
import { COUNTRIES, Country } from '@/models/country.model';

@Component({
  selector: 'app-livreur-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    ToastModule,
    ToggleSwitchModule,
  ],
  providers: [MessageService],
  templateUrl: './livreur-form.html',
})
export class LivreurForm implements OnInit {
  @Input() livreur?: Livreur;

  get isEditMode(): boolean {
    return !!this.livreur;
  }

  form!: FormGroup;
  loading = false;
  submitted = false;
  phoneCountry = 'GN';
  phoneError: string | null = null;
  countries: Country[] = COUNTRIES;

  constructor(
    private fb: FormBuilder,
    private livreurService: LivreurService,
    private messageService: MessageService,
    public router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (this.livreur) {
      this.applyLivreurToForm(this.livreur);
    }
  }

  private buildForm(): void {
    this.form = this.fb.group({
      prenom: ['', [Validators.required, Validators.maxLength(100)]],
      nom: ['', [Validators.required, Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      is_active: [true],
    });
  }

  validatePhone(): boolean {
    const phone = this.form.get('phone')?.value?.trim();
    if (!phone) {
      this.phoneError = 'Telephone obligatoire.';
      return false;
    }

    try {
      if (!isValidPhoneNumber(phone, this.phoneCountry as CountryCode)) {
        this.phoneError = `Numero invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }

      const parsed = parsePhoneNumber(phone, this.phoneCountry as CountryCode);
      if (parsed) {
        this.form.get('phone')?.setValue(parsed.formatInternational(), { emitEvent: false });
        this.phoneError = null;
        return true;
      }

      this.phoneError = 'Format invalide.';
      return false;
    } catch {
      this.phoneError = 'Format invalide.';
      return false;
    }
  }

  onPhoneInput(): void {
    if (this.submitted) this.validatePhone();
  }

  onPhoneBlur(): void {
    if (this.form.get('phone')?.value?.trim()) this.validatePhone();
  }

  onCountryChange(): void {
    if (this.form.get('phone')?.value?.trim()) this.validatePhone();
  }

  getCountryName(code: string): string {
    return this.countries.find((c) => c.code === code)?.name ?? code;
  }

  isInvalid(name: string): boolean {
    const c = this.form.get(name)!;
    return c.invalid && (c.dirty || c.touched);
  }

  onSubmit(): void {
    this.submitted = true;
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    if (!this.validatePhone()) return;

    const v = this.form.value;
    this.loading = true;

    const req$ = this.isEditMode
      ? this.livreurService.update(this.livreur!.id, {
          prenom: v.prenom,
          nom: v.nom,
          phone: v.phone,
          is_active: v.is_active,
        })
      : this.livreurService.create({
          prenom: v.prenom,
          nom: v.nom,
          phone: v.phone,
        });

    req$.subscribe({
      next: () => {
        if (this.isEditMode && this.livreur) {
          this.reloadEditedLivreur(this.livreur.id);
          return;
        }

        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: 'Livreur cree.',
          life: 3000,
        });
        setTimeout(() => this.router.navigate(['/vehicules/livreurs']), 1500);
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 422 && err.error?.errors) {
          (Object.values(err.error.errors).flat() as string[]).forEach((m) =>
            this.messageService.add({ severity: 'error', summary: 'Validation', detail: m, life: 5000 }),
          );
          return;
        }

        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err.error?.message || 'Erreur inattendue.',
          life: 5000,
        });
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/vehicules/livreurs']);
  }

  private reloadEditedLivreur(id: number): void {
    this.livreurService.getOne(id).subscribe({
      next: (resp) => {
        this.livreur = resp.data;
        this.applyLivreurToForm(resp.data);
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.loading = false;

        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: 'Livreur mis a jour.',
          life: 3000,
        });
      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: 'warn',
          summary: 'Mise a jour enregistree',
          detail: 'Le livreur est modifie mais le rechargement a echoue.',
          life: 5000,
        });
      },
    });
  }

  private applyLivreurToForm(livreur: Livreur): void {
    this.detectPhoneCountry(livreur.phone);
    this.form.patchValue({
      prenom: livreur.prenom,
      nom: livreur.nom,
      phone: livreur.phone,
      is_active: livreur.is_active,
    });
  }

  private detectPhoneCountry(phone?: string | null): void {
    this.phoneCountry = 'GN';
    const safePhone = phone ?? '';
    if (!safePhone.startsWith('+')) return;

    try {
      const parsed = parsePhoneNumber(safePhone);
      if (parsed?.country) this.phoneCountry = parsed.country;
    } catch {
      // Keep default country
    }
  }
}
