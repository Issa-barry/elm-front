import {
  AuthService
} from "./chunk-JKMJDVN5.js";
import {
  RouterModule
} from "./chunk-5M76Y6O2.js";
import "./chunk-B555S3BB.js";
import {
  UsineContextService
} from "./chunk-J6EUYIEM.js";
import "./chunk-CSVYKJ4F.js";
import {
  Tag,
  TagModule
} from "./chunk-AOALFFEO.js";
import "./chunk-OP4G3N4V.js";
import "./chunk-AGBUVBVL.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-T6X6TYBW.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HXF2V74O.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/profile/profile-overview/profile-overview.ts
function ProfileOverview_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const current_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(current_r1.type || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ref: ", current_r1.reference || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Contexte: ", ctx_r1.contextLabel());
  }
}
function ProfileOverview_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "span", 31);
    \u0275\u0275text(3, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "span", 31);
    \u0275\u0275text(8, "Telephone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 30)(12, "span", 31);
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 30)(17, "span", 31);
    \u0275\u0275text(18, "Type de compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 32);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 30)(22, "span", 31);
    \u0275\u0275text(23, "Site courant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 32);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 30)(27, "span", 31);
    \u0275\u0275text(28, "Site par defaut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 32);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const current_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.userFullName());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(current_r3.phone || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(current_r3.email || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(current_r3.type || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.contextLabel());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.defaultSiteId() ?? "-");
  }
}
function ProfileOverview_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "Aucune session utilisateur detectee.");
    \u0275\u0275elementEnd();
  }
}
function ProfileOverview_div_41_p_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 36);
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.formatRole(role_r4));
  }
}
function ProfileOverview_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, ProfileOverview_div_41_p_tag_1_Template, 1, 1, "p-tag", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.roles());
  }
}
function ProfileOverview_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "Aucun role recu par l'API.");
    \u0275\u0275elementEnd();
  }
}
function ProfileOverview_div_49_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5);
  }
}
function ProfileOverview_div_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40);
    \u0275\u0275template(4, ProfileOverview_div_49_div_1_span_4_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatRole(group_r6.module));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r6.permissions);
  }
}
function ProfileOverview_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, ProfileOverview_div_49_div_1_Template, 5, 2, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.permissionGroups());
  }
}
function ProfileOverview_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "Aucune permission remontee par l'API.");
    \u0275\u0275elementEnd();
  }
}
function ProfileOverview_div_56_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "Par defaut");
    \u0275\u0275elementEnd();
  }
}
function ProfileOverview_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProfileOverview_div_56_div_1_span_4_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const site_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(site_r7.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", site_r7.id === ctx_r1.defaultSiteId());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Code: ", site_r7.code || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Type: ", site_r7.type || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Statut: ", site_r7.statut || "-");
  }
}
function ProfileOverview_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, ProfileOverview_div_56_div_1_Template, 11, 5, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.accessibleSites());
  }
}
function ProfileOverview_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, "Aucun site accessible.");
    \u0275\u0275elementEnd();
  }
}
var ProfileOverview = class _ProfileOverview {
  authService = inject(AuthService);
  siteContext = inject(UsineContextService);
  user = computed(() => this.authService.currentUser(), ...ngDevMode ? [{ debugName: "user" }] : []);
  userFullName = computed(() => {
    const current = this.user();
    if (!current)
      return "Utilisateur inconnu";
    const fullName = current.nom_complet?.trim();
    if (fullName)
      return fullName;
    return `${current.prenom ?? ""} ${current.nom ?? ""}`.trim() || "Utilisateur inconnu";
  }, ...ngDevMode ? [{ debugName: "userFullName" }] : []);
  userInitials = computed(() => {
    const words = this.userFullName().split(/\s+/).map((value) => value.trim()).filter((value) => value.length > 0);
    if (words.length === 0)
      return "U";
    if (words.length === 1)
      return words[0].slice(0, 1).toUpperCase();
    return `${words[0].slice(0, 1)}${words[1].slice(0, 1)}`.toUpperCase();
  }, ...ngDevMode ? [{ debugName: "userInitials" }] : []);
  roles = computed(() => {
    const current = this.user();
    return [...current?.roles ?? [], ...current?.role_names ?? []].filter((value, index, array) => value && array.indexOf(value) === index);
  }, ...ngDevMode ? [{ debugName: "roles" }] : []);
  permissions = computed(() => {
    const list = this.user()?.permissions ?? [];
    return list.map((permission) => permission.trim()).filter((permission) => permission.length > 0).filter((permission, index, array) => array.indexOf(permission) === index);
  }, ...ngDevMode ? [{ debugName: "permissions" }] : []);
  permissionGroups = computed(() => {
    const map = /* @__PURE__ */ new Map();
    this.permissions().forEach((permission) => {
      const [module, action] = permission.split(".");
      const key = module?.trim().length ? module.trim() : "autres";
      const item = action?.trim().length ? action.trim() : permission;
      const current = map.get(key) ?? [];
      current.push(item);
      map.set(key, current);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([module, permissionItems]) => ({
      module,
      permissions: permissionItems.sort((a, b) => a.localeCompare(b))
    }));
  }, ...ngDevMode ? [{ debugName: "permissionGroups" }] : []);
  accessibleSites = computed(() => this.siteContext.accessibleUsines(), ...ngDevMode ? [{ debugName: "accessibleSites" }] : []);
  currentSite = computed(() => this.siteContext.currentUsine(), ...ngDevMode ? [{ debugName: "currentSite" }] : []);
  defaultSiteId = computed(() => this.siteContext.defaultUsineId(), ...ngDevMode ? [{ debugName: "defaultSiteId" }] : []);
  isSiegeUser = computed(() => this.siteContext.isSiegeUser(), ...ngDevMode ? [{ debugName: "isSiegeUser" }] : []);
  contextLabel = computed(() => {
    if (this.siteContext.isConsolidated())
      return "Tous les sites";
    return this.currentSite()?.nom ?? "-";
  }, ...ngDevMode ? [{ debugName: "contextLabel" }] : []);
  formatRole(role) {
    return role.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim().replace(/\b\w/g, (letter) => letter.toUpperCase());
  }
  static \u0275fac = function ProfileOverview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileOverview)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileOverview, selectors: [["app-profile-overview"]], decls: 59, vars: 14, consts: [["noUser", ""], ["noRoles", ""], ["noPermissions", ""], ["noSite", ""], [1, "profile-shell"], [1, "profile-hero", "card"], [1, "profile-hero__left"], [1, "profile-avatar"], [1, "profile-hero__identity"], [1, "profile-hero__eyebrow"], [1, "profile-hero__title"], [1, "profile-hero__subtitle"], ["class", "profile-hero__meta", 4, "ngIf"], [1, "profile-hero__stats"], [1, "profile-stat"], [1, "profile-stat__value"], [1, "profile-stat__label"], [1, "profile-grid"], [1, "card", "profile-panel"], [1, "profile-panel__header"], ["class", "profile-info-list", 4, "ngIf", "ngIfElse"], ["class", "profile-tags", 4, "ngIf", "ngIfElse"], [1, "profile-grid", "profile-grid--bottom"], [1, "card", "profile-panel", "profile-panel--permissions"], ["class", "permission-groups", 4, "ngIf", "ngIfElse"], ["class", "site-grid", 4, "ngIf", "ngIfElse"], [1, "profile-hero__meta"], [1, "profile-chip", "profile-chip--soft"], [1, "profile-chip"], [1, "profile-info-list"], [1, "profile-info-row"], [1, "profile-info-row__label"], [1, "profile-info-row__value"], [1, "profile-empty"], [1, "profile-tags"], ["severity", "info", 3, "value", 4, "ngFor", "ngForOf"], ["severity", "info", 3, "value"], [1, "permission-groups"], ["class", "permission-group", 4, "ngFor", "ngForOf"], [1, "permission-group"], [1, "permission-group__items"], ["class", "permission-pill", 4, "ngFor", "ngForOf"], [1, "permission-pill"], [1, "site-grid"], ["class", "site-item", 4, "ngFor", "ngForOf"], [1, "site-item"], [1, "site-item__top"], ["class", "site-item__badge", 4, "ngIf"], [1, "site-item__badge"]], template: function ProfileOverview_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "section", 5)(2, "div", 6)(3, "div", 7);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "p", 9);
      \u0275\u0275text(7, "Compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 10);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 11);
      \u0275\u0275text(11, "Vue session, roles, permissions et contexte site.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, ProfileOverview_div_12_Template, 7, 3, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 13)(14, "div", 14)(15, "span", 15);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 16);
      \u0275\u0275text(18, "Role(s)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "span", 15);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23, "Permission(s)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 14)(25, "span", 15);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 16);
      \u0275\u0275text(28, "Site(s)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "section", 17)(30, "article", 18)(31, "header", 19)(32, "h2");
      \u0275\u0275text(33, "Informations personnelles");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(34, ProfileOverview_div_34_Template, 31, 6, "div", 20)(35, ProfileOverview_ng_template_35_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "article", 18)(38, "header", 19)(39, "h2");
      \u0275\u0275text(40, "Roles");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, ProfileOverview_div_41_Template, 2, 1, "div", 21)(42, ProfileOverview_ng_template_42_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "section", 22)(45, "article", 23)(46, "header", 19)(47, "h2");
      \u0275\u0275text(48, "Permissions");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, ProfileOverview_div_49_Template, 2, 1, "div", 24)(50, ProfileOverview_ng_template_50_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "article", 18)(53, "header", 19)(54, "h2");
      \u0275\u0275text(55, "Sites accessibles");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(56, ProfileOverview_div_56_Template, 2, 1, "div", 25)(57, ProfileOverview_ng_template_57_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const noUser_r8 = \u0275\u0275reference(36);
      const noRoles_r9 = \u0275\u0275reference(43);
      const noPermissions_r10 = \u0275\u0275reference(51);
      const noSite_r11 = \u0275\u0275reference(58);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.userInitials());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.userFullName());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.user());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.roles().length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.permissions().length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.accessibleSites().length);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.user())("ngIfElse", noUser_r8);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.roles().length > 0)("ngIfElse", noRoles_r9);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.permissionGroups().length > 0)("ngIfElse", noPermissions_r10);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.accessibleSites().length > 0)("ngIfElse", noSite_r11);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, TagModule, Tag], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.profile-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.profile-hero[_ngcontent-%COMP%], \n.profile-panel[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  border: 1px solid var(--p-surface-200);\n}\n.profile-hero[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1.15rem;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--p-primary-500) 8%, var(--p-surface-0)),\n      var(--p-surface-0));\n}\n.profile-hero__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.85rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      145deg,\n      var(--p-primary-500),\n      var(--p-primary-700));\n  box-shadow: 0 12px 28px color-mix(in srgb, var(--p-primary-500) 28%, transparent);\n}\n.profile-hero__identity[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.profile-hero__eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--p-text-muted-color);\n}\n.profile-hero__title[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--p-text-color);\n}\n.profile-hero__subtitle[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  color: var(--p-text-muted-color);\n  font-size: 0.92rem;\n}\n.profile-hero__meta[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.profile-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.2rem 0.65rem;\n  font-size: 0.76rem;\n  font-weight: 600;\n  border: 1px solid var(--p-surface-300);\n  color: var(--p-text-color);\n  background: var(--p-surface-0);\n}\n.profile-chip--soft[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--p-primary-500) 35%, var(--p-surface-300));\n  color: var(--p-primary-600);\n  background: color-mix(in srgb, var(--p-primary-500) 12%, transparent);\n}\n.profile-hero__stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.55rem;\n}\n.profile-stat[_ngcontent-%COMP%] {\n  border: 1px solid color-mix(in srgb, var(--p-primary-400) 25%, var(--p-surface-300));\n  border-radius: 0.8rem;\n  background: color-mix(in srgb, var(--p-primary-500) 8%, transparent);\n  padding: 0.7rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.18rem;\n}\n.profile-stat__value[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--p-text-color);\n}\n.profile-stat__label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--p-text-muted-color);\n}\n.profile-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n.profile-panel[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.profile-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.8rem;\n}\n.profile-panel__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--p-text-color);\n}\n.profile-info-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n}\n.profile-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom: 1px solid var(--p-surface-200);\n  padding: 0.5rem 0;\n}\n.profile-info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.profile-info-row__label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--p-text-muted-color);\n}\n.profile-info-row__value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--p-text-color);\n  text-align: right;\n}\n.profile-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.profile-empty[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--p-text-muted-color);\n}\n.permission-groups[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n}\n.permission-group[_ngcontent-%COMP%] {\n  border: 1px solid var(--p-surface-200);\n  border-radius: 0.8rem;\n  background: color-mix(in srgb, var(--p-surface-100) 28%, transparent);\n  padding: 0.7rem;\n}\n.permission-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.84rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--p-primary-600);\n}\n.permission-group__items[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.permission-pill[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 0.2rem 0.55rem;\n  border: 1px solid var(--p-surface-300);\n  background: var(--p-surface-0);\n  font-size: 0.75rem;\n  color: var(--p-text-color);\n}\n.site-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.7rem;\n}\n.site-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--p-surface-200);\n  border-radius: 0.85rem;\n  padding: 0.75rem;\n  background: var(--p-surface-0);\n}\n.site-item__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.6rem;\n  margin-bottom: 0.4rem;\n}\n.site-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.98rem;\n  color: var(--p-text-color);\n}\n.site-item__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.15rem 0.5rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--p-primary-700);\n  border: 1px solid color-mix(in srgb, var(--p-primary-500) 30%, var(--p-surface-300));\n  background: color-mix(in srgb, var(--p-primary-500) 10%, transparent);\n}\n.site-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  font-size: 0.82rem;\n  color: var(--p-text-muted-color);\n}\n@media (min-width: 900px) {\n  .profile-hero[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .profile-hero__stats[_ngcontent-%COMP%] {\n    min-width: 270px;\n  }\n  .profile-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);\n  }\n  .profile-grid--bottom[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);\n  }\n  .site-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=profile-overview.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileOverview, [{
    type: Component,
    args: [{ selector: "app-profile-overview", standalone: true, imports: [CommonModule, RouterModule, TagModule], template: `<div class="profile-shell">
  <section class="profile-hero card">
    <div class="profile-hero__left">
      <div class="profile-avatar">{{ userInitials() }}</div>

      <div class="profile-hero__identity">
        <p class="profile-hero__eyebrow">Compte</p>
        <h1 class="profile-hero__title">{{ userFullName() }}</h1>
        <p class="profile-hero__subtitle">Vue session, roles, permissions et contexte site.</p>

        <div class="profile-hero__meta" *ngIf="user() as current">
          <span class="profile-chip profile-chip--soft">{{ current.type || '-' }}</span>
          <span class="profile-chip">Ref: {{ current.reference || '-' }}</span>
          <span class="profile-chip">Contexte: {{ contextLabel() }}</span>
        </div>
      </div>
    </div>

    <div class="profile-hero__stats">
      <div class="profile-stat">
        <span class="profile-stat__value">{{ roles().length }}</span>
        <span class="profile-stat__label">Role(s)</span>
      </div>
      <div class="profile-stat">
        <span class="profile-stat__value">{{ permissions().length }}</span>
        <span class="profile-stat__label">Permission(s)</span>
      </div>
      <div class="profile-stat">
        <span class="profile-stat__value">{{ accessibleSites().length }}</span>
        <span class="profile-stat__label">Site(s)</span>
      </div>
    </div>
  </section>

  <section class="profile-grid">
    <article class="card profile-panel">
      <header class="profile-panel__header">
        <h2>Informations personnelles</h2>
      </header>

      <div *ngIf="user() as current; else noUser" class="profile-info-list">
        <div class="profile-info-row">
          <span class="profile-info-row__label">Nom complet</span>
          <span class="profile-info-row__value">{{ userFullName() }}</span>
        </div>
        <div class="profile-info-row">
          <span class="profile-info-row__label">Telephone</span>
          <span class="profile-info-row__value">{{ current.phone || '-' }}</span>
        </div>
        <div class="profile-info-row">
          <span class="profile-info-row__label">Email</span>
          <span class="profile-info-row__value">{{ current.email || '-' }}</span>
        </div>
        <div class="profile-info-row">
          <span class="profile-info-row__label">Type de compte</span>
          <span class="profile-info-row__value">{{ current.type || '-' }}</span>
        </div>
        <div class="profile-info-row">
          <span class="profile-info-row__label">Site courant</span>
          <span class="profile-info-row__value">{{ contextLabel() }}</span>
        </div>
        <div class="profile-info-row">
          <span class="profile-info-row__label">Site par defaut</span>
          <span class="profile-info-row__value">{{ defaultSiteId() ?? '-' }}</span>
        </div>
      </div>

      <ng-template #noUser>
        <p class="profile-empty">Aucune session utilisateur detectee.</p>
      </ng-template>
    </article>

    <article class="card profile-panel">
      <header class="profile-panel__header">
        <h2>Roles</h2>
      </header>

      <div class="profile-tags" *ngIf="roles().length > 0; else noRoles">
        <p-tag *ngFor="let role of roles()" [value]="formatRole(role)" severity="info"></p-tag>
      </div>

      <ng-template #noRoles>
        <p class="profile-empty">Aucun role recu par l'API.</p>
      </ng-template>
    </article>
  </section>

  <section class="profile-grid profile-grid--bottom">
    <article class="card profile-panel profile-panel--permissions">
      <header class="profile-panel__header">
        <h2>Permissions</h2>
      </header>

      <div *ngIf="permissionGroups().length > 0; else noPermissions" class="permission-groups">
        <div class="permission-group" *ngFor="let group of permissionGroups()">
          <h3>{{ formatRole(group.module) }}</h3>
          <div class="permission-group__items">
            <span class="permission-pill" *ngFor="let item of group.permissions">{{ item }}</span>
          </div>
        </div>
      </div>

      <ng-template #noPermissions>
        <p class="profile-empty">Aucune permission remontee par l'API.</p>
      </ng-template>
    </article>

    <article class="card profile-panel">
      <header class="profile-panel__header">
        <h2>Sites accessibles</h2>
      </header>

      <div *ngIf="accessibleSites().length > 0; else noSite" class="site-grid">
        <div class="site-item" *ngFor="let site of accessibleSites()">
          <div class="site-item__top">
            <h3>{{ site.nom }}</h3>
            <span class="site-item__badge" *ngIf="site.id === defaultSiteId()">Par defaut</span>
          </div>
          <p>Code: {{ site.code || '-' }}</p>
          <p>Type: {{ site.type || '-' }}</p>
          <p>Statut: {{ site.statut || '-' }}</p>
        </div>
      </div>

      <ng-template #noSite>
        <p class="profile-empty">Aucun site accessible.</p>
      </ng-template>
    </article>
  </section>
</div>\r
`, styles: ["/* src/app/pages/profile/profile-overview/profile-overview.scss */\n:host {\n  display: block;\n}\n.profile-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.profile-hero,\n.profile-panel {\n  border-radius: 1rem;\n  border: 1px solid var(--p-surface-200);\n}\n.profile-hero {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1.15rem;\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--p-primary-500) 8%, var(--p-surface-0)),\n      var(--p-surface-0));\n}\n.profile-hero__left {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n.profile-avatar {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 0.85rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      145deg,\n      var(--p-primary-500),\n      var(--p-primary-700));\n  box-shadow: 0 12px 28px color-mix(in srgb, var(--p-primary-500) 28%, transparent);\n}\n.profile-hero__identity {\n  min-width: 0;\n}\n.profile-hero__eyebrow {\n  margin: 0;\n  font-size: 0.78rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--p-text-muted-color);\n}\n.profile-hero__title {\n  margin: 0.2rem 0 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--p-text-color);\n}\n.profile-hero__subtitle {\n  margin: 0.4rem 0 0;\n  color: var(--p-text-muted-color);\n  font-size: 0.92rem;\n}\n.profile-hero__meta {\n  margin-top: 0.75rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.profile-chip {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 999px;\n  padding: 0.2rem 0.65rem;\n  font-size: 0.76rem;\n  font-weight: 600;\n  border: 1px solid var(--p-surface-300);\n  color: var(--p-text-color);\n  background: var(--p-surface-0);\n}\n.profile-chip--soft {\n  border-color: color-mix(in srgb, var(--p-primary-500) 35%, var(--p-surface-300));\n  color: var(--p-primary-600);\n  background: color-mix(in srgb, var(--p-primary-500) 12%, transparent);\n}\n.profile-hero__stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.55rem;\n}\n.profile-stat {\n  border: 1px solid color-mix(in srgb, var(--p-primary-400) 25%, var(--p-surface-300));\n  border-radius: 0.8rem;\n  background: color-mix(in srgb, var(--p-primary-500) 8%, transparent);\n  padding: 0.7rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.18rem;\n}\n.profile-stat__value {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--p-text-color);\n}\n.profile-stat__label {\n  font-size: 0.76rem;\n  color: var(--p-text-muted-color);\n}\n.profile-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n.profile-panel {\n  padding: 1rem;\n}\n.profile-panel__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.8rem;\n}\n.profile-panel__header h2 {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--p-text-color);\n}\n.profile-info-list {\n  display: grid;\n  gap: 0.35rem;\n}\n.profile-info-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom: 1px solid var(--p-surface-200);\n  padding: 0.5rem 0;\n}\n.profile-info-row:last-child {\n  border-bottom: 0;\n}\n.profile-info-row__label {\n  font-size: 0.82rem;\n  color: var(--p-text-muted-color);\n}\n.profile-info-row__value {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--p-text-color);\n  text-align: right;\n}\n.profile-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.profile-empty {\n  margin: 0;\n  color: var(--p-text-muted-color);\n}\n.permission-groups {\n  display: grid;\n  gap: 0.7rem;\n}\n.permission-group {\n  border: 1px solid var(--p-surface-200);\n  border-radius: 0.8rem;\n  background: color-mix(in srgb, var(--p-surface-100) 28%, transparent);\n  padding: 0.7rem;\n}\n.permission-group h3 {\n  margin: 0;\n  font-size: 0.84rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--p-primary-600);\n}\n.permission-group__items {\n  margin-top: 0.55rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.permission-pill {\n  border-radius: 999px;\n  padding: 0.2rem 0.55rem;\n  border: 1px solid var(--p-surface-300);\n  background: var(--p-surface-0);\n  font-size: 0.75rem;\n  color: var(--p-text-color);\n}\n.site-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.7rem;\n}\n.site-item {\n  border: 1px solid var(--p-surface-200);\n  border-radius: 0.85rem;\n  padding: 0.75rem;\n  background: var(--p-surface-0);\n}\n.site-item__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.6rem;\n  margin-bottom: 0.4rem;\n}\n.site-item h3 {\n  margin: 0;\n  font-size: 0.98rem;\n  color: var(--p-text-color);\n}\n.site-item__badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.15rem 0.5rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--p-primary-700);\n  border: 1px solid color-mix(in srgb, var(--p-primary-500) 30%, var(--p-surface-300));\n  background: color-mix(in srgb, var(--p-primary-500) 10%, transparent);\n}\n.site-item p {\n  margin: 0.2rem 0 0;\n  font-size: 0.82rem;\n  color: var(--p-text-muted-color);\n}\n@media (min-width: 900px) {\n  .profile-hero {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .profile-hero__stats {\n    min-width: 270px;\n  }\n  .profile-grid {\n    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);\n  }\n  .profile-grid--bottom {\n    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);\n  }\n  .site-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=profile-overview.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileOverview, { className: "ProfileOverview", filePath: "src/app/pages/profile/profile-overview/profile-overview.ts", lineNumber: 21 });
})();
export {
  ProfileOverview
};
//# sourceMappingURL=chunk-MZ7BXYRJ.js.map
