import {
  FactureLivraisonService
} from "./chunk-UC7NNZHT.js";
import {
  MODE_PAIEMENT_OPTIONS,
  STATUT_FACTURE_LABELS
} from "./chunk-VF5NWIYJ.js";
import {
  StyleClassModule
} from "./chunk-KOFBRCUJ.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-MKX7CTMT.js";
import {
  PhoneFormatPipe
} from "./chunk-F5DZ3BGT.js";
import {
  Dialog,
  DialogModule
} from "./chunk-DQ4T5ATO.js";
import {
  AuthService
} from "./chunk-A74EIJKM.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import "./chunk-2BDEB7LG.js";
import {
  Toast,
  ToastModule
} from "./chunk-AYC4YOKB.js";
import "./chunk-5T35AX3S.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-EZGYU3RQ.js";
import "./chunk-GHZLKCNE.js";
import "./chunk-IEELAHW7.js";
import "./chunk-EAAVSGUN.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import "./chunk-7GQXFRTV.js";
import "./chunk-CSVYKJ4F.js";
import "./chunk-K7KGEHY2.js";
import {
  Select,
  SelectModule
} from "./chunk-HMZDW5SQ.js";
import "./chunk-VSFYXY5S.js";
import "./chunk-ADI47BO7.js";
import "./chunk-2ASVPUFF.js";
import "./chunk-GNGM6ZBM.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VA6E3YEN.js";
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
} from "./chunk-LK4MJDWN.js";
import "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import {
  ButtonDirective,
  ButtonIcon,
  ButtonLabel,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import "./chunk-IRKOPIT4.js";
import "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import {
  MessageService
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule,
  NgClass
} from "./chunk-TGBATRWC.js";
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
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/facture-vente-detail2/facture-vente-detail2.ts
var _c0 = () => ({ width: "26rem" });
var _c1 = (a0, a1, a2, a3) => ({ "px-2 py-1 rounded-md flex items-center gap-1": true, "bg-surface-100 dark:bg-surface-800": a0, "bg-orange-100 dark:bg-orange-900": a1, "bg-green-100 dark:bg-green-900": a2, "bg-red-100 dark:bg-red-900": a3 });
var _c2 = (a0, a1, a2, a3) => ({ "text-sm font-bold": true, "text-surface-600 dark:text-surface-300": a0, "text-orange-700 dark:text-orange-300": a1, "text-green-700 dark:text-green-300": a2, "text-red-700 dark:text-red-300": a3 });
var _forTrack0 = ($index, $item) => $item.id;
function FactureVenteDetail2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 11);
    \u0275\u0275element(2, "p-skeleton", 12)(3, "p-skeleton", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275element(5, "p-skeleton", 15);
    \u0275\u0275elementStart(6, "div", 16);
    \u0275\u0275element(7, "p-skeleton", 17)(8, "p-skeleton", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-skeleton", 19)(10, "p-skeleton", 20)(11, "p-skeleton", 21);
    \u0275\u0275elementEnd()();
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 57);
    \u0275\u0275listener("click", function FactureVenteDetail2_Conditional_2_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEncaissementDialog());
    });
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4, "Encaisser");
    \u0275\u0275elementEnd()()();
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.facture.vehicule.photo_url, \u0275\u0275sanitizeUrl)("alt", ctx_r2.facture.vehicule.nom_vehicule);
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementEnd();
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_81_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const prop_r5 = \u0275\u0275readContextLet(80);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, prop_r5.phone));
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2, "Propri\xE9taire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "div", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, FactureVenteDetail2_Conditional_2_Conditional_81_Conditional_6_Template, 3, 3, "div", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const prop_r5 = \u0275\u0275readContextLet(80);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", prop_r5.prenom, " ", prop_r5.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(prop_r5.phone ? 6 : -1);
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_83_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const lv_r6 = \u0275\u0275readContextLet(82);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, lv_r6.phone));
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2, "Livreur principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "div", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, FactureVenteDetail2_Conditional_2_Conditional_83_Conditional_6_Template, 3, 3, "div", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const lv_r6 = \u0275\u0275readContextLet(82);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", lv_r6.prenom, " ", lv_r6.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(lv_r6.phone ? 6 : -1);
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function FactureVenteDetail2_Conditional_2_Conditional_88_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEncaissementDialog());
    });
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275elementStart(2, "span", 59);
    \u0275\u0275text(3, "Encaisser");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_90_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 67);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 62);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const enc_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("pi " + ctx_r2.getModePaiementIcon(enc_r8.mode_paiement) + " text-surface-400");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getModePaiementLabel(enc_r8.mode_paiement));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r2.formatDate(enc_r8.date_encaissement));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(enc_r8.montant));
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275repeaterCreate(1, FactureVenteDetail2_Conditional_2_Conditional_90_For_2_Template, 9, 5, "div", 65, _forTrack0);
    \u0275\u0275element(3, "div", 66);
    \u0275\u0275elementStart(4, "div", 65)(5, "span", 39);
    \u0275\u0275text(6, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 62);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.facture.encaissements);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.facture.montant_encaisse));
  }
}
function FactureVenteDetail2_Conditional_2_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2, " Aucun encaissement enregistr\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteDetail2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 22)(2, "div", 23)(3, "button", 24);
    \u0275\u0275listener("click", function FactureVenteDetail2_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275element(4, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "h1", 26);
    \u0275\u0275text(7, "Facture Vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, FactureVenteDetail2_Conditional_2_Conditional_10_Template, 5, 0, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 28)(12, "div", 29)(13, "div", 30);
    \u0275\u0275conditionalCreate(14, FactureVenteDetail2_Conditional_2_Conditional_14_Template, 1, 2, "img", 31)(15, FactureVenteDetail2_Conditional_2_Conditional_15_Template, 2, 0, "div", 32);
    \u0275\u0275elementStart(16, "div", 4)(17, "div", 33);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 27);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 34)(22, "div", 35)(23, "div", 36)(24, "span", 37);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 38)(27, "span", 39);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 35)(30, "div", 40);
    \u0275\u0275element(31, "i");
    \u0275\u0275elementStart(32, "span", 40);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 38)(35, "span", 41);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 42)(38, "div", 43)(39, "div", 44)(40, "div", 45)(41, "div", 46)(42, "h3", 47);
    \u0275\u0275text(43, "D\xE9taille de la facture");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 48)(45, "div", 49)(46, "span", 50);
    \u0275\u0275text(47, "Montant brut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 51);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 49)(51, "span", 50);
    \u0275\u0275text(52, "Encaiss\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 51);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 49)(56, "span", 50);
    \u0275\u0275text(57, "Restant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 51);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 49)(61, "span", 50);
    \u0275\u0275text(62, "Date de cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 51);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "div", 45)(66, "div", 46)(67, "h3", 47);
    \u0275\u0275text(68, "V\xE9hicules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 48)(70, "div", 49)(71, "span", 50);
    \u0275\u0275text(72, "Nom du v\xE9hicule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 51);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 49)(76, "span", 50);
    \u0275\u0275text(77, "Immatriculation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 52);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(80);
    \u0275\u0275conditionalCreate(81, FactureVenteDetail2_Conditional_2_Conditional_81_Template, 7, 3, "div", 49);
    \u0275\u0275declareLet(82);
    \u0275\u0275conditionalCreate(83, FactureVenteDetail2_Conditional_2_Conditional_83_Template, 7, 3, "div", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 45)(85, "div", 53)(86, "h3", 47);
    \u0275\u0275text(87, "Encaissements");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(88, FactureVenteDetail2_Conditional_2_Conditional_88_Template, 4, 2, "button", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 48);
    \u0275\u0275conditionalCreate(90, FactureVenteDetail2_Conditional_2_Conditional_90_Template, 9, 1, "div", 55)(91, FactureVenteDetail2_Conditional_2_Conditional_91_Template, 3, 0, "div", 56);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" Total = ", ctx_r2.formatMontant(ctx_r2.facture.montant_brut), " \xA0|\xA0 Encaiss\xE9 = ", ctx_r2.formatMontant(ctx_r2.facture.montant_encaisse), " \xA0|\xA0 Restant = ", ctx_r2.formatMontant(ctx_r2.facture.montant_restant), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canAddEncaissement ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r2.facture.vehicule == null ? null : ctx_r2.facture.vehicule.photo_url) ? 14 : 15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.facture.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.facture.vehicule == null ? null : ctx_r2.facture.vehicule.nom_vehicule) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", ctx_r2.facture.commande_vente_id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.facture.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(29, _c1, ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "surface", ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "orange", ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "green", ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "red"));
    \u0275\u0275advance();
    \u0275\u0275classMap("text-xs pi " + ctx_r2.getStatutIcon(ctx_r2.facture.statut_facture) + " " + (ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "surface" ? "text-surface-600 dark:text-surface-300" : ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "orange" ? "text-orange-700 dark:text-orange-300" : ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "green" ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(34, _c2, ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "surface", ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "orange", ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "green", ctx_r2.getStatutColor(ctx_r2.facture.statut_facture) === "red"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStatutLabel(ctx_r2.facture.statut_facture));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.facture.montant_brut));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.facture.montant_brut));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.facture.montant_encaisse));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.facture.montant_restant));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.facture.created_at));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((ctx_r2.facture.vehicule == null ? null : ctx_r2.facture.vehicule.nom_vehicule) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r2.facture.vehicule == null ? null : ctx_r2.facture.vehicule.immatriculation) ?? "\u2014");
    \u0275\u0275advance();
    const prop_r9 = \u0275\u0275storeLet(ctx_r2.facture.vehicule == null ? null : ctx_r2.facture.vehicule.proprietaire);
    \u0275\u0275advance();
    \u0275\u0275conditional(prop_r9 ? 81 : -1);
    \u0275\u0275advance();
    const lv_r10 = \u0275\u0275storeLet((ctx_r2.facture.vehicule == null ? null : ctx_r2.facture.vehicule.livreurPrincipal) ?? (ctx_r2.facture.vehicule == null ? null : ctx_r2.facture.vehicule.livreur_principal));
    \u0275\u0275advance();
    \u0275\u0275conditional(lv_r10 ? 83 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.canAddEncaissement ? 88 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.facture.encaissements && ctx_r2.facture.encaissements.length > 0 ? 90 : 91);
  }
}
function FactureVenteDetail2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1, "Montant obligatoire");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteDetail2_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function FactureVenteDetail2_ng_template_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.encaissementDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 71);
    \u0275\u0275listener("click", function FactureVenteDetail2_ng_template_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSaveEncaissement());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.encaissementSaving);
  }
}
var FactureVenteDetail2 = class _FactureVenteDetail2 {
  fb;
  route;
  router;
  factureService;
  authService;
  messageService;
  facture = null;
  loading = false;
  encaissementSaving = false;
  encaissementDialogVisible = false;
  encaissementForm;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;
  get canEncaissement() {
    return this.authService.hasPermission("encaissements.create");
  }
  chevronRotated = false;
  constructor(fb, route, router, factureService, authService, messageService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.factureService = factureService;
    this.authService = authService;
    this.messageService = messageService;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.router.navigate(["/notfound"]);
      return;
    }
    this.initForm();
    this.loadFacture(id);
  }
  initForm() {
    this.encaissementForm = this.fb.group({
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ["especes", Validators.required],
      date_encaissement: [/* @__PURE__ */ new Date(), Validators.required],
      note: [""]
    });
  }
  loadFacture(id) {
    this.loading = true;
    this.factureService.getFacture(id).subscribe({
      next: (resp) => {
        this.facture = resp.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({ severity: "error", summary: "Erreur", detail: "Impossible de charger la facture.", life: 4e3 });
        setTimeout(() => this.router.navigate(["/ventes/factures"]), 2500);
      }
    });
  }
  toggleChevron() {
    this.chevronRotated = !this.chevronRotated;
  }
  openEncaissementDialog() {
    this.encaissementForm = this.fb.group({
      montant: [this.facture?.montant_restant || null, [Validators.required, Validators.min(1)]],
      mode_paiement: ["especes", Validators.required],
      date_encaissement: [/* @__PURE__ */ new Date(), Validators.required],
      note: [""]
    });
    this.encaissementDialogVisible = true;
  }
  onSaveEncaissement() {
    this.encaissementForm.markAllAsTouched();
    if (this.encaissementForm.invalid || !this.facture || this.encaissementSaving)
      return;
    const v = this.encaissementForm.value;
    const dto = {
      facture_vente_id: this.facture.id,
      montant: v.montant,
      mode_paiement: v.mode_paiement,
      date_encaissement: this.formatDateIso(v.date_encaissement),
      note: v.note || void 0
    };
    this.encaissementSaving = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.encaissementSaving = false;
        this.encaissementDialogVisible = false;
        this.messageService.add({ severity: "success", summary: "Succ\xE8s", detail: "Encaissement enregistr\xE9.", life: 3e3 });
        this.loadFacture(this.facture.id);
      },
      error: (err) => {
        this.encaissementSaving = false;
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err.error?.message || "Erreur lors de l'enregistrement.",
          life: 5e3
        });
      }
    });
  }
  goBack() {
    this.router.navigate(["/ventes/factures"]);
  }
  get canAddEncaissement() {
    return this.canEncaissement && !!this.facture && this.facture.statut_facture !== "payee" && this.facture.statut_facture !== "annulee";
  }
  isEncaissementInvalid(name) {
    const c = this.encaissementForm.get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  // ── Statut helpers ────────────────────────────────────────────────────
  getStatutLabel(s) {
    return STATUT_FACTURE_LABELS[s] ?? s;
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
  // ── Mode paiement helpers ─────────────────────────────────────────────
  getModePaiementLabel(mode) {
    return MODE_PAIEMENT_OPTIONS.find((o) => o.value === mode)?.label ?? mode;
  }
  getModePaiementIcon(mode) {
    const map = {
      especes: "pi-money-bill",
      mobile_money: "pi-mobile",
      virement: "pi-building",
      cheque: "pi-file"
    };
    return map[mode] ?? "pi-credit-card";
  }
  // ── Formatage ─────────────────────────────────────────────────────────
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
  formatDateIso(d) {
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toISOString().split("T")[0];
  }
  static \u0275fac = function FactureVenteDetail2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FactureVenteDetail2)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FactureLivraisonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FactureVenteDetail2, selectors: [["app-facture-vente-detail2"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 24, vars: 16, consts: [["footer", ""], [1, "bg-surface-0", "dark:bg-surface-900", "p-12", "md:p-20"], ["header", "Ajouter un encaissement", 3, "visibleChange", "visible", "modal", "dismissableMask"], [1, "flex", "flex-col", "gap-5", "pt-2", 3, "formGroup"], [1, "flex", "flex-col", "gap-1"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], ["formControlName", "montant", "suffix", " GNF", "locale", "fr-FR", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "min", "max", "useGrouping"], [1, "text-red-500"], ["formControlName", "mode_paiement", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", "appendTo", "body", 3, "options"], ["formControlName", "date_encaissement", "dateFormat", "dd/mm/yy", "styleClass", "w-full", "appendTo", "body", 3, "showIcon", "readonlyInput"], ["pInputText", "", "formControlName", "note", "placeholder", "Optionnel", 1, "w-full"], [1, "flex", "flex-col", "gap-2", "mb-8"], ["width", "12rem", "height", "1.75rem"], ["width", "22rem", "height", "1.25rem"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "p-6", "flex", "gap-6"], ["shape", "circle", "size", "3rem"], [1, "flex-1", "flex", "flex-col", "gap-3"], ["width", "10rem", "height", "1.25rem"], ["width", "7rem", "height", "1rem"], ["width", "6rem", "height", "1.5rem"], ["width", "8rem", "height", "1.5rem"], ["width", "5rem", "height", "1.5rem"], [1, "flex", "flex-col", "lg:flex-row", "md:justify-between", "items-start", "lg:items-end", "gap-4", "mb-8"], [1, "flex", "items-start", "gap-3", "flex-1"], ["pButton", "", 1, "w-10", "h-10", "flex-shrink-0", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-arrow-left"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "font-semibold", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-base", "leading-tight"], [1, "bg-surface-0", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden", "transition-all", "duration-300"], [1, "p-6", "flex", "flex-col", "lg:flex-row", "justify-start", "lg:items-center", "gap-6"], [1, "flex", "items-center", "gap-4", "flex-1"], [1, "w-12", "h-12", "rounded", "object-cover", "flex-shrink-0", 3, "src", "alt"], [1, "w-12", "h-12", "rounded", "bg-surface-100", "dark:bg-surface-800", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "text-surface-900", "dark:text-surface-0", "text-lg", "font-medium", "leading-tight"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "gap-3", "sm:gap-4", "flex-1"], [1, "flex", "flex-col", "items-start", "sm:items-center", "flex-1", "min-w-0"], [1, "px-2", "py-1", "bg-surface-100", "dark:bg-surface-800", "rounded-md"], [1, "text-surface-600", "dark:text-surface-300", "text-sm", "font-bold"], [1, "flex", "flex-col", "items-start", "sm:items-center", "flex-1"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "leading-tight"], [3, "ngClass"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "font-semibold", "leading-tight"], [1, "overflow-hidden"], [1, "flex", "flex-col", "gap-6", "p-6", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden"], [1, "p-4", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold", "leading-tight"], [1, "p-6", "flex", "flex-col", "gap-5"], [1, "flex", "gap-2"], [1, "w-40", "text-surface-700", "dark:text-surface-300", "text-base", "leading-tight"], [1, "flex-1", "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "flex-1", "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "font-mono", "leading-tight"], [1, "p-4", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700", "flex", "justify-between", "items-center"], ["pButton", "", "severity", "primary", 1, "h-9", 3, "text", "rounded"], [1, "flex", "flex-col", "gap-4"], [1, "text-center", "py-6", "text-surface-400", "dark:text-surface-500"], ["pButton", "", "severity", "primary", 3, "click"], ["pButtonIcon", "", 1, "pi", "pi-plus"], ["pButtonLabel", ""], [1, "pi", "pi-car", "text-surface-400", "text-xl"], [1, "flex-1"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "mt-0.5"], ["pButton", "", "severity", "primary", 1, "h-9", 3, "click", "text", "rounded"], [1, "flex", "justify-between", "items-center"], [1, "h-px", "bg-surface-200", "dark:bg-surface-700"], [1, "flex", "items-center", "gap-2"], [1, "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "pi", "pi-inbox", "text-3xl", "mb-2", "block"], ["pButton", "", "severity", "secondary", "label", "Annuler", 3, "click", "text"], ["pButton", "", "label", "Enregistrer", "icon", "pi pi-check", 3, "click", "loading"]], template: function FactureVenteDetail2_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275conditionalCreate(1, FactureVenteDetail2_Conditional_1_Template, 12, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, FactureVenteDetail2_Conditional_2_Template, 92, 39, "div", 1);
      \u0275\u0275elementStart(3, "p-dialog", 2);
      \u0275\u0275twoWayListener("visibleChange", function FactureVenteDetail2_Template_p_dialog_visibleChange_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.encaissementDialogVisible, $event) || (ctx.encaissementDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(4, "form", 3)(5, "div", 4)(6, "label", 5);
      \u0275\u0275text(7, "Montant *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "p-inputnumber", 6);
      \u0275\u0275conditionalCreate(9, FactureVenteDetail2_Conditional_9_Template, 2, 0, "small", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 4)(11, "label", 5);
      \u0275\u0275text(12, "Mode de paiement *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "p-select", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 4)(15, "label", 5);
      \u0275\u0275text(16, "Date *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "p-datepicker", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 4)(19, "label", 5);
      \u0275\u0275text(20, "Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, FactureVenteDetail2_ng_template_22_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.facture ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.encaissementDialogVisible);
      \u0275\u0275property("modal", true)("dismissableMask", true);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.encaissementForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("min", 1)("max", ctx.facture == null ? null : ctx.facture.montant_restant)("useGrouping", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEncaissementInvalid("montant") ? 9 : -1);
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
    ToastModule,
    Toast,
    DialogModule,
    Dialog,
    SelectModule,
    Select,
    SkeletonModule,
    Skeleton,
    InputNumberModule,
    InputNumber,
    DatePickerModule,
    DatePicker,
    InputTextModule,
    InputText,
    StyleClassModule,
    PhoneFormatPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FactureVenteDetail2, [{
    type: Component,
    args: [{ selector: "app-facture-vente-detail2", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      ToastModule,
      DialogModule,
      SelectModule,
      SkeletonModule,
      InputNumberModule,
      DatePickerModule,
      InputTextModule,
      StyleClassModule,
      PhoneFormatPipe
    ], providers: [MessageService], template: `<p-toast />\r
\r
<!-- \u2550\u2550 SKELETON \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
@if (loading) {\r
    <div class="bg-surface-0 dark:bg-surface-900 p-12 md:p-20">\r
        <div class="flex flex-col gap-2 mb-8">\r
            <p-skeleton width="12rem" height="1.75rem" />\r
            <p-skeleton width="22rem" height="1.25rem" />\r
        </div>\r
        <div class="border border-surface-200 dark:border-surface-700 rounded-lg p-6 flex gap-6">\r
            <p-skeleton shape="circle" size="3rem" />\r
            <div class="flex-1 flex flex-col gap-3">\r
                <p-skeleton width="10rem" height="1.25rem" />\r
                <p-skeleton width="7rem" height="1rem" />\r
            </div>\r
            <p-skeleton width="6rem" height="1.5rem" />\r
            <p-skeleton width="8rem" height="1.5rem" />\r
            <p-skeleton width="5rem" height="1.5rem" />\r
        </div>\r
    </div>\r
}\r
\r
<!-- \u2550\u2550 CONTENU \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
@if (!loading && facture) {\r
    <div class="bg-surface-0 dark:bg-surface-900 p-12 md:p-20">\r
\r
        <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="flex flex-col lg:flex-row md:justify-between items-start lg:items-end gap-4 mb-8">\r
            <div class="flex items-start gap-3 flex-1">\r
                <button pButton [text]="true" [rounded]="true" class="w-10 h-10 flex-shrink-0" (click)="goBack()">\r
                    <i pButtonIcon class="pi pi-arrow-left"></i>\r
                </button>\r
                <div class="flex flex-col gap-1">\r
                    <h1 class="text-surface-900 dark:text-surface-0 text-2xl font-semibold leading-tight">Facture Vente</h1>\r
                    <p class="text-surface-500 dark:text-surface-400 text-base leading-tight">\r
                        Total = {{ formatMontant(facture.montant_brut) }} &nbsp;|&nbsp;\r
                        Encaiss\xE9 = {{ formatMontant(facture.montant_encaisse) }} &nbsp;|&nbsp;\r
                        Restant = {{ formatMontant(facture.montant_restant) }}\r
                    </p>\r
                </div>\r
            </div>\r
\r
            @if (canAddEncaissement) {\r
                <div>\r
                    <button pButton severity="primary" (click)="openEncaissementDialog()">\r
                        <i pButtonIcon class="pi pi-plus"></i>\r
                        <span pButtonLabel>Encaisser</span>\r
                    </button>\r
                </div>\r
            }\r
        </div>\r
\r
        <!-- \u2500\u2500 Carte facture (expansible) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden transition-all duration-300">\r
\r
            <!-- Row r\xE9sum\xE9 -->\r
            <div class="p-6 flex flex-col lg:flex-row justify-start lg:items-center gap-6">\r
                <!-- V\xE9hicule + r\xE9f\xE9rence -->\r
                <div class="flex items-center gap-4 flex-1">\r
                    @if (facture.vehicule?.photo_url) {\r
                        <img class="w-12 h-12 rounded object-cover flex-shrink-0" [src]="facture.vehicule!.photo_url" [alt]="facture.vehicule!.nom_vehicule" />\r
                    } @else {\r
                        <div class="w-12 h-12 rounded bg-surface-100 dark:bg-surface-800 flex items-center justify-center flex-shrink-0">\r
                            <i class="pi pi-car text-surface-400 text-xl"></i>\r
                        </div>\r
                    }\r
                    <div class="flex flex-col gap-1">\r
                        <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">{{ facture.reference }}</div>\r
                        <div class="text-surface-500 dark:text-surface-400 text-base leading-tight">{{ facture.vehicule?.nom_vehicule ?? '\u2014' }}</div>\r
                    </div>\r
                </div>\r
\r
                <!-- N\xB0 commande, date, statut, montant, chevron -->\r
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-1">\r
\r
                    <!-- N\xB0 commande -->\r
                    <div class="flex flex-col items-start sm:items-center flex-1 min-w-0">\r
                        <div class="px-2 py-1 bg-surface-100 dark:bg-surface-800 rounded-md">\r
                            <span class="text-surface-600 dark:text-surface-300 text-sm font-bold">#{{ facture.commande_vente_id }}</span>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Date -->\r
                    <div class="flex flex-col items-start sm:items-center flex-1">\r
                        <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">{{ formatDate(facture.created_at) }}</span>\r
                    </div>\r
\r
                    <!-- Statut -->\r
                    <div class="flex flex-col items-start sm:items-center flex-1 min-w-0">\r
                        <div\r
                            [ngClass]="{\r
                                'px-2 py-1 rounded-md flex items-center gap-1': true,\r
                                'bg-surface-100 dark:bg-surface-800': getStatutColor(facture.statut_facture) === 'surface',\r
                                'bg-orange-100 dark:bg-orange-900': getStatutColor(facture.statut_facture) === 'orange',\r
                                'bg-green-100 dark:bg-green-900': getStatutColor(facture.statut_facture) === 'green',\r
                                'bg-red-100 dark:bg-red-900': getStatutColor(facture.statut_facture) === 'red'\r
                            }"\r
                        >\r
                            <i\r
                                [class]="\r
                                    'text-xs pi ' +\r
                                    getStatutIcon(facture.statut_facture) + ' ' +\r
                                    (getStatutColor(facture.statut_facture) === 'surface'\r
                                        ? 'text-surface-600 dark:text-surface-300'\r
                                        : getStatutColor(facture.statut_facture) === 'orange'\r
                                          ? 'text-orange-700 dark:text-orange-300'\r
                                          : getStatutColor(facture.statut_facture) === 'green'\r
                                            ? 'text-green-700 dark:text-green-300'\r
                                            : 'text-red-700 dark:text-red-300')\r
                                "\r
                            ></i>\r
                            <span\r
                                [ngClass]="{\r
                                    'text-sm font-bold': true,\r
                                    'text-surface-600 dark:text-surface-300': getStatutColor(facture.statut_facture) === 'surface',\r
                                    'text-orange-700 dark:text-orange-300': getStatutColor(facture.statut_facture) === 'orange',\r
                                    'text-green-700 dark:text-green-300': getStatutColor(facture.statut_facture) === 'green',\r
                                    'text-red-700 dark:text-red-300': getStatutColor(facture.statut_facture) === 'red'\r
                                }"\r
                            >{{ getStatutLabel(facture.statut_facture) }}</span>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Montant total -->\r
                    <div class="flex flex-col items-start sm:items-center flex-1">\r
                        <span class="text-surface-700 dark:text-surface-300 text-base font-semibold leading-tight">{{ formatMontant(facture.montant_brut) }}</span>\r
                    </div>\r
\r
                </div>\r
            </div>\r
\r
            <!-- \u2500\u2500 D\xE9tail \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
            <div class="overflow-hidden">\r
                <div class="flex flex-col gap-6 p-6 border-t border-surface-200 dark:border-surface-700">\r
\r
                    <!-- D\xE9taille facture + V\xE9hicule -->\r
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
\r
                        <!-- D\xE9taille de la facture -->\r
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">D\xE9taille de la facture</h3>\r
                            </div>\r
                            <div class="p-6 flex flex-col gap-5">\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Montant brut</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(facture.montant_brut) }}</span>\r
                                </div>\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Encaiss\xE9</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(facture.montant_encaisse) }}</span>\r
                                </div>\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Restant</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(facture.montant_restant) }}</span>\r
                                </div>\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Date de cr\xE9ation</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatDate(facture.created_at) }}</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <!-- V\xE9hicule -->\r
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">V\xE9hicules</h3>\r
                            </div>\r
                            <div class="p-6 flex flex-col gap-5">\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Nom du v\xE9hicule</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ facture.vehicule?.nom_vehicule ?? '\u2014' }}</span>\r
                                </div>\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Immatriculation</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium font-mono leading-tight">{{ facture.vehicule?.immatriculation ?? '\u2014' }}</span>\r
                                </div>\r
                                @let prop = facture.vehicule?.proprietaire;\r
                                @if (prop) {\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Propri\xE9taire</span>\r
                                        <div class="flex-1">\r
                                            <div class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ prop.prenom }} {{ prop.nom }}</div>\r
                                            @if (prop.phone) {\r
                                                <div class="text-surface-500 dark:text-surface-400 text-sm mt-0.5">{{ prop.phone | phoneFormat }}</div>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                }\r
                                @let lv = facture.vehicule?.livreurPrincipal ?? facture.vehicule?.livreur_principal;\r
                                @if (lv) {\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Livreur principal</span>\r
                                        <div class="flex-1">\r
                                            <div class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ lv.prenom }} {{ lv.nom }}</div>\r
                                            @if (lv.phone) {\r
                                                <div class="text-surface-500 dark:text-surface-400 text-sm mt-0.5">{{ lv.phone | phoneFormat }}</div>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                }\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Encaissements -->\r
                    <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                        <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 flex justify-between items-center">\r
                            <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Encaissements</h3>\r
                            @if (canAddEncaissement) {\r
                                <button pButton [text]="true" [rounded]="true" severity="primary" class="h-9" (click)="openEncaissementDialog()">\r
                                    <i pButtonIcon class="pi pi-plus"></i>\r
                                    <span pButtonLabel>Encaisser</span>\r
                                </button>\r
                            }\r
                        </div>\r
                        <div class="p-6 flex flex-col gap-5">\r
                            @if (facture.encaissements && facture.encaissements.length > 0) {\r
                                <div class="flex flex-col gap-4">\r
                                    @for (enc of facture.encaissements; track enc.id) {\r
                                        <div class="flex justify-between items-center">\r
                                            <div class="flex items-center gap-2">\r
                                                <i [class]="'pi ' + getModePaiementIcon(enc.mode_paiement) + ' text-surface-400'"></i>\r
                                                <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">{{ getModePaiementLabel(enc.mode_paiement) }}</span>\r
                                                <span class="text-surface-400 dark:text-surface-500 text-sm">\xB7 {{ formatDate(enc.date_encaissement) }}</span>\r
                                            </div>\r
                                            <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(enc.montant) }}</span>\r
                                        </div>\r
                                    }\r
                                    <div class="h-px bg-surface-200 dark:bg-surface-700"></div>\r
                                    <div class="flex justify-between items-center">\r
                                        <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">Total</span>\r
                                        <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(facture.montant_encaisse) }}</span>\r
                                    </div>\r
                                </div>\r
                            } @else {\r
                                <div class="text-center py-6 text-surface-400 dark:text-surface-500">\r
                                    <i class="pi pi-inbox text-3xl mb-2 block"></i>\r
                                    Aucun encaissement enregistr\xE9\r
                                </div>\r
                            }\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
\r
    </div>\r
}\r
\r
<!-- \u2550\u2550 DIALOG ENCAISSEMENT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<p-dialog\r
    [(visible)]="encaissementDialogVisible"\r
    [modal]="true"\r
    header="Ajouter un encaissement"\r
    [style]="{ width: '26rem' }"\r
    [dismissableMask]="true"\r
>\r
    <form [formGroup]="encaissementForm" class="flex flex-col gap-5 pt-2">\r
        <div class="flex flex-col gap-1">\r
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Montant *</label>\r
            <p-inputnumber\r
                formControlName="montant"\r
                [min]="1"\r
                [max]="facture?.montant_restant"\r
                suffix=" GNF"\r
                [useGrouping]="true"\r
                locale="fr-FR"\r
                styleClass="w-full"\r
                inputStyleClass="w-full"\r
            ></p-inputnumber>\r
            @if (isEncaissementInvalid('montant')) {\r
                <small class="text-red-500">Montant obligatoire</small>\r
            }\r
        </div>\r
\r
        <div class="flex flex-col gap-1">\r
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Mode de paiement *</label>\r
            <p-select\r
                formControlName="mode_paiement"\r
                [options]="modePaiementOptions"\r
                optionLabel="label"\r
                optionValue="value"\r
                styleClass="w-full"\r
                appendTo="body"\r
            ></p-select>\r
        </div>\r
\r
        <div class="flex flex-col gap-1">\r
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Date *</label>\r
            <p-datepicker\r
                formControlName="date_encaissement"\r
                dateFormat="dd/mm/yy"\r
                [showIcon]="true"\r
                styleClass="w-full"\r
                appendTo="body"\r
                [readonlyInput]="true"\r
            ></p-datepicker>\r
        </div>\r
\r
        <div class="flex flex-col gap-1">\r
            <label class="text-sm font-medium text-surface-700 dark:text-surface-300">Note</label>\r
            <input pInputText formControlName="note" placeholder="Optionnel" class="w-full" />\r
        </div>\r
    </form>\r
\r
    <ng-template #footer>\r
        <button pButton severity="secondary" [text]="true" label="Annuler" (click)="encaissementDialogVisible = false"></button>\r
        <button pButton label="Enregistrer" icon="pi pi-check" (click)="onSaveEncaissement()" [loading]="encaissementSaving"></button>\r
    </ng-template>\r
</p-dialog>\r
` }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: FactureLivraisonService }, { type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FactureVenteDetail2, { className: "FactureVenteDetail2", filePath: "src/app/pages/ventes/facture-vente-detail2/facture-vente-detail2.ts", lineNumber: 49 });
})();
export {
  FactureVenteDetail2
};
//# sourceMappingURL=chunk-4M4THVO7.js.map
