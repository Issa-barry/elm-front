import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { LayoutService } from '@/layout/service/layout.service';
import { AppConfigurator } from '@/layout/components/app.configurator';
import { AuthService } from '@/services/auth/auth.service';
import { COUNTRIES, type Country } from '@/models/country.model';
import { CountryCode, isValidPhoneNumber } from 'libphonenumber-js';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}
 
@Component({
  selector: 'app-login',standalone: true,
    imports: [
      CommonModule,
        CheckboxModule,
        InputTextModule, 
        FormsModule,
        RouterModule,
        AppConfigurator,
        ButtonModule,
        SelectModule,
         ReactiveFormsModule,
         MessageModule
    ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit, OnDestroy {
    private static readonly SELECTED_COUNTRY_STORAGE_KEY = 'elm.auth.selectedCountryCode';
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);
    private readonly isBrowser = typeof window !== 'undefined' && typeof navigator !== 'undefined';
    layoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.layoutService.isDarkTheme());

    // Signaux pour gérer l'état
    isLoading = signal(false);
    showPassword = signal(false);
    errorMessage = signal<string | null>(null);
    fieldErrors = signal<Record<string, string[]>>({});
    deferredInstallPrompt = signal<BeforeInstallPromptEvent | null>(null);
    isIosDevice = signal(false);
    isMobileDevice = signal(false);
    isStandaloneMode = signal(false);
    showIosInstructions = signal(false);
    showManualInstallInstructions = signal(false);
    installFeedback = signal<string | null>(null);
    isInstalling = signal(false);
    canInstallDirectly = computed(() => !!this.deferredInstallPrompt());
    showInstallCard = computed(() => !this.isStandaloneMode());

    private readonly onBeforeInstallPrompt = (event: Event): void => {
        event.preventDefault();
        this.deferredInstallPrompt.set(event as BeforeInstallPromptEvent);
    };

    private readonly onAppInstalled = (): void => {
        this.isStandaloneMode.set(true);
        this.deferredInstallPrompt.set(null);
        this.showIosInstructions.set(false);
        this.showManualInstallInstructions.set(false);
    };

    // Code pays
    selectedCountry = this.getPersistedCountry() ?? COUNTRIES[0];
    countries = COUNTRIES;

    // Formulaire réactif
    loginForm: FormGroup = this.fb.group({
        phone: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        remember_me: [false]
    });

    ngOnInit(): void {
        if (!this.isBrowser) {
            return;
        }

        this.updateInstallState();
        window.addEventListener('beforeinstallprompt', this.onBeforeInstallPrompt as EventListener);
        window.addEventListener('appinstalled', this.onAppInstalled);
    }

    ngOnDestroy(): void {
        if (!this.isBrowser) {
            return;
        }

        window.removeEventListener('beforeinstallprompt', this.onBeforeInstallPrompt as EventListener);
        window.removeEventListener('appinstalled', this.onAppInstalled);
    }

    async installApp(): Promise<'accepted' | 'dismissed' | 'unavailable' | 'error'> {
        const promptEvent = this.deferredInstallPrompt();
        if (!promptEvent) {
            return 'unavailable';
        }

        this.isInstalling.set(true);
        try {
            await promptEvent.prompt();
            const choice = await promptEvent.userChoice;
            this.deferredInstallPrompt.set(null);
            return choice.outcome === 'accepted' ? 'accepted' : 'dismissed';
        } catch {
            this.deferredInstallPrompt.set(null);
            return 'error';
        } finally {
            this.isInstalling.set(false);
        }
    }

    async handleInstallClick(): Promise<void> {
        this.installFeedback.set(null);

        if (this.isStandaloneMode()) {
            this.installFeedback.set("L'application est deja installee sur cet appareil.");
            return;
        }

        if (this.canInstallDirectly()) {
            const result = await this.installApp();
            if (result === 'accepted') {
                this.installFeedback.set("Installation lancee.");
                return;
            }
            if (result === 'dismissed') {
                this.installFeedback.set('Installation annulee. Vous pouvez reessayer.');
            } else {
                this.installFeedback.set(
                    "Installation directe indisponible. Utilisez les etapes ci-dessous."
                );
            }

            if (this.isIosDevice()) {
                this.showIosInstructions.set(true);
                this.showManualInstallInstructions.set(false);
                return;
            }

            this.showManualInstallInstructions.set(true);
            this.showIosInstructions.set(false);
            return;
        }

        if (this.isIosDevice()) {
            this.showIosInstructions.set(true);
            this.showManualInstallInstructions.set(false);
            this.installFeedback.set("Safari ne permet pas d'installer en un clic.");
            return;
        }

        this.showManualInstallInstructions.set(true);
        this.showIosInstructions.set(false);

        const host = this.isBrowser ? window.location.hostname : '';
        const isLocalhost = host === 'localhost' || host === '127.0.0.1';
        if (isLocalhost) {
            this.installFeedback.set(
                "En local (localhost), l'installation directe est souvent desactivee. Testez en build production sur HTTPS."
            );
            return;
        }

        this.installFeedback.set(
            "Votre navigateur ne propose pas l'installation directe sur cette page."
        );
    }

    private updateInstallState(): void {
        const standaloneMedia = window.matchMedia?.('(display-mode: standalone)').matches ?? false;
        const iosStandalone = (navigator as Navigator & { standalone?: boolean }).standalone === true;
        const userAgent = navigator.userAgent.toLowerCase();

        this.isStandaloneMode.set(standaloneMedia || iosStandalone);
        this.isIosDevice.set(/iphone|ipad|ipod/.test(userAgent));
        this.isMobileDevice.set(/android|iphone|ipad|ipod|mobile/.test(userAgent));
    }

    /**
     * Soumettre le formulaire de connexion
     */
    onSubmit(): void {
        // Reinitialiser les erreurs
        this.errorMessage.set(null);
        this.fieldErrors.set({});

        // Verifier la validite du formulaire
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        // Valider la correspondance pays / numero puis normaliser au format international
        const rawPhone: string = this.loginForm.value.phone ?? '';
        const internationalPhone = this.resolveInternationalPhoneFromInput(rawPhone);
        if (!internationalPhone) {
            return;
        }

        // Demarrer le chargement
        this.isLoading.set(true);

        const credentials = {
            ...this.loginForm.value,
            phone: internationalPhone
        };

        // Appeler le service d'authentification
        this.authService.login(credentials).subscribe({
            next: (response) => {
                this.isLoading.set(false);

                // Rediriger vers le dashboard ou l'URL de retour
                const returnUrl = this.router.routerState.snapshot.root.queryParams['returnUrl'] || '/';
                this.router.navigate([returnUrl]);
            },
            error: (error) => {
                this.isLoading.set(false);

                // Gerer les erreurs de validation (422)
                if (error.status === 422 && error.error?.errors) {
                    this.fieldErrors.set(error.error.errors);
                }
                // Gerer les autres erreurs
                else if (error.error?.message) {
                    this.errorMessage.set(error.error.message);
                } else {
                    this.errorMessage.set('Une erreur est survenue lors de la connexion');
                }
            }
        });
    }

    onCountryChange(): void {
        this.persistSelectedCountry();

        const rawPhone: string = this.loginForm.value.phone ?? '';
        if (!rawPhone.trim()) {
            this.setFieldError('phone', null);
            return;
        }

        this.resolveInternationalPhoneFromInput(rawPhone);
    }

    onPhoneInput(): void {
        if (this.hasFieldError('phone')) {
            this.setFieldError('phone', null);
        }
    }

    onPhoneBlur(): void {
        const rawPhone: string = this.loginForm.value.phone ?? '';
        if (!rawPhone.trim()) {
            this.setFieldError('phone', null);
            return;
        }

        this.resolveInternationalPhoneFromInput(rawPhone);
    }

    /**
     * Obtenir l'erreur d'un champ specifique
     */
    getFieldError(fieldName: string): string | null {
        const errors = this.fieldErrors();
        return errors[fieldName] ? errors[fieldName][0] : null;
    }

    /**
     * Vérifier si un champ a une erreur
     */
    hasFieldError(fieldName: string): boolean {
        return !!this.getFieldError(fieldName);
    }

    /**
     * Vérifier si un champ du formulaire est invalide et touché
     */
    isFieldInvalid(fieldName: string): boolean {
        const field = this.loginForm.get(fieldName);
        return !!(field && field.invalid && (field.dirty || field.touched));
    }

    private resolveInternationalPhoneFromInput(rawPhone: string): string | null {
        const selectedDialCode = this.selectedCountry.dialCode;
        const selectedCountryName = this.selectedCountry.name;
        const selectedDialDigits = selectedDialCode.replace('+', '');

        let sanitized = rawPhone.trim().replace(/[^\d+]/g, '');
        if (sanitized.startsWith('00')) {
            sanitized = `+${sanitized.slice(2)}`;
        }

        if (!sanitized) {
            this.setFieldError('phone', 'Le numero de telephone est obligatoire');
            return null;
        }

        if (sanitized.startsWith('+')) {
            if (!sanitized.startsWith(selectedDialCode)) {
                const detectedCountry = this.findCountryByInternationalPrefix(sanitized);

                if (detectedCountry && detectedCountry.code !== this.selectedCountry.code) {
                    this.selectedCountry = detectedCountry;
                    this.persistSelectedCountry();
                    return this.resolveInternationalPhoneFromInput(sanitized);
                }

                const mismatchMessage = detectedCountry
                    ? `Le numero commence par ${detectedCountry.dialCode} (${detectedCountry.name}) mais le pays selectionne est ${selectedCountryName} (${selectedDialCode}).`
                    : `Le numero doit commencer par ${selectedDialCode} pour ${selectedCountryName}.`;

                this.setFieldError('phone', mismatchMessage);
                return null;
            }

            if (!this.isPhoneValidForSelectedCountry(sanitized)) {
                this.setFieldError('phone', `Numero invalide pour ${selectedCountryName}.`);
                return null;
            }

            this.setFieldError('phone', null);
            return sanitized;
        }

        const localDigits = sanitized.replace(/\D/g, '');
        const normalizedLocalDigits = localDigits.startsWith('0') ? localDigits.slice(1) : localDigits;

        if (!normalizedLocalDigits) {
            this.setFieldError('phone', 'Le numero de telephone est obligatoire');
            return null;
        }

        const detectedWithoutPlus = this.findCountryFromLocalPrefix(normalizedLocalDigits);
        if (detectedWithoutPlus) {
            this.selectedCountry = detectedWithoutPlus;
            this.persistSelectedCountry();
            return this.resolveInternationalPhoneFromInput(`+${normalizedLocalDigits}`);
        }

        const internationalPhone = normalizedLocalDigits.startsWith(selectedDialDigits)
            ? `+${normalizedLocalDigits}`
            : `${selectedDialCode}${normalizedLocalDigits}`;

        if (!this.isPhoneValidForSelectedCountry(internationalPhone)) {
            this.setFieldError('phone', `Numero invalide pour ${selectedCountryName}.`);
            return null;
        }

        this.setFieldError('phone', null);
        return internationalPhone;
    }

    private isPhoneValidForSelectedCountry(internationalPhone: string): boolean {
        try {
            return isValidPhoneNumber(internationalPhone, this.selectedCountry.code as CountryCode);
        } catch {
            return false;
        }
    }

    private findCountryFromLocalPrefix(localDigits: string): Country | undefined {
        return this.countries.find((country) => {
            if (country.code === this.selectedCountry.code) {
                return false;
            }
            const dialDigits = country.dialCode.replace('+', '');
            return localDigits.startsWith(dialDigits);
        });
    }

    private findCountryByInternationalPrefix(internationalPhone: string): Country | undefined {
        const sortedCountries = [...this.countries].sort(
            (left, right) => right.dialCode.length - left.dialCode.length
        );
        return sortedCountries.find((country) => internationalPhone.startsWith(country.dialCode));
    }

    private getPersistedCountry(): Country | null {
        if (!this.isBrowser) {
            return null;
        }

        const persistedCode = window.localStorage.getItem(Login.SELECTED_COUNTRY_STORAGE_KEY);
        if (!persistedCode) {
            return null;
        }

        return COUNTRIES.find((country) => country.code === persistedCode) ?? null;
    }

    private persistSelectedCountry(): void {
        if (!this.isBrowser || !this.selectedCountry?.code) {
            return;
        }

        window.localStorage.setItem(Login.SELECTED_COUNTRY_STORAGE_KEY, this.selectedCountry.code);
    }

    private setFieldError(fieldName: string, message: string | null): void {
        const nextErrors = { ...this.fieldErrors() };
        if (!message) {
            delete nextErrors[fieldName];
        } else {
            nextErrors[fieldName] = [message];
        }
        this.fieldErrors.set(nextErrors);
    }
}

