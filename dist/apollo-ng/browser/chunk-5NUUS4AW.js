import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-NGYBJXCA.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DSAAE4AM.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/models/produit.model.ts
var PRODUIT_TYPE_LABELS = {
  materiel: "Mat\xE9riel",
  service: "Service",
  fabricable: "Fabricable",
  achat_vente: "Achat/Vente"
};
var PRODUIT_STATUT_LABELS = {
  brouillon: "Brouillon",
  actif: "Actif",
  inactif: "Inactif",
  archive: "Archiv\xE9"
};
var PRODUIT_STATUT_SEVERITY = {
  brouillon: "secondary",
  actif: "success",
  inactif: "danger",
  archive: "danger"
};
var Produit = class _Produit {
  id = 0;
  nom = "";
  code = "";
  // Prix globaux de référence
  prix_usine = null;
  prix_vente = null;
  prix_achat = null;
  cout = null;
  // Stock de l'usine courante (issu de stock_courant.qte_stock via fromApi)
  qte_stock = 0;
  /** Seuil d'alerte stock (issu de stock_courant.seuil_alerte_stock via fromApi). null = seuil global. */
  seuil_alerte_stock = null;
  statut = "brouillon";
  type = "materiel";
  /** true = produit visible par toutes les usines, géré au niveau siège */
  is_global = false;
  /** null si global, sinon ID de l'usine propriétaire */
  usine_id = null;
  in_stock = true;
  is_archived = false;
  is_critique = false;
  is_out_of_stock = false;
  is_low_stock = false;
  low_stock_threshold = 10;
  archived_at = null;
  description = null;
  image_url = null;
  created_at = "";
  updated_at = "";
  // Objets imbriqués (usine courante)
  stock_courant = null;
  produit_usine_courant = null;
  creator;
  constructor(data) {
    if (data)
      Object.assign(this, data);
  }
  /**
   * Retourne l'URL complète de l'image.
   */
  getImageUrl(defaultImage = "assets/demo/images/no-product.png") {
    if (!this.image_url)
      return defaultImage;
    if (this.image_url.startsWith("http://") || this.image_url.startsWith("https://")) {
      return this.image_url;
    }
    return `assets/demo/images/produits/${this.image_url}`;
  }
  formatPrix(prix, currency = "GNF") {
    const value = typeof prix === "number" ? prix : 0;
    return `${value.toLocaleString("fr-FR")} ${currency}`;
  }
  /**
   * Prix effectifs pour l'usine courante :
   * prix local non-null > prix global. Utiliser au POS.
   */
  getPrixEffectifs() {
    const local = this.produit_usine_courant;
    return {
      prix_usine: local?.prix_usine ?? this.prix_usine,
      prix_achat: local?.prix_achat ?? this.prix_achat,
      prix_vente: local?.prix_vente ?? this.prix_vente,
      cout: local?.cout ?? this.cout,
      tva: local?.tva ?? null
    };
  }
  static fromApi(data) {
    return new _Produit(__spreadProps(__spreadValues({}, data), {
      prix_usine: data?.prix_usine != null ? Number(data.prix_usine) : null,
      prix_vente: data?.prix_vente != null ? Number(data.prix_vente) : null,
      prix_achat: data?.prix_achat != null ? Number(data.prix_achat) : null,
      cout: data?.cout != null ? Number(data.cout) : null,
      is_global: data?.is_global ?? data?.is_systeme ?? false,
      usine_id: data?.usine_id ?? null,
      is_critique: data?.is_critique ?? false,
      is_low_stock: data?.is_low_stock ?? false,
      low_stock_threshold: data?.low_stock_threshold ?? 10,
      is_out_of_stock: data?.is_out_of_stock ?? false,
      stock_courant: data?.stock_courant ?? null,
      produit_usine_courant: data?.produit_usine_courant ?? null,
      // qte_stock : priorité stock_courant, sinon champ racine (compat ancienne API)
      qte_stock: data?.stock_courant?.qte_stock != null ? Number(data.stock_courant.qte_stock) : data?.qte_stock != null ? Number(data.qte_stock) : 0,
      seuil_alerte_stock: data?.stock_courant?.seuil_alerte_stock != null ? Number(data.stock_courant.seuil_alerte_stock) : data?.seuil_alerte_stock != null ? Number(data.seuil_alerte_stock) : null
    }));
  }
  static fromApiArray(data) {
    return data.map((item) => _Produit.fromApi(item));
  }
};

// src/app/services/produits/produits.service.ts
var ProduitService = class _ProduitService {
  http;
  apiUrl = `${environment.apiUrl}/produits`;
  constructor(http) {
    this.http = http;
  }
  /**
   * GET /produits - Liste tous les produits (non archivés)
   */
  getAll() {
    return this.http.get(this.apiUrl).pipe(map((response) => Produit.fromApiArray(response.data)));
  }
  /**
   * GET /produits - Liste avec filtres (sans recherche textuelle)
   */
  getAllFiltered(params = {}) {
    let httpParams = new HttpParams();
    if (params.statut)
      httpParams = httpParams.set("statut", params.statut);
    if (params.type)
      httpParams = httpParams.set("type", params.type);
    if (params.in_stock != null)
      httpParams = httpParams.set("in_stock", String(params.in_stock));
    if (params.disponibles)
      httpParams = httpParams.set("disponibles", "1");
    if (params.sort_by)
      httpParams = httpParams.set("sort_by", params.sort_by);
    if (params.sort_order)
      httpParams = httpParams.set("sort_order", params.sort_order);
    return this.http.get(this.apiUrl, { params: httpParams }).pipe(map((response) => Produit.fromApiArray(response.data)));
  }
  /**
   * GET /produits/archived - Liste les produits archivés
   */
  getArchived() {
    return this.http.get(`${this.apiUrl}/archived`).pipe(map((response) => Produit.fromApiArray(response.data)));
  }
  /**
   * GET /produits/pos - Catalogue POS (prix_effectifs inclus, produits actifs + activés localement)
   */
  getPos(params = {}) {
    let httpParams = new HttpParams();
    if (params.type)
      httpParams = httpParams.set("type", params.type);
    if (params.sort_by)
      httpParams = httpParams.set("sort_by", params.sort_by);
    if (params.sort_order)
      httpParams = httpParams.set("sort_order", params.sort_order);
    if (params.per_page)
      httpParams = httpParams.set("per_page", String(params.per_page));
    return this.http.get(`${this.apiUrl}/pos`, { params: httpParams }).pipe(map((response) => Produit.fromApiArray(response.data)));
  }
  /**
   * GET /produits/search - Recherche avec filtres
   */
  search(params) {
    let httpParams = new HttpParams();
    if (params.search)
      httpParams = httpParams.set("search", params.search);
    if (params.type)
      httpParams = httpParams.set("type", params.type);
    if (params.statut)
      httpParams = httpParams.set("statut", params.statut);
    if (params.in_stock !== void 0)
      httpParams = httpParams.set("in_stock", params.in_stock.toString());
    if (params.page)
      httpParams = httpParams.set("page", params.page.toString());
    if (params.per_page)
      httpParams = httpParams.set("per_page", params.per_page.toString());
    if (params.sort_by)
      httpParams = httpParams.set("sort_by", params.sort_by);
    if (params.sort_order)
      httpParams = httpParams.set("sort_order", params.sort_order);
    return this.http.get(`${this.apiUrl}/search`, { params: httpParams }).pipe(map((response) => Produit.fromApiArray(response.data.produits)));
  }
  /**
   * GET /produits/statistics - Statistiques des produits
   */
  getStatistics() {
    return this.http.get(`${this.apiUrl}/statistics`).pipe(map((response) => response.data));
  }
  /**
   * GET /produits/{id} - Récupère un produit par son ID
   */
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * POST /produits - Crée un nouveau produit (JSON uniquement, sans image)
   */
  create(dto) {
    const _a = dto, { image } = _a, jsonDto = __objRest(_a, ["image"]);
    return this.http.post(this.apiUrl, jsonDto).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * PUT /produits/{id} - Met à jour un produit (JSON uniquement, sans image)
   */
  update(id, dto) {
    const _a = dto, { image } = _a, jsonDto = __objRest(_a, ["image"]);
    return this.http.put(`${this.apiUrl}/${id}`, jsonDto).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * POST /produits/{id}/image - Upload ou remplace l'image d'un produit
   */
  uploadProduitImage(produitId, file) {
    const formData = new FormData();
    formData.append("image", file, file.name);
    return this.http.post(`${this.apiUrl}/${produitId}/image`, formData).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * DELETE /produits/{id}/image - Supprime l'image d'un produit
   */
  deleteProduitImage(produitId) {
    return this.http.delete(`${this.apiUrl}/${produitId}/image`).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * DELETE /produits/{id} - Supprime un produit (soft delete)
   */
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  /**
   * PATCH /produits/{id}/stock - Met à jour le stock de l'usine courante.
   * Retourne la réponse complète avec stock_alert pour afficher les alertes UI.
   */
  updateStock(id, dto) {
    return this.http.patch(`${this.apiUrl}/${id}/stock`, dto).pipe(map((response) => response.data));
  }
  /**
   * PATCH /produits/{id}/status - Change le statut global d'un produit
   */
  changeStatus(id, dto) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, dto).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * PUT /produits/{id} — payload minimal { is_global } pour basculer le statut global.
   * false→true : usine_id=null, backend crée ProduitUsine+Stock pour toutes les usines.
   * true→false : usine_id = X-Usine-Id courante (envoyé par l'intercepteur).
   * Réservé admin/manager (403 sinon).
   */
  toggleGlobal(id, isGlobal) {
    return this.http.put(`${this.apiUrl}/${id}`, { is_global: isGlobal }).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * PATCH /produits/{id}/archive - Archive un produit
   */
  archive(id) {
    return this.http.patch(`${this.apiUrl}/${id}/archive`, {}).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * PATCH /produits/{id}/unarchive - Désarchive un produit
   */
  unarchive(id) {
    return this.http.patch(`${this.apiUrl}/${id}/unarchive`, {}).pipe(map((response) => Produit.fromApi(response.data)));
  }
  // ── Config locale par usine ───────────────────────────────────────────────
  /**
   * POST /produits/{id}/usines - Affecte un produit à une usine
   * 409 si déjà affecté.
   */
  affecterUsine(id, dto) {
    return this.http.post(`${this.apiUrl}/${id}/usines`, dto).pipe(map((response) => response.data));
  }
  /**
   * DELETE /produits/{id}/usines/{usineId} - Désaffecte (supprime la config locale)
   * Le stock est conservé.
   */
  desaffecterUsine(id, usineId) {
    return this.http.delete(`${this.apiUrl}/${id}/usines/${usineId}`).pipe(map((response) => response.data));
  }
  /**
   * PATCH /produits/{id}/usines/{usineId}/activer - Active le produit localement au POS
   * 400 si statut global !== 'actif' ou déjà actif.
   */
  activerLocalement(id, usineId) {
    return this.http.patch(`${this.apiUrl}/${id}/usines/${usineId}/activer`, {}).pipe(map((response) => response.data));
  }
  /**
   * PATCH /produits/{id}/usines/{usineId}/desactiver - Désactive le produit localement
   */
  desactiverLocalement(id, usineId) {
    return this.http.patch(`${this.apiUrl}/${id}/usines/${usineId}/desactiver`, {}).pipe(map((response) => response.data));
  }
  /**
   * PATCH /produits/{id}/usines/{usineId}/prix - Met à jour les prix locaux
   * null = revenir au prix global.
   * 422 si aucun champ envoyé.
   */
  updatePrixLocal(id, usineId, dto) {
    return this.http.patch(`${this.apiUrl}/${id}/usines/${usineId}/prix`, dto).pipe(map((response) => response.data));
  }
  static \u0275fac = function ProduitService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProduitService, factory: _ProduitService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PRODUIT_TYPE_LABELS,
  PRODUIT_STATUT_LABELS,
  PRODUIT_STATUT_SEVERITY,
  Produit,
  ProduitService
};
//# sourceMappingURL=chunk-5NUUS4AW.js.map
