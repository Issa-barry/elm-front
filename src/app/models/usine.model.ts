// ── Types ──────────────────────────────────────────────
export type UsineType    = 'production' | 'distribution' | 'stockage' | 'mixte';
export type UsineStatut  = 'actif' | 'inactif' | 'archive';

// ── Interfaces principales ──────────────────────────────
export interface UsineRole {
  id:   number;
  name: string;
}

/** Usine telle que renvoyée dans accessible_usines (vue allégée) */
export interface AccessibleUsine {
  id:      number;
  nom:     string;
  code?:   string;
  type?:   UsineType;
  statut?: UsineStatut;
}

/** Usine complète (endpoint GET /usines) */
export interface Usine {
  id:        number;
  nom:       string;
  code?:     string;
  type?:     UsineType;
  statut?:   UsineStatut;
  adresse?:  string | null;
  created_at?: string;
  updated_at?: string;
}

/** Réponse complète de GET /auth/me (données étendues multi-usine) */
export interface MeResponse {
  user:               Record<string, unknown>; // hydraté via extractUserFromPayload dans AuthService
  roles:              string[];
  permissions:        string[];
  accessible_usines:  AccessibleUsine[];
  default_usine_id:   number | null;
  current_usine_id:   number | null;
  is_siege_user:      boolean;
}

// ── DTOs ────────────────────────────────────────────────
export interface CreateUsineDto {
  nom:      string;
  code?:    string;
  type?:    UsineType;
  adresse?: string;
}

export type UpdateUsineDto = Partial<CreateUsineDto>;

export interface AssignUserToUsineDto {
  user_id: number;
  role?:   string;
}
