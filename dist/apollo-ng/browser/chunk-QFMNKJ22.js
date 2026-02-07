import {
  EditorModule
} from "./chunk-VJWB66UI.js";
import {
  environment
} from "./chunk-4LPCKNUN.js";
import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-TH3ICB5N.js";
import {
  RatingModule
} from "./chunk-55AEHZQ4.js";
import {
  FileUpload,
  FileUploadModule
} from "./chunk-R25QRJYT.js";
import "./chunk-W5XR2D6E.js";
import "./chunk-UXWH3647.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-GUNNI5O7.js";
import {
  ChipModule
} from "./chunk-IFPN5NGS.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-7DLMVGDO.js";
import {
  Dialog,
  DialogModule
} from "./chunk-GU6CNOKS.js";
import {
  Toast,
  ToastModule
} from "./chunk-ZG66MDSF.js";
import "./chunk-KZ2XEJBQ.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-SNWJRZDT.js";
import {
  Router
} from "./chunk-VYPJWBQM.js";
import "./chunk-K745LLV4.js";
import "./chunk-QM3EJKHT.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule
} from "./chunk-VYTCGADS.js";
import "./chunk-HX6AAUEU.js";
import "./chunk-U3BOOR2A.js";
import "./chunk-ATTBT5LJ.js";
import "./chunk-M54353BN.js";
import "./chunk-S7EQZUZC.js";
import "./chunk-FT7WFYEI.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-H2TDPVQC.js";
import "./chunk-GM56SEQR.js";
import "./chunk-OYDBCBVT.js";
import {
  Select,
  SelectModule
} from "./chunk-ADT2GN44.js";
import "./chunk-X3MCY454.js";
import "./chunk-BICDQRLL.js";
import "./chunk-JPETFPPG.js";
import "./chunk-KG7RE235.js";
import "./chunk-UHMM7FE7.js";
import "./chunk-SUK52LSR.js";
import {
  Tag,
  TagModule
} from "./chunk-KX7MGO2E.js";
import "./chunk-3UGMWDW4.js";
import {
  RadioButtonModule
} from "./chunk-UONKXDMG.js";
import "./chunk-KFLL2YOX.js";
import "./chunk-WQC3TYUA.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-EXWZQDGS.js";
import {
  InputText,
  InputTextModule
} from "./chunk-YW263GEX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RequiredValidator
} from "./chunk-HEGGX7RQ.js";
import "./chunk-HZAHIETM.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-UXOAS4MB.js";
import "./chunk-BVWUZ6O2.js";
import {
  Button,
  ButtonDirective,
  ButtonModule
} from "./chunk-O7LMIZSN.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-BNKYD7VX.js";
import "./chunk-XLSVDIRK.js";
import {
  Ripple,
  RippleModule
} from "./chunk-HURDVDQD.js";
import {
  Fluid,
  FluidModule
} from "./chunk-CUNICK74.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-6R3XSTEB.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-KASXF2RH.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  ViewChild,
  ViewChildren,
  forkJoin,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-5J4QQBGF.js";
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
  archive: "Archiv\xE9",
  rupture_stock: "Rupture de stock"
};
var PRODUIT_STATUT_SEVERITY = {
  brouillon: "secondary",
  actif: "success",
  inactif: "danger",
  archive: "danger",
  rupture_stock: "warn"
};
var Produit = class _Produit {
  id = 0;
  nom = "";
  code = "";
  // ✅ IMPORTANT: en UI on veut pouvoir mettre null quand non applicable
  prix_usine = null;
  prix_vente = null;
  prix_achat = null;
  qte_stock = 0;
  // ✅ number, pas string
  cout = null;
  statut = "brouillon";
  type = "materiel";
  in_stock = true;
  is_archived = false;
  archived_at = null;
  description = null;
  image_url = null;
  created_by = null;
  updated_by = null;
  deleted_by = null;
  archived_by = null;
  created_at = "";
  updated_at = "";
  deleted_at = null;
  creator;
  updater;
  archiver;
  deleter;
  created_by_name;
  updated_by_name;
  archived_by_name;
  deleted_by_name;
  constructor(data) {
    if (data)
      Object.assign(this, data);
  }
  /**
   * Retourne l'URL complète de l'image.
   * Si image_url est juste un nom de fichier, ajoute le chemin de base.
   */
  getImageUrl(defaultImage = "assets/demo/images/no-product.png") {
    if (!this.image_url)
      return defaultImage;
    if (this.image_url.startsWith("http://") || this.image_url.startsWith("https://")) {
      return this.image_url;
    }
    return `assets/demo/images/produits/${this.image_url}`;
  }
  // ✅ format en number
  formatPrix(prix, currency = "GNF") {
    const value = typeof prix === "number" ? prix : 0;
    return `${value.toLocaleString("fr-FR")} ${currency}`;
  }
  static fromApi(data) {
    return new _Produit(__spreadProps(__spreadValues({}, data), {
      prix_usine: data?.prix_usine !== null && data?.prix_usine !== void 0 ? Number(data.prix_usine) : null,
      prix_vente: data?.prix_vente !== null && data?.prix_vente !== void 0 ? Number(data.prix_vente) : null,
      prix_achat: data?.prix_achat !== null && data?.prix_achat !== void 0 ? Number(data.prix_achat) : null,
      cout: data?.cout !== null && data?.cout !== void 0 ? Number(data.cout) : null
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
   * GET /produits/archived - Liste les produits archivés
   */
  getArchived() {
    return this.http.get(`${this.apiUrl}/archived`).pipe(map((response) => Produit.fromApiArray(response.data)));
  }
  /**
   * GET /produits/search - Recherche avec filtres et pagination
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
    return this.http.get(`${this.apiUrl}/search`, { params: httpParams }).pipe(map((response) => __spreadProps(__spreadValues({}, response), {
      data: Produit.fromApiArray(response.data)
    })));
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
   * POST /produits - Crée un nouveau produit
   */
  create(dto) {
    if (dto.image) {
      const formData = this.toFormData(dto);
      return this.http.post(this.apiUrl, formData).pipe(map((response) => Produit.fromApi(response.data)));
    }
    const _a = dto, { image } = _a, jsonDto = __objRest(_a, ["image"]);
    return this.http.post(this.apiUrl, jsonDto).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * PUT /produits/{id} - Met à jour un produit
   */
  update(id, dto) {
    if (dto.image) {
      const formData = this.toFormData(dto);
      formData.append("_method", "PUT");
      return this.http.post(`${this.apiUrl}/${id}`, formData).pipe(map((response) => Produit.fromApi(response.data)));
    }
    const _a = dto, { image } = _a, jsonDto = __objRest(_a, ["image"]);
    return this.http.put(`${this.apiUrl}/${id}`, jsonDto).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * DELETE /produits/{id} - Supprime un produit (soft delete)
   */
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  /**
   * PATCH /produits/{id}/stock - Met à jour le stock d'un produit
   */
  updateStock(id, dto) {
    return this.http.patch(`${this.apiUrl}/${id}/stock`, dto).pipe(map((response) => Produit.fromApi(response.data)));
  }
  /**
   * PATCH /produits/{id}/status - Change le statut d'un produit
   */
  changeStatus(id, dto) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, dto).pipe(map((response) => Produit.fromApi(response.data)));
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
  /**
   * Conversion en FormData pour l'upload de fichiers
   */
  toFormData(dto) {
    const formData = new FormData();
    if (dto.nom)
      formData.append("nom", dto.nom);
    if (dto.type)
      formData.append("type", dto.type);
    if (dto.qte_stock !== void 0 && dto.qte_stock !== null) {
      formData.append("qte_stock", dto.qte_stock.toString());
    }
    if (dto.prix_usine !== void 0 && dto.prix_usine !== null) {
      formData.append("prix_usine", dto.prix_usine.toString());
    }
    if (dto.prix_vente !== void 0 && dto.prix_vente !== null) {
      formData.append("prix_vente", dto.prix_vente.toString());
    }
    if (dto.prix_achat !== void 0 && dto.prix_achat !== null) {
      formData.append("prix_achat", dto.prix_achat.toString());
    }
    if (dto.statut)
      formData.append("statut", dto.statut);
    if (dto.description)
      formData.append("description", dto.description);
    if (dto.cout !== void 0 && dto.cout !== null) {
      formData.append("cout", dto.cout.toString());
    }
    if (dto.image instanceof File) {
      formData.append("image", dto.image, dto.image.name);
    }
    console.log("FormData content:");
    formData.forEach((value, key) => {
      console.log(`  ${key}:`, value);
    });
    return formData;
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

// src/app/pages/produits/produits-liste/produits-liste.ts
var _c0 = ["dt"];
var _c1 = () => ({ "min-width": "75rem" });
var _c2 = () => [10, 20, 30];
var _c3 = () => ({ width: "720px", maxWidth: "95vw" });
var _c4 = () => ({ width: "450px" });
function ProduitsListe_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275listener("onClick", function ProduitsListe_ng_template_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 13);
    \u0275\u0275listener("onClick", function ProduitsListe_ng_template_3_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelectedProducts());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedProduits || !ctx_r2.selectedProduits.length);
  }
}
function ProduitsListe_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 14);
    \u0275\u0275listener("onClick", function ProduitsListe_ng_template_5_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "h5", 16);
    \u0275\u0275text(2, "Manage Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 17);
    \u0275\u0275elementStart(5, "input", 18);
    \u0275\u0275listener("input", function ProduitsListe_ng_template_9_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r6 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt_r6, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function ProduitsListe_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 19);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 20)(4, "span", 21);
    \u0275\u0275text(5, "Code ");
    \u0275\u0275element(6, "p-sortIcon", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "th", 23)(8, "span", 21);
    \u0275\u0275text(9, "Nom ");
    \u0275\u0275element(10, "p-sortIcon", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "th", 25)(12, "span", 21);
    \u0275\u0275text(13, "Type ");
    \u0275\u0275element(14, "p-sortIcon", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "th", 27)(16, "span", 21);
    \u0275\u0275text(17, "Qt\xE9 ");
    \u0275\u0275element(18, "p-sortIcon", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "th", 29)(20, "span", 21);
    \u0275\u0275text(21, "Status ");
    \u0275\u0275element(22, "p-sortIcon", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "th", 31);
    \u0275\u0275text(24, "Action");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsListe_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275element(2, "p-tableCheckbox", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "p-tag", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "p-button", 35);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_13_Template_p_button_click_14_listener() {
      const produit_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editProduct(produit_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-button", 36);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_13_Template_p_button_click_15_listener() {
      const produit_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteProduct(produit_r8));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const produit_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", produit_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r8.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r8.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r8.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r8.qte_stock);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.getStatutLabel(produit_r8.statut))("severity", ctx_r2.getStatutSeverity(produit_r8.statut));
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function ProduitsListe_ng_template_16_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "label", 60);
    \u0275\u0275text(2, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_16_div_0_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.produit.code, $event) || (ctx_r2.produit.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.produit.code);
    \u0275\u0275property("disabled", true);
  }
}
function ProduitsListe_ng_template_16_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 62);
    \u0275\u0275text(1, "Type obligatoire.");
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_16_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 62);
    \u0275\u0275text(1, "Nom obligatoire.");
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 63);
    \u0275\u0275text(2, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_16_div_16_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.produit.statut, $event) || (ctx_r2.produit.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.produit.statut);
    \u0275\u0275property("options", ctx_r2.statutOptions);
  }
}
function ProduitsListe_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ProduitsListe_ng_template_16_div_0_Template, 4, 2, "div", 37);
    \u0275\u0275elementStart(1, "div", 38)(2, "div")(3, "label", 39);
    \u0275\u0275text(4, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_16_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.produit.type, $event) || (ctx_r2.produit.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProduitsListe_ng_template_16_small_6_Template, 2, 0, "small", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 42);
    \u0275\u0275text(9, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_16_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.produit.nom, $event) || (ctx_r2.produit.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProduitsListe_ng_template_16_small_11_Template, 2, 0, "small", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "label", 44);
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_16_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.produit.description, $event) || (ctx_r2.produit.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ProduitsListe_ng_template_16_div_16_Template, 4, 2, "div", 46);
    \u0275\u0275elementStart(17, "div", 47)(18, "div", 48)(19, "label", 49);
    \u0275\u0275text(20, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-inputnumber", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_16_Template_p_inputnumber_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.produit.qte_stock, $event) || (ctx_r2.produit.qte_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 48)(23, "label", 51);
    \u0275\u0275text(24, "Co\xFBt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p-inputnumber", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_16_Template_p_inputnumber_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.produit.cout, $event) || (ctx_r2.produit.cout = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 47)(27, "div", 48)(28, "label", 53);
    \u0275\u0275text(29, "Prix achat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p-inputnumber", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_16_Template_p_inputnumber_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.produit.prix_achat, $event) || (ctx_r2.produit.prix_achat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 48)(32, "label", 55);
    \u0275\u0275text(33, "Prix vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p-inputnumber", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_16_Template_p_inputnumber_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.produit.prix_vente, $event) || (ctx_r2.produit.prix_vente = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div")(36, "label", 57);
    \u0275\u0275text(37, "Prix usine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p-inputnumber", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_16_Template_p_inputnumber_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.produit.prix_usine, $event) || (ctx_r2.produit.prix_usine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.produit == null ? null : ctx_r2.produit.id);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.produit.type);
    \u0275\u0275property("options", ctx_r2.typeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitted && !ctx_r2.produit.type);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.produit.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitted && !(ctx_r2.produit.nom == null ? null : ctx_r2.produit.nom.trim()));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.produit.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.produit == null ? null : ctx_r2.produit.id);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.produit.qte_stock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.produit.cout);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.produit.prix_achat);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.produit.prix_vente);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.produit.prix_usine);
  }
}
function ProduitsListe_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 65);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_18_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 66);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_18_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProduit());
    });
    \u0275\u0275elementEnd();
  }
}
var ProduitsListe = class _ProduitsListe {
  router;
  produitService;
  messageService;
  confirmationService;
  produits = [];
  produit = new Produit();
  loading = true;
  ///
  filterFields = ["code", "nom", "description", "type", "statut", "qte_stock"];
  produitDialog = false;
  selectedProduits;
  submitted = false;
  typeOptions = [];
  statutOptions = [];
  dt;
  exportColumns;
  cols;
  constructor(router, produitService, messageService, confirmationService) {
    this.router = router;
    this.produitService = produitService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
  }
  exportCSV() {
    this.dt.exportCSV();
  }
  ngOnInit() {
    this.initOptions();
    this.initColumns();
    this.loadProduits();
  }
  loadProduits() {
    this.produitService.getAll().subscribe({
      next: (produits) => {
        this.produits = produits;
        this.loading = false;
        console.log(this.produits);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des produits :", err), this.loading = false;
      }
    });
  }
  initOptions() {
    this.typeOptions = Object.entries(PRODUIT_TYPE_LABELS).map(([value, label]) => ({
      label,
      value
    }));
    this.statutOptions = Object.entries(PRODUIT_STATUT_LABELS).map(([value, label]) => ({
      label,
      value
    }));
  }
  initColumns() {
    this.cols = [
      {
        field: "code",
        header: "Code",
        customExportHeader: "Product Code"
      },
      { field: "nom", header: "Nom" },
      { field: "image", header: "Image" },
      { field: "prix_vente", header: "Prix" },
      { field: "type", header: "Type" }
    ];
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field
    }));
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  openNew() {
    this.produit = new Produit();
    this.submitted = false;
    this.produitDialog = true;
  }
  editProduct(produit) {
    this.produit = new Produit(__spreadValues({}, produit));
    this.produitDialog = true;
  }
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected products?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        const ids = (this.selectedProduits ?? []).map((item) => item.id).filter((id) => !!id);
        if (ids.length === 0)
          return;
        forkJoin(ids.map((id) => this.produitService.delete(id))).subscribe({
          next: () => {
            this.produits = this.produits.filter((item) => !ids.includes(item.id));
            this.selectedProduits = null;
            this.messageService.add({
              severity: "success",
              summary: "Successful",
              detail: "Products Deleted",
              life: 3e3
            });
          },
          error: (err) => {
            console.error("Erreur lors de la suppression des produits :", err);
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: "Suppression impossible.",
              life: 3e3
            });
          }
        });
      }
    });
  }
  hideDialog() {
    this.produitDialog = false;
    this.submitted = false;
  }
  deleteProduct(produit) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete " + (produit.nom || "this product") + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        if (!produit.id)
          return;
        this.produitService.delete(produit.id).subscribe({
          next: () => {
            this.produits = this.produits.filter((item) => item.id !== produit.id);
            this.messageService.add({
              severity: "success",
              summary: "Successful",
              detail: "Product Deleted",
              life: 3e3
            });
          },
          error: (err) => {
            console.error("Erreur lors de la suppression du produit :", err);
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: "Suppression impossible.",
              life: 3e3
            });
          }
        });
      }
    });
  }
  getSeverity(status) {
    switch (status) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warn";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return "info";
    }
  }
  getStatutSeverity(statut) {
    if (!statut)
      return PRODUIT_STATUT_SEVERITY.brouillon;
    return PRODUIT_STATUT_SEVERITY[statut] ?? PRODUIT_STATUT_SEVERITY.brouillon;
  }
  getStatutLabel(statut) {
    if (!statut)
      return PRODUIT_STATUT_LABELS.brouillon;
    return PRODUIT_STATUT_LABELS[statut] ?? PRODUIT_STATUT_LABELS.brouillon;
  }
  saveProduit() {
    this.submitted = true;
    if (!this.produit.nom?.trim() || !this.produit.type) {
      return;
    }
    const dto = {
      nom: this.produit.nom.trim(),
      type: this.produit.type,
      qte_stock: this.produit.qte_stock ?? 0,
      statut: this.produit.statut,
      cout: this.produit.cout ?? void 0,
      description: this.produit.description ?? void 0,
      prix_usine: this.produit.prix_usine ?? void 0,
      prix_vente: this.produit.prix_vente ?? void 0,
      prix_achat: this.produit.prix_achat ?? void 0
    };
    const isUpdate = !!this.produit.id;
    const request$ = isUpdate ? this.produitService.update(this.produit.id, dto) : this.produitService.create(dto);
    request$.subscribe({
      next: () => {
        this.produitDialog = false;
        this.produit = new Produit();
        this.submitted = false;
        this.loadProduits();
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: isUpdate ? "Product Updated" : "Product Created",
          life: 3e3
        });
      },
      error: (err) => {
        console.error("Erreur lors de la sauvegarde du produit :", err);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Sauvegarde impossible.",
          life: 3e3
        });
      }
    });
  }
  goToNewProduits() {
    this.router.navigate(["/produits/produits-new"]);
  }
  static \u0275fac = function ProduitsListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsListe)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ProduitService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsListe, selectors: [["app-produits-liste"]], viewQuery: function ProduitsListe_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ProduitService, ConfirmationService])], decls: 21, vars: 22, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["content", ""], ["footer", ""], [1, "card"], ["styleClass", "mb-12"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} produits", 3, "selectionChange", "value", "loading", "rows", "columns", "paginator", "globalFilterFields", "tableStyle", "selection", "rowHover", "showCurrentPageReport", "rowsPerPageOptions"], [3, "visibleChange", "visible", "header", "modal"], ["label", "Nouveau", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2", 3, "onClick"], ["severity", "secondary", "label", "Delete", "icon", "pi pi-trash", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search...", 3, "input"], [2, "width", "3rem"], ["pSortableColumn", "code", 2, "min-width", "16rem"], [1, "flex", "items-center", "gap-2"], ["field", "code"], ["pSortableColumn", "nom", 2, "min-width", "16rem"], ["field", "nom"], ["pSortableColumn", "type", 2, "min-width", "10rem"], ["field", "type"], ["pSortableColumn", "qte_stock", 2, "min-width", "12rem"], ["field", "qte_stock"], ["pSortableColumn", "statut", 2, "min-width", "12rem"], ["field", "statut"], [2, "min-width", "12rem"], [3, "value"], [2, "min-width", "16rem"], [3, "value", "severity"], ["icon", "pi pi-pencil", 1, "mr-2", 3, "click", "rounded", "outlined"], ["icon", "pi pi-trash", "severity", "danger", 3, "click", "rounded", "outlined"], ["class", "mb-4", 4, "ngIf"], [1, "flex", "flex-col", "gap-6"], ["for", "type", 1, "block", "font-bold", "mb-4"], ["inputId", "type", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un type", "fluid", "", 3, "ngModelChange", "ngModel", "options"], ["class", "text-red-500", 4, "ngIf"], ["for", "nom", 1, "block", "font-bold", "mb-4"], ["type", "text", "pInputText", "", "id", "nom", "required", "", "autofocus", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "description", 1, "block", "font-bold", "mb-4"], ["id", "description", "pTextarea", "", "rows", "3", "cols", "20", "fluid", "", 3, "ngModelChange", "ngModel"], [4, "ngIf"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-6"], ["for", "qte_stock", 1, "block", "font-bold", "mb-4"], ["id", "qte_stock", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "cout", 1, "block", "font-bold", "mb-4"], ["id", "cout", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "prix_achat", 1, "block", "font-bold", "mb-4"], ["id", "prix_achat", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "prix_vente", 1, "block", "font-bold", "mb-4"], ["id", "prix_vente", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "prix_usine", 1, "block", "font-bold", "mb-4"], ["id", "prix_usine", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], [1, "mb-4"], ["for", "code", 1, "block", "font-bold", "mb-4"], ["type", "text", "pInputText", "", "id", "code", "fluid", "", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-red-500"], ["for", "statut", 1, "block", "font-bold", "mb-4"], ["inputId", "statut", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un statut", "fluid", "", 3, "ngModelChange", "ngModel", "options"], ["label", "Annuler", "icon", "pi pi-times", "text", "", 3, "click"], ["label", "Enregistrer", "icon", "pi pi-check", 3, "click"]], template: function ProduitsListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 8)(2, "p-toolbar", 9);
      \u0275\u0275template(3, ProduitsListe_ng_template_3_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, ProduitsListe_ng_template_5_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-table", 10, 2);
      \u0275\u0275twoWayListener("selectionChange", function ProduitsListe_Template_p_table_selectionChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedProduits, $event) || (ctx.selectedProduits = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, ProduitsListe_ng_template_9_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, ProduitsListe_ng_template_11_Template, 25, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(13, ProduitsListe_ng_template_13_Template, 16, 11, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p-dialog", 11);
      \u0275\u0275twoWayListener("visibleChange", function ProduitsListe_Template_p_dialog_visibleChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.produitDialog, $event) || (ctx.produitDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(16, ProduitsListe_ng_template_16_Template, 39, 13, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(18, ProduitsListe_ng_template_18_Template, 2, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "p-confirmdialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.produits)("loading", ctx.loading)("rows", 10)("columns", ctx.cols)("paginator", true)("globalFilterFields", ctx.filterFields)("tableStyle", \u0275\u0275pureFunction0(18, _c1));
      \u0275\u0275twoWayProperty("selection", ctx.selectedProduits);
      \u0275\u0275property("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(19, _c2));
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c3));
      \u0275\u0275twoWayProperty("visible", ctx.produitDialog);
      \u0275\u0275property("header", (ctx.produit == null ? null : ctx.produit.id) ? "Modifier un produit" : "Nouveau produit")("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c4));
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    TableCheckbox,
    TableHeaderCheckbox,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    RequiredValidator,
    NgModel,
    ButtonModule,
    Button,
    RippleModule,
    ToastModule,
    Toast,
    ToolbarModule,
    Toolbar,
    RatingModule,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    SelectModule,
    Select,
    RadioButtonModule,
    InputNumberModule,
    InputNumber,
    DialogModule,
    Dialog,
    TagModule,
    Tag,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    ConfirmDialogModule,
    ConfirmDialog
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitsListe, [{
    type: Component,
    args: [{ selector: "app-produits-liste", standalone: true, imports: [
      CommonModule,
      TableModule,
      FormsModule,
      ButtonModule,
      RippleModule,
      ToastModule,
      ToolbarModule,
      RatingModule,
      InputTextModule,
      TextareaModule,
      SelectModule,
      RadioButtonModule,
      InputNumberModule,
      DialogModule,
      TagModule,
      InputIconModule,
      IconFieldModule,
      ConfirmDialogModule
    ], providers: [MessageService, ProduitService, ConfirmationService], template: `<p-toast></p-toast>\r
  <div class="card">\r
            <p-toolbar styleClass="mb-12">\r
                <ng-template #start>\r
                    <!-- <p-button label="Nouveau" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="goToNewProduits()" /> -->\r
                    <p-button label="Nouveau" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()" />\r
                    <p-button severity="secondary" label="Delete" icon="pi pi-trash" outlined (onClick)="deleteSelectedProducts()" [disabled]="!selectedProduits || !selectedProduits.length" />\r
                </ng-template>\r
\r
                <ng-template #end>\r
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />\r
                </ng-template>\r
            </p-toolbar>\r
\r
            <p-table
                #dt
                [value]="produits"
                [loading]="loading"
                [rows]="10"
                [columns]="cols"
                [paginator]="true"
                [globalFilterFields]="filterFields"\r
                [tableStyle]="{ 'min-width': '75rem' }"\r
                [(selection)]="selectedProduits" \r
                [rowHover]="true"\r
                dataKey="id"\r
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} produits"\r
                [showCurrentPageReport]="true"\r
                [rowsPerPageOptions]="[10, 20, 30]"\r
            >\r
                <ng-template #caption>\r
                    <div class="flex items-center justify-between">\r
                        <h5 class="m-0">Manage Products</h5>\r
                        <p-iconfield>\r
                            <p-inputicon styleClass="pi pi-search" />\r
                            <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search..." />\r
                        </p-iconfield>\r
                    </div>\r
                </ng-template>\r
              <ng-template #header>\r
                    <tr>\r
                        <th style="width: 3rem">\r
                            <p-tableHeaderCheckbox />\r
                        </th>\r
                        <th style="min-width: 16rem" pSortableColumn="code">\r
                            <span class="flex items-center gap-2">Code\r
                            <p-sortIcon field="code" /></span>\r
                        </th>\r
                        <th pSortableColumn="nom" style="min-width:16rem">\r
                            <span class="flex items-center gap-2">Nom\r
                            <p-sortIcon field="nom" /></span>\r
                        </th>\r
                        <!-- <th>Image</th> -->\r
                        <!-- <th pSortableColumn="price" style="min-width: 8rem">\r
                            <span class="flex items-center gap-2">Prix\r
                            <p-sortIcon field="price" /></span>\r
                        </th> -->\r
                        <th pSortableColumn="type" style="min-width:10rem">\r
                            <span class="flex items-center gap-2">Type\r
                            <p-sortIcon field="type" /></span>\r
                        </th>\r
                        <th pSortableColumn="qte_stock" style="min-width: 12rem">\r
                            <span class="flex items-center gap-2">Qt\xE9\r
                            <p-sortIcon field="qte_stock" /></span>\r
                        </th>\r
                        <th pSortableColumn="statut" style="min-width: 12rem">\r
                            <span class="flex items-center gap-2">Status\r
                            <p-sortIcon field="statut" /></span>\r
                        </th>\r
                        <th style="min-width: 12rem">Action</th>\r
                    </tr>\r
                </ng-template>\r
                   <ng-template #body let-produit>\r
                    <tr>\r
                        <td style="width: 3rem">\r
                            <p-tableCheckbox [value]="produit" />\r
                        </td>\r
                        <td style="min-width: 12rem">{{ produit.code }}</td>\r
                       <td style="min-width: 16rem">{{ produit.nom }}</td>\r
                        <!-- <td>\r
                            <img [src]="'/demo/images/produit/' + produit.image" [alt]="produit.name" style="width: 64px" class="rounded" /> \r
                        </td> -->\r
                         <td>{{ produit.type }}</td>\r
                        <td>{{ produit.qte_stock }}</td>\r
                        <td>\r
                            <p-tag\r
                                [value]="getStatutLabel(produit.statut)"\r
                                [severity]="getStatutSeverity(produit.statut)"\r
                            />\r
                        </td>\r
                        <td>\r
                            <p-button icon="pi pi-pencil" class="mr-2" [rounded]="true" [outlined]="true" (click)="editProduct(produit)" />\r
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteProduct(produit)" />\r
                        </td>\r
                    </tr>\r
                </ng-template> \r
            </p-table>\r
        </div>\r
\r
\r
\r
        <p-dialog [(visible)]="produitDialog" [style]="{ width: '720px', maxWidth: '95vw' }" [header]="produit?.id ? 'Modifier un produit' : 'Nouveau produit'" [modal]="true">\r
            <ng-template #content>\r
                \r
                    <div *ngIf="produit?.id" class="mb-4">\r
                        <label for="code" class="block font-bold mb-4">Code</label>\r
                        <input type="text" pInputText id="code" [(ngModel)]="produit.code" [disabled]="true" fluid />\r
                    </div>\r
\r
                <div class="flex flex-col gap-6">\r
                    <div>\r
                        <label for="type" class="block font-bold mb-4">Type</label>\r
                        <p-select\r
                            [(ngModel)]="produit.type"\r
                            inputId="type"\r
                            [options]="typeOptions"\r
                            optionLabel="label"\r
                            optionValue="value"\r
                            placeholder="S\xE9lectionner un type"\r
                            fluid\r
                        />\r
                        <small class="text-red-500" *ngIf="submitted && !produit.type">Type obligatoire.</small>\r
                    </div>\r
\r
                    <div>\r
                        <label for="nom" class="block font-bold mb-4">Nom</label>\r
                        <input type="text" pInputText id="nom" [(ngModel)]="produit.nom" required autofocus fluid />\r
                        <small class="text-red-500" *ngIf="submitted && !produit.nom?.trim()">Nom obligatoire.</small>\r
                    </div>\r
\r
\r
                    <div>\r
                        <label for="description" class="block font-bold mb-4">Description</label>\r
                        <textarea id="description" pTextarea [(ngModel)]="produit.description" rows="3" cols="20" fluid></textarea>\r
                    </div>\r
\r
                    <div *ngIf="produit?.id">\r
                        <label for="statut" class="block font-bold mb-4">Statut</label>\r
                        <p-select\r
                            [(ngModel)]="produit.statut"\r
                            inputId="statut"\r
                            [options]="statutOptions"\r
                            optionLabel="label"\r
                            optionValue="value"\r
                            placeholder="S\xE9lectionner un statut"\r
                            fluid\r
                        />\r
                    </div>\r
\r
                    <div class="grid grid-cols-12 gap-4">\r
                        <div class="col-span-6">\r
                            <label for="qte_stock" class="block font-bold mb-4">Quantit\xE9</label>\r
                            <p-inputnumber id="qte_stock" [(ngModel)]="produit.qte_stock" fluid />\r
                        </div>\r
                        <div class="col-span-6">\r
                            <label for="cout" class="block font-bold mb-4">Co\xFBt</label>\r
                            <p-inputnumber id="cout" [(ngModel)]="produit.cout" mode="currency" currency="GNF" locale="fr-GN" fluid />\r
                        </div>\r
                    </div>\r
\r
                    <div class="grid grid-cols-12 gap-4">\r
                        <div class="col-span-6">\r
                            <label for="prix_achat" class="block font-bold mb-4">Prix achat</label>\r
                            <p-inputnumber id="prix_achat" [(ngModel)]="produit.prix_achat" mode="currency" currency="GNF" locale="fr-GN" fluid />\r
                        </div>\r
                        <div class="col-span-6">\r
                            <label for="prix_vente" class="block font-bold mb-4">Prix vente</label>\r
                            <p-inputnumber id="prix_vente" [(ngModel)]="produit.prix_vente" mode="currency" currency="GNF" locale="fr-GN" fluid />\r
                        </div>\r
                    </div>\r
\r
                    <div>\r
                        <label for="prix_usine" class="block font-bold mb-4">Prix usine</label>\r
                        <p-inputnumber id="prix_usine" [(ngModel)]="produit.prix_usine" mode="currency" currency="GNF" locale="fr-GN" fluid />\r
                    </div>\r
                </div>\r
            </ng-template>\r
\r
            <ng-template #footer>\r
                <p-button label="Annuler" icon="pi pi-times" text (click)="hideDialog()" />\r
                <p-button label="Enregistrer" icon="pi pi-check" (click)="saveProduit()" />\r
            </ng-template>\r
        </p-dialog>\r
\r
        <p-confirmdialog [style]="{ width: '450px' }" />\r
\r
\r
` }]
  }], () => [{ type: Router }, { type: ProduitService }, { type: MessageService }, { type: ConfirmationService }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsListe, { className: "ProduitsListe", filePath: "src/app/pages/produits/produits-liste/produits-liste.ts", lineNumber: 75 });
})();

// src/app/pages/produits/produits-form/produits-form.ts
var _c02 = ["buttonEl"];
function ProduitsForm_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function ProduitsForm_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableEditing());
    });
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Type de produit obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getPrixHelperText(), " ");
  }
}
function ProduitsForm_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Nom du produit obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_21_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_21_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, ' Prix usine obligatoire pour "Fabricable". ');
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "label", 38);
    \u0275\u0275text(2, " Prix usine (GNF) ");
    \u0275\u0275template(3, ProduitsForm_div_21_span_3_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-inputnumber", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_21_Template_p_inputnumber_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_usine, $event) || (ctx_r1.product.prix_usine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProduitsForm_div_21_small_5_Template, 2, 0, "small", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isEditing && ctx_r1.isPrixUsineRequired());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_usine);
    \u0275\u0275property("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixUsineRequired() && !ctx_r1.product.prix_usine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixUsineRequired() && !ctx_r1.product.prix_usine && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_22_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_22_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Prix d'achat obligatoire pour ce type. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "label", 41);
    \u0275\u0275text(2, " Prix achat (GNF) ");
    \u0275\u0275template(3, ProduitsForm_div_22_span_3_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-inputnumber", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_22_Template_p_inputnumber_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_achat, $event) || (ctx_r1.product.prix_achat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProduitsForm_div_22_small_5_Template, 2, 0, "small", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.isPrixUsineVisible() ? "lg:col-span-4" : "lg:col-span-6");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isEditing && ctx_r1.isPrixAchatRequired());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_achat);
    \u0275\u0275property("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixAchatRequired() && !ctx_r1.product.prix_achat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixAchatRequired() && !ctx_r1.product.prix_achat && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_23_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_23_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Prix de vente obligatoire pour ce type. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "label", 43);
    \u0275\u0275text(2, " Prix vente (GNF) ");
    \u0275\u0275template(3, ProduitsForm_div_23_span_3_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-inputnumber", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_23_Template_p_inputnumber_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_vente, $event) || (ctx_r1.product.prix_vente = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProduitsForm_div_23_small_5_Template, 2, 0, "small", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.isPrixUsineVisible() ? "lg:col-span-4" : "lg:col-span-6");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isEditing && ctx_r1.isPrixVenteRequired());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_vente);
    \u0275\u0275property("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixVenteRequired() && !ctx_r1.product.prix_vente);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixVenteRequired() && !ctx_r1.product.prix_vente && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_24_ng_template_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementStart(2, "span", 53);
    \u0275\u0275text(3, "Ajouter une image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5, "Cliquez pour s\xE9lectionner");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsForm_div_24_ng_template_5_div_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function ProduitsForm_div_24_ng_template_5_div_2_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeImage($event));
    });
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_24_ng_template_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275element(2, "img", 57);
    \u0275\u0275template(3, ProduitsForm_div_24_ng_template_5_div_2_button_3_Template, 2, 0, "button", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.imagePreview || ctx_r1.product.getImageUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.fieldsDisabled);
  }
}
function ProduitsForm_div_24_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function ProduitsForm_div_24_ng_template_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext();
      const fileUploader_r8 = \u0275\u0275reference(4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.fieldsDisabled && fileUploader_r8.advancedFileInput.nativeElement.click());
    });
    \u0275\u0275template(1, ProduitsForm_div_24_ng_template_5_div_1_Template, 6, 0, "div", 49)(2, ProduitsForm_div_24_ng_template_5_div_2_Template, 4, 2, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.imagePreview && !ctx_r1.product.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imagePreview || ctx_r1.product.image_url);
  }
}
function ProduitsForm_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "label", 46);
    \u0275\u0275text(2, " Image du produit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-fileUpload", 47, 0);
    \u0275\u0275listener("onSelect", function ProduitsForm_div_24_Template_p_fileUpload_onSelect_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpload($event));
    });
    \u0275\u0275template(5, ProduitsForm_div_24_ng_template_5_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("customUpload", true)("multiple", false)("showUploadButton", false)("showCancelButton", false)("auto", true)("disabled", ctx_r1.fieldsDisabled);
  }
}
function ProduitsForm_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "label", 46);
    \u0275\u0275text(2, " Image du produit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61);
    \u0275\u0275element(4, "img", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.product.getImageUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ProduitsForm_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2, " Statut ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "div", 29)(5, "span", 62);
    \u0275\u0275text(6, "Statut:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 63);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.product.statut);
  }
}
function ProduitsForm_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, " (non applicable) ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2, "Le stock n'est pas g\xE9r\xE9 pour les services. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "button", 67);
    \u0275\u0275listener("click", function ProduitsForm_div_40_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 68);
    \u0275\u0275listener("click", function ProduitsForm_div_40_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode === "create" ? ctx_r1.onCancel() : ctx_r1.cancelEditing());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r1.mode === "create" ? "Enregistrer" : "Sauvegarder")("loading", ctx_r1.loading)("disabled", !ctx_r1.isValid() || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var ProduitsForm = class _ProduitsForm {
  buttonEl;
  mode = "create";
  initialData = null;
  loading = false;
  submitForm = new EventEmitter();
  cancel = new EventEmitter();
  submitted = false;
  isEditing = false;
  // Options de type avec labels français
  typeOptions = [
    { label: PRODUIT_TYPE_LABELS.materiel, value: "materiel" },
    { label: PRODUIT_TYPE_LABELS.service, value: "service" },
    { label: PRODUIT_TYPE_LABELS.fabricable, value: "fabricable" },
    { label: PRODUIT_TYPE_LABELS.achat_vente, value: "achat_vente" }
  ];
  // Options de statut avec labels français
  statutOptions = [
    { label: PRODUIT_STATUT_LABELS.brouillon, value: "brouillon" },
    { label: PRODUIT_STATUT_LABELS.actif, value: "actif" },
    { label: PRODUIT_STATUT_LABELS.inactif, value: "inactif" },
    { label: PRODUIT_STATUT_LABELS.rupture_stock, value: "rupture_stock" }
  ];
  // Produit est une class -> on instancie
  product = new Produit({
    nom: "",
    code: "",
    prix_usine: null,
    prix_achat: null,
    prix_vente: null,
    qte_stock: 0,
    cout: null,
    statut: "brouillon",
    type: "materiel",
    in_stock: true,
    is_archived: false,
    description: null,
    image_url: null
  });
  selectedImageFile = null;
  imagePreview = null;
  ngOnInit() {
    if (this.initialData) {
      this.product = new Produit(this.initialData);
      this.imagePreview = this.initialData.image_url;
    }
    if (this.mode === "create") {
      this.isEditing = true;
    }
  }
  // =========================
  // VISIBILITÉ / OBLIGATION
  // =========================
  // Règles métier:
  // - materiel     → prix_achat obligatoire
  // - service      → prix_vente obligatoire, qte_stock = 0 (désactivé)
  // - fabricable   → prix_usine + prix_vente obligatoires
  // - achat_vente  → prix_achat + prix_vente obligatoires
  isPrixUsineVisible() {
    return this.product.type === "fabricable";
  }
  isPrixUsineRequired() {
    return this.product.type === "fabricable";
  }
  isPrixVenteVisible() {
    return ["service", "fabricable", "achat_vente"].includes(this.product.type);
  }
  isPrixVenteRequired() {
    return ["service", "fabricable", "achat_vente"].includes(this.product.type);
  }
  isPrixAchatVisible() {
    return ["materiel", "achat_vente"].includes(this.product.type);
  }
  isPrixAchatRequired() {
    return ["materiel", "achat_vente"].includes(this.product.type);
  }
  // Pour le type "service", qte_stock doit être 0 et désactivé
  isQteStockDisabled() {
    return this.product.type === "service" || this.fieldsDisabled;
  }
  // =========================
  // HELPERS NUMÉRIQUES
  // =========================
  isPositive(value) {
    return typeof value === "number" && value > 0;
  }
  // =========================
  // TYPE CHANGE
  // =========================
  onTypeChange() {
    if (!this.isPrixUsineVisible())
      this.product.prix_usine = null;
    if (!this.isPrixVenteVisible())
      this.product.prix_vente = null;
    if (!this.isPrixAchatVisible())
      this.product.prix_achat = null;
    if (this.product.type === "service") {
      this.product.qte_stock = 0;
    }
  }
  // =========================
  // VALIDATION
  // =========================
  isValid() {
    if (!this.product.nom?.trim() || !this.product.type)
      return false;
    if (this.isPrixUsineRequired() && !this.isPositive(this.product.prix_usine))
      return false;
    if (this.isPrixVenteRequired() && !this.isPositive(this.product.prix_vente))
      return false;
    if (this.isPrixAchatRequired() && !this.isPositive(this.product.prix_achat))
      return false;
    return true;
  }
  // =========================
  // EDIT MODE
  // =========================
  enableEditing() {
    this.isEditing = true;
  }
  cancelEditing() {
    this.isEditing = false;
    this.submitted = false;
    this.selectedImageFile = null;
    if (this.initialData) {
      this.product = new Produit(this.initialData);
      this.imagePreview = this.initialData.image_url;
    } else {
      this.resetForm();
    }
  }
  // =========================
  // IMAGE UPLOAD
  // =========================
  onUpload(event) {
    if (event?.files?.length) {
      const file = event.files[0];
      this.selectedImageFile = file;
      const reader = new FileReader();
      reader.onload = (e) => this.imagePreview = e.target.result;
      reader.readAsDataURL(file);
    }
  }
  removeImage(event) {
    event.stopPropagation();
    this.selectedImageFile = null;
    this.imagePreview = null;
    this.product.image_url = null;
  }
  // =========================
  // SUBMIT
  // =========================
  onSubmit() {
    this.submitted = true;
    if (!this.isValid())
      return;
    const dto = {
      nom: this.product.nom.trim(),
      type: this.product.type,
      qte_stock: this.product.qte_stock,
      description: this.product.description?.trim() || void 0,
      cout: this.product.cout ?? void 0
    };
    if (this.mode === "edit") {
      dto.statut = this.product.statut;
    }
    if (this.product.prix_usine !== null)
      dto.prix_usine = this.product.prix_usine;
    if (this.product.prix_vente !== null)
      dto.prix_vente = this.product.prix_vente;
    if (this.product.prix_achat !== null)
      dto.prix_achat = this.product.prix_achat;
    if (this.selectedImageFile)
      dto.image = this.selectedImageFile;
    console.log("DTO:", dto);
    this.submitForm.emit(dto);
  }
  // =========================
  // CANCEL
  // =========================
  onCancel() {
    this.cancel.emit();
  }
  // =========================
  // UI STATE
  // =========================
  get fieldsDisabled() {
    return this.mode === "edit" && !this.isEditing || this.loading;
  }
  getPrixHelperText() {
    switch (this.product.type) {
      case "materiel":
        return "Prix d'achat obligatoire";
      case "service":
        return "Prix de vente obligatoire (stock d\xE9sactiv\xE9)";
      case "fabricable":
        return "Prix usine et prix de vente obligatoires";
      case "achat_vente":
        return "Prix d'achat et prix de vente obligatoires";
      default:
        return "S\xE9lectionnez un type de produit";
    }
  }
  // =========================
  // RESET
  // =========================
  resetForm() {
    this.submitted = false;
    this.selectedImageFile = null;
    this.imagePreview = null;
    this.product = new Produit({
      nom: "",
      code: "",
      prix_usine: null,
      prix_achat: null,
      prix_vente: null,
      qte_stock: 0,
      cout: null,
      statut: "brouillon",
      type: "materiel",
      in_stock: true,
      is_archived: false,
      description: null,
      image_url: null
    });
  }
  static \u0275fac = function ProduitsForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsForm, selectors: [["app-produits-form"]], viewQuery: function ProduitsForm_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.buttonEl = _t);
    }
  }, inputs: { mode: "mode", initialData: "initialData", loading: "loading" }, outputs: { submitForm: "submitForm", cancel: "cancel" }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 41, vars: 29, consts: [["fileUploader", ""], ["content", ""], [1, "card"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold"], ["pButton", "", "pRipple", "", "label", "Modifier", "icon", "pi pi-pencil", "severity", "warn", "class", "w-auto", 3, "click", 4, "ngIf"], [1, "grid", "grid-cols-12", "gap-4", "flex-wrap"], [1, "col-span-12", "lg:col-span-8"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12"], [1, "mb-3", "text-surface-900", "dark:text-surface-0", "font-bold", "block"], ["class", "text-red-500", 4, "ngIf"], ["optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner le type", "fluid", "", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled", "invalid"], ["class", "text-blue-600 block mt-1", 4, "ngIf"], [1, "col-span-12", "mb-3"], ["for", "nom", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "nom", "pInputText", "", "type", "text", "placeholder", "Ex: iPhone 15 Pro", "fluid", "", 3, "ngModelChange", "ngModel", "disabled", "invalid"], ["class", "col-span-12 lg:col-span-4", 4, "ngIf"], ["class", "col-span-12", 3, "ngClass", 4, "ngIf"], ["class", "col-span-12 mt-4", 4, "ngIf"], [1, "col-span-12", "lg:col-span-4", "flex", "flex-col", "gap-y-4", "mt-8"], ["class", "border border-surface-200 dark:border-surface-700 rounded", 4, "ngIf"], [1, "border", "border-surface-200", "dark:border-surface-700", "flex", "justify-between", "items-center", "px-4", "rounded"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "p-4"], [3, "ngModelChange", "ngModel", "disabled"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "block", "border-b", "border-surface-200", "dark:border-surface-700", "p-4"], ["class", "text-sm font-normal text-gray-500", 4, "ngIf"], [1, "p-4"], [1, "bg-surface-100", "dark:bg-surface-700", "py-2", "px-4", "flex", "items-center", "rounded"], ["placeholder", "0", "fluid", "", 3, "ngModelChange", "ngModel", "showButtons", "min", "disabled"], ["class", "text-gray-500 block mt-2", 4, "ngIf"], ["class", "flex gap-2", 4, "ngIf"], ["pButton", "", "pRipple", "", "label", "Modifier", "icon", "pi pi-pencil", "severity", "warn", 1, "w-auto", 3, "click"], [1, "text-red-500"], [1, "text-blue-600", "block", "mt-1"], [1, "pi", "pi-info-circle", "mr-1"], [1, "col-span-12", "lg:col-span-4"], ["for", "prix_usine", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["inputId", "prix_usine", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "0", "fluid", "", 3, "ngModelChange", "ngModel", "disabled", "invalid"], [1, "col-span-12", 3, "ngClass"], ["for", "prix_achat", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["inputId", "prix_achat", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "0", "fluid", "", 3, "ngModelChange", "ngModel", "disabled", "invalid"], ["for", "prix_vente", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["inputId", "prix_vente", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "0", "fluid", "", 3, "ngModelChange", "ngModel", "disabled", "invalid"], [1, "col-span-12", "mt-4"], [1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["name", "image", "accept", "image/*", "styleClass", "border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 p-0 rounded", 3, "onSelect", "customUpload", "multiple", "showUploadButton", "showCancelButton", "auto", "disabled"], [1, "w-full", "py-4", 2, "cursor", "pointer", 3, "click"], ["class", "h-40 flex flex-col justify-center items-center", 4, "ngIf"], ["class", "relative w-full flex justify-center", 4, "ngIf"], [1, "h-40", "flex", "flex-col", "justify-center", "items-center"], [1, "pi", "pi-image", "text-primary", "text-4xl", "mb-4"], [1, "block", "font-semibold", "text-surface-900", "dark:text-surface-0", "text-lg"], [1, "text-surface-500", "text-sm", "mt-1"], [1, "relative", "w-full", "flex", "justify-center"], [1, "relative"], ["alt", "Image du produit", 1, "max-h-60", "rounded", "shadow", "object-contain", 3, "src"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", "severity", "danger", "class", "absolute -top-2 -right-2", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", "severity", "danger", 1, "absolute", "-top-2", "-right-2", 3, "click"], [1, "pi", "pi-times"], [1, "flex", "justify-center"], [1, "text-black/90", "dark:text-surface-0", "font-bold", "mr-4"], [1, "text-black/60", "dark:text-surface-0", "font-semibold"], [1, "text-sm", "font-normal", "text-gray-500"], [1, "text-gray-500", "block", "mt-2"], [1, "flex", "gap-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "flex-1", 3, "click", "label", "loading", "disabled"], ["pButton", "", "pRipple", "", "label", "Annuler", "icon", "pi pi-times", "severity", "secondary", 1, "flex-1", 3, "click", "disabled"]], template: function ProduitsForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, ProduitsForm_button_4_Template, 1, 0, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-fluid", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "label", 10);
      \u0275\u0275text(10, " Type de produit ");
      \u0275\u0275template(11, ProduitsForm_span_11_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p-select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.type, $event) || (ctx.product.type = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function ProduitsForm_Template_p_select_onChange_12_listener() {
        return ctx.onTypeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, ProduitsForm_small_13_Template, 2, 0, "small", 11)(14, ProduitsForm_small_14_Template, 3, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 14)(16, "label", 15);
      \u0275\u0275text(17, " Nom du produit ");
      \u0275\u0275template(18, ProduitsForm_span_18_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.nom, $event) || (ctx.product.nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, ProduitsForm_small_20_Template, 2, 0, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, ProduitsForm_div_21_Template, 6, 5, "div", 17)(22, ProduitsForm_div_22_Template, 6, 6, "div", 18)(23, ProduitsForm_div_23_Template, 6, 6, "div", 18)(24, ProduitsForm_div_24_Template, 7, 6, "div", 19)(25, ProduitsForm_div_25_Template, 5, 1, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 20);
      \u0275\u0275template(27, ProduitsForm_div_27_Template, 9, 1, "div", 21);
      \u0275\u0275elementStart(28, "div", 22)(29, "span", 23);
      \u0275\u0275text(30, "En stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p-toggleswitch", 24);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_toggleswitch_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.in_stock, $event) || (ctx.product.in_stock = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 25)(33, "span", 26);
      \u0275\u0275text(34, " Quantit\xE9 en stock ");
      \u0275\u0275template(35, ProduitsForm_span_35_Template, 2, 0, "span", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 28)(37, "div", 29)(38, "p-inputnumber", 30);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.qte_stock, $event) || (ctx.product.qte_stock = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(39, ProduitsForm_small_39_Template, 3, 0, "small", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(40, ProduitsForm_div_40_Template, 3, 4, "div", 32);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.mode === "create" ? "Cr\xE9er un produit" : "D\xE9tails du produit", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "edit" && !ctx.isEditing);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.typeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.type);
      \u0275\u0275property("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && !ctx.product.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !ctx.product.type && ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.product.type && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.product.nom);
      \u0275\u0275property("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && !(ctx.product.nom == null ? null : ctx.product.nom.trim()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.product.nom == null ? null : ctx.product.nom.trim()) && ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPrixUsineVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPrixAchatVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPrixVenteVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing && ctx.product.image_url);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.mode === "edit");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.in_stock);
      \u0275\u0275property("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.product.type === "service");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.qte_stock);
      \u0275\u0275property("showButtons", true)("min", 0)("disabled", ctx.isQteStockDisabled());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.product.type === "service");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    EditorModule,
    InputTextModule,
    InputText,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    FileUploadModule,
    FileUpload,
    ButtonModule,
    ButtonDirective,
    SelectModule,
    Select,
    ToggleSwitchModule,
    ToggleSwitch,
    RippleModule,
    Ripple,
    ChipModule,
    FluidModule,
    Fluid,
    InputNumberModule,
    InputNumber
  ], styles: ["\n\n[_nghost-%COMP%]     .p-fileupload-header {\n  display: none;\n}\n[_nghost-%COMP%]     .p-fileupload-file-list {\n  display: none;\n}\n[_nghost-%COMP%]     .p-fileupload-content {\n  height: 20rem;\n}\n/*# sourceMappingURL=produits-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitsForm, [{
    type: Component,
    args: [{ selector: "app-produits-form", standalone: true, imports: [
      CommonModule,
      EditorModule,
      InputTextModule,
      FormsModule,
      FileUploadModule,
      ButtonModule,
      SelectModule,
      ToggleSwitchModule,
      RippleModule,
      ChipModule,
      FluidModule,
      InputNumberModule
    ], providers: [MessageService], template: `<div class="card">\r
    <div class="flex justify-between items-center mb-6">\r
        <span class="text-surface-900 dark:text-surface-0 text-xl font-bold">\r
            {{ mode === 'create' ? 'Cr\xE9er un produit' : 'D\xE9tails du produit' }}\r
        </span>\r
        \r
        <!-- Bouton Modifier -->\r
        <button\r
            *ngIf="mode === 'edit' && !isEditing"\r
            pButton\r
            pRipple\r
            label="Modifier"\r
            icon="pi pi-pencil"\r
            severity="warn"\r
            (click)="enableEditing()"\r
            class="w-auto">\r
        </button>\r
    </div>\r
\r
    <p-fluid class="grid grid-cols-12 gap-4 flex-wrap">\r
        <div class="col-span-12 lg:col-span-8">\r
            <div class="grid grid-cols-12 gap-4">\r
                \r
                <!-- Type de produit -->\r
                <div class="col-span-12">\r
                    <label class="mb-3 text-surface-900 dark:text-surface-0 font-bold block">\r
                        Type de produit <span class="text-red-500" *ngIf="isEditing">*</span>\r
                    </label>\r
                    <p-select \r
                        [options]="typeOptions" \r
                        [(ngModel)]="product.type" \r
                        optionLabel="label"\r
                        optionValue="value"\r
                        placeholder="S\xE9lectionner le type" \r
                        (onChange)="onTypeChange()"\r
                        [disabled]="fieldsDisabled"\r
                        [invalid]="submitted && !product.type"\r
                        fluid>\r
                    </p-select>\r
                    <small class="text-red-500" *ngIf="submitted && !product.type && isEditing">\r
                        Type de produit obligatoire.\r
                    </small>\r
                    <small class="text-blue-600 block mt-1" *ngIf="product.type && isEditing">\r
                        <i class="pi pi-info-circle mr-1"></i>{{ getPrixHelperText() }}\r
                    </small>\r
                </div> \r
                \r
                <!-- Nom du produit -->\r
                <div class="col-span-12 mb-3">\r
                    <label for="nom" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
                        Nom du produit <span class="text-red-500" *ngIf="isEditing">*</span>\r
                    </label>\r
                    <input \r
                        id="nom"\r
                        pInputText \r
                        type="text" \r
                        placeholder="Ex: iPhone 15 Pro" \r
                        [(ngModel)]="product.nom"\r
                        [disabled]="fieldsDisabled"\r
                        [invalid]="submitted && !product.nom?.trim()"\r
                        fluid />\r
                    <small class="text-red-500" *ngIf="submitted && !product.nom?.trim() && isEditing">\r
                        Nom du produit obligatoire.\r
                    </small>\r
                </div>\r
\r
                <!-- Prix usine (Fabricable uniquement) -->\r
                <div class="col-span-12 lg:col-span-4" *ngIf="isPrixUsineVisible()">\r
                    <label for="prix_usine" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
                        Prix usine (GNF) <span class="text-red-500" *ngIf="isEditing && isPrixUsineRequired()">*</span>\r
                    </label>\r
                    <p-inputnumber\r
                        inputId="prix_usine"\r
                        [(ngModel)]="product.prix_usine"\r
                        mode="currency"\r
                        currency="GNF"\r
                        locale="fr-GN"\r
                        [disabled]="fieldsDisabled"\r
                        [invalid]="submitted && isPrixUsineRequired() && !product.prix_usine"\r
                        placeholder="0"\r
                        fluid>\r
                    </p-inputnumber>\r
                    <small class="text-red-500" *ngIf="submitted && isPrixUsineRequired() && !product.prix_usine && isEditing">\r
                        Prix usine obligatoire pour "Fabricable".\r
                    </small>\r
                </div>\r
\r
                <!-- Prix achat (Mat\xE9riel, Achat/Vente) -->\r
                <div class="col-span-12" [ngClass]="isPrixUsineVisible() ? 'lg:col-span-4' : 'lg:col-span-6'" *ngIf="isPrixAchatVisible()">\r
                    <label for="prix_achat" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
                        Prix achat (GNF) <span class="text-red-500" *ngIf="isEditing && isPrixAchatRequired()">*</span>\r
                    </label>\r
                    <p-inputnumber\r
                        inputId="prix_achat"\r
                        [(ngModel)]="product.prix_achat"\r
                        mode="currency"\r
                        currency="GNF"\r
                        locale="fr-GN"\r
                        [disabled]="fieldsDisabled"\r
                        [invalid]="submitted && isPrixAchatRequired() && !product.prix_achat"\r
                        placeholder="0"\r
                        fluid>\r
                    </p-inputnumber>\r
                    <small class="text-red-500" *ngIf="submitted && isPrixAchatRequired() && !product.prix_achat && isEditing">\r
                        Prix d'achat obligatoire pour ce type.\r
                    </small>\r
                </div>\r
\r
                <!-- Prix vente (Service, Fabricable, Achat/Vente) -->\r
                <div class="col-span-12" [ngClass]="isPrixUsineVisible() ? 'lg:col-span-4' : 'lg:col-span-6'" *ngIf="isPrixVenteVisible()">\r
                    <label for="prix_vente" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
                        Prix vente (GNF) <span class="text-red-500" *ngIf="isEditing && isPrixVenteRequired()">*</span>\r
                    </label>\r
                    <p-inputnumber\r
                        inputId="prix_vente"\r
                        [(ngModel)]="product.prix_vente"\r
                        mode="currency"\r
                        currency="GNF"\r
                        locale="fr-GN"\r
                        [disabled]="fieldsDisabled"\r
                        [invalid]="submitted && isPrixVenteRequired() && !product.prix_vente"\r
                        placeholder="0"\r
                        fluid>\r
                    </p-inputnumber>\r
                    <small class="text-red-500" *ngIf="submitted && isPrixVenteRequired() && !product.prix_vente && isEditing">\r
                        Prix de vente obligatoire pour ce type.\r
                    </small>\r
                </div>\r
\r
                <!-- Upload image -->\r
                <div class="col-span-12 mt-4" *ngIf="isEditing">\r
                    <label class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
                        Image du produit\r
                    </label>\r
                    <p-fileUpload\r
                        #fileUploader\r
                        name="image"\r
                        (onSelect)="onUpload($event)"\r
                        [customUpload]="true"\r
                        [multiple]="false"\r
                        accept="image/*"\r
                        [showUploadButton]="false"\r
                        [showCancelButton]="false"\r
                        [auto]="true"\r
                        [disabled]="fieldsDisabled"\r
                        styleClass="border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 p-0 rounded">\r
                        <ng-template #content>\r
                            <div class="w-full py-4" style="cursor: pointer" (click)="!fieldsDisabled && fileUploader.advancedFileInput.nativeElement.click()">\r
                                <!-- Aucune image -->\r
                                <div *ngIf="!imagePreview && !product.image_url" class="h-40 flex flex-col justify-center items-center">\r
                                    <i class="pi pi-image text-primary text-4xl mb-4"></i>\r
                                    <span class="block font-semibold text-surface-900 dark:text-surface-0 text-lg">Ajouter une image</span>\r
                                    <span class="text-surface-500 text-sm mt-1">Cliquez pour s\xE9lectionner</span>\r
                                </div>\r
                                <!-- Image existante ou preview -->\r
                                <div *ngIf="imagePreview || product.image_url" class="relative w-full flex justify-center">\r
                                    <div class="relative">\r
                                        <img\r
                                            [src]="imagePreview || product.getImageUrl()"\r
                                            alt="Image du produit"\r
                                            class="max-h-60 rounded shadow object-contain" />\r
                                        <button\r
                                            *ngIf="!fieldsDisabled"\r
                                            pButton\r
                                            pRipple\r
                                            rounded\r
                                            type="button"\r
                                            severity="danger"\r
                                            class="absolute -top-2 -right-2"\r
                                            (click)="removeImage($event)">\r
                                            <i class="pi pi-times"></i>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </ng-template>\r
                    </p-fileUpload>\r
                </div>\r
\r
                <!-- Affichage de l'image en mode lecture -->\r
                <div class="col-span-12 mt-4" *ngIf="!isEditing && product.image_url">\r
                    <label class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
                        Image du produit\r
                    </label>\r
                    <div class="flex justify-center">\r
                        <img [src]="product.getImageUrl()" alt="Image du produit" class="max-h-60 rounded shadow object-contain" />\r
                    </div>\r
                </div>\r
                \r
            </div>\r
        </div>\r
\r
        <!-- Sidebar droite -->\r
        <div class="col-span-12 lg:col-span-4 flex flex-col gap-y-4 mt-8">\r
            <!-- Statut (uniquement en mode \xE9dition) -->\r
            <div class="border border-surface-200 dark:border-surface-700 rounded" *ngIf="mode === 'edit'">\r
                <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">\r
                    Statut\r
                </span>\r
                <div class="p-4">\r
                    <div class="bg-surface-100 dark:bg-surface-700 py-2 px-4 flex items-center rounded">\r
                        <span class="text-black/90 dark:text-surface-0 font-bold mr-4">Statut:</span>\r
                        <span class="text-black/60 dark:text-surface-0 font-semibold">{{ product.statut }}</span>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <!-- En stock -->\r
            <div class="border border-surface-200 dark:border-surface-700 flex justify-between items-center px-4 rounded">\r
                <span class="text-surface-900 dark:text-surface-0 font-bold p-4">En stock</span>\r
                <p-toggleswitch [(ngModel)]="product.in_stock" [disabled]="fieldsDisabled"></p-toggleswitch>\r
            </div>\r
\r
            <!-- Quantit\xE9 en stock -->\r
            <div class="border border-surface-200 dark:border-surface-700 rounded">\r
                <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">\r
                    Quantit\xE9 en stock\r
                    <span class="text-sm font-normal text-gray-500" *ngIf="product.type === 'service'">\r
                        (non applicable)\r
                    </span>\r
                </span>\r
                <div class="p-4">\r
                    <div class="bg-surface-100 dark:bg-surface-700 py-2 px-4 flex items-center rounded">\r
                        <p-inputnumber\r
                            [(ngModel)]="product.qte_stock"\r
                            [showButtons]="true"\r
                            [min]="0"\r
                            [disabled]="isQteStockDisabled()"\r
                            placeholder="0"\r
                            fluid>\r
                        </p-inputnumber>\r
                    </div>\r
                    <small class="text-gray-500 block mt-2" *ngIf="product.type === 'service'">\r
                        <i class="pi pi-info-circle mr-1"></i>Le stock n'est pas g\xE9r\xE9 pour les services.\r
                    </small>\r
                </div>\r
            </div>\r
\r
            <!-- Boutons d'action -->\r
            <div class="flex gap-2" *ngIf="isEditing">\r
                <button \r
                    pButton \r
                    pRipple \r
                    [label]="mode === 'create' ? 'Enregistrer' : 'Sauvegarder'"\r
                    icon="pi pi-check"\r
                    (click)="onSubmit()"\r
                    [loading]="loading"\r
                    [disabled]="!isValid() || loading"\r
                    class="flex-1">\r
                </button>\r
                <button \r
                    pButton \r
                    pRipple \r
                    label="Annuler"\r
                    icon="pi pi-times"\r
                    severity="secondary"\r
                    (click)="mode === 'create' ? onCancel() : cancelEditing()"\r
                    [disabled]="loading"\r
                    class="flex-1">\r
                </button>\r
            </div>\r
        </div>\r
    </p-fluid>\r
</div> `, styles: ["/* angular:styles/component:scss;66765cb0843a060eecf05ccfd1291fb2b8e0274bb4a2f1d5627c389b9d942bce;C:/laragon/www/FRONT/elm-front/src/app/pages/produits/produits-form/produits-form.ts */\n:host ::ng-deep .p-fileupload-header {\n  display: none;\n}\n:host ::ng-deep .p-fileupload-file-list {\n  display: none;\n}\n:host ::ng-deep .p-fileupload-content {\n  height: 20rem;\n}\n/*# sourceMappingURL=produits-form.css.map */\n"] }]
  }], null, { buttonEl: [{
    type: ViewChildren,
    args: ["buttonEl"]
  }], mode: [{
    type: Input
  }], initialData: [{
    type: Input
  }], loading: [{
    type: Input
  }], submitForm: [{
    type: Output
  }], cancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsForm, { className: "ProduitsForm", filePath: "src/app/pages/produits/produits-form/produits-form.ts", lineNumber: 66 });
})();

// src/app/pages/produits/produits-new/produits-new.ts
var ProduitsNew = class _ProduitsNew {
  router;
  messageService;
  produitService;
  produitForm;
  loading = false;
  constructor(router, messageService, produitService) {
    this.router = router;
    this.messageService = messageService;
    this.produitService = produitService;
  }
  // =============================
  // SUBMIT
  // =============================
  onSubmitForm(dto) {
    this.loading = true;
    this.produitService.create(dto).subscribe({
      next: () => this.handleSuccess("Produit cr\xE9\xE9 avec succ\xE8s"),
      error: (err) => this.handleError("Erreur lors de la cr\xE9ation du produit", err)
    });
  }
  // =============================
  // CANCEL
  // =============================
  onCancel() {
    this.router.navigate(["/produits"]);
  }
  // =============================
  // SUCCESS
  // =============================
  handleSuccess(message) {
    this.messageService.add({
      severity: "success",
      summary: "Succ\xE8s",
      detail: message,
      life: 3e3
    });
    this.loading = false;
    this.resetForm();
  }
  // =============================
  // ERROR
  // =============================
  handleError(message, error) {
    this.messageService.add({
      severity: "error",
      summary: "Erreur",
      detail: message,
      life: 5e3
    });
    this.loading = false;
    console.error(error);
  }
  // =============================
  // RESET
  // =============================
  resetForm() {
    this.produitForm?.resetForm();
  }
  static \u0275fac = function ProduitsNew_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsNew)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ProduitService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsNew, selectors: [["app-produits-new"]], viewQuery: function ProduitsNew_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ProduitsForm, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.produitForm = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 2, vars: 1, consts: [["mode", "create", 3, "submitForm", "cancel", "loading"]], template: function ProduitsNew_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "app-produits-form", 0);
      \u0275\u0275listener("submitForm", function ProduitsNew_Template_app_produits_form_submitForm_1_listener($event) {
        return ctx.onSubmitForm($event);
      })("cancel", function ProduitsNew_Template_app_produits_form_cancel_1_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading);
    }
  }, dependencies: [
    ProduitsForm,
    ToastModule,
    Toast
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitsNew, [{
    type: Component,
    args: [{ selector: "app-produits-new", standalone: true, imports: [
      ProduitsForm,
      ToastModule
    ], providers: [MessageService], template: '<p-toast />\r\n\r\n<app-produits-form\r\n    mode="create"\r\n    [loading]="loading"\r\n    (submitForm)="onSubmitForm($event)"\r\n    (cancel)="onCancel()">\r\n</app-produits-form> ' }]
  }], () => [{ type: Router }, { type: MessageService }, { type: ProduitService }], { produitForm: [{
    type: ViewChild,
    args: [ProduitsForm]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsNew, { className: "ProduitsNew", filePath: "src/app/pages/produits/produits-new/produits-new.ts", lineNumber: 21 });
})();

// src/app/pages/produits/produits-edit/produits-edit.ts
var ProduitsEdit = class _ProduitsEdit {
  static \u0275fac = function ProduitsEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsEdit)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsEdit, selectors: [["app-produits-edit"]], decls: 2, vars: 0, template: function ProduitsEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "produits-edit works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitsEdit, [{
    type: Component,
    args: [{ selector: "app-produits-edit", imports: [], template: "<p>produits-edit works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsEdit, { className: "ProduitsEdit", filePath: "src/app/pages/produits/produits-edit/produits-edit.ts", lineNumber: 9 });
})();

// src/app/pages/produits/produits.routes.ts
var produits_routes_default = [
  { path: "", component: ProduitsListe },
  { path: "produits", component: ProduitsListe },
  { path: "produits-new", component: ProduitsNew },
  { path: "produits/:id/edit", component: ProduitsEdit },
  { path: "**", redirectTo: "/notfound" }
];
export {
  produits_routes_default as default
};
//# sourceMappingURL=chunk-QFMNKJ22.js.map
