import {
  CommandeVenteService
} from "./chunk-YRX5SGBT.js";
import {
  STATUT_FACTURE_LABELS
} from "./chunk-VF5NWIYJ.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-MKX7CTMT.js";
import {
  PhoneFormatPipe
} from "./chunk-F5DZ3BGT.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import {
  Toast,
  ToastModule
} from "./chunk-AYC4YOKB.js";
import "./chunk-5T35AX3S.js";
import "./chunk-CSVYKJ4F.js";
import "./chunk-K7KGEHY2.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import {
  ButtonDirective,
  ButtonIcon,
  ButtonLabel,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
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
  ɵɵpureFunction4,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/commande-vente-detail/commande-vente-detail.ts
var _c0 = (a0, a1, a2, a3) => ({ "px-2 py-1 rounded-md flex items-center gap-1": true, "bg-surface-100 dark:bg-surface-800": a0, "bg-orange-100 dark:bg-orange-900": a1, "bg-green-100 dark:bg-green-900": a2, "bg-red-100 dark:bg-red-900": a3 });
var _c1 = (a0, a1, a2, a3) => ({ "text-sm font-bold": true, "text-surface-600 dark:text-surface-300": a0, "text-orange-700 dark:text-orange-300": a1, "text-green-700 dark:text-green-300": a2, "text-red-700 dark:text-red-300": a3 });
var _forTrack0 = ($index, $item) => $item.id;
function CommandeVenteDetail_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "p-skeleton", 2);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275element(4, "p-skeleton", 3)(5, "p-skeleton", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275element(7, "p-skeleton", 6);
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275element(9, "p-skeleton", 8)(10, "p-skeleton", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p-skeleton", 10)(12, "p-skeleton", 11)(13, "p-skeleton", 12);
    \u0275\u0275elementEnd()();
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 57);
    \u0275\u0275listener("click", function CommandeVenteDetail_Conditional_2_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goFacture());
    });
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4, "Voir la facture");
    \u0275\u0275elementEnd()()();
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.commande.vehicule.photo_url, \u0275\u0275sanitizeUrl)("alt", ctx_r1.commande.vehicule.nom_vehicule);
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c0, ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "surface", ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "orange", ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "green", ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "red"));
    \u0275\u0275advance();
    \u0275\u0275classMap("text-xs pi " + ctx_r1.getStatutIcon(ctx_r1.commande.facture.statut_facture) + " " + (ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "surface" ? "text-surface-600 dark:text-surface-300" : ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "orange" ? "text-orange-700 dark:text-orange-300" : ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "green" ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(10, _c1, ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "surface", ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "orange", ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "green", ctx_r1.getStatutColor(ctx_r1.commande.facture.statut_facture) === "red"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatutLabel(ctx_r1.commande.facture.statut_facture));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_79_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const prop_r4 = \u0275\u0275readContextLet(78);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, prop_r4.phone));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2, "Proprietaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54)(4, "div", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CommandeVenteDetail_Conditional_2_Conditional_79_Conditional_6_Template, 3, 3, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const prop_r4 = \u0275\u0275readContextLet(78);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", prop_r4.prenom, " ", prop_r4.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(prop_r4.phone ? 6 : -1);
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_81_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const lv_r5 = \u0275\u0275readContextLet(80);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, lv_r5.phone));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2, "Livreur principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54)(4, "div", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CommandeVenteDetail_Conditional_2_Conditional_81_Conditional_6_Template, 3, 3, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const lv_r5 = \u0275\u0275readContextLet(80);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", lv_r5.prenom, " ", lv_r5.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(lv_r5.phone ? 6 : -1);
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_82_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 52)(2, "div", 64);
    \u0275\u0275element(3, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 67);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "span", 61);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ligne_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ligne_r6.produit == null ? null : ligne_r6.produit.nom) ?? "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Qte : ", ligne_r6.qte);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ligne_r6.total_ligne));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "h3", 40);
    \u0275\u0275text(3, "Produits");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 48);
    \u0275\u0275repeaterCreate(5, CommandeVenteDetail_Conditional_2_Conditional_82_For_6_Template, 11, 3, "div", 49, _forTrack0);
    \u0275\u0275element(7, "div", 63);
    \u0275\u0275elementStart(8, "div", 49)(9, "span", 31);
    \u0275\u0275text(10, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 61);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.commande.lignes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.commande.total_commande));
  }
}
function CommandeVenteDetail_Conditional_2_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function CommandeVenteDetail_Conditional_2_Conditional_88_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goFacture());
    });
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275elementStart(2, "span", 59);
    \u0275\u0275text(3, "Voir la facture");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function CommandeVenteDetail_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 13)(2, "div", 14)(3, "button", 15);
    \u0275\u0275listener("click", function CommandeVenteDetail_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(4, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "h1", 18);
    \u0275\u0275text(7, "Commande Vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, CommandeVenteDetail_Conditional_2_Conditional_10_Template, 5, 0, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20)(12, "div", 21)(13, "div", 22);
    \u0275\u0275conditionalCreate(14, CommandeVenteDetail_Conditional_2_Conditional_14_Template, 1, 2, "img", 23)(15, CommandeVenteDetail_Conditional_2_Conditional_15_Template, 2, 0, "div", 24);
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 25);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 26)(22, "div", 27)(23, "div", 28)(24, "span", 29);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 30)(27, "span", 31);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 27);
    \u0275\u0275conditionalCreate(30, CommandeVenteDetail_Conditional_2_Conditional_30_Template, 4, 15, "div", 32)(31, CommandeVenteDetail_Conditional_2_Conditional_31_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 30)(33, "span", 34);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 35)(36, "div", 36)(37, "div", 37)(38, "div", 38)(39, "div", 39)(40, "h3", 40);
    \u0275\u0275text(41, "Detail de la commande");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 41)(43, "div", 42)(44, "span", 43);
    \u0275\u0275text(45, "Total commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 44);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 42)(49, "span", 43);
    \u0275\u0275text(50, "Encaisse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 44);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 42)(54, "span", 43);
    \u0275\u0275text(55, "Restant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 44);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 42)(59, "span", 43);
    \u0275\u0275text(60, "Date de creation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 44);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 38)(64, "div", 39)(65, "h3", 40);
    \u0275\u0275text(66, "Vehicules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 41)(68, "div", 42)(69, "span", 43);
    \u0275\u0275text(70, "Nom du vehicule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 44);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 42)(74, "span", 43);
    \u0275\u0275text(75, "Immatriculation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 45);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(78);
    \u0275\u0275conditionalCreate(79, CommandeVenteDetail_Conditional_2_Conditional_79_Template, 7, 3, "div", 42);
    \u0275\u0275declareLet(80);
    \u0275\u0275conditionalCreate(81, CommandeVenteDetail_Conditional_2_Conditional_81_Template, 7, 3, "div", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(82, CommandeVenteDetail_Conditional_2_Conditional_82_Template, 13, 1, "div", 38);
    \u0275\u0275elementStart(83, "div", 37)(84, "div", 38)(85, "div", 46)(86, "h3", 40);
    \u0275\u0275text(87, "Resume encaissement");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(88, CommandeVenteDetail_Conditional_2_Conditional_88_Template, 4, 2, "button", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 48)(90, "div", 49)(91, "span", 50);
    \u0275\u0275text(92, "Total encaisse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 51);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 49)(96, "span", 50);
    \u0275\u0275text(97, "Restant du");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "span", 51);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 49)(101, "span", 50);
    \u0275\u0275text(102, "Nombre de versements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span", 51);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 49)(106, "span", 50);
    \u0275\u0275text(107, "Dernier paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span", 51);
    \u0275\u0275text(109);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(110, "div", 38)(111, "div", 39)(112, "h3", 40);
    \u0275\u0275text(113, "Jalons");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 48)(115, "div", 52);
    \u0275\u0275element(116, "i", 53);
    \u0275\u0275elementStart(117, "div", 54)(118, "div", 55);
    \u0275\u0275text(119, "Commande cree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 56);
    \u0275\u0275text(121);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(122, "div", 52);
    \u0275\u0275element(123, "i");
    \u0275\u0275elementStart(124, "div", 54)(125, "div", 55);
    \u0275\u0275text(126, "Facture generee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 56);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(129, "div", 52);
    \u0275\u0275element(130, "i");
    \u0275\u0275elementStart(131, "div", 54)(132, "div", 55);
    \u0275\u0275text(133, "Premier encaissement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 56);
    \u0275\u0275text(135);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(136, "div", 52);
    \u0275\u0275element(137, "i");
    \u0275\u0275elementStart(138, "div", 54)(139, "div", 55);
    \u0275\u0275text(140, "Solde paye");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "div", 56);
    \u0275\u0275text(142);
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" Total = ", ctx_r1.formatMontant(ctx_r1.commande.total_commande), " \xA0|\xA0 Encaisse = ", ctx_r1.formatMontant(ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.montant_encaisse), " \xA0|\xA0 Restant = ", ctx_r1.formatMontant(ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.montant_restant), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.commande == null ? null : ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.id) ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r1.commande.vehicule == null ? null : ctx_r1.commande.vehicule.photo_url) ? 14 : 15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.commande.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.commande.vehicule == null ? null : ctx_r1.commande.vehicule.nom_vehicule) ?? "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.reference) ?? "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.commande.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.commande.facture ? 30 : 31);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.commande.total_commande));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.commande.total_commande));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.montant_encaisse));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.montant_restant));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.commande.created_at));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((ctx_r1.commande.vehicule == null ? null : ctx_r1.commande.vehicule.nom_vehicule) ?? "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.commande.vehicule == null ? null : ctx_r1.commande.vehicule.immatriculation) ?? "-");
    \u0275\u0275advance();
    const prop_r8 = \u0275\u0275storeLet(ctx_r1.commande.vehicule == null ? null : ctx_r1.commande.vehicule.proprietaire);
    \u0275\u0275advance();
    \u0275\u0275conditional(prop_r8 ? 79 : -1);
    \u0275\u0275advance();
    const lv_r9 = \u0275\u0275storeLet((ctx_r1.commande.vehicule == null ? null : ctx_r1.commande.vehicule.livreurPrincipal) ?? (ctx_r1.commande.vehicule == null ? null : ctx_r1.commande.vehicule.livreur_principal));
    \u0275\u0275advance();
    \u0275\u0275conditional(lv_r9 ? 81 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.commande.lignes && ctx_r1.commande.lignes.length > 0 ? 82 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional((ctx_r1.commande == null ? null : ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.id) ? 88 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.montant_encaisse));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.montant_restant));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.encaissementsCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.lastEncaissementDate));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.commande.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275classMap((ctx_r1.commande == null ? null : ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.id) ? "pi pi-check-circle text-green-600" : "pi pi-circle text-surface-400");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.commande == null ? null : ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.id) ? ctx_r1.formatDate(ctx_r1.commande.created_at) : "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.encaissementsCount > 0 ? "pi pi-check-circle text-green-600" : "pi pi-circle text-surface-400");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.firstEncaissementDate));
    \u0275\u0275advance(2);
    \u0275\u0275classMap((ctx_r1.commande == null ? null : ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.statut_facture) === "payee" ? "pi pi-check-circle text-green-600" : "pi pi-circle text-surface-400");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.commande == null ? null : ctx_r1.commande.facture == null ? null : ctx_r1.commande.facture.statut_facture) === "payee" ? ctx_r1.formatDate(ctx_r1.lastEncaissementDate) : "-");
  }
}
var CommandeVenteDetail = class _CommandeVenteDetail {
  route;
  router;
  commandeService;
  messageService;
  commande = null;
  loading = false;
  constructor(route, router, commandeService, messageService) {
    this.route = route;
    this.router = router;
    this.commandeService = commandeService;
    this.messageService = messageService;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.router.navigate(["/notfound"]);
      return;
    }
    this.loadCommande(id);
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
          detail: err.status === 404 ? "Cette commande n'existe pas ou a ete supprimee." : "Impossible de charger la commande.",
          life: 4e3
        });
        setTimeout(() => this.router.navigate(["/ventes/commandes"]), 2500);
      }
    });
  }
  get encaissements() {
    return this.commande?.facture?.encaissements ?? [];
  }
  get encaissementsCount() {
    return this.encaissements.length;
  }
  get firstEncaissementDate() {
    if (!this.encaissements.length)
      return void 0;
    const sorted = [...this.encaissements].sort((a, b) => new Date(a.date_encaissement).getTime() - new Date(b.date_encaissement).getTime());
    return sorted[0]?.date_encaissement;
  }
  get lastEncaissementDate() {
    if (!this.encaissements.length)
      return void 0;
    const sorted = [...this.encaissements].sort((a, b) => new Date(a.date_encaissement).getTime() - new Date(b.date_encaissement).getTime());
    return sorted[sorted.length - 1]?.date_encaissement;
  }
  goBack() {
    this.router.navigate(["/ventes/commandes"]);
  }
  goFacture() {
    if (this.commande?.facture?.id) {
      this.router.navigate(["/ventes/factures", this.commande.facture.id]);
    }
  }
  getStatutLabel(s) {
    return STATUT_FACTURE_LABELS[s] ?? s;
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
  static \u0275fac = function CommandeVenteDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommandeVenteDetail)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CommandeVenteService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommandeVenteDetail, selectors: [["app-commande-vente-detail"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 3, vars: 2, consts: [[1, "bg-surface-0", "dark:bg-surface-900", "p-12", "md:p-20"], [1, "flex", "items-center", "gap-3", "mb-8"], ["shape", "circle", "size", "2.5rem"], ["width", "12rem", "height", "1.5rem", "styleClass", "mb-1"], ["width", "8rem", "height", "1rem"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "p-6", "flex", "gap-6"], ["shape", "circle", "size", "3rem"], [1, "flex-1", "flex", "flex-col", "gap-3"], ["width", "10rem", "height", "1.25rem"], ["width", "7rem", "height", "1rem"], ["width", "6rem", "height", "1.5rem"], ["width", "8rem", "height", "1.5rem"], ["width", "5rem", "height", "1.5rem"], [1, "flex", "flex-col", "lg:flex-row", "md:justify-between", "items-start", "lg:items-end", "gap-4", "mb-8"], [1, "flex", "items-start", "gap-3", "flex-1"], ["pButton", "", 1, "w-10", "h-10", "flex-shrink-0", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-arrow-left"], [1, "flex", "flex-col", "gap-1"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "font-semibold", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-base", "leading-tight"], [1, "bg-surface-0", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden", "transition-all", "duration-300"], [1, "p-6", "flex", "flex-col", "lg:flex-row", "justify-start", "lg:items-center", "gap-6"], [1, "flex", "items-center", "gap-4", "flex-1"], [1, "w-12", "h-12", "rounded", "object-cover", "flex-shrink-0", 3, "src", "alt"], [1, "w-12", "h-12", "rounded", "bg-surface-100", "dark:bg-surface-800", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "text-surface-900", "dark:text-surface-0", "text-lg", "font-medium", "leading-tight"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "gap-3", "sm:gap-4", "flex-1"], [1, "flex", "flex-col", "items-start", "sm:items-center", "flex-1", "min-w-0"], [1, "px-2", "py-1", "bg-surface-100", "dark:bg-surface-800", "rounded-md"], [1, "text-surface-600", "dark:text-surface-300", "text-sm", "font-bold", "font-mono"], [1, "flex", "flex-col", "items-start", "sm:items-center", "flex-1"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "leading-tight"], [3, "ngClass"], [1, "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "font-semibold", "leading-tight"], [1, "overflow-hidden"], [1, "flex", "flex-col", "gap-6", "p-6", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden"], [1, "p-4", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold", "leading-tight"], [1, "p-6", "flex", "flex-col", "gap-5"], [1, "flex", "gap-2"], [1, "w-40", "text-surface-700", "dark:text-surface-300", "text-base", "leading-tight"], [1, "flex-1", "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "flex-1", "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "font-mono", "leading-tight"], [1, "p-4", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700", "flex", "justify-between", "items-center"], ["pButton", "", "severity", "primary", 1, "h-9", 3, "text", "rounded"], [1, "p-6", "flex", "flex-col", "gap-4"], [1, "flex", "justify-between", "items-center"], [1, "text-surface-700", "dark:text-surface-300", "text-base"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold"], [1, "flex", "items-center", "gap-3"], [1, "pi", "pi-check-circle", "text-green-600"], [1, "flex-1"], [1, "text-surface-900", "dark:text-surface-0", "text-sm", "font-medium"], [1, "text-surface-500", "dark:text-surface-400", "text-xs"], ["pButton", "", "severity", "primary", 3, "click"], ["pButtonIcon", "", 1, "pi", "pi-file-invoice"], ["pButtonLabel", ""], [1, "pi", "pi-car", "text-surface-400", "text-xl"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "mt-0.5"], [1, "h-px", "bg-surface-200", "dark:bg-surface-700"], [1, "w-9", "h-9", "rounded-full", "bg-surface-100", "dark:bg-surface-800", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "pi", "pi-box", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "font-medium", "leading-tight"], [1, "text-surface-400", "dark:text-surface-500", "text-sm", "mt-0.5"], ["pButton", "", "severity", "primary", 1, "h-9", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-eye"]], template: function CommandeVenteDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275conditionalCreate(1, CommandeVenteDetail_Conditional_1_Template, 14, 0, "div", 0);
      \u0275\u0275conditionalCreate(2, CommandeVenteDetail_Conditional_2_Template, 143, 39, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.commande ? 2 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ButtonModule, ButtonDirective, ButtonLabel, ButtonIcon, SkeletonModule, Skeleton, ToastModule, Toast, PhoneFormatPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandeVenteDetail, [{
    type: Component,
    args: [{ selector: "app-commande-vente-detail", standalone: true, imports: [CommonModule, ButtonModule, SkeletonModule, ToastModule, PhoneFormatPipe], providers: [MessageService], template: `<p-toast />\r
@if (loading) {\r
    <div class="bg-surface-0 dark:bg-surface-900 p-12 md:p-20">\r
        <div class="flex items-center gap-3 mb-8">\r
            <p-skeleton shape="circle" size="2.5rem" />\r
            <div>\r
                <p-skeleton width="12rem" height="1.5rem" styleClass="mb-1" />\r
                <p-skeleton width="8rem" height="1rem" />\r
            </div>\r
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
@if (!loading && commande) {\r
    <div class="bg-surface-0 dark:bg-surface-900 p-12 md:p-20">\r
        <div class="flex flex-col lg:flex-row md:justify-between items-start lg:items-end gap-4 mb-8">\r
            <div class="flex items-start gap-3 flex-1">\r
                <button pButton [text]="true" [rounded]="true" class="w-10 h-10 flex-shrink-0" (click)="goBack()">\r
                    <i pButtonIcon class="pi pi-arrow-left"></i>\r
                </button>\r
                <div class="flex flex-col gap-1">\r
                    <h1 class="text-surface-900 dark:text-surface-0 text-2xl font-semibold leading-tight">Commande Vente</h1>\r
                    <p class="text-surface-500 dark:text-surface-400 text-base leading-tight">\r
                        Total = {{ formatMontant(commande.total_commande) }} &nbsp;|&nbsp;\r
                        Encaisse = {{ formatMontant(commande.facture?.montant_encaisse) }} &nbsp;|&nbsp;\r
                        Restant = {{ formatMontant(commande.facture?.montant_restant) }}\r
                    </p>\r
                </div>\r
            </div>\r
\r
            @if (commande?.facture?.id) {\r
                <div>\r
                    <button pButton severity="primary" (click)="goFacture()">\r
                        <i pButtonIcon class="pi pi-file-invoice"></i>\r
                        <span pButtonLabel>Voir la facture</span>\r
                    </button>\r
                </div>\r
            }\r
        </div>\r
        <div class="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden transition-all duration-300">\r
            <div class="p-6 flex flex-col lg:flex-row justify-start lg:items-center gap-6">\r
                <div class="flex items-center gap-4 flex-1">\r
                    @if (commande.vehicule?.photo_url) {\r
                        <img class="w-12 h-12 rounded object-cover flex-shrink-0" [src]="commande.vehicule!.photo_url" [alt]="commande.vehicule!.nom_vehicule" />\r
                    } @else {\r
                        <div class="w-12 h-12 rounded bg-surface-100 dark:bg-surface-800 flex items-center justify-center flex-shrink-0">\r
                            <i class="pi pi-car text-surface-400 text-xl"></i>\r
                        </div>\r
                    }\r
                    <div class="flex flex-col gap-1">\r
                        <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">{{ commande.reference }}</div>\r
                        <div class="text-surface-500 dark:text-surface-400 text-base leading-tight">{{ commande.vehicule?.nom_vehicule ?? '-' }}</div>\r
                    </div>\r
                </div>\r
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-1">\r
                    <div class="flex flex-col items-start sm:items-center flex-1 min-w-0">\r
                        <div class="px-2 py-1 bg-surface-100 dark:bg-surface-800 rounded-md">\r
                            <span class="text-surface-600 dark:text-surface-300 text-sm font-bold font-mono">\r
                                {{ commande.facture?.reference ?? '-' }}\r
                            </span>\r
                        </div>\r
                    </div>\r
                    <div class="flex flex-col items-start sm:items-center flex-1">\r
                        <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">{{ formatDate(commande.created_at) }}</span>\r
                    </div>\r
                    <div class="flex flex-col items-start sm:items-center flex-1 min-w-0">\r
                        @if (commande.facture) {\r
                            <div\r
                                [ngClass]="{\r
                                    'px-2 py-1 rounded-md flex items-center gap-1': true,\r
                                    'bg-surface-100 dark:bg-surface-800': getStatutColor(commande.facture.statut_facture) === 'surface',\r
                                    'bg-orange-100 dark:bg-orange-900': getStatutColor(commande.facture.statut_facture) === 'orange',\r
                                    'bg-green-100 dark:bg-green-900': getStatutColor(commande.facture.statut_facture) === 'green',\r
                                    'bg-red-100 dark:bg-red-900': getStatutColor(commande.facture.statut_facture) === 'red'\r
                                }"\r
                            >\r
                                <i\r
                                    [class]="\r
                                        'text-xs pi ' +\r
                                        getStatutIcon(commande.facture.statut_facture) + ' ' +\r
                                        (getStatutColor(commande.facture.statut_facture) === 'surface'\r
                                            ? 'text-surface-600 dark:text-surface-300'\r
                                            : getStatutColor(commande.facture.statut_facture) === 'orange'\r
                                              ? 'text-orange-700 dark:text-orange-300'\r
                                              : getStatutColor(commande.facture.statut_facture) === 'green'\r
                                                ? 'text-green-700 dark:text-green-300'\r
                                                : 'text-red-700 dark:text-red-300')\r
                                    "\r
                                ></i>\r
                                <span\r
                                    [ngClass]="{\r
                                        'text-sm font-bold': true,\r
                                        'text-surface-600 dark:text-surface-300': getStatutColor(commande.facture.statut_facture) === 'surface',\r
                                        'text-orange-700 dark:text-orange-300': getStatutColor(commande.facture.statut_facture) === 'orange',\r
                                        'text-green-700 dark:text-green-300': getStatutColor(commande.facture.statut_facture) === 'green',\r
                                        'text-red-700 dark:text-red-300': getStatutColor(commande.facture.statut_facture) === 'red'\r
                                    }"\r
                                >{{ getStatutLabel(commande.facture.statut_facture) }}</span>\r
                            </div>\r
                        } @else {\r
                            <span class="text-surface-400 dark:text-surface-500 text-sm">-</span>\r
                        }\r
                    </div>\r
                    <div class="flex flex-col items-start sm:items-center flex-1">\r
                        <span class="text-surface-700 dark:text-surface-300 text-base font-semibold leading-tight">{{ formatMontant(commande.total_commande) }}</span>\r
                    </div>\r
\r
                </div>\r
            </div>\r
            <div class="overflow-hidden">\r
                <div class="flex flex-col gap-6 p-6 border-t border-surface-200 dark:border-surface-700">\r
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Detail de la commande</h3>\r
                            </div>\r
                            <div class="p-6 flex flex-col gap-5">\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Total commande</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(commande.total_commande) }}</span>\r
                                </div>\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Encaisse</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(commande.facture?.montant_encaisse) }}</span>\r
                                </div>\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Restant</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(commande.facture?.montant_restant) }}</span>\r
                                </div>\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Date de creation</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatDate(commande.created_at) }}</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Vehicules</h3>\r
                            </div>\r
                            <div class="p-6 flex flex-col gap-5">\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Nom du vehicule</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ commande.vehicule?.nom_vehicule ?? '-' }}</span>\r
                                </div>\r
                                <div class="flex gap-2">\r
                                    <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Immatriculation</span>\r
                                    <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium font-mono leading-tight">{{ commande.vehicule?.immatriculation ?? '-' }}</span>\r
                                </div>\r
                                @let prop = commande.vehicule?.proprietaire;\r
                                @if (prop) {\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Proprietaire</span>\r
                                        <div class="flex-1">\r
                                            <div class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ prop.prenom }} {{ prop.nom }}</div>\r
                                            @if (prop.phone) {\r
                                                <div class="text-surface-500 dark:text-surface-400 text-sm mt-0.5">{{ prop.phone | phoneFormat }}</div>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                }\r
                                @let lv = commande.vehicule?.livreurPrincipal ?? commande.vehicule?.livreur_principal;\r
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
                    @if (commande.lignes && commande.lignes.length > 0) {\r
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Produits</h3>\r
                            </div>\r
                            <div class="p-6 flex flex-col gap-4">\r
                                @for (ligne of commande.lignes; track ligne.id) {\r
                                    <div class="flex justify-between items-center">\r
                                        <div class="flex items-center gap-3">\r
                                            <div class="w-9 h-9 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center flex-shrink-0">\r
                                                <i class="pi pi-box text-sm text-surface-500 dark:text-surface-400"></i>\r
                                            </div>\r
                                            <div>\r
                                                <div class="text-surface-700 dark:text-surface-300 text-base font-medium leading-tight">{{ ligne.produit?.nom ?? '-' }}</div>\r
                                                <div class="text-surface-400 dark:text-surface-500 text-sm mt-0.5">Qte : {{ ligne.qte }}</div>\r
                                            </div>\r
                                        </div>\r
                                        <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(ligne.total_ligne) }}</span>\r
                                    </div>\r
                                }\r
                                <div class="h-px bg-surface-200 dark:bg-surface-700"></div>\r
                                <div class="flex justify-between items-center">\r
                                    <span class="text-surface-700 dark:text-surface-300 text-base leading-tight">Total</span>\r
                                    <span class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatMontant(commande.total_commande) }}</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    }\r
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 flex justify-between items-center">\r
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Resume encaissement</h3>\r
                                @if (commande?.facture?.id) {\r
                                    <button pButton [text]="true" [rounded]="true" severity="primary" class="h-9" (click)="goFacture()">\r
                                        <i pButtonIcon class="pi pi-eye"></i>\r
                                        <span pButtonLabel>Voir la facture</span>\r
                                    </button>\r
                                }\r
                            </div>\r
                            <div class="p-6 flex flex-col gap-4">\r
                                <div class="flex justify-between items-center">\r
                                    <span class="text-surface-700 dark:text-surface-300 text-base">Total encaisse</span>\r
                                    <span class="text-surface-900 dark:text-surface-0 text-base font-semibold">{{ formatMontant(commande.facture?.montant_encaisse) }}</span>\r
                                </div>\r
                                <div class="flex justify-between items-center">\r
                                    <span class="text-surface-700 dark:text-surface-300 text-base">Restant du</span>\r
                                    <span class="text-surface-900 dark:text-surface-0 text-base font-semibold">{{ formatMontant(commande.facture?.montant_restant) }}</span>\r
                                </div>\r
                                <div class="flex justify-between items-center">\r
                                    <span class="text-surface-700 dark:text-surface-300 text-base">Nombre de versements</span>\r
                                    <span class="text-surface-900 dark:text-surface-0 text-base font-semibold">{{ encaissementsCount }}</span>\r
                                </div>\r
                                <div class="flex justify-between items-center">\r
                                    <span class="text-surface-700 dark:text-surface-300 text-base">Dernier paiement</span>\r
                                    <span class="text-surface-900 dark:text-surface-0 text-base font-semibold">{{ formatDate(lastEncaissementDate) }}</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                            <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
                                <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Jalons</h3>\r
                            </div>\r
                            <div class="p-6 flex flex-col gap-4">\r
                                <div class="flex items-center gap-3">\r
                                    <i class="pi pi-check-circle text-green-600"></i>\r
                                    <div class="flex-1">\r
                                        <div class="text-surface-900 dark:text-surface-0 text-sm font-medium">Commande cree</div>\r
                                        <div class="text-surface-500 dark:text-surface-400 text-xs">{{ formatDate(commande.created_at) }}</div>\r
                                    </div>\r
                                </div>\r
                                <div class="flex items-center gap-3">\r
                                    <i [class]="commande?.facture?.id ? 'pi pi-check-circle text-green-600' : 'pi pi-circle text-surface-400'"></i>\r
                                    <div class="flex-1">\r
                                        <div class="text-surface-900 dark:text-surface-0 text-sm font-medium">Facture generee</div>\r
                                        <div class="text-surface-500 dark:text-surface-400 text-xs">{{ commande?.facture?.id ? formatDate(commande.created_at) : '-' }}</div>\r
                                    </div>\r
                                </div>\r
                                <div class="flex items-center gap-3">\r
                                    <i [class]="encaissementsCount > 0 ? 'pi pi-check-circle text-green-600' : 'pi pi-circle text-surface-400'"></i>\r
                                    <div class="flex-1">\r
                                        <div class="text-surface-900 dark:text-surface-0 text-sm font-medium">Premier encaissement</div>\r
                                        <div class="text-surface-500 dark:text-surface-400 text-xs">{{ formatDate(firstEncaissementDate) }}</div>\r
                                    </div>\r
                                </div>\r
                                <div class="flex items-center gap-3">\r
                                    <i [class]="commande?.facture?.statut_facture === 'payee' ? 'pi pi-check-circle text-green-600' : 'pi pi-circle text-surface-400'"></i>\r
                                    <div class="flex-1">\r
                                        <div class="text-surface-900 dark:text-surface-0 text-sm font-medium">Solde paye</div>\r
                                        <div class="text-surface-500 dark:text-surface-400 text-xs">{{ commande?.facture?.statut_facture === 'payee' ? formatDate(lastEncaissementDate) : '-' }}</div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
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
` }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: CommandeVenteService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommandeVenteDetail, { className: "CommandeVenteDetail", filePath: "src/app/pages/ventes/commande-vente-detail/commande-vente-detail.ts", lineNumber: 25 });
})();
export {
  CommandeVenteDetail
};
//# sourceMappingURL=chunk-DF374RXM.js.map
