import {
  EditorModule
} from "./chunk-TRIT2AYT.js";
import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-LW2YGCJ5.js";
import {
  RatingModule
} from "./chunk-YG2LKA2M.js";
import {
  FileUpload,
  FileUploadModule
} from "./chunk-PXXCZHHU.js";
import "./chunk-FAXGIH27.js";
import "./chunk-LY2SL74U.js";
import {
  ChipModule
} from "./chunk-A2P4OWTV.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-GZ7D5YLH.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-4UOI4QYW.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-G5PVWGBM.js";
import {
  Dialog,
  DialogModule
} from "./chunk-A2LLWIIX.js";
import {
  Toast,
  ToastModule
} from "./chunk-MIKKBFN3.js";
import "./chunk-IAPVHBD4.js";
import {
  authorizationGuard
} from "./chunk-YMUHY675.js";
import {
  AuthService,
  environment
} from "./chunk-66GARPBB.js";
import "./chunk-RTHJZPEL.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-FHW6CQ6W.js";
import "./chunk-MT6PN7RC.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule
} from "./chunk-QPQPF4QG.js";
import "./chunk-5SLVYV4D.js";
import "./chunk-3C4VBMIP.js";
import "./chunk-XSYQJ4W6.js";
import "./chunk-XMHI6SP7.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-3RHV3JZZ.js";
import "./chunk-M77IAYSM.js";
import {
  Select,
  SelectModule
} from "./chunk-F2DIVMZG.js";
import "./chunk-JMIE4XN5.js";
import "./chunk-YVCVOBBF.js";
import {
  Tag,
  TagModule
} from "./chunk-V7LXRUI7.js";
import "./chunk-5KB4S2LF.js";
import "./chunk-TRKKYFQF.js";
import "./chunk-5ATNZ2IU.js";
import "./chunk-CJAMEXZR.js";
import "./chunk-CF4ML4KQ.js";
import "./chunk-46OYJGUM.js";
import "./chunk-TITTMCJA.js";
import "./chunk-TEXAILZL.js";
import {
  RadioButtonModule
} from "./chunk-2UZZQ3O5.js";
import "./chunk-YUZALO6D.js";
import "./chunk-YWX4RJZN.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-BXX2KJCE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VMVXPPNB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RequiredValidator
} from "./chunk-VJUJTGB6.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-3ISV5J4X.js";
import "./chunk-SJAYAKU2.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-R3LUQ3Y4.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-IDACGSZU.js";
import {
  Button,
  ButtonDirective,
  ButtonModule
} from "./chunk-V2JIX33N.js";
import "./chunk-SRAUJRPD.js";
import {
  Ripple,
  RippleModule
} from "./chunk-WSCE5RX7.js";
import {
  Fluid,
  FluidModule
} from "./chunk-DHPXHGGE.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-JRTE2WST.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-A6EA4TT7.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  DOCUMENT,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  Output,
  ViewChild,
  ViewChildren,
  forkJoin,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
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
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-FZZISKXM.js";
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
function ProduitsListe_section_15_article_1_p_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 44);
    \u0275\u0275listener("click", function ProduitsListe_section_15_article_1_p_button_17_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const produit_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.deleteProduct(produit_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function ProduitsListe_section_15_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 29);
    \u0275\u0275listener("click", function ProduitsListe_section_15_article_1_Template_article_click_0_listener($event) {
      const produit_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToEditProduit($event, produit_r3.id));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "div", 31);
    \u0275\u0275element(3, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 34)(6, "div", 35)(7, "div", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "p-tag", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 39)(13, "span", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 41)(16, "button", 42);
    \u0275\u0275listener("click", function ProduitsListe_section_15_article_1_Template_button_click_16_listener($event) {
      const produit_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToEditProduit($event, produit_r3.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ProduitsListe_section_15_article_1_p_button_17_Template, 1, 2, "p-button", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const produit_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(produit_r3.code || "Sans code");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r3.nom);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r3.getStatutLabel(produit_r3.statut))("severity", ctx_r3.getStatutSeverity(produit_r3.statut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", produit_r3.qte_stock, " en stock \xB7 ", ctx_r3.formatCurrency(produit_r3.prix_vente));
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", ctx_r3.canUpdate ? "Modifier" : "Voir")("disabled", !ctx_r3.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.canDelete);
  }
}
function ProduitsListe_section_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 27);
    \u0275\u0275template(1, ProduitsListe_section_15_article_1_Template, 18, 9, "article", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.mobileVisibleProduits)("ngForTrackBy", ctx_r3.trackByProduitId);
  }
}
function ProduitsListe_ng_template_16_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, "Chargement des produits...");
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, "Aucun produit trouve.");
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProduitsListe_ng_template_16_div_0_Template, 2, 0, "div", 45)(1, ProduitsListe_ng_template_16_div_1_Template, 2, 0, "div", 45);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading && !ctx_r3.mobileFilteredProduits.length);
  }
}
function ProduitsListe_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "p-button", 48);
    \u0275\u0275listener("onClick", function ProduitsListe_div_18_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadMoreMobile());
    });
    \u0275\u0275elementEnd()();
  }
}
function ProduitsListe_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ProduitsListe_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToNewProduits());
    });
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementStart(2, "span", 51);
    \u0275\u0275text(3, "Nouveau produit");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsListe_ng_template_22_p_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 54);
    \u0275\u0275listener("onClick", function ProduitsListe_ng_template_22_p_button_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToNewProduits());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r3.canCreate);
  }
}
function ProduitsListe_ng_template_22_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 55);
    \u0275\u0275listener("onClick", function ProduitsListe_ng_template_22_p_button_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteSelectedProducts());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r3.selectedProduits || !ctx_r3.selectedProduits.length);
  }
}
function ProduitsListe_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProduitsListe_ng_template_22_p_button_0_Template, 1, 1, "p-button", 52)(1, ProduitsListe_ng_template_22_p_button_1_Template, 1, 1, "p-button", 53);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.canCreate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.canDelete);
  }
}
function ProduitsListe_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 56);
    \u0275\u0275listener("onClick", function ProduitsListe_ng_template_24_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "h5", 58);
    \u0275\u0275text(2, "Gestion des Produits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 18);
    \u0275\u0275elementStart(5, "input", 59);
    \u0275\u0275listener("input", function ProduitsListe_ng_template_28_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      const dt_r12 = \u0275\u0275reference(27);
      return \u0275\u0275resetView(ctx_r3.onGlobalFilter(dt_r12, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function ProduitsListe_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 60);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 61)(4, "span", 62);
    \u0275\u0275text(5, "Code ");
    \u0275\u0275element(6, "p-sortIcon", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "th", 64)(8, "span", 62);
    \u0275\u0275text(9, "Nom ");
    \u0275\u0275element(10, "p-sortIcon", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "th", 66)(12, "span", 62);
    \u0275\u0275text(13, "Type ");
    \u0275\u0275element(14, "p-sortIcon", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "th", 68)(16, "span", 62);
    \u0275\u0275text(17, "Qt\xE9 ");
    \u0275\u0275element(18, "p-sortIcon", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "th", 70)(20, "span", 62);
    \u0275\u0275text(21, "Status ");
    \u0275\u0275element(22, "p-sortIcon", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "th", 72);
    \u0275\u0275text(24, "Action");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsListe_ng_template_32_p_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 78);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_32_p_button_15_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const produit_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteProduct(produit_r14));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function ProduitsListe_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 60);
    \u0275\u0275element(2, "p-tableCheckbox", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 74);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "p-tag", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 76);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_32_Template_button_click_14_listener($event) {
      const produit_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToEditProduit($event, produit_r14.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ProduitsListe_ng_template_32_p_button_15_Template, 1, 2, "p-button", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const produit_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", produit_r14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r14.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r14.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r14.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r14.qte_stock);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.getStatutLabel(produit_r14.statut))("severity", ctx_r3.getStatutSeverity(produit_r14.statut));
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", ctx_r3.canUpdate ? "Modifier" : "Voir")("disabled", !ctx_r3.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.canDelete);
  }
}
function ProduitsListe_ng_template_35_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label", 102);
    \u0275\u0275text(2, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_35_div_0_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.produit.code, $event) || (ctx_r3.produit.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.produit.code);
    \u0275\u0275property("disabled", true);
  }
}
function ProduitsListe_ng_template_35_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 104);
    \u0275\u0275text(1, "Type obligatoire.");
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_35_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 104);
    \u0275\u0275text(1, "Nom obligatoire.");
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_35_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 105);
    \u0275\u0275text(2, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 106);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_35_div_16_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.produit.statut, $event) || (ctx_r3.produit.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.produit.statut);
    \u0275\u0275property("options", ctx_r3.statutOptions);
  }
}
function ProduitsListe_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ProduitsListe_ng_template_35_div_0_Template, 4, 2, "div", 79);
    \u0275\u0275elementStart(1, "div", 80)(2, "div")(3, "label", 81);
    \u0275\u0275text(4, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-select", 82);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_35_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.produit.type, $event) || (ctx_r3.produit.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProduitsListe_ng_template_35_small_6_Template, 2, 0, "small", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 84);
    \u0275\u0275text(9, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_35_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.produit.nom, $event) || (ctx_r3.produit.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProduitsListe_ng_template_35_small_11_Template, 2, 0, "small", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "label", 86);
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 87);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_35_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.produit.description, $event) || (ctx_r3.produit.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ProduitsListe_ng_template_35_div_16_Template, 4, 2, "div", 88);
    \u0275\u0275elementStart(17, "div", 89)(18, "div", 90)(19, "label", 91);
    \u0275\u0275text(20, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-inputnumber", 92);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_35_Template_p_inputnumber_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.produit.qte_stock, $event) || (ctx_r3.produit.qte_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 90)(23, "label", 93);
    \u0275\u0275text(24, "Co\xFBt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p-inputnumber", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_35_Template_p_inputnumber_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.produit.cout, $event) || (ctx_r3.produit.cout = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 89)(27, "div", 90)(28, "label", 95);
    \u0275\u0275text(29, "Prix achat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p-inputnumber", 96);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_35_Template_p_inputnumber_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.produit.prix_achat, $event) || (ctx_r3.produit.prix_achat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 90)(32, "label", 97);
    \u0275\u0275text(33, "Prix vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p-inputnumber", 98);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_35_Template_p_inputnumber_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.produit.prix_vente, $event) || (ctx_r3.produit.prix_vente = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div")(36, "label", 99);
    \u0275\u0275text(37, "Prix usine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p-inputnumber", 100);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_35_Template_p_inputnumber_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.produit.prix_usine, $event) || (ctx_r3.produit.prix_usine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.produit == null ? null : ctx_r3.produit.id);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.produit.type);
    \u0275\u0275property("options", ctx_r3.typeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.submitted && !ctx_r3.produit.type);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.produit.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.submitted && !(ctx_r3.produit.nom == null ? null : ctx_r3.produit.nom.trim()));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.produit.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.produit == null ? null : ctx_r3.produit.id);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.produit.qte_stock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.produit.cout);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.produit.prix_achat);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.produit.prix_vente);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.produit.prix_usine);
  }
}
function ProduitsListe_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 107);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_37_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 108);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_37_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveProduit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r3.saving);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.saving)("loading", ctx_r3.saving);
  }
}
var ProduitsListe = class _ProduitsListe {
  router;
  produitService;
  messageService;
  confirmationService;
  authService;
  document;
  produits = [];
  produit = new Produit();
  loading = true;
  saving = false;
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
  canCreate = false;
  canUpdate = false;
  canDelete = false;
  mobileSearchTerm = "";
  mobilePageSize = 8;
  mobileVisibleCount = this.mobilePageSize;
  mobileBreakpoint = 768;
  mobilePwaClass = "produits-mobile-pwa";
  constructor(router, produitService, messageService, confirmationService, authService, document) {
    this.router = router;
    this.produitService = produitService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.authService = authService;
    this.document = document;
    this.canCreate = this.authService.hasPermission("produits.create");
    this.canUpdate = this.authService.hasPermission("produits.update");
    this.canDelete = this.authService.hasPermission("produits.delete");
  }
  exportCSV() {
    this.dt.exportCSV();
  }
  ngOnInit() {
    this.initOptions();
    this.initColumns();
    this.loadProduits();
    this.syncMobilePwaMode();
  }
  ngOnDestroy() {
    this.clearMobilePwaMode();
  }
  onWindowResize() {
    this.syncMobilePwaMode();
  }
  loadProduits() {
    this.loading = true;
    this.produitService.getAll().subscribe({
      next: (produits) => {
        this.produits = produits;
        this.resetMobilePagination();
        this.loading = false;
      },
      error: (err) => {
        console.error("Erreur lors du chargement des produits :", err);
        this.loading = false;
        this.showApiError(err, "Chargement des produits impossible");
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
  onMobileSearchChange(_value) {
    this.mobileVisibleCount = this.mobilePageSize;
  }
  get mobileFilteredProduits() {
    const term = this.mobileSearchTerm.trim().toLowerCase();
    if (!term) {
      return this.produits;
    }
    return this.produits.filter((produit) => {
      const values = [
        produit.code,
        produit.nom,
        produit.description,
        this.getTypeLabel(produit.type),
        this.getStatutLabel(produit.statut),
        produit.qte_stock
      ];
      return values.some((value) => this.searchableValue(value).includes(term));
    });
  }
  get mobileVisibleProduits() {
    return this.mobileFilteredProduits.slice(0, this.mobileVisibleCount);
  }
  get canLoadMoreMobile() {
    return this.mobileVisibleCount < this.mobileFilteredProduits.length;
  }
  loadMoreMobile() {
    this.mobileVisibleCount += this.mobilePageSize;
  }
  trackByProduitId(index, produit) {
    return produit.id || produit.code || index;
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
            this.showApiError(err, "Suppression impossible");
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
            this.showApiError(err, "Suppression impossible");
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
  getTypeLabel(type) {
    if (!type)
      return "-";
    return PRODUIT_TYPE_LABELS[type] ?? type;
  }
  formatCurrency(value) {
    if (typeof value !== "number") {
      return "-";
    }
    const formatted = new Intl.NumberFormat("fr-GN", { maximumFractionDigits: 0 }).format(value);
    return `${formatted} GNF`;
  }
  saveProduit() {
    this.submitted = true;
    if (!this.produit.nom?.trim() || !this.produit.type || this.saving) {
      return;
    }
    this.saving = true;
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
        this.saving = false;
        this.loadProduits();
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: isUpdate ? "Produit mis \xE0 jour" : "Produit cr\xE9\xE9",
          life: 3e3
        });
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, "Sauvegarde impossible");
      }
    });
  }
  showApiError(err, fallback) {
    const summary = "Erreur";
    const detail = this.extractErrorMessage(err, fallback);
    if (err.status === 422 && err.error?.errors) {
      const messages = Object.values(err.error.errors).flat();
      messages.forEach((msg) => {
        this.messageService.add({
          severity: "error",
          summary: "Validation",
          detail: msg,
          life: 5e3
        });
      });
    } else {
      this.messageService.add({
        severity: "error",
        summary,
        detail,
        life: 5e3
      });
    }
  }
  extractErrorMessage(err, fallback) {
    if (typeof err?.error?.message === "string" && err.error.message.trim().length > 0) {
      return err.error.message;
    }
    if (typeof err?.message === "string" && err.message.trim().length > 0) {
      return err.message;
    }
    return fallback;
  }
  goToNewProduits() {
    this.router.navigate(["/produits/produits-new"]);
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  goToEditProduit(event, produitId) {
    event.stopPropagation();
    this.router.navigate(["/produits/produits-edit", produitId]);
  }
  resetMobilePagination() {
    this.mobileVisibleCount = this.mobilePageSize;
  }
  searchableValue(value) {
    if (value === null || value === void 0) {
      return "";
    }
    return String(value).toLowerCase();
  }
  syncMobilePwaMode() {
    if (typeof window === "undefined") {
      return;
    }
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.clearMobilePwaMode();
    }
  }
  clearMobilePwaMode() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }
  static \u0275fac = function ProduitsListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsListe)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ProduitService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsListe, selectors: [["app-produits-liste"]], viewQuery: function ProduitsListe_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, hostBindings: function ProduitsListe_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ProduitsListe_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ProduitService, ConfirmationService])], decls: 40, vars: 29, consts: [["mobileListState", ""], ["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["content", ""], ["footer", ""], [1, "produits-mobile-app"], [1, "mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour \xE0 l'accueil", 1, "p-button-rounded", "p-button-text", "mobile-back", 3, "click"], [1, "mobile-title-wrap"], [1, "mobile-title"], [1, "mobile-subtitle"], ["pButton", "", "pRipple", "", "icon", "pi pi-upload", "aria-label", "Export", 1, "p-button-rounded", "p-button-text", "mobile-add", 3, "click"], [1, "mobile-scroll"], [1, "mobile-search"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher un produit...", 3, "ngModelChange", "ngModel"], ["class", "mobile-list", 4, "ngIf", "ngIfElse"], ["class", "mobile-load-more", 4, "ngIf"], ["type", "button", "class", "mobile-fab", "aria-label", "Nouveau produit", 3, "click", 4, "ngIf"], [1, "card", "produits-desktop"], ["styleClass", "mb-12"], ["dataKey", "id", "currentPageReportTemplate", "  {first} \xE0 {last} sur {totalRecords} produits", 3, "selectionChange", "value", "loading", "rows", "columns", "paginator", "globalFilterFields", "tableStyle", "selection", "rowHover", "showCurrentPageReport", "rowsPerPageOptions"], [3, "visibleChange", "visible", "header", "modal"], [1, "mobile-list"], ["class", "mobile-produit-card", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mobile-produit-card", 3, "click"], [1, "mobile-card-media"], ["aria-hidden", "true", 1, "mobile-card-image-placeholder"], [1, "pi", "pi-box"], [1, "mobile-card-body"], [1, "mobile-card-top"], [1, "mobile-card-main"], [1, "mobile-code"], [1, "mobile-name"], ["styleClass", "mobile-status-tag", 3, "value", "severity"], [1, "mobile-card-footer"], [1, "mobile-card-summary"], [1, "mobile-card-actions"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", "mobile-eye-action", 3, "click", "pTooltip", "disabled"], ["icon", "pi pi-trash", "severity", "danger", "styleClass", "mobile-delete-action", 3, "rounded", "outlined", "click", 4, "ngIf"], ["icon", "pi pi-trash", "severity", "danger", "styleClass", "mobile-delete-action", 3, "click", "rounded", "outlined"], ["class", "mobile-state", 4, "ngIf"], [1, "mobile-state"], [1, "mobile-load-more"], ["label", "Charger plus", "icon", "pi pi-angle-down", "styleClass", "mobile-load-more-btn", 3, "onClick"], ["type", "button", "aria-label", "Nouveau produit", 1, "mobile-fab", 3, "click"], [1, "pi", "pi-plus"], [1, "mobile-fab-label"], ["label", "Nouveau", "icon", "pi pi-plus", "severity", "secondary", "class", "mr-2", 3, "disabled", "onClick", 4, "ngIf"], ["severity", "secondary", "label", "Delete", "icon", "pi pi-trash", "outlined", "", 3, "disabled", "onClick", 4, "ngIf"], ["label", "Nouveau", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2", 3, "onClick", "disabled"], ["severity", "secondary", "label", "Delete", "icon", "pi pi-trash", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], ["pInputText", "", "type", "text", "placeholder", "Rechercher...", 3, "input"], [2, "width", "3rem"], ["pSortableColumn", "code", 2, "min-width", "16rem"], [1, "flex", "items-center", "gap-2"], ["field", "code"], ["pSortableColumn", "nom", 2, "min-width", "16rem"], ["field", "nom"], ["pSortableColumn", "type", 2, "min-width", "10rem"], ["field", "type"], ["pSortableColumn", "qte_stock", 2, "min-width", "12rem"], ["field", "qte_stock"], ["pSortableColumn", "statut", 2, "min-width", "12rem"], ["field", "statut"], [2, "min-width", "12rem"], [3, "value"], [2, "min-width", "16rem"], [3, "value", "severity"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", "mr-2", 3, "click", "pTooltip", "disabled"], ["icon", "pi pi-trash", "severity", "danger", 3, "rounded", "outlined", "click", 4, "ngIf"], ["icon", "pi pi-trash", "severity", "danger", 3, "click", "rounded", "outlined"], ["class", "mb-4", 4, "ngIf"], [1, "flex", "flex-col", "gap-6"], ["for", "type", 1, "block", "font-bold", "mb-4"], ["inputId", "type", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un type", "fluid", "", 3, "ngModelChange", "ngModel", "options"], ["class", "text-red-500", 4, "ngIf"], ["for", "nom", 1, "block", "font-bold", "mb-4"], ["type", "text", "pInputText", "", "id", "nom", "required", "", "autofocus", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "description", 1, "block", "font-bold", "mb-4"], ["id", "description", "pTextarea", "", "rows", "3", "cols", "20", "fluid", "", 3, "ngModelChange", "ngModel"], [4, "ngIf"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-6"], ["for", "qte_stock", 1, "block", "font-bold", "mb-4"], ["id", "qte_stock", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "cout", 1, "block", "font-bold", "mb-4"], ["id", "cout", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "prix_achat", 1, "block", "font-bold", "mb-4"], ["id", "prix_achat", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "prix_vente", 1, "block", "font-bold", "mb-4"], ["id", "prix_vente", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "prix_usine", 1, "block", "font-bold", "mb-4"], ["id", "prix_usine", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], [1, "mb-4"], ["for", "code", 1, "block", "font-bold", "mb-4"], ["type", "text", "pInputText", "", "id", "code", "fluid", "", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-red-500"], ["for", "statut", 1, "block", "font-bold", "mb-4"], ["inputId", "statut", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un statut", "fluid", "", 3, "ngModelChange", "ngModel", "options"], ["label", "Annuler", "icon", "pi pi-times", "text", "", 3, "click", "disabled"], ["label", "Enregistrer", "icon", "pi pi-check", 3, "click", "disabled", "loading"]], template: function ProduitsListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 9)(2, "header", 10)(3, "button", 11);
      \u0275\u0275listener("click", function ProduitsListe_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goHome());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 12)(5, "h1", 13);
      \u0275\u0275text(6, "Produits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 14);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 15);
      \u0275\u0275listener("click", function ProduitsListe_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportCSV());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 16)(11, "section", 17)(12, "p-iconfield");
      \u0275\u0275element(13, "p-inputicon", 18);
      \u0275\u0275elementStart(14, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.mobileSearchTerm, $event) || (ctx.mobileSearchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ProduitsListe_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMobileSearchChange($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, ProduitsListe_section_15_Template, 2, 2, "section", 20)(16, ProduitsListe_ng_template_16_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(18, ProduitsListe_div_18_Template, 2, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, ProduitsListe_button_19_Template, 4, 0, "button", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 23)(21, "p-toolbar", 24);
      \u0275\u0275template(22, ProduitsListe_ng_template_22_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(24, ProduitsListe_ng_template_24_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p-table", 25, 3);
      \u0275\u0275twoWayListener("selectionChange", function ProduitsListe_Template_p_table_selectionChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedProduits, $event) || (ctx.selectedProduits = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(28, ProduitsListe_ng_template_28_Template, 6, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(30, ProduitsListe_ng_template_30_Template, 25, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(32, ProduitsListe_ng_template_32_Template, 16, 10, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "p-dialog", 26);
      \u0275\u0275twoWayListener("visibleChange", function ProduitsListe_Template_p_dialog_visibleChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.produitDialog, $event) || (ctx.produitDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(35, ProduitsListe_ng_template_35_Template, 39, 13, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(37, ProduitsListe_ng_template_37_Template, 2, 3, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "p-confirmdialog");
    }
    if (rf & 2) {
      const mobileListState_r20 = \u0275\u0275reference(17);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.mobileFilteredProduits.length, " produit", ctx.mobileFilteredProduits.length > 1 ? "s" : "");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.mobileSearchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.mobileVisibleProduits.length)("ngIfElse", mobileListState_r20);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.canLoadMoreMobile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canCreate);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.produits)("loading", ctx.loading)("rows", 10)("columns", ctx.cols)("paginator", true)("globalFilterFields", ctx.filterFields)("tableStyle", \u0275\u0275pureFunction0(25, _c1));
      \u0275\u0275twoWayProperty("selection", ctx.selectedProduits);
      \u0275\u0275property("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(26, _c2));
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c3));
      \u0275\u0275twoWayProperty("visible", ctx.produitDialog);
      \u0275\u0275property("header", (ctx.produit == null ? null : ctx.produit.id) ? "Modifier un produit" : "Nouveau produit")("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(28, _c4));
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
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
    ButtonDirective,
    Button,
    RippleModule,
    Ripple,
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
    ConfirmDialog,
    TooltipModule,
    Tooltip
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.produits-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #f9fbff;\n    --mobile-border: #dbe2ee;\n  }\n  .produits-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .produits-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100dvh;\n    height: 100vh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background:\n      linear-gradient(\n        180deg,\n        #f3f5f9 0%,\n        #eaedf4 58%,\n        #e5eaf1 100%);\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back[_ngcontent-%COMP%], \n   .mobile-add[_ngcontent-%COMP%] {\n    width: 2.15rem;\n    height: 2.15rem;\n    border-radius: 999px;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.35rem;\n    line-height: 1.1;\n    font-weight: 800;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.2rem 0 0;\n    font-size: 0.76rem;\n    font-weight: 600;\n    color: var(--mobile-muted);\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: #f7f9fd;\n    border: 1.5px solid var(--mobile-border);\n    border-radius: 0.95rem;\n    padding: 0.35rem 0.55rem;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    color: var(--mobile-text);\n    font-size: 0.96rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]::placeholder {\n    color: #92a0b7;\n  }\n  .mobile-quick-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n    padding: 0 0.15rem;\n  }\n  .mobile-quick-actions[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.65rem;\n    margin-top: 1rem;\n  }\n  .mobile-produit-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    gap: 0.75rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 1rem;\n    padding: 0.9rem;\n    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-produit-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  }\n  .mobile-card-media[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .mobile-card-image-placeholder[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n    border-radius: 0.65rem;\n    background: #eef1f6;\n    border: 1px solid var(--mobile-border);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-image-placeholder[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    color: #92a0b7;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-top[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-bottom: 0.4rem;\n  }\n  .mobile-card-main[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-code[_ngcontent-%COMP%] {\n    margin-bottom: 0.1rem;\n    font-size: 0.72rem;\n    line-height: 1.2;\n    color: #8b98b0;\n    letter-spacing: 0.02em;\n    font-weight: 700;\n  }\n  .mobile-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    line-height: 1.25;\n    font-weight: 700;\n    color: var(--mobile-text);\n    word-break: break-word;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-summary[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    color: var(--mobile-muted);\n    font-weight: 600;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n  }\n  .mobile-eye-action[_ngcontent-%COMP%] {\n    width: 2.05rem;\n    height: 2.05rem;\n    color: var(--mobile-primary) !important;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: #f8faff;\n    border: 1px dashed var(--mobile-border);\n    border-radius: 1rem;\n    padding: 1rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more[_ngcontent-%COMP%] {\n    padding-top: 0.4rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.35rem;\n    font-weight: 700;\n    font-size: 0.9rem;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.96);\n  }\n  .mobile-fab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .mobile-fab-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) and (min-width: 400px) {\n  .mobile-fab[_ngcontent-%COMP%] {\n    width: auto;\n    height: 3rem;\n    min-height: 3rem;\n    padding: 0 1.25rem;\n    border-radius: 999px;\n  }\n  .mobile-fab-label[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%]     .mobile-action-btn {\n    width: 100%;\n    justify-content: flex-start;\n    border: 0 !important;\n    background: transparent !important;\n    color: #4f5d79 !important;\n    padding: 0.35rem 0.45rem !important;\n    font-weight: 700;\n    border-radius: 0.7rem;\n    box-shadow: none !important;\n  }\n  [_nghost-%COMP%]     .mobile-action-btn .p-button-icon {\n    color: var(--mobile-primary);\n    font-size: 0.95rem;\n  }\n  [_nghost-%COMP%]     .mobile-action-btn .p-button-label {\n    font-size: 0.95rem;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.79rem;\n    font-weight: 700;\n    border-radius: 0.55rem;\n    padding: 0.22rem 0.55rem;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag.p-tag-success {\n    background: #d9f7e5;\n    color: #168f4a;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag.p-tag-warn, \n   [_nghost-%COMP%]     .mobile-status-tag.p-tag-warning {\n    background: #ffe8d3;\n    color: #dc6408;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag.p-tag-danger {\n    background: #ffe3e1;\n    color: #dd3f39;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag.p-tag-secondary {\n    background: #e8edf6;\n    color: #64748b;\n  }\n  [_nghost-%COMP%]     .mobile-delete-action {\n    width: 2.05rem;\n    height: 2.05rem;\n    border-radius: 999px !important;\n    border-color: #ffb9b4 !important;\n    color: #ef4444 !important;\n    background: rgba(255, 255, 255, 0.9) !important;\n  }\n  [_nghost-%COMP%]     .mobile-delete-action .p-button-icon {\n    font-size: 0.84rem;\n  }\n  [_nghost-%COMP%]     .mobile-load-more-btn {\n    width: 100%;\n    border-radius: 999px;\n    justify-content: center;\n    font-weight: 700;\n    border: 1px solid #cfd7ff;\n    background: #eef2ff;\n    color: #4f5df4;\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=produits-liste.css.map */"] });
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
      ConfirmDialogModule,
      TooltipModule
    ], providers: [MessageService, ProduitService, ConfirmationService], template: `<p-toast></p-toast>

<div class="produits-mobile-app">
    <header class="mobile-header">
        <button 
            pButton
            pRipple
            icon="pi pi-arrow-left"
            class="p-button-rounded p-button-text mobile-back"
            aria-label="Retour \xE0 l'accueil"
            (click)="goHome()"
        ></button>

        <div class="mobile-title-wrap">
            <h1 class="mobile-title">Produits</h1>
            <p class="mobile-subtitle">{{ mobileFilteredProduits.length }} produit{{ mobileFilteredProduits.length > 1 ? 's' : '' }}</p>
        </div>

        <button
            pButton
            pRipple
            icon="pi pi-upload"
            class="p-button-rounded p-button-text mobile-add"
            aria-label="Export"
            (click)="exportCSV()"
        ></button>
    </header>

    <div class="mobile-scroll">
    <section class="mobile-search">
        <p-iconfield>
            <p-inputicon styleClass="pi pi-search" />
            <input
                pInputText
                type="text"
                [(ngModel)]="mobileSearchTerm"
                (ngModelChange)="onMobileSearchChange($event)"
                placeholder="Rechercher un produit..."
            />
        </p-iconfield>
    </section>

    <section class="mobile-list" *ngIf="!loading && mobileVisibleProduits.length; else mobileListState">
        <article 
            class="mobile-produit-card" 
            *ngFor="let produit of mobileVisibleProduits; trackBy: trackByProduitId"
            (click)="goToEditProduit($event, produit.id)"
        >
            <div class="mobile-card-media">
                <div class="mobile-card-image-placeholder" aria-hidden="true">
                    <i class="pi pi-box"></i>
                </div>
            </div>
            <div class="mobile-card-body">
            <div class="mobile-card-top">
                <div class="mobile-card-main">
                    <div class="mobile-code">{{ produit.code || 'Sans code' }}</div>
                    <div class="mobile-name">{{ produit.nom }}</div>
                </div>
                <p-tag
                    styleClass="mobile-status-tag"
                    [value]="getStatutLabel(produit.statut)"
                    [severity]="getStatutSeverity(produit.statut)"
                />
            </div>

            <div class="mobile-card-footer">
                <span class="mobile-card-summary">{{ produit.qte_stock }} en stock \xB7 {{ formatCurrency(produit.prix_vente) }}</span>
                <div class="mobile-card-actions">
                <button
                    pButton
                    pRipple
                    icon="pi pi-eye"
                    class="p-button-rounded p-button-text p-button-sm mobile-eye-action"
                    [pTooltip]="canUpdate ? 'Modifier' : 'Voir'"
                    tooltipPosition="top"
                    (click)="goToEditProduit($event, produit.id)"
                    [disabled]="!canUpdate"
                ></button>

                <p-button
                    *ngIf="canDelete"
                    icon="pi pi-trash"
                    severity="danger"
                    [rounded]="true"
                    [outlined]="true"
                    styleClass="mobile-delete-action"
                    (click)="$event.stopPropagation(); deleteProduct(produit)"
                />
                </div>
            </div>
            </div>
        </article>
    </section>

    <ng-template #mobileListState>
        <div class="mobile-state" *ngIf="loading">Chargement des produits...</div>
        <div class="mobile-state" *ngIf="!loading && !mobileFilteredProduits.length">Aucun produit trouve.</div>
    </ng-template>

    <div class="mobile-load-more" *ngIf="!loading && canLoadMoreMobile">
        <p-button
            label="Charger plus"
            icon="pi pi-angle-down"
            styleClass="mobile-load-more-btn"
            (onClick)="loadMoreMobile()"
        />
    </div>
    </div>

    <button
        *ngIf="canCreate"
        type="button"
        class="mobile-fab"
        aria-label="Nouveau produit"
        (click)="goToNewProduits()"
    >
        <i class="pi pi-plus"></i>
        <span class="mobile-fab-label">Nouveau produit</span>
    </button>
</div>

  <div class="card produits-desktop">
            <p-toolbar styleClass="mb-12">
                <ng-template #start>
                    <p-button label="Nouveau" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="goToNewProduits()" [disabled]="!canCreate" *ngIf="canCreate" />
                    <p-button severity="secondary" label="Delete" icon="pi pi-trash" outlined (onClick)="deleteSelectedProducts()" [disabled]="!selectedProduits || !selectedProduits.length" *ngIf="canDelete" />
                </ng-template>

                <ng-template #end>
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                </ng-template>
            </p-toolbar>

            <p-table
                #dt
                [value]="produits"
                [loading]="loading"
                [rows]="10"
                [columns]="cols"
                [paginator]="true"
                [globalFilterFields]="filterFields"
                [tableStyle]="{ 'min-width': '75rem' }" 
                [(selection)]="selectedProduits" 
                [rowHover]="true"
                dataKey="id"
                currentPageReportTemplate="  {first} \xE0 {last} sur {totalRecords} produits"
                [showCurrentPageReport]="true"
                [rowsPerPageOptions]="[10, 20, 30]"
            >
                <ng-template #caption>
                    <div class="flex items-center justify-between">
                        <h5 class="m-0">Gestion des Produits</h5>
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Rechercher..." />
                        </p-iconfield>
                    </div>
                </ng-template> 
              <ng-template #header>
                    <tr>
                        <th style="width: 3rem">
                            <p-tableHeaderCheckbox />
                        </th>
                        <th style="min-width: 16rem" pSortableColumn="code">
                            <span class="flex items-center gap-2">Code
                            <p-sortIcon field="code" /></span>
                        </th>
                        <th pSortableColumn="nom" style="min-width:16rem">
                            <span class="flex items-center gap-2">Nom
                            <p-sortIcon field="nom" /></span>
                        </th>
                        <!-- <th>Image</th> -->
                        <!-- <th pSortableColumn="price" style="min-width: 8rem">
                            <span class="flex items-center gap-2">Prix
                            <p-sortIcon field="price" /></span>
                        </th> -->
                        <th pSortableColumn="type" style="min-width:10rem">
                            <span class="flex items-center gap-2">Type
                            <p-sortIcon field="type" /></span>
                        </th>
                        <th pSortableColumn="qte_stock" style="min-width: 12rem">
                            <span class="flex items-center gap-2">Qt\xE9
                            <p-sortIcon field="qte_stock" /></span>
                        </th>
                        <th pSortableColumn="statut" style="min-width: 12rem">
                            <span class="flex items-center gap-2">Status
                            <p-sortIcon field="statut" /></span>
                        </th>
                        <th style="min-width: 12rem">Action</th>
                    </tr>
                </ng-template>
                   <ng-template #body let-produit>
                    <tr>
                        <td style="width: 3rem">
                            <p-tableCheckbox [value]="produit" />
                        </td>
                        <td style="min-width: 12rem">{{ produit.code }}</td>
                       <td style="min-width: 16rem">{{ produit.nom }}</td>
                        <!-- <td>
                            <img [src]="'/demo/images/produit/' + produit.image" [alt]="produit.name" style="width: 64px" class="rounded" /> 
                        </td> -->
                         <td>{{ produit.type }}</td>
                        <td>{{ produit.qte_stock }}</td>
                        <td>
                            <p-tag
                                [value]="getStatutLabel(produit.statut)"
                                [severity]="getStatutSeverity(produit.statut)"
                            />
                        </td>
                        <td>
                            <button
                                pButton
                                pRipple
                                icon="pi pi-eye"
                                class="p-button-rounded p-button-text p-button-sm mr-2"
                                [pTooltip]="canUpdate ? 'Modifier' : 'Voir'"
                                tooltipPosition="top"
                                (click)="goToEditProduit($event, produit.id)"
                                [disabled]="!canUpdate"
                            ></button>
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteProduct(produit)" *ngIf="canDelete" />
                        </td>
                    </tr>
                </ng-template> 
            </p-table>
        </div>



        <p-dialog [(visible)]="produitDialog" [style]="{ width: '720px', maxWidth: '95vw' }" [header]="produit?.id ? 'Modifier un produit' : 'Nouveau produit'" [modal]="true">
            <ng-template #content>
                
                    <div *ngIf="produit?.id" class="mb-4">
                        <label for="code" class="block font-bold mb-4">Code</label>
                        <input type="text" pInputText id="code" [(ngModel)]="produit.code" [disabled]="true" fluid />
                    </div>

                <div class="flex flex-col gap-6">
                    <div>
                        <label for="type" class="block font-bold mb-4">Type</label>
                        <p-select
                            [(ngModel)]="produit.type"
                            inputId="type"
                            [options]="typeOptions"
                            optionLabel="label"
                            optionValue="value"
                            placeholder="S\xE9lectionner un type"
                            fluid
                        />
                        <small class="text-red-500" *ngIf="submitted && !produit.type">Type obligatoire.</small>
                    </div>

                    <div>
                        <label for="nom" class="block font-bold mb-4">Nom</label>
                        <input type="text" pInputText id="nom" [(ngModel)]="produit.nom" required autofocus fluid />
                        <small class="text-red-500" *ngIf="submitted && !produit.nom?.trim()">Nom obligatoire.</small>
                    </div>


                    <div>
                        <label for="description" class="block font-bold mb-4">Description</label>
                        <textarea id="description" pTextarea [(ngModel)]="produit.description" rows="3" cols="20" fluid></textarea>
                    </div>

                    <div *ngIf="produit?.id">
                        <label for="statut" class="block font-bold mb-4">Statut</label>
                        <p-select
                            [(ngModel)]="produit.statut"
                            inputId="statut"
                            [options]="statutOptions"
                            optionLabel="label"
                            optionValue="value"
                            placeholder="S\xE9lectionner un statut"
                            fluid
                        />
                    </div>

                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-6">
                            <label for="qte_stock" class="block font-bold mb-4">Quantit\xE9</label>
                            <p-inputnumber id="qte_stock" [(ngModel)]="produit.qte_stock" fluid />
                        </div>
                        <div class="col-span-6">
                            <label for="cout" class="block font-bold mb-4">Co\xFBt</label>
                            <p-inputnumber id="cout" [(ngModel)]="produit.cout" mode="currency" currency="GNF" locale="fr-GN" fluid />
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-6">
                            <label for="prix_achat" class="block font-bold mb-4">Prix achat</label>
                            <p-inputnumber id="prix_achat" [(ngModel)]="produit.prix_achat" mode="currency" currency="GNF" locale="fr-GN" fluid />
                        </div>
                        <div class="col-span-6">
                            <label for="prix_vente" class="block font-bold mb-4">Prix vente</label>
                            <p-inputnumber id="prix_vente" [(ngModel)]="produit.prix_vente" mode="currency" currency="GNF" locale="fr-GN" fluid />
                        </div>
                    </div>

                    <div>
                        <label for="prix_usine" class="block font-bold mb-4">Prix usine</label>
                        <p-inputnumber id="prix_usine" [(ngModel)]="produit.prix_usine" mode="currency" currency="GNF" locale="fr-GN" fluid />
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Annuler" icon="pi pi-times" text (click)="hideDialog()" [disabled]="saving" />
                <p-button
                    label="Enregistrer"
                    icon="pi pi-check"
                    (click)="saveProduit()"
                    [disabled]="saving"
                    [loading]="saving" />
            </ng-template>
        </p-dialog>

        <p-confirmdialog [style]="{ width: '450px' }" />


 `, styles: ["/* src/app/pages/produits/produits-liste/produits-liste.scss */\n:host {\n  display: block;\n}\n.produits-mobile-app {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #f9fbff;\n    --mobile-border: #dbe2ee;\n  }\n  .produits-desktop {\n    display: none;\n  }\n  .produits-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100dvh;\n    height: 100vh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background:\n      linear-gradient(\n        180deg,\n        #f3f5f9 0%,\n        #eaedf4 58%,\n        #e5eaf1 100%);\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back,\n  .mobile-add {\n    width: 2.15rem;\n    height: 2.15rem;\n    border-radius: 999px;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.35rem;\n    line-height: 1.1;\n    font-weight: 800;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.2rem 0 0;\n    font-size: 0.76rem;\n    font-weight: 600;\n    color: var(--mobile-muted);\n  }\n  .mobile-search {\n    background: #f7f9fd;\n    border: 1.5px solid var(--mobile-border);\n    border-radius: 0.95rem;\n    padding: 0.35rem 0.55rem;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    color: var(--mobile-text);\n    font-size: 0.96rem;\n  }\n  .mobile-search .p-inputtext::placeholder {\n    color: #92a0b7;\n  }\n  .mobile-quick-actions {\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n    padding: 0 0.15rem;\n  }\n  .mobile-quick-actions p-button {\n    flex: 1;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.65rem;\n    margin-top: 1rem;\n  }\n  .mobile-produit-card {\n    display: flex;\n    align-items: flex-start;\n    gap: 0.75rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 1rem;\n    padding: 0.9rem;\n    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-produit-card:active {\n    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  }\n  .mobile-card-media {\n    flex-shrink: 0;\n  }\n  .mobile-card-image-placeholder {\n    width: 64px;\n    height: 64px;\n    border-radius: 0.65rem;\n    background: #eef1f6;\n    border: 1px solid var(--mobile-border);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-image-placeholder .pi {\n    font-size: 1.5rem;\n    color: #92a0b7;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-top {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-bottom: 0.4rem;\n  }\n  .mobile-card-main {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-code {\n    margin-bottom: 0.1rem;\n    font-size: 0.72rem;\n    line-height: 1.2;\n    color: #8b98b0;\n    letter-spacing: 0.02em;\n    font-weight: 700;\n  }\n  .mobile-name {\n    font-size: 1rem;\n    line-height: 1.25;\n    font-weight: 700;\n    color: var(--mobile-text);\n    word-break: break-word;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-summary {\n    font-size: 0.8rem;\n    color: var(--mobile-muted);\n    font-weight: 600;\n  }\n  .mobile-card-actions {\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n  }\n  .mobile-eye-action {\n    width: 2.05rem;\n    height: 2.05rem;\n    color: var(--mobile-primary) !important;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: #f8faff;\n    border: 1px dashed var(--mobile-border);\n    border-radius: 1rem;\n    padding: 1rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more {\n    padding-top: 0.4rem;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.35rem;\n    font-weight: 700;\n    font-size: 0.9rem;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab:active {\n    transform: scale(0.96);\n  }\n  .mobile-fab .pi {\n    font-size: 1.35rem;\n  }\n  .mobile-fab-label {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) and (min-width: 400px) {\n  .mobile-fab {\n    width: auto;\n    height: 3rem;\n    min-height: 3rem;\n    padding: 0 1.25rem;\n    border-radius: 999px;\n  }\n  .mobile-fab-label {\n    display: inline;\n  }\n}\n@media screen and (max-width: 768px) {\n  :host ::ng-deep .mobile-action-btn {\n    width: 100%;\n    justify-content: flex-start;\n    border: 0 !important;\n    background: transparent !important;\n    color: #4f5d79 !important;\n    padding: 0.35rem 0.45rem !important;\n    font-weight: 700;\n    border-radius: 0.7rem;\n    box-shadow: none !important;\n  }\n  :host ::ng-deep .mobile-action-btn .p-button-icon {\n    color: var(--mobile-primary);\n    font-size: 0.95rem;\n  }\n  :host ::ng-deep .mobile-action-btn .p-button-label {\n    font-size: 0.95rem;\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.79rem;\n    font-weight: 700;\n    border-radius: 0.55rem;\n    padding: 0.22rem 0.55rem;\n  }\n  :host ::ng-deep .mobile-status-tag.p-tag-success {\n    background: #d9f7e5;\n    color: #168f4a;\n  }\n  :host ::ng-deep .mobile-status-tag.p-tag-warn,\n  :host ::ng-deep .mobile-status-tag.p-tag-warning {\n    background: #ffe8d3;\n    color: #dc6408;\n  }\n  :host ::ng-deep .mobile-status-tag.p-tag-danger {\n    background: #ffe3e1;\n    color: #dd3f39;\n  }\n  :host ::ng-deep .mobile-status-tag.p-tag-secondary {\n    background: #e8edf6;\n    color: #64748b;\n  }\n  :host ::ng-deep .mobile-delete-action {\n    width: 2.05rem;\n    height: 2.05rem;\n    border-radius: 999px !important;\n    border-color: #ffb9b4 !important;\n    color: #ef4444 !important;\n    background: rgba(255, 255, 255, 0.9) !important;\n  }\n  :host ::ng-deep .mobile-delete-action .p-button-icon {\n    font-size: 0.84rem;\n  }\n  :host ::ng-deep .mobile-load-more-btn {\n    width: 100%;\n    border-radius: 999px;\n    justify-content: center;\n    font-weight: 700;\n    border: 1px solid #cfd7ff;\n    background: #eef2ff;\n    color: #4f5df4;\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=produits-liste.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ProduitService }, { type: MessageService }, { type: ConfirmationService }, { type: AuthService }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }], onWindowResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsListe, { className: "ProduitsListe", filePath: "src/app/pages/produits/produits-liste/produits-liste.ts", lineNumber: 78 });
})();

// src/app/pages/produits/produits-form/produits-form.ts
var _c02 = ["buttonEl"];
function ProduitsForm_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function ProduitsForm_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableEditing());
    });
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_9_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Ajouter une photo");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsForm_div_9_ng_template_3_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ProduitsForm_div_9_ng_template_3_div_2_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeImage($event));
    });
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_9_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "img", 74);
    \u0275\u0275template(2, ProduitsForm_div_9_ng_template_3_div_2_button_2_Template, 2, 0, "button", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imagePreview || ctx_r1.product.getImageUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.fieldsDisabled);
  }
}
function ProduitsForm_div_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function ProduitsForm_div_9_ng_template_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      \u0275\u0275nextContext();
      const mobileFileUploader_r5 = \u0275\u0275reference(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.fieldsDisabled && mobileFileUploader_r5.advancedFileInput.nativeElement.click());
    });
    \u0275\u0275template(1, ProduitsForm_div_9_ng_template_3_div_1_Template, 4, 0, "div", 13)(2, ProduitsForm_div_9_ng_template_3_div_2_Template, 3, 2, "div", 12);
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
function ProduitsForm_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p-fileUpload", 69, 0);
    \u0275\u0275listener("onSelect", function ProduitsForm_div_9_Template_p_fileUpload_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpload($event));
    });
    \u0275\u0275template(3, ProduitsForm_div_9_ng_template_3_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("customUpload", true)("multiple", false)("showUploadButton", false)("showCancelButton", false)("auto", true)("disabled", ctx_r1.fieldsDisabled);
  }
}
function ProduitsForm_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "img", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.product.getImageUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ProduitsForm_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune image");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsForm_small_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1, " Nom du produit obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1, " Obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1, " Obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_35_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1, " Obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Usine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputnumber", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_35_Template_p_inputnumber_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_usine, $event) || (ctx_r1.product.prix_usine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProduitsForm_div_35_small_4_Template, 2, 0, "small", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_usine);
    \u0275\u0275property("min", 0)("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixUsineRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_usine));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixUsineRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_usine) && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275text(2, " Au moins un prix requis pour un service. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2, " Stock non g\xE9r\xE9 pour les services ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "button", 85);
    \u0275\u0275listener("click", function ProduitsForm_div_54_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 86);
    \u0275\u0275listener("click", function ProduitsForm_div_54_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
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
function ProduitsForm_button_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function ProduitsForm_button_62_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableEditing());
    });
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1, " Nom du produit obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1, " Prix d'achat obligatoire pour ce type. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1, " Prix de vente obligatoire pour ce type. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_80_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1, ' Prix usine obligatoire pour "Fabricable". ');
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "p-inputnumber", 89);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_80_Template_p_inputnumber_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_usine, $event) || (ctx_r1.product.prix_usine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ProduitsForm_div_80_small_2_Template, 2, 0, "small", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_usine);
    \u0275\u0275property("min", 0)("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixUsineRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_usine));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixUsineRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_usine) && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2, " Pour un service, renseignez au moins un prix : achat ou vente. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_86_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275element(1, "i", 97);
    \u0275\u0275elementStart(2, "span", 98);
    \u0275\u0275text(3, "Ajouter une image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 99);
    \u0275\u0275text(5, "Cliquez pour s\xE9lectionner");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsForm_div_86_ng_template_3_div_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275listener("click", function ProduitsForm_div_86_ng_template_3_div_2_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeImage($event));
    });
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_86_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101);
    \u0275\u0275element(2, "img", 102);
    \u0275\u0275template(3, ProduitsForm_div_86_ng_template_3_div_2_button_3_Template, 2, 0, "button", 103);
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
function ProduitsForm_div_86_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275listener("click", function ProduitsForm_div_86_ng_template_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      \u0275\u0275nextContext();
      const fileUploader_r13 = \u0275\u0275reference(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.fieldsDisabled && fileUploader_r13.advancedFileInput.nativeElement.click());
    });
    \u0275\u0275template(1, ProduitsForm_div_86_ng_template_3_div_1_Template, 6, 0, "div", 94)(2, ProduitsForm_div_86_ng_template_3_div_2_Template, 4, 2, "div", 95);
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
function ProduitsForm_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p-fileUpload", 92, 2);
    \u0275\u0275listener("onSelect", function ProduitsForm_div_86_Template_p_fileUpload_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpload($event));
    });
    \u0275\u0275template(3, ProduitsForm_div_86_ng_template_3_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("customUpload", true)("multiple", false)("showUploadButton", false)("showCancelButton", false)("auto", true)("disabled", ctx_r1.fieldsDisabled);
  }
}
function ProduitsForm_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "img", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.product.getImageUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ProduitsForm_small_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, "Le stock n'est pas g\xE9r\xE9 pour les services. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "button", 110);
    \u0275\u0275listener("click", function ProduitsForm_div_111_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 111);
    \u0275\u0275listener("click", function ProduitsForm_div_111_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode === "create" ? ctx_r1.onCancel() : ctx_r1.cancelEditing());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
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
  // Options de type avec labels franÃ§ais
  typeOptions = [
    { label: PRODUIT_TYPE_LABELS.materiel, value: "materiel" },
    { label: PRODUIT_TYPE_LABELS.service, value: "service" },
    { label: PRODUIT_TYPE_LABELS.fabricable, value: "fabricable" },
    { label: PRODUIT_TYPE_LABELS.achat_vente, value: "achat_vente" }
  ];
  // Options de statut avec labels franÃ§ais
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
    statut: "actif",
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
  // VISIBILITÃ‰ / OBLIGATION
  // =========================
  // RÃ¨gles mÃ©tier:
  // - materiel     â†’ prix_achat obligatoire
  // - service      -> prix_achat ou prix_vente (au moins un), qte_stock = 0
  // - fabricable   â†’ prix_usine + prix_vente obligatoires
  // - achat_vente  â†’ prix_achat + prix_vente obligatoires
  isPrixUsineVisible() {
    return this.product.type === "fabricable";
  }
  isPrixUsineRequired() {
    return this.product.type === "fabricable";
  }
  isPrixVenteRequired() {
    return ["fabricable", "achat_vente"].includes(this.product.type);
  }
  ngOnChanges(changes) {
    if (changes["initialData"]?.currentValue) {
      this.product = new Produit(changes["initialData"].currentValue);
      this.imagePreview = changes["initialData"].currentValue.image_url ?? null;
      if (this.mode === "edit") {
        this.isEditing = false;
        this.submitted = false;
        this.selectedImageFile = null;
      }
    }
    if (changes["mode"]?.currentValue === "create") {
      this.isEditing = true;
    }
  }
  isPrixAchatRequired() {
    return ["materiel", "achat_vente"].includes(this.product.type);
  }
  // Pour le type "service", qte_stock doit Ãªtre 0 et dÃ©sactivÃ©
  isQteStockDisabled() {
    return this.product.type === "service" || this.fieldsDisabled;
  }
  // =========================
  // HELPERS NUMÃ‰RIQUES
  // =========================
  isValidPrice(value) {
    return typeof value === "number" && value >= 0;
  }
  isPriceMissing(value) {
    return value === null || value === void 0;
  }
  hasServicePrice() {
    return this.isValidPrice(this.product.prix_achat) || this.isValidPrice(this.product.prix_vente);
  }
  showServicePriceError() {
    return this.submitted && this.isEditing && this.product.type === "service" && !this.hasServicePrice();
  }
  // Switch statut (actif/inactif)
  get isActifSwitch() {
    return this.product.statut === "actif";
  }
  onStatutToggleChange(value) {
    this.product.statut = value ? "actif" : "inactif";
  }
  // =========================
  // TYPE CHANGE
  // =========================
  onTypeChange() {
    if (!this.isPrixUsineVisible())
      this.product.prix_usine = null;
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
    if (this.isPrixUsineRequired() && !this.isValidPrice(this.product.prix_usine))
      return false;
    if (this.isPrixVenteRequired() && !this.isValidPrice(this.product.prix_vente))
      return false;
    if (this.isPrixAchatRequired() && !this.isValidPrice(this.product.prix_achat))
      return false;
    if (this.product.type === "service" && !this.hasServicePrice())
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
    dto.statut = this.product.statut;
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
        return "Pour un service, renseignez au moins un prix : achat ou vente";
      case "fabricable":
        return "Prix usine et prix de vente obligatoires";
      case "achat_vente":
        return "Prix d'achat et prix de vente obligatoires";
      default:
        return "S\xC3\xA9lectionnez un type de produit";
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
      statut: "actif",
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
  }, inputs: { mode: "mode", initialData: "initialData", loading: "loading" }, outputs: { submitForm: "submitForm", cancel: "cancel" }, features: [\u0275\u0275ProvidersFeature([MessageService]), \u0275\u0275NgOnChangesFeature], decls: 112, vars: 73, consts: [["mobileFileUploader", ""], ["content", ""], ["fileUploader", ""], [1, "card", "product-form"], [1, "mobile-form-container"], [1, "mobile-form-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", 1, "p-button-rounded", "p-button-text", "mobile-form-back", 3, "click"], [1, "mobile-form-title-wrap"], [1, "mobile-form-title"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "class", "p-button-rounded p-button-text mobile-form-edit", 3, "click", 4, "ngIf"], [1, "mobile-image-card"], [4, "ngIf"], ["class", "mobile-upload-preview", 4, "ngIf"], ["class", "mobile-upload-placeholder", 4, "ngIf"], [1, "mobile-section-card"], [1, "mobile-field-label"], ["pInputText", "", "type", "text", "placeholder", "Nom du produit", "fluid", "", 3, "ngModelChange", "ngModel", "disabled", "invalid"], ["class", "text-red-500", 4, "ngIf"], [1, "mobile-price-grid"], [1, "mobile-price-item"], [1, "mobile-price-label"], ["mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "0", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled", "invalid"], ["mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "0", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled"], ["class", "mobile-price-item", 4, "ngIf"], ["class", "mobile-service-alert", 4, "ngIf"], [1, "mobile-meta-row"], [1, "mobile-meta-field"], ["placeholder", "Type", "fluid", "", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled"], ["placeholder", "0", "fluid", "", 3, "ngModelChange", "ngModel", "showButtons", "min", "disabled"], ["class", "mobile-info-hint", 4, "ngIf"], [1, "mobile-section-card", "mobile-status-row"], [1, "mobile-status-label"], [1, "mobile-status-value"], [1, "ml-auto", 3, "ngModelChange", "ngModel", "disabled"], ["class", "mobile-bottom-actions", 4, "ngIf"], [1, "desktop-form-container"], [1, "flex", "justify-between", "items-start", "gap-4", "mb-8", "form-header"], [1, "block", "text-surface-900", "dark:text-surface-0", "font-bold", "text-2xl"], [1, "text-surface-500", "dark:text-surface-300"], ["pButton", "", "pRipple", "", "label", "Modifier", "icon", "pi pi-pencil", "severity", "warn", "class", "w-auto", 3, "click", 4, "ngIf"], [1, "grid", "grid-cols-12", "gap-6", "flex-wrap"], [1, "col-span-12", "lg:col-span-8"], [1, "form-section", "mb-6"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "mt-2"], ["id", "nom", "pInputText", "", "type", "text", "placeholder", "Nom du produit", "fluid", "", 3, "ngModelChange", "ngModel", "disabled", "invalid"], [1, "col-span-12", "mt-4"], [1, "col-span-12", "lg:col-span-4"], ["inputId", "prix_achat", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "prix d'achat", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled", "invalid"], ["inputId", "prix_vente", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "Prix de vente", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled", "invalid"], ["inputId", "cout", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "co\xFBt", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled"], ["class", "col-span-12 lg:col-span-4 mt-4", 4, "ngIf"], ["class", "col-span-12 service-alert", 4, "ngIf"], [1, "form-section"], [1, "section-title"], [1, "pi", "pi-image", "mr-2"], ["class", "flex justify-center mt-2", 4, "ngIf"], [1, "col-span-12", "lg:col-span-4", "flex", "flex-col", "gap-y-4", "mt-7"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "block", "border-b", "border-surface-200", "dark:border-surface-700", "p-4"], [1, "p-4"], [1, "bg-surface-100", "dark:bg-surface-700", "py-2", "px-4", "flex", "items-center", "rounded"], [1, "text-black/90", "dark:text-surface-0!", "font-bold", "mr-4"], [1, "text-black/60", "dark:text-surface-0!", "font-semibold"], ["placeholder", "S\xE9lectionner un type", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled"], ["class", "text-gray-500 block mt-2 mb-2 ml-4", 4, "ngIf"], [1, "sticky", "top-6", "flex", "flex-col", "gap-4"], ["class", "form-section p-4", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", "mobile-form-edit", 3, "click"], ["name", "image", "accept", "image/*", "styleClass", "mobile-uploader", 3, "onSelect", "customUpload", "multiple", "showUploadButton", "showCancelButton", "auto", "disabled"], [1, "mobile-upload-zone", 3, "click"], [1, "mobile-upload-placeholder"], [1, "pi", "pi-camera"], [1, "mobile-upload-preview"], ["alt", "Image du produit", 3, "src"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", "severity", "danger", "class", "mobile-remove-img", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", "severity", "danger", 1, "mobile-remove-img", 3, "click"], [1, "pi", "pi-times"], [1, "pi", "pi-image"], [1, "text-red-500"], [1, "mobile-service-alert"], [1, "pi", "pi-exclamation-circle"], [1, "mobile-info-hint"], [1, "pi", "pi-info-circle"], [1, "mobile-bottom-actions"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "mobile-btn-save", 3, "click", "label", "loading", "disabled"], ["pButton", "", "pRipple", "", "label", "Annuler", "icon", "pi pi-times", "severity", "secondary", 1, "mobile-btn-cancel", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "label", "Modifier", "icon", "pi pi-pencil", "severity", "warn", 1, "w-auto", 3, "click"], [1, "col-span-12", "lg:col-span-4", "mt-4"], ["inputId", "prix_usine", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "Prix usine", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled", "invalid"], [1, "col-span-12", "service-alert"], [1, "pi", "pi-exclamation-circle", "mr-2"], ["name", "image", "accept", "image/*", "styleClass", "product-uploader border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 p-0 rounded-lg", 3, "onSelect", "customUpload", "multiple", "showUploadButton", "showCancelButton", "auto", "disabled"], [1, "w-full", "py-4", "upload-dropzone", 3, "click"], ["class", "h-48 flex flex-col justify-center items-center", 4, "ngIf"], ["class", "relative w-full flex justify-center py-3", 4, "ngIf"], [1, "h-48", "flex", "flex-col", "justify-center", "items-center"], [1, "pi", "pi-image", "text-primary", "text-4xl", "mb-4"], [1, "block", "font-semibold", "text-surface-900", "dark:text-surface-0", "text-lg"], [1, "text-surface-500", "text-sm", "mt-1"], [1, "relative", "w-full", "flex", "justify-center", "py-3"], [1, "relative"], ["alt", "Image du produit", 1, "max-h-72", "rounded", "shadow", "object-contain", 3, "src"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", "severity", "danger", "class", "absolute -top-2 -right-2", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", "severity", "danger", 1, "absolute", "-top-2", "-right-2", 3, "click"], [1, "flex", "justify-center", "mt-2"], [1, "text-gray-500", "block", "mt-2", "mb-2", "ml-4"], [1, "pi", "pi-info-circle", "mr-1"], [1, "form-section", "p-4"], [1, "flex", "gap-3"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "flex-1", 3, "click", "label", "loading", "disabled"], ["pButton", "", "pRipple", "", "label", "Annuler", "icon", "pi pi-times", "severity", "secondary", 1, "flex-1", 3, "click", "disabled"]], template: function ProduitsForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "header", 5)(3, "button", 6);
      \u0275\u0275listener("click", function ProduitsForm_Template_button_click_3_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 7)(5, "h1", 8);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ProduitsForm_button_7_Template, 1, 0, "button", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 10);
      \u0275\u0275template(9, ProduitsForm_div_9_Template, 5, 6, "div", 11)(10, ProduitsForm_div_10_Template, 2, 1, "div", 12)(11, ProduitsForm_div_11_Template, 4, 0, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 14)(13, "label", 15);
      \u0275\u0275text(14, "Nom du produit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.nom, $event) || (ctx.product.nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, ProduitsForm_small_16_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 14)(18, "label", 15);
      \u0275\u0275text(19, "Prix");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 18)(21, "div", 19)(22, "span", 20);
      \u0275\u0275text(23, "Achat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p-inputnumber", 21);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.prix_achat, $event) || (ctx.product.prix_achat = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, ProduitsForm_small_25_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 19)(27, "span", 20);
      \u0275\u0275text(28, "Vente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p-inputnumber", 21);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.prix_vente, $event) || (ctx.product.prix_vente = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, ProduitsForm_small_30_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 19)(32, "span", 20);
      \u0275\u0275text(33, "Co\xFBt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p-inputnumber", 22);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.cout, $event) || (ctx.product.cout = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, ProduitsForm_div_35_Template, 5, 5, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, ProduitsForm_div_36_Template, 3, 0, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 14)(38, "div", 25)(39, "div", 26)(40, "label", 15);
      \u0275\u0275text(41, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p-select", 27);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_select_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.type, $event) || (ctx.product.type = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function ProduitsForm_Template_p_select_onChange_42_listener() {
        return ctx.onTypeChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 26)(44, "label", 15);
      \u0275\u0275text(45, "Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p-inputnumber", 28);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.qte_stock, $event) || (ctx.product.qte_stock = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(47, ProduitsForm_small_47_Template, 3, 0, "small", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 30)(49, "span", 31);
      \u0275\u0275text(50, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 32);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p-toggleswitch", 33);
      \u0275\u0275listener("ngModelChange", function ProduitsForm_Template_p_toggleswitch_ngModelChange_53_listener($event) {
        return ctx.onStatutToggleChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(54, ProduitsForm_div_54_Template, 3, 4, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 35)(56, "div", 36)(57, "div")(58, "span", 37);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "small", 38);
      \u0275\u0275text(61, " Renseignez les informations principales, les prix et le statut de publication. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(62, ProduitsForm_button_62_Template, 1, 0, "button", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p-fluid", 40)(64, "div", 41)(65, "div", 42)(66, "div", 43)(67, "div", 44)(68, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_input_ngModelChange_68_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.nom, $event) || (ctx.product.nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, ProduitsForm_small_69_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 46)(71, "div", 43)(72, "div", 47)(73, "p-inputnumber", 48);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_73_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.prix_achat, $event) || (ctx.product.prix_achat = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(74, ProduitsForm_small_74_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 47)(76, "p-inputnumber", 49);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_76_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.prix_vente, $event) || (ctx.product.prix_vente = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(77, ProduitsForm_small_77_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 47)(79, "p-inputnumber", 50);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_79_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.cout, $event) || (ctx.product.cout = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(80, ProduitsForm_div_80_Template, 3, 5, "div", 51)(81, ProduitsForm_div_81_Template, 3, 0, "div", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 53)(83, "div", 54);
      \u0275\u0275element(84, "i", 55);
      \u0275\u0275text(85, " Visuel du produit ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(86, ProduitsForm_div_86_Template, 5, 6, "div", 11)(87, ProduitsForm_div_87_Template, 2, 1, "div", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 57)(89, "div", 58)(90, "span", 59);
      \u0275\u0275text(91, "Etat du produit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 60)(93, "div", 61)(94, "span", 62);
      \u0275\u0275text(95, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span", 63);
      \u0275\u0275text(97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p-toggleswitch", 33);
      \u0275\u0275listener("ngModelChange", function ProduitsForm_Template_p_toggleswitch_ngModelChange_98_listener($event) {
        return ctx.onStatutToggleChange($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(99, "div", 58)(100, "span", 59);
      \u0275\u0275text(101, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 60)(103, "p-select", 64);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_select_ngModelChange_103_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.type, $event) || (ctx.product.type = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function ProduitsForm_Template_p_select_onChange_103_listener() {
        return ctx.onTypeChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 58)(105, "span", 59);
      \u0275\u0275text(106, "Quantit\xE9 en stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 60)(108, "p-inputnumber", 28);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_108_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.qte_stock, $event) || (ctx.product.qte_stock = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(109, ProduitsForm_small_109_Template, 3, 0, "small", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 66);
      \u0275\u0275template(111, ProduitsForm_div_111_Template, 4, 4, "div", 67);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.mode === "create" ? "Nouveau produit" : "D\xE9tails du produit", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "edit" && !ctx.isEditing);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing && ctx.product.image_url);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing && !ctx.product.image_url);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.nom);
      \u0275\u0275property("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && !(ctx.product.nom == null ? null : ctx.product.nom.trim()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.product.nom == null ? null : ctx.product.nom.trim()) && ctx.isEditing);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.prix_achat);
      \u0275\u0275property("min", 0)("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && ctx.isPrixAchatRequired() && ctx.isPriceMissing(ctx.product.prix_achat));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.isPrixAchatRequired() && ctx.isPriceMissing(ctx.product.prix_achat) && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.prix_vente);
      \u0275\u0275property("min", 0)("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && ctx.isPrixVenteRequired() && ctx.isPriceMissing(ctx.product.prix_vente));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.isPrixVenteRequired() && ctx.isPriceMissing(ctx.product.prix_vente) && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.cout);
      \u0275\u0275property("min", 0)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPrixUsineVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showServicePriceError());
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.typeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.type);
      \u0275\u0275property("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.qte_stock);
      \u0275\u0275property("showButtons", true)("min", 0)("disabled", ctx.isQteStockDisabled());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.product.type === "service");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.isActifSwitch);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.isActifSwitch ? "Actif" : "Inactif");
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.isActifSwitch)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.mode === "create" ? "Cr\xE9er un produit" : "D\xE9tails du produit", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.mode === "edit" && !ctx.isEditing);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.nom);
      \u0275\u0275property("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && !(ctx.product.nom == null ? null : ctx.product.nom.trim()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.product.nom == null ? null : ctx.product.nom.trim()) && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.prix_achat);
      \u0275\u0275property("min", 0)("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && ctx.isPrixAchatRequired() && ctx.isPriceMissing(ctx.product.prix_achat));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.isPrixAchatRequired() && ctx.isPriceMissing(ctx.product.prix_achat) && ctx.isEditing);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.prix_vente);
      \u0275\u0275property("min", 0)("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && ctx.isPrixVenteRequired() && ctx.isPriceMissing(ctx.product.prix_vente));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.isPrixVenteRequired() && ctx.isPriceMissing(ctx.product.prix_vente) && ctx.isEditing);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.cout);
      \u0275\u0275property("min", 0)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPrixUsineVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showServicePriceError());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing && ctx.product.image_url);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.isActifSwitch ? "Actif" : "Inactif");
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.isActifSwitch)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(5);
      \u0275\u0275property("options", ctx.typeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.type);
      \u0275\u0275property("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.qte_stock);
      \u0275\u0275property("showButtons", true)("min", 0)("disabled", ctx.isQteStockDisabled());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.product.type === "service");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isEditing);
    }
  }, dependencies: [
    CommonModule,
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
  ], styles: ["\n\n.product-form[_ngcontent-%COMP%]   .mobile-form-container[_ngcontent-%COMP%] {\n  display: none;\n}\n.product-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--surface-200);\n  padding-bottom: 1rem;\n}\n.product-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  border: 1px solid var(--surface-200);\n  border-radius: 0.875rem;\n  background: var(--surface-0);\n  padding: 1.25rem;\n}\n.product-form[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  font-weight: 700;\n  color: var(--text-color);\n}\n.product-form[_ngcontent-%COMP%]   .side-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-color);\n  padding: 1rem 1rem 0.875rem;\n  border-bottom: 1px solid var(--surface-200);\n  background: color-mix(in srgb, var(--surface-50) 70%, transparent);\n}\n.product-form[_ngcontent-%COMP%]   .helper-chip[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--blue-100) 50%, transparent);\n  border-radius: 999px;\n  padding: 0.35rem 0.7rem;\n  font-weight: 500;\n}\n.product-form[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  border-radius: 999px;\n  padding: 0.2rem 0.6rem;\n}\n.product-form[_ngcontent-%COMP%]   .status-pill-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.product-form[_ngcontent-%COMP%]   .status-pill-inactive[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.product-form[_ngcontent-%COMP%]   .service-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #991b1b;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n  padding: 0.65rem 0.8rem;\n  font-size: 0.9rem;\n}\n.product-form[_ngcontent-%COMP%]   .upload-dropzone[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 0.75rem;\n  transition: background-color 0.2s ease;\n}\n.product-form[_ngcontent-%COMP%]   .upload-dropzone[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--primary-50) 35%, transparent);\n}\n@media screen and (max-width: 768px) {\n  .product-form[_ngcontent-%COMP%] {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8f9fc !important;\n    margin: -0.5rem -0.875rem calc(-0.5rem - env(safe-area-inset-bottom));\n    padding: 0;\n    min-height: 100dvh;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-form-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: calc(0.75rem + env(safe-area-inset-top)) 1rem calc(5.5rem + env(safe-area-inset-bottom));\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .product-form[_ngcontent-%COMP%]   .desktop-form-container[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-form-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding-bottom: 0.25rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-form-back[_ngcontent-%COMP%], \n   .product-form[_ngcontent-%COMP%]   .mobile-form-edit[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 999px;\n    flex-shrink: 0;\n    color: #1e293b !important;\n    background: transparent !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-form-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-form-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-image-card[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 1rem;\n    overflow: hidden;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .product-form   [_nghost-%COMP%]     .mobile-uploader {\n    border: 0 !important;\n    background: transparent !important;\n    box-shadow: none !important;\n  }\n  .product-form   [_nghost-%COMP%]     .mobile-uploader .p-fileupload-header {\n    display: none;\n  }\n  .product-form   [_nghost-%COMP%]     .mobile-uploader .p-fileupload-file-list {\n    display: none;\n  }\n  .product-form   [_nghost-%COMP%]     .mobile-uploader .p-fileupload-content {\n    padding: 0;\n    border: 0;\n    min-height: auto;\n    height: auto !important;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-zone[_ngcontent-%COMP%] {\n    cursor: pointer;\n    min-height: 11rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-placeholder[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 11rem;\n    color: #94a3b8;\n    gap: 0.5rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    color: #cbd5e1;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    font-weight: 600;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-preview[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    padding: 0.75rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 12rem;\n    width: auto;\n    border-radius: 0.75rem;\n    object-fit: contain;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-remove-img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    width: 1.75rem !important;\n    height: 1.75rem !important;\n    border-radius: 999px !important;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-remove-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-section-card[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 1rem;\n    padding: 1rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-field-label[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 0.7rem;\n    font-weight: 700;\n    color: #94a3b8;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n    margin-bottom: 0.5rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-price-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.75rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-price-item[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-price-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: #64748b;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-service-alert[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n    margin-top: 0.6rem;\n    padding: 0.5rem 0.65rem;\n    background: #fef2f2;\n    border: 1px solid #fecaca;\n    border-radius: 0.65rem;\n    font-size: 0.8rem;\n    color: #991b1b;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-meta-row[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.75rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-meta-field[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-info-hint[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n    margin-top: 0.5rem;\n    font-size: 0.75rem;\n    color: #94a3b8;\n    font-weight: 500;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-status-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-status-label[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    font-weight: 700;\n    color: #334155;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-status-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    font-weight: 600;\n    color: #94a3b8;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-status-value.active[_ngcontent-%COMP%] {\n    color: #16a34a;\n  }\n  .product-form   [_nghost-%COMP%]     .p-inputtext, \n   .product-form   [_nghost-%COMP%]     .p-inputnumber-input, \n   .product-form   [_nghost-%COMP%]     .p-select-label {\n    font-size: 16px !important;\n    min-height: 2.65rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-bottom-actions[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 50;\n    display: flex;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.92);\n    backdrop-filter: blur(16px);\n    -webkit-backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-btn-save[_ngcontent-%COMP%] {\n    flex: 1;\n    border-radius: 0.75rem !important;\n    font-weight: 700 !important;\n    min-height: 2.75rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-btn-cancel[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    border-radius: 0.75rem !important;\n    font-weight: 600 !important;\n    min-height: 2.75rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=produits-form.css.map */", "\n\n[_nghost-%COMP%]     .p-fileupload-header {\n  display: none;\n}\n[_nghost-%COMP%]     .p-fileupload-file-list {\n  display: none;\n}\n[_nghost-%COMP%]     .p-fileupload-content {\n  height: 20rem;\n}\n/*# sourceMappingURL=produits-form.css.map */"] });
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
    ], providers: [MessageService], template: `<div class="card product-form">\r
    <!-- ==================== MOBILE LAYOUT ==================== -->\r
    <div class="mobile-form-container">\r
        <header class="mobile-form-header">\r
            <button\r
                pButton\r
                pRipple\r
                icon="pi pi-arrow-left"\r
                class="p-button-rounded p-button-text mobile-form-back"\r
                (click)="onCancel()"\r
            ></button>\r
            <div class="mobile-form-title-wrap">\r
                <h1 class="mobile-form-title">\r
                    {{ mode === 'create' ? 'Nouveau produit' : 'D\xE9tails du produit' }}\r
                </h1>\r
            </div>\r
            <button\r
                *ngIf="mode === 'edit' && !isEditing"\r
                pButton\r
                pRipple \r
                icon="pi pi-pencil"\r
                class="p-button-rounded p-button-text mobile-form-edit"\r
                (click)="enableEditing()"\r
            ></button>\r
        </header>\r
\r
        <!-- Image en premier -->\r
        <div class="mobile-image-card">\r
            <div *ngIf="isEditing">\r
                <p-fileUpload\r
                    #mobileFileUploader\r
                    name="image"\r
                    (onSelect)="onUpload($event)"\r
                    [customUpload]="true"\r
                    [multiple]="false"\r
                    accept="image/*"\r
                    [showUploadButton]="false"\r
                    [showCancelButton]="false"\r
                    [auto]="true"\r
                    [disabled]="fieldsDisabled"\r
                    styleClass="mobile-uploader"\r
                >\r
                    <ng-template #content>\r
                        <div\r
                            class="mobile-upload-zone"\r
                            (click)="!fieldsDisabled && mobileFileUploader.advancedFileInput.nativeElement.click()"\r
                        >\r
                            <div *ngIf="!imagePreview && !product.image_url" class="mobile-upload-placeholder">\r
                                <i class="pi pi-camera"></i>\r
                                <span>Ajouter une photo</span>\r
                            </div>\r
\r
                            <div *ngIf="imagePreview || product.image_url" class="mobile-upload-preview">\r
                                <img\r
                                    [src]="imagePreview || product.getImageUrl()"\r
                                    alt="Image du produit"\r
                                />\r
                                <button\r
                                    *ngIf="!fieldsDisabled"\r
                                    pButton\r
                                    pRipple\r
                                    rounded\r
                                    type="button"\r
                                    severity="danger"\r
                                    class="mobile-remove-img"\r
                                    (click)="removeImage($event)"\r
                                >\r
                                    <i class="pi pi-times"></i>\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </ng-template>\r
                </p-fileUpload>\r
            </div>\r
            <div *ngIf="!isEditing && product.image_url" class="mobile-upload-preview">\r
                <img [src]="product.getImageUrl()" alt="Image du produit" />\r
            </div>\r
            <div *ngIf="!isEditing && !product.image_url" class="mobile-upload-placeholder">\r
                <i class="pi pi-image"></i>\r
                <span>Aucune image</span>\r
            </div>\r
        </div>\r
\r
        <!-- Nom du produit -->\r
        <div class="mobile-section-card">\r
            <label class="mobile-field-label">Nom du produit</label>\r
            <input\r
                pInputText\r
                type="text"\r
                placeholder="Nom du produit"\r
                [(ngModel)]="product.nom"\r
                [disabled]="fieldsDisabled"\r
                [invalid]="submitted && !product.nom?.trim()"\r
                fluid\r
            />\r
            <small class="text-red-500" *ngIf="submitted && !product.nom?.trim() && isEditing">\r
                Nom du produit obligatoire.\r
            </small>\r
        </div>\r
\r
        <!-- Prix en grille 2 colonnes -->\r
        <div class="mobile-section-card">\r
            <label class="mobile-field-label">Prix</label>\r
            <div class="mobile-price-grid">\r
                <div class="mobile-price-item">\r
                    <span class="mobile-price-label">Achat</span>\r
                    <p-inputnumber\r
                        [(ngModel)]="product.prix_achat"\r
                        mode="currency"\r
                        currency="GNF"\r
                        locale="fr-GN"\r
                        [min]="0"\r
                        [disabled]="fieldsDisabled"\r
                        [invalid]="submitted && isPrixAchatRequired() && isPriceMissing(product.prix_achat)"\r
                        placeholder="0"\r
                        fluid\r
                    ></p-inputnumber>\r
                    <small class="text-red-500" *ngIf="submitted && isPrixAchatRequired() && isPriceMissing(product.prix_achat) && isEditing">\r
                        Obligatoire\r
                    </small>\r
                </div>\r
                <div class="mobile-price-item">\r
                    <span class="mobile-price-label">Vente</span>\r
                    <p-inputnumber\r
                        [(ngModel)]="product.prix_vente"\r
                        mode="currency"\r
                        currency="GNF"\r
                        locale="fr-GN"\r
                        [min]="0"\r
                        [disabled]="fieldsDisabled"\r
                        [invalid]="submitted && isPrixVenteRequired() && isPriceMissing(product.prix_vente)"\r
                        placeholder="0"\r
                        fluid\r
                    ></p-inputnumber>\r
                    <small class="text-red-500" *ngIf="submitted && isPrixVenteRequired() && isPriceMissing(product.prix_vente) && isEditing">\r
                        Obligatoire\r
                    </small>\r
                </div>\r
                <div class="mobile-price-item">\r
                    <span class="mobile-price-label">Co\xFBt</span>\r
                    <p-inputnumber\r
                        [(ngModel)]="product.cout"\r
                        mode="currency"\r
                        currency="GNF"\r
                        locale="fr-GN"\r
                        [min]="0"\r
                        [disabled]="fieldsDisabled"\r
                        placeholder="0"\r
                        fluid\r
                    ></p-inputnumber>\r
                </div>\r
                <div class="mobile-price-item" *ngIf="isPrixUsineVisible()">\r
                    <span class="mobile-price-label">Usine</span>\r
                    <p-inputnumber\r
                        [(ngModel)]="product.prix_usine"\r
                        mode="currency"\r
                        currency="GNF"\r
                        locale="fr-GN"\r
                        [min]="0"\r
                        [disabled]="fieldsDisabled"\r
                        [invalid]="submitted && isPrixUsineRequired() && isPriceMissing(product.prix_usine)"\r
                        placeholder="0"\r
                        fluid\r
                    ></p-inputnumber>\r
                    <small class="text-red-500" *ngIf="submitted && isPrixUsineRequired() && isPriceMissing(product.prix_usine) && isEditing">\r
                        Obligatoire\r
                    </small>\r
                </div>\r
            </div>\r
            <div class="mobile-service-alert" *ngIf="showServicePriceError()">\r
                <i class="pi pi-exclamation-circle"></i>\r
                Au moins un prix requis pour un service.\r
            </div>\r
        </div>\r
\r
        <!-- Type + Statut + Stock en rang\xE9e compacte -->\r
        <div class="mobile-section-card">\r
            <div class="mobile-meta-row">\r
                <div class="mobile-meta-field">\r
                    <label class="mobile-field-label">Type</label>\r
                    <p-select\r
                        [options]="typeOptions"\r
                        [(ngModel)]="product.type"\r
                        (onChange)="onTypeChange()"\r
                        [disabled]="fieldsDisabled"\r
                        placeholder="Type"\r
                        fluid\r
                    ></p-select>\r
                </div>\r
                <div class="mobile-meta-field">\r
                    <label class="mobile-field-label">Stock</label>\r
                    <p-inputnumber\r
                        [(ngModel)]="product.qte_stock"\r
                        [showButtons]="true"\r
                        [min]="0"\r
                        [disabled]="isQteStockDisabled()"\r
                        placeholder="0"\r
                        fluid\r
                    ></p-inputnumber>\r
                </div>\r
            </div>\r
            <small class="mobile-info-hint" *ngIf="product.type === 'service'">\r
                <i class="pi pi-info-circle"></i> Stock non g\xE9r\xE9 pour les services\r
            </small>\r
        </div>\r
\r
        <!-- Status toggle -->\r
        <div class="mobile-section-card mobile-status-row">\r
            <span class="mobile-status-label">Status</span>\r
            <span class="mobile-status-value" [class.active]="isActifSwitch">{{ isActifSwitch ? 'Actif' : 'Inactif' }}</span>\r
            <p-toggleswitch\r
                [ngModel]="isActifSwitch"\r
                (ngModelChange)="onStatutToggleChange($event)"\r
                [disabled]="fieldsDisabled"\r
                class="ml-auto"\r
            ></p-toggleswitch>\r
        </div>\r
\r
        <!-- Boutons sticky en bas -->\r
        <div class="mobile-bottom-actions" *ngIf="isEditing">\r
            <button\r
                pButton\r
                pRipple\r
                [label]="mode === 'create' ? 'Enregistrer' : 'Sauvegarder'"\r
                icon="pi pi-check"\r
                (click)="onSubmit()"\r
                [loading]="loading"\r
                [disabled]="!isValid() || loading"\r
                class="mobile-btn-save"\r
            ></button>\r
            <button\r
                pButton\r
                pRipple\r
                label="Annuler"\r
                icon="pi pi-times"\r
                severity="secondary"\r
                (click)="mode === 'create' ? onCancel() : cancelEditing()"\r
                [disabled]="loading"\r
                class="mobile-btn-cancel"\r
            ></button>\r
        </div>\r
    </div>\r
\r
    <!-- ==================== DESKTOP LAYOUT ==================== -->\r
    <div class="desktop-form-container">\r
        <div class="flex justify-between items-start gap-4 mb-8 form-header">\r
            <div>\r
                <span class="block text-surface-900 dark:text-surface-0 font-bold text-2xl">\r
                    {{ mode === 'create' ? 'Cr\xE9er un produit' : 'D\xE9tails du produit' }}\r
                </span>\r
                <small class="text-surface-500 dark:text-surface-300">\r
                    Renseignez les informations principales, les prix et le statut de publication.\r
                </small>\r
            </div>\r
\r
            <button\r
                *ngIf="mode === 'edit' && !isEditing"\r
                pButton\r
                pRipple\r
                label="Modifier"\r
                icon="pi pi-pencil"\r
                severity="warn"\r
                (click)="enableEditing()"\r
                class="w-auto"\r
            ></button>\r
        </div>\r
\r
        <p-fluid class="grid grid-cols-12 gap-6 flex-wrap">\r
            <div class="col-span-12 lg:col-span-8">\r
                <div class="form-section mb-6">\r
                    <div class="grid grid-cols-12 gap-4">\r
                        <div class="col-span-12 mt-2">\r
                            <input\r
                                id="nom"\r
                                pInputText\r
                                type="text"\r
                                placeholder="Nom du produit"\r
                                [(ngModel)]="product.nom"\r
                                [disabled]="fieldsDisabled"\r
                                [invalid]="submitted && !product.nom?.trim()"\r
                                fluid\r
                            />\r
                            <small class="text-red-500" *ngIf="submitted && !product.nom?.trim() && isEditing">\r
                                Nom du produit obligatoire.\r
                            </small>\r
                        </div>\r
\r
                        <div class="col-span-12 mt-4">\r
                            <div class="grid grid-cols-12 gap-4">\r
                                <div class="col-span-12 lg:col-span-4">\r
                                    <p-inputnumber\r
                                        inputId="prix_achat"\r
                                        [(ngModel)]="product.prix_achat"\r
                                        mode="currency"\r
                                        currency="GNF"\r
                                        locale="fr-GN"\r
                                        [min]="0"\r
                                        [disabled]="fieldsDisabled"\r
                                        [invalid]="submitted && isPrixAchatRequired() && isPriceMissing(product.prix_achat)"\r
                                        placeholder="prix d'achat"\r
                                        fluid\r
                                    ></p-inputnumber>\r
                                    <small class="text-red-500" *ngIf="submitted && isPrixAchatRequired() && isPriceMissing(product.prix_achat) && isEditing">\r
                                        Prix d'achat obligatoire pour ce type.\r
                                    </small>\r
                                </div>\r
\r
                                <div class="col-span-12 lg:col-span-4">\r
                                    <p-inputnumber\r
                                        inputId="prix_vente"\r
                                        [(ngModel)]="product.prix_vente"\r
                                        mode="currency"\r
                                        currency="GNF"\r
                                        locale="fr-GN"\r
                                        [min]="0"\r
                                        [disabled]="fieldsDisabled"\r
                                        [invalid]="submitted && isPrixVenteRequired() && isPriceMissing(product.prix_vente)"\r
                                        placeholder="Prix de vente"\r
                                        fluid\r
                                    ></p-inputnumber>\r
                                    <small class="text-red-500" *ngIf="submitted && isPrixVenteRequired() && isPriceMissing(product.prix_vente) && isEditing">\r
                                        Prix de vente obligatoire pour ce type.\r
                                    </small>\r
                                </div>\r
\r
                                <div class="col-span-12 lg:col-span-4">\r
                                    <p-inputnumber\r
                                        inputId="cout"\r
                                        [(ngModel)]="product.cout"\r
                                        mode="currency"\r
                                        currency="GNF"\r
                                        locale="fr-GN"\r
                                        [min]="0"\r
                                        [disabled]="fieldsDisabled"\r
                                        placeholder="co\xFBt"\r
                                        fluid\r
                                    ></p-inputnumber>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-span-12 lg:col-span-4 mt-4" *ngIf="isPrixUsineVisible()">\r
                            <p-inputnumber\r
                                inputId="prix_usine"\r
                                [(ngModel)]="product.prix_usine"\r
                                mode="currency"\r
                                currency="GNF"\r
                                locale="fr-GN"\r
                                [min]="0"\r
                                [disabled]="fieldsDisabled"\r
                                [invalid]="submitted && isPrixUsineRequired() && isPriceMissing(product.prix_usine)"\r
                                placeholder="Prix usine"\r
                                fluid\r
                            ></p-inputnumber>\r
                            <small class="text-red-500" *ngIf="submitted && isPrixUsineRequired() && isPriceMissing(product.prix_usine) && isEditing">\r
                                Prix usine obligatoire pour "Fabricable".\r
                            </small>\r
                        </div>\r
\r
                        <div class="col-span-12 service-alert" *ngIf="showServicePriceError()">\r
                            <i class="pi pi-exclamation-circle mr-2"></i>\r
                            Pour un service, renseignez au moins un prix : achat ou vente.\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="form-section">\r
                    <div class="section-title">\r
                        <i class="pi pi-image mr-2"></i>\r
                        Visuel du produit\r
                    </div>\r
\r
                    <div *ngIf="isEditing">\r
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
                            styleClass="product-uploader border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 p-0 rounded-lg"\r
                        >\r
                            <ng-template #content>\r
                                <div\r
                                    class="w-full py-4 upload-dropzone"\r
                                    (click)="!fieldsDisabled && fileUploader.advancedFileInput.nativeElement.click()"\r
                                >\r
                                    <div *ngIf="!imagePreview && !product.image_url" class="h-48 flex flex-col justify-center items-center">\r
                                        <i class="pi pi-image text-primary text-4xl mb-4"></i>\r
                                        <span class="block font-semibold text-surface-900 dark:text-surface-0 text-lg">Ajouter une image</span>\r
                                        <span class="text-surface-500 text-sm mt-1">Cliquez pour s\xE9lectionner</span>\r
                                    </div>\r
\r
                                    <div *ngIf="imagePreview || product.image_url" class="relative w-full flex justify-center py-3">\r
                                        <div class="relative">\r
                                            <img\r
                                                [src]="imagePreview || product.getImageUrl()"\r
                                                alt="Image du produit"\r
                                                class="max-h-72 rounded shadow object-contain"\r
                                            />\r
                                            <button\r
                                                *ngIf="!fieldsDisabled"\r
                                                pButton\r
                                                pRipple\r
                                                rounded\r
                                                type="button"\r
                                                severity="danger"\r
                                                class="absolute -top-2 -right-2"\r
                                                (click)="removeImage($event)"\r
                                            >\r
                                                <i class="pi pi-times"></i>\r
                                            </button>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </ng-template>\r
                        </p-fileUpload>\r
                    </div>\r
\r
                    <div class="flex justify-center mt-2" *ngIf="!isEditing && product.image_url">\r
                        <img [src]="product.getImageUrl()" alt="Image du produit" class="max-h-72 rounded shadow object-contain" />\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div class="col-span-12 lg:col-span-4 flex flex-col gap-y-4 mt-7">\r
                <div class="border border-surface-200 dark:border-surface-700 rounded">\r
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Etat du produit</span>\r
                    <div class="p-4">\r
                        <div class="bg-surface-100 dark:bg-surface-700 py-2 px-4 flex items-center rounded">\r
                            <span class="text-black/90 dark:text-surface-0! font-bold mr-4">Status:</span>\r
                            <span class="text-black/60 dark:text-surface-0! font-semibold">{{ isActifSwitch ? 'Actif' : 'Inactif' }}</span>\r
                            <p-toggleswitch\r
                                [ngModel]="isActifSwitch"\r
                                (ngModelChange)="onStatutToggleChange($event)"\r
                                [disabled]="fieldsDisabled"\r
                                class="ml-auto"\r
                            ></p-toggleswitch>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="border border-surface-200 dark:border-surface-700 rounded">\r
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Type</span>\r
                    <div class="p-4">\r
                        <p-select\r
                            [options]="typeOptions"\r
                            [(ngModel)]="product.type"\r
                            (onChange)="onTypeChange()"\r
                            [disabled]="fieldsDisabled"\r
                            placeholder="S\xE9lectionner un type"\r
                        ></p-select>\r
                    </div>\r
                </div>\r
\r
                <div class="border border-surface-200 dark:border-surface-700 rounded">\r
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Quantit\xE9 en stock</span>\r
                    <div class="p-4">\r
                        <p-inputnumber\r
                            [(ngModel)]="product.qte_stock"\r
                            [showButtons]="true"\r
                            [min]="0"\r
                            [disabled]="isQteStockDisabled()"\r
                            placeholder="0"\r
                            fluid\r
                        ></p-inputnumber>\r
                    </div>\r
                    <small class="text-gray-500 block mt-2 mb-2 ml-4" *ngIf="product.type === 'service'">\r
                        <i class="pi pi-info-circle mr-1"></i>Le stock n'est pas g\xE9r\xE9 pour les services.\r
                    </small>\r
                </div>\r
\r
                <div class="sticky top-6 flex flex-col gap-4">\r
                    <div class="form-section p-4" *ngIf="isEditing">\r
                        <div class="flex gap-3">\r
                            <button\r
                                pButton\r
                                pRipple\r
                                [label]="mode === 'create' ? 'Enregistrer' : 'Sauvegarder'"\r
                                icon="pi pi-check"\r
                                (click)="onSubmit()"\r
                                [loading]="loading"\r
                                [disabled]="!isValid() || loading"\r
                                class="flex-1"\r
                            ></button>\r
                            <button\r
                                pButton\r
                                pRipple\r
                                label="Annuler"\r
                                icon="pi pi-times"\r
                                severity="secondary"\r
                                (click)="mode === 'create' ? onCancel() : cancelEditing()"\r
                                [disabled]="loading"\r
                                class="flex-1"\r
                            ></button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </p-fluid>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/pages/produits/produits-form/produits-form.scss */\n.product-form .mobile-form-container {\n  display: none;\n}\n.product-form .form-header {\n  border-bottom: 1px solid var(--surface-200);\n  padding-bottom: 1rem;\n}\n.product-form .form-section {\n  border: 1px solid var(--surface-200);\n  border-radius: 0.875rem;\n  background: var(--surface-0);\n  padding: 1.25rem;\n}\n.product-form .section-title {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  font-weight: 700;\n  color: var(--text-color);\n}\n.product-form .side-title {\n  font-weight: 700;\n  color: var(--text-color);\n  padding: 1rem 1rem 0.875rem;\n  border-bottom: 1px solid var(--surface-200);\n  background: color-mix(in srgb, var(--surface-50) 70%, transparent);\n}\n.product-form .helper-chip {\n  background: color-mix(in srgb, var(--blue-100) 50%, transparent);\n  border-radius: 999px;\n  padding: 0.35rem 0.7rem;\n  font-weight: 500;\n}\n.product-form .status-pill {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  border-radius: 999px;\n  padding: 0.2rem 0.6rem;\n}\n.product-form .status-pill-active {\n  background: #dcfce7;\n  color: #166534;\n}\n.product-form .status-pill-inactive {\n  background: #fef3c7;\n  color: #92400e;\n}\n.product-form .service-alert {\n  display: flex;\n  align-items: center;\n  color: #991b1b;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n  padding: 0.65rem 0.8rem;\n  font-size: 0.9rem;\n}\n.product-form .upload-dropzone {\n  cursor: pointer;\n  border-radius: 0.75rem;\n  transition: background-color 0.2s ease;\n}\n.product-form .upload-dropzone:hover {\n  background: color-mix(in srgb, var(--primary-50) 35%, transparent);\n}\n@media screen and (max-width: 768px) {\n  .product-form {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8f9fc !important;\n    margin: -0.5rem -0.875rem calc(-0.5rem - env(safe-area-inset-bottom));\n    padding: 0;\n    min-height: 100dvh;\n  }\n  .product-form .mobile-form-container {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: calc(0.75rem + env(safe-area-inset-top)) 1rem calc(5.5rem + env(safe-area-inset-bottom));\n    animation: mobileFade 0.24s ease-out;\n  }\n  .product-form .desktop-form-container {\n    display: none !important;\n  }\n  .product-form .mobile-form-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding-bottom: 0.25rem;\n  }\n  .product-form .mobile-form-back,\n  .product-form .mobile-form-edit {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 999px;\n    flex-shrink: 0;\n    color: #1e293b !important;\n    background: transparent !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .product-form .mobile-form-title-wrap {\n    flex: 1;\n    min-width: 0;\n  }\n  .product-form .mobile-form-title {\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n  }\n  .product-form .mobile-image-card {\n    background: #fff;\n    border-radius: 1rem;\n    overflow: hidden;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .product-form :host ::ng-deep .mobile-uploader {\n    border: 0 !important;\n    background: transparent !important;\n    box-shadow: none !important;\n  }\n  .product-form :host ::ng-deep .mobile-uploader .p-fileupload-header {\n    display: none;\n  }\n  .product-form :host ::ng-deep .mobile-uploader .p-fileupload-file-list {\n    display: none;\n  }\n  .product-form :host ::ng-deep .mobile-uploader .p-fileupload-content {\n    padding: 0;\n    border: 0;\n    min-height: auto;\n    height: auto !important;\n  }\n  .product-form .mobile-upload-zone {\n    cursor: pointer;\n    min-height: 11rem;\n  }\n  .product-form .mobile-upload-placeholder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 11rem;\n    color: #94a3b8;\n    gap: 0.5rem;\n  }\n  .product-form .mobile-upload-placeholder i {\n    font-size: 2rem;\n    color: #cbd5e1;\n  }\n  .product-form .mobile-upload-placeholder span {\n    font-size: 0.85rem;\n    font-weight: 600;\n  }\n  .product-form .mobile-upload-preview {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    padding: 0.75rem;\n  }\n  .product-form .mobile-upload-preview img {\n    max-height: 12rem;\n    width: auto;\n    border-radius: 0.75rem;\n    object-fit: contain;\n  }\n  .product-form .mobile-remove-img {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    width: 1.75rem !important;\n    height: 1.75rem !important;\n    border-radius: 999px !important;\n  }\n  .product-form .mobile-remove-img i {\n    font-size: 0.7rem;\n  }\n  .product-form .mobile-section-card {\n    background: #fff;\n    border-radius: 1rem;\n    padding: 1rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .product-form .mobile-field-label {\n    display: block;\n    font-size: 0.7rem;\n    font-weight: 700;\n    color: #94a3b8;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n    margin-bottom: 0.5rem;\n  }\n  .product-form .mobile-price-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.75rem;\n  }\n  .product-form .mobile-price-item {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .product-form .mobile-price-label {\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: #64748b;\n  }\n  .product-form .mobile-service-alert {\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n    margin-top: 0.6rem;\n    padding: 0.5rem 0.65rem;\n    background: #fef2f2;\n    border: 1px solid #fecaca;\n    border-radius: 0.65rem;\n    font-size: 0.8rem;\n    color: #991b1b;\n  }\n  .product-form .mobile-meta-row {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.75rem;\n  }\n  .product-form .mobile-meta-field {\n    display: flex;\n    flex-direction: column;\n  }\n  .product-form .mobile-info-hint {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n    margin-top: 0.5rem;\n    font-size: 0.75rem;\n    color: #94a3b8;\n    font-weight: 500;\n  }\n  .product-form .mobile-status-row {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  .product-form .mobile-status-label {\n    font-size: 0.85rem;\n    font-weight: 700;\n    color: #334155;\n  }\n  .product-form .mobile-status-value {\n    font-size: 0.85rem;\n    font-weight: 600;\n    color: #94a3b8;\n  }\n  .product-form .mobile-status-value.active {\n    color: #16a34a;\n  }\n  .product-form :host ::ng-deep .p-inputtext,\n  .product-form :host ::ng-deep .p-inputnumber-input,\n  .product-form :host ::ng-deep .p-select-label {\n    font-size: 16px !important;\n    min-height: 2.65rem;\n  }\n  .product-form .mobile-bottom-actions {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 50;\n    display: flex;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.92);\n    backdrop-filter: blur(16px);\n    -webkit-backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .product-form .mobile-btn-save {\n    flex: 1;\n    border-radius: 0.75rem !important;\n    font-weight: 700 !important;\n    min-height: 2.75rem;\n  }\n  .product-form .mobile-btn-cancel {\n    flex: 0 0 auto;\n    border-radius: 0.75rem !important;\n    font-weight: 600 !important;\n    min-height: 2.75rem;\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=produits-form.css.map */\n", "/* angular:styles/component:scss;66765cb0843a060eecf05ccfd1291fb2b8e0274bb4a2f1d5627c389b9d942bce;C:/laragon/www/FRONT/elm-front/src/app/pages/produits/produits-form/produits-form.ts */\n:host ::ng-deep .p-fileupload-header {\n  display: none;\n}\n:host ::ng-deep .p-fileupload-file-list {\n  display: none;\n}\n:host ::ng-deep .p-fileupload-content {\n  height: 20rem;\n}\n/*# sourceMappingURL=produits-form.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsForm, { className: "ProduitsForm", filePath: "src/app/pages/produits/produits-form/produits-form.ts", lineNumber: 68 });
})();

// src/app/pages/produits/produits-new/produits-new.ts
var ProduitsNew = class _ProduitsNew {
  router;
  messageService;
  produitService;
  document;
  loading = false;
  mobileBreakpoint = 768;
  mobilePwaClass = "produits-mobile-pwa";
  constructor(router, messageService, produitService, document) {
    this.router = router;
    this.messageService = messageService;
    this.produitService = produitService;
    this.document = document;
  }
  ngOnInit() {
    this.updateMobilePwaMode();
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }
  onResize() {
    this.updateMobilePwaMode();
  }
  updateMobilePwaMode() {
    if (typeof window === "undefined")
      return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }
  // =============================
  // SUBMIT
  // =============================
  onSubmitForm(dto) {
    this.loading = true;
    this.produitService.create(dto).subscribe({
      next: (createdProduit) => this.handleSuccess("Produit cr\xE9\xE9 avec succ\xE8s", createdProduit),
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
  handleSuccess(message, createdProduit) {
    this.messageService.add({
      severity: "success",
      summary: "Succ\xE8s",
      detail: message,
      life: 2e3
    });
    this.loading = false;
    if (createdProduit?.id) {
      this.router.navigate(["/produits/produits-edit", createdProduit.id]);
      return;
    }
    this.router.navigate(["/produits"]);
  }
  // =============================
  // ERROR
  // =============================
  handleError(fallback, err) {
    const detail = err?.error?.message || fallback;
    if (err?.status === 422 && err?.error?.errors) {
      const messages = Object.values(err.error.errors).flat();
      messages.forEach((msg) => {
        this.messageService.add({
          severity: "error",
          summary: detail,
          detail: msg,
          life: 5e3
        });
      });
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Erreur",
        detail,
        life: 5e3
      });
    }
    this.loading = false;
    console.error(err);
  }
  static \u0275fac = function ProduitsNew_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsNew)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ProduitService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsNew, selectors: [["app-produits-new"]], hostBindings: function ProduitsNew_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ProduitsNew_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
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
    CommonModule,
    ProduitsForm,
    ToastModule,
    Toast
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitsNew, [{
    type: Component,
    args: [{ selector: "app-produits-new", standalone: true, imports: [
      CommonModule,
      ProduitsForm,
      ToastModule
    ], providers: [MessageService], template: '<p-toast />\r\n\r\n<app-produits-form\r\n    mode="create"\r\n    [loading]="loading"\r\n    (submitForm)="onSubmitForm($event)"\r\n    (cancel)="onCancel()">\r\n</app-produits-form>  ' }]
  }], () => [{ type: Router }, { type: MessageService }, { type: ProduitService }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsNew, { className: "ProduitsNew", filePath: "src/app/pages/produits/produits-new/produits-new.ts", lineNumber: 23 });
})();

// src/app/pages/produits/produits-edit/produits-edit.ts
function ProduitsEdit_app_produits_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-produits-form", 1);
    \u0275\u0275listener("submitForm", function ProduitsEdit_app_produits_form_1_Template_app_produits_form_submitForm_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmitForm($event));
    })("cancel", function ProduitsEdit_app_produits_form_1_Template_app_produits_form_cancel_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("initialData", ctx_r1.initialData)("loading", ctx_r1.loading);
  }
}
var ProduitsEdit = class _ProduitsEdit {
  route;
  router;
  produitService;
  messageService;
  document;
  loading = false;
  produitId = null;
  initialData = null;
  mobileBreakpoint = 768;
  mobilePwaClass = "produits-mobile-pwa";
  constructor(route, router, produitService, messageService, document) {
    this.route = route;
    this.router = router;
    this.produitService = produitService;
    this.messageService = messageService;
    this.document = document;
  }
  ngOnInit() {
    this.updateMobilePwaMode();
    const idParam = this.route.snapshot.paramMap.get("id");
    const parsedId = idParam ? Number(idParam) : NaN;
    if (!Number.isFinite(parsedId) || parsedId <= 0) {
      this.router.navigate(["/produits"]);
      return;
    }
    this.produitId = parsedId;
    this.loadProduit(parsedId);
  }
  onSubmitForm(dto) {
    if (!this.produitId)
      return;
    this.loading = true;
    this.produitService.update(this.produitId, dto).subscribe({
      next: (updatedProduit) => {
        this.initialData = updatedProduit;
        this.loading = false;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Produit modifi\xE9 avec succ\xE8s",
          life: 3e3
        });
      },
      error: (error) => {
        this.loading = false;
        this.showApiError(error, "Erreur lors de la modification du produit");
      }
    });
  }
  onCancel() {
    this.router.navigate(["/produits"]);
  }
  loadProduit(id) {
    this.loading = true;
    this.produitService.getById(id).subscribe({
      next: (produit) => {
        this.initialData = produit;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.showApiError(error, "Erreur lors du chargement du produit");
      }
    });
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }
  onResize() {
    this.updateMobilePwaMode();
  }
  updateMobilePwaMode() {
    if (typeof window === "undefined")
      return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }
  showApiError(error, fallback) {
    const detail = error?.error?.message || fallback;
    this.messageService.add({
      severity: "error",
      summary: "Erreur",
      detail,
      life: 5e3
    });
  }
  static \u0275fac = function ProduitsEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsEdit)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ProduitService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsEdit, selectors: [["app-produits-edit"]], hostBindings: function ProduitsEdit_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ProduitsEdit_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 2, vars: 1, consts: [["mode", "edit", 3, "initialData", "loading", "submitForm", "cancel", 4, "ngIf"], ["mode", "edit", 3, "submitForm", "cancel", "initialData", "loading"]], template: function ProduitsEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275template(1, ProduitsEdit_app_produits_form_1_Template, 1, 2, "app-produits-form", 0);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.initialData);
    }
  }, dependencies: [CommonModule, NgIf, ProduitsForm, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitsEdit, [{
    type: Component,
    args: [{ selector: "app-produits-edit", standalone: true, imports: [CommonModule, ProduitsForm, ToastModule], providers: [MessageService], template: '<p-toast />\r\n\r\n<app-produits-form\r\n    *ngIf="initialData"\r\n    mode="edit"\r\n    [initialData]="initialData"\r\n    [loading]="loading"\r\n    (submitForm)="onSubmitForm($event)"\r\n    (cancel)="onCancel()">\r\n</app-produits-form>\r\n' }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ProduitService }, { type: MessageService }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsEdit, { className: "ProduitsEdit", filePath: "src/app/pages/produits/produits-edit/produits-edit.ts", lineNumber: 19 });
})();

// src/app/pages/produits/produits.routes.ts
var produits_routes_default = [
  {
    path: "",
    component: ProduitsListe,
    canActivate: [authorizationGuard],
    data: { permissions: ["produits.read"] }
  },
  {
    path: "produits",
    component: ProduitsListe,
    canActivate: [authorizationGuard],
    data: { permissions: ["produits.read"] }
  },
  {
    path: "produits-new",
    component: ProduitsNew,
    canActivate: [authorizationGuard],
    data: { permissions: ["produits.create"] }
  },
  {
    path: "produits-edit/:id",
    component: ProduitsEdit,
    canActivate: [authorizationGuard],
    data: { permissions: ["produits.update"] }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  produits_routes_default as default
};
//# sourceMappingURL=chunk-CLFIRNKZ.js.map
