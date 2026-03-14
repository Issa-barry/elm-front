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
import { COUNTRIES } from '@/models/country.model';

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
    private readonly COUNTRY_STORAGE_KEY = 'login_country_code';
    selectedCountry = COUNTRIES[0]; // Guinée par défaut
    countries = COUNTRIES;

    onCountryChange(): void {
        if (this.isBrowser) {
            localStorage.setItem(this.COUNTRY_STORAGE_KEY, this.selectedCountry.code);
        }
    }

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

        const savedCode = localStorage.getItem(this.COUNTRY_STORAGE_KEY);
        if (savedCode) {
            const found = COUNTRIES.find(c => c.code === savedCode);
            if (found) {
                this.selectedCountry = found;
            }
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
        // Réinitialiser les erreurs
        this.errorMessage.set(null);
        this.fieldErrors.set({});

        // Vérifier la validité du formulaire
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        // Démarrer le chargement
        this.isLoading.set(true);

        // Construire les credentials avec le code pays + téléphone
        const credentials = {
            ...this.loginForm.value,
            phone: this.selectedCountry.dialCode + this.loginForm.value.phone
        };
console.log(credentials);

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

                // Gérer les erreurs de validation (422)
                if (error.status === 422 && error.error?.errors) {
                    this.fieldErrors.set(error.error.errors);
                } 
                // Gérer les autres erreurs
                else if (error.error?.message) {
                    this.errorMessage.set(error.error.message);
                } else {
                    this.errorMessage.set('Une erreur est survenue lors de la connexion');
                }
            }
        });
    }

    /**
     * Obtenir l'erreur d'un champ spécifique
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
}
