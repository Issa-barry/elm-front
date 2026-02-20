import {
  PERMISSION_ACTIONS
} from "./chunk-HY56XI2G.js";
import {
  RoleService
} from "./chunk-QUKKT7LX.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-4O2MFRL7.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-65OCOTIG.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-KJWTEC7W.js";
import {
  Dialog,
  DialogModule
} from "./chunk-63LERGF7.js";
import {
  AuthService
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
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-CIZBK6XP.js";
import "./chunk-VA3Y7VIO.js";
import "./chunk-WU6WPBW3.js";
import "./chunk-FTF3KF6H.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-MIB2WPFC.js";
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
import "./chunk-4FEBDTY4.js";
import "./chunk-HRYAYFE5.js";
import "./chunk-ZKJ2HA6V.js";
import "./chunk-UAOBMGYN.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
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
import "./chunk-PPMOL7YY.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-3TBUG5CD.js";
import {
  Button,
  ButtonModule
} from "./chunk-WJ3ZXJZC.js";
import "./chunk-ALX4IA4A.js";
import "./chunk-UDEA5BJ3.js";
import "./chunk-GWUQTRWC.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-65XIZQ4E.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  UpperCasePipe
} from "./chunk-VGWO7IEC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-UJSDGQXU.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/roles/roles-liste/roles-liste.ts
var _c0 = ["dt"];
var _c1 = () => ["role.name"];
var _c2 = () => ({ "min-width": "40rem" });
var _c3 = () => [10, 20, 30];
var _c4 = () => ({ width: "450px" });
function RolesListe_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function RolesListe_ng_template_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToParametres());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function RolesListe_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 14);
    \u0275\u0275listener("onClick", function RolesListe_ng_template_5_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCreateDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function RolesListe_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "h5", 16);
    \u0275\u0275text(2, "Gestion des R\xF4les");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 17);
    \u0275\u0275elementStart(5, "input", 18);
    \u0275\u0275listener("input", function RolesListe_ng_template_9_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r6 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt_r6, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function RolesListe_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 19)(2, "span", 20);
    \u0275\u0275text(3, "Nom ");
    \u0275\u0275element(4, "p-sortIcon", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 22)(6, "span", 23);
    \u0275\u0275text(7, "Permissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "th", 24)(9, "span", 20);
    \u0275\u0275text(10, "Date de cr\xE9ation ");
    \u0275\u0275element(11, "p-sortIcon", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "th", 26);
    \u0275\u0275elementEnd();
  }
}
function RolesListe_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 27);
    \u0275\u0275listener("dblclick", function RolesListe_ng_template_13_Template_tr_dblclick_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRole(item_r8));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 28)(3, "span", 29);
    \u0275\u0275element(4, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 22);
    \u0275\u0275element(8, "p-tag", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 22)(12, "p-button", 34);
    \u0275\u0275listener("click", function RolesListe_ng_template_13_Template_p_button_click_12_listener($event) {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.deleteRole(item_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 35);
    \u0275\u0275listener("click", function RolesListe_ng_template_13_Template_p_button_click_13_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRole(item_r8));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "var(--p-primary-50)")("color", "var(--p-primary-600)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.role.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.countPermissions(item_r8) + " permissions");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(item_r8.role.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function RolesListe_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36)(2, "div", 37);
    \u0275\u0275element(3, "i", 30);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucun r\xF4le trouv\xE9");
    \u0275\u0275elementEnd()()()();
  }
}
function RolesListe_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div")(2, "label", 39);
    \u0275\u0275text(3, "Nom du r\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function RolesListe_ng_template_18_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newRoleName, $event) || (ctx_r2.newRoleName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function RolesListe_ng_template_18_Template_input_keydown_enter_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createRole());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newRoleName);
  }
}
function RolesListe_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 41);
    \u0275\u0275listener("click", function RolesListe_ng_template_20_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createDialog = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 42);
    \u0275\u0275listener("click", function RolesListe_ng_template_20_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createRole());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("text", true)("disabled", ctx_r2.creating);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.creating || !ctx_r2.newRoleName.trim())("loading", ctx_r2.creating);
  }
}
var RolesListe = class _RolesListe {
  roleService;
  messageService;
  confirmationService;
  router;
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : []);
  loading = false;
  // Dialog création
  createDialog = false;
  newRoleName = "";
  creating = false;
  dt;
  constructor(roleService, messageService, confirmationService, router) {
    this.roleService = roleService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.router = router;
  }
  ngOnInit() {
    this.loadRoles();
  }
  loadRoles() {
    this.loading = true;
    this.roleService.getRoles().subscribe({
      next: (response) => {
        const payload = response?.data;
        const roles = Array.isArray(payload) ? payload : Array.isArray(payload?.roles) ? payload.roles : Array.isArray(payload?.data) ? payload.data : [];
        this.roles.set(roles.map((item) => this.normalizeRoleItem(item)));
        this.loading = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err?.error?.message || "Impossible de charger les r\xF4les",
          life: 5e3
        });
        this.loading = false;
      }
    });
  }
  countPermissions(item) {
    return item.modules.reduce((count, m) => {
      return count + PERMISSION_ACTIONS.filter((a) => m.permissions[a]).length;
    }, 0);
  }
  normalizeRoleItem(item) {
    if (item?.role && Array.isArray(item?.modules)) {
      return item;
    }
    const role = {
      id: Number(item?.id ?? 0),
      name: String(item?.name ?? ""),
      created_at: String(item?.created_at ?? "")
    };
    const permissionNames = Array.isArray(item?.permissions) ? item.permissions.map((p) => typeof p === "string" ? p : p?.name).filter((p) => typeof p === "string" && p.includes(".")) : [];
    const modulesMap = /* @__PURE__ */ new Map();
    permissionNames.forEach((permission) => {
      const [module, action] = permission.split(".");
      if (!module || !action) {
        return;
      }
      if (!modulesMap.has(module)) {
        modulesMap.set(module, /* @__PURE__ */ new Set());
      }
      modulesMap.get(module)?.add(action);
    });
    const modules = Array.from(modulesMap.entries()).map(([module, actions]) => ({
      module,
      permissions: {
        create: actions.has("create"),
        read: actions.has("read"),
        update: actions.has("update"),
        delete: actions.has("delete")
      }
    }));
    return { role, modules };
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  openCreateDialog() {
    this.newRoleName = "";
    this.createDialog = true;
  }
  goToParametres() {
    this.router.navigate(["/parametres"]);
  }
  createRole() {
    if (!this.newRoleName.trim() || this.creating)
      return;
    this.creating = true;
    this.roleService.createRole({ name: this.newRoleName.trim() }).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "R\xF4le cr\xE9\xE9 avec succ\xE8s",
          life: 3e3
        });
        this.createDialog = false;
        this.creating = false;
        this.loadRoles();
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err?.error?.message || "Impossible de cr\xE9er le r\xF4le",
          life: 5e3
        });
        this.creating = false;
      }
    });
  }
  editRole(item) {
    this.router.navigate(["/roles/edit", item.role.id]);
  }
  deleteRole(item) {
    if (item.role.name === "admin") {
      this.messageService.add({
        severity: "warn",
        summary: "Attention",
        detail: "Le r\xF4le admin ne peut pas \xEAtre supprim\xE9",
        life: 3e3
      });
      return;
    }
    this.confirmationService.confirm({
      message: `\xCAtes-vous s\xFBr de vouloir supprimer le r\xF4le "${item.role.name}" ?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.roleService.deleteRole(item.role.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Succ\xE8s",
              detail: "R\xF4le supprim\xE9",
              life: 3e3
            });
            this.loadRoles();
          },
          error: (err) => {
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: err?.error?.message || "Impossible de supprimer le r\xF4le",
              life: 5e3
            });
          }
        });
      }
    });
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    return new Date(dateStr).toLocaleDateString("fr-FR");
  }
  static \u0275fac = function RolesListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesListe)(\u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesListe, selectors: [["app-roles-liste"]], viewQuery: function RolesListe_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 23, vars: 20, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["content", ""], ["footer", ""], [1, "card"], ["styleClass", "mb-12"], ["dataKey", "role.id", "currentPageReportTemplate", "Affichage {first} \xE0 {last} sur {totalRecords} r\xF4les", 3, "value", "rows", "paginator", "globalFilterFields", "tableStyle", "rowHover", "showCurrentPageReport", "rowsPerPageOptions", "loading"], ["header", "Nouveau r\xF4le", 3, "visibleChange", "visible", "modal"], ["icon", "pi pi-arrow-left", "severity", "secondary", "pTooltip", "Retour param\xE9tres", 3, "onClick", "text", "rounded"], ["label", "Ajouter un r\xF4le", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher...", 3, "input"], ["pSortableColumn", "role.name"], [1, "col-header"], ["field", "role.name"], [1, "text-center"], [1, "col-header", "justify-center"], ["pSortableColumn", "role.created_at"], ["field", "role.created_at"], [1, "text-center", 2, "width", "8rem"], [1, "table-row", 3, "dblclick"], [1, "cell-role"], [1, "cell-role__icon"], [1, "pi", "pi-shield"], [1, "cell-role__name"], ["severity", "info", 3, "value"], [1, "cell-secondary"], ["icon", "pi pi-trash", "severity", "danger", "pTooltip", "Supprimer", 1, "mr-2", 3, "click", "text", "rounded"], ["icon", "pi pi-arrow-right", "severity", "secondary", "pTooltip", "Modifier", 3, "click", "text", "rounded"], ["colspan", "4"], [1, "empty-state"], [1, "flex", "flex-col", "gap-4"], ["for", "roleName", 1, "block", "font-bold", "mb-2"], ["pInputText", "", "id", "roleName", "placeholder", "Ex: editeur, manager...", 1, "w-full", 3, "ngModelChange", "keydown.enter", "ngModel"], ["label", "Annuler", "icon", "pi pi-times", 3, "click", "text", "disabled"], ["label", "Cr\xE9er", "icon", "pi pi-check", 3, "click", "disabled", "loading"]], template: function RolesListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 9)(2, "p-toolbar", 10);
      \u0275\u0275template(3, RolesListe_ng_template_3_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, RolesListe_ng_template_5_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-table", 11, 2);
      \u0275\u0275template(9, RolesListe_ng_template_9_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, RolesListe_ng_template_11_Template, 13, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(13, RolesListe_ng_template_13_Template, 14, 11, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(15, RolesListe_ng_template_15_Template, 6, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p-dialog", 12);
      \u0275\u0275twoWayListener("visibleChange", function RolesListe_Template_p_dialog_visibleChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.createDialog, $event) || (ctx.createDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(18, RolesListe_ng_template_18_Template, 5, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(20, RolesListe_ng_template_20_Template, 2, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "p-confirmdialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.roles())("rows", 10)("paginator", true)("globalFilterFields", \u0275\u0275pureFunction0(15, _c1))("tableStyle", \u0275\u0275pureFunction0(16, _c2))("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(17, _c3))("loading", ctx.loading);
      \u0275\u0275advance(10);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c4));
      \u0275\u0275twoWayProperty("visible", ctx.createDialog);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c4));
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    ButtonModule,
    Button,
    ToastModule,
    Toast,
    ToolbarModule,
    Toolbar,
    InputTextModule,
    InputText,
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
  ], styles: ["\n\n.col-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--p-surface-400);\n}\n.table-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.cell-role[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.cell-role__icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.cell-role__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--p-surface-800);\n  text-transform: capitalize;\n}\n.cell-secondary[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n  font-size: 0.9rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 3rem 0;\n  color: var(--p-surface-300);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem 1.25rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1.1rem 1.25rem;\n}\n.app-dark[_nghost-%COMP%]   .cell-role__name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cell-role__name[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n/*# sourceMappingURL=roles-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesListe, [{
    type: Component,
    args: [{ selector: "app-roles-liste", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TableModule,
      ButtonModule,
      ToastModule,
      ToolbarModule,
      InputTextModule,
      DialogModule,
      TagModule,
      InputIconModule,
      IconFieldModule,
      ConfirmDialogModule,
      TooltipModule
    ], providers: [MessageService, ConfirmationService], template: `<p-toast />

<div class="card">
    <p-toolbar styleClass="mb-12">
        <ng-template #start>
            <p-button
                icon="pi pi-arrow-left"
                severity="secondary"
                [text]="true"
                [rounded]="true"
                pTooltip="Retour param\xE9tres"
                (onClick)="goToParametres()"
            />
        </ng-template>
        <ng-template #end>
            <p-button label="Ajouter un r\xF4le" icon="pi pi-plus" severity="secondary" (onClick)="openCreateDialog()" />
        </ng-template>
    </p-toolbar>

    <p-table
        #dt
        [value]="roles()"
        [rows]="10"
        [paginator]="true"
        [globalFilterFields]="['role.name']"
        [tableStyle]="{ 'min-width': '40rem' }"
        [rowHover]="true"
        dataKey="role.id"
        currentPageReportTemplate="Affichage {first} \xE0 {last} sur {totalRecords} r\xF4les"
        [showCurrentPageReport]="true"
        [rowsPerPageOptions]="[10, 20, 30]"
        [loading]="loading"
    >
        <ng-template #caption>
            <div class="flex items-center justify-between">
                <h5 class="m-0">Gestion des R\xF4les</h5>
                <p-iconfield>
                    <p-inputicon styleClass="pi pi-search" />
                    <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Rechercher..." />
                </p-iconfield>
            </div>
        </ng-template>

        <ng-template #header>
            <tr>
                <th pSortableColumn="role.name">
                    <span class="col-header">Nom <p-sortIcon field="role.name" /></span>
                </th>
                <th class="text-center">
                    <span class="col-header justify-center">Permissions</span>
                </th>
                <th pSortableColumn="role.created_at">
                    <span class="col-header">Date de cr\xE9ation <p-sortIcon field="role.created_at" /></span>
                </th>
                <th class="text-center" style="width: 8rem"></th>
            </tr>
        </ng-template>

        <ng-template #body let-item>
            <tr class="table-row" (dblclick)="editRole(item)">
                <td>
                    <div class="cell-role">
                        <span class="cell-role__icon" [style.background]="'var(--p-primary-50)'" [style.color]="'var(--p-primary-600)'">
                            <i class="pi pi-shield"></i>
                        </span>
                        <span class="cell-role__name">{{ item.role.name }}</span>
                    </div>
                </td>
                <td class="text-center">
                    <p-tag [value]="countPermissions(item) + ' permissions'" severity="info" />
                </td>
                <td class="cell-secondary">{{ formatDate(item.role.created_at) }}</td>
                <td class="text-center">
                    <p-button
                        icon="pi pi-trash"
                        severity="danger"
                        [text]="true"
                        [rounded]="true"
                        pTooltip="Supprimer"
                        (click)="deleteRole(item); $event.stopPropagation()"
                        class="mr-2"
                    />
                    <p-button
                        icon="pi pi-arrow-right"
                        severity="secondary"
                        [text]="true"
                        [rounded]="true"
                        pTooltip="Modifier"
                        (click)="editRole(item)"
                    />
                </td>
            </tr>
        </ng-template>

        <ng-template #emptymessage>
            <tr>
                <td colspan="4">
                    <div class="empty-state">
                        <i class="pi pi-shield"></i>
                        <span>Aucun r\xF4le trouv\xE9</span>
                    </div>
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>

<!-- Dialog Cr\xE9ation -->
<p-dialog
    [(visible)]="createDialog"
    [style]="{ width: '450px' }"
    header="Nouveau r\xF4le"
    [modal]="true"
>
    <ng-template #content>
        <div class="flex flex-col gap-4">
            <div>
                <label for="roleName" class="block font-bold mb-2">Nom du r\xF4le</label>
                <input
                    pInputText
                    id="roleName"
                    [(ngModel)]="newRoleName"
                    placeholder="Ex: editeur, manager..."
                    class="w-full"
                    (keydown.enter)="createRole()"
                />
            </div>
        </div>
    </ng-template>
    <ng-template #footer>
        <p-button label="Annuler" icon="pi pi-times" [text]="true" (click)="createDialog = false" [disabled]="creating" />
        <p-button
            label="Cr\xE9er"
            icon="pi pi-check"
            (click)="createRole()"
            [disabled]="creating || !newRoleName.trim()"
            [loading]="creating"
        />
    </ng-template>
</p-dialog>

<p-confirmdialog [style]="{ width: '450px' }" />

`, styles: ["/* src/app/pages/roles/roles-liste/roles-liste.scss */\n.col-header {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--p-surface-400);\n}\n.table-row {\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.cell-role {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.cell-role__icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.cell-role__name {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--p-surface-800);\n  text-transform: capitalize;\n}\n.cell-secondary {\n  color: var(--p-surface-400);\n  font-size: 0.9rem;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 3rem 0;\n  color: var(--p-surface-300);\n}\n.empty-state i {\n  font-size: 2.5rem;\n}\n.empty-state span {\n  font-size: 0.9rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem 1.25rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1.1rem 1.25rem;\n}\n:host-context(.app-dark) .cell-role__name {\n  color: var(--p-surface-100);\n}\n/*# sourceMappingURL=roles-liste.css.map */\n"] }]
  }], () => [{ type: RoleService }, { type: MessageService }, { type: ConfirmationService }, { type: Router }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesListe, { className: "RolesListe", filePath: "src/app/pages/roles/roles-liste/roles-liste.ts", lineNumber: 43 });
})();

// src/app/pages/roles/roles-edit/roles-edit.ts
var _c02 = () => [1, 2, 3, 4, 5];
function RolesEdit_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function RolesEdit_div_5_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.roleName, $event) || (ctx_r1.roleName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function RolesEdit_div_5_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveName());
    })("keydown.enter", function RolesEdit_div_5_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveName());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.roleName);
    \u0275\u0275property("disabled", ctx_r1.originalName === "admin");
  }
}
function RolesEdit_p_skeleton_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 10);
  }
}
function RolesEdit_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-checkbox", 19);
    \u0275\u0275listener("onChange", function RolesEdit_div_8_div_6_Template_p_checkbox_onChange_4_listener() {
      const action_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleColumn(action_r4));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, action_r4));
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("ngModel", ctx_r1.isColumnAllChecked(action_r4))("indeterminate", ctx_r1.isColumnIndeterminate(action_r4))("disabled", ctx_r1.isColumnToggleDisabled(action_r4));
  }
}
function RolesEdit_div_8_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "p-checkbox", 22);
    \u0275\u0275listener("onChange", function RolesEdit_div_8_div_7_div_5_Template_p_checkbox_onChange_1_listener() {
      const action_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const module_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePermission(module_r6, action_r8));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r8 = ctx.$implicit;
    const module_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("ngModel", module_r6.permissions[action_r8])("disabled", !ctx_r1.isActionAllowed(module_r6, action_r8));
  }
}
function RolesEdit_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 14)(2, "p-checkbox", 19);
    \u0275\u0275listener("onChange", function RolesEdit_div_8_div_7_Template_p_checkbox_onChange_2_listener() {
      const module_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRow(module_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, RolesEdit_div_8_div_7_div_5_Template, 2, 3, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r6 = ctx.$implicit;
    const odd_r9 = ctx.odd;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("permission-matrix__row--alt", odd_r9);
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("ngModel", ctx_r1.isRowAllChecked(module_r6))("indeterminate", ctx_r1.isRowIndeterminate(module_r6))("disabled", ctx_r1.isRowToggleDisabled(module_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r6.module);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.actions);
  }
}
function RolesEdit_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h5", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275element(5, "div", 14);
    \u0275\u0275template(6, RolesEdit_div_8_div_6_Template, 5, 7, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, RolesEdit_div_8_div_7_Template, 6, 8, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('Permissions du r\xF4le "', ctx_r1.originalName, '"');
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.actions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.modules);
  }
}
function RolesEdit_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "p-skeleton", 26)(2, "p-skeleton", 27)(3, "p-skeleton", 27)(4, "p-skeleton", 27)(5, "p-skeleton", 27);
    \u0275\u0275elementEnd();
  }
}
function RolesEdit_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "p-skeleton", 23);
    \u0275\u0275template(2, RolesEdit_div_9_div_2_Template, 6, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c02));
  }
}
var RolesEdit = class _RolesEdit {
  route;
  router;
  roleService;
  messageService;
  authService;
  roleId;
  roleName = "";
  originalName = "";
  modules = [];
  loading = true;
  saving = false;
  savingName = false;
  availableActionsByModule = /* @__PURE__ */ new Map();
  actions = PERMISSION_ACTIONS;
  constructor(route, router, roleService, messageService, authService) {
    this.route = route;
    this.router = router;
    this.roleService = roleService;
    this.messageService = messageService;
    this.authService = authService;
  }
  ngOnInit() {
    this.roleId = +this.route.snapshot.params["id"];
    this.loadRole();
  }
  loadRole() {
    this.loading = true;
    this.roleService.getRole(this.roleId).subscribe({
      next: (response) => {
        const normalized = this.normalizeRolePayload(response?.data);
        if (!normalized) {
          this.messageService.add({
            severity: "error",
            summary: "Erreur",
            detail: "Format de r\xE9ponse invalide pour le r\xF4le",
            life: 5e3
          });
          this.loading = false;
          return;
        }
        this.roleName = normalized.role.name;
        this.originalName = normalized.role.name;
        this.modules = normalized.modules;
        this.loadPermissionsCatalog();
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err?.error?.message || "Impossible de charger le r\xF4le",
          life: 5e3
        });
        this.loading = false;
      }
    });
  }
  loadPermissionsCatalog() {
    this.roleService.getPermissions().subscribe({
      next: (permissionsResponse) => {
        const catalog = Array.isArray(permissionsResponse?.data) ? permissionsResponse.data : [];
        this.applyPermissionCatalog(catalog);
        this.loading = false;
      },
      error: () => {
        if (!this.modules.length) {
          this.modules = [];
        }
        this.loading = false;
      }
    });
  }
  applyPermissionCatalog(catalog) {
    if (!catalog.length) {
      return;
    }
    const roleModulesMap = new Map(this.modules.map((module) => [this.normalizeModuleKey(module.module), module]));
    this.availableActionsByModule.clear();
    const mergedModules = catalog.map((catalogModule) => {
      const moduleKey = this.normalizeModuleKey(catalogModule.module);
      const roleModule = roleModulesMap.get(moduleKey);
      const allowedActions = this.getAllowedActionsFromCatalog(catalogModule);
      this.availableActionsByModule.set(moduleKey, allowedActions);
      roleModulesMap.delete(moduleKey);
      return {
        module: catalogModule.module,
        permissions: {
          create: allowedActions.has("create") ? !!roleModule?.permissions?.create : false,
          read: allowedActions.has("read") ? !!roleModule?.permissions?.read : false,
          update: allowedActions.has("update") ? !!roleModule?.permissions?.update : false,
          delete: allowedActions.has("delete") ? !!roleModule?.permissions?.delete : false
        }
      };
    });
    roleModulesMap.forEach((module, moduleKey) => {
      this.availableActionsByModule.set(moduleKey, new Set(this.actions));
      mergedModules.push(module);
    });
    this.modules = mergedModules;
  }
  getAllowedActionsFromCatalog(module) {
    const rawActions = Array.isArray(module.actions) ? module.actions : [];
    const normalizedActions = rawActions.map((action) => action?.toLowerCase().trim()).filter((action) => this.actions.includes(action));
    if (normalizedActions.length > 0) {
      return new Set(normalizedActions);
    }
    return new Set(this.actions);
  }
  normalizeModuleKey(moduleName) {
    return String(moduleName ?? "").trim().toLowerCase();
  }
  normalizeRolePayload(data) {
    const payload = data?.data ?? data;
    if (payload?.role?.name) {
      return {
        role: payload.role,
        modules: Array.isArray(payload.modules) ? payload.modules : []
      };
    }
    if (payload?.name) {
      return {
        role: {
          id: Number(payload.id ?? this.roleId),
          name: String(payload.name)
        },
        modules: Array.isArray(payload.modules) ? payload.modules : []
      };
    }
    return null;
  }
  // ─── Toggle helpers ────────────────────────────────────
  togglePermission(module, action) {
    if (!this.isActionAllowed(module, action)) {
      return;
    }
    module.permissions[action] = !module.permissions[action];
  }
  isRowAllChecked(module) {
    const applicableActions = this.actions.filter((a) => this.isActionAllowed(module, a));
    if (applicableActions.length === 0) {
      return false;
    }
    return applicableActions.every((a) => module.permissions[a]);
  }
  isRowIndeterminate(module) {
    const applicableActions = this.actions.filter((a) => this.isActionAllowed(module, a));
    if (applicableActions.length === 0) {
      return false;
    }
    const checked = applicableActions.filter((a) => module.permissions[a]).length;
    return checked > 0 && checked < applicableActions.length;
  }
  toggleRow(module) {
    const applicableActions = this.actions.filter((a) => this.isActionAllowed(module, a));
    if (applicableActions.length === 0) {
      return;
    }
    const allChecked = this.isRowAllChecked(module);
    applicableActions.forEach((a) => {
      module.permissions[a] = !allChecked;
    });
  }
  isColumnAllChecked(action) {
    const applicableModules = this.modules.filter((m) => this.isActionAllowed(m, action));
    return applicableModules.length > 0 && applicableModules.every((m) => m.permissions[action]);
  }
  isColumnIndeterminate(action) {
    const applicableModules = this.modules.filter((m) => this.isActionAllowed(m, action));
    if (applicableModules.length === 0) {
      return false;
    }
    const checked = applicableModules.filter((m) => m.permissions[action]).length;
    return checked > 0 && checked < applicableModules.length;
  }
  toggleColumn(action) {
    const applicableModules = this.modules.filter((m) => this.isActionAllowed(m, action));
    if (applicableModules.length === 0) {
      return;
    }
    const allChecked = this.isColumnAllChecked(action);
    applicableModules.forEach((m) => {
      m.permissions[action] = !allChecked;
    });
  }
  isActionAllowed(module, action) {
    const allowedActions = this.availableActionsByModule.get(this.normalizeModuleKey(module.module));
    if (!allowedActions || allowedActions.size === 0) {
      return true;
    }
    return allowedActions.has(action);
  }
  isRowToggleDisabled(module) {
    return this.actions.every((action) => !this.isActionAllowed(module, action));
  }
  isColumnToggleDisabled(action) {
    return !this.modules.some((module) => this.isActionAllowed(module, action));
  }
  // ─── Save ──────────────────────────────────────────────
  savePermissions() {
    if (this.saving)
      return;
    this.saving = true;
    const permissions = {};
    this.modules.forEach((m) => {
      const active = this.actions.filter((a) => this.isActionAllowed(m, a) && m.permissions[a]);
      if (active.length > 0) {
        permissions[m.module] = active;
      }
    });
    const dto = { permissions };
    this.roleService.updatePermissions(this.roleId, dto).subscribe({
      next: (response) => {
        this.modules = response.data.modules;
        this.refreshCurrentUserPermissions();
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Permissions mises \xE0 jour",
          life: 3e3
        });
        this.saving = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err?.error?.message || "Impossible de sauvegarder les permissions",
          life: 5e3
        });
        this.saving = false;
      }
    });
  }
  saveName() {
    if (this.savingName || !this.roleName.trim() || this.roleName === this.originalName)
      return;
    this.savingName = true;
    this.roleService.updateRole(this.roleId, { name: this.roleName.trim() }).subscribe({
      next: () => {
        this.originalName = this.roleName.trim();
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Nom du r\xF4le mis \xE0 jour",
          life: 3e3
        });
        this.savingName = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err?.error?.message || "Impossible de renommer le r\xF4le",
          life: 5e3
        });
        this.savingName = false;
      }
    });
  }
  refreshCurrentUserPermissions() {
    this.authService.me().subscribe({
      next: () => {
      },
      error: () => {
      }
    });
  }
  goBack() {
    this.router.navigate(["/parametres"]);
  }
  static \u0275fac = function RolesEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesEdit)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesEdit, selectors: [["app-roles-edit"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 8, consts: [[1, "card"], [1, "role-header"], [1, "role-header__left"], ["icon", "pi pi-arrow-left", "severity", "secondary", "pTooltip", "Retour", 3, "click", "text", "rounded"], ["class", "role-header__title", 4, "ngIf"], ["width", "200px", "height", "2.2rem", 4, "ngIf"], ["label", "Sauvegarder", "icon", "pi pi-save", 3, "click", "loading", "disabled"], ["class", "card", 4, "ngIf"], [1, "role-header__title"], ["pInputText", "", 1, "role-name-input", 3, "ngModelChange", "blur", "keydown.enter", "ngModel", "disabled"], ["width", "200px", "height", "2.2rem"], [1, "permission-title"], [1, "permission-matrix"], [1, "permission-matrix__header"], [1, "permission-matrix__module-col"], ["class", "permission-matrix__action-col", 4, "ngFor", "ngForOf"], ["class", "permission-matrix__row", 3, "permission-matrix__row--alt", 4, "ngFor", "ngForOf"], [1, "permission-matrix__action-col"], [1, "permission-matrix__action-label"], [3, "onChange", "binary", "ngModel", "indeterminate", "disabled"], [1, "permission-matrix__row"], [1, "permission-matrix__module-name"], [3, "onChange", "binary", "ngModel", "disabled"], ["width", "250px", "height", "1.5rem", "styleClass", "mb-6"], ["class", "flex items-center gap-8 mb-4", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-8", "mb-4"], ["width", "140px", "height", "1.2rem"], ["width", "24px", "height", "24px"]], template: function RolesEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "p-button", 3);
      \u0275\u0275listener("click", function RolesEdit_Template_p_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, RolesEdit_div_5_Template, 2, 2, "div", 4)(6, RolesEdit_p_skeleton_6_Template, 1, 0, "p-skeleton", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-button", 6);
      \u0275\u0275listener("click", function RolesEdit_Template_p_button_click_7_listener() {
        return ctx.savePermissions();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, RolesEdit_div_8_Template, 8, 3, "div", 7)(9, RolesEdit_div_9_Template, 3, 2, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("text", true)("rounded", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.saving)("disabled", ctx.loading || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, ToastModule, Toast, InputTextModule, InputText, CheckboxModule, Checkbox, TooltipModule, Tooltip, SkeletonModule, Skeleton, UpperCasePipe], styles: ["\n\n.role-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.role-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.role-header__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.role-name-input[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  border: 1px solid transparent;\n  background: transparent;\n  padding: 0.4rem 0.6rem;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n}\n.role-name-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--p-surface-200);\n}\n.role-name-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--p-primary-500);\n  background: var(--p-surface-0);\n  box-shadow: 0 0 0 2px var(--p-primary-100);\n}\n.permission-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--p-surface-800);\n}\n.permission-matrix[_ngcontent-%COMP%] {\n  border: 1px solid var(--p-surface-100);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.permission-matrix__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  background: var(--p-surface-50);\n  border-bottom: 1px solid var(--p-surface-100);\n}\n.permission-matrix__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.85rem 1.25rem;\n  border-bottom: 1px solid var(--p-surface-50);\n  transition: background 0.12s ease;\n}\n.permission-matrix__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.permission-matrix__row[_ngcontent-%COMP%]:hover {\n  background: var(--p-primary-50);\n}\n.permission-matrix__row--alt[_ngcontent-%COMP%] {\n  background: var(--p-surface-0);\n}\n.permission-matrix__module-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-width: 160px;\n}\n.permission-matrix__module-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: var(--p-surface-700);\n  text-transform: capitalize;\n}\n.permission-matrix__action-col[_ngcontent-%COMP%] {\n  width: 120px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.35rem;\n  flex-shrink: 0;\n}\n.permission-matrix__action-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .role-name-input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .role-name-input[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .role-name-input[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .role-name-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .role-name-input[_ngcontent-%COMP%]:focus, .app-dark   [_nghost-%COMP%]   .role-name-input[_ngcontent-%COMP%]:focus {\n  background: var(--p-surface-800);\n  box-shadow: 0 0 0 2px var(--p-primary-800);\n}\n.app-dark[_nghost-%COMP%]   .permission-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .permission-title[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .permission-matrix[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .permission-matrix[_ngcontent-%COMP%] {\n  border-color: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .permission-matrix__header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .permission-matrix__header[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  border-bottom-color: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .permission-matrix__row[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .permission-matrix__row[_ngcontent-%COMP%] {\n  border-bottom-color: var(--p-surface-800);\n}\n.app-dark[_nghost-%COMP%]   .permission-matrix__row[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .permission-matrix__row[_ngcontent-%COMP%]:hover {\n  background: var(--p-surface-800);\n}\n.app-dark[_nghost-%COMP%]   .permission-matrix__module-name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .permission-matrix__module-name[_ngcontent-%COMP%] {\n  color: var(--p-surface-200);\n}\n/*# sourceMappingURL=roles-edit.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesEdit, [{
    type: Component,
    args: [{ selector: "app-roles-edit", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ButtonModule,
      ToastModule,
      InputTextModule,
      CheckboxModule,
      TooltipModule,
      SkeletonModule
    ], providers: [MessageService], template: `<p-toast />

<div class="card">
    <!-- Header -->
    <div class="role-header">
        <div class="role-header__left">
            <p-button icon="pi pi-arrow-left" severity="secondary" [text]="true" [rounded]="true" (click)="goBack()" pTooltip="Retour" />
            <div class="role-header__title" *ngIf="!loading">
                <input
                    pInputText
                    [(ngModel)]="roleName"
                    class="role-name-input"
                    (blur)="saveName()"
                    (keydown.enter)="saveName()"
                    [disabled]="originalName === 'admin'"
                />
            </div>
            <p-skeleton *ngIf="loading" width="200px" height="2.2rem" />
        </div>
        <p-button
            label="Sauvegarder"
            icon="pi pi-save"
            (click)="savePermissions()"
            [loading]="saving"
            [disabled]="loading || saving"
        />
    </div>
</div>

<!-- Permission Matrix -->
<div class="card" *ngIf="!loading">
    <h5 class="permission-title">Permissions du r\xF4le "{{ originalName }}"</h5>

    <div class="permission-matrix">
        <!-- Header -->
        <div class="permission-matrix__header">
            <div class="permission-matrix__module-col"></div>
            <div class="permission-matrix__action-col" *ngFor="let action of actions">
                <span class="permission-matrix__action-label">{{ action | uppercase }}</span>
                <p-checkbox
                    [binary]="true"
                    [ngModel]="isColumnAllChecked(action)"
                    (onChange)="toggleColumn(action)"
                    [indeterminate]="isColumnIndeterminate(action)"
                    [disabled]="isColumnToggleDisabled(action)"
                />
            </div>
        </div>

        <!-- Rows -->
        <div
            class="permission-matrix__row"
            *ngFor="let module of modules; let odd = odd"
            [class.permission-matrix__row--alt]="odd"
        >
            <div class="permission-matrix__module-col">
                <p-checkbox
                    [binary]="true"
                    [ngModel]="isRowAllChecked(module)"
                    (onChange)="toggleRow(module)"
                    [indeterminate]="isRowIndeterminate(module)"
                    [disabled]="isRowToggleDisabled(module)"
                />
                <span class="permission-matrix__module-name">{{ module.module }}</span>
            </div>
            <div class="permission-matrix__action-col" *ngFor="let action of actions">
                <p-checkbox
                    [binary]="true"
                    [ngModel]="module.permissions[action]"
                    (onChange)="togglePermission(module, action)"
                    [disabled]="!isActionAllowed(module, action)"
                />
            </div>
        </div>
    </div>
</div>

<!-- Loading skeleton -->
<div class="card" *ngIf="loading">
    <p-skeleton width="250px" height="1.5rem" styleClass="mb-6" />
    <div *ngFor="let i of [1,2,3,4,5]" class="flex items-center gap-8 mb-4">
        <p-skeleton width="140px" height="1.2rem" />
        <p-skeleton width="24px" height="24px" />
        <p-skeleton width="24px" height="24px" />
        <p-skeleton width="24px" height="24px" />
        <p-skeleton width="24px" height="24px" />
    </div>
</div>
`, styles: ["/* src/app/pages/roles/roles-edit/roles-edit.scss */\n.role-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.role-header__left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.role-header__title {\n  display: flex;\n  align-items: center;\n}\n.role-name-input {\n  font-size: 1.25rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  border: 1px solid transparent;\n  background: transparent;\n  padding: 0.4rem 0.6rem;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n}\n.role-name-input:hover {\n  border-color: var(--p-surface-200);\n}\n.role-name-input:focus {\n  border-color: var(--p-primary-500);\n  background: var(--p-surface-0);\n  box-shadow: 0 0 0 2px var(--p-primary-100);\n}\n.permission-title {\n  margin-bottom: 1.5rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--p-surface-800);\n}\n.permission-matrix {\n  border: 1px solid var(--p-surface-100);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.permission-matrix__header {\n  display: flex;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  background: var(--p-surface-50);\n  border-bottom: 1px solid var(--p-surface-100);\n}\n.permission-matrix__row {\n  display: flex;\n  align-items: center;\n  padding: 0.85rem 1.25rem;\n  border-bottom: 1px solid var(--p-surface-50);\n  transition: background 0.12s ease;\n}\n.permission-matrix__row:last-child {\n  border-bottom: none;\n}\n.permission-matrix__row:hover {\n  background: var(--p-primary-50);\n}\n.permission-matrix__row--alt {\n  background: var(--p-surface-0);\n}\n.permission-matrix__module-col {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-width: 160px;\n}\n.permission-matrix__module-name {\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: var(--p-surface-700);\n  text-transform: capitalize;\n}\n.permission-matrix__action-col {\n  width: 120px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.35rem;\n  flex-shrink: 0;\n}\n.permission-matrix__action-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .role-name-input {\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .role-name-input:hover {\n  border-color: var(--p-surface-600);\n}\n:host-context(.app-dark) .role-name-input:focus {\n  background: var(--p-surface-800);\n  box-shadow: 0 0 0 2px var(--p-primary-800);\n}\n:host-context(.app-dark) .permission-title {\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .permission-matrix {\n  border-color: var(--p-surface-700);\n}\n:host-context(.app-dark) .permission-matrix__header {\n  background: var(--p-surface-800);\n  border-bottom-color: var(--p-surface-700);\n}\n:host-context(.app-dark) .permission-matrix__row {\n  border-bottom-color: var(--p-surface-800);\n}\n:host-context(.app-dark) .permission-matrix__row:hover {\n  background: var(--p-surface-800);\n}\n:host-context(.app-dark) .permission-matrix__module-name {\n  color: var(--p-surface-200);\n}\n/*# sourceMappingURL=roles-edit.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: RoleService }, { type: MessageService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesEdit, { className: "RolesEdit", filePath: "src/app/pages/roles/roles-edit/roles-edit.ts", lineNumber: 40 });
})();

// src/app/pages/roles/roles.routes.ts
var roles_routes_default = [
  { path: "", component: RolesListe },
  { path: "edit/:id", component: RolesEdit },
  { path: "**", redirectTo: "/notfound" }
];
export {
  roles_routes_default as default
};
//# sourceMappingURL=chunk-4FN7KNFF.js.map
