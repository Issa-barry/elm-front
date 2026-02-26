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

import { ProprietaireService } from '@/services/proprietaires/proprietaire.service';
import { Proprietaire } from '@/models/vehicule.model';
import { COUNTRIES, Country } from '@/models/country.model';

@Component({
  selector: 'app-proprietaire-form',
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
  templateUrl: './proprietaire-form.html',
})
export class ProprietaireForm implements OnInit {
  /** Si défini → mode édition */
  @Input() proprietaire?: Proprietaire;

  get isEditMode(): boolean { return !!this.proprietaire; }

  form!: FormGroup;
  loading = false;
  submitted = false;
  phoneCountry = 'GN';
  phoneError: string | null = null;
  countries: Country[] = COUNTRIES;

  constructor(
    private fb: FormBuilder,
    private proprietaireService: ProprietaireService,
    private messageService: MessageService,
    public router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (this.proprietaire) {
      // Détecter le pays depuis le numéro existant
      const phone = this.proprietaire.phone ?? '';
      if (phone.startsWith('+')) {
        try {
          const parsed = parsePhoneNumber(phone);
          if (parsed?.country) this.phoneCountry = parsed.country;
        } catch { /* keep GN */ }
      }
      this.form.patchValue({
        prenom:   this.proprietaire.prenom,
        nom:      this.proprietaire.nom,
        phone:    this.proprietaire.phone,
        email:    this.proprietaire.email ?? '',
        ville:    this.proprietaire.ville ?? 'Conakry',
        quartier: this.proprietaire.quartier ?? '',
        is_active: this.proprietaire.is_active,
      });
    }
  }

  private buildForm(): void {
    this.form = this.fb.group({
      prenom:    ['', [Validators.required, Validators.maxLength(100)]],
      nom:       ['', [Validators.required, Validators.maxLength(100)]],
      phone:     ['', [Validators.required, Validators.maxLength(20)]],
      email:     ['', [Validators.email, Validators.maxLength(255)]],
      ville:     ['Conakry', [Validators.required, Validators.maxLength(100)]],
      quartier:  ['', [Validators.required, Validators.maxLength(100)]],
      is_active: [true],
    });
  }

  // ── Téléphone ──────────────────────────────────────────────────────────

  validatePhone(): boolean {
    const phone = this.form.get('phone')?.value?.trim();
    if (!phone) { this.phoneError = 'Téléphone obligatoire.'; return false; }
    try {
      if (!isValidPhoneNumber(phone, this.phoneCountry as CountryCode)) {
        this.phoneError = `Numéro invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }
      const parsed = parsePhoneNumber(phone, this.phoneCountry as CountryCode);
      if (parsed) {
        this.form.get('phone')?.setValue(parsed.formatInternational(), { emitEvent: false });
        this.phoneError = null;
        return true;
      }
      this.phoneError = 'Format invalide.'; return false;
    } catch { this.phoneError = 'Format invalide.'; return false; }
  }

  onPhoneInput(): void { if (this.submitted) this.validatePhone(); }
  onPhoneBlur(): void  { if (this.form.get('phone')?.value?.trim()) this.validatePhone(); }
  onCountryChange(): void { if (this.form.get('phone')?.value?.trim()) this.validatePhone(); }

  getCountryName(code: string): string {
    return this.countries.find(c => c.code === code)?.name ?? code;
  }

  // ── Helpers ────────────────────────────────────────────────────────────

  isInvalid(name: string): boolean {
    const c = this.form.get(name)!;
    return c.invalid && (c.dirty || c.touched);
  }

  // ── Soumission ─────────────────────────────────────────────────────────

  onSubmit(): void {
    this.submitted = true;
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    if (!this.validatePhone()) return;

    const v = this.form.value;
    const pays = this.getCountryName(this.phoneCountry);
    this.loading = true;

    const req$ = this.isEditMode
      ? this.proprietaireService.update(this.proprietaire!.id, {
          prenom: v.prenom, nom: v.nom, phone: v.phone,
          email: v.email || undefined, pays, ville: v.ville, quartier: v.quartier,
          is_active: v.is_active,
        })
      : this.proprietaireService.create({
          prenom: v.prenom, nom: v.nom, phone: v.phone,
          email: v.email || undefined, pays, ville: v.ville, quartier: v.quartier,
        });

    req$.subscribe({
      next: () => {
        this.loading = false;
        this.messageService.add({
          severity: 'success', summary: 'Succès',
          detail: this.isEditMode ? 'Propriétaire mis à jour.' : 'Propriétaire créé.',
          life: 3000,
        });
        setTimeout(() => this.router.navigate(['/vehicules/proprietaires']), 1500);
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 422 && err.error?.errors) {
          (Object.values(err.error.errors).flat() as string[]).forEach(m =>
            this.messageService.add({ severity: 'error', summary: 'Validation', detail: m, life: 5000 })
          );
          return;
        }
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.error?.message || 'Erreur inattendue.', life: 5000 });
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/vehicules/proprietaires']);
  }
}
