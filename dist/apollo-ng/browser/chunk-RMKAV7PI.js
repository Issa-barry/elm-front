import {
  environment
} from "./chunk-YPWQOW2Z.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-PPMOL7YY.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UJSDGQXU.js";

// src/app/services/prestataire/prestataire.service.ts
var PrestataireService = class _PrestataireService {
  http;
  apiUrl = `${environment.apiUrl}/prestataires`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Récupérer la liste des prestataires avec filtres optionnels
   */
  getPrestataires(filters) {
    let params = new HttpParams();
    if (filters) {
      if (filters.is_active !== void 0) {
        params = params.set("is_active", filters.is_active.toString());
      }
      if (filters.search) {
        params = params.set("search", filters.search);
      }
      if (filters.pays) {
        params = params.set("pays", filters.pays);
      }
      if (filters.ville) {
        params = params.set("ville", filters.ville);
      }
      if (filters.specialite) {
        params = params.set("specialite", filters.specialite);
      }
      if (filters.sort_by) {
        params = params.set("sort_by", filters.sort_by);
      }
      if (filters.sort_order) {
        params = params.set("sort_order", filters.sort_order);
      }
      if (filters.per_page) {
        params = params.set("per_page", filters.per_page.toString());
      }
      if (filters.page) {
        params = params.set("page", filters.page.toString());
      }
    }
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Récupérer un prestataire par son ID
   */
  getPrestataire(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  /**
   * Créer un nouveau prestataire
   */
  createPrestataire(data) {
    return this.http.post(this.apiUrl, data);
  }
  /**
   * Mettre à jour un prestataire
   */
  updatePrestataire(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  /**
   * Basculer le statut actif/inactif d'un prestataire
   */
  togglePrestataireStatus(id) {
    return this.http.patch(`${this.apiUrl}/${id}/toggle-status`, {});
  }
  /**
   * Supprimer un prestataire (soft delete)
   */
  deletePrestataire(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  /**
   * Restaurer un prestataire supprimé
   */
  restorePrestataire(id) {
    return this.http.post(`${this.apiUrl}/${id}/restore`, {});
  }
  /**
   * Rechercher des prestataires
   * Recherche dans: nom, prenom, email, phone, reference, raison_sociale
   */
  searchPrestataires(searchTerm) {
    const params = new HttpParams().set("search", searchTerm);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir uniquement les prestataires actifs
   */
  getActivePrestataires() {
    const params = new HttpParams().set("is_active", "true");
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les prestataires inactifs
   */
  getInactivePrestataires() {
    const params = new HttpParams().set("is_active", "false");
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les prestataires par pays
   */
  getPrestatairesByCountry(country) {
    const params = new HttpParams().set("pays", country);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les prestataires par ville
   */
  getPrestatairesByCity(city) {
    const params = new HttpParams().set("ville", city);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les prestataires par spécialité
   */
  getPrestatairesBySpecialite(specialite) {
    const params = new HttpParams().set("specialite", specialite);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les prestataires avec pagination
   */
  getPrestatairesPaginated(page = 1, perPage = 10, filters) {
    let params = new HttpParams().set("page", page.toString()).set("per_page", perPage.toString());
    if (filters) {
      if (filters.is_active !== void 0) {
        params = params.set("is_active", filters.is_active.toString());
      }
      if (filters.search) {
        params = params.set("search", filters.search);
      }
      if (filters.pays) {
        params = params.set("pays", filters.pays);
      }
      if (filters.ville) {
        params = params.set("ville", filters.ville);
      }
      if (filters.specialite) {
        params = params.set("specialite", filters.specialite);
      }
      if (filters.sort_by) {
        params = params.set("sort_by", filters.sort_by);
      }
      if (filters.sort_order) {
        params = params.set("sort_order", filters.sort_order);
      }
    }
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Trier les prestataires
   */
  sortPrestataires(sortBy, sortOrder = "asc") {
    const params = new HttpParams().set("sort_by", sortBy || "created_at").set("sort_order", sortOrder);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les statistiques des prestataires
   */
  getStatistics() {
    return this.http.get(`${this.apiUrl}/statistics`);
  }
  /**
   * Obtenir les prestataires avec tarif horaire dans une fourchette
   */
  getPrestatairesByTarifRange(min, max) {
    const params = new HttpParams().set("tarif_min", min.toString()).set("tarif_max", max.toString());
    return this.http.get(this.apiUrl, { params });
  }
  static \u0275fac = function PrestataireService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrestataireService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PrestataireService, factory: _PrestataireService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestataireService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PrestataireService
};
//# sourceMappingURL=chunk-RMKAV7PI.js.map
