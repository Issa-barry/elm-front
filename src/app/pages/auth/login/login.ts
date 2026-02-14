import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { LayoutService } from '@/layout/service/layout.service';
import { AppConfigurator } from '@/layout/components/app.configurator';
import { AuthService } from '@/services/auth/auth.service';
import { COUNTRIES } from '@/models/country.model';
 
@Component({
  selector: 'app-login',standalone: true,
    imports: [
      CommonModule,
        CheckboxModule,
        InputTextModule, 
        FormsModule,
        RouterModule,
        AppConfigurator,
        IconFieldModule,
        InputIconModule,
        ButtonModule,
        SelectModule,
         ReactiveFormsModule,
         MessageModule
    ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);
    layoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.layoutService.isDarkTheme());

    // Signaux pour gérer l'état
    isLoading = signal(false);
    showPassword = signal(false);
    errorMessage = signal<string | null>(null);
    fieldErrors = signal<Record<string, string[]>>({});

    // Code pays
    selectedCountry = COUNTRIES[0]; // Guinée par défaut
    countries = COUNTRIES;

    // Formulaire réactif
    loginForm: FormGroup = this.fb.group({
        phone: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        remember_me: [false]
    });

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