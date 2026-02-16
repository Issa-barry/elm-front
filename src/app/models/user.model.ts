export interface User {
  id: number;
  nom: string;
  prenom: string;
  phone: string;
  email: string | null;
  pays: string;
  code_pays: string;
  code_phone_pays: string;
  ville: string;
  quartier: string;
  reference: string;
  is_active: boolean;
  email_verified_at: string | null;
  last_login_at: string | null;
  last_login_ip: string | null;
  created_at: string;
  updated_at: string;
  nom_complet: string;
  roles?: string[];
  role_names?: string[];
  permissions?: string[];
}

export interface CreateUserDto {
  nom: string;
  prenom: string;
  phone: string;
  email?: string | null;
  pays: string;
  code_pays: string;
  code_phone_pays: string;
  ville: string;
  quartier: string;
  password: string;
  password_confirmation: string;
  role: string;
}
