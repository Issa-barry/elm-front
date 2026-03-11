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
import { RippleModule } from 'primeng/ripple';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js';

import { LivreurService } from '@/services/livreurs/livreur.service';
import { Livreur } from '@/models/vehicule.model';
import { COUNTRIES, Country, DEFAULT_COUNTRY_CODE, getCountryByCode } from '@/models/country.model';

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
    RippleModule,
  ],
  providers: [MessageService],
  templateUrl: './livreur-form.html',
  styleUrl: './livreur-form.scss',
})
export class LivreurForm implements OnInit {
  @Input() livreur?: Livreur;

  get isEditMode(): boolean {
    return !!this.livreur;
  }

  form!: FormGroup;
  loading = false;
  submitted = false;
  phoneCountry = DEFAULT_COUNTRY_CODE;
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
    const phoneControl = this.form.get('phone');
    const rawPhone = phoneControl?.value?.trim();
    if (!rawPhone) {
      this.phoneError = 'Telephone obligatoire.';
      return false;
    }

    const selectedCountry = this.getCountry(this.phoneCountry);
    if (!selectedCountry) {
      this.phoneError = 'Pays invalide.';
      return false;
    }

    const normalizedPhone = this.toPhoneCandidate(rawPhone);
    if (!normalizedPhone) {
      this.phoneError = 'Format invalide.';
      return false;
    }

    if (normalizedPhone.startsWith('+') && !normalizedPhone.startsWith(selectedCountry.dialCode)) {
      this.phoneError = `Le numero doit commencer par ${selectedCountry.dialCode} pour ${selectedCountry.name}.`;
      return false;
    }

    const phoneToParse = normalizedPhone.startsWith('+')
      ? normalizedPhone
      : `${selectedCountry.dialCode}${normalizedPhone}`;

    try {
      const parsed = parsePhoneNumber(phoneToParse, this.phoneCountry as CountryCode);
      if (!parsed || !parsed.isValid()) {
        this.phoneError = `Numero invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }

      if (parsed.country && parsed.country !== this.phoneCountry) {
        const parsedDial = `+${parsed.countryCallingCode}`;
        this.phoneError = `Le prefixe ${parsedDial} ne correspond pas au pays ${selectedCountry.name}.`;
        return false;
      }

      phoneControl?.setValue(parsed.formatInternational(), { emitEvent: false });
      this.phoneError = null;
      return true;
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
    const phoneControl = this.form.get('phone');
    const rawPhone = phoneControl?.value?.trim();
    if (!rawPhone) {
      this.phoneError = null;
      return;
    }

    const selectedCountry = this.getCountry(this.phoneCountry);
    if (!selectedCountry) return;

    const normalizedPhone = this.toPhoneCandidate(rawPhone);
    if (!normalizedPhone) {
      this.phoneError = 'Format invalide.';
      return;
    }

    if (normalizedPhone.startsWith('+')) {
      try {
        const parsed = parsePhoneNumber(normalizedPhone);
        if (parsed?.nationalNumber) {
          phoneControl?.setValue(`${selectedCountry.dialCode} ${parsed.nationalNumber}`, { emitEvent: false });
        }
      } catch {
        // Validation below will show a precise message if still invalid.
      }
    } else {
      phoneControl?.setValue(`${selectedCountry.dialCode} ${normalizedPhone}`, { emitEvent: false });
    }

    this.validatePhone();
  }

  getCountryName(code: string): string {
    return this.getCountry(code)?.name ?? code;
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
    this.phoneCountry = DEFAULT_COUNTRY_CODE;
    const safePhone = this.toPhoneCandidate(phone ?? '');
    if (!safePhone.startsWith('+')) return;

    try {
      const parsed = parsePhoneNumber(safePhone);
      if (parsed?.country) this.phoneCountry = parsed.country;
    } catch {
      // Keep default country
    }
  }

  private toPhoneCandidate(rawPhone: string): string {
    const trimmed = rawPhone.trim();
    if (!trimmed) return '';

    const hasPlus = trimmed.startsWith('+');
    const digits = trimmed.replace(/\D/g, '');
    if (!digits) return '';

    return hasPlus ? `+${digits}` : digits;
  }

  private getCountry(code: string): Country | undefined {
    return getCountryByCode(code) ?? this.countries.find((c) => c.code === code);
  }
}
