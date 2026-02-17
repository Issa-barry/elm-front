import {
  Password,
  PasswordModule
} from "./chunk-U5EV76QZ.js";
import "./chunk-PDC4WNQS.js";
import {
  RoleService
} from "./chunk-J7K4IVT7.js";
import {
  isValidPhoneNumber,
  parsePhoneNumberWithError
} from "./chunk-JGT6B74A.js";
import {
  COUNTRIES
} from "./chunk-MFW4RCM3.js";
import {
  PhoneFormatPipe
} from "./chunk-I52ZMC4J.js";
import {
  Menu,
  MenuModule
} from "./chunk-HBQ7KAGJ.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-G5PVWGBM.js";
import "./chunk-A2LLWIIX.js";
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
  SelectableRow,
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-QPQPF4QG.js";
import "./chunk-5SLVYV4D.js";
import "./chunk-3C4VBMIP.js";
import "./chunk-XSYQJ4W6.js";
import "./chunk-XMHI6SP7.js";
import "./chunk-3RHV3JZZ.js";
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
import "./chunk-2UZZQ3O5.js";
import "./chunk-YUZALO6D.js";
import "./chunk-YWX4RJZN.js";
import {
  IconField,
  InputIcon
} from "./chunk-BXX2KJCE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VMVXPPNB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ButtonDirective,
  ButtonModule
} from "./chunk-V2JIX33N.js";
import "./chunk-SRAUJRPD.js";
import {
  Ripple,
  RippleModule
} from "./chunk-WSCE5RX7.js";
import "./chunk-DHPXHGGE.js";
import {
  ConfirmationService,
  MessageService,
  PrimeTemplate
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
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
  ɵɵtwoWayProperty
} from "./chunk-FZZISKXM.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/services/users/users.service.ts
var UserService = class _UserService {
  http;
  apiUrl = `${environment.apiUrl}/users`;
  authUrl = `${environment.apiUrl}/auth`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Créer un nouvel utilisateur (via le endpoint register)
   */
  createUser(data) {
    return this.http.post(`${this.authUrl}/register`, data);
  }
  /**
   * Récupérer la liste des utilisateurs avec filtres optionnels
   */
  getUsers(filters) {
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
   * Récupérer un utilisateur par son ID
   */
  getUser(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  /**
   * Mettre à jour un utilisateur
   */
  updateUser(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  /**
   * Basculer le statut actif/inactif d'un utilisateur
   */
  toggleUserStatus(id) {
    return this.http.patch(`${this.apiUrl}/${id}/toggle-status`, {});
  }
  /**
   * Supprimer un utilisateur (soft delete)
   */
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  /**
   * Rechercher des utilisateurs
   * Recherche dans: nom, prenom, email, phone, reference
   */
  searchUsers(searchTerm) {
    const params = new HttpParams().set("search", searchTerm);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir uniquement les utilisateurs actifs
   */
  getActiveUsers() {
    const params = new HttpParams().set("is_active", "true");
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les utilisateurs inactifs
   */
  getInactiveUsers() {
    const params = new HttpParams().set("is_active", "false");
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les utilisateurs par pays
   */
  getUsersByCountry(country) {
    const params = new HttpParams().set("pays", country);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les utilisateurs par ville
   */
  getUsersByCity(city) {
    const params = new HttpParams().set("ville", city);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les utilisateurs avec pagination
   */
  getUsersPaginated(page = 1, perPage = 10, filters) {
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
   * Trier les utilisateurs
   */
  sortUsers(sortBy, sortOrder = "asc") {
    const params = new HttpParams().set("sort_by", sortBy || "created_at").set("sort_order", sortOrder);
    return this.http.get(this.apiUrl, { params });
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/contacts/utilisateurs/utilisateurs-liste/utilisateurs-liste.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ["nom_complet", "email", "phone", "reference", "pays", "ville"];
var _c2 = () => ({ "min-width": "150px" });
function UtilisateursListe_section_17_article_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function UtilisateursListe_section_17_article_1_button_13_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const user_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r4.deleteUser($event, user_r4.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", "Supprimer");
  }
}
function UtilisateursListe_section_17_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 27);
    \u0275\u0275listener("click", function UtilisateursListe_section_17_article_1_Template_article_click_0_listener($event) {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goToEdit($event, user_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275element(10, "p-tag", 33);
    \u0275\u0275elementStart(11, "div", 34)(12, "button", 35);
    \u0275\u0275listener("click", function UtilisateursListe_section_17_article_1_Template_button_click_12_listener($event) {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goToEdit($event, user_r4.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, UtilisateursListe_section_17_article_1_button_13_Template, 1, 1, "button", 36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.getInitials(user_r4.nom_complet), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.nom_complet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email || \u0275\u0275pipeBind2(8, 8, user_r4.phone, "INT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", user_r4.is_active ? "Actif" : "Inactif")("severity", user_r4.is_active ? "success" : "danger");
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", ctx_r4.canUpdate ? "Modifier" : "Voir")("disabled", !ctx_r4.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.canDelete);
  }
}
function UtilisateursListe_section_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 25);
    \u0275\u0275template(1, UtilisateursListe_section_17_article_1_Template, 14, 11, "article", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.mobileVisibleUsers)("ngForTrackBy", ctx_r4.trackByUserId);
  }
}
function UtilisateursListe_ng_template_18_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursListe_ng_template_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, "Aucun utilisateur.");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursListe_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UtilisateursListe_ng_template_18_div_0_Template, 2, 0, "div", 38)(1, UtilisateursListe_ng_template_18_div_1_Template, 2, 0, "div", 38);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r4.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.loading && !ctx_r4.mobileFilteredUsers.length);
  }
}
function UtilisateursListe_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 41);
    \u0275\u0275listener("click", function UtilisateursListe_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadMoreMobile());
    });
    \u0275\u0275elementEnd()();
  }
}
function UtilisateursListe_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function UtilisateursListe_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.navigateToCreate());
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function UtilisateursListe_ng_template_25_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function UtilisateursListe_ng_template_25_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.navigateToCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function UtilisateursListe_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "p-icon-field", 45);
    \u0275\u0275element(2, "p-inputicon", 18);
    \u0275\u0275elementStart(3, "input", 46);
    \u0275\u0275listener("input", function UtilisateursListe_ng_template_25_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      const dt_r10 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(ctx_r4.onGlobalFilter(dt_r10, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 47)(5, "p-select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function UtilisateursListe_ng_template_25_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.selectedStatus, $event) || (ctx_r4.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function UtilisateursListe_ng_template_25_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.filterByStatus());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UtilisateursListe_ng_template_25_button_6_Template, 1, 0, "button", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c2));
    \u0275\u0275property("options", ctx_r4.statusOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.selectedStatus);
    \u0275\u0275property("showClear", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.canCreate);
  }
}
function UtilisateursListe_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 51)(2, "span", 52);
    \u0275\u0275text(3, " Nom complet ");
    \u0275\u0275element(4, "p-sortIcon", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 54)(6, "span", 52);
    \u0275\u0275text(7, " T\xE9l\xE9phone ");
    \u0275\u0275element(8, "p-sortIcon", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 56)(10, "span", 52);
    \u0275\u0275text(11, " R\xF4le ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "th", 57)(13, "span", 52);
    \u0275\u0275text(14, " Adresse ");
    \u0275\u0275element(15, "p-sortIcon", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "th", 59)(17, "span", 52);
    \u0275\u0275text(18, " Statut ");
    \u0275\u0275element(19, "p-sortIcon", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "th", 61);
    \u0275\u0275text(21, " Actions ");
    \u0275\u0275elementEnd()();
  }
}
function UtilisateursListe_ng_template_29_ng_container_16_p_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 75);
  }
  if (rf & 2) {
    const role_r13 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", role_r13)("severity", ctx_r4.getRoleSeverity(role_r13));
  }
}
function UtilisateursListe_ng_template_29_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UtilisateursListe_ng_template_29_ng_container_16_p_tag_1_Template, 1, 2, "p-tag", 74);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", user_r14.role_names || user_r14.roles);
  }
}
function UtilisateursListe_ng_template_29_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursListe_ng_template_29_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function UtilisateursListe_ng_template_29_button_32_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const user_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleStatus($event, user_r14.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("p-button-success", user_r14.is_active)("p-button-danger", !user_r14.is_active);
    \u0275\u0275property("icon", user_r14.is_active ? "pi pi-lock-open" : "pi pi-lock")("pTooltip", user_r14.is_active ? "D\xE9sactiver" : "Activer");
  }
}
function UtilisateursListe_ng_template_29_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function UtilisateursListe_ng_template_29_button_33_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const user_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteUser($event, user_r14.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", "Supprimer");
  }
}
function UtilisateursListe_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 62)(1, "td")(2, "div", 52)(3, "div", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 65);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 66)(12, "span", 67);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "phoneFormat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, UtilisateursListe_ng_template_29_ng_container_16_Template, 2, 1, "ng-container", 68)(17, UtilisateursListe_ng_template_29_ng_template_17_Template, 2, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "div", 52);
    \u0275\u0275element(21, "span");
    \u0275\u0275elementStart(22, "div")(23, "div", 69);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 70);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275element(28, "p-tag", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td")(30, "div", 72)(31, "button", 35);
    \u0275\u0275listener("click", function UtilisateursListe_ng_template_29_Template_button_click_31_listener($event) {
      const user_r14 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToEdit($event, user_r14.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, UtilisateursListe_ng_template_29_button_32_Template, 1, 6, "button", 73)(33, UtilisateursListe_ng_template_29_button_33_Template, 1, 1, "button", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r14 = ctx.$implicit;
    const noRole_r17 = \u0275\u0275reference(18);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("pSelectableRow", user_r14);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r4.getInitials(user_r14.nom_complet), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r14.nom_complet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r14.reference);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 18, user_r14.phone, "INT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (user_r14.role_names == null ? null : user_r14.role_names.length) || (user_r14.roles == null ? null : user_r14.roles.length))("ngIfElse", noRole_r17);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(\u0275\u0275interpolate1("fi fi-", user_r14.code_pays == null ? null : user_r14.code_pays.toLowerCase(), " text-xl"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r14.ville);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r14.quartier);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", user_r14.is_active ? "Actif" : "Inactif")("severity", user_r14.is_active ? "success" : "danger");
    \u0275\u0275advance(3);
    \u0275\u0275property("pTooltip", ctx_r4.canUpdate ? "Modifier" : "Voir")("disabled", !ctx_r4.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.canDelete);
  }
}
function UtilisateursListe_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 78)(2, "div", 79);
    \u0275\u0275element(3, "i", 80);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucun utilisateur trouv\xE9");
    \u0275\u0275elementEnd()()()();
  }
}
var UtilisateursListe = class _UtilisateursListe {
  userService;
  router;
  messageService;
  confirmationService;
  authService;
  document;
  users = [];
  selectedUser = null;
  loading = false;
  selectedStatus = null;
  mobileSearchTerm = "";
  mobilePageSize = 10;
  mobileVisibleCount = this.mobilePageSize;
  mobileBreakpoint = 768;
  mobilePwaClass = "utilisateurs-mobile-pwa";
  statusOptions = [
    { label: "Actif", value: true },
    { label: "Inactif", value: false }
  ];
  mobileStatusMenuItems = [
    { label: "Tous les statuts", command: () => this.applyMobileStatusFilter(null) },
    { label: "Actif", command: () => this.applyMobileStatusFilter(true) },
    { label: "Inactif", command: () => this.applyMobileStatusFilter(false) }
  ];
  canCreate = false;
  canUpdate = false;
  canDelete = false;
  constructor(userService, router, messageService, confirmationService, authService, document) {
    this.userService = userService;
    this.router = router;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.authService = authService;
    this.document = document;
    this.canCreate = this.authService.hasPermission("users.create");
    this.canUpdate = this.authService.hasPermission("users.update");
    this.canDelete = this.authService.hasPermission("users.delete");
  }
  ngOnInit() {
    this.loadUsers();
    this.syncMobilePwaMode();
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }
  onWindowResize() {
    this.syncMobilePwaMode();
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  onMobileSearchChange() {
    this.mobileVisibleCount = this.mobilePageSize;
  }
  get mobileFilteredUsers() {
    const term = this.mobileSearchTerm.trim().toLowerCase();
    if (!term)
      return this.users;
    return this.users.filter((u) => u.nom_complet && u.nom_complet.toLowerCase().includes(term) || u.email && u.email.toLowerCase().includes(term) || u.phone && u.phone.replace(/\s/g, "").includes(term) || u.reference && u.reference.toLowerCase().includes(term));
  }
  get mobileVisibleUsers() {
    return this.mobileFilteredUsers.slice(0, this.mobileVisibleCount);
  }
  get canLoadMoreMobile() {
    return this.mobileVisibleCount < this.mobileFilteredUsers.length;
  }
  loadMoreMobile() {
    this.mobileVisibleCount += this.mobilePageSize;
  }
  trackByUserId(_index, user) {
    return user.id;
  }
  syncMobilePwaMode() {
    if (typeof window === "undefined")
      return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }
  loadUsers() {
    this.loading = true;
    const filters = this.selectedStatus !== null ? { is_active: this.selectedStatus } : void 0;
    this.userService.getUsers(filters).subscribe({
      next: (response) => {
        if (response.success) {
          this.users = Array.isArray(response.data) ? response.data : response.data.data;
          this.mobileVisibleCount = this.mobilePageSize;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des utilisateurs:", error);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger les utilisateurs"
        });
        this.loading = false;
      }
    });
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  filterByStatus() {
    this.loadUsers();
  }
  applyMobileStatusFilter(status) {
    this.selectedStatus = status;
    this.loadUsers();
  }
  navigateToCreate() {
    this.router.navigate(["contacts/utilisateurs/new"]);
  }
  onRowSelect(event) {
    this.router.navigate(["contacts/utilisateurs/edit", event.data.id]);
  }
  goToEdit(event, userId) {
    event.stopPropagation();
    this.router.navigate(["contacts/utilisateurs/edit/", userId]);
  }
  toggleStatus(event, userId) {
    event.stopPropagation();
    const user = this.users.find((u) => u.id === userId);
    const action = user?.is_active ? "d\xE9sactiver" : "activer";
    this.confirmationService.confirm({
      message: `Voulez-vous vraiment ${action} cet utilisateur ?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Oui",
      rejectLabel: "Non",
      accept: () => {
        this.userService.toggleUserStatus(userId).subscribe({
          next: (response) => {
            if (response.success) {
              this.messageService.add({
                severity: "success",
                summary: "Succ\xE8s",
                detail: response.message
              });
              this.loadUsers();
            }
          },
          error: (error) => {
            console.error("Erreur:", error);
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: "Impossible de changer le statut de l'utilisateur"
            });
          }
        });
      }
    });
  }
  deleteUser(event, userId) {
    event.stopPropagation();
    this.confirmationService.confirm({
      message: "\xCAtes-vous s\xFBr de vouloir supprimer cet utilisateur ? Cette action est irr\xE9versible.",
      header: "Confirmation de suppression",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Oui, supprimer",
      rejectLabel: "Annuler",
      acceptButtonStyleClass: "p-button-danger",
      accept: () => {
        this.userService.deleteUser(userId).subscribe({
          next: (response) => {
            if (response.success) {
              this.messageService.add({
                severity: "success",
                summary: "Succ\xE8s",
                detail: "Utilisateur supprim\xE9 avec succ\xE8s"
              });
              this.loadUsers();
            }
          },
          error: (error) => {
            console.error("Erreur:", error);
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: "Impossible de supprimer l'utilisateur"
            });
          }
        });
      }
    });
  }
  getInitials(nomComplet) {
    if (!nomComplet)
      return "??";
    const parts = nomComplet.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return nomComplet.substring(0, 2).toUpperCase();
  }
  getRoleSeverity(role) {
    const severities = {
      "admin": "danger",
      "manager": "warn",
      "employe": "info",
      "superviseur": "success"
    };
    return severities[role?.toLowerCase()] || "secondary";
  }
  static \u0275fac = function UtilisateursListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilisateursListe)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilisateursListe, selectors: [["app-utilisateurs-liste"]], hostBindings: function UtilisateursListe_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function UtilisateursListe_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 33, vars: 20, consts: [["statusMenu", ""], ["mobileListState", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["noRole", ""], [1, "utilisateurs-mobile-app"], [1, "mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour \xE0 l'accueil", 1, "p-button-rounded", "p-button-text", "mobile-back", 3, "click"], [1, "mobile-title-wrap"], [1, "mobile-title"], [1, "mobile-subtitle"], ["appendTo", "body", "styleClass", "mobile-status-menu", 3, "model", "popup"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", "aria-label", "Filtrer par statut", 1, "p-button-rounded", "p-button-text", "mobile-add", 3, "click"], [1, "mobile-scroll"], [1, "mobile-search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Nom, email, t\xE9l\xE9phone...", 1, "w-full", 3, "ngModelChange", "ngModel"], ["class", "mobile-list", 4, "ngIf", "ngIfElse"], ["class", "mobile-load-more", 4, "ngIf"], ["type", "button", "class", "mobile-fab", "aria-label", "Nouveau utilisateur", 3, "click", 4, "ngIf"], [1, "card", "utilisateurs-desktop"], ["paginatorDropdownAppendTo", "body", "responsiveLayout", "scroll", "currentPageReportTemplate", "  {first} / {last} de {totalRecords} entr\xE9es", "selectionMode", "single", "styleClass", "cursor-pointer", 3, "selectionChange", "onRowSelect", "value", "paginator", "rows", "showCurrentPageReport", "loading", "rowsPerPageOptions", "globalFilterFields", "selection", "rowHover"], [1, "mobile-list"], ["class", "mobile-user-card", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mobile-user-card", 3, "click"], ["aria-hidden", "true", 1, "mobile-card-avatar"], [1, "mobile-card-body"], [1, "mobile-card-name"], [1, "mobile-card-meta"], [1, "mobile-card-footer"], ["styleClass", "mobile-status-tag", 3, "value", "severity"], [1, "mobile-card-actions"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", 3, "click", "pTooltip", "disabled"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "class", "p-button-rounded p-button-text p-button-danger p-button-sm", "tooltipPosition", "top", 3, "pTooltip", "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-danger", "p-button-sm", 3, "click", "pTooltip"], ["class", "mobile-state", 4, "ngIf"], [1, "mobile-state"], [1, "mobile-load-more"], ["pButton", "", "label", "Charger plus", "icon", "pi pi-angle-down", 1, "mobile-load-more-btn", 3, "click"], ["type", "button", "aria-label", "Nouveau utilisateur", 1, "mobile-fab", 3, "click"], [1, "pi", "pi-user-plus"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80", "order-1", "sm:order-0"], ["pInputText", "", "type", "text", "placeholder", "Rechercher un utilisateur...", 1, "w-full", 3, "input"], [1, "flex", "gap-2", "w-full", "sm:w-auto", "flex-order-0", "sm:flex-order-1"], ["placeholder", "Tous les statuts", 3, "ngModelChange", "onChange", "options", "ngModel", "showClear"], ["pButton", "", "outlined", "", "class", "flex-shrink-0", "icon", "pi pi-user-plus", "label", "Nouveau", 3, "click", 4, "ngIf"], ["pButton", "", "outlined", "", "icon", "pi pi-user-plus", "label", "Nouveau", 1, "flex-shrink-0", 3, "click"], ["pSortableColumn", "nom_complet", 1, "white-space-nowrap", 2, "width", "25%"], [1, "flex", "items-center", "gap-2"], ["field", "nom_complet"], ["pSortableColumn", "phone", 1, "white-space-nowrap", 2, "width", "15%"], ["field", "phone"], [1, "white-space-nowrap", 2, "width", "12%"], ["pSortableColumn", "pays", 1, "white-space-nowrap", 2, "width", "18%"], ["field", "pays"], ["pSortableColumn", "is_active", 1, "white-space-nowrap", 2, "width", "10%"], ["field", "is_active"], [1, "white-space-nowrap", 2, "width", "10%"], [3, "pSelectableRow"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "bg-primary-100", "text-primary-700", "font-semibold"], [1, "font-semibold"], [1, "text-sm", "text-surface-500", "mt-1"], [1, "flex", "items-center", "gap-1"], [1, "text-surface-700"], [4, "ngIf", "ngIfElse"], [1, "font-medium"], [1, "text-sm", "text-surface-500"], [3, "value", "severity"], [1, "flex", "gap-2"], ["pButton", "", "pRipple", "", "class", "p-button-rounded p-button-text p-button-sm", "tooltipPosition", "top", 3, "icon", "p-button-success", "p-button-danger", "pTooltip", "click", 4, "ngIf"], ["class", "mr-1", 3, "value", "severity", 4, "ngFor", "ngForOf"], [1, "mr-1", 3, "value", "severity"], [1, "text-surface-400"], ["pButton", "", "pRipple", "", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", 3, "click", "icon", "pTooltip"], ["colspan", "6", 1, "text-center", "py-8"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "pi", "pi-users", "text-4xl"]], template: function UtilisateursListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-confirmDialog");
      \u0275\u0275elementStart(1, "div", 8)(2, "header", 9)(3, "button", 10);
      \u0275\u0275listener("click", function UtilisateursListe_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goHome());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 11)(5, "h1", 12);
      \u0275\u0275text(6, "Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 13);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "p-menu", 14, 0);
      \u0275\u0275elementStart(11, "button", 15);
      \u0275\u0275listener("click", function UtilisateursListe_Template_button_click_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        const statusMenu_r2 = \u0275\u0275reference(10);
        return \u0275\u0275resetView(statusMenu_r2.toggle($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 16)(13, "section", 17)(14, "p-icon-field");
      \u0275\u0275element(15, "p-inputicon", 18);
      \u0275\u0275elementStart(16, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursListe_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.mobileSearchTerm, $event) || (ctx.mobileSearchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function UtilisateursListe_Template_input_ngModelChange_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMobileSearchChange());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(17, UtilisateursListe_section_17_Template, 2, 2, "section", 20)(18, UtilisateursListe_ng_template_18_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(20, UtilisateursListe_div_20_Template, 2, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, UtilisateursListe_button_21_Template, 2, 0, "button", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 23)(23, "p-table", 24, 2);
      \u0275\u0275twoWayListener("selectionChange", function UtilisateursListe_Template_p_table_selectionChange_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedUser, $event) || (ctx.selectedUser = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onRowSelect", function UtilisateursListe_Template_p_table_onRowSelect_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRowSelect($event));
      });
      \u0275\u0275template(25, UtilisateursListe_ng_template_25_Template, 7, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(27, UtilisateursListe_ng_template_27_Template, 22, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(29, UtilisateursListe_ng_template_29_Template, 34, 21, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(31, UtilisateursListe_ng_template_31_Template, 6, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const mobileListState_r18 = \u0275\u0275reference(19);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.mobileFilteredUsers.length, " utilisateur", ctx.mobileFilteredUsers.length !== 1 ? "s" : "");
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.mobileStatusMenuItems)("popup", true);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.mobileSearchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.mobileVisibleUsers.length)("ngIfElse", mobileListState_r18);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.canLoadMoreMobile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canCreate);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.users)("paginator", true)("rows", 10)("showCurrentPageReport", true)("loading", ctx.loading)("rowsPerPageOptions", \u0275\u0275pureFunction0(18, _c0))("globalFilterFields", \u0275\u0275pureFunction0(19, _c1));
      \u0275\u0275twoWayProperty("selection", ctx.selectedUser);
      \u0275\u0275property("rowHover", true);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TableModule,
    Table,
    SortableColumn,
    SelectableRow,
    SortIcon,
    InputTextModule,
    InputText,
    ButtonModule,
    ButtonDirective,
    RippleModule,
    Ripple,
    IconField,
    InputIcon,
    TagModule,
    Tag,
    TooltipModule,
    Tooltip,
    SelectModule,
    Select,
    ConfirmDialogModule,
    ConfirmDialog,
    MenuModule,
    Menu,
    PhoneFormatPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.utilisateurs-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .utilisateurs-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .utilisateurs-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100dvh;\n    height: 100vh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back[_ngcontent-%COMP%], \n   .mobile-add[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-user-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-user-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n  }\n  .mobile-card-meta[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n  }\n  .mobile-load-more-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 999px;\n    font-weight: 600;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.96);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=utilisateurs-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilisateursListe, [{
    type: Component,
    args: [{ selector: "app-utilisateurs-liste", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TableModule,
      InputTextModule,
      ButtonModule,
      RippleModule,
      IconField,
      InputIcon,
      TagModule,
      TooltipModule,
      SelectModule,
      ConfirmDialogModule,
      MenuModule,
      PhoneFormatPipe
    ], providers: [MessageService, ConfirmationService], template: `<p-confirmDialog></p-confirmDialog>\r
\r
<!-- Mobile: app-like list (\u2264768px) -->\r
<div class="utilisateurs-mobile-app">\r
  <header class="mobile-header">\r
    <button\r
      pButton\r
      pRipple\r
      icon="pi pi-arrow-left"\r
      class="p-button-rounded p-button-text mobile-back"\r
      aria-label="Retour \xE0 l'accueil"\r
      (click)="goHome()"\r
    ></button>\r
    <div class="mobile-title-wrap">\r
      <h1 class="mobile-title">Utilisateurs</h1>\r
      <p class="mobile-subtitle">{{ mobileFilteredUsers.length }} utilisateur{{ mobileFilteredUsers.length !== 1 ? 's' : '' }}</p>\r
    </div>\r
    <p-menu\r
      #statusMenu\r
      [model]="mobileStatusMenuItems"\r
      [popup]="true"\r
      appendTo="body"\r
      styleClass="mobile-status-menu"\r
    />\r
    <button\r
      pButton\r
      pRipple\r
      icon="pi pi-filter"\r
      class="p-button-rounded p-button-text mobile-add"\r
      aria-label="Filtrer par statut"\r
      (click)="statusMenu.toggle($event)"\r
    ></button>\r
  </header>\r
\r
  <div class="mobile-scroll">\r
    <section class="mobile-search">\r
      <p-icon-field>\r
        <p-inputicon class="pi pi-search" />\r
        <input\r
          pInputText\r
          type="text"\r
          [(ngModel)]="mobileSearchTerm"\r
          (ngModelChange)="onMobileSearchChange()"\r
          placeholder="Nom, email, t\xE9l\xE9phone..."\r
          class="w-full"\r
        />\r
      </p-icon-field>\r
    </section>\r
\r
    <section class="mobile-list" *ngIf="!loading && mobileVisibleUsers.length; else mobileListState">\r
      <article\r
        class="mobile-user-card"\r
        *ngFor="let user of mobileVisibleUsers; trackBy: trackByUserId"\r
        (click)="goToEdit($event, user.id)"\r
      >\r
        <div class="mobile-card-avatar" aria-hidden="true">\r
          {{ getInitials(user.nom_complet) }}\r
        </div>\r
        <div class="mobile-card-body">\r
          <div class="mobile-card-name">{{ user.nom_complet }}</div>\r
          <div class="mobile-card-meta">{{ user.email || (user.phone | phoneFormat:'INT') }}</div>\r
          <div class="mobile-card-footer">\r
            <p-tag\r
              [value]="user.is_active ? 'Actif' : 'Inactif'"\r
              [severity]="user.is_active ? 'success' : 'danger'"\r
              styleClass="mobile-status-tag"\r
            />\r
            <div class="mobile-card-actions">\r
              <button\r
                pButton\r
                pRipple\r
                icon="pi pi-eye"\r
                class="p-button-rounded p-button-text p-button-sm"\r
                [pTooltip]="canUpdate ? 'Modifier' : 'Voir'"\r
                tooltipPosition="top"\r
                (click)="goToEdit($event, user.id)"\r
                [disabled]="!canUpdate"\r
              ></button>\r
              <button\r
                *ngIf="canDelete"\r
                pButton\r
                pRipple\r
                icon="pi pi-trash"\r
                class="p-button-rounded p-button-text p-button-danger p-button-sm"\r
                [pTooltip]="'Supprimer'"\r
                tooltipPosition="top"\r
                (click)="$event.stopPropagation(); deleteUser($event, user.id)"\r
              ></button>\r
            </div>\r
          </div>\r
        </div>\r
      </article>\r
    </section>\r
\r
    <ng-template #mobileListState>\r
      <div class="mobile-state" *ngIf="loading">Chargement...</div>\r
      <div class="mobile-state" *ngIf="!loading && !mobileFilteredUsers.length">Aucun utilisateur.</div>\r
    </ng-template>\r
\r
    <div class="mobile-load-more" *ngIf="!loading && canLoadMoreMobile">\r
      <button pButton label="Charger plus" icon="pi pi-angle-down" class="mobile-load-more-btn" (click)="loadMoreMobile()"></button>\r
    </div>\r
  </div>\r
\r
  <button\r
    *ngIf="canCreate"\r
    type="button"\r
    class="mobile-fab"\r
    aria-label="Nouveau utilisateur"\r
    (click)="navigateToCreate()"\r
  >\r
    <i class="pi pi-user-plus"></i>\r
  </button>\r
</div>\r
\r
<!-- Desktop: table -->\r
<div class="card utilisateurs-desktop">\r
  <p-table\r
    #dt\r
    [value]="users"\r
    [paginator]="true"\r
    paginatorDropdownAppendTo="body"\r
    [rows]="10"\r
    [showCurrentPageReport]="true"\r
    [loading]="loading"\r
    responsiveLayout="scroll"\r
    currentPageReportTemplate="  {first} / {last} de {totalRecords} entr\xE9es"\r
    [rowsPerPageOptions]="[10, 25, 50]"\r
    [globalFilterFields]="['nom_complet', 'email', 'phone', 'reference', 'pays', 'ville']"\r
    selectionMode="single"\r
    [(selection)]="selectedUser"\r
    (onRowSelect)="onRowSelect($event)"\r
    [rowHover]="true"\r
    styleClass="cursor-pointer"\r
  >\r
    <ng-template #caption>\r
      <div class="flex flex-wrap gap-2 items-center justify-between">\r
        <p-icon-field class="w-full sm:w-80 order-1 sm:order-0">\r
          <p-inputicon class="pi pi-search" />\r
          <input\r
            pInputText\r
            type="text"\r
            (input)="onGlobalFilter(dt, $event)" \r
            placeholder="Rechercher un utilisateur..."\r
            class="w-full"\r
          />\r
        </p-icon-field>\r
\r
        <div class="flex gap-2 w-full sm:w-auto flex-order-0 sm:flex-order-1">\r
          <!-- Filtre par statut -->\r
          <p-select\r
            [options]="statusOptions"\r
            [(ngModel)]="selectedStatus"\r
            (onChange)="filterByStatus()"\r
            placeholder="Tous les statuts"\r
            [style]="{ 'min-width': '150px' }"\r
            [showClear]="true"\r
          ></p-select>\r
\r
          <!-- Bouton Nouveau -->\r
          <button\r
            *ngIf="canCreate"\r
            (click)="navigateToCreate()"\r
            pButton\r
            outlined\r
            class="flex-shrink-0"\r
            icon="pi pi-user-plus"\r
            label="Nouveau"\r
          ></button>\r
        </div>\r
      </div>\r
    </ng-template>\r
\r
    <ng-template #header>\r
      <tr>\r
        <th pSortableColumn="nom_complet" class="white-space-nowrap" style="width:25%">\r
          <span class="flex items-center gap-2">\r
            Nom complet <p-sortIcon field="nom_complet"></p-sortIcon>\r
          </span>\r
        </th>\r
\r
        <th pSortableColumn="phone" class="white-space-nowrap" style="width:15%">\r
          <span class="flex items-center gap-2">\r
            T\xE9l\xE9phone <p-sortIcon field="phone"></p-sortIcon>\r
          </span>\r
        </th>\r
        <th class="white-space-nowrap" style="width:12%">\r
          <span class="flex items-center gap-2">\r
            R\xF4le\r
          </span>\r
        </th>\r
        <th pSortableColumn="pays" class="white-space-nowrap" style="width:18%">\r
          <span class="flex items-center gap-2">\r
            Adresse <p-sortIcon field="pays"></p-sortIcon>\r
          </span>\r
        </th>\r
        <th pSortableColumn="is_active" class="white-space-nowrap" style="width:10%">\r
          <span class="flex items-center gap-2">\r
            Statut <p-sortIcon field="is_active"></p-sortIcon>\r
          </span>\r
        </th>\r
        <th class="white-space-nowrap" style="width:10%">\r
          Actions\r
        </th>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template #body let-user>\r
      <tr [pSelectableRow]="user">\r
        <td>\r
          <div class="flex items-center gap-2">\r
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-semibold">\r
              {{ getInitials(user.nom_complet) }}\r
            </div>\r
            <div>\r
              <div class="font-semibold">{{ user.nom_complet }}</div>\r
              <div class="text-sm text-surface-500 mt-1">{{ user.reference }}</div>\r
            </div>\r
          </div>\r
        </td>\r
        <td>\r
          <div class="flex items-center gap-1">\r
             <span class="text-surface-700">{{ user.phone | phoneFormat:'INT' }}</span>\r
          </div>\r
        </td>\r
        <td>\r
          <ng-container *ngIf="(user.role_names?.length || user.roles?.length); else noRole">\r
            <p-tag\r
              *ngFor="let role of (user.role_names || user.roles)"\r
              [value]="role"\r
              [severity]="getRoleSeverity(role)"\r
              class="mr-1"\r
            ></p-tag>\r
          </ng-container>\r
          <ng-template #noRole>\r
            <span class="text-surface-400">-</span>\r
          </ng-template>\r
        </td>\r
        <td>\r
          <div class="flex items-center gap-2">\r
            <span class="fi fi-{{ user.code_pays?.toLowerCase() }} text-xl"></span>\r
            <div>\r
              <div class="font-medium">{{ user.ville }}</div>\r
              <div class="text-sm text-surface-500">{{ user.quartier }}</div>\r
            </div>\r
          </div>\r
        </td>\r
        <td>\r
          <p-tag\r
            [value]="user.is_active ? 'Actif' : 'Inactif'"\r
            [severity]="user.is_active ? 'success' : 'danger'"\r
          ></p-tag>\r
        </td>\r
        <td>\r
          <div class="flex gap-2">\r
            <button\r
              pButton\r
              pRipple\r
              icon="pi pi-eye"\r
              class="p-button-rounded p-button-text p-button-sm"\r
              [pTooltip]="canUpdate ? 'Modifier' : 'Voir'"\r
              tooltipPosition="top"\r
              (click)="goToEdit($event, user.id)"\r
              [disabled]="!canUpdate"\r
            ></button>\r
            <button\r
              *ngIf="canUpdate"\r
              pButton\r
              pRipple\r
              [icon]="user.is_active ? 'pi pi-lock-open' : 'pi pi-lock'"\r
              class="p-button-rounded p-button-text p-button-sm"\r
              [class.p-button-success]="user.is_active"\r
              [class.p-button-danger]="!user.is_active"\r
              [pTooltip]="user.is_active ? 'D\xE9sactiver' : 'Activer'"\r
              tooltipPosition="top"\r
              (click)="toggleStatus($event, user.id)"\r
            ></button>\r
            <button\r
              *ngIf="canDelete"\r
              pButton\r
              pRipple\r
              icon="pi pi-trash"\r
              class="p-button-rounded p-button-text p-button-danger p-button-sm"\r
              [pTooltip]="'Supprimer'"\r
              tooltipPosition="top"\r
              (click)="deleteUser($event, user.id)"\r
            ></button>\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template #emptymessage>\r
      <tr>\r
        <td colspan="6" class="text-center py-8">\r
          <div class="flex flex-col items-center gap-3 text-surface-500">\r
            <i class="pi pi-users text-4xl"></i>\r
            <span>Aucun utilisateur trouv\xE9</span>\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
</div>\r
`, styles: ["/* src/app/pages/contacts/utilisateurs/utilisateurs-liste/utilisateurs-liste.scss */\n:host {\n  display: block;\n}\n.utilisateurs-mobile-app {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .utilisateurs-desktop {\n    display: none;\n  }\n  .utilisateurs-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100dvh;\n    height: 100vh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back,\n  .mobile-add {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-user-card {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-user-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n  }\n  .mobile-card-meta {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-actions {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions .p-button {\n    width: 2rem;\n    height: 2rem;\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more {\n    padding-top: 0.5rem;\n  }\n  .mobile-load-more-btn {\n    width: 100%;\n    border-radius: 999px;\n    font-weight: 600;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab .pi {\n    font-size: 1.35rem;\n  }\n  .mobile-fab:active {\n    transform: scale(0.96);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=utilisateurs-liste.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: Router }, { type: MessageService }, { type: ConfirmationService }, { type: AuthService }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { onWindowResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilisateursListe, { className: "UtilisateursListe", filePath: "src/app/pages/contacts/utilisateurs/utilisateurs-liste/utilisateurs-liste.ts", lineNumber: 46 });
})();

// src/app/pages/contacts/utilisateurs/utilisateurs-form/utilisateurs-form.ts
function UtilisateursForm_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " R\xF4le obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Nom obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Pr\xE9nom obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", country_r1.flag, \u0275\u0275sanitizeUrl)("alt", country_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r1.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r1.name);
  }
}
function UtilisateursForm_ng_template_40_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", country_r2.flag, \u0275\u0275sanitizeUrl)("alt", country_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r2.dialCode);
  }
}
function UtilisateursForm_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UtilisateursForm_ng_template_40_div_0_Template, 4, 3, "div", 38);
  }
  if (rf & 2) {
    const country_r2 = ctx.$implicit;
    \u0275\u0275property("ngIf", country_r2);
  }
}
function UtilisateursForm_small_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1, " T\xE9l\xE9phone obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.phoneError, " ");
  }
}
function UtilisateursForm_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Ville obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Quartier obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_div_57_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.passwordError, " ");
  }
}
function UtilisateursForm_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 40);
    \u0275\u0275text(2, " Mot de passe ");
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-password", 41);
    \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_div_57_Template_p_password_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.model.password, $event) || (ctx_r2.model.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UtilisateursForm_div_57_small_6_Template, 2, 1, "small", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.model.password);
    \u0275\u0275property("toggleMask", true)("feedback", true)("invalid", ctx_r2.submitted && !!ctx_r2.passwordError)("disabled", ctx_r2.fieldsDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitted && ctx_r2.passwordError && ctx_r2.isEditing);
  }
}
function UtilisateursForm_div_58_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Les mots de passe ne correspondent pas. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 42);
    \u0275\u0275text(2, " Confirmer le mot de passe ");
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-password", 43);
    \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_div_58_Template_p_password_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.model.password_confirmation, $event) || (ctx_r2.model.password_confirmation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UtilisateursForm_div_58_small_6_Template, 2, 0, "small", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.model.password_confirmation);
    \u0275\u0275property("toggleMask", true)("feedback", false)("invalid", ctx_r2.submitted && ctx_r2.model.password !== ctx_r2.model.password_confirmation)("disabled", ctx_r2.fieldsDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitted && ctx_r2.model.password !== ctx_r2.model.password_confirmation && ctx_r2.isEditing);
  }
}
function UtilisateursForm_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "button", 45);
    \u0275\u0275listener("click", function UtilisateursForm_div_59_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275listener("click", function UtilisateursForm_div_59_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCancel());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r2.mode === "create" ? "Enregistrer" : "Sauvegarder")("loading", ctx_r2.loading)("disabled", !ctx_r2.isValid() || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.loading);
  }
}
var UtilisateursForm = class _UtilisateursForm {
  roleService;
  mode = "create";
  initialData = null;
  loading = false;
  submitForm = new EventEmitter();
  cancel = new EventEmitter();
  submitted = false;
  isEditing = false;
  model = {};
  // Rôles disponibles
  availableRoles = [];
  // Validation du téléphone
  phoneError = null;
  phoneCountry = "GN";
  // Validation du mot de passe
  passwordError = null;
  // Liste des pays pour le sélecteur
  countries = COUNTRIES;
  constructor(roleService) {
    this.roleService = roleService;
  }
  ngOnInit() {
    this.loadRoles();
    this.initializeModel();
  }
  ngOnChanges(changes) {
    if (changes["initialData"]) {
      const change = changes["initialData"];
      if (change.currentValue && Object.keys(change.currentValue).length > 0) {
        this.initializeModel();
      }
    }
  }
  loadRoles() {
    this.roleService.getRoles().subscribe({
      next: (response) => {
        if (response.success) {
          this.availableRoles = response.data.map((r) => ({
            label: r.role.name.charAt(0).toUpperCase() + r.role.name.slice(1),
            value: r.role.name
          }));
        }
      },
      error: () => {
        this.availableRoles = [
          { label: "Admin", value: "admin" },
          { label: "Manager", value: "manager" },
          { label: "Employ\xE9", value: "employe" }
        ];
      }
    });
  }
  initializeModel() {
    if (this.initialData) {
      this.model = {
        nom: this.initialData.nom,
        prenom: this.initialData.prenom,
        phone: this.initialData.phone,
        email: this.initialData.email,
        pays: this.initialData.pays,
        code_pays: this.initialData.code_pays,
        code_phone_pays: this.initialData.code_phone_pays,
        ville: this.initialData.ville,
        quartier: this.initialData.quartier,
        role: this.initialData.roles?.[0],
        reference: this.initialData.reference
      };
    } else {
      this.model = {};
    }
    if (this.mode === "create" && !this.model.ville?.trim()) {
      this.model.ville = "Conakry";
    }
    if (this.mode === "create") {
      this.isEditing = true;
    } else if (this.mode === "edit" && this.initialData) {
      this.isEditing = true;
    }
    if (this.model.code_pays) {
      this.phoneCountry = this.model.code_pays;
    } else if (this.model.phone) {
      this.detectPhoneCountry(this.model.phone);
    }
    this.submitted = false;
    this.phoneError = null;
    this.passwordError = null;
  }
  detectPhoneCountry(phone) {
    try {
      const phoneNumber = parsePhoneNumberWithError(phone);
      if (phoneNumber && phoneNumber.country) {
        this.phoneCountry = phoneNumber.country;
      }
    } catch (error) {
    }
  }
  validatePhone() {
    if (!this.model.phone?.trim()) {
      this.phoneError = "T\xE9l\xE9phone obligatoire.";
      return false;
    }
    try {
      const isValid = isValidPhoneNumber(this.model.phone, this.phoneCountry);
      if (!isValid) {
        this.phoneError = `Num\xE9ro invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }
      const phoneNumber = parsePhoneNumberWithError(this.model.phone, this.phoneCountry);
      if (phoneNumber) {
        this.model.phone = phoneNumber.formatInternational();
        this.model.code_pays = this.phoneCountry;
        this.model.pays = this.getCountryName(this.phoneCountry);
        this.phoneError = null;
        return true;
      }
      this.phoneError = "Format de num\xE9ro invalide.";
      return false;
    } catch (error) {
      this.phoneError = "Format de num\xE9ro invalide.";
      return false;
    }
  }
  validatePassword() {
    if (this.mode === "edit") {
      if (!this.model.password?.trim()) {
        this.passwordError = null;
        return true;
      }
    }
    if (this.mode === "create" && !this.model.password?.trim()) {
      this.passwordError = "Mot de passe obligatoire.";
      return false;
    }
    const password = this.model.password || "";
    if (password.length < 8) {
      this.passwordError = "Le mot de passe doit contenir au moins 8 caract\xE8res.";
      return false;
    }
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      this.passwordError = "Le mot de passe doit contenir des majuscules et des minuscules.";
      return false;
    }
    if (!/[0-9]/.test(password)) {
      this.passwordError = "Le mot de passe doit contenir au moins un chiffre.";
      return false;
    }
    if (this.model.password !== this.model.password_confirmation) {
      this.passwordError = "Les mots de passe ne correspondent pas.";
      return false;
    }
    this.passwordError = null;
    return true;
  }
  getCountryName(code) {
    const country = this.countries.find((c) => c.code === code);
    return country ? country.name : code;
  }
  getSelectedCountryDialCode() {
    const country = this.countries.find((c) => c.code === this.phoneCountry);
    return country ? country.dialCode : "";
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
  isValid() {
    if (!this.model.role) {
      return false;
    }
    const basicValidation = !!(this.model.nom?.trim() && this.model.prenom?.trim() && this.model.phone?.trim() && this.model.ville?.trim() && this.model.quartier?.trim());
    if (!basicValidation) {
      return false;
    }
    if (!this.validatePhone()) {
      return false;
    }
    if (this.mode === "create" && !this.validatePassword()) {
      return false;
    }
    return true;
  }
  enableEditing() {
    this.isEditing = true;
  }
  cancelEditing() {
    this.isEditing = false;
    this.submitted = false;
    this.phoneError = null;
    this.passwordError = null;
    this.initializeModel();
  }
  onSubmit() {
    this.submitted = true;
    if (!this.isValid()) {
      return;
    }
    this.submitForm.emit(__spreadValues({}, this.model));
  }
  onCancel() {
    this.cancel.emit();
  }
  get fieldsDisabled() {
    return this.mode === "edit" && !this.isEditing || this.loading;
  }
  get formTitle() {
    if (this.mode === "create") {
      return "Cr\xE9er un compte utilisateur";
    }
    const reference = this.model.reference?.trim();
    return reference ? `Modification compte utilisateur : ${reference}` : "Modification compte utilisateur";
  }
  static \u0275fac = function UtilisateursForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilisateursForm)(\u0275\u0275directiveInject(RoleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilisateursForm, selectors: [["app-utilisateurs-form"]], inputs: { mode: "mode", initialData: "initialData", loading: "loading" }, outputs: { submitForm: "submitForm", cancel: "cancel" }, features: [\u0275\u0275NgOnChangesFeature], decls: 60, vars: 41, consts: [[1, "card", "utilisateurs-form-card"], [1, "flex", "justify-between", "items-center", "mb-6", "utilisateurs-form-title"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "lg:col-span-2", "utilisateurs-form-sidebar"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", "mb-4"], [1, "m-0", "p-0", "text-surface-600", "dark:text-surface-200", "leading-normal", "mr-4"], [1, "col-span-12", "lg:col-span-10"], [1, "mb-6", "col-span-12", "md:col-span-6"], ["for", "role", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["class", "text-red-500", 4, "ngIf"], ["id", "role", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un r\xF4le", "fluid", "", 3, "ngModelChange", "ngModel", "options", "disabled", "invalid"], ["for", "email", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "email", "type", "email", "pInputText", "", "fluid", "", "placeholder", "exemple@email.com", 3, "ngModelChange", "ngModel", "disabled"], ["for", "nom", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "nom", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["for", "prenom", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "prenom", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], [1, "mb-6", "col-span-12"], ["for", "phone", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], [1, "flex", "gap-2", "items-start"], [1, "phone-country-select"], ["id", "codePays", "optionLabel", "name", "optionValue", "code", "placeholder", "Pays", 3, "ngModelChange", "onChange", "ngModel", "options", "disabled"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], [1, "flex-1"], ["id", "phone", "type", "tel", "pInputText", "", "fluid", "", "placeholder", "622 00 00 00", 3, "ngModelChange", "input", "blur", "ngModel", "invalid", "disabled"], ["class", "text-red-500 block mt-2", 4, "ngIf"], ["for", "ville", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "ville", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["for", "quartier", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "quartier", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["class", "mb-6 col-span-12 md:col-span-6", 4, "ngIf"], ["class", "col-span-12 form-actions", 4, "ngIf"], [1, "text-red-500"], [1, "flex", "items-center", "gap-2"], [1, "w-5", "h-auto", "rounded-sm", 3, "src", "alt"], [1, "font-semibold", "text-primary"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "text-red-500", "block", "mt-2"], ["for", "password", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "password", "fluid", "", "placeholder", "Min. 8 caract\xE8res, majuscules, minuscules et chiffres", "promptLabel", "Entrez un mot de passe", "weakLabel", "Faible", "mediumLabel", "Moyen", "strongLabel", "Fort", 3, "ngModelChange", "ngModel", "toggleMask", "feedback", "invalid", "disabled"], ["for", "password_confirmation", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "password_confirmation", "fluid", "", "placeholder", "Confirmez le mot de passe", 3, "ngModelChange", "ngModel", "toggleMask", "feedback", "invalid", "disabled"], [1, "col-span-12", "form-actions"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "form-action-submit", 3, "click", "label", "loading", "disabled"], ["pButton", "", "pRipple", "", "label", "Annuler", "icon", "pi pi-times", "severity", "secondary", 1, "form-action-cancel", 3, "click", "disabled"]], template: function UtilisateursForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "div", 5)(7, "p", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 3)(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12, " R\xF4le ");
      \u0275\u0275template(13, UtilisateursForm_span_13_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_p_select_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.role, $event) || (ctx.model.role = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, UtilisateursForm_small_15_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "label", 12);
      \u0275\u0275text(18, " Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.email, $event) || (ctx.model.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 8)(21, "label", 14);
      \u0275\u0275text(22, " Nom ");
      \u0275\u0275template(23, UtilisateursForm_span_23_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.nom, $event) || (ctx.model.nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, UtilisateursForm_small_25_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 8)(27, "label", 16);
      \u0275\u0275text(28, " Pr\xE9nom ");
      \u0275\u0275template(29, UtilisateursForm_span_29_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.prenom, $event) || (ctx.model.prenom = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, UtilisateursForm_small_31_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 18)(33, "label", 19);
      \u0275\u0275text(34, " T\xE9l\xE9phone ");
      \u0275\u0275template(35, UtilisateursForm_span_35_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 20)(37, "div", 21)(38, "p-select", 22);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_p_select_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.phoneCountry, $event) || (ctx.phoneCountry = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function UtilisateursForm_Template_p_select_onChange_38_listener() {
        return ctx.onCountryChange();
      });
      \u0275\u0275template(39, UtilisateursForm_ng_template_39_Template, 6, 4, "ng-template", 23)(40, UtilisateursForm_ng_template_40_Template, 1, 1, "ng-template", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 25)(42, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.phone, $event) || (ctx.model.phone = $event);
        return $event;
      });
      \u0275\u0275listener("input", function UtilisateursForm_Template_input_input_42_listener() {
        return ctx.onPhoneInput();
      })("blur", function UtilisateursForm_Template_input_blur_42_listener() {
        return ctx.onPhoneBlur();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(43, UtilisateursForm_small_43_Template, 2, 0, "small", 27)(44, UtilisateursForm_small_44_Template, 2, 1, "small", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 8)(46, "label", 28);
      \u0275\u0275text(47, " Ville ");
      \u0275\u0275template(48, UtilisateursForm_span_48_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.ville, $event) || (ctx.model.ville = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, UtilisateursForm_small_50_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 8)(52, "label", 30);
      \u0275\u0275text(53, " Quartier ");
      \u0275\u0275template(54, UtilisateursForm_span_54_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.quartier, $event) || (ctx.model.quartier = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, UtilisateursForm_small_56_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, UtilisateursForm_div_57_Template, 7, 6, "div", 32)(58, UtilisateursForm_div_58_Template, 7, 6, "div", 32)(59, UtilisateursForm_div_59_Template, 3, 4, "div", 33);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.formTitle, " ");
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.role);
      \u0275\u0275property("options", ctx.availableRoles)("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && !ctx.model.role);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !ctx.model.role && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.email);
      \u0275\u0275property("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.nom);
      \u0275\u0275property("invalid", ctx.submitted && !(ctx.model.nom == null ? null : ctx.model.nom.trim()))("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.model.nom == null ? null : ctx.model.nom.trim()) && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.prenom);
      \u0275\u0275property("invalid", ctx.submitted && !(ctx.model.prenom == null ? null : ctx.model.prenom.trim()))("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.model.prenom == null ? null : ctx.model.prenom.trim()) && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.phoneCountry);
      \u0275\u0275property("options", ctx.countries)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.phone);
      \u0275\u0275property("invalid", (ctx.submitted || ctx.phoneError) && (!(ctx.model.phone == null ? null : ctx.model.phone.trim()) || !!ctx.phoneError))("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.model.phone == null ? null : ctx.model.phone.trim()) && ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.phoneError && (ctx.model.phone == null ? null : ctx.model.phone.trim()) && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.ville);
      \u0275\u0275property("invalid", ctx.submitted && !(ctx.model.ville == null ? null : ctx.model.ville.trim()))("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.model.ville == null ? null : ctx.model.ville.trim()) && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.quartier);
      \u0275\u0275property("invalid", ctx.submitted && !(ctx.model.quartier == null ? null : ctx.model.quartier.trim()))("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.model.quartier == null ? null : ctx.model.quartier.trim()) && ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "create");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "create");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    Select,
    InputText,
    ButtonModule,
    ButtonDirective,
    PrimeTemplate,
    RippleModule,
    Ripple,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    PasswordModule,
    Password
  ], styles: ["\n\n.phone-country-select[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 8rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.form-action-submit[_ngcontent-%COMP%], \n.form-action-cancel[_ngcontent-%COMP%] {\n  width: auto;\n}\n@media (max-width: 768px) {\n  .utilisateurs-form-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .utilisateurs-form-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .utilisateurs-form-card[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    padding: 0;\n    background: transparent;\n  }\n  .phone-country-select[_ngcontent-%COMP%] {\n    width: 7rem;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n    padding-top: 0.5rem;\n  }\n  .form-action-submit[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .form-action-cancel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=utilisateurs-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilisateursForm, [{
    type: Component,
    args: [{ selector: "app-utilisateurs-form", standalone: true, imports: [
      CommonModule,
      Select,
      InputText,
      ButtonModule,
      RippleModule,
      FormsModule,
      PasswordModule
    ], template: `<div class="card utilisateurs-form-card">\r
  <div class="flex justify-between items-center mb-6 utilisateurs-form-title">\r
    <span class="text-surface-900 dark:text-surface-0 text-xl font-bold">\r
      {{ formTitle }}\r
    </span>\r
  </div>\r
\r
  <div class="grid grid-cols-12 gap-4">\r
    <div class="col-span-12 lg:col-span-2 utilisateurs-form-sidebar">\r
      <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">\r
        <!-- Utilisateur -->\r
      </div>\r
      <p class="m-0 p-0 text-surface-600 dark:text-surface-200 leading-normal mr-4">\r
       <!-- Renseignez les informations du compte utilisateur. -->\r
      </p>\r
    </div>\r
\r
    <div class="col-span-12 lg:col-span-10">\r
      <div class="grid grid-cols-12 gap-4">\r
        <!-- R\xF4le de l'utilisateur -->\r
        <div class="mb-6 col-span-12 md:col-span-6">\r
          <label for="role" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
           R\xF4le <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <p-select\r
            id="role"\r
            [(ngModel)]="model.role"\r
            [options]="availableRoles"\r
            optionLabel="label"\r
            optionValue="value"\r
            placeholder="S\xE9lectionner un r\xF4le"\r
            [disabled]="fieldsDisabled"\r
            [invalid]="submitted && !model.role"\r
            fluid\r
          ></p-select>\r
          <small class="text-red-500" *ngIf="submitted && !model.role && isEditing">\r
            R\xF4le obligatoire.\r
          </small>\r
        </div>\r
\r
        <!-- Email -->\r
        <div class="mb-6 col-span-12 md:col-span-6">\r
          <label for="email" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Email\r
          </label>\r
          <input\r
            id="email"\r
            type="email"\r
            pInputText\r
            fluid\r
            [(ngModel)]="model.email"\r
            [disabled]="fieldsDisabled"\r
            placeholder="exemple@email.com"\r
          />\r
        </div>\r
\r
\r
        <!-- Nom -->\r
        <div class="mb-6 col-span-12 md:col-span-6">\r
          <label for="nom" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Nom <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <input\r
            id="nom"\r
            type="text"\r
            pInputText\r
            fluid\r
            [(ngModel)]="model.nom"\r
            [invalid]="submitted && !model.nom?.trim()"\r
            [disabled]="fieldsDisabled"\r
          />\r
          <small class="text-red-500" *ngIf="submitted && !model.nom?.trim() && isEditing">\r
            Nom obligatoire.\r
          </small>\r
        </div>\r
\r
        <!-- Pr\xE9nom -->\r
        <div class="mb-6 col-span-12 md:col-span-6">\r
          <label for="prenom" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Pr\xE9nom <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <input\r
            id="prenom"\r
            type="text"\r
            pInputText\r
            fluid\r
            [(ngModel)]="model.prenom"\r
            [invalid]="submitted && !model.prenom?.trim()"\r
            [disabled]="fieldsDisabled"\r
          />\r
          <small class="text-red-500" *ngIf="submitted && !model.prenom?.trim() && isEditing">\r
            Pr\xE9nom obligatoire.\r
          </small>\r
        </div>\r
\r
        \r
        <!-- T\xE9l\xE9phone avec s\xE9lecteur de pays -->\r
        <div class="mb-6 col-span-12">\r
          <label for="phone" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            T\xE9l\xE9phone <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <div class="flex gap-2 items-start">\r
            <!-- S\xE9lecteur de pays (compact : drapeau + code) -->\r
            <div class="phone-country-select">\r
              <p-select\r
                id="codePays"\r
                [(ngModel)]="phoneCountry"\r
                [options]="countries"\r
                optionLabel="name"\r
                optionValue="code"\r
                placeholder="Pays"\r
                [disabled]="fieldsDisabled"\r
                (onChange)="onCountryChange()"\r
              >\r
                <ng-template let-country pTemplate="item">\r
                  <div class="flex items-center gap-2">\r
                    <img [src]="country.flag" [alt]="country.name" class="w-5 h-auto rounded-sm" />\r
                    <span class="font-semibold text-primary">{{ country.dialCode }}</span>\r
                    <span>{{ country.name }}</span>\r
                  </div>\r
                </ng-template>\r
                <ng-template let-country pTemplate="selectedItem">\r
                  <div class="flex items-center gap-2" *ngIf="country">\r
                    <img [src]="country.flag" [alt]="country.name" class="w-5 h-auto rounded-sm" />\r
                    <span class="font-semibold text-primary">{{ country.dialCode }}</span>\r
                  </div>\r
                </ng-template>\r
              </p-select>\r
            </div>\r
\r
            <!-- Champ t\xE9l\xE9phone -->\r
            <div class="flex-1">\r
              <input\r
                id="phone"\r
                type="tel"\r
                pInputText\r
                fluid\r
                [(ngModel)]="model.phone"\r
                [invalid]="(submitted || phoneError) && (!model.phone?.trim() || !!phoneError)"\r
                [disabled]="fieldsDisabled"\r
                (input)="onPhoneInput()"\r
                (blur)="onPhoneBlur()"\r
                placeholder="622 00 00 00"\r
              />\r
            </div>\r
          </div>\r
\r
          <!-- Messages d'erreur pour le t\xE9l\xE9phone -->\r
          <small class="text-red-500 block mt-2" *ngIf="submitted && !model.phone?.trim() && isEditing">\r
            T\xE9l\xE9phone obligatoire.\r
          </small>\r
          <small class="text-red-500 block mt-2" *ngIf="phoneError && model.phone?.trim() && isEditing">\r
            {{ phoneError }}\r
          </small>\r
        </div>\r
\r
        <!-- Ville -->\r
        <div class="mb-6 col-span-12 md:col-span-6">\r
          <label for="ville" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Ville <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <input\r
            id="ville"\r
            type="text"\r
            pInputText\r
            fluid\r
            [(ngModel)]="model.ville"\r
            [invalid]="submitted && !model.ville?.trim()"\r
            [disabled]="fieldsDisabled"\r
          />\r
          <small class="text-red-500" *ngIf="submitted && !model.ville?.trim() && isEditing">\r
            Ville obligatoire.\r
          </small>\r
        </div>\r
\r
        <!-- Quartier -->\r
        <div class="mb-6 col-span-12 md:col-span-6">\r
          <label for="quartier" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Quartier <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <input\r
            id="quartier"\r
            type="text"\r
            pInputText\r
            fluid\r
            [(ngModel)]="model.quartier"\r
            [invalid]="submitted && !model.quartier?.trim()"\r
            [disabled]="fieldsDisabled"\r
          />\r
          <small class="text-red-500" *ngIf="submitted && !model.quartier?.trim() && isEditing">\r
            Quartier obligatoire.\r
          </small>\r
        </div>\r
\r
        <!-- Mot de passe (uniquement en cr\xE9ation) -->\r
        <div class="mb-6 col-span-12 md:col-span-6" *ngIf="mode === 'create'">\r
          <label for="password" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Mot de passe <span class="text-red-500">*</span>\r
          </label>\r
          <p-password\r
            id="password"\r
            [(ngModel)]="model.password"\r
            [toggleMask]="true"\r
            [feedback]="true"\r
            [invalid]="submitted && !!passwordError"\r
            [disabled]="fieldsDisabled"\r
            fluid\r
            placeholder="Min. 8 caract\xE8res, majuscules, minuscules et chiffres"\r
            promptLabel="Entrez un mot de passe"\r
            weakLabel="Faible"\r
            mediumLabel="Moyen"\r
            strongLabel="Fort"\r
          ></p-password>\r
          <small class="text-red-500" *ngIf="submitted && passwordError && isEditing">\r
            {{ passwordError }}\r
          </small>\r
        </div>\r
\r
        <!-- Confirmation mot de passe (uniquement en cr\xE9ation) -->\r
        <div class="mb-6 col-span-12 md:col-span-6" *ngIf="mode === 'create'">\r
          <label for="password_confirmation" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Confirmer le mot de passe <span class="text-red-500">*</span>\r
          </label>\r
          <p-password\r
            id="password_confirmation"\r
            [(ngModel)]="model.password_confirmation"\r
            [toggleMask]="true"\r
            [feedback]="false"\r
            [invalid]="submitted && model.password !== model.password_confirmation"\r
            [disabled]="fieldsDisabled"\r
            fluid\r
            placeholder="Confirmez le mot de passe"\r
          ></p-password>\r
          <small class="text-red-500" *ngIf="submitted && model.password !== model.password_confirmation && isEditing">\r
            Les mots de passe ne correspondent pas.\r
          </small>\r
        </div>\r
\r
        <!-- Boutons -->\r
        <div class="col-span-12 form-actions" *ngIf="isEditing">\r
          <button\r
            pButton\r
            pRipple\r
            [label]="mode === 'create' ? 'Enregistrer' : 'Sauvegarder'"\r
            icon="pi pi-check"\r
            (click)="onSubmit()"\r
            [loading]="loading"\r
            [disabled]="!isValid() || loading"\r
            class="form-action-submit"\r
          ></button>\r
\r
          <button\r
            pButton\r
            pRipple\r
            label="Annuler"\r
            icon="pi pi-times"\r
            severity="secondary"\r
            (click)="onCancel()"\r
            [disabled]="loading"\r
            class="form-action-cancel"\r
          ></button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/contacts/utilisateurs/utilisateurs-form/utilisateurs-form.scss */\n.phone-country-select {\n  flex-shrink: 0;\n  width: 8rem;\n}\n.form-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.form-action-submit,\n.form-action-cancel {\n  width: auto;\n}\n@media (max-width: 768px) {\n  .utilisateurs-form-title {\n    display: none;\n  }\n  .utilisateurs-form-sidebar {\n    display: none;\n  }\n  .utilisateurs-form-card {\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    padding: 0;\n    background: transparent;\n  }\n  .phone-country-select {\n    width: 7rem;\n  }\n  .form-actions {\n    flex-direction: column;\n    gap: 0.75rem;\n    padding-top: 0.5rem;\n  }\n  .form-action-submit {\n    width: 100%;\n    justify-content: center;\n  }\n  .form-action-cancel {\n    display: none;\n  }\n}\n/*# sourceMappingURL=utilisateurs-form.css.map */\n"] }]
  }], () => [{ type: RoleService }], { mode: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilisateursForm, { className: "UtilisateursForm", filePath: "src/app/pages/contacts/utilisateurs/utilisateurs-form/utilisateurs-form.ts", lineNumber: 45 });
})();

// src/app/pages/contacts/utilisateurs/utilisateurs-new/utilisateurs-new.ts
var UtilisateursNew = class _UtilisateursNew {
  userService;
  messageService;
  router;
  loading = false;
  constructor(userService, messageService, router) {
    this.userService = userService;
    this.messageService = messageService;
    this.router = router;
  }
  onCancel() {
    this.router.navigate(["contacts/utilisateurs"]);
  }
  onSubmit(data) {
    this.loading = true;
    const payload = {
      nom: data.nom || "",
      prenom: data.prenom || "",
      phone: (data.phone || "").replace(/\s+/g, ""),
      email: data.email || void 0,
      pays: data.pays || "Guin\xE9e",
      code_pays: data.code_pays || "GN",
      code_phone_pays: this.getCodePhonePays(data.code_pays || "GN"),
      ville: data.ville || "",
      quartier: data.quartier || "",
      password: data.password || "",
      password_confirmation: data.password_confirmation || "",
      role: data.role || ""
    };
    this.userService.createUser(payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.messageService.add({
            severity: "success",
            summary: "Succ\xE8s",
            detail: "Utilisateur cr\xE9\xE9 avec succ\xE8s"
          });
          const createdUser = response.data?.user;
          setTimeout(() => {
            this.router.navigate(["contacts/utilisateurs/edit", createdUser?.id || ""]);
          }, 1500);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors de la cr\xE9ation:", error);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: error.error?.message || "Erreur lors de la cr\xE9ation de l'utilisateur"
        });
        this.loading = false;
      }
    });
  }
  getCodePhonePays(codeCountry) {
    const country = COUNTRIES.find((c) => c.code === codeCountry);
    return country ? country.dialCode : "+224";
  }
  static \u0275fac = function UtilisateursNew_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilisateursNew)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilisateursNew, selectors: [["app-utilisateurs-new"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 2, vars: 2, consts: [[3, "submitForm", "cancel", "mode", "loading"]], template: function UtilisateursNew_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "app-utilisateurs-form", 0);
      \u0275\u0275listener("submitForm", function UtilisateursNew_Template_app_utilisateurs_form_submitForm_1_listener($event) {
        return ctx.onSubmit($event);
      })("cancel", function UtilisateursNew_Template_app_utilisateurs_form_cancel_1_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("mode", "create")("loading", ctx.loading);
    }
  }, dependencies: [CommonModule, ToastModule, Toast, UtilisateursForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilisateursNew, [{
    type: Component,
    args: [{ selector: "app-utilisateurs-new", standalone: true, providers: [MessageService], imports: [CommonModule, ToastModule, UtilisateursForm], template: `<p-toast></p-toast>\r
\r
<app-utilisateurs-form\r
  [mode]="'create'"\r
  [loading]="loading"\r
  (submitForm)="onSubmit($event)"\r
  (cancel)="onCancel()"\r
></app-utilisateurs-form>` }]
  }], () => [{ type: UserService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilisateursNew, { className: "UtilisateursNew", filePath: "src/app/pages/contacts/utilisateurs/utilisateurs-new/utilisateurs-new.ts", lineNumber: 19 });
})();

// src/app/pages/contacts/utilisateurs/utilisateurs-edit/utilisateurs-edit.ts
function UtilisateursEdit_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementEnd();
  }
}
function UtilisateursEdit_app_utilisateurs_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-utilisateurs-form", 11);
    \u0275\u0275listener("submitForm", function UtilisateursEdit_app_utilisateurs_form_10_Template_app_utilisateurs_form_submitForm_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    })("cancel", function UtilisateursEdit_app_utilisateurs_form_10_Template_app_utilisateurs_form_cancel_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("mode", "edit")("initialData", ctx_r1.userData)("loading", ctx_r1.loading);
  }
}
var UtilisateursEdit = class _UtilisateursEdit {
  route;
  router;
  userService;
  roleService;
  messageService;
  loading = false;
  userId = null;
  userData = null;
  constructor(route, router, userService, roleService, messageService) {
    this.route = route;
    this.router = router;
    this.userService = userService;
    this.roleService = roleService;
    this.messageService = messageService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.userId = parseInt(id, 10);
      this.loadUser(this.userId);
    }
  }
  loadUser(id) {
    this.loading = true;
    this.userService.getUser(id).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const user = response.data;
          const partialUser = {
            id: user.id,
            reference: user.reference,
            nom: user.nom,
            prenom: user.prenom,
            phone: user.phone,
            email: user.email,
            pays: user.pays,
            code_pays: user.code_pays,
            code_phone_pays: user.code_phone_pays,
            ville: user.ville,
            quartier: user.quartier,
            roles: user.role_names || user.roles,
            is_active: user.is_active
          };
          const userRoles = user.role_names || user.roles;
          if (!userRoles || userRoles.length === 0) {
            this.roleService.getUserRoles(id).subscribe({
              next: (rolesResponse) => {
                if (rolesResponse.success && rolesResponse.data) {
                  partialUser.roles = rolesResponse.data.roles;
                }
                this.userData = partialUser;
                this.loading = false;
              },
              error: () => {
                this.userData = partialUser;
                this.loading = false;
              }
            });
          } else {
            this.userData = partialUser;
            this.loading = false;
          }
        } else {
          this.loading = false;
        }
      },
      error: (error) => {
        console.error("Erreur lors du chargement:", error);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Erreur lors du chargement de l'utilisateur"
        });
        this.loading = false;
      }
    });
  }
  onSubmit(data) {
    if (!this.userId)
      return;
    this.loading = true;
    const payload = {
      nom: data.nom,
      prenom: data.prenom,
      phone: (data.phone || "").replace(/\s+/g, ""),
      email: data.email || void 0,
      pays: data.pays,
      code_pays: data.code_pays,
      code_phone_pays: this.getCodePhonePays(data.code_pays || "GN"),
      ville: data.ville,
      quartier: data.quartier
    };
    this.userService.updateUser(this.userId, payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.userData = __spreadValues(__spreadValues({}, this.userData), response.data);
          this.messageService.add({
            severity: "success",
            summary: "Succ\xE8s",
            detail: "Utilisateur modifi\xE9 avec succ\xE8s"
          });
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors de la modification:", error);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: error.error?.message || "Erreur lors de la modification de l'utilisateur"
        });
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.router.navigate(["contacts/utilisateurs"]);
  }
  getCodePhonePays(codeCountry) {
    const country = COUNTRIES.find((c) => c.code === codeCountry);
    return country ? country.dialCode : "+224";
  }
  static \u0275fac = function UtilisateursEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilisateursEdit)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilisateursEdit, selectors: [["app-utilisateurs-edit"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 11, vars: 2, consts: [[1, "edit-page"], [1, "edit-mobile-header"], ["type", "button", "aria-label", "Retour \xE0 la liste", 1, "edit-back", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "edit-title"], [1, "edit-header-spacer"], [1, "edit-content"], ["class", "flex justify-center items-center h-96", 4, "ngIf"], [3, "mode", "initialData", "loading", "submitForm", "cancel", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "h-96"], [1, "pi", "pi-spin", "pi-spinner", "text-4xl", "text-primary"], [3, "submitForm", "cancel", "mode", "initialData", "loading"]], template: function UtilisateursEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "header", 1)(3, "button", 2);
      \u0275\u0275listener("click", function UtilisateursEdit_Template_button_click_3_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "Modifier l'utilisateur");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275template(9, UtilisateursEdit_div_9_Template, 2, 0, "div", 7)(10, UtilisateursEdit_app_utilisateurs_form_10_Template, 1, 3, "app-utilisateurs-form", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading && !ctx.userData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userData);
    }
  }, dependencies: [CommonModule, NgIf, UtilisateursForm, ToastModule, Toast], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.edit-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.edit-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .edit-page[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    padding: 0;\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n  .edit-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.75rem 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--surface-card);\n    border-bottom: 1px solid var(--surface-border);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .edit-back[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border: none;\n    border-radius: 50%;\n    background: var(--p-primary-50);\n    color: var(--p-primary-500);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .edit-back[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .edit-title[_ngcontent-%COMP%] {\n    flex: 1;\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: var(--text-color);\n    min-width: 0;\n  }\n  .edit-header-spacer[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    min-width: 2.25rem;\n  }\n  .edit-content[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.875rem;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=utilisateurs-edit.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilisateursEdit, [{
    type: Component,
    args: [{ selector: "app-utilisateurs-edit", standalone: true, imports: [CommonModule, UtilisateursForm, ToastModule], providers: [MessageService], template: `<p-toast></p-toast>\r
\r
<div class="edit-page">\r
  <header class="edit-mobile-header">\r
    <button\r
      type="button"\r
      class="edit-back"\r
      aria-label="Retour \xE0 la liste"\r
      (click)="onCancel()"\r
    >\r
      <i class="pi pi-arrow-left"></i>\r
    </button>\r
    <h1 class="edit-title">Modifier l'utilisateur</h1>\r
    <span class="edit-header-spacer"></span>\r
  </header>\r
\r
  <div class="edit-content">\r
    <div *ngIf="loading && !userData" class="flex justify-center items-center h-96">\r
      <i class="pi pi-spin pi-spinner text-4xl text-primary"></i>\r
    </div>\r
\r
    <app-utilisateurs-form\r
      *ngIf="userData"\r
      [mode]="'edit'"\r
      [initialData]="userData"\r
      [loading]="loading"\r
      (submitForm)="onSubmit($event)"\r
      (cancel)="onCancel()"\r
    ></app-utilisateurs-form>\r
  </div>\r
</div>\r
 `, styles: ["/* src/app/pages/contacts/utilisateurs/utilisateurs-edit/utilisateurs-edit.scss */\n:host {\n  display: block;\n}\n.edit-mobile-header {\n  display: none;\n}\n.edit-content {\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .edit-page {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    padding: 0;\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n  .edit-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.75rem 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--surface-card);\n    border-bottom: 1px solid var(--surface-border);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .edit-back {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border: none;\n    border-radius: 50%;\n    background: var(--p-primary-50);\n    color: var(--p-primary-500);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .edit-back .pi {\n    font-size: 1.1rem;\n  }\n  .edit-title {\n    flex: 1;\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: var(--text-color);\n    min-width: 0;\n  }\n  .edit-header-spacer {\n    width: 2.25rem;\n    min-width: 2.25rem;\n  }\n  .edit-content {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.875rem;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=utilisateurs-edit.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: UserService }, { type: RoleService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilisateursEdit, { className: "UtilisateursEdit", filePath: "src/app/pages/contacts/utilisateurs/utilisateurs-edit/utilisateurs-edit.ts", lineNumber: 20 });
})();

// src/app/pages/contacts/utilisateurs/utilisateurs.routes.ts
var utilisateurs_routes_default = [
  {
    path: "",
    component: UtilisateursListe,
    canActivate: [authorizationGuard],
    data: { permissions: ["users.read"] }
  },
  {
    path: "new",
    component: UtilisateursNew,
    canActivate: [authorizationGuard],
    data: { permissions: ["users.create"] }
  },
  {
    path: "edit/:id",
    component: UtilisateursEdit,
    canActivate: [authorizationGuard],
    data: { permissions: ["users.update"] }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  utilisateurs_routes_default as default
};
//# sourceMappingURL=chunk-7B4HSW2J.js.map
