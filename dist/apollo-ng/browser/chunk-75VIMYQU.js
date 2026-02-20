import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-5S27E7YG.js";
import {
  Password,
  PasswordModule
} from "./chunk-NSVJTSWJ.js";
import "./chunk-EEMKSEY5.js";
import {
  RoleService
} from "./chunk-QUKKT7LX.js";
import {
  isValidPhoneNumber,
  parsePhoneNumberWithError
} from "./chunk-JGT6B74A.js";
import {
  COUNTRIES
} from "./chunk-MFW4RCM3.js";
import {
  PhoneFormatPipe
} from "./chunk-BW7WZ6GP.js";
import {
  Menu,
  MenuModule
} from "./chunk-6KOCBW73.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-KJWTEC7W.js";
import "./chunk-63LERGF7.js";
import {
  authorizationGuard
} from "./chunk-XNW46FC2.js";
import {
  AuthService,
  UsineContextService,
  environment
} from "./chunk-YPWQOW2Z.js";
import "./chunk-SX3K2HBE.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-A2YYJMVO.js";
import {
  Toast,
  ToastModule
} from "./chunk-DDVPM47O.js";
import "./chunk-W6Z6YB3V.js";
import "./chunk-AQI53E5O.js";
import {
  SelectableRow,
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-CIZBK6XP.js";
import "./chunk-VA3Y7VIO.js";
import {
  DatePicker
} from "./chunk-WU6WPBW3.js";
import "./chunk-FTF3KF6H.js";
import "./chunk-MIB2WPFC.js";
import "./chunk-KAQFDGVD.js";
import "./chunk-E7RV6XBL.js";
import {
  Tag,
  TagModule
} from "./chunk-PPDN4JER.js";
import "./chunk-Q5EYRR7G.js";
import "./chunk-RDWTOL5W.js";
import "./chunk-C3YC4CEN.js";
import "./chunk-ZAZO6DRK.js";
import "./chunk-C3YEZQJT.js";
import "./chunk-4KPSRL25.js";
import "./chunk-QUM6YXNO.js";
import "./chunk-A6MEIVSB.js";
import {
  Select,
  SelectModule
} from "./chunk-4FEBDTY4.js";
import "./chunk-HRYAYFE5.js";
import "./chunk-ZKJ2HA6V.js";
import "./chunk-UAOBMGYN.js";
import {
  IconField,
  InputIcon
} from "./chunk-WYX2NFLP.js";
import {
  InputText,
  InputTextModule
} from "./chunk-XQENNRGE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-XXGDCOFX.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-EM6TITBQ.js";
import "./chunk-Y4KHKEE6.js";
import "./chunk-2E3FVCR6.js";
import "./chunk-7V5JC3MC.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-PPMOL7YY.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-3TBUG5CD.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-WJ3ZXJZC.js";
import "./chunk-ALX4IA4A.js";
import {
  Ripple,
  RippleModule
} from "./chunk-UDEA5BJ3.js";
import "./chunk-GWUQTRWC.js";
import {
  ConfirmationService,
  MessageService,
  PrimeTemplate
} from "./chunk-65XIZQ4E.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-VGWO7IEC.js";
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
  inject,
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
} from "./chunk-UJSDGQXU.js";
import {
  __spreadProps,
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
   * Créer un nouvel utilisateur (via le endpoint register).
   * Utilisé par la page d'inscription publique (/auth/register).
   */
  createUser(data) {
    return this.http.post(`${this.authUrl}/register`, data);
  }
  /**
   * Créer un utilisateur via l'API métier (POST /users).
   * À combiner avec UsineService.assignUser pour l'assignation à l'usine courante.
   */
  createUserViaApi(data) {
    return this.http.post(this.apiUrl, data);
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
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.utilisateurs-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .utilisateurs-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .utilisateurs-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back[_ngcontent-%COMP%], \n   .mobile-add[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-user-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-user-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n  }\n  .mobile-card-meta[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n  }\n  .mobile-load-more-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 999px;\n    font-weight: 600;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.96);\n  }\n  .app-dark   [_nghost-%COMP%] {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  .app-dark[_nghost-%COMP%]   .utilisateurs-mobile-app[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .utilisateurs-mobile-app[_ngcontent-%COMP%] {\n    background: var(--p-surface-950);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-user-card[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-user-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=utilisateurs-liste.css.map */"] });
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
`, styles: ["/* src/app/pages/contacts/utilisateurs/utilisateurs-liste/utilisateurs-liste.scss */\n:host {\n  display: block;\n}\n.utilisateurs-mobile-app {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .utilisateurs-desktop {\n    display: none;\n  }\n  .utilisateurs-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back,\n  .mobile-add {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-user-card {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-user-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n  }\n  .mobile-card-meta {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-actions {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions .p-button {\n    width: 2rem;\n    height: 2rem;\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more {\n    padding-top: 0.5rem;\n  }\n  .mobile-load-more-btn {\n    width: 100%;\n    border-radius: 999px;\n    font-weight: 600;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab .pi {\n    font-size: 1.35rem;\n  }\n  .mobile-fab:active {\n    transform: scale(0.96);\n  }\n  :host-context(.app-dark) :host {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  :host-context(.app-dark) .utilisateurs-mobile-app {\n    background: var(--p-surface-950);\n  }\n  :host-context(.app-dark) .mobile-header {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-user-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  :host-context(.app-dark) .mobile-state {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=utilisateurs-liste.css.map */\n"] }]
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

// src/app/models/user.model.ts
var CIVILITE_LABELS = {
  M: "M.",
  Mme: "Mme",
  Mlle: "Mlle"
};
var PIECE_TYPE_LABELS = {
  cni: "Carte nationale d'identit\xE9",
  passeport: "Passeport",
  permis: "Permis de conduire",
  carte_sejour: "Carte de s\xE9jour"
};

// src/app/pages/contacts/utilisateurs/utilisateurs-form/utilisateurs-form.ts
function UtilisateursForm_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1, " Type de compte obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_div_17_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_div_17_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1, " R\xF4le obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 65);
    \u0275\u0275text(2, " R\xF4le ");
    \u0275\u0275template(3, UtilisateursForm_div_17_span_3_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_div_17_Template_p_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.role, $event) || (ctx_r1.model.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UtilisateursForm_div_17_small_5_Template, 2, 0, "small", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isEditing);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.role);
    \u0275\u0275property("options", ctx_r1.filteredRoles)("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && !ctx_r1.model.role);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && !ctx_r1.model.role && ctx_r1.isEditing);
  }
}
function UtilisateursForm_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1, " Nom obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1, " Pr\xE9nom obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "img", 68);
    \u0275\u0275elementStart(2, "span", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", country_r3.flag, \u0275\u0275sanitizeUrl)("alt", country_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r3.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r3.name);
  }
}
function UtilisateursForm_ng_template_50_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "img", 68);
    \u0275\u0275elementStart(2, "span", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", country_r4.flag, \u0275\u0275sanitizeUrl)("alt", country_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r4.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r4.name);
  }
}
function UtilisateursForm_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UtilisateursForm_ng_template_50_div_0_Template, 6, 4, "div", 70);
  }
  if (rf & 2) {
    const country_r4 = ctx.$implicit;
    \u0275\u0275property("ngIf", country_r4);
  }
}
function UtilisateursForm_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1, " T\xE9l\xE9phone obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.phoneError, " ");
  }
}
function UtilisateursForm_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1, " Ville obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_span_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1, " Quartier obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_div_70_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.passwordError, " ");
  }
}
function UtilisateursForm_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 72);
    \u0275\u0275text(2, " Mot de passe ");
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-password", 73);
    \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_div_70_Template_p_password_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.password, $event) || (ctx_r1.model.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UtilisateursForm_div_70_small_6_Template, 2, 1, "small", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.password);
    \u0275\u0275property("toggleMask", true)("feedback", true)("invalid", ctx_r1.submitted && !!ctx_r1.passwordError)("disabled", ctx_r1.fieldsDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.passwordError && ctx_r1.isEditing);
  }
}
function UtilisateursForm_div_71_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1, " Les mots de passe ne correspondent pas. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 74);
    \u0275\u0275text(2, " Confirmer le mot de passe ");
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-password", 75);
    \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_div_71_Template_p_password_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.password_confirmation, $event) || (ctx_r1.model.password_confirmation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UtilisateursForm_div_71_small_6_Template, 2, 0, "small", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.password_confirmation);
    \u0275\u0275property("toggleMask", true)("feedback", false)("invalid", ctx_r1.submitted && ctx_r1.model.password !== ctx_r1.model.password_confirmation)("disabled", ctx_r1.fieldsDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.model.password !== ctx_r1.model.password_confirmation && ctx_r1.isEditing);
  }
}
function UtilisateursForm_span_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, " Obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_span_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "(optionnel)");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 78);
    \u0275\u0275text(1, " Tous les champs ci-dessous sont requis. ");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_span_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.kycErrors["piece_numero"], " ");
  }
}
function UtilisateursForm_span_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.kycErrors["piece_pays"], " ");
  }
}
function UtilisateursForm_span_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.kycErrors["piece_delivree_le"], " ");
  }
}
function UtilisateursForm_span_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UtilisateursForm_small_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.kycErrors["piece_expire_le"], " ");
  }
}
function UtilisateursForm_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "small", 81);
    \u0275\u0275element(2, "i", 82);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.kycErrors["dates"], " ");
  }
}
function UtilisateursForm_div_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "button", 85);
    \u0275\u0275listener("click", function UtilisateursForm_div_113_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function UtilisateursForm_div_113_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
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
  /** Date de naissance sous forme de Date pour le p-datepicker */
  dateNaissanceObj = null;
  /** Date max pour le datepicker (aujourd'hui) */
  today = /* @__PURE__ */ new Date();
  // Types de compte
  userTypeOptions = [
    { label: "Staff", value: "staff" },
    { label: "Client", value: "client" },
    { label: "Prestataire", value: "prestataire" },
    { label: "Investisseur", value: "investisseur" }
  ];
  // Civilité
  civiliteOptions = Object.entries(CIVILITE_LABELS).map(([value, label]) => ({ label, value }));
  // Rôles réservés au staff (sélection manuelle)
  STAFF_ROLES = ["admin", "manager", "comptable", "agent_vente", "employe"];
  // Rôles disponibles (chargés depuis l'API)
  availableRoles = [];
  // Options pièces d'identité
  pieceTypeOptions = Object.entries(PIECE_TYPE_LABELS).map(([value, label]) => ({ label, value }));
  // Validation du téléphone
  phoneError = null;
  phoneCountry = "GN";
  // Validation du mot de passe
  passwordError = null;
  // Validation KYC — erreurs par champ
  kycErrors = {};
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
  // ── Type → rôles filtrés ──────────────────────────────
  get filteredRoles() {
    if (this.model.type === "staff") {
      return this.availableRoles.filter((r) => this.STAFF_ROLES.includes(r.value));
    }
    return [];
  }
  get isRoleSelectable() {
    return this.model.type === "staff";
  }
  onTypeChange() {
    if (!this.model.type)
      return;
    if (this.model.type === "staff") {
      this.model.role = void 0;
    } else {
      this.model.role = this.model.type;
    }
  }
  // ── KYC ──────────────────────────────────────────────
  /** Vrai dès que piece_type est sélectionné → tous les autres champs KYC deviennent requis */
  get isKycActive() {
    return !!this.model.piece_type;
  }
  /** Appelé lorsque piece_type change */
  onPieceTypeChange() {
    if (!this.model.piece_type) {
      this.model.piece_numero = void 0;
      this.model.piece_pays = void 0;
      this.model.piece_delivree_le = void 0;
      this.model.piece_expire_le = void 0;
      this.kycErrors = {};
    } else if (this.submitted) {
      this.setKycErrors();
    }
  }
  /** Appelé sur chaque champ KYC après soumission (re-validation en temps réel) */
  onKycFieldChange() {
    if (this.submitted && this.isKycActive) {
      this.setKycErrors();
    }
  }
  /** Vérification pure (sans side-effect) — utilisée par isValid() */
  checkKyc() {
    if (!this.model.piece_type)
      return true;
    if (!this.model.piece_numero?.trim())
      return false;
    if (!this.model.piece_pays)
      return false;
    if (!this.model.piece_delivree_le)
      return false;
    if (!this.model.piece_expire_le)
      return false;
    const today = /* @__PURE__ */ new Date();
    today.setHours(23, 59, 59, 999);
    const delivree = new Date(this.model.piece_delivree_le);
    if (delivree > today)
      return false;
    const expire = new Date(this.model.piece_expire_le);
    if (expire <= delivree)
      return false;
    return true;
  }
  /** Renseigne kycErrors avec les messages à afficher */
  setKycErrors() {
    this.kycErrors = {};
    if (!this.model.piece_type)
      return;
    if (!this.model.piece_numero?.trim()) {
      this.kycErrors["piece_numero"] = "Num\xE9ro de pi\xE8ce obligatoire.";
    }
    if (!this.model.piece_pays) {
      this.kycErrors["piece_pays"] = "Pays de d\xE9livrance obligatoire.";
    }
    if (!this.model.piece_delivree_le) {
      this.kycErrors["piece_delivree_le"] = "Date de d\xE9livrance obligatoire.";
    } else {
      const today = /* @__PURE__ */ new Date();
      today.setHours(23, 59, 59, 999);
      const delivree = new Date(this.model.piece_delivree_le);
      if (delivree > today) {
        this.kycErrors["piece_delivree_le"] = "La date de d\xE9livrance ne peut pas \xEAtre dans le futur.";
      }
    }
    if (!this.model.piece_expire_le) {
      this.kycErrors["piece_expire_le"] = "Date d'expiration obligatoire.";
    }
    if (this.model.piece_delivree_le && this.model.piece_expire_le) {
      const delivree = new Date(this.model.piece_delivree_le);
      const expire = new Date(this.model.piece_expire_le);
      if (expire <= delivree) {
        this.kycErrors["dates"] = "La date d'expiration doit \xEAtre post\xE9rieure \xE0 la date de d\xE9livrance.";
      }
    }
  }
  // ─────────────────────────────────────────────────────
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
        ville: this.initialData.ville ?? void 0,
        quartier: this.initialData.quartier ?? void 0,
        type: this.initialData.type,
        role: this.initialData.role_names?.[0] ?? this.initialData.roles?.[0],
        reference: this.initialData.reference,
        civilite: this.initialData.civilite ?? void 0,
        piece_type: this.initialData.piece_type ?? void 0,
        piece_numero: this.initialData.piece_numero ?? void 0,
        piece_delivree_le: this.initialData.piece_delivree_le ?? void 0,
        piece_expire_le: this.initialData.piece_expire_le ?? void 0,
        piece_pays: this.initialData.piece_pays ?? void 0
      };
      this.dateNaissanceObj = this.initialData.date_naissance ? new Date(this.initialData.date_naissance) : null;
    } else {
      this.model = {};
      this.dateNaissanceObj = null;
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
    this.kycErrors = {};
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
  formatDate(date) {
    if (!date)
      return null;
    return date.toISOString().split("T")[0];
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
    if (!this.model.type)
      return false;
    if (!this.model.role)
      return false;
    const basicValidation = !!(this.model.nom?.trim() && this.model.prenom?.trim() && this.model.phone?.trim() && this.model.ville?.trim() && this.model.quartier?.trim());
    if (!basicValidation)
      return false;
    if (!this.validatePhone())
      return false;
    if (this.mode === "create" && !this.validatePassword())
      return false;
    if (!this.checkKyc())
      return false;
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
    this.kycErrors = {};
    this.initializeModel();
  }
  onSubmit() {
    this.submitted = true;
    this.setKycErrors();
    if (!this.isValid()) {
      return;
    }
    this.submitForm.emit(__spreadProps(__spreadValues({}, this.model), {
      date_naissance: this.formatDate(this.dateNaissanceObj) ?? void 0
    }));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilisateursForm, selectors: [["app-utilisateurs-form"]], inputs: { mode: "mode", initialData: "initialData", loading: "loading" }, outputs: { submitForm: "submitForm", cancel: "cancel" }, features: [\u0275\u0275NgOnChangesFeature], decls: 114, vars: 81, consts: [[1, "card", "utilisateurs-form-card"], [1, "flex", "justify-between", "items-center", "mb-6", "utilisateurs-form-title"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "lg:col-span-2", "utilisateurs-form-sidebar"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", "mb-4"], [1, "m-0", "p-0", "text-surface-600", "dark:text-surface-200", "leading-normal", "mr-4"], [1, "col-span-12", "lg:col-span-10"], [1, "mb-6", "col-span-12", "md:col-span-12"], ["for", "type", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["class", "text-red-500", 4, "ngIf"], ["id", "type", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un type", "fluid", "", 3, "ngModelChange", "onChange", "ngModel", "options", "disabled", "invalid"], ["class", "mb-6 col-span-12 md:col-span-12", 4, "ngIf"], [1, "mb-6", "col-span-12", "md:col-span-6"], ["for", "email", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "email", "type", "email", "pInputText", "", "fluid", "", "placeholder", "exemple@email.com", 3, "ngModelChange", "ngModel", "disabled"], [1, "mb-6", "col-span-12", "md:col-span-3"], ["for", "civilite", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "civilite", "optionLabel", "label", "optionValue", "value", "placeholder", "\u2014", "fluid", "", 3, "ngModelChange", "ngModel", "options", "disabled", "showClear"], ["for", "date_naissance", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "date_naissance", "dateFormat", "dd/mm/yy", "placeholder", "jj/mm/aaaa", "fluid", "", 3, "ngModelChange", "ngModel", "showIcon", "disabled", "maxDate"], ["for", "nom", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "nom", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["for", "prenom", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "prenom", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], [1, "mb-6", "col-span-12"], [1, "grid", "grid-cols-12", "gap-3"], [1, "col-span-12", "md:col-span-4"], ["for", "codePays", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-3", "block"], ["id", "codePays", "optionLabel", "name", "optionValue", "code", "placeholder", "S\xE9lectionner un pays", "fluid", "", 3, "ngModelChange", "onCountryChange", "ngModel", "options", "disabled"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], [1, "col-span-12", "md:col-span-8"], ["for", "phone", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-3", "block"], ["id", "phone", "type", "tel", "pInputText", "", "fluid", "", "placeholder", "Exemple: 622 00 00 00", 3, "ngModelChange", "input", "blur", "ngModel", "invalid", "disabled"], ["class", "text-red-500 block mt-2", 4, "ngIf"], ["for", "ville", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "ville", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["for", "quartier", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "quartier", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["class", "mb-6 col-span-12 md:col-span-6", 4, "ngIf"], [1, "col-span-12", "mb-2"], ["value", "piece"], [1, "flex", "items-center", "gap-2", "font-medium", "text-surface-700", "dark:text-surface-200"], [1, "pi", "pi-id-card", "text-sm"], ["class", "text-xs font-semibold px-1.5 py-0.5 rounded", "style", "background: #fff7ed; color: #c2410c;", 4, "ngIf"], ["class", "text-xs font-normal text-surface-400", 4, "ngIf"], [1, "grid", "grid-cols-12", "gap-4", "pt-2"], [1, "mb-4", "col-span-12", "md:col-span-6"], ["for", "piece_type", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "piece_type", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un type", "fluid", "", 3, "ngModelChange", "onChange", "ngModel", "options", "disabled", "showClear"], ["class", "text-surface-500 dark:text-surface-400 block mt-1", 4, "ngIf"], ["for", "piece_numero", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "piece_numero", "type", "text", "pInputText", "", "fluid", "", "placeholder", "Ex: GN-123456789", 3, "ngModelChange", "ngModel", "disabled", "invalid"], ["class", "text-red-500 block mt-1", 4, "ngIf"], [1, "mb-4", "col-span-12", "md:col-span-4"], ["for", "piece_pays", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "piece_pays", "optionLabel", "name", "optionValue", "code", "placeholder", "S\xE9lectionner un pays", "fluid", "", 3, "ngModelChange", "onChange", "ngModel", "options", "disabled", "showClear", "invalid"], ["for", "piece_delivree_le", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "piece_delivree_le", "type", "date", "pInputText", "", "fluid", "", 3, "ngModelChange", "change", "ngModel", "disabled", "invalid"], ["for", "piece_expire_le", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "piece_expire_le", "type", "date", "pInputText", "", "fluid", "", 3, "ngModelChange", "change", "ngModel", "disabled", "invalid"], ["class", "col-span-12 -mt-2", 4, "ngIf"], ["class", "col-span-12 utilisateurs-form-actions", 4, "ngIf"], [1, "text-red-500"], ["for", "role", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "role", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un r\xF4le", "fluid", "", 3, "ngModelChange", "ngModel", "options", "disabled", "invalid"], [1, "flex", "items-center", "gap-2"], [1, "w-5", "h-auto", "rounded-sm", 3, "src", "alt"], [1, "font-semibold", "text-primary"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "text-red-500", "block", "mt-2"], ["for", "password", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "password", "fluid", "", "placeholder", "Min. 8 caract\xE8res, majuscules, minuscules et chiffres", "promptLabel", "Entrez un mot de passe", "weakLabel", "Faible", "mediumLabel", "Moyen", "strongLabel", "Fort", 3, "ngModelChange", "ngModel", "toggleMask", "feedback", "invalid", "disabled"], ["for", "password_confirmation", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "password_confirmation", "fluid", "", "placeholder", "Confirmez le mot de passe", 3, "ngModelChange", "ngModel", "toggleMask", "feedback", "invalid", "disabled"], [1, "text-xs", "font-semibold", "px-1.5", "py-0.5", "rounded", 2, "background", "#fff7ed", "color", "#c2410c"], [1, "text-xs", "font-normal", "text-surface-400"], [1, "text-surface-500", "dark:text-surface-400", "block", "mt-1"], [1, "text-red-500", "block", "mt-1"], [1, "col-span-12", "-mt-2"], [1, "text-red-500", "flex", "items-center", "gap-1"], [1, "pi", "pi-exclamation-triangle", "text-xs"], [1, "col-span-12", "utilisateurs-form-actions"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "utilisateurs-form-submit", 3, "click", "label", "loading", "disabled"], ["pButton", "", "pRipple", "", "label", "Annuler", "icon", "pi pi-times", "severity", "secondary", 1, "utilisateurs-form-cancel", 3, "click", "disabled"]], template: function UtilisateursForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "div", 5);
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, " Renseignez les informations du compte utilisateur. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 3)(11, "div", 8)(12, "label", 9);
      \u0275\u0275text(13, " Type de compte ");
      \u0275\u0275template(14, UtilisateursForm_span_14_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_p_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.type, $event) || (ctx.model.type = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function UtilisateursForm_Template_p_select_onChange_15_listener() {
        return ctx.onTypeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, UtilisateursForm_small_16_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, UtilisateursForm_div_17_Template, 6, 6, "div", 12);
      \u0275\u0275elementStart(18, "div", 13)(19, "label", 14);
      \u0275\u0275text(20, " Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.email, $event) || (ctx.model.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 16)(23, "label", 17);
      \u0275\u0275text(24, " Civilit\xE9 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p-select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_p_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.civilite, $event) || (ctx.model.civilite = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 16)(27, "label", 19);
      \u0275\u0275text(28, " Date de naissance ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p-datepicker", 20);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_p_datepicker_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dateNaissanceObj, $event) || (ctx.dateNaissanceObj = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 13)(31, "label", 21);
      \u0275\u0275text(32, " Nom ");
      \u0275\u0275template(33, UtilisateursForm_span_33_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.nom, $event) || (ctx.model.nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, UtilisateursForm_small_35_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 13)(37, "label", 23);
      \u0275\u0275text(38, " Pr\xE9nom ");
      \u0275\u0275template(39, UtilisateursForm_span_39_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.prenom, $event) || (ctx.model.prenom = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, UtilisateursForm_small_41_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 25)(43, "div", 26)(44, "div", 27)(45, "label", 28);
      \u0275\u0275text(46, " Pays ");
      \u0275\u0275template(47, UtilisateursForm_span_47_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p-select", 29);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_p_select_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.phoneCountry, $event) || (ctx.phoneCountry = $event);
        return $event;
      });
      \u0275\u0275listener("onCountryChange", function UtilisateursForm_Template_p_select_onCountryChange_48_listener() {
        return ctx.onCountryChange();
      });
      \u0275\u0275template(49, UtilisateursForm_ng_template_49_Template, 6, 4, "ng-template", 30)(50, UtilisateursForm_ng_template_50_Template, 1, 1, "ng-template", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 32)(52, "label", 33);
      \u0275\u0275text(53, " T\xE9l\xE9phone ");
      \u0275\u0275template(54, UtilisateursForm_span_54_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.phone, $event) || (ctx.model.phone = $event);
        return $event;
      });
      \u0275\u0275listener("input", function UtilisateursForm_Template_input_input_55_listener() {
        return ctx.onPhoneInput();
      })("blur", function UtilisateursForm_Template_input_blur_55_listener() {
        return ctx.onPhoneBlur();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(56, UtilisateursForm_small_56_Template, 2, 0, "small", 35)(57, UtilisateursForm_small_57_Template, 2, 1, "small", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 13)(59, "label", 36);
      \u0275\u0275text(60, " Ville ");
      \u0275\u0275template(61, UtilisateursForm_span_61_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_62_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.ville, $event) || (ctx.model.ville = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(63, UtilisateursForm_small_63_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 13)(65, "label", 38);
      \u0275\u0275text(66, " Quartier ");
      \u0275\u0275template(67, UtilisateursForm_span_67_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_68_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.quartier, $event) || (ctx.model.quartier = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, UtilisateursForm_small_69_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, UtilisateursForm_div_70_Template, 7, 6, "div", 40)(71, UtilisateursForm_div_71_Template, 7, 6, "div", 40);
      \u0275\u0275elementStart(72, "div", 41)(73, "p-accordion")(74, "p-accordion-panel", 42)(75, "p-accordion-header")(76, "span", 43);
      \u0275\u0275element(77, "i", 44);
      \u0275\u0275text(78, " Pi\xE8ce d'identit\xE9 ");
      \u0275\u0275template(79, UtilisateursForm_span_79_Template, 2, 0, "span", 45)(80, UtilisateursForm_span_80_Template, 2, 0, "span", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "p-accordion-content")(82, "div", 47)(83, "div", 48)(84, "label", 49);
      \u0275\u0275text(85, " Type de pi\xE8ce ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p-select", 50);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_p_select_ngModelChange_86_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.piece_type, $event) || (ctx.model.piece_type = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function UtilisateursForm_Template_p_select_onChange_86_listener() {
        return ctx.onPieceTypeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(87, UtilisateursForm_small_87_Template, 2, 0, "small", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 48)(89, "label", 52);
      \u0275\u0275text(90, " Num\xE9ro de pi\xE8ce ");
      \u0275\u0275template(91, UtilisateursForm_span_91_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "input", 53);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_92_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.piece_numero, $event) || (ctx.model.piece_numero = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_92_listener() {
        return ctx.onKycFieldChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(93, UtilisateursForm_small_93_Template, 2, 1, "small", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 55)(95, "label", 56);
      \u0275\u0275text(96, " Pays de d\xE9livrance ");
      \u0275\u0275template(97, UtilisateursForm_span_97_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p-select", 57);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_p_select_ngModelChange_98_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.piece_pays, $event) || (ctx.model.piece_pays = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function UtilisateursForm_Template_p_select_onChange_98_listener() {
        return ctx.onKycFieldChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(99, UtilisateursForm_small_99_Template, 2, 1, "small", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div", 55)(101, "label", 58);
      \u0275\u0275text(102, " D\xE9livr\xE9e le ");
      \u0275\u0275template(103, UtilisateursForm_span_103_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "input", 59);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_104_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.piece_delivree_le, $event) || (ctx.model.piece_delivree_le = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UtilisateursForm_Template_input_change_104_listener() {
        return ctx.onKycFieldChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(105, UtilisateursForm_small_105_Template, 2, 1, "small", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 55)(107, "label", 60);
      \u0275\u0275text(108, " Expire le ");
      \u0275\u0275template(109, UtilisateursForm_span_109_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "input", 61);
      \u0275\u0275twoWayListener("ngModelChange", function UtilisateursForm_Template_input_ngModelChange_110_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.piece_expire_le, $event) || (ctx.model.piece_expire_le = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UtilisateursForm_Template_input_change_110_listener() {
        return ctx.onKycFieldChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(111, UtilisateursForm_small_111_Template, 2, 1, "small", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275template(112, UtilisateursForm_div_112_Template, 4, 1, "div", 62);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(113, UtilisateursForm_div_113_Template, 4, 4, "div", 63);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.formTitle, " ");
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.type);
      \u0275\u0275property("options", ctx.userTypeOptions)("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && !ctx.model.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !ctx.model.type && ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isRoleSelectable);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.email);
      \u0275\u0275property("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.civilite);
      \u0275\u0275property("options", ctx.civiliteOptions)("disabled", ctx.fieldsDisabled)("showClear", true);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateNaissanceObj);
      \u0275\u0275property("showIcon", true)("disabled", ctx.fieldsDisabled)("maxDate", ctx.today);
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
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.phoneCountry);
      \u0275\u0275property("options", ctx.countries)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
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
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isKycActive);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isKycActive);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.piece_type);
      \u0275\u0275property("options", ctx.pieceTypeOptions)("disabled", ctx.fieldsDisabled)("showClear", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isKycActive);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isKycActive);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.piece_numero);
      \u0275\u0275property("disabled", ctx.fieldsDisabled)("invalid", !!ctx.kycErrors["piece_numero"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.kycErrors["piece_numero"]);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isKycActive);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.piece_pays);
      \u0275\u0275property("options", ctx.countries)("disabled", ctx.fieldsDisabled)("showClear", true)("invalid", !!ctx.kycErrors["piece_pays"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.kycErrors["piece_pays"]);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isKycActive);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.piece_delivree_le);
      \u0275\u0275property("disabled", ctx.fieldsDisabled)("invalid", !!ctx.kycErrors["piece_delivree_le"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.kycErrors["piece_delivree_le"]);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isKycActive);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.piece_expire_le);
      \u0275\u0275property("disabled", ctx.fieldsDisabled)("invalid", !!ctx.kycErrors["piece_expire_le"] || !!ctx.kycErrors["dates"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.kycErrors["piece_expire_le"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.kycErrors["dates"]);
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
    Password,
    AccordionModule,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    DatePicker
  ], styles: ["\n\n.utilisateurs-form-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n}\n.utilisateurs-form-actions[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.utilisateurs-form-actions[_ngcontent-%COMP%]     .p-button {\n  min-height: 2.5rem;\n  min-width: 7rem;\n}\n@media (max-width: 768px) {\n  .utilisateurs-form-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .utilisateurs-form-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .utilisateurs-form-card[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    padding: 0;\n    background: transparent;\n  }\n  .utilisateurs-form-actions[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .utilisateurs-form-actions[_ngcontent-%COMP%]     .p-button {\n    width: 100%;\n    justify-content: center;\n    min-width: unset;\n  }\n}\n/*# sourceMappingURL=utilisateurs-form.css.map */"] });
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
      PasswordModule,
      AccordionModule,
      DatePicker
    ], template: `<div class="card utilisateurs-form-card">
  <div class="flex justify-between items-center mb-6 utilisateurs-form-title">
    <span class="text-surface-900 dark:text-surface-0 text-xl font-bold">
      {{ formTitle }}
    </span>
  </div>

  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 lg:col-span-2 utilisateurs-form-sidebar">
      <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">
        <!-- Utilisateur -->
      </div>
      <p class="m-0 p-0 text-surface-600 dark:text-surface-200 leading-normal mr-4">
        Renseignez les informations du compte utilisateur.
      </p>
    </div> 

    <div class="col-span-12 lg:col-span-10">
      <div class="grid grid-cols-12 gap-4">

        <!-- Type de compte \u2014 s\xE9lectionn\xE9 en premier, pilote le r\xF4le -->
        <div class="mb-6 col-span-12 md:col-span-12">
          <label for="type" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Type de compte <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <p-select
            id="type"
            [(ngModel)]="model.type"
            [options]="userTypeOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="S\xE9lectionner un type"
            [disabled]="fieldsDisabled"
            [invalid]="submitted && !model.type"
            (onChange)="onTypeChange()"
            fluid
          ></p-select>
          <small class="text-red-500" *ngIf="submitted && !model.type && isEditing">
            Type de compte obligatoire.
          </small>
        </div>

        <!-- R\xF4le \u2014 affich\xE9 uniquement pour le type "staff" -->
        <div class="mb-6 col-span-12 md:col-span-12" *ngIf="isRoleSelectable">
          <label for="role" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            R\xF4le <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <p-select
            id="role"
            [(ngModel)]="model.role"
            [options]="filteredRoles"
            optionLabel="label"
            optionValue="value"
            placeholder="S\xE9lectionner un r\xF4le"
            [disabled]="fieldsDisabled"
            [invalid]="submitted && !model.role"
            fluid
          ></p-select>
          <small class="text-red-500" *ngIf="submitted && !model.role && isEditing">
            R\xF4le obligatoire.
          </small>
        </div>

        <!-- Email -->
        <div class="mb-6 col-span-12 md:col-span-6">
          <label for="email" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Email
          </label>
          <input
            id="email"
            type="email"
            pInputText
            fluid
            [(ngModel)]="model.email"
            [disabled]="fieldsDisabled"
            placeholder="exemple@email.com"
          />
        </div>

        <!-- Civilit\xE9 -->
        <div class="mb-6 col-span-12 md:col-span-3">
          <label for="civilite" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Civilit\xE9
          </label>
          <p-select
            id="civilite"
            [(ngModel)]="model.civilite"
            [options]="civiliteOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="\u2014"
            [disabled]="fieldsDisabled"
            [showClear]="true"
            fluid
          ></p-select>
        </div>

        <!-- Date de naissance -->
        <div class="mb-6 col-span-12 md:col-span-3">
          <label for="date_naissance" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Date de naissance
          </label>
          <p-datepicker
            id="date_naissance"
            [(ngModel)]="dateNaissanceObj"
            [showIcon]="true"
            dateFormat="dd/mm/yy"
            placeholder="jj/mm/aaaa"
            [disabled]="fieldsDisabled"
            [maxDate]="today"
            fluid
          />
        </div>

        <!-- Nom -->
        <div class="mb-6 col-span-12 md:col-span-6">
          <label for="nom" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Nom <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <input
            id="nom"
            type="text"
            pInputText
            fluid
            [(ngModel)]="model.nom"
            [invalid]="submitted && !model.nom?.trim()"
            [disabled]="fieldsDisabled"
          />
          <small class="text-red-500" *ngIf="submitted && !model.nom?.trim() && isEditing">
            Nom obligatoire.
          </small>
        </div>

        <!-- Pr\xE9nom -->
        <div class="mb-6 col-span-12 md:col-span-6">
          <label for="prenom" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Pr\xE9nom <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <input
            id="prenom"
            type="text"
            pInputText
            fluid
            [(ngModel)]="model.prenom"
            [invalid]="submitted && !model.prenom?.trim()"
            [disabled]="fieldsDisabled"
          />
          <small class="text-red-500" *ngIf="submitted && !model.prenom?.trim() && isEditing">
            Pr\xE9nom obligatoire.
          </small>
        </div>

        <!-- T\xE9l\xE9phone avec s\xE9lecteur de pays (m\xEAme grille que prestataire) -->
        <div class="mb-6 col-span-12">
          <div class="grid grid-cols-12 gap-3">
            <div class="col-span-12 md:col-span-4">
              <label for="codePays" class="font-medium text-surface-900 dark:text-surface-0 mb-3 block">
                Pays <span class="text-red-500" *ngIf="isEditing">*</span>
              </label>
              <p-select
                id="codePays"
                [(ngModel)]="phoneCountry"
                [options]="countries"
                optionLabel="name"
                optionValue="code"
                placeholder="S\xE9lectionner un pays"
                [disabled]="fieldsDisabled"
                (onCountryChange)="onCountryChange()"
                fluid
              >
                <ng-template let-country pTemplate="item">
                  <div class="flex items-center gap-2">
                    <img [src]="country.flag" [alt]="country.name" class="w-5 h-auto rounded-sm" />
                    <span class="font-semibold text-primary">{{ country.dialCode }}</span>
                    <span>{{ country.name }}</span>
                  </div>
                </ng-template>
                <ng-template let-country pTemplate="selectedItem">
                  <div class="flex items-center gap-2" *ngIf="country">
                    <img [src]="country.flag" [alt]="country.name" class="w-5 h-auto rounded-sm" />
                    <span class="font-semibold text-primary">{{ country.dialCode }}</span>
                    <span>{{ country.name }}</span>
                  </div>
                </ng-template>
              </p-select>
            </div>
            <div class="col-span-12 md:col-span-8">
              <label for="phone" class="font-medium text-surface-900 dark:text-surface-0 mb-3 block">
                T\xE9l\xE9phone <span class="text-red-500" *ngIf="isEditing">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                pInputText
                fluid
                [(ngModel)]="model.phone"
                [invalid]="(submitted || phoneError) && (!model.phone?.trim() || !!phoneError)"
                [disabled]="fieldsDisabled"
                (input)="onPhoneInput()"
                (blur)="onPhoneBlur()"
                placeholder="Exemple: 622 00 00 00"
              />
            </div>
          </div>
          <small class="text-red-500 block mt-2" *ngIf="submitted && !model.phone?.trim() && isEditing">
            T\xE9l\xE9phone obligatoire.
          </small>
          <small class="text-red-500 block mt-2" *ngIf="phoneError && model.phone?.trim() && isEditing">
            {{ phoneError }}
          </small>
        </div>

        <!-- Ville -->
        <div class="mb-6 col-span-12 md:col-span-6">
          <label for="ville" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Ville <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <input
            id="ville"
            type="text"
            pInputText
            fluid
            [(ngModel)]="model.ville"
            [invalid]="submitted && !model.ville?.trim()"
            [disabled]="fieldsDisabled"
          />
          <small class="text-red-500" *ngIf="submitted && !model.ville?.trim() && isEditing">
            Ville obligatoire.
          </small>
        </div>

        <!-- Quartier -->
        <div class="mb-6 col-span-12 md:col-span-6">
          <label for="quartier" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Quartier <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <input
            id="quartier"
            type="text"
            pInputText
            fluid
            [(ngModel)]="model.quartier"
            [invalid]="submitted && !model.quartier?.trim()"
            [disabled]="fieldsDisabled"
          />
          <small class="text-red-500" *ngIf="submitted && !model.quartier?.trim() && isEditing">
            Quartier obligatoire.
          </small>
        </div>

        <!-- Mot de passe (uniquement en cr\xE9ation) -->
        <div class="mb-6 col-span-12 md:col-span-6" *ngIf="mode === 'create'">
          <label for="password" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Mot de passe <span class="text-red-500">*</span>
          </label>
          <p-password
            id="password"
            [(ngModel)]="model.password"
            [toggleMask]="true"
            [feedback]="true"
            [invalid]="submitted && !!passwordError"
            [disabled]="fieldsDisabled"
            fluid
            placeholder="Min. 8 caract\xE8res, majuscules, minuscules et chiffres"
            promptLabel="Entrez un mot de passe"
            weakLabel="Faible"
            mediumLabel="Moyen"
            strongLabel="Fort"
          ></p-password>
          <small class="text-red-500" *ngIf="submitted && passwordError && isEditing">
            {{ passwordError }}
          </small>
        </div>

        <!-- Confirmation mot de passe (uniquement en cr\xE9ation) -->
        <div class="mb-6 col-span-12 md:col-span-6" *ngIf="mode === 'create'">
          <label for="password_confirmation" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Confirmer le mot de passe <span class="text-red-500">*</span>
          </label>
          <p-password
            id="password_confirmation"
            [(ngModel)]="model.password_confirmation"
            [toggleMask]="true"
            [feedback]="false"
            [invalid]="submitted && model.password !== model.password_confirmation"
            [disabled]="fieldsDisabled"
            fluid
            placeholder="Confirmez le mot de passe"
          ></p-password>
          <small class="text-red-500" *ngIf="submitted && model.password !== model.password_confirmation && isEditing">
            Les mots de passe ne correspondent pas.
          </small>
        </div>

        <!-- Pi\xE8ce d'identit\xE9 (optionnel \u2192 obligatoire si type s\xE9lectionn\xE9) -->
        <div class="col-span-12 mb-2">
          <p-accordion>
            <p-accordion-panel value="piece">
              <p-accordion-header>
                <span class="flex items-center gap-2 font-medium text-surface-700 dark:text-surface-200">
                  <i class="pi pi-id-card text-sm"></i>
                  Pi\xE8ce d'identit\xE9
                  <span
                    *ngIf="isKycActive"
                    class="text-xs font-semibold px-1.5 py-0.5 rounded"
                    style="background: #fff7ed; color: #c2410c;">
                    Obligatoire
                  </span>
                  <span *ngIf="!isKycActive" class="text-xs font-normal text-surface-400">(optionnel)</span>
                </span>
              </p-accordion-header>
              <p-accordion-content>
                <div class="grid grid-cols-12 gap-4 pt-2">

                  <!-- Type de pi\xE8ce -->
                  <div class="mb-4 col-span-12 md:col-span-6">
                    <label for="piece_type" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
                      Type de pi\xE8ce
                    </label>
                    <p-select
                      id="piece_type"
                      [(ngModel)]="model.piece_type"
                      [options]="pieceTypeOptions"
                      optionLabel="label"
                      optionValue="value"
                      placeholder="S\xE9lectionner un type"
                      [disabled]="fieldsDisabled"
                      [showClear]="true"
                      (onChange)="onPieceTypeChange()"
                      fluid
                    ></p-select>
                    <small class="text-surface-500 dark:text-surface-400 block mt-1" *ngIf="isKycActive">
                      Tous les champs ci-dessous sont requis.
                    </small>
                  </div>

                  <!-- Num\xE9ro de pi\xE8ce -->
                  <div class="mb-4 col-span-12 md:col-span-6">
                    <label for="piece_numero" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
                      Num\xE9ro de pi\xE8ce <span class="text-red-500" *ngIf="isKycActive">*</span>
                    </label>
                    <input
                      id="piece_numero"
                      type="text"
                      pInputText
                      fluid
                      [(ngModel)]="model.piece_numero"
                      [disabled]="fieldsDisabled"
                      placeholder="Ex: GN-123456789"
                      [invalid]="!!kycErrors['piece_numero']"
                      (ngModelChange)="onKycFieldChange()"
                    />
                    <small class="text-red-500 block mt-1" *ngIf="kycErrors['piece_numero']">
                      {{ kycErrors['piece_numero'] }}
                    </small>
                  </div>

                  <!-- Pays de d\xE9livrance -->
                  <div class="mb-4 col-span-12 md:col-span-4">
                    <label for="piece_pays" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
                      Pays de d\xE9livrance <span class="text-red-500" *ngIf="isKycActive">*</span>
                    </label>
                    <p-select
                      id="piece_pays"
                      [(ngModel)]="model.piece_pays"
                      [options]="countries"
                      optionLabel="name"
                      optionValue="code"
                      placeholder="S\xE9lectionner un pays"
                      [disabled]="fieldsDisabled"
                      [showClear]="true"
                      [invalid]="!!kycErrors['piece_pays']"
                      (onChange)="onKycFieldChange()"
                      fluid
                    ></p-select>
                    <small class="text-red-500 block mt-1" *ngIf="kycErrors['piece_pays']">
                      {{ kycErrors['piece_pays'] }}
                    </small>
                  </div>

                  <!-- Date de d\xE9livrance -->
                  <div class="mb-4 col-span-12 md:col-span-4">
                    <label for="piece_delivree_le" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
                      D\xE9livr\xE9e le <span class="text-red-500" *ngIf="isKycActive">*</span>
                    </label>
                    <input
                      id="piece_delivree_le"
                      type="date"
                      pInputText
                      fluid
                      [(ngModel)]="model.piece_delivree_le"
                      [disabled]="fieldsDisabled"
                      [invalid]="!!kycErrors['piece_delivree_le']"
                      (change)="onKycFieldChange()"
                    />
                    <small class="text-red-500 block mt-1" *ngIf="kycErrors['piece_delivree_le']">
                      {{ kycErrors['piece_delivree_le'] }}
                    </small>
                  </div>

                  <!-- Date d'expiration -->
                  <div class="mb-4 col-span-12 md:col-span-4">
                    <label for="piece_expire_le" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
                      Expire le <span class="text-red-500" *ngIf="isKycActive">*</span>
                    </label>
                    <input
                      id="piece_expire_le"
                      type="date"
                      pInputText
                      fluid
                      [(ngModel)]="model.piece_expire_le"
                      [disabled]="fieldsDisabled"
                      [invalid]="!!kycErrors['piece_expire_le'] || !!kycErrors['dates']"
                      (change)="onKycFieldChange()"
                    />
                    <small class="text-red-500 block mt-1" *ngIf="kycErrors['piece_expire_le']">
                      {{ kycErrors['piece_expire_le'] }}
                    </small>
                  </div>

                  <!-- Erreur crois\xE9e dates -->
                  <div class="col-span-12 -mt-2" *ngIf="kycErrors['dates']">
                    <small class="text-red-500 flex items-center gap-1">
                      <i class="pi pi-exclamation-triangle text-xs"></i>
                      {{ kycErrors['dates'] }}
                    </small>
                  </div>

                </div>
              </p-accordion-content>
            </p-accordion-panel>
          </p-accordion>
        </div>

        <!-- Boutons (m\xEAme structure que formulaire prestataire) -->
        <div class="col-span-12 utilisateurs-form-actions" *ngIf="isEditing">
          <div class="flex flex-wrap items-center gap-3">
            <button
              pButton
              pRipple
              [label]="mode === 'create' ? 'Enregistrer' : 'Sauvegarder'"
              icon="pi pi-check"
              (click)="onSubmit()"
              [loading]="loading"
              [disabled]="!isValid() || loading"
              class="utilisateurs-form-submit"
            ></button>
            <button
              pButton
              pRipple
              label="Annuler"
              icon="pi pi-times"
              severity="secondary"
              (click)="onCancel()"
              [disabled]="loading"
              class="utilisateurs-form-cancel"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/contacts/utilisateurs/utilisateurs-form/utilisateurs-form.scss */\n.utilisateurs-form-actions {\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n}\n.utilisateurs-form-actions .flex {\n  align-items: center;\n}\n.utilisateurs-form-actions ::ng-deep .p-button {\n  min-height: 2.5rem;\n  min-width: 7rem;\n}\n@media (max-width: 768px) {\n  .utilisateurs-form-title {\n    display: none;\n  }\n  .utilisateurs-form-sidebar {\n    display: none;\n  }\n  .utilisateurs-form-card {\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    padding: 0;\n    background: transparent;\n  }\n  .utilisateurs-form-actions .flex {\n    flex-direction: column;\n    width: 100%;\n  }\n  .utilisateurs-form-actions ::ng-deep .p-button {\n    width: 100%;\n    justify-content: center;\n    min-width: unset;\n  }\n}\n/*# sourceMappingURL=utilisateurs-form.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilisateursForm, { className: "UtilisateursForm", filePath: "src/app/pages/contacts/utilisateurs/utilisateurs-form/utilisateurs-form.ts", lineNumber: 58 });
})();

// src/app/services/usine/usine.service.ts
var UsineService = class _UsineService {
  http = inject(HttpClient);
  apiBase = `${environment.apiUrl}/usines`;
  /** Récupérer toutes les usines accessibles */
  getAll() {
    return this.http.get(this.apiBase);
  }
  /** Créer une usine (siège uniquement) */
  create(dto) {
    return this.http.post(this.apiBase, dto);
  }
  /** Mettre à jour une usine (siège uniquement) */
  update(id, dto) {
    return this.http.patch(`${this.apiBase}/${id}`, dto);
  }
  /** Définir l'usine par défaut pour l'utilisateur courant */
  setDefault(id) {
    return this.http.patch(`${this.apiBase}/${id}/set-default`, {});
  }
  /** Assigner un utilisateur à une usine (siège uniquement) */
  assignUser(usineId, dto) {
    return this.http.post(`${this.apiBase}/${usineId}/users`, dto);
  }
  /** Retirer un utilisateur d'une usine (siège uniquement) */
  removeUser(usineId, userId) {
    return this.http.delete(`${this.apiBase}/${usineId}/users/${userId}`);
  }
  static \u0275fac = function UsineService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsineService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsineService, factory: _UsineService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsineService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/contacts/utilisateurs/utilisateurs-new/utilisateurs-new.ts
var UtilisateursNew = class _UtilisateursNew {
  userService;
  messageService;
  router;
  usineContext;
  usineService;
  loading = false;
  constructor(userService, messageService, router, usineContext, usineService) {
    this.userService = userService;
    this.messageService = messageService;
    this.router = router;
    this.usineContext = usineContext;
    this.usineService = usineService;
  }
  onCancel() {
    this.router.navigate(["contacts/utilisateurs"]);
  }
  onSubmit(data) {
    const currentUsineId = this.usineContext.currentUsineId();
    if (currentUsineId === null) {
      this.messageService.add({
        severity: "warn",
        summary: "Usine requise",
        detail: "Veuillez s\xE9lectionner une usine avant de cr\xE9er un utilisateur.",
        life: 5e3
      });
      return;
    }
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
      type: data.type ?? "staff",
      role: data.role || "",
      civilite: data.civilite || void 0,
      date_naissance: data.date_naissance || void 0,
      piece_type: data.piece_type || void 0,
      piece_numero: data.piece_numero || void 0,
      piece_delivree_le: data.piece_delivree_le || void 0,
      piece_expire_le: data.piece_expire_le || void 0,
      piece_pays: data.piece_pays || void 0
    };
    this.userService.createUserViaApi(payload).subscribe({
      next: (response) => {
        if (!response.success || !response.data?.id) {
          this.messageService.add({
            severity: "error",
            summary: "Erreur",
            detail: response.message || "Utilisateur cr\xE9\xE9 mais r\xE9ponse invalide."
          });
          this.loading = false;
          return;
        }
        const user = response.data;
        this.usineService.assignUser(currentUsineId, { user_id: user.id, role: payload.role || void 0 }).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Succ\xE8s",
              detail: "Utilisateur cr\xE9\xE9 et assign\xE9 \xE0 l'usine."
            });
            setTimeout(() => {
              this.router.navigate(["contacts/utilisateurs/edit", user.id]);
            }, 600);
            this.loading = false;
          },
          error: (err) => {
            console.error("Erreur assignation usine:", err);
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: err.error?.message || "Utilisateur cr\xE9\xE9 mais l'assignation \xE0 l'usine a \xE9chou\xE9.",
              life: 6e3
            });
            this.loading = false;
          }
        });
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
    return new (__ngFactoryType__ || _UtilisateursNew)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UsineContextService), \u0275\u0275directiveInject(UsineService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilisateursNew, selectors: [["app-utilisateurs-new"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 2, consts: [[1, "edit-page"], [1, "edit-mobile-header"], ["type", "button", "aria-label", "Retour \xE0 la liste", 1, "edit-back", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "edit-title"], [1, "edit-header-spacer"], [1, "edit-content"], [3, "submitForm", "cancel", "mode", "loading"]], template: function UtilisateursNew_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "header", 1)(3, "button", 2);
      \u0275\u0275listener("click", function UtilisateursNew_Template_button_click_3_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "Nouvel utilisateur");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "app-utilisateurs-form", 7);
      \u0275\u0275listener("submitForm", function UtilisateursNew_Template_app_utilisateurs_form_submitForm_9_listener($event) {
        return ctx.onSubmit($event);
      })("cancel", function UtilisateursNew_Template_app_utilisateurs_form_cancel_9_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("mode", "create")("loading", ctx.loading);
    }
  }, dependencies: [CommonModule, ToastModule, Toast, UtilisateursForm], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.edit-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.edit-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .edit-page[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    padding: 0;\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    padding-bottom: env(safe-area-inset-bottom);\n    background: #ffffff;\n  }\n  .edit-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.75rem 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--surface-card);\n    border-bottom: 1px solid var(--surface-border);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .edit-back[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border: none;\n    border-radius: 50%;\n    background: var(--p-primary-50);\n    color: var(--p-primary-500);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .edit-back[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .edit-title[_ngcontent-%COMP%] {\n    flex: 1;\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: var(--text-color);\n    min-width: 0;\n    text-align: center;\n  }\n  .edit-header-spacer[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    min-width: 2.25rem;\n  }\n  .edit-content[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.875rem;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=utilisateurs-new.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilisateursNew, [{
    type: Component,
    args: [{ selector: "app-utilisateurs-new", standalone: true, providers: [MessageService], imports: [CommonModule, ToastModule, UtilisateursForm], template: `<p-toast></p-toast>\r
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
    <h1 class="edit-title">Nouvel utilisateur</h1>\r
    <span class="edit-header-spacer"></span>\r
  </header>\r
\r
  <div class="edit-content">\r
    <app-utilisateurs-form\r
      [mode]="'create'"\r
      [loading]="loading"\r
      (submitForm)="onSubmit($event)"\r
      (cancel)="onCancel()"\r
    ></app-utilisateurs-form>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/contacts/utilisateurs/utilisateurs-new/utilisateurs-new.scss */\n:host {\n  display: block;\n}\n.edit-mobile-header {\n  display: none;\n}\n.edit-content {\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .edit-page {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    padding: 0;\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    padding-bottom: env(safe-area-inset-bottom);\n    background: #ffffff;\n  }\n  .edit-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.75rem 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--surface-card);\n    border-bottom: 1px solid var(--surface-border);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .edit-back {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border: none;\n    border-radius: 50%;\n    background: var(--p-primary-50);\n    color: var(--p-primary-500);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .edit-back .pi {\n    font-size: 1.1rem;\n  }\n  .edit-title {\n    flex: 1;\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: var(--text-color);\n    min-width: 0;\n    text-align: center;\n  }\n  .edit-header-spacer {\n    width: 2.25rem;\n    min-width: 2.25rem;\n  }\n  .edit-content {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.875rem;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=utilisateurs-new.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: MessageService }, { type: Router }, { type: UsineContextService }, { type: UsineService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilisateursNew, { className: "UtilisateursNew", filePath: "src/app/pages/contacts/utilisateurs/utilisateurs-new/utilisateurs-new.ts", lineNumber: 21 });
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
            type: user.type,
            roles: user.role_names || user.roles,
            role_names: user.role_names,
            is_active: user.is_active,
            civilite: user.civilite,
            date_naissance: user.date_naissance,
            piece_type: user.piece_type,
            piece_numero: user.piece_numero,
            piece_delivree_le: user.piece_delivree_le,
            piece_expire_le: user.piece_expire_le,
            piece_pays: user.piece_pays
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
      quartier: data.quartier,
      type: data.type,
      role: data.role,
      civilite: data.civilite || null,
      date_naissance: data.date_naissance || null,
      piece_type: data.piece_type || null,
      piece_numero: data.piece_numero || null,
      piece_delivree_le: data.piece_delivree_le || null,
      piece_expire_le: data.piece_expire_le || null,
      piece_pays: data.piece_pays || null
    };
    this.userService.updateUser(this.userId, payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.messageService.add({
            severity: "success",
            summary: "Succ\xE8s",
            detail: "Utilisateur modifi\xE9 avec succ\xE8s"
          });
          this.loadUser(this.userId);
        } else {
          this.loading = false;
        }
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
  }, dependencies: [CommonModule, NgIf, UtilisateursForm, ToastModule, Toast], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.edit-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.edit-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .edit-page[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    padding: 0;\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    padding-bottom: env(safe-area-inset-bottom);\n    background: #ffffff;\n  }\n  .edit-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.75rem 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--surface-card);\n    border-bottom: 1px solid var(--surface-border);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .edit-back[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border: none;\n    border-radius: 50%;\n    background: var(--p-primary-50);\n    color: var(--p-primary-500);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .edit-back[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .edit-title[_ngcontent-%COMP%] {\n    flex: 1;\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: var(--text-color);\n    min-width: 0;\n    text-align: center;\n  }\n  .edit-header-spacer[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    min-width: 2.25rem;\n  }\n  .edit-content[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.875rem;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=utilisateurs-edit.css.map */"] });
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
 `, styles: ["/* src/app/pages/contacts/utilisateurs/utilisateurs-edit/utilisateurs-edit.scss */\n:host {\n  display: block;\n}\n.edit-mobile-header {\n  display: none;\n}\n.edit-content {\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .edit-page {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    padding: 0;\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    padding-bottom: env(safe-area-inset-bottom);\n    background: #ffffff;\n  }\n  .edit-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.75rem 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--surface-card);\n    border-bottom: 1px solid var(--surface-border);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .edit-back {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border: none;\n    border-radius: 50%;\n    background: var(--p-primary-50);\n    color: var(--p-primary-500);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .edit-back .pi {\n    font-size: 1.1rem;\n  }\n  .edit-title {\n    flex: 1;\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: var(--text-color);\n    min-width: 0;\n    text-align: center;\n  }\n  .edit-header-spacer {\n    width: 2.25rem;\n    min-width: 2.25rem;\n  }\n  .edit-content {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.875rem;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=utilisateurs-edit.css.map */\n"] }]
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
//# sourceMappingURL=chunk-75VIMYQU.js.map
