import {
  CommandeVenteService
} from "./chunk-SK5Q6OVQ.js";
import {
  FactureLivraisonService
} from "./chunk-F5YSZB2F.js";
import {
  MODE_PAIEMENT_OPTIONS,
  STATUT_FACTURE_LABELS,
  STATUT_FACTURE_SEVERITY
} from "./chunk-VF5NWIYJ.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-UWHPUST5.js";
import {
  PhoneFormatPipe
} from "./chunk-5T2XHLOC.js";
import {
  Dialog,
  DialogModule
} from "./chunk-P3S4PXJW.js";
import {
  AuthService
} from "./chunk-CL3X32VF.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-N3I2MPIX.js";
import "./chunk-4WV22ZEZ.js";
import "./chunk-C5GRAO6X.js";
import "./chunk-CSVYKJ4F.js";
import {
  Toast,
  ToastModule
} from "./chunk-K65U6EBI.js";
import "./chunk-A7I32VT2.js";
import {
  TagModule
} from "./chunk-FMK3YN5M.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-DBXKSYQP.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-D4DB7G5Q.js";
import "./chunk-UQFVREV6.js";
import "./chunk-J7PQPFQ2.js";
import "./chunk-JDFDUAZW.js";
import "./chunk-GNS5B2OF.js";
import "./chunk-7U237DEN.js";
import {
  Select,
  SelectModule
} from "./chunk-2UOA5RIX.js";
import "./chunk-GSLAPXC6.js";
import "./chunk-RNBHJ3IS.js";
import "./chunk-XCVSS3ID.js";
import "./chunk-URQMWJE6.js";
import {
  InputText,
  InputTextModule
} from "./chunk-DQKWWXZT.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FGSFU6DI.js";
import {
  TooltipModule
} from "./chunk-55R5VFNU.js";
import "./chunk-4WKDSNIY.js";
import "./chunk-KWGIJUAU.js";
import "./chunk-ORG54PNZ.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-3DMR3ILK.js";
import {
  ButtonDirective,
  ButtonIcon,
  ButtonLabel,
  ButtonModule
} from "./chunk-73OLBEDX.js";
import "./chunk-U4SWEEQT.js";
import "./chunk-WLMAONDN.js";
import "./chunk-CUJZFPFM.js";
import {
  MessageService
} from "./chunk-MGF35FP6.js";
import {
  CommonModule,
  NgClass
} from "./chunk-AR53T6NL.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SKXAAURP.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/commande-vente-detail/commande-vente-detail.ts
var _c0 = () => ({ width: "26rem" });
var _c1 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _c2 = (a0, a1, a2, a3) => ({ "px-2 py-1 rounded-md flex items-center gap-1": true, "bg-surface-100 dark:bg-surface-800": a0, "bg-orange-100 dark:bg-orange-900": a1, "bg-green-100 dark:bg-green-900": a2, "bg-red-100 dark:bg-red-900": a3 });
var _c3 = (a0, a1, a2, a3) => ({ "text-sm font-bold": true, "text-surface-600 dark:text-surface-300": a0, "text-orange-700 dark:text-orange-300": a1, "text-green-700 dark:text-green-300": a2, "text-red-700 dark:text-red-300": a3 });
var _forTrack0 = ($index, $item) => $item.id;
function CommandeVenteDetail_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 12);
    \u0275\u0275element(2, "p-skeleton", 13);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275element(4, "p-skeleton", 14)(5, "p-skeleton", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16);
    \u0275\u0275element(7, "p-skeleton", 17);
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275element(9, "p-skeleton", 19)(10, "p-skeleton", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p-skeleton", 21)(12, "p-skeleton", 22)(13, "p-skeleton", 23);
    \u0275\u0275elementEnd()();
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 60);
    \u0275\u0275listener("click", function CommandeVenteDetail_Conditional_2_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEncaissementDialog());
    });
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4, "Encaisser");
    \u0275\u0275elementEnd()()();
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.commande.vehicule.photo_url, \u0275\u0275sanitizeUrl)("alt", ctx_r2.commande.vehicule.nom_vehicule);
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c2, ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "surface", ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "orange", ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "green", ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "red"));
    \u0275\u0275advance();
    \u0275\u0275classMap("text-xs pi " + ctx_r2.getStatutIcon(ctx_r2.commande.facture.statut_facture) + " " + (ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "surface" ? "text-surface-600 dark:text-surface-300" : ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "orange" ? "text-orange-700 dark:text-orange-300" : ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "green" ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(10, _c3, ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "surface", ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "orange", ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "green", ctx_r2.getStatutColor(ctx_r2.commande.facture.statut_facture) === "red"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStatutLabel(ctx_r2.commande.facture.statut_facture));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_79_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const prop_r5 = \u0275\u0275readContextLet(78);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, prop_r5.phone));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2, "Propri\xE9taire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CommandeVenteDetail_Conditional_2_Conditional_79_Conditional_6_Template, 3, 3, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const prop_r5 = \u0275\u0275readContextLet(78);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", prop_r5.prenom, " ", prop_r5.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(prop_r5.phone ? 6 : -1);
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_81_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const lv_r6 = \u0275\u0275readContextLet(80);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, lv_r6.phone));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2, "Livreur principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CommandeVenteDetail_Conditional_2_Conditional_81_Conditional_6_Template, 3, 3, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const lv_r6 = \u0275\u0275readContextLet(80);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", lv_r6.prenom, " ", lv_r6.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(lv_r6.phone ? 6 : -1);
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_82_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 70)(2, "div", 71);
    \u0275\u0275element(3, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 74);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ligne_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ligne_r7.produit == null ? null : ligne_r7.produit.nom) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Qt\xE9 : ", ligne_r7.qte);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ligne_r7.total_ligne));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "h3", 50);
    \u0275\u0275text(3, "Produits");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 67);
    \u0275\u0275repeaterCreate(5, CommandeVenteDetail_Conditional_2_Conditional_82_For_6_Template, 11, 3, "div", 68, _forTrack0);
    \u0275\u0275element(7, "div", 69);
    \u0275\u0275elementStart(8, "div", 68)(9, "span", 41);
    \u0275\u0275text(10, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 65);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.commande.lignes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.commande.total_commande));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function CommandeVenteDetail_Conditional_2_Conditional_87_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEncaissementDialog());
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementStart(2, "span", 62);
    \u0275\u0275text(3, "Encaisser");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_89_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 76);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const enc_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("pi " + ctx_r2.getModeIcon(enc_r9.mode_paiement) + " text-surface-400");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getModeLabel(enc_r9.mode_paiement));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r2.formatDate(enc_r9.date_encaissement));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(enc_r9.montant));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275repeaterCreate(1, CommandeVenteDetail_Conditional_2_Conditional_89_For_2_Template, 9, 5, "div", 68, _forTrack0);
    \u0275\u0275element(3, "div", 69);
    \u0275\u0275elementStart(4, "div", 68)(5, "span", 41);
    \u0275\u0275text(6, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.commande.facture.encaissements);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.commande.facture == null ? null : ctx_r2.commande.facture.montant_encaisse));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275text(2, " Aucun encaissement enregistr\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteDetail_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 24)(2, "div", 25)(3, "button", 26);
    \u0275\u0275listener("click", function CommandeVenteDetail_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275element(4, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "h1", 28);
    \u0275\u0275text(7, "Commande Vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, CommandeVenteDetail_Conditional_2_Conditional_10_Template, 5, 0, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 30)(12, "div", 31)(13, "div", 32);
    \u0275\u0275conditionalCreate(14, CommandeVenteDetail_Conditional_2_Conditional_14_Template, 1, 2, "img", 33)(15, CommandeVenteDetail_Conditional_2_Conditional_15_Template, 2, 0, "div", 34);
    \u0275\u0275elementStart(16, "div", 5)(17, "div", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 29);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 36)(22, "div", 37)(23, "div", 38)(24, "span", 39);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 40)(27, "span", 41);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 37);
    \u0275\u0275conditionalCreate(30, CommandeVenteDetail_Conditional_2_Conditional_30_Template, 4, 15, "div", 42)(31, CommandeVenteDetail_Conditional_2_Conditional_31_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 40)(33, "span", 44);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 45)(36, "div", 46)(37, "div", 47)(38, "div", 48)(39, "div", 49)(40, "h3", 50);
    \u0275\u0275text(41, "D\xE9tail de la commande");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 51)(43, "div", 52)(44, "span", 53);
    \u0275\u0275text(45, "Total commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 54);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 52)(49, "span", 53);
    \u0275\u0275text(50, "Encaiss\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 54);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 52)(54, "span", 53);
    \u0275\u0275text(55, "Restant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 54);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 52)(59, "span", 53);
    \u0275\u0275text(60, "Date de cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 54);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 48)(64, "div", 49)(65, "h3", 50);
    \u0275\u0275text(66, "V\xE9hicules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 51)(68, "div", 52)(69, "span", 53);
    \u0275\u0275text(70, "Nom du v\xE9hicule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 54);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 52)(74, "span", 53);
    \u0275\u0275text(75, "Immatriculation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 55);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(78);
    \u0275\u0275conditionalCreate(79, CommandeVenteDetail_Conditional_2_Conditional_79_Template, 7, 3, "div", 52);
    \u0275\u0275declareLet(80);
    \u0275\u0275conditionalCreate(81, CommandeVenteDetail_Conditional_2_Conditional_81_Template, 7, 3, "div", 52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(82, CommandeVenteDetail_Conditional_2_Conditional_82_Template, 13, 1, "div", 48);
    \u0275\u0275elementStart(83, "div", 48)(84, "div", 56)(85, "h3", 50);
    \u0275\u0275text(86, "Encaissements");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(87, CommandeVenteDetail_Conditional_2_Conditional_87_Template, 4, 2, "button", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 51);
    \u0275\u0275conditionalCreate(89, CommandeVenteDetail_Conditional_2_Conditional_89_Template, 9, 1, "div", 58)(90, CommandeVenteDetail_Conditional_2_Conditional_90_Template, 3, 0, "div", 59);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" Total = ", ctx_r2.formatMontant(ctx_r2.commande.total_commande), " \xA0|\xA0 Encaiss\xE9 = ", ctx_r2.formatMontant(ctx_r2.commande.facture == null ? null : ctx_r2.commande.facture.montant_encaisse), " \xA0|\xA0 Restant = ", ctx_r2.formatMontant(ctx_r2.commande.facture == null ? null : ctx_r2.commande.facture.montant_restant), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canEncaisserFacture ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r2.commande.vehicule == null ? null : ctx_r2.commande.vehicule.photo_url) ? 14 : 15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.commande.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.commande.vehicule == null ? null : ctx_r2.commande.vehicule.nom_vehicule) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.commande.facture == null ? null : ctx_r2.commande.facture.reference) ?? "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.commande.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.commande.facture ? 30 : 31);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.commande.total_commande));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.commande.total_commande));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.commande.facture == null ? null : ctx_r2.commande.facture.montant_encaisse));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.commande.facture == null ? null : ctx_r2.commande.facture.montant_restant));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.commande.created_at));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((ctx_r2.commande.vehicule == null ? null : ctx_r2.commande.vehicule.nom_vehicule) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r2.commande.vehicule == null ? null : ctx_r2.commande.vehicule.immatriculation) ?? "\u2014");
    \u0275\u0275advance();
    const prop_r10 = \u0275\u0275storeLet(ctx_r2.commande.vehicule == null ? null : ctx_r2.commande.vehicule.proprietaire);
    \u0275\u0275advance();
    \u0275\u0275conditional(prop_r10 ? 79 : -1);
    \u0275\u0275advance();
    const lv_r11 = \u0275\u0275storeLet((ctx_r2.commande.vehicule == null ? null : ctx_r2.commande.vehicule.livreurPrincipal) ?? (ctx_r2.commande.vehicule == null ? null : ctx_r2.commande.vehicule.livreur_principal));
    \u0275\u0275advance();
    \u0275\u0275conditional(lv_r11 ? 81 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.commande.lignes && ctx_r2.commande.lignes.length > 0 ? 82 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.canEncaisserFacture ? 87 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.commande.facture == null ? null : ctx_r2.commande.facture.encaissements) && ctx_r2.commande.facture.encaissements.length > 0 ? 89 : 90);
  }
}
function CommandeVenteDetail_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 78)(2, "span", 79);
    \u0275\u0275text(3, "Facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 68)(7, "span", 81);
    \u0275\u0275text(8, "Restant d\xFB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 82);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.commande.facture.reference);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.commande.facture.montant_restant));
  }
}
function CommandeVenteDetail_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 8);
    \u0275\u0275text(1, "Montant obligatoire");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteDetail_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function CommandeVenteDetail_ng_template_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.encaissementDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 84);
    \u0275\u0275listener("click", function CommandeVenteDetail_ng_template_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSaveEncaissement());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.savingEncaissement);
  }
}
var CommandeVenteDetail = class _CommandeVenteDetail {
  route;
  router;
  fb;
  commandeService;
  factureService;
  authService;
  messageService;
  commande = null;
  loading = false;
  canUpdate = false;
  canEncaissement = false;
  encaissementDialogVisible = false;
  savingEncaissement = false;
  encaissementForm;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;
  constructor(route, router, fb, commandeService, factureService, authService, messageService) {
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.commandeService = commandeService;
    this.factureService = factureService;
    this.authService = authService;
    this.messageService = messageService;
    this.canUpdate = this.authService.hasPermission("commandes.update");
    this.canEncaissement = this.authService.hasPermission("encaissements.create");
  }
  ngOnInit() {
    this.initEncaissementForm();
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.router.navigate(["/notfound"]);
      return;
    }
    this.loadCommande(id);
  }
  initEncaissementForm() {
    this.encaissementForm = this.fb.group({
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ["especes", Validators.required],
      date_encaissement: [/* @__PURE__ */ new Date(), Validators.required],
      note: [""]
    });
  }
  loadCommande(id) {
    this.loading = true;
    this.commandeService.getCommande(id).subscribe({
      next: (resp) => {
        this.commande = resp.data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: "error",
          summary: err.status === 404 ? "Introuvable" : "Erreur",
          detail: err.status === 404 ? "Cette commande n'existe pas ou a \xE9t\xE9 supprim\xE9e." : "Impossible de charger la commande.",
          life: 4e3
        });
        setTimeout(() => this.router.navigate(["/ventes/commandes"]), 2500);
      }
    });
  }
  get isLocked() {
    return (this.commande?.facture?.montant_encaisse ?? 0) > 0;
  }
  get progressPct() {
    if (!this.commande?.facture)
      return 0;
    const net = parseFloat(String(this.commande.facture.montant_net));
    if (!net)
      return 0;
    return Math.min(100, Math.round(this.commande.facture.montant_encaisse / net * 100));
  }
  get canEncaisserFacture() {
    if (!this.commande?.facture)
      return false;
    return this.canEncaissement && this.commande.facture.statut_facture !== "payee" && this.commande.facture.statut_facture !== "annulee";
  }
  openEncaissementDialog() {
    this.initEncaissementForm();
    this.encaissementDialogVisible = true;
  }
  onSaveEncaissement() {
    this.encaissementForm.markAllAsTouched();
    if (this.encaissementForm.invalid || this.savingEncaissement)
      return;
    if (!this.commande?.facture?.id)
      return;
    const v = this.encaissementForm.value;
    const date = v.date_encaissement instanceof Date ? v.date_encaissement.toISOString().split("T")[0] : String(v.date_encaissement);
    const dto = {
      facture_vente_id: this.commande.facture.id,
      montant: v.montant,
      mode_paiement: v.mode_paiement,
      date_encaissement: date,
      note: v.note || void 0
    };
    this.savingEncaissement = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.savingEncaissement = false;
        this.encaissementDialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Paiement enregistr\xE9",
          detail: "Le paiement a \xE9t\xE9 enregistr\xE9 avec succ\xE8s.",
          life: 3e3
        });
        this.loadCommande(this.commande.id);
      },
      error: (err) => {
        this.savingEncaissement = false;
        if (err.status === 422 && err.error?.errors) {
          const msgs = Object.values(err.error.errors).flat();
          msgs.forEach((m) => this.messageService.add({ severity: "error", summary: "Erreur de validation", detail: m, life: 5e3 }));
          return;
        }
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err.error?.message ?? "Impossible d'enregistrer le paiement.",
          life: 5e3
        });
      }
    });
  }
  isEncaissInvalid(name) {
    const c = this.encaissementForm.get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  goBack() {
    this.router.navigate(["/ventes/commandes"]);
  }
  goEdit() {
    this.router.navigate(["/ventes/commandes"], { queryParams: { edit: this.commande?.id } });
  }
  goFacture() {
    if (this.commande?.facture?.id) {
      this.router.navigate(["/ventes/factures", this.commande.facture.id]);
    }
  }
  getStatutLabel(s) {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }
  getStatutSeverity(s) {
    return STATUT_FACTURE_SEVERITY[s] ?? "info";
  }
  formatMontant(n) {
    if (n == null || n === "")
      return "\u2014";
    const num = typeof n === "string" ? parseFloat(n) : n;
    return new Intl.NumberFormat("fr-FR").format(num) + " GNF";
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("fr-FR");
  }
  getStatutColor(s) {
    const map = {
      impayee: "red",
      partiel: "orange",
      payee: "green",
      annulee: "surface"
    };
    return map[s] ?? "surface";
  }
  getStatutIcon(s) {
    const map = {
      impayee: "pi-clock",
      partiel: "pi-chart-pie",
      payee: "pi-check",
      annulee: "pi-times"
    };
    return map[s] ?? "pi-circle";
  }
  getModeLabel(mode) {
    const labels = {
      especes: "Esp\xE8ces",
      mobile_money: "Mobile Money",
      virement: "Virement bancaire",
      cheque: "Ch\xE8que"
    };
    return labels[mode] ?? mode;
  }
  getModeIcon(mode) {
    const map = {
      especes: "pi-money-bill",
      mobile_money: "pi-mobile",
      virement: "pi-building",
      cheque: "pi-file"
    };
    return map[mode] ?? "pi-credit-card";
  }
  totalLignes() {
    return (this.commande?.lignes ?? []).reduce((sum, l) => sum + parseFloat(String(l.total_ligne ?? 0)), 0);
  }
  static \u0275fac = function CommandeVenteDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommandeVenteDetail)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CommandeVenteService), \u0275\u0275directiveInject(FactureLivraisonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommandeVenteDetail, selectors: [["app-commande-vente-detail"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 25, vars: 19, consts: [["footer", ""], [1, "bg-surface-0", "dark:bg-surface-900", "p-12", "md:p-20"], ["header", "Ajouter un encaissement", 3, "visibleChange", "visible", "modal", "dismissableMask"], [1, "mb-4", "bg-surface-50", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "p-4", "flex", "flex-col", "gap-2"], [1, "flex", "flex-col", "gap-5", "pt-2", 3, "formGroup"], [1, "flex", "flex-col", "gap-1"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], ["formControlName", "montant", "suffix", " GNF", "styleClass", "w-full", 3, "min", "useGrouping", "ngClass"], [1, "text-red-500"], ["formControlName", "mode_paiement", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", "appendTo", "body", 3, "options"], ["formControlName", "date_encaissement", "dateFormat", "dd/mm/yy", "styleClass", "w-full", "appendTo", "body", 3, "showIcon", "readonlyInput"], ["pInputText", "", "formControlName", "note", "placeholder", "Optionnel", 1, "w-full"], [1, "flex", "items-center", "gap-3", "mb-8"], ["shape", "circle", "size", "2.5rem"], ["width", "12rem", "height", "1.5rem", "styleClass", "mb-1"], ["width", "8rem", "height", "1rem"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "p-6", "flex", "gap-6"], ["shape", "circle", "size", "3rem"], [1, "flex-1", "flex", "flex-col", "gap-3"], ["width", "10rem", "height", "1.25rem"], ["width", "7rem", "height", "1rem"], ["width", "6rem", "height", "1.5rem"], ["width", "8rem", "height", "1.5rem"], ["width", "5rem", "height", "1.5rem"], [1, "flex", "flex-col", "lg:flex-row", "md:justify-between", "items-start", "lg:items-end", "gap-4", "mb-8"], [1, "flex", "items-start", "gap-3", "flex-1"], ["pButton", "", 1, "w-10", "h-10", "flex-shrink-0", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-arrow-left"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "font-semibold", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-base", "leading-tight"], [1, "bg-surface-0", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden", "transition-all", "duration-300"], [1, "p-6", "flex", "flex-col", "lg:flex-row", "justify-start", "lg:items-center", "gap-6"], [1, "flex", "items-center", "gap-4", "flex-1"], [1, "w-12", "h-12", "rounded", "object-cover", "flex-shrink-0", 3, "src", "alt"], [1, "w-12", "h-12", "rounded", "bg-surface-100", "dark:bg-surface-800", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "text-surface-900", "dark:text-surface-0", "text-lg", "font-medium", "leading-tight"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "gap-3", "sm:gap-4", "flex-1"], [1, "flex", "flex-col", "items-start", "sm:items-center", "flex-1", "min-w-0"], [1, "px-2", "py-1", "bg-surface-100", "dark:bg-surface-800", "rounded-md"], [1, "text-surface-600", "dark:text-surface-300", "text-sm", "font-bold", "font-mono"], [1, "flex", "flex-col", "items-start", "sm:items-center", "flex-1"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "leading-tight"], [3, "ngClass"], [1, "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "font-semibold", "leading-tight"], [1, "overflow-hidden"], [1, "flex", "flex-col", "gap-6", "p-6", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden"], [1, "p-4", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold", "leading-tight"], [1, "p-6", "flex", "flex-col", "gap-5"], [1, "flex", "gap-2"], [1, "w-40", "text-surface-700", "dark:text-surface-300", "text-base", "leading-tight"], [1, "flex-1", "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "flex-1", "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "font-mono", "leading-tight"], [1, "p-4", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700", "flex", "justify-between", "items-center"], ["pButton", "", "severity", "primary", 1, "h-9", 3, "text", "rounded"], [1, "flex", "flex-col", "gap-4"], [1, "text-center", "py-6", "text-surface-400", "dark:text-surface-500"], ["pButton", "", "severity", "primary", 3, "click"], ["pButtonIcon", "", 1, "pi", "pi-plus"], ["pButtonLabel", ""], [1, "pi", "pi-car", "text-surface-400", "text-xl"], [1, "flex-1"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "mt-0.5"], [1, "p-6", "flex", "flex-col", "gap-4"], [1, "flex", "justify-between", "items-center"], [1, "h-px", "bg-surface-200", "dark:bg-surface-700"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "pi", "pi-box", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "font-medium", "leading-tight"], [1, "text-surface-400", "dark:text-surface-500", "text-sm", "mt-0.5"], ["pButton", "", "severity", "primary", 1, "h-9", 3, "click", "text", "rounded"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-inbox", "text-3xl", "mb-2", "block"], [1, "flex", "justify-between", "items-center", "text-sm"], [1, "text-surface-500"], [1, "font-mono", "font-semibold", "text-surface-700", "dark:text-surface-300", "text-xs"], [1, "text-sm", "text-surface-500"], [1, "font-bold", "text-orange-600", "text-base"], ["pButton", "", "severity", "secondary", "label", "Annuler", 3, "click", "text"], ["pButton", "", "label", "Enregistrer", "icon", "pi pi-check", 3, "click", "loading"]], template: function CommandeVenteDetail_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275conditionalCreate(1, CommandeVenteDetail_Conditional_1_Template, 14, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, CommandeVenteDetail_Conditional_2_Template, 91, 26, "div", 1);
      \u0275\u0275elementStart(3, "p-dialog", 2);
      \u0275\u0275twoWayListener("visibleChange", function CommandeVenteDetail_Template_p_dialog_visibleChange_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.encaissementDialogVisible, $event) || (ctx.encaissementDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(4, CommandeVenteDetail_Conditional_4_Template, 11, 2, "div", 3);
      \u0275\u0275elementStart(5, "form", 4)(6, "div", 5)(7, "label", 6);
      \u0275\u0275text(8, "Montant *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "p-inputNumber", 7);
      \u0275\u0275conditionalCreate(10, CommandeVenteDetail_Conditional_10_Template, 2, 0, "small", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5)(12, "label", 6);
      \u0275\u0275text(13, "Mode de paiement *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "p-select", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 5)(16, "label", 6);
      \u0275\u0275text(17, "Date *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-datepicker", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 5)(20, "label", 6);
      \u0275\u0275text(21, "Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, CommandeVenteDetail_ng_template_23_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.commande ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.encaissementDialogVisible);
      \u0275\u0275property("modal", true)("dismissableMask", true);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.commande == null ? null : ctx.commande.facture) ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.encaissementForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("min", 1)("useGrouping", true)("ngClass", \u0275\u0275pureFunction1(17, _c1, ctx.isEncaissInvalid("montant")));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEncaissInvalid("montant") ? 10 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.modePaiementOptions);
      \u0275\u0275advance(4);
      \u0275\u0275property("showIcon", true)("readonlyInput", true);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    ButtonModule,
    ButtonDirective,
    ButtonLabel,
    ButtonIcon,
    TagModule,
    SkeletonModule,
    Skeleton,
    ToastModule,
    Toast,
    TooltipModule,
    DialogModule,
    Dialog,
    InputNumberModule,
    InputNumber,
    SelectModule,
    Select,
    DatePickerModule,
    DatePicker,
    InputTextModule,
    InputText,
    PhoneFormatPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandeVenteDetail, [{
    type: Component,
    args: [{ selector: "app-commande-vente-detail", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      TagModule,
      SkeletonModule,
      ToastModule,
      TooltipModule,
      DialogModule,
      InputNumberModule,
      SelectModule,
      DatePickerModule,
      InputTextModule,
      PhoneFormatPipe
    ], providers: [MessageService], template: `<p-toast />

<!-- \u2550\u2550 SKELETON \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (loading) {
    <div class="bg-surface-0 dark:bg-surface-900 p-12 md:p-20">
        <div class="flex items-center gap-3 mb-8">
            <p-skeleton shape="circle" size="2.5rem" />
            <div>
                <p-skeleton width="12rem" height="1.5rem" styleClass="mb-1" />
                <p-skeleton width="8rem" height="1rem" />
            </div>
        </div>
        <div class="border border-surface-200 dark:border-surface-700 rounded-lg p-6 flex gap-6">
            <p-skeleton shape="circle" size="3rem" />
            <div class="flex-1 flex flex-col gap-3">
                <p-skeleton width="10rem" height="1.25rem" />
                <p-skeleton width="7rem" height="1rem" />
            </div>
            <p-skeleton width="6rem" height="1.5rem" />
            <p-skeleton width="8rem" height="1.5rem" />
            <p-skeleton width="5rem" height="1.5rem" />
        </div>
    </div>
}

<!-- \u2550\u2550 CONTENU \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (!loading && commande) {
    <div class="bg-surface-0 dark:bg-surface-900 p-12 md:p-20">

        <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="flex flex-col lg:flex-row md:justify-between items-start lg:items-end gap-4 mb-8">
            <div class="flex items-start gap-3 flex-1">
                <button pButton [text]="true" [rounded]="true" class="w-10 h-10 flex-shrink-0" (click)="goBack()">
                    <i pButtonIcon class="pi pi-arrow-left"></i>
                </button>
                <div class="flex flex-col gap-1">
                    <h1 class="text-surface-900 dark:text-surface-0 text-2xl font-semibold leading-tight">Commande Vente</h1>
                    <p class="text-surface-500 dark:text-surface-400 text-base leading-tight">
                        Total = {{ formatMontant(commande.total_commande) }} &nbsp;|&nbsp;
                        Encaiss\xE9 = {{ formatMontant(commande.facture?.montant_encaisse) }} &nbsp;|&nbsp;
                        Restant = {{ formatMontant(commande.facture?.montant_restant) }}
                    </p>
                </div>
            </div>

            @if (canEncaisserFacture) {
                <div>
                    <button pButton severity="primary" (click)="openEncaissementDialog()">
                        <i pButtonIcon class="pi pi-plus"></i>
                        <span pButtonLabel>Encaisser</span>
                    </button>
                </div>
            }
        </div>

        <!-- \u2500\u2500 Carte commande \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div class="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden transition-all duration-300">

            <!-- Row r\xE9sum\xE9 -->
            <div class="p-6 flex flex-col lg:flex-row justify-start lg:items-center gap-6">

                <!-- V\xE9hicule + r\xE9f\xE9rence -->
                <div class="flex items-center gap-4 flex-1">
                    @if (commande.vehicule?.photo_url) {
                        <img class="w-12 h-12 rounded object-cover flex-shrink-0" [src]="commande.vehicule!.photo_url" [alt]="commande.vehicule!.nom_vehicule" />
                    } @else {
                        <div class="w-12 h-12 rounded bg-surface-100 dark:bg-surface-800 flex items-center justify-center flex-shrink-0">
                            <i class="pi pi-car text-surface-400 text-xl"></i>
                        </div>
                    }
                    <div class="flex flex-col gap-1">
                        <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">{{ commande.reference }}</div>
                        <div class="text-surface-500 dark:text-surface-400 text-base leading-tight">{{ commande.vehicule?.nom_vehicule ?? '\u2014' }}</div>
                    </div>
                </div>

                <!-- R\xE9f facture, date, statut, montant -->
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-1">

                    <!-- R\xE9f facture -->
                    <div class="flex flex-col items-start sm:items-center flex-1 min-w-0">
                        <div class="px-2 py-1 bg-surface-100 dark:bg-surface-800 rounded-md">
                            <span class="text-surface-600 dark:text-surface-300 text-sm font-bold font-mono">
                                {{ commande.facture?.reference ?? '\u2014' }}
                            </span>
                        </div>
                    </div>

                    <!-- Date -->
                    <div class="flex flex-col items-start sm:items-center flex-1">
                        <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">{{ formatDate(commande.created_at) }}</span>
                    </div>

                    <!-- Statut -->
                    <div class="flex flex-col items-start sm:items-center flex-1 min-w-0">
                        @if (commande.facture) {
                            <div
                                [ngClass]="{
                                    'px-2 py-1 rounded-md flex items-center gap-1': true,
                                    'bg-surface-100 dark:bg-surface-800': getStatutColor(commande.facture.statut_facture) === 'surface',
                                    'bg-orange-100 dark:bg-orange-900': getStatutColor(commande.facture.statut_facture) === 'orange',
                                    'bg-green-100 dark:bg-green-900': getStatutColor(commande.facture.statut_facture) === 'green',
                                    'bg-red-100 dark:bg-red-900': getStatutColor(commande.facture.statut_facture) === 'red'
                                }"
                            >
                                <i
                                    [class]="
                                        'text-xs pi ' +
                                        getStatutIcon(commande.facture.statut_facture) + ' ' +
                                        (getStatutColor(commande.facture.statut_facture) === 'surface'
                                            ? 'text-surface-600 dark:text-surface-300'
                                            : getStatutColor(commande.facture.statut_facture) === 'orange'
                                              ? 'text-orange-700 dark:text-orange-300'
                                              : getStatutColor(commande.facture.statut_facture) === 'green'
                                                ? 'text-green-700 dark:text-green-300'
                                                : 'text-red-700 dark:text-red-300')
                                    "
                                ></i>
                                <span
                                    [ngClass]="{
                                        'text-sm font-bold': true,
                                        'text-surface-600 dark:text-surface-300': getStatutColor(commande.facture.statut_facture) === 'surface',
                                        'text-orange-700 dark:text-orange-300': getStatutColor(commande.facture.statut_facture) === 'orange',
                                        'text-green-700 dark:text-green-300': getStatutColor(commande.facture.statut_facture) === 'green',
                                        'text-red-700 dark:text-red-300': getStatutColor(commande.facture.statut_facture) === 'red'
                                    }"
                                >{{ getStatutLabel(commande.facture.statut_facture) }}</span>
                            </div>
                        } @else {
                            <span class="text-surface-400 dark:text-surface-500 text-sm">\u2014</span>
                        }
                    </div>

                    <!-- Montant total -->
                    <div class="flex flex-col items-start sm:items-center flex-1">
                        <span class="text-surface-700 dark:text-surface-300 text-base font-semibold leading-tight">{{ formatMontant(commande.total_commande) }}</span>
                    </div>

                </div>
            </div>

            <!-- \u2500\u2500 D\xE9tail \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
            <div class="overflow-hidden">
                <div class="flex flex-col gap-6 p-6 border-t border-surface-200 dark:border-surface-700">

                    <!-- D\xE9tail commande + V\xE9hicule -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <!-- D\xE9tail de la commande -->
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">D\xE9tail de la commande</h3>
                            </div>
                            <div class="p-6 flex flex-col gap-5">
                                <div class="flex gap-2">
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Total commande</span>
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(commande.total_commande) }}</span>
                                </div>
                                <div class="flex gap-2">
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Encaiss\xE9</span>
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(commande.facture?.montant_encaisse) }}</span>
                                </div>
                                <div class="flex gap-2">
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Restant</span>
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(commande.facture?.montant_restant) }}</span>
                                </div>
                                <div class="flex gap-2">
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Date de cr\xE9ation</span>
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatDate(commande.created_at) }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- V\xE9hicule -->
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">V\xE9hicules</h3>
                            </div>
                            <div class="p-6 flex flex-col gap-5">
                                <div class="flex gap-2">
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Nom du v\xE9hicule</span>
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ commande.vehicule?.nom_vehicule ?? '\u2014' }}</span>
                                </div>
                                <div class="flex gap-2">
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Immatriculation</span>
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium font-mono leading-tight">{{ commande.vehicule?.immatriculation ?? '\u2014' }}</span>
                                </div>
                                @let prop = commande.vehicule?.proprietaire;
                                @if (prop) {
                                    <div class="flex gap-2">
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Propri\xE9taire</span>
                                        <div class="flex-1">
                                            <div class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ prop.prenom }} {{ prop.nom }}</div>
                                            @if (prop.phone) {
                                                <div class="text-surface-500 dark:text-surface-400 text-sm mt-0.5">{{ prop.phone | phoneFormat }}</div>
                                            }
                                        </div>
                                    </div>
                                }
                                @let lv = commande.vehicule?.livreurPrincipal ?? commande.vehicule?.livreur_principal;
                                @if (lv) {
                                    <div class="flex gap-2">
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Livreur principal</span>
                                        <div class="flex-1">
                                            <div class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ lv.prenom }} {{ lv.nom }}</div>
                                            @if (lv.phone) {
                                                <div class="text-surface-500 dark:text-surface-400 text-sm mt-0.5">{{ lv.phone | phoneFormat }}</div>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    <!-- Produits -->
                    @if (commande.lignes && commande.lignes.length > 0) {
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Produits</h3>
                            </div>
                            <div class="p-6 flex flex-col gap-4">
                                @for (ligne of commande.lignes; track ligne.id) {
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center gap-3">
                                            <div class="w-9 h-9 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center flex-shrink-0">
                                                <i class="pi pi-box text-sm text-surface-500 dark:text-surface-400"></i>
                                            </div>
                                            <div>
                                                <div class="text-surface-700 dark:text-surface-300 text-base font-medium leading-tight">{{ ligne.produit?.nom ?? '\u2014' }}</div>
                                                <div class="text-surface-400 dark:text-surface-500 text-sm mt-0.5">Qt\xE9 : {{ ligne.qte }}</div>
                                            </div>
                                        </div>
                                        <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(ligne.total_ligne) }}</span>
                                    </div>
                                }
                                <div class="h-px bg-surface-200 dark:bg-surface-700"></div>
                                <div class="flex justify-between items-center">
                                    <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">Total</span>
                                    <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(commande.total_commande) }}</span>
                                </div>
                            </div>
                        </div>
                    }

                    <!-- Encaissements -->
                    <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                        <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 flex justify-between items-center">
                            <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Encaissements</h3>
                            @if (canEncaisserFacture) {
                                <button pButton [text]="true" [rounded]="true" severity="primary" class="h-9" (click)="openEncaissementDialog()">
                                    <i pButtonIcon class="pi pi-plus"></i>
                                    <span pButtonLabel>Encaisser</span>
                                </button>
                            }
                        </div>
                        <div class="p-6 flex flex-col gap-5">
                            @if (commande.facture?.encaissements && commande.facture!.encaissements!.length > 0) {
                                <div class="flex flex-col gap-4">
                                    @for (enc of commande.facture!.encaissements!; track enc.id) {
                                        <div class="flex justify-between items-center">
                                            <div class="flex items-center gap-2">
                                                <i [class]="'pi ' + getModeIcon(enc.mode_paiement) + ' text-surface-400'"></i>
                                                <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">{{ getModeLabel(enc.mode_paiement) }}</span>
                                                <span class="text-surface-400 dark:text-surface-500 text-sm">\xB7 {{ formatDate(enc.date_encaissement) }}</span>
                                            </div>
                                            <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(enc.montant) }}</span>
                                        </div>
                                    }
                                    <div class="h-px bg-surface-200 dark:bg-surface-700"></div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">Total</span>
                                        <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(commande.facture?.montant_encaisse) }}</span>
                                    </div>
                                </div>
                            } @else {
                                <div class="text-center py-6 text-surface-400 dark:text-surface-500">
                                    <i class="pi pi-inbox text-3xl mb-2 block"></i>
                                    Aucun encaissement enregistr\xE9
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
}

<!-- \u2550\u2550 DIALOG ENCAISSEMENT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<p-dialog
    [(visible)]="encaissementDialogVisible"
    [modal]="true"
    header="Ajouter un encaissement"
    [style]="{ width: '26rem' }"
    [dismissableMask]="true"
>
    @if (commande?.facture) {
        <div class="mb-4 bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg p-4 flex flex-col gap-2">
            <div class="flex justify-between items-center text-sm">
                <span class="text-surface-500">Facture</span>
                <span class="font-mono font-semibold text-surface-700 dark:text-surface-300 text-xs">{{ commande!.facture!.reference }}</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-sm text-surface-500">Restant d\xFB</span>
                <span class="font-bold text-orange-600 text-base">{{ formatMontant(commande!.facture!.montant_restant) }}</span>
            </div>
        </div>
    }

    <form [formGroup]="encaissementForm" class="flex flex-col gap-5 pt-2">
        <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Montant *</label>
            <p-inputNumber
                formControlName="montant"
                [min]="1"
                suffix=" GNF"
                [useGrouping]="true"
                styleClass="w-full"
                [ngClass]="{'ng-invalid ng-dirty': isEncaissInvalid('montant')}"
            ></p-inputNumber>
            @if (isEncaissInvalid('montant')) {
                <small class="text-red-500">Montant obligatoire</small>
            }
        </div>

        <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Mode de paiement *</label>
            <p-select
                formControlName="mode_paiement"
                [options]="modePaiementOptions"
                optionLabel="label"
                optionValue="value"
                styleClass="w-full"
                appendTo="body"
            ></p-select>
        </div>

        <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Date *</label>
            <p-datepicker
                formControlName="date_encaissement"
                dateFormat="dd/mm/yy"
                [showIcon]="true"
                styleClass="w-full"
                appendTo="body"
                [readonlyInput]="true"
            ></p-datepicker>
        </div>

        <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Note</label>
            <input pInputText formControlName="note" placeholder="Optionnel" class="w-full" />
        </div>
    </form>

    <ng-template #footer>
        <button pButton severity="secondary" [text]="true" label="Annuler" (click)="encaissementDialogVisible = false"></button>
        <button pButton label="Enregistrer" icon="pi pi-check" (click)="onSaveEncaissement()" [loading]="savingEncaissement"></button>
    </ng-template>
</p-dialog>
` }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FormBuilder }, { type: CommandeVenteService }, { type: FactureLivraisonService }, { type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommandeVenteDetail, { className: "CommandeVenteDetail", filePath: "src/app/pages/ventes/commande-vente-detail/commande-vente-detail.ts", lineNumber: 51 });
})();
export {
  CommandeVenteDetail
};
//# sourceMappingURL=chunk-5HPMX3QK.js.map
