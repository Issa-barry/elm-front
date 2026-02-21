import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { AccordionModule } from 'primeng/accordion';
import { DatePicker } from 'primeng/datepicker';
import { StepperModule } from 'primeng/stepper';
import { parsePhoneNumber, CountryCode, isValidPhoneNumber } from 'libphonenumber-js';
import { User, UserType, PieceType, PIECE_TYPE_LABELS, Civilite, CIVILITE_LABELS } from '@/models/user.model';
import { COUNTRIES } from '@/models/country.model';
import { RoleService } from '@/services/role/role.service';

export interface UserFormData {
  nom?: string;
  prenom?: string;
  phone?: string;
  email?: string | null;
  pays?: string;
  code_pays?: string;
  code_phone_pays?: string;
  ville?: string;
  quartier?: string;
  password?: string;
  password_confirmation?: string;
  type?: UserType;
  role?: string;
  reference?: string;
  civilite?: Civilite | null;
  date_naissance?: string | null;   // format YYYY-MM-DD envoyÃ© au backend
  // PiÃ¨ce d'identitÃ© (optionnel, mais tous requis si piece_type est renseignÃ©)
  piece_type?: PieceType;
  piece_numero?: string;
  piece_delivree_le?: string;
  piece_expire_le?: string;
  piece_pays?: string;
}

@Component({
  selector: 'app-utilisateurs-form',
  standalone: true,
  templateUrl: './utilisateurs-form.html',
  styleUrl: './utilisateurs-form.scss',
  imports: [
    CommonModule,
    Select,
    InputText,
    ButtonModule,
    RippleModule,
    FormsModule,
    PasswordModule,
    AccordionModule,
    DatePicker,
    StepperModule,
  ],
})
export class UtilisateursForm implements OnInit, OnChanges {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() initialData: Partial<User> | null = null;
  @Input() loading = false;
  /** Quand true, dÃ©sactive tous les champs et le bouton Enregistrer (ex. contexte Â« Toutes les usines Â»). */
  @Input() formDisabled = false;

  @Output() submitForm = new EventEmitter<UserFormData>();
  @Output() cancel = new EventEmitter<void>();

  submitted = false;
  isEditing = false;
  model: UserFormData = {};
  /** Ã‰tape courante du stepper (1 = TÃ©lÃ©phone, 2 = Type+RÃ´le, 3 = Infos perso, 4 = AccÃ¨s, 5 = PiÃ¨ce). */
  activeStep = 1;

  get hasIdentityStep(): boolean {
    return this.mode !== 'create';
  }

  get lastStep(): number {
    return this.hasIdentityStep ? 5 : 4;
  }

  /** Date de naissance sous forme de Date pour le p-datepicker */
  dateNaissanceObj: Date | null = null;

  /** Date max pour le datepicker (aujourd'hui) */
  readonly today = new Date();

  // Types de compte (pour p-select et liste)
  readonly userTypeOptions: { label: string; value: UserType }[] = [
    { label: 'Staff',        value: 'staff' },
    { label: 'Client',       value: 'client' },
    { label: 'Prestataire',  value: 'prestataire' },
    { label: 'Investisseur', value: 'investisseur' },
  ];

  // CivilitÃ©
  readonly civiliteOptions: { label: string; value: Civilite }[] = (
    Object.entries(CIVILITE_LABELS) as [Civilite, string][]
  ).map(([value, label]) => ({ label, value }));

  // RÃ´les rÃ©servÃ©s au staff (sÃ©lection manuelle)
  private readonly STAFF_ROLES = ['admin', 'manager', 'comptable', 'agent_vente', 'employe'];

  // RÃ´les disponibles (chargÃ©s depuis l'API)
  availableRoles: { label: string; value: string }[] = [];

  // Options piÃ¨ces d'identitÃ©
  readonly pieceTypeOptions: { label: string; value: PieceType }[] = (
    Object.entries(PIECE_TYPE_LABELS) as [PieceType, string][]
  ).map(([value, label]) => ({ label, value }));

  // Validation du tÃ©lÃ©phone
  phoneError: string | null = null;
  phoneCountry: string = 'GN';

  // Validation du mot de passe
  passwordError: string | null = null;

  // Validation KYC â€” erreurs par champ
  kycErrors: Record<string, string> = {};

  // Liste des pays pour le sÃ©lecteur
  countries = COUNTRIES;

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.loadRoles();
    this.initializeModel();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialData']) {
      const change = changes['initialData'];
      if (change.currentValue && Object.keys(change.currentValue).length > 0) {
        this.initializeModel();
      }
    }
  }

  private loadRoles() {
    this.roleService.getRoles().subscribe({
      next: (response) => {
        if (response.success) {
          this.availableRoles = response.data.map(r => ({
            label: r.role.name.charAt(0).toUpperCase() + r.role.name.slice(1),
            value: r.role.name
          }));
        }
      },
      error: () => {
        this.availableRoles = [
          { label: 'Admin', value: 'admin' },
          { label: 'Manager', value: 'manager' },
          { label: 'Employe', value: 'employe' },
        ];
      }
    });
  }

  // â”€â”€ Type â†’ rÃ´les filtrÃ©s â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  get filteredRoles(): { label: string; value: string }[] {
    if (this.model.type === 'staff') {
      return this.availableRoles.filter(r => this.STAFF_ROLES.includes(r.value));
    }
    return [];
  }

  get isRoleSelectable(): boolean {
    return this.model.type === 'staff';
  }

  onTypeChange(): void {
    if (!this.model.type) return;
    if (this.model.type === 'staff') {
      this.model.role = undefined;
    } else {
      this.model.role = this.model.type;
    }
  }

  // â”€â”€ KYC â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  /** Vrai dÃ¨s que piece_type est sÃ©lectionnÃ© â†’ tous les autres champs KYC deviennent requis */
  get isKycActive(): boolean {
    return !!this.model.piece_type;
  }

  /** AppelÃ© lorsque piece_type change */
  onPieceTypeChange(): void {
    if (!this.model.piece_type) {
      // On vide le bloc KYC quand le type est retirÃ©
      this.model.piece_numero    = undefined;
      this.model.piece_pays      = undefined;
      this.model.piece_delivree_le = undefined;
      this.model.piece_expire_le   = undefined;
      this.kycErrors = {};
    } else if (this.submitted) {
      this.setKycErrors();
    }
  }

  /** AppelÃ© sur chaque champ KYC aprÃ¨s soumission (re-validation en temps rÃ©el) */
  onKycFieldChange(): void {
    if (this.submitted && this.isKycActive) {
      this.setKycErrors();
    }
  }

  /** VÃ©rification pure (sans side-effect) â€” utilisÃ©e par isValid() */
  private checkKyc(): boolean {
    if (!this.model.piece_type) return true;

    if (!this.model.piece_numero?.trim()) return false;
    if (!this.model.piece_pays) return false;
    if (!this.model.piece_delivree_le) return false;
    if (!this.model.piece_expire_le) return false;

    const today = new Date();
    today.setHours(23, 59, 59, 999);
    const delivree = new Date(this.model.piece_delivree_le);
    if (delivree > today) return false;

    const expire = new Date(this.model.piece_expire_le);
    if (expire <= delivree) return false;

    return true;
  }

  /** Renseigne kycErrors avec les messages Ã  afficher */
  private setKycErrors(): void {
    this.kycErrors = {};
    if (!this.model.piece_type) return;

    if (!this.model.piece_numero?.trim()) {
      this.kycErrors['piece_numero'] = 'Numero de piece obligatoire.';
    }
    if (!this.model.piece_pays) {
      this.kycErrors['piece_pays'] = 'Pays de delivrance obligatoire.';
    }

    if (!this.model.piece_delivree_le) {
      this.kycErrors['piece_delivree_le'] = 'Date de delivrance obligatoire.';
    } else {
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      const delivree = new Date(this.model.piece_delivree_le);
      if (delivree > today) {
        this.kycErrors['piece_delivree_le'] = 'La date de delivrance ne peut pas etre dans le futur.';
      }
    }

    if (!this.model.piece_expire_le) {
      this.kycErrors['piece_expire_le'] = "Date d'expiration obligatoire.";
    }

    // CohÃ©rence croisÃ©e expire > delivree
    if (this.model.piece_delivree_le && this.model.piece_expire_le) {
      const delivree = new Date(this.model.piece_delivree_le);
      const expire   = new Date(this.model.piece_expire_le);
      if (expire <= delivree) {
        this.kycErrors['dates'] = "La date d'expiration doit etre posterieure a la date de delivrance.";
      }
    }
  }

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  private initializeModel() {
    if (this.initialData) {
      this.model = {
        nom: this.initialData.nom,
        prenom: this.initialData.prenom,
        phone: this.initialData.phone,
        email: this.initialData.email,
        pays: this.initialData.pays,
        code_pays: this.initialData.code_pays,
        code_phone_pays: this.initialData.code_phone_pays,
        ville: this.initialData.ville ?? undefined,
        quartier: this.initialData.quartier ?? undefined,
        type: this.initialData.type,
        role: this.initialData.role_names?.[0] ?? this.initialData.roles?.[0],
        reference: this.initialData.reference,
        civilite: this.initialData.civilite ?? undefined,
        piece_type: this.initialData.piece_type ?? undefined,
        piece_numero: this.initialData.piece_numero ?? undefined,
        piece_delivree_le: this.initialData.piece_delivree_le ?? undefined,
        piece_expire_le: this.initialData.piece_expire_le ?? undefined,
        piece_pays: this.initialData.piece_pays ?? undefined,
      };
      this.dateNaissanceObj = this.initialData.date_naissance
        ? new Date(this.initialData.date_naissance)
        : null;
    } else {
      this.model = {};
      this.dateNaissanceObj = null;
    }

    if (this.mode === 'create' && !this.model.ville?.trim()) {
      this.model.ville = 'Conakry';
    }

    if (this.mode === 'create') {
      this.isEditing = true;
    } else if (this.mode === 'edit' && this.initialData) {
      this.isEditing = true;
    }

    if (this.model.code_pays) {
      this.phoneCountry = this.model.code_pays;
    } else if (this.model.phone) {
      this.detectPhoneCountry(this.model.phone);
    }

    this.submitted     = false;
    this.phoneError    = null;
    this.passwordError = null;
    this.kycErrors     = {};
    this.activeStep    = 1;
  }

  detectPhoneCountry(phone: string) {
    try {
      const phoneNumber = parsePhoneNumber(phone);
      if (phoneNumber && phoneNumber.country) {
        this.phoneCountry = phoneNumber.country;
      }
    } catch (error) {
      // Garder le pays par dÃ©faut
    }
  }

  validatePhone(): boolean {
    if (!this.model.phone?.trim()) {
      this.phoneError = 'Telephone obligatoire.';
      return false;
    }

    try {
      const isValid = isValidPhoneNumber(this.model.phone, this.phoneCountry as CountryCode);
      if (!isValid) {
        this.phoneError = `Numero invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }

      const phoneNumber = parsePhoneNumber(this.model.phone, this.phoneCountry as CountryCode);
      if (phoneNumber) {
        this.model.phone     = phoneNumber.formatInternational();
        this.model.code_pays = this.phoneCountry;
        this.model.pays      = this.getCountryName(this.phoneCountry);
        this.phoneError      = null;
        return true;
      }

      this.phoneError = 'Format de numero invalide.';
      return false;
    } catch (error) {
      this.phoneError = 'Format de numero invalide.';
      return false;
    }
  }

  validatePassword(): boolean {
    if (this.mode === 'edit') {
      if (!this.model.password?.trim()) {
        this.passwordError = null;
        return true;
      }
    }

    if (this.mode === 'create' && !this.model.password?.trim()) {
      this.passwordError = 'Mot de passe obligatoire.';
      return false;
    }

    const password = this.model.password || '';

    if (password.length < 8) {
      this.passwordError = 'Le mot de passe doit contenir au moins 8 caracteres.';
      return false;
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      this.passwordError = 'Le mot de passe doit contenir des majuscules et des minuscules.';
      return false;
    }

    if (!/[0-9]/.test(password)) {
      this.passwordError = 'Le mot de passe doit contenir au moins un chiffre.';
      return false;
    }

    this.passwordError = null;
    return true;
  }

  private formatDate(date: Date | null): string | null {
    if (!date) return null;
    return date.toISOString().split('T')[0];
  }

  getCountryName(code: string): string {
    const country = this.countries.find(c => c.code === code);
    return country ? country.name : code;
  }

  getSelectedCountryDialCode(): string {
    const country = this.countries.find(c => c.code === this.phoneCountry);
    return country ? country.dialCode : '';
  }

  onCountryChange() {
    if (this.model.phone) {
      this.validatePhone();
    }
  }

  onPhoneInput() {
    if (this.submitted) {
      this.validatePhone();
    }
  }

  onPhoneBlur() {
    if (this.model.phone?.trim()) {
      this.validatePhone();
    }
  }

  /** Valide l'Ã©tape 1 (TÃ©lÃ©phone) : Pays + TÃ©lÃ©phone. */
  isStep1Valid(): boolean {
    if (!this.phoneCountry || !this.model.phone?.trim()) return false;
    try {
      return isValidPhoneNumber(this.model.phone, this.phoneCountry as CountryCode);
    } catch {
      return false;
    }
  }

  /** Valide l'Ã©tape 2 (Type + RÃ´le) : Type de compte + RÃ´le si staff. */
  isStep2Valid(): boolean {
    if (!this.model.type) return false;
    if (this.isRoleSelectable && !this.model.role) return false;
    return true;
  }

  /** Valide l'Ã©tape 3 (Informations personnelles) : Nom + PrÃ©nom + Ville + Quartier. */
  isStep3Valid(): boolean {
    return !!(
      this.model.nom?.trim() &&
      this.model.prenom?.trim() &&
      this.model.ville?.trim() &&
      this.model.quartier?.trim()
    );
  }

  /** Valide l'Ã©tape 4 (AccÃ¨s) : Email (optionnel) + Mot de passe si crÃ©ation. */
  isStep4Valid(): boolean {
    if (this.mode === 'create' && !this.validatePassword()) return false;
    return true;
  }

  /** Ã‰tape 5 (PiÃ¨ce) facultative : pas de blocage Suivant ; validation KYC seulement si type piÃ¨ce renseignÃ©. */
  isStep5Valid(): boolean {
    return true;
  }

  isValid(): boolean {
    if (!this.isStep1Valid()) return false;
    if (!this.isStep2Valid()) return false;
    if (!this.isStep3Valid()) return false;
    if (!this.isStep4Valid()) return false;
    if (!this.checkKyc()) return false;
    return true;
  }

  goNext(): void {
    this.submitted = true;

    if (this.activeStep === 1) {
      if (this.validatePhone()) {
        this.activeStep = 2;
        this.submitted = false;
      }
      return;
    }

    if (this.activeStep === 2 && this.isStep2Valid()) {
      this.activeStep = 3;
      this.submitted = false;
      return;
    }

    if (this.activeStep === 3 && this.isStep3Valid()) {
      this.activeStep = 4;
      this.submitted = false;
      return;
    }

    if (this.activeStep === 4 && this.isStep4Valid() && this.hasIdentityStep) {
      this.activeStep = 5;
      this.submitted = false;
    }
  }

  goPrev(): void {
    if (this.activeStep > 1) {
      this.activeStep = this.activeStep - 1;
      this.submitted = false;
    }
  }

  enableEditing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing   = false;
    this.submitted   = false;
    this.phoneError  = null;
    this.passwordError = null;
    this.kycErrors   = {};
    this.initializeModel();
  }

  onSubmit() {
    this.submitted = true;
    this.setKycErrors();      // dÃ©clenche l'affichage des erreurs KYC

    if (!this.isValid()) {
      return;
    }

    this.submitForm.emit({
      ...this.model,
      password_confirmation: this.model.password,
      date_naissance: this.formatDate(this.dateNaissanceObj) ?? undefined,
    });
  }

  onCancel() {
    this.cancel.emit();
  }

  get fieldsDisabled(): boolean {
    return (this.mode === 'edit' && !this.isEditing) || this.loading || this.formDisabled;
  }

  get formTitle(): string {
    if (this.mode === 'create') {
      return 'Creer un compte utilisateur';
    }
    const reference = this.model.reference?.trim();
    return reference
      ? `Modification compte utilisateur : ${reference}`
      : 'Modification compte utilisateur';
  }
}
